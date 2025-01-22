System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-core/react","jimu-ui/advanced/style-setting-components","jimu-ui/advanced/data-source-selector","jimu-ui/basic/color-picker"],(function(e,t){var n={},o={},i={},a={},l={},s={},c={};return{setters:[function(e){n.AllDataSourceTypes=e.AllDataSourceTypes,n.Immutable=e.Immutable,n.jsx=e.jsx},function(e){o.Button=e.Button,o.FontFamilyValue=e.FontFamilyValue,o.NumericInput=e.NumericInput,o.Option=e.Option,o.Select=e.Select,o.Switch=e.Switch,o.TextArea=e.TextArea,o.TextInput=e.TextInput},function(e){i.SettingRow=e.SettingRow,i.SettingSection=e.SettingSection},function(e){a.useCallback=e.useCallback,a.useState=e.useState},function(e){l.FontFamilySelector=e.FontFamilySelector,l.FontStyle=e.FontStyle},function(e){s.DataSourceSelector=e.DataSourceSelector},function(e){c.ColorPicker=e.ColorPicker}],execute:function(){e((()=>{var e={244:e=>{"use strict";e.exports=n},972:e=>{"use strict";e.exports=a},321:e=>{"use strict";e.exports=o},89:e=>{"use strict";e.exports=s},298:e=>{"use strict";e.exports=i},562:e=>{"use strict";e.exports=l},337:e=>{"use strict";e.exports=c}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var u={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(u),r.d(u,{__set_webpack_public_path__:()=>g,default:()=>c});var e=r(244),t=r(321),n=r(298),o=r(972),i=r(562),a=r(89),l=r(337);const s=({lineIndex:o,onChange:a,config:s,onDelete:c})=>(0,e.jsx)(n.SettingSection,{title:`Group #${o}`,style:{width:"100%"}},(0,e.jsx)("div",{style:{justifyContent:"center",flexDirection:"column",display:"flex",alignItems:"center",gap:"10px",width:"100%"}},(0,e.jsx)(n.SettingRow,{css:{width:"100%"}},(0,e.jsx)(t.TextArea,{value:s.content,onChange:e=>{a("content",e.target.value)},multiple:!0})),(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(i.FontStyle,{bold:s.bold,italic:s.italic,underline:s.underline,strike:s.strike,onChange:(e,t)=>{a(e,t)}})),(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(t.TextInput,{value:s.fontSize,onChange:e=>{a("fontSize",e.target.value)},placeholder:"Enter font size"})),(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(l.ColorPicker,{color:s.color,onChange:e=>{a("color",e)}})),(0,e.jsx)(n.SettingRow,{css:{width:"100%"}},(0,e.jsx)(i.FontFamilySelector,{font:s.fontFamily,onChange:e=>{a("fontFamily",e)}})),(0,e.jsx)(t.Button,{onClick:c,style:{width:"50%"}},"Delete")));function c(i){const l=(0,e.Immutable)([e.AllDataSourceTypes.FeatureLayer]),[c,r]=(0,o.useState)(i.config.lines?Array.from(i.config.lines):[]),u=(0,o.useCallback)(((e,t,n)=>{r((o=>{const a=o.map(((o,i)=>i===e?Object.assign(Object.assign({},o),"size"===t?{fontSize:n}:{[t]:n}):o));return i.onSettingChange({id:i.id,config:i.config.set("lines",a)}),a}))}),[i]),g=(0,o.useCallback)((()=>{const e=Array.from(c);e.push({content:"",color:"#000000",fontSize:"16px",bold:!1,italic:!1,underline:!1,strike:!1,fontFamily:t.FontFamilyValue.ARIAL}),r(e),i.onSettingChange({id:i.id,config:Object.assign({lines:e},i.config)})}),[c,i]),S=(0,o.useCallback)((e=>{const t=c.filter(((t,n)=>n!==e));r(t),i.onSettingChange({id:i.id,config:Object.assign({lines:t},i.config)})}),[c,i]),d=(0,o.useCallback)((e=>{e&&i.onSettingChange({id:i.id,useDataSources:e})}),[i]);return(0,e.jsx)("div",null,(0,e.jsx)("div",{className:"widget-setting-get-map-coordinates",style:{justifyContent:"center",flexDirection:"column",display:"flex",alignItems:"center",gap:"10px"}},(0,e.jsx)(n.SettingSection,{className:"data-source-selector-section",title:"Select Data Source"},(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(a.DataSourceSelector,{types:l,useDataSourcesEnabled:i.useDataSourcesEnabled,useDataSources:i.useDataSources,onChange:d,widgetId:i.id,onToggleUseDataEnabled:e=>{i.onSettingChange({id:i.id,useDataSourcesEnabled:e})}}))),(0,e.jsx)(n.SettingSection,{title:"Text alignment (justify content)"},(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(t.Select,{value:i.config.justifyContent,onChange:e=>{i.onSettingChange({id:i.id,config:i.config.set("justifyContent",e.target.value)})}},(0,e.jsx)(t.Option,{value:"start"},"Start"),(0,e.jsx)(t.Option,{value:"center"},"Center"),(0,e.jsx)(t.Option,{value:"end"},"End")))),(0,e.jsx)(n.SettingSection,{title:"Text alignment (align items)"},(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(t.Select,{value:i.config.alignItems,onChange:e=>{i.onSettingChange({id:i.id,config:i.config.set("alignItems",e.target.value)})}},(0,e.jsx)(t.Option,{value:"start"},"Start"),(0,e.jsx)(t.Option,{value:"center"},"Center"),(0,e.jsx)(t.Option,{value:"end"},"End")))),(0,e.jsx)(n.SettingSection,{title:"Time format"},(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(t.Select,{value:i.config.dateTimeFormat,onChange:e=>{i.onSettingChange({id:i.id,config:i.config.set("dateTimeFormat",e.target.value)})}},(0,e.jsx)(t.Option,{value:"toLocaleString"},"toLocaleString"),(0,e.jsx)(t.Option,{value:"toLocaleDateString"},"toLocaleDateString"),(0,e.jsx)(t.Option,{value:"toLocaleTimeString"},"toLocaleTimeString")))),(0,e.jsx)(n.SettingSection,{title:"Number round to"},(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(t.NumericInput,{value:i.config.numberRoundTo,onChange:e=>{i.onSettingChange({id:i.id,config:i.config.set("numberRoundTo",e)})}}))),(0,e.jsx)(n.SettingSection,{title:"Auto bold"},(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(t.Switch,{checked:i.config.autoBold,onChange:e=>{i.onSettingChange({id:i.id,config:i.config.set("autoBold",e.target.checked)})}})),i.config.autoBold&&(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(t.TextArea,{value:i.config.autoBoldSeparator||"",onChange:e=>{i.onSettingChange({id:i.id,config:i.config.set("autoBoldSeparator",e.target.value)})}}))),c.map(((t,n)=>(0,e.jsx)(s,{key:n,lineIndex:n+1,onChange:(e,t)=>{u(n,e,t)},config:t,onDelete:()=>{S(n)}}))),(0,e.jsx)(t.Button,{onClick:g,style:{width:"50%"}},"Add Line")))}function g(e){r.p=e}})(),u})())}}}));