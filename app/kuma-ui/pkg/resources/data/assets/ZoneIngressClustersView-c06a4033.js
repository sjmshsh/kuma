import{E as l}from"./EnvoyData-835e9bec.js";import{d,a as t,o as m,b as u,w as n,e as s,p as g,f as _}from"./index-c5d86139.js";import"./index-fce48c05.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-2f73b84d.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-7f7ecca9.js";import"./ErrorBlock-6429551f.js";import"./TextWithCopyButton-7ae5a11a.js";import"./CopyButton-61864c1e.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-5489e4aa.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-eb658848.js";const B=d({__name:"ZoneIngressClustersView",setup(f){return(h,C)=>{const r=t("RouteTitle"),a=t("KCard"),i=t("AppView"),p=t("RouteView");return m(),u(p,{name:"zone-ingress-clusters-view",params:{zoneIngress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:n(({route:e,t:c})=>[s(i,null,{title:n(()=>[g("h2",null,[s(r,{title:c("zone-ingresses.routes.item.navigation.zone-ingress-clusters-view")},null,8,["title"])])]),default:n(()=>[_(),s(a,null,{default:n(()=>[s(l,{resource:"Zone",src:`/zone-ingresses/${e.params.zoneIngress}/data-path/clusters`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter==="true","is-reg-exp-mode":e.params.codeRegExp==="true",onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{B as default};