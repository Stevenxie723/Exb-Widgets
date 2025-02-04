System.register(["jimu-core","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/setting-components","jimu-core/react","jimu-ui","jimu-ui/advanced/style-setting-components","jimu-ui/basic/color-picker"],(function(e,t){var n={},o={},i={},l={},a={},s={},c={};return{setters:[function(e){n.AllDataSourceTypes=e.AllDataSourceTypes,n.Immutable=e.Immutable,n.jsx=e.jsx},function(e){o.DataSourceSelector=e.DataSourceSelector,o.FieldSelector=e.FieldSelector},function(e){i.SettingRow=e.SettingRow,i.SettingSection=e.SettingSection},function(e){l.useCallback=e.useCallback},function(e){a.Button=e.Button,a.FontFamilyValue=e.FontFamilyValue,a.Switch=e.Switch,a.TextArea=e.TextArea,a.TextInput=e.TextInput,a.UrlInput=e.UrlInput},function(e){s.FontFamilySelector=e.FontFamilySelector,s.FontStyle=e.FontStyle},function(e){c.ColorPicker=e.ColorPicker}],execute:function(){e((()=>{var e={244:e=>{"use strict";e.exports=n},972:e=>{"use strict";e.exports=l},321:e=>{"use strict";e.exports=a},89:e=>{"use strict";e.exports=o},298:e=>{"use strict";e.exports=i},562:e=>{"use strict";e.exports=s},337:e=>{"use strict";e.exports=c}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var u={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(u),r.d(u,{__set_webpack_public_path__:()=>d,default:()=>g});var e=r(244),t=r(89),n=r(298),o=r(972),i=r(321),l=r(562),a=r(337);const s=({title:t,onChange:o,config:s})=>(0,e.jsx)(n.SettingSection,{style:{width:"100%"},title:t},(0,e.jsx)("div",{style:{justifyContent:"center",flexDirection:"column",display:"flex",alignItems:"center",gap:"10px",width:"100%"}},(0,e.jsx)(n.SettingRow,{css:{width:"100%"}},(0,e.jsx)(i.TextArea,{value:s.content,onChange:e=>{o("content",e.target.value)},multiple:!0})),(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(l.FontStyle,{bold:s.bold,italic:s.italic,underline:s.underline,strike:s.strike,onChange:(e,t)=>{o(e,t)}})),(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(i.TextInput,{value:s.fontSize,onChange:e=>{o("fontSize",e.target.value)},placeholder:"Enter font size"})),(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(a.ColorPicker,{color:s.color,onChange:e=>{o("color",e)}})),(0,e.jsx)(n.SettingRow,{css:{width:"100%"}},(0,e.jsx)(l.FontFamilySelector,{font:s.fontFamily,onChange:e=>{o("fontFamily",e)}})))),c=({option:t,onUpdateOption:o,onRemoveOption:l})=>(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"10px",alignItems:"flex-start"}},(0,e.jsx)("div",null,"Display Name"),(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(i.TextInput,{value:t.displayName,onChange:e=>{o("displayName",e.target.value)}})),(0,e.jsx)("div",null,"SQL Expression (Use ","{}"," to express the field name)"),(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(i.TextArea,{value:t.sqlExpression,onChange:e=>{o("sqlExpression",e.target.value)},htmlSize:100})),(0,e.jsx)(i.Button,{onClick:l},"Remove this option"));function g(l){var a,r;const u=(0,e.Immutable)([e.AllDataSourceTypes.FeatureLayer]),g=(0,o.useCallback)((e=>{if(!e)return;const t=l.config.fieldNames?Array.from(l.config.fieldNames):[],n=e.map(((e,n)=>t.length>n&&t[n]?t[n]:""));l.onSettingChange({id:l.id,useDataSources:e,config:l.config.set("fieldNames",n)})}),[l]),d=(0,o.useCallback)(((e,t)=>{l.onSettingChange({id:l.id,config:l.config.set(e,t)})}),[l]),p=(0,o.useCallback)((()=>{const e=l.config.options?Array.from(l.config.options):[];e.push({displayName:"",value:"",sqlExpression:"{} = ''"}),d("options",e)}),[l,d]),f=(0,o.useCallback)(((e,t,n)=>{const o=l.config.options?Array.from(l.config.options):[];o[e][t]=n,d("options",o)}),[l,d]),x=(0,o.useCallback)((e=>{const t=l.config.options?Array.from(l.config.options):[];t.splice(e,1),d("options",t)}),[l,d]),S=(0,o.useCallback)(((e,t)=>{const n=l.config.fieldNames?Array.from(l.config.fieldNames):[];n.length>e&&(n[e]=t,d("fieldNames",n))}),[l.config.fieldNames,d]),m=(0,o.useCallback)(((e,t,n)=>{var o;const a=null!==(o=0===e?l.config.h1:l.config.h2)&&void 0!==o?o:{content:"",color:"#000000",fontSize:"16px",bold:!1,italic:!1,underline:!1,strike:!1,fontFamily:i.FontFamilyValue.ARIAL};"size"===t&&(t="fontSize");const s=Object.assign(Object.assign({},a),{[t]:n});l.onSettingChange({id:l.id,config:l.config.set(0===e?"h1":"h2",s)})}),[l]);return(0,e.jsx)("div",null,(0,e.jsx)("div",{className:"widget-setting-get-map-coordinates",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",gap:"10px"}},(0,e.jsx)(n.SettingSection,{className:"data-source-selector-section",title:"Select Data Source"},(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(t.DataSourceSelector,{types:u,useDataSourcesEnabled:!0,mustUseDataSource:!0,useDataSources:l.useDataSources,onChange:g,widgetId:l.id,hideDataView:!0,isMultiple:!0}))),l.useDataSources&&l.useDataSources.length>0&&l.useDataSources.map(((o,i)=>(0,e.jsx)(n.SettingSection,{className:"field-selector-section",title:"Select Field for Data Source #"+i},(0,e.jsx)(n.SettingRow,{key:i},(0,e.jsx)(t.FieldSelector,{useDataSources:l.useDataSources.slice(i,i+1),selectedFields:l.config.fieldNames?(0,e.Immutable)([l.config.fieldNames[i]]):(0,e.Immutable)([]),onChange:e=>{e&&1===e.length&&S(i,e[0].name)},widgetId:l.id,useDropdown:!0,isMultiple:!1,useSelectionDataView:!1,isSearchInputHidden:!1,isDataSourceDropDownHidden:!0}))))),(0,e.jsx)(n.SettingSection,{title:"Icon URL"},(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(i.UrlInput,{value:l.config.iconUrl,onChange:e=>{d("iconUrl",e.value)},schemes:["https"]}))),(0,e.jsx)(s,{title:"Edit h1",onChange:(e,t)=>{m(0,e,t)},config:null!==(a=l.config.h1)&&void 0!==a?a:{content:"",color:"#000000",fontSize:"16px",bold:!1,italic:!1,underline:!1,strike:!1,fontFamily:i.FontFamilyValue.ARIAL}}),(0,e.jsx)(s,{title:"Edit h2",onChange:(e,t)=>{m(1,e,t)},config:null!==(r=l.config.h2)&&void 0!==r?r:{content:"",color:"#000000",fontSize:"16px",bold:!1,italic:!1,underline:!1,strike:!1,fontFamily:i.FontFamilyValue.ARIAL}}),(0,e.jsx)(n.SettingSection,{title:"Placeholder"},(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(i.TextInput,{value:l.config.placeholder,onChange:e=>{d("placeholder",e.target.value)}}))),(0,e.jsx)(n.SettingSection,{title:"Height"},(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(i.TextInput,{value:l.config.height,onChange:e=>{d("height",e.target.value)}}))),(0,e.jsx)(n.SettingSection,{title:"Padding Vertical"},(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(i.TextInput,{value:l.config.paddingVertical,onChange:e=>{d("paddingVertical",e.target.value)}}))),(0,e.jsx)(n.SettingSection,{title:"Text Direction Horizontal"},(0,e.jsx)(n.SettingRow,null,(0,e.jsx)(i.Switch,{checked:l.config.textDirectionHorizontal,onChange:e=>{d("textDirectionHorizontal",e.target.checked)}}))),l.config.options&&l.config.options.map(((t,o)=>(0,e.jsx)(n.SettingSection,{title:"Option #"+o,key:o},(0,e.jsx)(c,{key:o,option:t,onUpdateOption:(e,t)=>{f(o,e,t)},onRemoveOption:()=>{x(o)}})))),(0,e.jsx)(i.Button,{onClick:p},"Add Option")))}function d(e){r.p=e}})(),u})())}}}));