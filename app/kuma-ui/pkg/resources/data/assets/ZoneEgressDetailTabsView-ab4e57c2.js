import{d as x,l as R,Y as E,a as o,o as n,b as c,w as t,e as s,q as l,p as k,f as w,c as T,F as h,D as y}from"./index-c5d86139.js";import{E as B}from"./ErrorBlock-6429551f.js";import{_ as C}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-eb658848.js";import{N}from"./NavTabs-46b0aeab.js";import{T as D}from"./TextWithCopyButton-7ae5a11a.js";import"./index-fce48c05.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-5489e4aa.js";import"./CopyButton-61864c1e.js";const H=x({__name:"ZoneEgressDetailTabsView",setup($){var _;const{t:a}=R(),z=(((_=E().getRoutes().find(e=>e.name==="zone-egress-detail-tabs-view"))==null?void 0:_.children)??[]).map(e=>{var i,m;const u=typeof e.name>"u"?(i=e.children)==null?void 0:i[0]:e,r=u.name,p=((m=u.meta)==null?void 0:m.module)??"";return{title:a(`zone-egresses.routes.item.navigation.${r}`),routeName:r,module:p}});return(e,u)=>{const r=o("RouteTitle"),p=o("RouterView"),f=o("DataSource"),i=o("AppView"),m=o("RouteView");return n(),c(m,{name:"zone-egress-detail-tabs-view",params:{zoneEgress:""}},{default:t(({route:d,can:v})=>[s(i,{breadcrumbs:[...v("use zones")?[{to:{name:"zone-cp-list-view"},text:l(a)("zone-cps.routes.item.breadcrumbs")}]:[],{to:{name:"zone-egress-list-view"},text:l(a)("zone-egresses.routes.item.breadcrumbs")}]},{title:t(()=>[k("h1",null,[s(D,{text:d.params.zoneEgress},{default:t(()=>[s(r,{title:l(a)("zone-egresses.routes.item.title",{name:d.params.zoneEgress})},null,8,["title"])]),_:2},1032,["text"])])]),default:t(()=>[w(),s(f,{src:`/zone-egress-overviews/${d.params.zoneEgress}`},{default:t(({data:b,error:g})=>[g!==void 0?(n(),c(B,{key:0,error:g},null,8,["error"])):b===void 0?(n(),c(C,{key:1})):(n(),T(h,{key:2},[s(N,{class:"route-zone-egress-detail-view-tabs",tabs:l(z)},null,8,["tabs"]),w(),s(p,null,{default:t(V=>[(n(),c(y(V.Component),{data:b},null,8,["data"]))]),_:2},1024)],64))]),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"])]),_:1})}}});export{H as default};