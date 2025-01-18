System.register(["jimu-core","jimu-ui","jimu-core/react"],(function(e,t){var i={},o={},r={};return{setters:[function(e){i.DataSourceManager=e.DataSourceManager,i.css=e.css,i.jsx=e.jsx},function(e){o.Image=e.Image},function(e){r.useCallback=e.useCallback,r.useEffect=e.useEffect,r.useState=e.useState}],execute:function(){e((()=>{var e={244:e=>{"use strict";e.exports=i},972:e=>{"use strict";e.exports=r},321:e=>{"use strict";e.exports=o}},t={};function a(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,a),r.exports}a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var n={};return a.p=window.jimuConfig.baseUrl,(()=>{"use strict";a.r(n),a.d(n,{__set_webpack_public_path__:()=>l,default:()=>r});var e=a(244),t=a(321),i=a(972);function o({filterField:o,filterValue:r,widgetId:a,normalImage:n,activeImage:l,isActive:c,onClick:u,dataSourceId:s,direction:d,customWhereExpr:f}){const g=(0,i.useCallback)((()=>{if(""===o)return;null==u||u();const t=e.DataSourceManager.getInstance().getDataSource(s);if(t.updateQueryParams({},a),""!==r&&null!==t){const e={where:null!=f?f:`${o} = '${r}'`};t.updateQueryParams(e,a)}}),[o,r,a,u,s,f]),v="row"===d?e.css`
      height: 100%;
      aspect-ratio: 1;
    `:e.css`
      width: 100%;
      aspect-ratio: 1;
    `;return(0,e.jsx)("div",{css:v},(0,e.jsx)(t.Image,{src:c?null==l?void 0:l.url:null==n?void 0:n.url,alt:"Loading",style:{width:"100%",aspectRatio:1},onClick:g}))}function r(t){var r,a,n,l,c,u,s,d;const[f,g]=(0,i.useState)(void 0),v=e.css`
    display: flex;
    flex-direction: ${null!==(r=t.config.direction)&&void 0!==r?r:"row"};
    justify-content: ${null!==(a=t.config.justifyContent)&&void 0!==a?a:"center"};
    background-color: ${t.config.backgroundColor};
    gap: ${null!==(n=t.config.gap)&&void 0!==n?n:10}px
  `;(0,i.useEffect)((()=>{var e;if((null===(e=t.useDataSources)||void 0===e?void 0:e.length)>0){const e=t.useDataSources[0];g(e.dataSourceId)}else g(void 0)}),[t]);const[p,m]=(0,i.useState)(0),x=(0,i.useCallback)((e=>`${e.config.filterField} NOT IN (${e.config.filterValues.map((e=>`'${e}'`)).join(",")})`),[]);return(0,e.jsx)("div",{className:"widget-get-map-coordinates jimu-widget p-2",css:v},void 0!==f&&(null===(l=t.config.filterValues)||void 0===l?void 0:l.length)>0&&(null===(c=t.config.normalImages)||void 0===c?void 0:c.length)===(null===(u=t.config.filterValues)||void 0===u?void 0:u.length)&&(null===(s=t.config.activeImages)||void 0===s?void 0:s.length)===(null===(d=t.config.filterValues)||void 0===d?void 0:d.length)&&t.config.filterValues.map(((i,r)=>{var a,n,l;return(0,e.jsx)(o,{key:r,filterField:t.config.filterField,filterValue:i,dataSourceId:f,widgetId:t.id,normalImage:null===(a=t.config.normalImages)||void 0===a?void 0:a[r],activeImage:null===(n=t.config.activeImages)||void 0===n?void 0:n[r],isActive:p===r,onClick:()=>{m(r)},direction:null!==(l=t.config.direction)&&void 0!==l?l:"row",customWhereExpr:"{other}"===i?x(t):void 0})})))}function l(e){a.p=e}})(),n})())}}}));