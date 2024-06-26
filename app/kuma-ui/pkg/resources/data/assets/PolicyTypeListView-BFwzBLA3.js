import{d as T,h as o,o as a,a as d,w as e,j as i,g as u,k as y,b as _,F as m,B as w,l as X,t as V,r as $,e as b,A as j}from"./index-CMlVV7ds.js";const z={class:"policy-list-content"},E={class:"policy-count"},q={class:"policy-list"},G=T({__name:"PolicyTypeListView",setup(H){return(J,M)=>{const C=o("RouteTitle"),D=o("XAction"),R=o("DataCollection"),B=o("DataLoader"),P=o("KCard"),x=o("RouterView"),f=o("DataSource"),A=o("AppView"),L=o("RouteView");return a(),d(f,{src:"/me"},{default:e(({data:N})=>[N?(a(),d(L,{key:0,name:"policy-list-view",params:{mesh:"",policyPath:"",policy:""}},{default:e(({route:r,t:S})=>[i(A,null,{title:e(()=>[u("h2",null,[i(C,{title:S("policies.routes.types.title")},null,8,["title"])])]),default:e(()=>[y(),i(f,{src:`/mesh-insights/${r.params.mesh}`},{default:e(({data:t})=>[i(f,{src:"/policy-types"},{default:e(({data:c,error:F})=>[u("div",z,[i(P,{class:"policy-type-list","data-testid":"policy-type-list"},{default:e(()=>[i(B,{data:[c],errors:[F]},{default:e(()=>[(a(!0),_(m,null,w([typeof(t==null?void 0:t.policies)>"u"?c.policies:c.policies.filter(s=>{var p,l;return!s.isTargetRefBased&&(((l=(p=t.policies)==null?void 0:p[s.name])==null?void 0:l.total)??0)>0})],s=>(a(),d(R,{key:s,predicate:typeof(t==null?void 0:t.policies)>"u"?void 0:p=>s.length>0||p.isTargetRefBased,items:c.policies},{default:e(({items:p})=>[(a(!0),_(m,null,w([p.find(l=>l.path===r.params.policyPath)],l=>(a(),_(m,{key:l},[(a(!0),_(m,null,w(p,(n,K)=>{var k,v;return a(),_("div",{key:n.path,class:X(["policy-type-link-wrapper",{"policy-type-link-wrapper--is-active":l&&l.path===n.path}])},[i(D,{class:"policy-type-link",to:{name:"policy-list-view",params:{mesh:r.params.mesh,policyPath:n.path}},mount:r.params.policyPath.length===0&&K===0?r.replace:void 0,"data-testid":`policy-type-link-${n.name}`},{default:e(()=>[y(V(n.name),1)]),_:2},1032,["to","mount","data-testid"]),y(),u("div",E,V(((v=(k=t==null?void 0:t.policies)==null?void 0:k[n.name])==null?void 0:v.total)??0),1)],2)}),128))],64))),128))]),_:2},1032,["predicate","items"]))),128))]),_:2},1032,["data","errors"])]),_:2},1024),y(),u("div",q,[i(x,null,{default:e(({Component:s})=>[(a(),d($(s),{"policy-types":c==null?void 0:c.policies},null,8,["policy-types"]))]),_:2},1024)])])]),_:2},1024)]),_:2},1032,["src"])]),_:2},1024)]),_:1})):b("",!0)]),_:1})}}}),Q=j(G,[["__scopeId","data-v-42d2a862"]]);export{Q as default};