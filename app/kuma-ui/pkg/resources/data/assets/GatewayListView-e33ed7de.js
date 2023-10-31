import{d as C,r as l,o as i,i as o,w as t,j as n,p as S,n as p,E as V,H as z,q as k,m as d,t as q}from"./index-8bdef5fd.js";import{D as T,K as x}from"./KFilterBar-d2e0c716.js";import{S as D}from"./SummaryView-de117cc5.js";import"./AppCollection-9c4ed2fa.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-e4aed195.js";import"./StatusBadge-e94c2294.js";import"./dataplane-0a086c06.js";const B=C({__name:"GatewayListView",setup(K){return(P,R)=>{const u=l("RouteTitle"),_=l("KSelect"),g=l("KCard"),w=l("RouterView"),f=l("AppView"),c=l("DataSource"),v=l("RouteView");return i(),o(c,{src:"/me"},{default:t(({data:y})=>[y?(i(),o(v,{key:0,name:"gateway-list-view",params:{page:1,size:y.pageSize,gatewayType:"all",query:"",s:"",mesh:"",dataPlane:""}},{default:t(({route:e,can:h,t:b})=>[n(c,{src:`/meshes/${e.params.mesh}/gateways/of/${e.params.gatewayType}?page=${e.params.page}&size=${e.params.size}&search=${e.params.s}`},{default:t(({data:s,error:m})=>[n(f,null,{title:t(()=>[S("h2",null,[n(u,{title:b("gateways.routes.items.title"),render:!0},null,8,["title"])])]),default:t(()=>[p(),n(g,null,{body:t(()=>[m!==void 0?(i(),o(V,{key:0,error:m},null,8,["error"])):(i(),o(T,{key:1,"data-testid":"gateway-collection",class:"gateway-collection","page-number":parseInt(e.params.page),"page-size":parseInt(e.params.size),total:s==null?void 0:s.total,items:s==null?void 0:s.items,error:m,gateways:!0,"is-selected-row":a=>a.name===e.params.dataPlane,"summary-route-name":"gateway-summary-view",onChange:({page:a,size:r})=>{e.update({page:String(a),size:String(r)})}},{toolbar:t(()=>[n(x,{class:"data-plane-proxy-filter",placeholder:"tag: 'kuma.io/protocol: http'",query:e.params.query,fields:{name:{description:"filter by name or parts of a name"},service:{description:"filter by “kuma.io/service” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},...h("use zones")?{zone:{description:"filter by “kuma.io/zone” value"}}:{}},onFieldsChange:a=>e.update({query:a.query,s:a.query.length>0?JSON.stringify(a.fields):""})},null,8,["placeholder","query","fields","onFieldsChange"]),p(),n(_,{label:"Type","overlay-label":!0,items:[{label:"All",value:"all"},{label:"Builtin",value:"builtin"},{label:"Delegated",value:"delegated"}].map(a=>({...a,selected:a.value===e.params.gatewayType})),appearance:"select",onSelected:a=>e.update({gatewayType:String(a.value)})},{"item-template":t(({item:a})=>[p(z(a.label),1)]),_:2},1032,["items","onSelected"])]),_:2},1032,["page-number","page-size","total","items","error","is-selected-row","onChange"]))]),_:2},1024),p(),e.params.dataPlane?(i(),o(w,{key:0},{default:t(a=>[n(D,{onClose:r=>e.replace({name:"gateway-list-view",params:{mesh:e.params.mesh},query:{page:e.params.page,size:e.params.size}})},{default:t(()=>[(i(),o(k(a.Component),{name:e.params.dataPlane,"dataplane-overview":s==null?void 0:s.items.find(r=>r.name===e.params.dataPlane)},null,8,["name","dataplane-overview"]))]),_:2},1032,["onClose"])]),_:2},1024)):d("",!0)]),_:2},1024)]),_:2},1032,["src"])]),_:2},1032,["params"])):d("",!0)]),_:1})}}});const E=q(B,[["__scopeId","data-v-d4a90c78"]]);export{E as default};
