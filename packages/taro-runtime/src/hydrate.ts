import { hooks, Shortcuts, toCamelCase } from '@tarojs/shared'

import {
  CATCH_VIEW,
  CATCHMOVE,
  CLASS,
  ID,
  PURE_VIEW,
  STYLE,
  VIEW
} from './constants'
import type { TaroElement } from './dom/element'
import type { TaroText } from './dom/text'
import type { MiniData, MiniElementData } from './interface'
import { isComment, isHasExtractProp, isText } from './utils'

/**
 * React also has a fancy function's name for this: `hydrate()`.
 * You may have been heard `hydrate` as a SSR-related function,
 * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
 * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
 */
export function hydrate (node: TaroElement | TaroText): MiniData {
  const nodeName = node.nodeName

  if (isText(node)) {
    return {
      [Shortcuts.Text]: node.nodeValue,
      [Shortcuts.NodeName]: nodeName
    }
  }

  const data: MiniElementData = {
    [Shortcuts.NodeName]: nodeName,
    sid: node.sid
  }
  const { props } = node
  const SPECIAL_NODES = hooks.call('getSpecialNodes')!

  if (node.uid !== node.sid) {
    data.uid = node.uid
  }

  if (!node.isAnyEventBinded() && SPECIAL_NODES.indexOf(nodeName) > -1) {
    data[Shortcuts.NodeName] = `static-${nodeName}`
    if (nodeName === VIEW && !isHasExtractProp(node)) {
      data[Shortcuts.NodeName] = PURE_VIEW
    }
  }

  for (const prop in props) {
    const propInCamelCase = toCamelCase(prop)
    if (
      !prop.startsWith('data-') && // 在 node.dataset 的数据
      prop !== CLASS &&
      prop !== STYLE &&
      prop !== ID &&
      propInCamelCase !== CATCHMOVE
    ) {
      data[propInCamelCase] = props[prop]
    }
    if (nodeName === VIEW && propInCamelCase === CATCHMOVE && props[prop] !== false) {
      data[Shortcuts.NodeName] = CATCH_VIEW
    }
  }

  let { childNodes } = node

  // 过滤 comment 节点
  childNodes = childNodes.filter(node => !isComment(node))

  if (childNodes.length > 0) {
    data[Shortcuts.Childnodes] = childNodes.map(hydrate)
  } else {
    data[Shortcuts.Childnodes] = []
  }

  if (node.className !== '') {
    data[Shortcuts.Class] = node.className
  }

  if (node.cssText !== '' && nodeName !== 'swiper-item') {
    data[Shortcuts.Style] = node.cssText
  }

  hooks.call('modifyHydrateData', data)

  return data
}
