import{d as f,g as z,h as u,o as l,l as S,j as i,w as e,n as t,H as a,k as n,a6 as _,r as p,i as h,p as c,D as k,G as V,aI as Z,t as b}from"./index-8bdef5fd.js";import{g as x,a as O,b as C}from"./index-8521186b.js";import{S as I}from"./StatusBadge-e94c2294.js";import{_ as R}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-e4aed195.js";const B={class:"stack"},T=f({__name:"ZoneSummary",props:{zoneOverview:{}},setup(r){const{t:o}=z(),s=r,d=u(()=>x(s.zoneOverview)),v=u(()=>O(s.zoneOverview)),m=u(()=>C(s.zoneOverview));return(y,w)=>(l(),S("div",B,[i(_,null,{title:e(()=>[t(a(n(o)("http.api.property.status")),1)]),body:e(()=>[i(I,{status:d.value},null,8,["status"])]),_:1}),t(),i(_,null,{title:e(()=>[t(a(n(o)("http.api.property.type")),1)]),body:e(()=>[t(a(n(o)(`common.product.environment.${v.value||"unknown"}`)),1)]),_:1}),t(),i(_,null,{title:e(()=>[t(a(n(o)("zone-cps.routes.item.authentication_type")),1)]),body:e(()=>[t(a(m.value||n(o)("common.not_applicable")),1)]),_:1})]))}}),D=r=>(k("data-v-6806d3b4"),r=r(),V(),r),$={class:"summary-title-wrapper"},A=D(()=>c("img",{"aria-hidden":"true",src:Z},null,-1)),N={class:"summary-title"},E={key:1,class:"stack"},L=f({__name:"ZoneSummaryView",props:{name:{},zoneOverview:{default:void 0}},setup(r){const{t:o}=z(),s=r;return(d,v)=>{const m=p("RouteTitle"),y=p("RouterLink"),w=p("AppView"),g=p("RouteView");return l(),h(g,{name:"zone-cp-summary-view"},{default:e(()=>[i(w,null,{title:e(()=>[c("div",$,[A,t(),c("h2",N,[i(y,{to:{name:"zone-cp-detail-view",params:{zone:s.name}}},{default:e(()=>[i(m,{title:n(o)("zone-cps.routes.item.title",{name:s.name}),render:!0},null,8,["title"])]),_:1},8,["to"])])])]),default:e(()=>[t(),s.zoneOverview===void 0?(l(),h(R,{key:0},{message:e(()=>[c("p",null,a(n(o)("common.collection.summary.empty_message",{type:"Zone"})),1)]),default:e(()=>[t(a(n(o)("common.collection.summary.empty_title",{type:"Zone"}))+" ",1)]),_:1})):(l(),S("div",E,[c("div",null,[c("h3",null,a(n(o)("zone-cps.routes.item.overview")),1),t(),i(T,{class:"mt-4","zone-overview":s.zoneOverview},null,8,["zone-overview"])])]))]),_:1})]),_:1})}}});const q=b(L,[["__scopeId","data-v-6806d3b4"]]);export{q as default};
