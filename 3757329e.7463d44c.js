(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{1735:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},1736:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},1737:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),j=d(a),u=n,s=j["".concat(l,".").concat(u)]||j[u]||O[u]||c;return a?r.a.createElement(s,o(o({ref:t},b),{},{components:a})):r.a.createElement(s,o({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=j;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<c;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},1738:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},1739:function(e,t,a){"use strict";var n=a(0),r=a(1740);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1740:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},1741:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1739),l=a(1738),o=a(50),i=a.n(o),b=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.children,O=e.defaultValue,j=e.values,u=e.groupId,s=e.className,p=Object(c.a)(),m=p.tabGroupChoices,g=p.setTabGroupChoices,f=Object(n.useState)(O),y=f[0],h=f[1];if(null!=u){var N=m[u];null!=N&&N!==y&&j.some((function(e){return e.value===N}))&&h(N)}var v=function(e){h(e),null!=u&&g(u,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},s)},j.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(n.cloneElement)(o.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},o.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},1742:function(e,t,a){"use strict";var n=a(1735),r=a(0),c=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},439:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return j}));var n=a(1735),r=a(1736),c=(a(0),a(1737)),l=a(1741),o=a(1742),i={title:"Editor",sidebar_label:"Editor"},b={unversionedId:"components/forms/editor",id:"version-3.x/components/forms/editor",isDocsHomePage:!1,title:"Editor",description:"\u5bcc\u6587\u672c\u7f16\u8f91\u5668\uff0c\u53ef\u4ee5\u5bf9\u56fe\u7247\u3001\u6587\u5b57\u8fdb\u884c\u7f16\u8f91\u3002",source:"@site/versioned_docs/version-3.x/components/forms/editor.md",slug:"/components/forms/editor",permalink:"/taro/docs/components/forms/editor",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/forms/editor.md",version:"3.x",sidebar_label:"Editor",sidebar:"version-3.x/components",previous:{title:"Checkbox",permalink:"/taro/docs/components/forms/checkbox"},next:{title:"Form",permalink:"/taro/docs/components/forms/form"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"EditorProps",id:"editorprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"editorEventDetail",id:"editoreventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],O={rightToc:d};function j(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"\u5bcc\u6587\u672c\u7f16\u8f91\u5668\uff0c\u53ef\u4ee5\u5bf9\u56fe\u7247\u3001\u6587\u5b57\u8fdb\u884c\u7f16\u8f91\u3002"),Object(c.a)("p",null,"\u7f16\u8f91\u5668\u5bfc\u51fa\u5185\u5bb9\u652f\u6301\u5e26\u6807\u7b7e\u7684 html\u548c\u7eaf\u6587\u672c\u7684 text\uff0c\u7f16\u8f91\u5668\u5185\u90e8\u91c7\u7528 delta \u683c\u5f0f\u8fdb\u884c\u5b58\u50a8\u3002"),Object(c.a)("p",null,"\u901a\u8fc7 setContents \u63a5\u53e3\u8bbe\u7f6e\u5185\u5bb9\u65f6\uff0c\u89e3\u6790\u63d2\u5165\u7684 html \u53ef\u80fd\u4f1a\u7531\u4e8e\u4e00\u4e9b\u975e\u6cd5\u6807\u7b7e\u5bfc\u81f4\u89e3\u6790\u9519\u8bef\uff0c\u5efa\u8bae\u5f00\u53d1\u8005\u5728\u5c0f\u7a0b\u5e8f\u5185\u4f7f\u7528\u65f6\u901a\u8fc7 delta \u8fdb\u884c\u63d2\u5165\u3002"),Object(c.a)("p",null,"\u5bcc\u6587\u672c\u7ec4\u4ef6\u5185\u90e8\u5f15\u5165\u4e86\u4e00\u4e9b\u57fa\u672c\u7684\u6837\u5f0f\u4f7f\u5f97\u5185\u5bb9\u53ef\u4ee5\u6b63\u786e\u7684\u5c55\u793a\uff0c\u5f00\u53d1\u65f6\u53ef\u4ee5\u8fdb\u884c\u8986\u76d6\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728\u5176\u5b83\u7ec4\u4ef6\u6216\u73af\u5883\u4e2d\u4f7f\u7528\u5bcc\u6587\u672c\u7ec4\u4ef6\u5bfc\u51fa\u7684 html \u65f6\uff0c\u9700\u8981\u989d\u5916\u5f15\u5165 \u8fd9\u6bb5\u6837\u5f0f\uff0c\u5e76\u7ef4\u62a4 ",Object(c.a)("inlineCode",{parentName:"p"},"<ql-container><ql-editor></ql-editor></ql-container>")," \u7684\u7ed3\u6784\u3002"),Object(c.a)("p",null,"\u56fe\u7247\u63a7\u4ef6\u4ec5\u521d\u59cb\u5316\u65f6\u8bbe\u7f6e\u6709\u6548\u3002"),Object(c.a)("p",null,"*\u7f16\u8f91\u5668\u5185\u652f\u6301\u90e8\u5206 HTML \u6807\u7b7e\u548c\u5185\u8054\u6837\u5f0f\uff0c\u4e0d\u652f\u6301 ",Object(c.a)("strong",{parentName:"p"},"class")," \u548c ",Object(c.a)("strong",{parentName:"p"},"id*")),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/editor.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<EditorProps>\n")),Object(c.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.a)(l.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(c.a)(o.a,{value:"React",mdxType:"TabItem"},Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  state = {\n    placeholder: '\u6765\uff0c\u8f93\u5165\u9694\u58c1\u7684\u540d\u5b57\u8bd5\u8bd5...'\n  }\n\n  editorReady = e => {\n    Taro.createSelectorQuery().select('#editor').context((res) => {\n      this.editorCtx = res.context\n    }).exec()\n  }\n\n  undo = e => {\n    this.editorCtx.undo()\n  }\n\n  render () {\n    return (\n      <View>\n        <Editor id='editor' className='editor' placeholder={this.state.placeholder} onReady={this.editorReady}></Editor>\n        <Button type='warn' onClick={this.undo}>\u64a4\u9500</Button>\n      </View>\n    )\n  }\n}\n"))),Object(c.a)(o.a,{value:"Vue",mdxType:"TabItem"},Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="container">\n    <editor id="editor" class="editor" :placeholder="placeholder" @ready="editorReady"></editor>\n    <button type="warn" @tap="undo">\u64a4\u9500</button>\n  </view>\n</template>\n\n<script>\n  import Taro from \'@tarojs/taro\'\n  export default {\n    data() {\n      return {\n        placeholder: \'\u6765\uff0c\u8f93\u5165\u9694\u58c1\u7684\u540d\u5b57\u8bd5\u8bd5...\'\n      }\n    },\n    methods: {\n      editorReady() {\n        Taro.createSelectorQuery().select(\'#editor\').context((res) => {\n          this.editorCtx = res.context\n        }).exec()\n      },\n      undo() {\n        this.editorCtx.undo()\n      }\n    }\n  }\n<\/script>\n')))),Object(c.a)("h2",{id:"editorprops"},"EditorProps"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(c.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"readOnly"),Object(c.a)("td",null,Object(c.a)("code",null,"boolean")),Object(c.a)("td",{style:{textAlign:"center"}},Object(c.a)("code",null,"false")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u8bbe\u7f6e\u7f16\u8f91\u5668\u4e3a\u53ea\u8bfb")),Object(c.a)("tr",null,Object(c.a)("td",null,"placeholder"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u63d0\u793a\u4fe1\u606f")),Object(c.a)("tr",null,Object(c.a)("td",null,"showImgSize"),Object(c.a)("td",null,Object(c.a)("code",null,"boolean")),Object(c.a)("td",{style:{textAlign:"center"}},Object(c.a)("code",null,"false")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u70b9\u51fb\u56fe\u7247\u65f6\u663e\u793a\u56fe\u7247\u5927\u5c0f\u63a7\u4ef6")),Object(c.a)("tr",null,Object(c.a)("td",null,"showImgToolbar"),Object(c.a)("td",null,Object(c.a)("code",null,"boolean")),Object(c.a)("td",{style:{textAlign:"center"}},Object(c.a)("code",null,"false")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u70b9\u51fb\u56fe\u7247\u65f6\u663e\u793a\u5de5\u5177\u680f\u63a7\u4ef6")),Object(c.a)("tr",null,Object(c.a)("td",null,"showImgResize"),Object(c.a)("td",null,Object(c.a)("code",null,"boolean")),Object(c.a)("td",{style:{textAlign:"center"}},Object(c.a)("code",null,"false")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u70b9\u51fb\u56fe\u7247\u65f6\u663e\u793a\u4fee\u6539\u5c3a\u5bf8\u63a7\u4ef6")),Object(c.a)("tr",null,Object(c.a)("td",null,"onReady"),Object(c.a)("td",null,Object(c.a)("code",null,"BaseEventOrigFunction<any>")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u7f16\u8f91\u5668\u521d\u59cb\u5316\u5b8c\u6210\u65f6\u89e6\u53d1")),Object(c.a)("tr",null,Object(c.a)("td",null,"onFocus"),Object(c.a)("td",null,Object(c.a)("code",null,"BaseEventOrigFunction<editorEventDetail>")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u7f16\u8f91\u5668\u805a\u7126\u65f6\u89e6\u53d1",Object(c.a)("br",null),"event.detail = ","{ html, text, delta }")),Object(c.a)("tr",null,Object(c.a)("td",null,"onBlur"),Object(c.a)("td",null,Object(c.a)("code",null,"BaseEventOrigFunction<editorEventDetail>")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u7f16\u8f91\u5668\u5931\u53bb\u7126\u70b9\u65f6\u89e6\u53d1",Object(c.a)("br",null),"detail = ","{ html, text, delta }")),Object(c.a)("tr",null,Object(c.a)("td",null,"onInput"),Object(c.a)("td",null,Object(c.a)("code",null,"BaseEventOrigFunction<editorEventDetail>")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u7f16\u8f91\u5668\u5185\u5bb9\u6539\u53d8\u65f6\u89e6\u53d1",Object(c.a)("br",null),"detail = ","{ html, text, delta }")),Object(c.a)("tr",null,Object(c.a)("td",null,"onStatuschange"),Object(c.a)("td",null,Object(c.a)("code",null,"BaseEventOrigFunction<any>")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u901a\u8fc7 Context \u65b9\u6cd5\u6539\u53d8\u7f16\u8f91\u5668\u5185\u6837\u5f0f\u65f6\u89e6\u53d1\uff0c\u8fd4\u56de\u9009\u533a\u5df2\u8bbe\u7f6e\u7684\u6837\u5f0f")))),Object(c.a)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"EditorProps.readOnly"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"EditorProps.placeholder"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"EditorProps.showImgSize"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"EditorProps.showImgToolbar"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"EditorProps.showImgResize"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"EditorProps.onReady"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"EditorProps.onFocus"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"EditorProps.onBlur"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"EditorProps.onInput"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"EditorProps.onStatuschange"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(c.a)("h3",{id:"editoreventdetail"},"editorEventDetail"),Object(c.a)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Editor"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}j.isMDXComponent=!0}}]);