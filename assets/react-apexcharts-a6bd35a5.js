import{a as I,g as L}from"./apexcharts-b986d922.js";import{r as N}from"./react-976e108a.js";import{p as z}from"./prop-types-387d7a00.js";var D={};(function(j){Object.defineProperty(j,"__esModule",{value:!0}),j.default=h;var b=T(N),W=v(I),f=v(z),q=["type","width","height","series","options"];function v(r){return r&&r.__esModule?r:{default:r}}function w(r){var e,t;return typeof WeakMap!="function"?null:(e=new WeakMap,t=new WeakMap,(w=function(n){return n?t:e})(r))}function T(r,e){if(!e&&r&&r.__esModule)return r;if(r===null||s(r)!="object"&&typeof r!="function")return{default:r};if(e=w(e),e&&e.has(r))return e.get(r);var t,n,o={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(t in r)t!=="default"&&{}.hasOwnProperty.call(r,t)&&((n=u?Object.getOwnPropertyDescriptor(r,t):null)&&(n.get||n.set)?Object.defineProperty(o,t,n):o[t]=r[t]);return o.default=r,e&&e.set(r,o),o}function _(){return(_=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t,n=arguments[e];for(t in n)!{}.hasOwnProperty.call(n,t)||(r[t]=n[t])}return r}).apply(null,arguments)}function M(r,e){if(r==null)return{};var t,n=A(r,e);if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(r),u=0;u<o.length;u++)t=o[u],e.includes(t)||{}.propertyIsEnumerable.call(r,t)&&(n[t]=r[t]);return n}function A(r,e){if(r==null)return{};var t,n={};for(t in r)if({}.hasOwnProperty.call(r,t)){if(e.includes(t))continue;n[t]=r[t]}return n}function s(r){return(s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function P(r,e){var t,n=Object.keys(r);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(r),e&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),n.push.apply(n,t)),n}function E(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?P(Object(t),!0).forEach(function(n){S(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function S(r,e,t){return(e=C(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function C(r){return r=K(r,"string"),s(r)=="symbol"?r:r+""}function K(r,e){if(s(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t===void 0)return(e==="string"?String:Number)(r);if(t=t.call(r,e||"default"),s(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}function F(r,e){var t=E({},r);return e.forEach(function(n){delete t[n]}),t}function g(r,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:new WeakSet;if(r!==e){if(s(r)!=="object"||r===null||s(e)!=="object"||e===null)return!1;if(!t.has(r)&&!t.has(e)){t.add(r),t.add(e);var n=Object.keys(r),o=Object.keys(e);if(n.length!==o.length)return!1;for(var u=0,l=n;u<l.length;u++){var i=l[u];if(!o.includes(i)||!g(r[i],e[i],t))return!1}}}return!0}function h(p){function e(c){return c&&s(c)==="object"&&!Array.isArray(c)}var i=p.type,t=i===void 0?"line":i,i=p.width,n=i===void 0?"100%":i,i=p.height,o=i===void 0?"auto":i,u=p.series,l=p.options,i=M(p,q),R=(0,b.useRef)(null),a=(0,b.useRef)(null),m=(0,b.useRef)(),x=((0,b.useEffect)(function(){m.current=l;var c=R.current;return a.current=new W.default(c,x()),a.current.render(),function(){a.current&&typeof a.current.destroy=="function"&&a.current.destroy()}},[]),(0,b.useEffect)(function(){var c=!g(a.current.w.config.series,u),y=!g(m.current,l)||o!==a.current.opts.chart.height||n!==a.current.opts.chart.width;(c||y)&&(!c||y?a.current.updateOptions(x()):a.current.updateSeries(u)),m.current=l},[l,u,o,n]),function(){return k(l,{chart:{type:t,height:o,width:n},series:u})}),k=function(c,y){var O=E({},c);return e(c)&&e(y)&&Object.keys(y).forEach(function(d){e(y[d])&&d in c?O[d]=k(c[d],y[d]):Object.assign(O,S({},d,y[d]))}),O},p=F(i,Object.keys(h.propTypes));return b.default.createElement("div",_({ref:R},p))}h.propTypes={type:f.default.string.isRequired,series:f.default.array.isRequired,options:f.default.object.isRequired,width:f.default.oneOfType([f.default.string,f.default.number]),height:f.default.oneOfType([f.default.string,f.default.number])}})(D);const J=L(D);export{J as R};
