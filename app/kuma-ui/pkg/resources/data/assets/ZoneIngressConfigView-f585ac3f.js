import{E as f}from"./ErrorBlock-18f2aade.js";import{_ as h}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-b9bea89d.js";import{_ as C}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-62390929.js";import{d as x,u as w,a as n,o as s,b as a,w as r,e as t,p as R,f as k,q as z}from"./index-1ce19661.js";import"./index-fce48c05.js";import"./TextWithCopyButton-228c2509.js";import"./CopyButton-3ac2aa71.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-209ba38d.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-bf441bc4.js";import"./toYaml-4e00099e.js";const N=x({__name:"ZoneIngressConfigView",setup(V){const p=w();return(y,E)=>{const m=n("RouteTitle"),l=n("DataSource"),d=n("KCard"),u=n("AppView"),g=n("RouteView");return s(),a(g,{name:"zone-ingress-config-view",params:{zoneIngress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:r(({route:e,t:_})=>[t(u,null,{title:r(()=>[R("h2",null,[t(m,{title:_("zone-ingresses.routes.item.navigation.zone-ingress-config-view")},null,8,["title"])])]),default:r(()=>[k(),t(d,null,{default:r(()=>[t(l,{src:`/zone-ingresses/${e.params.zoneIngress}`},{default:r(({data:i,error:c})=>[c!==void 0?(s(),a(f,{key:0,error:c},null,8,["error"])):i===void 0?(s(),a(h,{key:1})):(s(),a(C,{key:2,id:"code-block-zone-ingress",resource:i.config,"resource-fetcher":o=>z(p).getZoneIngress({name:e.params.zoneIngress},o),"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter==="true","is-reg-exp-mode":e.params.codeRegExp==="true",onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},null,8,["resource","resource-fetcher","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"]))]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{N as default};