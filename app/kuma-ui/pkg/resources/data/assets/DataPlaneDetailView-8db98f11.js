import{d as O,g as z,f as L,h as C,r as y,o as s,i as k,w as e,j as i,a5 as S,n as t,p as d,a6 as _,H as n,k as D,a7 as H,K as F,m as R,l as r,F as m,I as T,t as $}from"./index-8bdef5fd.js";import{S as j}from"./StatusBadge-e94c2294.js";import{_ as U}from"./SubscriptionList.vue_vue_type_script_setup_true_lang-337aa74b.js";import{T as B}from"./TagList-db19457f.js";import{a as W,d as K,b as Z,c as G,C as X,I as q}from"./dataplane-0a086c06.js";import"./AccordionList-4cd6ef4b.js";const J=["data-testid","innerHTML"],Q={class:"stack","data-testid":"detail-view-details"},Y={class:"columns"},tt={class:"status-with-reason"},et={class:"columns"},at=["innerHTML"],nt={key:0},st=O({__name:"DataPlaneDetailView",props:{data:{}},setup(M){const{formatIsoDate:V}=z(),x=L(),o=M,w=C(()=>W(o.data.dataplane,o.data.dataplaneInsight)),E=C(()=>K(o.data.dataplane)),A=C(()=>Z(o.data.dataplaneInsight)),N=C(()=>{var v,b;const h=((v=o.data.dataplaneInsight)==null?void 0:v.subscriptions)??[];if(h.length===0)return[];const f=h[h.length-1];if(!("version"in f)||!f.version)return[];const u=f.version,p=[];if(u.kumaDp&&u.envoy){const a=G(u);a.kind!==X&&a.kind!==q&&p.push(a)}const g=(b=o.data.dataplaneInsight)==null?void 0:b.mTLS;return g&&Date.now()>new Date(g==null?void 0:g.certificateExpirationTime).getTime()&&p.push({kind:"CERT_EXPIRED",payload:{}}),x("use zones")&&K(o.data.dataplane).find(I=>I.label==="kuma.io/zone")&&typeof u.kumaDp.kumaCpCompatible=="boolean"&&!u.kumaDp.kumaCpCompatible&&p.push({kind:"INCOMPATIBLE_ZONE_CP_AND_KUMA_DP_VERSIONS",payload:{kumaDp:u.kumaDp.version}}),p});return(h,f)=>{const u=y("KTooltip"),p=y("KCard"),g=y("KAlert"),v=y("AppView"),b=y("RouteView");return s(),k(b,{name:"data-plane-detail-view"},{default:e(({t:a})=>[i(v,null,S({default:e(()=>{var c,I;return[t(),d("div",Q,[i(p,null,{body:e(()=>[d("div",Y,[i(_,null,{title:e(()=>[t(n(a("http.api.property.status")),1)]),body:e(()=>[d("div",tt,[i(j,{status:w.value.status},null,8,["status"]),t(),w.value.reason.length>0?(s(),k(u,{key:0,label:w.value.reason.join(", "),class:"reason-tooltip"},{default:e(()=>[i(D(H),{size:D(F),"hide-title":""},null,8,["size"])]),_:1},8,["label"])):R("",!0)])]),_:2},1024),t(),i(_,null,{title:e(()=>[t(n(a("http.api.property.tags")),1)]),body:e(()=>[E.value.length>0?(s(),k(B,{key:0,tags:E.value},null,8,["tags"])):(s(),r(m,{key:1},[t(n(a("common.detail.none")),1)],64))]),_:2},1024),t(),i(_,null,{title:e(()=>[t(n(a("http.api.property.dependencies")),1)]),body:e(()=>[A.value!==null?(s(),k(B,{key:0,tags:A.value},null,8,["tags"])):(s(),r(m,{key:1},[t(n(a("common.detail.none")),1)],64))]),_:2},1024)])]),_:2},1024),t(),d("div",null,[d("h2",null,n(a("data-planes.routes.item.mtls.title")),1),t(),(c=o.data.dataplaneInsight)!=null&&c.mTLS?(s(!0),r(m,{key:0},T([o.data.dataplaneInsight.mTLS],l=>(s(),k(p,{key:l,class:"mt-4"},{body:e(()=>[d("div",et,[i(_,null,{title:e(()=>[t(n(a("data-planes.routes.item.mtls.expiration_time.title")),1)]),body:e(()=>[t(n(D(V)(l.certificateExpirationTime)),1)]),_:2},1024),t(),i(_,null,{title:e(()=>[t(n(a("data-planes.routes.item.mtls.generation_time.title")),1)]),body:e(()=>[t(n(D(V)(l.lastCertificateRegeneration)),1)]),_:2},1024),t(),i(_,null,{title:e(()=>[t(n(a("data-planes.routes.item.mtls.regenerations.title")),1)]),body:e(()=>[t(n(a("common.formats.integer",{value:l.certificateRegenerations})),1)]),_:2},1024),t(),i(_,null,{title:e(()=>[t(n(a("data-planes.routes.item.mtls.issued_backend.title")),1)]),body:e(()=>[t(n(l.issuedBackend),1)]),_:2},1024),t(),i(_,null,{title:e(()=>[t(n(a("data-planes.routes.item.mtls.supported_backends.title")),1)]),body:e(()=>[d("ul",null,[(s(!0),r(m,null,T(l.supportedBackends,P=>(s(),r("li",{key:P},n(P),1))),128))])]),_:2},1024)])]),_:2},1024))),128)):(s(),k(g,{key:1,class:"mt-4",appearance:"warning"},{alertMessage:e(()=>[d("div",{innerHTML:a("data-planes.routes.item.mtls.disabled")},null,8,at)]),_:2},1024))]),t(),(s(!0),r(m,null,T([((I=o.data.dataplaneInsight)==null?void 0:I.subscriptions)??[]],l=>(s(),r(m,{key:l},[l.length>0?(s(),r("div",nt,[d("h2",null,n(a("data-planes.routes.item.subscriptions.title")),1),t(),i(p,{class:"mt-4"},{body:e(()=>[i(U,{subscriptions:l},null,8,["subscriptions"])]),_:2},1024)])):R("",!0)],64))),128))])]}),_:2},[N.value.length>0?{name:"notifications",fn:e(()=>[d("ul",null,[(s(!0),r(m,null,T(N.value,c=>(s(),r("li",{key:c.kind,"data-testid":`warning-${c.kind}`,innerHTML:a(`common.warnings.${c.kind}`,c.payload)},null,8,J))),128)),t()])]),key:"0"}:void 0]),1024)]),_:1})}}});const pt=$(st,[["__scopeId","data-v-9c99a678"]]);export{pt as default};
