import{u as Y,T as j,R as G,F as H,s as Z}from"./kongponents.es-c2461f07.js";import{d as U,o as r,e as g,w as l,g as b,b as t,h as c,a as J,u as X,r as v,c as A,v as ee,a5 as te,E as ae,j as R,i as p,f as T,Y as V,B as C,t as D,F as se,q as oe,p as le,m as ie}from"./index-8aa6b41f.js";import{_ as ne}from"./PolicyConnections.vue_vue_type_script_setup_true_lang-c1a92f76.js";import{D as re}from"./DataOverview-955a7969.js";import{D as ce,a as pe}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-e35d9008.js";import{T as ue}from"./TabsWidget-3da8e731.js";import{_ as me}from"./YamlView.vue_vue_type_script_setup_true_lang-33f6c4e0.js";import{u as de}from"./store-e7d22d49.js";import{u as ye,a as he}from"./index-79224c9f.js";import{Q as L}from"./QueryParameter-70743f73.js";import{_ as fe}from"./_plugin-vue_export-helper-c27b6911.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-ca3f3820.js";import"./ErrorBlock-b12ed871.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-a4cc3c4a.js";import"./datadogLogEvents-302eea7b.js";import"./TagList-4fdf7412.js";import"./StatusBadge-5ef3f3ad.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-127c112f.js";import"./toYaml-4e00099e.js";const ve=U({__name:"DocumentationLink",props:{href:{type:String,required:!0}},setup(u){const i=u;return(S,x)=>(r(),g(t(j),{class:"docs-link",appearance:"outline",target:"_blank",to:i.href},{default:l(()=>[b(t(Y),{icon:"externalLink",color:"currentColor",size:"16","hide-title":""}),c(`

    Documentation
  `)]),_:1},8,["to"]))}}),_e=u=>(le("data-v-f1f71710"),u=u(),ie(),u),ge={class:"kcard-stack"},be={class:"kcard-border"},Pe=_e(()=>p("p",null,[p("strong",null,"Warning"),c(` This policy is experimental. If you encountered any problem please open an
                  `),p("a",{href:"https://github.com/kumahq/kuma/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},"issue")],-1)),ke={class:"kcard-border"},Te={class:"entity-heading","data-testid":"policy-single-entity"},we=U({__name:"PolicyListView",props:{selectedPolicyName:{type:[String,null],required:!1,default:null},policyPath:{type:String,required:!0},offset:{type:Number,required:!1,default:0}},setup(u){const i=u,S=ye(),x=he(),$=[{hash:"#overview",title:"Overview"},{hash:"#affected-dpps",title:"Affected DPPs"}],q=J(),_=X(),m=de(),w=v(!0),P=v(null),d=v(null),y=v(null),N=v(null),B=v(i.offset),k=v({headers:[{label:"Name",key:"entity"},{label:"Type",key:"type"}],data:[]}),h=A(()=>m.state.policyTypesByPath[i.policyPath]),F=A(()=>m.state.policyTypes.map(e=>({label:e.name,value:e.path,selected:e.path===i.policyPath}))),M=A(()=>m.state.policyTypes.filter(e=>(m.state.sidebar.insights.mesh.policies[e.name]??0)===0).map(e=>e.name));ee(()=>_.params.mesh,function(){_.name===i.policyPath&&E(0)}),z();function z(){const e=m.state.policyTypesByPath[i.policyPath];e!==void 0&&m.dispatch("updatePageTitle",e.name),E(i.offset)}async function E(e){var n;B.value=e,L.set("offset",e>0?e:null),w.value=!0,P.value=null;const s=_.params.mesh,o=_.params.policyPath,a=C;try{const{items:f,next:W}=await S.getAllPolicyEntitiesFromMesh({mesh:s,path:o},{size:a,offset:e});N.value=W,k.value.data=O(f??[]),await I({name:i.selectedPolicyName??((n=k.value.data[0])==null?void 0:n.entity.name),mesh:s,path:o})}catch(f){k.value.data=[],d.value=null,f instanceof Error?P.value=f:console.error(f)}finally{w.value=!1}}function O(e){return e.map(s=>{const{type:o,name:a}=s,n={name:"policy-detail-view",params:{mesh:s.mesh,policyPath:_.params.policyPath,policy:a}};return{entity:s,detailViewRoute:n,type:o}})}async function K(e){const{name:s,mesh:o,type:a}=e,f=m.state.policyTypesByName[a].path;await I({name:s,mesh:o,path:f})}async function I({name:e,mesh:s,path:o}){if(e===void 0){d.value=null,y.value=null,L.set("policy",null);return}try{const a=await S.getSinglePolicyEntity({mesh:s,path:o,name:e});d.value=te(a,["type","name","mesh"]),L.set("policy",a.name),y.value=ae(a)}catch(a){console.error(a)}}function Q(e){q.push({name:"policy-list-view",params:{..._.params,policyPath:e.value}})}return(e,s)=>{var o;return t(h)?(r(),R("div",{key:0,class:V(["relative",t(h).path])},[p("div",ge,[p("div",be,[t(h).isExperimental?(r(),g(t(H),{key:0,"border-variant":"noBorder",class:"mb-4"},{body:l(()=>[b(t(G),{appearance:"warning"},{alertMessage:l(()=>[Pe]),_:1})]),_:1})):T("",!0),c(),b(re,{"selected-entity-name":(o=d.value)==null?void 0:o.name,"page-size":t(C),error:P.value,"is-loading":w.value,"empty-state":{title:"No Data",message:`There are no ${t(h).name} policies present.`},"table-data":k.value,"table-data-is-empty":k.value.data.length===0,next:N.value,"page-offset":B.value,onTableAction:K,onLoadData:E},{additionalControls:l(()=>[b(t(Z),{label:"Policies",items:t(F),"label-attributes":{class:"visually-hidden"},appearance:"select","enable-filtering":!0,onSelected:Q},{"item-template":l(({item:a})=>[p("span",{class:V({"policy-type-empty":t(M).includes(a.label)})},D(a.label),3)]),_:1},8,["items"]),c(),b(ve,{href:`${t(x)("KUMA_DOCS_URL")}/policies/${t(h).path}/?${t(x)("KUMA_UTM_QUERY_PARAMS")}`,"data-testid":"policy-documentation-link"},null,8,["href"])]),default:l(()=>[c(`
          >
          `)]),_:1},8,["selected-entity-name","page-size","error","is-loading","empty-state","table-data","table-data-is-empty","next","page-offset"])]),c(),p("div",ke,[d.value!==null?(r(),g(ue,{key:0,"has-error":P.value!==null,error:P.value,"is-loading":w.value,tabs:$},{tabHeader:l(()=>[p("h1",Te,D(t(h).name)+": "+D(d.value.name),1)]),overview:l(()=>[b(pe,{"data-testid":"policy-detail-label-list"},{default:l(()=>[(r(!0),R(se,null,oe(d.value,(a,n)=>(r(),g(ce,{key:n,term:n},{default:l(()=>[c(D(a),1)]),_:2},1032,["term"]))),128))]),_:1}),c(),y.value!==null?(r(),g(me,{key:0,id:"code-block-policy",class:"mt-4",content:y.value,"is-searchable":""},null,8,["content"])):T("",!0)]),"affected-dpps":l(()=>[y.value!==null?(r(),g(ne,{key:0,mesh:y.value.mesh,"policy-name":y.value.name,"policy-path":t(h).path},null,8,["mesh","policy-name","policy-path"])):T("",!0)]),_:1},8,["has-error","error","is-loading"])):T("",!0)])])],2)):T("",!0)}}});const Ke=fe(we,[["__scopeId","data-v-f1f71710"]]);export{Ke as default};