import{E as B}from"./ErrorBlock-K9GCAVpd.js";import{_ as I}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-1kzDND26.js";import{d as T,l as S,I as D,o as t,c as V,f as m,t as i,q as r,e,R as $,_ as k,W as g,a as c,b as p,w as n,m as y}from"./index-ANwvg_A1.js";import"./index-FZCiQto1.js";import"./TextWithCopyButton-Ac0tj8q8.js";import"./CopyButton-XxMKSpD7.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-lFA8wXpn.js";const M={class:"date-status"},b=T({__name:"ResourceDateStatus",props:{creationTime:{},modificationTime:{}},setup(u){const{t:a,formatIsoDate:d}=S(),l=u,_=D(()=>d(l.creationTime)),s=D(()=>d(l.modificationTime));return(f,h)=>(t(),V("span",M,[m(i(r(a)("common.detail.created"))+": "+i(_.value)+" ",1),e(r($)),m(" "+i(r(a)("common.detail.modified"))+": "+i(s.value),1)]))}}),C=k(b,[["__scopeId","data-v-fa366713"]]),N={key:2,class:"stack","data-testid":"detail-view-details"},A={class:"date-status-wrapper"},E=T({__name:"MeshDetailView",setup(u){const a=g();return(d,l)=>{const _=c("RouteTitle"),s=c("DataSource"),f=c("AppView"),h=c("RouteView");return t(),p(h,{name:"mesh-detail-view",params:{mesh:""}},{default:n(({route:v,t:R})=>[e(_,{title:R("meshes.routes.overview.title"),render:!1},null,8,["title"]),m(),e(f,null,{default:n(()=>[e(s,{src:`/meshes/${v.params.mesh}`},{default:n(({data:o,error:w})=>[e(s,{src:`/mesh-insights/${v.params.mesh}`},{default:n(({data:x})=>[w?(t(),p(B,{key:0,error:w},null,8,["error"])):o===void 0?(t(),p(I,{key:1})):(t(),V("div",N,[e(r(a),{mesh:o,"mesh-insight":x},null,8,["mesh","mesh-insight"]),m(),y("div",A,[e(C,{"creation-time":o.creationTime,"modification-time":o.modificationTime},null,8,["creation-time","modification-time"])])]))]),_:2},1032,["src"])]),_:2},1032,["src"])]),_:2},1024)]),_:1})}}}),J=k(E,[["__scopeId","data-v-e3befb82"]]);export{J as default};