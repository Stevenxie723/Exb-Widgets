System.register(["jimu-core","jimu-core/react","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/advanced/style-setting-components","jimu-ui/basic/color-picker"],(function(e,t){var n={},i={},r={},o={},s={},a={};return{setters:[function(e){n.DataSourceComponent=e.DataSourceComponent,n.DataSourceManager=e.DataSourceManager,n.JimuFieldType=e.JimuFieldType,n.React=e.React,n.css=e.css,n.jsx=e.jsx},function(e){i.useCallback=e.useCallback,i.useEffect=e.useEffect,i.useState=e.useState},function(){},function(){},function(){},function(){}],execute:function(){e((()=>{var e={244:e=>{"use strict";e.exports=n},972:e=>{"use strict";e.exports=i},321:e=>{"use strict";e.exports=r},298:e=>{"use strict";e.exports=o},562:e=>{"use strict";e.exports=s},337:e=>{"use strict";e.exports=a}},t={};function u(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,u),r.exports}u.d=(e,t)=>{for(var n in t)u.o(t,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="";var c={};return u.p=window.jimuConfig.baseUrl,(()=>{"use strict";u.r(c),u.d(c,{__set_webpack_public_path__:()=>j,default:()=>S});var e=u(244),t=u(972),n=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{u(i.next(e))}catch(e){o(e)}}function a(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}u((i=i.apply(e,t||[])).next())}))};const i=t=>t===e.JimuFieldType.Number?0:t===e.JimuFieldType.Date?(new Date).getUTCMilliseconds():"",r=t=>{const n=e.DataSourceManager.getInstance().getDataSource(t);return null!=n?n:void 0},o=(e,t)=>{var n;try{const i=null===(n=null==t?void 0:t.getSchema())||void 0===n?void 0:n.fields;if(i){for(const[,t]of Object.entries(i))if(t.alias===e)return[t.name,t.type];for(const[,t]of Object.entries(i))if(t.name===e)return[t.name,t.type]}return[void 0,void 0]}catch(e){return[void 0,void 0]}},s=e=>{let t=0;for(let n=0;n<e.length;n++)if(","===e[n]){if(1===t)return n}else"("===e[n]?t++:")"===e[n]&&t--;return-1},a=(t,a,u,c,d)=>n(void 0,void 0,void 0,(function*(){const f=parseFloat(t);if(!isNaN(f))return f;try{const f=t.substring(0,t.indexOf("("));if(["count","sum","min","max","avg","stddev","var","percentile_cont","percentile_disc"].includes(f)){const e=t.substring(t.indexOf("(")+1,t.indexOf(")")),s=void 0!==a?r(a[void 0!==d?d:0]):void 0;return yield((e,t,r)=>n(void 0,void 0,void 0,(function*(){const[n,s]=o(e,r);try{if(["count","sum","min","max","avg","stddev","var","percentile_cont","percentile_disc"].includes(t)){const e=(yield r.query({outStatistics:[{onStatisticField:n,outStatisticFieldName:"value",statisticType:t}]})).records[0].getFieldValue("value");return null==e?i(s):e}return console.error("Invalid aggregation function:",t),i(s)}catch(e){return console.error("Error fetching or aggregating data:",e),i(s)}})))(e,f,s)}return(e=>/^add\(.+\,.+\)$/.test(e)||/^sub\(.+\,.+\)$/.test(e)||/^mul\(.+\,.+\)$/.test(e)||/^div\(.+\,.+\)$/.test(e))(t)?yield((t,r,o,a,u)=>n(void 0,void 0,void 0,(function*(){try{const n=s(t),c=t.substring(0,t.indexOf("(")),d=t.substring(t.indexOf("(")+1,n),f=t.substring(n+1,t.length-1);let g=yield l(d,r,o,a,u),p=yield l(f,r,o,a,u);if("string"==typeof g&&(g=parseFloat(g)),"string"==typeof p&&(p=parseFloat(p)),isNaN(g)||isNaN(p))return i(e.JimuFieldType.Number);{let t=0;if("div"===c&&0===p)return i(e.JimuFieldType.Number);if("div"===c)t=g/p;else if("add"===c)t=g+p;else if("sub"===c)t=g-p;else{if("mul"!==c)return i(e.JimuFieldType.Number);t=g*p}return t}}catch(t){return console.error("Error dividing values:",t),i(e.JimuFieldType.Number)}})))(t,a,u,c,d):(e=>/^select\(.+\,.+\)$/.test(e))(t)?yield((t,r,o,a)=>n(void 0,void 0,void 0,(function*(){try{const n=s(t),u=parseFloat(t.substring(t.indexOf("(")+1,n));if(isNaN(u)||u<0||u>=r.length)return i(e.JimuFieldType.Number);const c=t.substring(n+1,t.length-1);return yield l(c,r,o,a,u)}catch(t){return console.error("Error selecting values:",t),i(e.JimuFieldType.Number)}})))(t,a,u,c):i(e.JimuFieldType.Number)}catch(t){return console.error("Error parsing function:",t),i(e.JimuFieldType.Number)}})),l=(t,s,u,c,l)=>n(void 0,void 0,void 0,(function*(){if((e=>/^.+\(.+\)$/.test(e))(t))return yield a(t,s,u,c,l);if((e=>/^\d+(\.\d+)?$/.test(e))(t))return parseFloat(t);try{const n=void 0!==s?r(s[void 0!==l?l:0]):void 0;return((t,n,r,s)=>{if(!n)return;const a=s?[s]:n.getSelectedRecords(),[u,c]=o(t,n);try{if(!a||0===a.length||void 0===a[0]||null===a[0])return i(c);{const t=a[0].getFieldValue(u);if(null==t)return i(c);if(c!==e.JimuFieldType.Date)return c===e.JimuFieldType.Number?null!=t?t:i(c):t;{const e=new Date(t);if("toLocaleString"===r||void 0===r)return e.toLocaleString();if("toLocaleDateString"===r)return e.toLocaleDateString();if("toLocaleTimeString"===r)return e.toLocaleTimeString()}}}catch(e){return console.error("Error fetching data:",e),i(c)}})(t,n,u,c)}catch(t){return console.error("Error parsing function:",t),i(e.JimuFieldType.String)}})),d=(e,t,i,r,o,s,...a)=>n(void 0,[e,t,i,r,o,s,...a],void 0,(function*(e,t,n,i,r,o,s=!1){if(e.includes("{")&&e.includes("}")){const a=e.indexOf("{"),u=e.indexOf("}"),c=yield l(e.substring(a+1,u),t,n,r);let f=`${c}`;return"number"!=typeof c||s||(f=c.toLocaleString(o,{minimumFractionDigits:i,maximumFractionDigits:i})),e.substring(0,a)+f+(yield d(e.substring(u+1),t,n,i,r))}return e}));var f=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{u(i.next(e))}catch(e){o(e)}}function a(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}u((i=i.apply(e,t||[])).next())}))};class g{constructor(e){this.delay=e,this.timeoutId=null}execute(e){return f(this,void 0,void 0,(function*(){this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout((()=>f(this,void 0,void 0,(function*(){try{yield e()}catch(e){console.error("Error in debounced function:",e)}this.timeoutId=null}))),this.delay)}))}}const p=({useDataSources:n,children:i,onDataSourceInfoChange:r,onDataSourceCreated:o,useDebounceExecutor:s})=>{const[a]=(0,t.useState)(new g(300)),u=(0,t.useCallback)(((e,t)=>{s||void 0===s?a.execute((()=>{null==r||r(e,t)})):null==r||r(e,t)}),[s,a,r]),c=(0,t.useCallback)((()=>{let t=i;for(let i=0;i<n.length;i++)t=(0,e.jsx)(e.DataSourceComponent,{useDataSource:n[i],onDataSourceInfoChange:u,onDataSourceCreated:o},t);return t}),[i,n,u,o]),[l,d]=(0,t.useState)(null);return(0,t.useEffect)((()=>{n&&n.length>0?d(c()):d(i)}),[i,c,n]),l};function v(e){e.startsWith("#")&&(e=e.slice(1));return.2126*(parseInt(e.substring(0,2),16)/255)+.7152*(parseInt(e.substring(2,4),16)/255)+.0722*(parseInt(e.substring(4,6),16)/255)<.5?"#FFFFFF":"#000000"}u(321),u(298),u(562),u(337);const m=t=>{if(!t)return e.css``;const{fontSize:n,fontFamily:i,color:r,bold:o,italic:s,underline:a,strike:u}=t;return e.css`
    font-size: ${n};
    font-family: ${i};
    color: ${r};
    font-weight: ${o?"bold":"normal"};
    font-style: ${s?"italic":"normal"};
    text-decoration-line: ${a&&u?"underline line-through":a?"underline":u?"line-through":"none"};
    padding: 0;
  `};var y=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{u(i.next(e))}catch(e){o(e)}}function a(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}u((i=i.apply(e,t||[])).next())}))};const{useEffect:h}=e.React,x=e=>{const t=parseFloat(e);return isNaN(t)?0:t},b=({data:n,horizontal:i,width:r,height:o,labelConfig:s})=>{const[a,u]=(0,t.useState)(0);return h((()=>{let e=0;n.forEach((t=>{e+=x(t.value)})),u(e)}),[n]),(0,e.jsx)("div",{style:{display:"flex",flexDirection:i?"row":"column",gap:"0px",alignItems:"center",width:void 0!==r?r:"100%",height:void 0!==o?o:"100%",margin:"0px",padding:"0px",backgroundColor:"orange"}},a&&n.map(((t,n)=>{const r=`${(x(t.value)/a*100).toLocaleString(void 0,{maximumFractionDigits:2})}%`;return(0,e.jsx)("div",{key:n,style:{display:"flex",flexDirection:i?"column":"row",gap:"0px",alignItems:"center",justifyContent:"center",width:r,height:"100%",backgroundColor:t.color,overflow:"hidden"}},(0,e.jsx)("div",{css:m(s),style:{display:"flex",flexWrap:"wrap",backgroundColor:t.color,justifyContent:"center",alignItems:"center",overflow:"hidden",color:v(t.color)}},r))})))};function S(n){const i=(0,t.useCallback)((e=>y(this,void 0,void 0,(function*(){if(void 0===e)return[];const t=void 0!==n.useDataSources?Array.from(n.useDataSources.map((e=>e.dataSourceId))):[],i=Array.from(e.map((e=>Object.assign({},e))));for(let n=0;n<e.length;n++){const e=i[n],r=yield d(e.value,t,void 0,void 0,void 0,void 0,!0);let o="string"==typeof r?parseFloat(r):r;isNaN(o)&&(o=0),i[n].value=r}return i}))),[n.useDataSources]),[r,o]=(0,t.useState)([]),s=(0,t.useCallback)((()=>{void 0!==n.config.data?i(Array.from(n.config.data)).then((e=>{o(e)})):o([])}),[i,n.config.data]);return h((()=>{s()}),[s]),(0,e.jsx)(p,{useDataSources:n.useDataSources,onDataSourceInfoChange:s,useDebounceExecutor:!0},(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"0px",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}},(0,e.jsx)("div",{style:{display:"flex",flexDirection:"row",gap:"0px",alignItems:"center",justifyContent:"center",width:"100%",flexBasis:"100%",flexShrink:1}},(0,e.jsx)("div",{css:m(n.config.labelConfig),style:{color:"transparent"}},"%"),(0,e.jsx)("div",{style:{height:"100%",width:"1px",backgroundColor:"#d8dbd2",margin:"0px",padding:"0px"}}),(0,e.jsx)("div",{style:{width:"100%",height:"50%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",margin:"0px",padding:"0px"}},(0,e.jsx)(b,{data:r,horizontal:!0,width:void 0,height:void 0,labelConfig:n.config.labelConfig})),(0,e.jsx)("div",{style:{height:"100%",width:"1px",backgroundColor:"#d8dbd2",margin:"0px",padding:"0px"}}),(0,e.jsx)("div",{css:m(n.config.labelConfig),style:{color:"transparent"}},"%")),(0,e.jsx)("div",{style:{display:"flex",flexDirection:"row",gap:"0px",alignItems:"center",justifyContent:"space-between",width:"100%",flexWrap:"wrap",flexShrink:0}},(0,e.jsx)("div",{css:m(n.config.labelConfig)},"0%"),(0,e.jsx)("div",{css:m(n.config.labelConfig)},"100%"))))}function j(e){u.p=e}})(),c})())}}}));