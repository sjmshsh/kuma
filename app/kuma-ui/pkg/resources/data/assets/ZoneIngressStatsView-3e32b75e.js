import{E as d}from"./EnvoyData-22589c79.js";import{d as l,a as t,o as m,b as g,w as a,e as n,p as u,f as _}from"./index-20fa483b.js";import"./index-52545d1d.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-25e6a956.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-46648b7f.js";import"./ErrorBlock-2fbf8e8e.js";import"./TextWithCopyButton-f2974027.js";import"./CopyButton-5e030b9a.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-c9613127.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-936d9824.js";const S=l({__name:"ZoneIngressStatsView",setup(f){return(h,x)=>{const s=t("RouteTitle"),r=t("KCard"),i=t("AppView"),p=t("RouteView");return m(),g(p,{name:"zone-ingress-stats-view",params:{zoneIngress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({route:e,t:c})=>[n(i,null,{title:a(()=>[u("h2",null,[n(s,{title:c("zone-ingresses.routes.item.navigation.zone-ingress-stats-view")},null,8,["title"])])]),default:a(()=>[_(),n(r,null,{default:a(()=>[n(d,{resource:"Zone",src:`/zone-ingresses/${e.params.zoneIngress}/data-path/stats`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter==="true","is-reg-exp-mode":e.params.codeRegExp==="true",onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{S as default};