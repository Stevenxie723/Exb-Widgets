System.register(["jimu-core","jimu-core/react"],(function(e,t){var n={},a={};return{setters:[function(e){n.DataSourceComponent=e.DataSourceComponent,n.DataSourceManager=e.DataSourceManager,n.React=e.React,n.classNames=e.classNames,n.jsx=e.jsx},function(e){a.useCallback=e.useCallback,a.useEffect=e.useEffect,a.useState=e.useState}],execute:function(){e((()=>{var e={568:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.54.54 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.54.54 0 0 1 .738 0" clip-rule="evenodd"></path></svg>'},943:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.54.54 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.54.54 0 0 1-.738 0" clip-rule="evenodd"></path></svg>'},244:e=>{"use strict";e.exports=n},972:e=>{"use strict";e.exports=a}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var r={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(r),o.d(r,{__set_webpack_public_path__:()=>j,default:()=>y});var e=o(244),t=o(972),n=o(568),a=o.n(n),s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};const c=t=>{const n=window.SVG,{className:o}=t,r=s(t,["className"]),c=(0,e.classNames)("jimu-icon jimu-icon-component",o);return n?e.React.createElement(n,Object.assign({className:c,src:a()},r)):e.React.createElement("svg",Object.assign({className:c},r))};var i=o(943),l=o.n(i),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};const f=t=>{const n=window.SVG,{className:a}=t,o=u(t,["className"]),r=(0,e.classNames)("jimu-icon jimu-icon-component",a);return n?e.React.createElement(n,Object.assign({className:r,src:l()},o)):e.React.createElement("svg",Object.assign({className:r},o))},d=({useDataSources:n,children:a,onDataSourceInfoChange:o,onDataSourceCreated:r})=>{const s=(0,t.useCallback)((()=>{let t=a;for(let a=0;a<n.length;a++)t=(0,e.jsx)(e.DataSourceComponent,{useDataSource:n[a],onDataSourceInfoChange:o,onDataSourceCreated:r},t);return t}),[a,o,r,n]),[c,i]=(0,t.useState)(null);return(0,t.useEffect)((()=>{n&&n.length>0?i(s()):i(a)}),[a,s,n]),c};var p=function(e,t,n,a){return new(n||(n=Promise))((function(o,r){function s(e){try{i(a.next(e))}catch(e){r(e)}}function c(e){try{i(a.throw(e))}catch(e){r(e)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}i((a=a.apply(e,t||[])).next())}))};const g=({imgUrls:n,objectFit:a})=>{const[o,r]=(0,t.useState)(0),s=(0,t.useCallback)((()=>{r((o+1)%n.length)}),[o,n]),i=(0,t.useCallback)((()=>{r((o-1+n.length)%n.length)}),[o,n]);return 0===n.length?(0,e.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}):(0,e.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},(0,e.jsx)("img",{src:n[o],style:{width:"100%",height:"100%",objectFit:null!=a?a:"contain"}}),n.length>1&&0!==o&&(0,e.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"20%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},onClick:i},(0,e.jsx)("div",{style:{width:"100%",aspectRatio:1,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:1e5,backgroundColor:"white",opacity:.5}},(0,e.jsx)(c,{size:"15px"}))),n.length>1&&o!==n.length-1&&(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:"20%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},onClick:s},(0,e.jsx)("div",{style:{width:"100%",aspectRatio:1,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:1e5,backgroundColor:"white",opacity:.5}},(0,e.jsx)(f,{size:"15px"}))))},h=t=>{const n=e.DataSourceManager.getInstance().getDataSource(t);return null!=n?n:void 0},m=(e,t,n)=>p(void 0,void 0,void 0,(function*(){if(void 0===e.url||null===e.url)return[];const a=`${e.url}/${t}/attachments?f=json`,o=yield fetch(a),r=yield o.json();if(o.ok){const a=[];for(const o of r.attachmentInfos)n?a.push(`${e.url}/${t}/attachments/${o.attachmentid}?w=${n}`):a.push(`${e.url}/${t}/attachments/${o.attachmentid}`);return a}return[]}));function y(n){const[a,o]=(0,t.useState)([]),r=(0,t.useCallback)((()=>p(this,void 0,void 0,(function*(){if(Array.isArray(n.repeatedDataSource))return;const e=h(n.repeatedDataSource.dataSourceId);if(null==e)return;const t=n.repeatedDataSource.record.getId(),a=yield m(e,t,n.config.attachmentSetWidth);o(a)}))),[n.repeatedDataSource,n.config.attachmentSetWidth]),s=(0,t.useCallback)((()=>{"attachment"===n.config.source?r():o([n.config.imgUrl])}),[r,n.config.imgUrl,n.config.source]);return(0,t.useEffect)((()=>{s()}),[s]),(0,e.jsx)(d,{useDataSources:n.useDataSources,onDataSourceInfoChange:s},(0,e.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},(0,e.jsx)(g,{imgUrls:a,objectFit:n.config.objectFit})))}function j(e){o.p=e}})(),r})())}}}));