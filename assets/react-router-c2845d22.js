import{r as a}from"./react-976e108a.js";import{i as v,A as T,p as j,s as A,m as V,j as _,g as F,r as w,a as Y}from"./@remix-run-b5d53e07.js";/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function b(){return b=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},b.apply(this,arguments)}const I=a.createContext(null),$=a.createContext(null),R=a.createContext(null),B=a.createContext(null),x=a.createContext({outlet:null,matches:[],isDataRoute:!1}),z=a.createContext(null);function fe(t,e){let{relative:r}=e===void 0?{}:e;P()||v(!1);let{basename:n,navigator:l}=a.useContext(R),{hash:s,pathname:o,search:f}=G(t,{relative:r}),c=o;return n!=="/"&&(c=o==="/"?n:_([n,o])),l.createHref({pathname:c,search:f,hash:s})}function P(){return a.useContext(B)!=null}function L(){return P()||v(!1),a.useContext(B).location}function J(t){a.useContext(R).static||a.useLayoutEffect(t)}function ve(){let{isDataRoute:t}=a.useContext(x);return t?ie():q()}function q(){P()||v(!1);let t=a.useContext(I),{basename:e,future:r,navigator:n}=a.useContext(R),{matches:l}=a.useContext(x),{pathname:s}=L(),o=JSON.stringify(F(l,r.v7_relativeSplatPath)),f=a.useRef(!1);return J(()=>{f.current=!0}),a.useCallback(function(p,u){if(u===void 0&&(u={}),!f.current)return;if(typeof p=="number"){n.go(p);return}let i=w(p,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(i.pathname=i.pathname==="/"?e:_([e,i.pathname])),(u.replace?n.replace:n.push)(i,u.state,u)},[e,n,o,s,t])}function G(t,e){let{relative:r}=e===void 0?{}:e,{future:n}=a.useContext(R),{matches:l}=a.useContext(x),{pathname:s}=L(),o=JSON.stringify(F(l,n.v7_relativeSplatPath));return a.useMemo(()=>w(t,JSON.parse(o),s,r==="path"),[t,o,s,r])}function K(t,e){return Q(t,e)}function Q(t,e,r,n){P()||v(!1);let{navigator:l}=a.useContext(R),{matches:s}=a.useContext(x),o=s[s.length-1],f=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let p=L(),u;if(e){var i;let d=typeof e=="string"?j(e):e;c==="/"||(i=d.pathname)!=null&&i.startsWith(c)||v(!1),u=d}else u=p;let h=u.pathname||"/",m=h;if(c!=="/"){let d=c.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(d.length).join("/")}let g=V(t,{pathname:m}),C=te(g&&g.map(d=>Object.assign({},d,{params:Object.assign({},f,d.params),pathname:_([c,l.encodeLocation?l.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?c:_([c,l.encodeLocation?l.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),s,r,n);return e&&C?a.createElement(B.Provider,{value:{location:b({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:T.Pop}},C):C}function X(){let t=oe(),e=Y(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},e),r?a.createElement("pre",{style:l},r):null,s)}const Z=a.createElement(X,null);class H extends a.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?a.createElement(x.Provider,{value:this.props.routeContext},a.createElement(z.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ee(t){let{routeContext:e,match:r,children:n}=t,l=a.useContext(I);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(x.Provider,{value:e},n)}function te(t,e,r,n){var l;if(e===void 0&&(e=[]),r===void 0&&(r=null),n===void 0&&(n=null),t==null){var s;if(!r)return null;if(r.errors)t=r.matches;else if((s=n)!=null&&s.v7_partialHydration&&e.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let o=t,f=(l=r)==null?void 0:l.errors;if(f!=null){let u=o.findIndex(i=>i.route.id&&(f==null?void 0:f[i.route.id])!==void 0);u>=0||v(!1),o=o.slice(0,Math.min(o.length,u+1))}let c=!1,p=-1;if(r&&n&&n.v7_partialHydration)for(let u=0;u<o.length;u++){let i=o[u];if((i.route.HydrateFallback||i.route.hydrateFallbackElement)&&(p=u),i.route.id){let{loaderData:h,errors:m}=r,g=i.route.loader&&h[i.route.id]===void 0&&(!m||m[i.route.id]===void 0);if(i.route.lazy||g){c=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((u,i,h)=>{let m,g=!1,C=null,d=null;r&&(m=f&&i.route.id?f[i.route.id]:void 0,C=i.route.errorElement||Z,c&&(p<0&&h===0?(le("route-fallback",!1),g=!0,d=null):p===h&&(g=!0,d=i.route.hydrateFallbackElement||null)));let U=e.concat(o.slice(0,h+1)),O=()=>{let E;return m?E=C:g?E=d:i.route.Component?E=a.createElement(i.route.Component,null):i.route.element?E=i.route.element:E=u,a.createElement(ee,{match:i,routeContext:{outlet:u,matches:U,isDataRoute:r!=null},children:E})};return r&&(i.route.ErrorBoundary||i.route.errorElement||h===0)?a.createElement(H,{location:r.location,revalidation:r.revalidation,component:C,error:m,children:O(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):O()},null)}var S=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(S||{}),N=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(N||{});function re(t){let e=a.useContext(I);return e||v(!1),e}function ne(t){let e=a.useContext($);return e||v(!1),e}function ae(t){let e=a.useContext(x);return e||v(!1),e}function W(t){let e=ae(),r=e.matches[e.matches.length-1];return r.route.id||v(!1),r.route.id}function oe(){var t;let e=a.useContext(z),r=ne(N.UseRouteError),n=W(N.UseRouteError);return e!==void 0?e:(t=r.errors)==null?void 0:t[n]}function ie(){let{router:t}=re(S.UseNavigateStable),e=W(N.UseNavigateStable),r=a.useRef(!1);return J(()=>{r.current=!0}),a.useCallback(function(l,s){s===void 0&&(s={}),r.current&&(typeof l=="number"?t.navigate(l):t.navigate(l,b({fromRouteId:e},s)))},[t,e])}const M={};function le(t,e,r){!e&&!M[t]&&(M[t]=!0)}const D={};function se(t,e){D[e]||(D[e]=!0,console.warn(e))}const y=(t,e,r)=>se(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+r+"."));function pe(t,e){t!=null&&t.v7_startTransition||y("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(t!=null&&t.v7_relativeSplatPath)&&(!e||!e.v7_relativeSplatPath)&&y("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),e&&(e.v7_fetcherPersist||y("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),e.v7_normalizeFormMethod||y("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),e.v7_partialHydration||y("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),e.v7_skipActionErrorRevalidation||y("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}function ue(t){v(!1)}function he(t){let{basename:e="/",children:r=null,location:n,navigationType:l=T.Pop,navigator:s,static:o=!1,future:f}=t;P()&&v(!1);let c=e.replace(/^\/*/,"/"),p=a.useMemo(()=>({basename:c,navigator:s,static:o,future:b({v7_relativeSplatPath:!1},f)}),[c,f,s,o]);typeof n=="string"&&(n=j(n));let{pathname:u="/",search:i="",hash:h="",state:m=null,key:g="default"}=n,C=a.useMemo(()=>{let d=A(u,c);return d==null?null:{location:{pathname:d,search:i,hash:h,state:m,key:g},navigationType:l}},[c,u,i,h,m,g,l]);return C==null?null:a.createElement(R.Provider,{value:p},a.createElement(B.Provider,{children:r,value:C}))}function me(t){let{children:e,location:r}=t;return K(k(e),r)}new Promise(()=>{});function k(t,e){e===void 0&&(e=[]);let r=[];return a.Children.forEach(t,(n,l)=>{if(!a.isValidElement(n))return;let s=[...e,l];if(n.type===a.Fragment){r.push.apply(r,k(n.props.children,s));return}n.type!==ue&&v(!1),!n.props.index||!n.props.children||v(!1);let o={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=k(n.props.children,s)),r.push(o)}),r}export{$ as D,R as N,he as R,ve as a,L as b,G as c,I as d,me as e,ue as f,pe as l,fe as u};
