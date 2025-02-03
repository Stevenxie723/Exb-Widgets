System.register(["jimu-core","jimu-core/react"],(function(e,t){var n={},i={};return{setters:[function(e){n.DataSourceComponent=e.DataSourceComponent,n.DataSourceManager=e.DataSourceManager,n.JimuFieldType=e.JimuFieldType,n.css=e.css,n.jsx=e.jsx},function(e){i.useCallback=e.useCallback,i.useEffect=e.useEffect,i.useState=e.useState}],execute:function(){e((()=>{var e={244:e=>{"use strict";e.exports=n},972:e=>{"use strict";e.exports=i}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var o={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(o),r.d(o,{__set_webpack_public_path__:()=>p,default:()=>y});var e=r(244),t=r(972),n=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function u(e){try{s(i.next(e))}catch(e){o(e)}}function c(e){try{s(i.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,c)}s((i=i.apply(e,t||[])).next())}))};const i=t=>t===e.JimuFieldType.Number?0:t===e.JimuFieldType.Date?(new Date).getUTCMilliseconds():"",u=t=>{const n=e.DataSourceManager.getInstance().getDataSource(t);return null!=n?n:void 0},c=(e,t)=>{var n;try{const i=null===(n=null==t?void 0:t.getSchema())||void 0===n?void 0:n.fields;if(i){for(const[,t]of Object.entries(i))if(t.alias===e)return[t.name,t.type];for(const[,t]of Object.entries(i))if(t.name===e)return[t.name,t.type]}return[void 0,void 0]}catch(e){return[void 0,void 0]}},s=e=>{let t=0;for(let n=0;n<e.length;n++)if(","===e[n]){if(1===t)return n}else"("===e[n]?t++:")"===e[n]&&t--;return-1},a=(t,r,o,a,d)=>n(void 0,void 0,void 0,(function*(){const f=parseFloat(t);if(!isNaN(f))return f;try{const f=t.substring(0,t.indexOf("("));if(["count","sum","min","max","avg","stddev","var","percentile_cont","percentile_disc"].includes(f)){const e=t.substring(t.indexOf("(")+1,t.indexOf(")")),o=void 0!==r?u(r[void 0!==d?d:0]):void 0;return yield((e,t,r)=>n(void 0,void 0,void 0,(function*(){const[n,o]=c(e,r);try{if(["count","sum","min","max","avg","stddev","var","percentile_cont","percentile_disc"].includes(t)){const e=(yield r.query({outStatistics:[{onStatisticField:n,outStatisticFieldName:"value",statisticType:t}]})).records[0].getFieldValue("value");return null==e?i(o):e}return console.error("Invalid aggregation function:",t),i(o)}catch(e){return console.error("Error fetching or aggregating data:",e),i(o)}})))(e,f,o)}return(e=>/^add\(.+\,.+\)$/.test(e)||/^sub\(.+\,.+\)$/.test(e)||/^mul\(.+\,.+\)$/.test(e)||/^div\(.+\,.+\)$/.test(e))(t)?yield((t,r,o,u,c)=>n(void 0,void 0,void 0,(function*(){try{const n=s(t),a=t.substring(0,t.indexOf("(")),d=t.substring(t.indexOf("(")+1,n),f=t.substring(n+1,t.length-1);let g=yield l(d,r,o,u,c),v=yield l(f,r,o,u,c);if("string"==typeof g&&(g=parseFloat(g)),"string"==typeof v&&(v=parseFloat(v)),isNaN(g)||isNaN(v))return i(e.JimuFieldType.Number);{let t=0;if("div"===a&&0===v)return i(e.JimuFieldType.Number);if("div"===a)t=g/v;else if("add"===a)t=g+v;else if("sub"===a)t=g-v;else{if("mul"!==a)return i(e.JimuFieldType.Number);t=g*v}return t}}catch(t){return console.error("Error dividing values:",t),i(e.JimuFieldType.Number)}})))(t,r,o,a,d):(e=>/^select\(.+\,.+\)$/.test(e))(t)?yield((t,r,o,u)=>n(void 0,void 0,void 0,(function*(){try{const n=s(t),c=parseFloat(t.substring(t.indexOf("(")+1,n));if(isNaN(c)||c<0||c>=r.length)return i(e.JimuFieldType.Number);const a=t.substring(n+1,t.length-1);return yield l(a,r,o,u,c)}catch(t){return console.error("Error selecting values:",t),i(e.JimuFieldType.Number)}})))(t,r,o,a):i(e.JimuFieldType.Number)}catch(t){return console.error("Error parsing function:",t),i(e.JimuFieldType.Number)}})),l=(t,r,o,s,l)=>n(void 0,void 0,void 0,(function*(){if((e=>/^.+\(.+\)$/.test(e))(t))return yield a(t,r,o,s,l);if((e=>/^\d+(\.\d+)?$/.test(e))(t))return parseFloat(t);try{const n=void 0!==r?u(r[void 0!==l?l:0]):void 0;return((t,n,r,o)=>{if(!n)return;const u=o?[o]:n.getSelectedRecords(),[s,a]=c(t,n);try{if(!u||0===u.length||void 0===u[0]||null===u[0])return i(a);{const t=u[0].getFieldValue(s);if(null==t)return i(a);if(a!==e.JimuFieldType.Date)return a===e.JimuFieldType.Number?null!=t?t:i(a):t;{const e=new Date(t);if("toLocaleString"===r||void 0===r)return e.toLocaleString();if("toLocaleDateString"===r)return e.toLocaleDateString();if("toLocaleTimeString"===r)return e.toLocaleTimeString()}}}catch(e){return console.error("Error fetching data:",e),i(a)}})(t,n,o,s)}catch(t){return console.error("Error parsing function:",t),i(e.JimuFieldType.String)}})),d=(e,t,i,r,o,u,...c)=>n(void 0,[e,t,i,r,o,u,...c],void 0,(function*(e,t,n,i,r,o,u=!1){if(e.includes("{")&&e.includes("}")){const c=e.indexOf("{"),s=e.indexOf("}"),a=yield l(e.substring(c+1,s),t,n,r);let f=`${a}`;return"number"!=typeof a||u||(f=a.toLocaleString(o,{minimumFractionDigits:i,maximumFractionDigits:i})),e.substring(0,c)+f+(yield d(e.substring(s+1),t,n,i,r))}return e}));var f=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function u(e){try{s(i.next(e))}catch(e){o(e)}}function c(e){try{s(i.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,c)}s((i=i.apply(e,t||[])).next())}))};class g{constructor(e){this.delay=e,this.timeoutId=null}execute(e){return f(this,void 0,void 0,(function*(){this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout((()=>f(this,void 0,void 0,(function*(){try{yield e()}catch(e){console.error("Error in debounced function:",e)}this.timeoutId=null}))),this.delay)}))}}const v=({useDataSources:n,children:i,onDataSourceInfoChange:r,onDataSourceCreated:o,useDebounceExecutor:u})=>{const[c]=(0,t.useState)(new g(300)),s=(0,t.useCallback)(((e,t)=>{u||void 0===u?c.execute((()=>{null==r||r(e,t)})):null==r||r(e,t)}),[u,c,r]),a=(0,t.useCallback)((()=>{let t=i;for(let i=0;i<n.length;i++)t=(0,e.jsx)(e.DataSourceComponent,{useDataSource:n[i],onDataSourceInfoChange:s,onDataSourceCreated:o},t);return t}),[i,n,s,o]),[l,d]=(0,t.useState)(null);return(0,t.useEffect)((()=>{n&&n.length>0?d(a()):d(i)}),[i,a,n]),l},m=(t,n,i,r,o,u,c)=>e.css`
    font-size: ${n};
    font-family: ${t};
    color: ${i};
    font-weight: ${r?"bold":"normal"};
    font-style: ${o?"italic":"normal"};
    text-decoration-line: ${u&&c?"underline line-through":u?"underline":c?"line-through":"none"};
    padding: 0;
  `;function y(n){const i=e.css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,r=m(n.config.firstLineFontFamily,n.config.firstLineFontSize,n.config.firstLineColor,n.config.firstLineBold,n.config.firstLineItalic,n.config.firstLineUnderline,n.config.firstLineStrike),o=m(n.config.secondLineFontFamily,n.config.secondLineFontSize,n.config.secondLineColor,n.config.secondLineBold,n.config.secondLineItalic,n.config.secondLineUnderline,n.config.secondLineStrike),[u,c]=(0,t.useState)(""),[s,a]=(0,t.useState)(""),l=(0,t.useCallback)((()=>{const e=void 0!==n.useDataSources?Array.from(n.useDataSources.map((e=>e.dataSourceId))):void 0;d(n.config.firstLine,e,void 0,n.config.numberRoundTo,void 0,n.config.locale).then((e=>{c(e)})),d(n.config.secondLine,e,void 0,n.config.numberRoundTo,void 0,n.config.locale).then((e=>{a(e)}))}),[c,a,n]);return(0,t.useEffect)((()=>{l()}),[l]),n.useDataSources&&0!==n.useDataSources.length?(0,e.jsx)(v,{useDataSources:n.useDataSources,onDataSourceInfoChange:l},(0,e.jsx)("div",{className:"widget-get-map-coordinates jimu-widget p-2",css:i},(0,e.jsx)("div",{style:{textAlign:"center",flexWrap:"wrap"}},(0,e.jsx)("div",{css:r},u),(0,e.jsx)("div",{css:o},s)))):(0,e.jsx)("div",{css:i},"Please configure the data source")}function p(e){r.p=e}})(),o})())}}}));