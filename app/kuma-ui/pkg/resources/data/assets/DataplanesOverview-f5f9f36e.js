import{e as O}from"./kongponents.es-7e482eb5.js";import{L as P}from"./LoadingBox-80d56b43.js";import{O as A,a as S,b as T}from"./OnboardingPage-3c492ffc.js";import{S as F}from"./StatusBadge-46dec4fd.js";import{u as N}from"./index-6dab244f.js";import{d as E,r as h,c as b,Q as I,R as L,o as s,b as y,w as t,g as n,y as R,i as o,t as u,j as c,h as w,F as C,e as H}from"./index-987a13b5.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import"./store-b4114847.js";const V={key:0,class:"status-loading-box mb-4"},j={key:1},z={class:"mb-4"},K=E({__name:"DataplanesOverview",setup(Q){const d=N(),k=[{label:"Mesh",key:"mesh"},{label:"Name",key:"name"},{label:"Status",key:"status"}],e=h({total:0,data:[]}),l=h(null),x=b(()=>e.value.data.length>0?"Success":"Waiting for DPPs"),p=b(()=>e.value.data.length>0?"The following data plane proxies (DPPs) are connected to the control plane:":null);I(function(){m()}),v();function m(){l.value!==null&&window.clearTimeout(l.value)}async function v(){let i=!1;const r=[];try{const{items:a}=await d.getAllDataplanes({size:10});if(Array.isArray(a))for(const D of a){const{name:f,mesh:_}=D,B=await d.getDataplaneOverviewFromMesh({mesh:_,name:f}),g=L(B.dataplaneInsight);g==="offline"&&(i=!0),r.push({status:g,name:f,mesh:_})}}catch(a){console.error(a)}e.value.data=r,e.value.total=e.value.data.length,i&&(m(),l.value=window.setTimeout(v,1e3))}return(i,r)=>(s(),y(T,null,{header:t(()=>[n(A,null,R({title:t(()=>[o("p",null,u(x.value),1)]),_:2},[p.value!==null?{name:"description",fn:t(()=>[o("p",null,u(p.value),1)]),key:"0"}:void 0]),1024)]),content:t(()=>[e.value.data.length===0?(s(),c("div",V,[n(P)])):(s(),c("div",j,[o("p",z,[o("b",null,"Found "+u(e.value.data.length)+" DPPs:",1)]),w(),n(H(O),{class:"mb-4",fetcher:()=>e.value,headers:k,"disable-pagination":""},{status:t(({rowValue:a})=>[a?(s(),y(F,{key:0,status:a},null,8,["status"])):(s(),c(C,{key:1},[w(`
              —
            `)],64))]),_:1},8,["fetcher"])]))]),navigation:t(()=>[n(S,{"next-step":"onboarding-completed","previous-step":"onboarding-add-services-code","should-allow-next":e.value.data.length>0},null,8,["should-allow-next"])]),_:1}))}});const $=M(K,[["__scopeId","data-v-9ed5a755"]]);export{$ as default};