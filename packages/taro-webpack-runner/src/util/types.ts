import { IH5Config, IProjectBaseConfig } from '@tarojs/taro/types/compile'
import * as webpack from 'webpack'

type FunctionLikeCustomWebpackConfig = (webpackConfig: webpack.Configuration, webpack) => webpack.Configuration

export type CustomWebpackConfig = FunctionLikeCustomWebpackConfig | webpack.Configuration
export interface Option {
  [key: string]: any
}

export interface Chain {
  [key: string]: any
}

export type Func = (...args: any[]) => void

export interface BuildConfig extends IProjectBaseConfig, IH5Config {
  enableSourceMap?: boolean
  entryFileName?: string
  entry?: webpack.Entry
  isWatch: boolean
  port?: number
  modifyWebpackChain: Func
  modifyMiniConfigs: Func
  modifyBuildAssets: Func
  onWebpackChainReady: Func
  onBuildFinish: Func
}
