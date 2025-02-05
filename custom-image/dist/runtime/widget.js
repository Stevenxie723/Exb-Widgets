/*! For license information please see widget.js.LICENSE.txt */
System.register(["jimu-core","jimu-core/react"],(function(e,t){var r={},n={};return Object.defineProperty(n,"__esModule",{value:!0}),{setters:[function(e){r.DataSourceComponent=e.DataSourceComponent,r.DataSourceManager=e.DataSourceManager,r.JimuFieldType=e.JimuFieldType,r.React=e.React,r.classNames=e.classNames,r.css=e.css,r.jsx=e.jsx},function(e){Object.keys(e).forEach((function(t){n[t]=e[t]}))}],execute:function(){e((()=>{var e={7568:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.54.54 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.54.54 0 0 1 .738 0" clip-rule="evenodd"></path></svg>'},2943:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.54.54 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.54.54 0 0 1-.738 0" clip-rule="evenodd"></path></svg>'},7154:(e,t,r)=>{"use strict";var n=r(8972);var o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=n.useSyncExternalStore,a=n.useRef,c=n.useEffect,u=n.useMemo,s=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,l){var d=a(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=u((function(){function e(e){if(!c){if(c=!0,i=e,e=n(e),void 0!==l&&f.hasValue){var t=f.value;if(l(t,e))return a=t}return a=e}if(t=a,o(i,e))return t;var r=n(e);return void 0!==l&&l(t,r)?t:(i=e,a=r)}var i,a,c=!1,u=void 0===r?null:r;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]}),[t,r,n,l]);var v=i(e,d[0],d[1]);return c((function(){f.hasValue=!0,f.value=v}),[v]),s(v),v}},8418:(e,t,r)=>{"use strict";e.exports=r(7154)},9244:e=>{"use strict";e.exports=r},8972:e=>{"use strict";e.exports=n}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var i={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(i),o.d(i,{__set_webpack_public_path__:()=>q,default:()=>W});var e=o(9244),t=o(8972),r=o(7568),n=o.n(r),a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};const c=t=>{const r=window.SVG,{className:o}=t,i=a(t,["className"]),c=(0,e.classNames)("jimu-icon jimu-icon-component",o);return r?e.React.createElement(r,Object.assign({className:c,src:n()},i)):e.React.createElement("svg",Object.assign({className:c},i))};var u=o(2943),s=o.n(u),l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};const d=t=>{const r=window.SVG,{className:n}=t,o=l(t,["className"]),i=(0,e.classNames)("jimu-icon jimu-icon-component",n);return r?e.React.createElement(r,Object.assign({className:i,src:s()},o)):e.React.createElement("svg",Object.assign({className:i},o))};var f=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function c(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}u((n=n.apply(e,t||[])).next())}))};class v{constructor(e){this.delay=e,this.timeoutId=null}execute(e){return f(this,void 0,void 0,(function*(){this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout((()=>f(this,void 0,void 0,(function*(){try{yield e()}catch(e){console.error("Error in debounced function:",e)}this.timeoutId=null}))),this.delay)}))}}const g=({useDataSources:r,children:n,onDataSourceInfoChange:o,onDataSourceStatusChange:i,onDataSourceCreated:a,useDebounceExecutor:c})=>{const[u]=(0,t.useState)(new v(300)),s=(0,t.useCallback)(((e,t)=>{c||void 0===c?u.execute((()=>{null==o||o(e,t)})):null==o||o(e,t)}),[c,u,o]),l=(0,t.useCallback)(((e,t)=>{c||void 0===c?u.execute((()=>{null==i||i(e,t)})):null==i||i(e,t)}),[c,u,i]),d=(0,t.useCallback)((()=>{let t=n;for(let n=0;n<r.length;n++)t=(0,e.jsx)(e.DataSourceComponent,{useDataSource:r[n],onDataSourceInfoChange:s,onDataSourceStatusChange:l,onDataSourceCreated:a},t);return t}),[n,r,s,l,a]),[f,g]=(0,t.useState)(null);return(0,t.useEffect)((()=>{r&&r.length>0?g(d()):g(n)}),[n,d,r]),f};var m=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function c(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}u((n=n.apply(e,t||[])).next())}))};const y=t=>t===e.JimuFieldType.Number?0:t===e.JimuFieldType.Date?(new Date).getUTCMilliseconds():"",p=t=>{const r=e.DataSourceManager.getInstance().getDataSource(t);return null!=r?r:void 0},b=(e,t)=>{var r;try{const n=null===(r=null==t?void 0:t.getSchema())||void 0===r?void 0:r.fields;if(n){for(const[,t]of Object.entries(n))if(t.alias===e)return[t.name,t.type];for(const[,t]of Object.entries(n))if(t.name===e)return[t.name,t.type]}return[void 0,void 0]}catch(e){return[void 0,void 0]}},h=e=>{let t=0;for(let r=0;r<e.length;r++)if(","===e[r]){if(1===t)return r}else"("===e[r]?t++:")"===e[r]&&t--;return-1},S=(t,r,n,o,i)=>m(void 0,void 0,void 0,(function*(){const a=parseFloat(t);if(!isNaN(a))return a;try{const a=t.substring(0,t.indexOf("("));if(["count","sum","min","max","avg","stddev","var","percentile_cont","percentile_disc"].includes(a)){const e=t.substring(t.indexOf("(")+1,t.indexOf(")")),n=void 0!==r?p(r[void 0!==i?i:0]):void 0;return yield((e,t,r)=>m(void 0,void 0,void 0,(function*(){const[n,o]=b(e,r);try{if(["count","sum","min","max","avg","stddev","var","percentile_cont","percentile_disc"].includes(t)){const e=(yield r.query({outStatistics:[{onStatisticField:n,outStatisticFieldName:"value",statisticType:t}]})).records[0].getFieldValue("value");return null==e?y(o):e}return console.error("Invalid aggregation function:",t),y(o)}catch(e){return console.error("Error fetching or aggregating data:",e),y(o)}})))(e,a,n)}return(e=>/^add\(.+\,.+\)$/.test(e)||/^sub\(.+\,.+\)$/.test(e)||/^mul\(.+\,.+\)$/.test(e)||/^div\(.+\,.+\)$/.test(e))(t)?yield((t,r,n,o,i)=>m(void 0,void 0,void 0,(function*(){try{const a=h(t),c=t.substring(0,t.indexOf("(")),u=t.substring(t.indexOf("(")+1,a),s=t.substring(a+1,t.length-1);let l=yield x(u,r,n,o,i),d=yield x(s,r,n,o,i);if("string"==typeof l&&(l=parseFloat(l)),"string"==typeof d&&(d=parseFloat(d)),isNaN(l)||isNaN(d))return y(e.JimuFieldType.Number);{let t=0;if("div"===c&&0===d)return y(e.JimuFieldType.Number);if("div"===c)t=l/d;else if("add"===c)t=l+d;else if("sub"===c)t=l-d;else{if("mul"!==c)return y(e.JimuFieldType.Number);t=l*d}return t}}catch(t){return console.error("Error dividing values:",t),y(e.JimuFieldType.Number)}})))(t,r,n,o,i):(e=>/^select\(.+\,.+\)$/.test(e))(t)?yield((t,r,n,o)=>m(void 0,void 0,void 0,(function*(){try{const i=h(t),a=parseFloat(t.substring(t.indexOf("(")+1,i));if(isNaN(a)||a<0||a>=r.length)return y(e.JimuFieldType.Number);const c=t.substring(i+1,t.length-1);return yield x(c,r,n,o,a)}catch(t){return console.error("Error selecting values:",t),y(e.JimuFieldType.Number)}})))(t,r,n,o):y(e.JimuFieldType.Number)}catch(t){return console.error("Error parsing function:",t),y(e.JimuFieldType.Number)}})),x=(t,r,n,o,i)=>m(void 0,void 0,void 0,(function*(){if((e=>/^.+\(.+\)$/.test(e))(t))return yield S(t,r,n,o,i);if((e=>/^\d+(\.\d+)?$/.test(e))(t))return parseFloat(t);try{const a=void 0!==r?p(r[void 0!==i?i:0]):void 0;return((t,r,n,o)=>{if(!r)return;let i=o?[o]:r.getSelectedRecords();const[a,c]=b(t,r);0===i.length&&(i=r.getRecords());try{if(!i||0===i.length||void 0===i[0]||null===i[0])return y(c);{const t=i[0].getFieldValue(a);if(null==t)return y(c);if(c!==e.JimuFieldType.Date)return c===e.JimuFieldType.Number?null!=t?t:y(c):t;{const e=new Date(t);if("toLocaleString"===n||void 0===n)return e.toLocaleString();if("toLocaleDateString"===n)return e.toLocaleDateString();if("toLocaleTimeString"===n)return e.toLocaleTimeString()}}}catch(e){return console.error("Error fetching data:",e),y(c)}})(t,a,n,o)}catch(t){return console.error("Error parsing function:",t),y(e.JimuFieldType.String)}})),j=(e,t,r,n,o,i,...a)=>m(void 0,[e,t,r,n,o,i,...a],void 0,(function*(e,t,r,n,o,i,a=!1,c){if(e.includes("[")&&e.includes("]")){const u=e.indexOf("["),s=e.indexOf("]"),l=e.substring(u+1,s),d=c?c[l]:void 0;return e.substring(0,u)+`${d}`+(yield j(e.substring(s+1),t,r,n,o,i,a,c))}if(e.includes("{")&&e.includes("}")){const c=e.indexOf("{"),u=e.indexOf("}"),s=yield x(e.substring(c+1,u),t,r,o);let l=`${s}`;return"number"!=typeof s||a||(l=s.toLocaleString(i,{minimumFractionDigits:n,maximumFractionDigits:n})),e.substring(0,c)+l+(yield j(e.substring(u+1),t,r,n,o))}return e}));var w=o(8418),O="default"in t?t.default:t,D=Symbol.for("react-redux-context"),C="undefined"!=typeof globalThis?globalThis:{};function N(){if(!O.createContext)return{};const e=C[D]??(C[D]=new Map);let t=e.get(O.createContext);return t||(t=O.createContext(null),e.set(O.createContext,t)),t}var F=N(),E=()=>{throw new Error("uSES not initialized!")};function T(e=F){return function(){return O.useContext(e)}}var I=T(),$=E,P=(e,t)=>e===t;function _(e=F){const t=e===F?I:T(e),r=(e,r={})=>{const{equalityFn:n=P,devModeChecks:o={}}="function"==typeof r?{equalityFn:r}:r;const{store:i,subscription:a,getServerState:c,stabilityCheck:u,identityFunctionCheck:s}=t(),l=(O.useRef(!0),O.useCallback({[e.name]:t=>e(t)}[e.name],[e,u,o.stabilityCheck])),d=$(a.addNestedSub,i.getState,c||i.getState,l,n);return O.useDebugValue(d),d};return Object.assign(r,{withTypes:()=>r}),r}var k=_();Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.client.reference");var J=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),M="undefined"!=typeof navigator&&"ReactNative"===navigator.product;J||M?O.useLayoutEffect:O.useEffect;Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype;var R;R=w.useSyncExternalStoreWithSelector,$=R,(e=>{e})(t.useSyncExternalStore);var L=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function c(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}u((n=n.apply(e,t||[])).next())}))};const V=({imgUrls:r,objectFit:n})=>{const[o,i]=(0,t.useState)(0),a=(0,t.useCallback)((()=>{i((o+1)%r.length)}),[o,r]),u=(0,t.useCallback)((()=>{i((o-1+r.length)%r.length)}),[o,r]),s=e.css`
    width: 30px;
    height: 30px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
  `;return 0===r.length?(0,e.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}):(0,e.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},(0,e.jsx)("img",{src:r[o],style:{width:"100%",height:"100%",objectFit:null!=n?n:"contain"}}),r.length>1&&0!==o&&(0,e.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"40%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},onClick:u},(0,e.jsx)("div",{css:s},(0,e.jsx)(c,{size:"15px"}))),r.length>1&&o!==r.length-1&&(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:"40%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},onClick:a},(0,e.jsx)("div",{css:s},(0,e.jsx)(d,{size:"15px"}))))},U=t=>{const r=e.DataSourceManager.getInstance().getDataSource(t);return null!=r?r:void 0},z=(e,t,r)=>L(void 0,void 0,void 0,(function*(){if(void 0===e.url||null===e.url)return[];const n=`${e.url}/${t}/attachments?f=json`,o=yield fetch(n),i=yield o.json();if(o.ok){const n=[];for(const o of i.attachmentInfos)r?n.push(`${e.url}/${t}/attachments/${o.attachmentid}?w=${r}`):n.push(`${e.url}/${t}/attachments/${o.attachmentid}`);return n}return[]}));function W(r){const[n,o]=(0,t.useState)([]),[,i]=(0,t.useState)(""),a=(0,t.useCallback)((()=>L(this,void 0,void 0,(function*(){let e,t;if(void 0===r.repeatedDataSource||null===r.repeatedDataSource||Array.isArray(r.repeatedDataSource))if(r.useDataSources&&r.useDataSources.length>0){const n=r.useDataSources[0].dataSourceId;if(e=U(n),void 0!==e){const r=e.getSelectedRecords();t=r.length>0?r[0].getId():void 0}else t=void 0}else e=void 0,t=void 0;else i(`Data source: ${null===r.repeatedDataSource}`),e=U(r.repeatedDataSource.dataSourceId),t=r.repeatedDataSource.record.getId();if(null==e||void 0===t)return void i(`Datasource is not avaiable? ${null==e}, object id is not avaiable? ${void 0===t}`);i(`Data source: ${e.url}, object id: ${t}`);const n=yield z(e,t,r.config.attachmentSetWidth);o(n)}))),[r.repeatedDataSource,r.config.attachmentSetWidth,r.useDataSources]),c=k((e=>{var t;return null===(t=e.urlParamStore)||void 0===t?void 0:t.urlParamStore})),u=(0,t.useCallback)((e=>L(this,void 0,void 0,(function*(){j(e,void 0,void 0,void 0,void 0,void 0,!1,c).then((e=>{o([e])}))}))),[c]),s=(0,t.useCallback)((()=>{"attachment"===r.config.source?a():u(r.config.imgUrl)}),[a,u,r.config.imgUrl,r.config.source]);return(0,t.useEffect)((()=>{s()}),[s]),(0,e.jsx)(g,{useDataSources:r.useDataSources,onDataSourceInfoChange:s,useDebounceExecutor:!1},(0,e.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},(0,e.jsx)(V,{imgUrls:n,objectFit:r.config.objectFit})))}function q(e){o.p=e}})(),i})())}}}));