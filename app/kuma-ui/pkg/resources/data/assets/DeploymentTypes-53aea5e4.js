import{c as r}from"./kongponents.es-5ca9e130.js";import{O as g,a as b,b as f}from"./OnboardingPage-f146e446.js";import{c as v,d as y}from"./index-9d6ec76c.js";import{d as h,r as V,c as x,k as z,e as i,w as e,o as p,g as a,h as t,i as d,t as M,b as s,P as S,s as D}from"./index-6ef061d4.js";import{u as G}from"./store-444aa12f.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-8eaa4fe5.js";import"./datadogLogEvents-302eea7b.js";import"./DoughnutChart-a3d097eb.js";const N={class:"graph-list mb-6"},O={class:"radio-button-group"},T=h({__name:"DeploymentTypes",setup(w){const u=v(),m={standalone:y(),"multi-zone":u},c=G(),o=V("standalone"),_=x(()=>m[o.value]);return z(function(){o.value=c.getters["config/getMulticlusterStatus"]?"multi-zone":"standalone"}),(B,n)=>(p(),i(g,{"with-image":""},{header:e(()=>[a(b,null,{title:e(()=>[t(`
          Learn about deployments
        `)]),description:e(()=>[d("p",null,M(s(S))+" can be deployed in standalone or multi-zone mode.",1)]),_:1})]),content:e(()=>[d("div",N,[(p(),i(D(s(_))))]),t(),d("div",O,[a(s(r),{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=l=>o.value=l),name:"mode","selected-value":"standalone","data-testid":"onboarding-standalone-radio-button"},{default:e(()=>[t(`
          Standalone deployment
        `)]),_:1},8,["modelValue"]),t(),a(s(r),{modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=l=>o.value=l),name:"mode","selected-value":"multi-zone","data-testid":"onboarding-multi-zone-radio-button"},{default:e(()=>[t(`
          Multi-zone deployment
        `)]),_:1},8,["modelValue"])])]),navigation:e(()=>[a(f,{"next-step":"onboarding-configuration-types","previous-step":"onboarding-welcome"})]),_:1}))}});const j=C(T,[["__scopeId","data-v-711049bb"]]);export{j as default};