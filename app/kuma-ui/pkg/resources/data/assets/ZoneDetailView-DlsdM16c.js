import{d as N,r as c,o as r,m as y,w as t,b as a,l as u,y as L,R as S,e,k as d,X as p,t as i,S as T,n as B,Y as D,K,p as C,c as _,F as O,s as v,q as A}from"./index-BH25Q5I8.js";import{m as R}from"./kong-icons.es337-Cet3Tqb4.js";import{_ as x}from"./SubscriptionList.vue_vue_type_script_setup_true_lang-Kt_Em8Lz.js";import"./AccordionList-CTvMa0zs.js";const E=["data-testid","innerHTML"],M={"data-testid":"detail-view-details",class:"stack"},H={class:"columns"},U=["innerHTML"],Z={key:0},$=N({__name:"ZoneDetailView",props:{data:{}},setup(z){const n=z;return(F,G)=>{const I=c("KTooltip"),m=c("KCard"),b=c("AppView"),g=c("DataSource"),w=c("RouteView");return r(),y(w,{name:"zone-cp-detail-view"},{default:t(({t:o,uri:V})=>{var h,f;return[a(g,{src:V(u(L),"/control-plane/outdated/:version",{version:((f=(h=n.data.zoneInsight.version)==null?void 0:h.kumaCp)==null?void 0:f.version)??"-"})},{default:t(({data:s})=>[a(b,null,S({default:t(()=>[e(),d("div",M,[a(m,null,{default:t(()=>[d("div",H,[a(p,null,{title:t(()=>[e(i(o("http.api.property.status")),1)]),body:t(()=>[a(T,{status:n.data.state},null,8,["status"])]),_:2},1024),e(),a(p,{class:B({version:!0,outdated:s==null?void 0:s.outdated})},{title:t(()=>[e(i(o("zone-cps.routes.item.version"))+" ",1),(s==null?void 0:s.outdated)===!0?(r(),y(I,{key:0,"max-width":"300"},{content:t(()=>[d("div",{innerHTML:o("zone-cps.routes.item.version_warning")},null,8,U)]),default:t(()=>[a(u(R),{color:u(D),size:u(K)},null,8,["color","size"]),e()]),_:2},1024)):C("",!0)]),body:t(()=>{var l,k;return[e(i(((k=(l=n.data.zoneInsight.version)==null?void 0:l.kumaCp)==null?void 0:k.version)??"—"),1)]}),_:2},1032,["class"]),e(),a(p,null,{title:t(()=>[e(i(o("http.api.property.type")),1)]),body:t(()=>[e(i(o(`common.product.environment.${n.data.zoneInsight.environment||"unknown"}`)),1)]),_:2},1024),e(),a(p,null,{title:t(()=>[e(i(o("zone-cps.routes.item.authentication_type")),1)]),body:t(()=>[e(i(n.data.zoneInsight.authenticationType||o("common.not_applicable")),1)]),_:2},1024)])]),_:2},1024),e(),n.data.zoneInsight.subscriptions.length>0?(r(),_("div",Z,[d("h2",null,i(o("zone-cps.detail.subscriptions")),1),e(),a(m,{class:"mt-4"},{default:t(()=>[a(x,{subscriptions:n.data.zoneInsight.subscriptions},{default:t(()=>[d("p",null,i(o("zone-cps.routes.item.subscription_intro")),1)]),_:2},1032,["subscriptions"])]),_:2},1024)])):C("",!0)])]),_:2},[n.data.warnings.length>0?{name:"notifications",fn:t(()=>[d("ul",null,[(r(!0),_(O,null,v(n.data.warnings,l=>(r(),_("li",{key:l.kind,"data-testid":`warning-${l.kind}`,innerHTML:o(`common.warnings.${l.kind}`,{...l.payload,...l.kind==="INCOMPATIBLE_ZONE_AND_GLOBAL_CPS_VERSIONS"?{globalCpVersion:(s==null?void 0:s.version)??""}:{}})},null,8,E))),128))])]),key:"0"}:void 0]),1024)]),_:2},1032,["src"])]}),_:1})}}}),j=A($,[["__scopeId","data-v-c0ddf65d"]]);export{j as default};
