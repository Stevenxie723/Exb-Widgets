System.register(["jimu-core","jimu-ui","jimu-core/react"],(function(e,t){var r={},a={},i={};return{setters:[function(e){r.DataSourceManager=e.DataSourceManager,r.jsx=e.jsx},function(e){a.TextInput=e.TextInput,a.WidgetPlaceholder=e.WidgetPlaceholder},function(e){i.useState=e.useState}],execute:function(){e((()=>{var e={1800:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8Zz4KICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTIuODY2IDNsOS41MjYgMTYuNWExIDEgMCAwIDEtLjg2NiAxLjVIMi40NzRhMSAxIDAgMCAxLS44NjYtMS41TDExLjEzNCAzYTEgMSAwIDAgMSAxLjczMiAwem0tOC42NiAxNmgxNS41ODhMMTIgNS41IDQuMjA2IDE5ek0xMSAxNmgydjJoLTJ2LTJ6bTAtN2gydjVoLTJWOXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},9244:e=>{"use strict";e.exports=r},8972:e=>{"use strict";e.exports=i},4321:e=>{"use strict";e.exports=a}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var u={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(u),o.d(u,{__set_webpack_public_path__:()=>n,default:()=>s});var e=o(9244),t=o(4321);const r={_widgetLabel:"Filter Feature Layer",filterLayer:"Filter layer",chooseAttribute:"Please choose a filter attribute."};var a=o(8972);const i=o(1800);function s(o){const[u,s]=(0,a.useState)();let n=(0,e.jsx)(t.WidgetPlaceholder,{icon:i,message:r.chooseAttribute});if(o.config.filterField){const a=`${r.filterLayer} (${u}) on ${o.config.filterField} attribute`;n=(0,e.jsx)("p",null,(0,e.jsx)(t.TextInput,{placeholder:a,onChange:t=>{(t=>{if(o.useDataSources.length>0){const r=e.DataSourceManager.getInstance(),a=o.useDataSources[0],i=r.getDataSource(a.dataSourceId),u={where:`${o.config.filterField} LIKE '%${t.target.value}%'`};s(a.dataSourceId),i.updateQueryParams(u,o.id)}})(t)}}))}return(0,e.jsx)("div",{className:"widget-get-map-coordinates jimu-widget p-2"},n)}function n(e){o.p=e}})(),u})())}}}));