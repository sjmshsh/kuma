import{d as C,r as t,c as k,v as x,k as N,x as q,o as i,e as D,w as d,h as c,$ as T,a0 as B,i as f,j as y,q as L,g as P,t as S,b as V,F}from"./index-6ef061d4.js";import{_ as b}from"./StatusInfo.vue_vue_type_script_setup_true_lang-dfb8a1dd.js";import{u as A}from"./index-8eaa4fe5.js";const E=f("h2",null,"Dataplanes",-1),j=C({__name:"PolicyConnections",props:{mesh:{type:String,required:!0},policyType:{type:String,required:!0},policyName:{type:String,required:!0}},setup(h){const s=h,v=A(),u=t(!1),o=t(!0),r=t(!1),p=t([]),l=t(""),_=k(()=>{const n=l.value.toLowerCase();return p.value.filter(({dataplane:e})=>e.name.toLowerCase().includes(n))});x(()=>s.policyName,function(){m()}),N(function(){m()});async function m(){r.value=!1,o.value=!0;try{const{items:n,total:e}=await v.getPolicyConnections({mesh:s.mesh,policyType:s.policyType,policyName:s.policyName});u.value=e>0,p.value=n??[]}catch{r.value=!0}finally{o.value=!1}}return(n,e)=>{const g=q("router-link");return i(),D(b,{"has-error":r.value,"is-loading":o.value,"is-empty":!u.value},{default:d(()=>[E,c(),T(f("input",{id:"dataplane-search","onUpdate:modelValue":e[0]||(e[0]=a=>l.value=a),type:"text",class:"k-input mt-4",placeholder:"Filter by name",required:"","data-testid":"dataplane-search-input"},null,512),[[B,l.value]]),c(),(i(!0),y(F,null,L(V(_),(a,w)=>(i(),y("p",{key:w,class:"mt-2","data-testid":"dataplane-name"},[P(g,{to:{name:"data-plane-detail-view",params:{mesh:a.dataplane.mesh,dataPlane:a.dataplane.name}}},{default:d(()=>[c(S(a.dataplane.name),1)]),_:2},1032,["to"])]))),128))]),_:1},8,["has-error","is-loading","is-empty"])}}});export{j as _};