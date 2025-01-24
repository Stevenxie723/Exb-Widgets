System.register(["jimu-core","jimu-core/react"],(function(e,t){var n={},a={};return{setters:[function(e){n.DataSourceComponent=e.DataSourceComponent,n.DataSourceManager=e.DataSourceManager,n.React=e.React,n.classNames=e.classNames,n.css=e.css,n.jsx=e.jsx},function(e){a.useCallback=e.useCallback,a.useEffect=e.useEffect,a.useState=e.useState}],execute:function(){e((()=>{var e={568:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.54.54 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.54.54 0 0 1 .738 0" clip-rule="evenodd"></path></svg>'},943:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.54.54 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.54.54 0 0 1-.738 0" clip-rule="evenodd"></path></svg>'},244:e=>{"use strict";e.exports=n},972:e=>{"use strict";e.exports=a}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var o={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(o),r.d(o,{__set_webpack_public_path__:()=>b,default:()=>y});var e=r(244),t=r(972),n=r(568),a=r.n(n),s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};const c=t=>{const n=window.SVG,{className:r}=t,o=s(t,["className"]),c=(0,e.classNames)("jimu-icon jimu-icon-component",r);return n?e.React.createElement(n,Object.assign({className:c,src:a()},o)):e.React.createElement("svg",Object.assign({className:c},o))};var i=r(943),l=r.n(i),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};const f=t=>{const n=window.SVG,{className:a}=t,r=u(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",a);return n?e.React.createElement(n,Object.assign({className:o,src:l()},r)):e.React.createElement("svg",Object.assign({className:o},r))},d=({useDataSources:n,children:a,onDataSourceInfoChange:r,onDataSourceCreated:o})=>{const s=(0,t.useCallback)((()=>{let t=a;for(let a=0;a<n.length;a++)t=(0,e.jsx)(e.DataSourceComponent,{useDataSource:n[a],onDataSourceInfoChange:r,onDataSourceCreated:o},t);return t}),[a,r,o,n]),[c,i]=(0,t.useState)(null);return(0,t.useEffect)((()=>{n&&n.length>0?i(s()):i(a)}),[a,s,n]),c};var p=function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function s(e){try{i(a.next(e))}catch(e){o(e)}}function c(e){try{i(a.throw(e))}catch(e){o(e)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}i((a=a.apply(e,t||[])).next())}))};const g=({imgUrls:n,objectFit:a})=>{const[r,o]=(0,t.useState)(0),s=(0,t.useCallback)((()=>{o((r+1)%n.length)}),[r,n]),i=(0,t.useCallback)((()=>{o((r-1+n.length)%n.length)}),[r,n]),l=e.css`
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
  `;return 0===n.length?(0,e.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}):(0,e.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},(0,e.jsx)("img",{src:n[r],style:{width:"100%",height:"100%",objectFit:null!=a?a:"contain"}}),n.length>1&&0!==r&&(0,e.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"40%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},onClick:i},(0,e.jsx)("div",{css:l},(0,e.jsx)(c,{size:"15px"}))),n.length>1&&r!==n.length-1&&(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:"40%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},onClick:s},(0,e.jsx)("div",{css:l},(0,e.jsx)(f,{size:"15px"}))))},h=t=>{const n=e.DataSourceManager.getInstance().getDataSource(t);return null!=n?n:void 0},m=(e,t,n)=>p(void 0,void 0,void 0,(function*(){if(void 0===e.url||null===e.url)return[];const a=`${e.url}/${t}/attachments?f=json`,r=yield fetch(a),o=yield r.json();if(r.ok){const a=[];for(const r of o.attachmentInfos)n?a.push(`${e.url}/${t}/attachments/${r.attachmentid}?w=${n}`):a.push(`${e.url}/${t}/attachments/${r.attachmentid}`);return a}return[]}));function y(n){const[a,r]=(0,t.useState)([]),o=(0,t.useCallback)((()=>p(this,void 0,void 0,(function*(){if(Array.isArray(n.repeatedDataSource))return;const e=h(n.repeatedDataSource.dataSourceId);if(null==e)return;const t=n.repeatedDataSource.record.getId(),a=yield m(e,t,n.config.attachmentSetWidth);r(a)}))),[n.repeatedDataSource,n.config.attachmentSetWidth]),s=(0,t.useCallback)((()=>{"attachment"===n.config.source?o():r([n.config.imgUrl])}),[o,n.config.imgUrl,n.config.source]);return(0,t.useEffect)((()=>{s()}),[s]),(0,e.jsx)(d,{useDataSources:n.useDataSources,onDataSourceInfoChange:s},(0,e.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},(0,e.jsx)(g,{imgUrls:a,objectFit:n.config.objectFit})))}function b(e){r.p=e}})(),o})())}}}));