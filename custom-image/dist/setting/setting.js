System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-core/react","jimu-ui"],(function(t,e){var n={},i={},o={},r={};return{setters:[function(t){n.jsx=t.jsx},function(t){i.SettingRow=t.SettingRow,i.SettingSection=t.SettingSection},function(t){o.useCallback=t.useCallback},function(t){r.Option=t.Option,r.Select=t.Select,r.UrlInput=t.UrlInput}],execute:function(){t((()=>{var t={244:t=>{"use strict";t.exports=n},972:t=>{"use strict";t.exports=o},321:t=>{"use strict";t.exports=r},298:t=>{"use strict";t.exports=i}},e={};function s(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,s),o.exports}s.d=(t,e)=>{for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.p="";var u={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(u),s.d(u,{__set_webpack_public_path__:()=>r,default:()=>o});var t=s(244),e=s(298),n=s(972),i=s(321);function o(o){const r=(0,n.useCallback)(((t,e)=>{o.onSettingChange({id:o.id,config:o.config.set(t,e)})}),[o]);return(0,t.jsx)("div",null,(0,t.jsx)("div",{className:"widget-setting-get-map-coordinates"},(0,t.jsx)(e.SettingSection,{title:"Input image url"},(0,t.jsx)(e.SettingRow,null,(0,t.jsx)(i.UrlInput,{value:o.config.imgUrl,onChange:t=>{r("imgUrl",t.value)},schemes:["https"]}))),(0,t.jsx)(e.SettingSection,{title:"Object fit"},(0,t.jsx)(e.SettingRow,null,(0,t.jsx)(i.Select,{value:o.config.objectFit,onChange:t=>{r("objectFit",t.target.value)}},(0,t.jsx)(i.Option,{value:"fill"},"Fill"),(0,t.jsx)(i.Option,{value:"contain"},"Contain"),(0,t.jsx)(i.Option,{value:"cover"},"Cover"),(0,t.jsx)(i.Option,{value:"none"},"None"),(0,t.jsx)(i.Option,{value:"scale-down"},"Scale down"))))))}function r(t){s.p=t}})(),u})())}}}));