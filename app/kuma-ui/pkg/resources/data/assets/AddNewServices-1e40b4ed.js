import{O as f,a as g,b as x}from"./OnboardingPage-e91dbd1c.js";import{d as _,o as m,j as S,J as w,Y as h,c as y,e as k,w as a,g as c,h as s,i as e,b as l,p as B,m as C}from"./index-cbde664c.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{u as N}from"./store-cdd14cd4.js";import"./kongponents.es-da35ebcc.js";const A=""+new URL("new-service-demo-bff0792e.svg",import.meta.url).href,I=""+new URL("new-service-manually-5bec5301.svg",import.meta.url).href,$=_({__name:"ServiceBox",props:{active:{type:Boolean,required:!1,default:!1}},emits:["clicked"],setup(t,{emit:o}){const r=t;return(d,n)=>(m(),S("div",{class:h(["box",{"box--active":r.active}]),"data-testid":"box",onClick:n[0]||(n[0]=i=>o("clicked"))},[w(d.$slots,"default",{},void 0,!0)],2))}});const p=v($,[["__scopeId","data-v-93fc7d1a"]]),u=t=>(B("data-v-a7da0bbe"),t=t(),C(),t),O={class:"service-mode-list"},M=u(()=>e("div",{class:"service-box-content"},[e("img",{src:A}),s(),e("p",{class:"service-mode-title"},`
              Demo app
            `),s(),e("p",null,"Counter application")],-1)),V=u(()=>e("div",{class:"service-box-content"},[e("img",{src:I}),s(),e("p",{class:"service-mode-title"},`
              Manually
            `),s(),e("p",null,"After this wizard")],-1)),z=_({__name:"AddNewServices",setup(t){const o=N(),r=y(()=>o.state.onboarding.mode==="manually"?"onboarding-completed":"onboarding-add-services-code");function d(n){o.dispatch("onboarding/changeMode",n)}return(n,i)=>(m(),k(f,null,{header:a(()=>[c(g,null,{title:a(()=>[s(`
          Add services
        `)]),_:1})]),content:a(()=>[e("div",O,[c(p,{active:l(o).state.onboarding.mode==="demo",onClicked:i[0]||(i[0]=b=>d("demo"))},{default:a(()=>[M]),_:1},8,["active"]),s(),c(p,{active:l(o).state.onboarding.mode==="manually",onClicked:i[1]||(i[1]=b=>d("manually"))},{default:a(()=>[V]),_:1},8,["active"])])]),navigation:a(()=>[c(x,{"next-step":l(r),"previous-step":"onboarding-create-mesh"},null,8,["next-step"])]),_:1}))}});const D=v(z,[["__scopeId","data-v-a7da0bbe"]]);export{D as default};