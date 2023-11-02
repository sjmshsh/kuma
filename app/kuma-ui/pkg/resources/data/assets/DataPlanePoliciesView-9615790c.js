import{d as N,r as P,o as t,i as _,w as i,l as a,F as p,I as B,p as C,j as y,n as l,H as $,k as w,a9 as H,t as K,m as D,h as F,E as x,x as J}from"./index-1d7076e0.js";import{A as M,a as Y}from"./AccordionList-a8d28d1d.js";import{_ as z}from"./CodeBlock.vue_vue_type_style_index_0_lang-1f04e28a.js";import{P as G}from"./PolicyTypeTag-82b4b357.js";import{T as j}from"./TagList-40e7707b.js";import{t as I}from"./toYaml-4e00099e.js";const Q={class:"policy-type-heading"},U={class:"policy-list"},W={key:0},X=N({__name:"PolicyTypeEntryList",props:{id:{type:String,required:!1,default:"entry-list"},policyTypeEntries:{type:Object,required:!0}},setup(A){const h=[{label:"From",key:"sourceTags"},{label:"To",key:"destinationTags"},{label:"On",key:"name"},{label:"Conf",key:"config"},{label:"Origin policies",key:"origins"}],T=A;function v({headerKey:f}){return{class:`cell-${f}`}}return(f,R)=>{const E=P("router-link");return t(),_(Y,{"initially-open":[],"multiple-open":""},{default:i(()=>[(t(!0),a(p,null,B(T.policyTypeEntries,(u,s)=>(t(),_(M,{key:s},{"accordion-header":i(()=>[C("h3",Q,[y(G,{"policy-type":u.type},{default:i(()=>[l($(u.type)+" ("+$(u.connections.length)+`)
          `,1)]),_:2},1032,["policy-type"])])]),"accordion-content":i(()=>[C("div",U,[y(w(H),{class:"policy-type-table",fetcher:()=>({data:u.connections,total:u.connections.length}),headers:h,"cell-attrs":v,"disable-pagination":"","is-clickable":""},{sourceTags:i(({rowValue:e})=>[e.length>0?(t(),_(j,{key:0,class:"tag-list",tags:e},null,8,["tags"])):(t(),a(p,{key:1},[l(`
                —
              `)],64))]),destinationTags:i(({rowValue:e})=>[e.length>0?(t(),_(j,{key:0,class:"tag-list",tags:e},null,8,["tags"])):(t(),a(p,{key:1},[l(`
                —
              `)],64))]),name:i(({rowValue:e})=>[e!==null?(t(),a(p,{key:0},[l($(e),1)],64)):(t(),a(p,{key:1},[l(`
                —
              `)],64))]),origins:i(({rowValue:e})=>[e.length>0?(t(),a("ul",W,[(t(!0),a(p,null,B(e,(o,n)=>(t(),a("li",{key:`${s}-${n}`},[y(E,{to:o.route},{default:i(()=>[l($(o.name),1)]),_:2},1032,["to"])]))),128))])):(t(),a(p,{key:1},[l(`
                —
              `)],64))]),config:i(({rowValue:e,rowKey:o})=>[e!==null?(t(),_(z,{key:0,id:`${T.id}-${s}-${o}-code-block`,code:e,language:"yaml","show-copy-button":!1},null,8,["id","code"])):(t(),a(p,{key:1},[l(`
                —
              `)],64))]),_:2},1032,["fetcher"])])]),_:2},1024))),128))]),_:1})}}});const Z=K(X,[["__scopeId","data-v-9a1971d5"]]),V={class:"policy-type-heading"},ee={class:"policy-list"},te={key:1,class:"tag-list-wrapper"},ne={key:0},se={key:1},oe={key:0},ae={key:0},ie=N({__name:"RuleEntryList",props:{id:{type:String,required:!1,default:"entry-list"},ruleEntries:{type:Object,required:!0}},setup(A){const h=[{label:"Type",key:"type"},{label:"Addresses",key:"addresses"},{label:"Conf",key:"config"},{label:"Origin policies",key:"origins"}],T=A;function v({headerKey:f}){return{class:`cell-${f}`}}return(f,R)=>{const E=P("router-link");return t(),_(Y,{"initially-open":[],"multiple-open":""},{default:i(()=>[(t(!0),a(p,null,B(T.ruleEntries,(u,s)=>(t(),_(M,{key:s},{"accordion-header":i(()=>[C("h3",V,[y(G,{"policy-type":u.type},{default:i(()=>[l($(u.type)+" ("+$(u.connections.length)+`)
          `,1)]),_:2},1032,["policy-type"])])]),"accordion-content":i(()=>[C("div",ee,[y(w(H),{class:"policy-type-table",fetcher:()=>({data:u.connections,total:u.connections.length}),headers:h,"cell-attrs":v,"disable-pagination":"","is-clickable":""},{type:i(({rowValue:e})=>[e.sourceTags.length===0&&e.destinationTags.length===0?(t(),a(p,{key:0},[l(`
                —
              `)],64)):(t(),a("div",te,[e.sourceTags.length>0?(t(),a("div",ne,[l(`
                  From

                  `),y(j,{class:"tag-list",tags:e.sourceTags},null,8,["tags"])])):D("",!0),l(),e.destinationTags.length>0?(t(),a("div",se,[l(`
                  To

                  `),y(j,{class:"tag-list",tags:e.destinationTags},null,8,["tags"])])):D("",!0)]))]),addresses:i(({rowValue:e})=>[e.length>0?(t(),a("ul",oe,[(t(!0),a(p,null,B(e,(o,n)=>(t(),a("li",{key:`${s}-${n}`},$(o),1))),128))])):(t(),a(p,{key:1},[l(`
                —
              `)],64))]),origins:i(({rowValue:e})=>[e.length>0?(t(),a("ul",ae,[(t(!0),a(p,null,B(e,(o,n)=>(t(),a("li",{key:`${s}-${n}`},[y(E,{to:o.route},{default:i(()=>[l($(o.name),1)]),_:2},1032,["to"])]))),128))])):(t(),a(p,{key:1},[l(`
                —
              `)],64))]),config:i(({rowValue:e,rowKey:o})=>[e!==null?(t(),_(z,{key:0,id:`${T.id}-${s}-${o}-code-block`,code:e,language:"yaml","show-copy-button":!1},null,8,["id","code"])):(t(),a(p,{key:1},[l(`
                —
              `)],64))]),_:2},1032,["fetcher"])])]),_:2},1024))),128))]),_:1})}}});const le=K(ie,[["__scopeId","data-v-3e59037c"]]),ce=C("h2",{class:"visually-hidden"},`
    Policies
  `,-1),re={key:0,class:"mt-2"},pe=C("h2",{class:"mb-2"},`
      Rules
    `,-1),ye=N({__name:"SidecarDataplanePolicyList",props:{sidecarDataplanes:{},rules:{},policyTypesByName:{}},setup(A){const h=A,T=F(()=>f(h.sidecarDataplanes)),v=F(()=>E(h.rules));function f(s){const e=new Map;for(const n of s){const{type:r,service:d}=n,m=typeof d=="string"&&d!==""?[{label:"kuma.io/service",value:d}]:[],g=r==="inbound"||r==="outbound"?n.name:null;for(const[c,k]of Object.entries(n.matchedPolicies)){e.has(c)||e.set(c,{type:c,connections:[]});const L=e.get(c),O=h.policyTypesByName[c];for(const q of k){const b=R(q,O,n,m,g);L.connections.push(...b)}}}const o=Array.from(e.values());return o.sort((n,r)=>n.type.localeCompare(r.type)),o}function R(s,e,o,n,r){const d=s.conf&&Object.keys(s.conf).length>0?I(s.conf):null,g=[{name:s.name,route:{name:"policy-detail-view",params:{mesh:s.mesh,policyPath:e.path,policy:s.name}}}],c=[];if(o.type==="inbound"&&Array.isArray(s.sources))for(const{match:k}of s.sources){const O={sourceTags:[{label:"kuma.io/service",value:k["kuma.io/service"]}],destinationTags:n,name:r,config:d,origins:g};c.push(O)}else{const L={sourceTags:[],destinationTags:n,name:r,config:d,origins:g};c.push(L)}return c}function E(s){const e=new Map;for(const n of s){e.has(n.policyType)||e.set(n.policyType,{type:n.policyType,connections:[]});const r=e.get(n.policyType),d=h.policyTypesByName[n.policyType],m=u(n,d);r.connections.push(...m)}const o=Array.from(e.values());return o.sort((n,r)=>n.type.localeCompare(r.type)),o}function u(s,e){const{type:o,service:n,subset:r,conf:d}=s,m=r?Object.entries(r):[];let g,c;o==="ClientSubset"?m.length>0?g=m.map(([b,S])=>({label:b,value:S})):g=[{label:"kuma.io/service",value:"*"}]:g=[],o==="DestinationSubset"?m.length>0?c=m.map(([b,S])=>({label:b,value:S})):typeof n=="string"&&n!==""?c=[{label:"kuma.io/service",value:n}]:c=[{label:"kuma.io/service",value:"*"}]:o==="ClientSubset"&&typeof n=="string"&&n!==""?c=[{label:"kuma.io/service",value:n}]:c=[];const k=s.addresses??[],L=d&&Object.keys(d).length>0?I(d):null,O=[];for(const b of s.origins)O.push({name:b.name,route:{name:"policy-detail-view",params:{mesh:b.mesh,policyPath:e.path,policy:b.name}}});return[{type:{sourceTags:g,destinationTags:c},addresses:k,config:L,origins:O}]}return(s,e)=>(t(),a(p,null,[ce,l(),y(Z,{id:"policies","policy-type-entries":T.value,"data-testid":"policy-list"},null,8,["policy-type-entries"]),l(),v.value.length>0?(t(),a("div",re,[pe,l(),y(le,{id:"rules","rule-entries":v.value,"data-testid":"rule-list"},null,8,["rule-entries"])])):D("",!0)],64))}}),he=N({__name:"DataPlanePoliciesView",setup(A){return(h,T)=>{const v=P("RouteTitle"),f=P("DataSource"),R=P("KCard"),E=P("AppView"),u=P("RouteView");return t(),_(u,{name:"data-plane-policies-view",params:{mesh:"",dataPlane:""}},{default:i(({route:s,t:e})=>[y(E,null,{title:i(()=>[C("h2",null,[y(v,{title:e("data-planes.routes.item.navigation.data-plane-policies-view"),render:!0},null,8,["title"])])]),default:i(()=>[l(),y(R,null,{body:i(()=>[y(f,{src:"/*/policy-types"},{default:i(({data:o,error:n})=>[y(f,{src:`/meshes/${s.params.mesh}/dataplanes/${s.params.dataPlane}/sidecar-dataplanes-policies`},{default:i(({data:r,error:d})=>[y(f,{src:`/meshes/${s.params.mesh}/dataplanes/${s.params.dataPlane}/rules`},{default:i(({data:m,error:g})=>[n?(t(),_(x,{key:0,error:n},null,8,["error"])):d?(t(),_(x,{key:1,error:d},null,8,["error"])):g?(t(),_(x,{key:2,error:g},null,8,["error"])):o===void 0||r===void 0||m===void 0?(t(),_(J,{key:3})):(t(),_(ye,{key:4,"policy-types-by-name":o.policies.reduce((c,k)=>Object.assign(c,{[k.name]:k}),{}),"sidecar-dataplanes":r.items,rules:m.items},null,8,["policy-types-by-name","sidecar-dataplanes","rules"]))]),_:2},1032,["src"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1})}}});export{he as default};