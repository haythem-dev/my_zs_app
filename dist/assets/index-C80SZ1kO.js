(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var p_={exports:{}},Zu={},m_={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),rE=Symbol.for("react.portal"),sE=Symbol.for("react.fragment"),oE=Symbol.for("react.strict_mode"),aE=Symbol.for("react.profiler"),lE=Symbol.for("react.provider"),uE=Symbol.for("react.context"),cE=Symbol.for("react.forward_ref"),fE=Symbol.for("react.suspense"),dE=Symbol.for("react.memo"),hE=Symbol.for("react.lazy"),Om=Symbol.iterator;function pE(t){return t===null||typeof t!="object"?null:(t=Om&&t[Om]||t["@@iterator"],typeof t=="function"?t:null)}var g_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v_=Object.assign,__={};function xo(t,e,n){this.props=t,this.context=e,this.refs=__,this.updater=n||g_}xo.prototype.isReactComponent={};xo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function x_(){}x_.prototype=xo.prototype;function Gh(t,e,n){this.props=t,this.context=e,this.refs=__,this.updater=n||g_}var Wh=Gh.prototype=new x_;Wh.constructor=Gh;v_(Wh,xo.prototype);Wh.isPureReactComponent=!0;var km=Array.isArray,y_=Object.prototype.hasOwnProperty,jh={current:null},S_={key:!0,ref:!0,__self:!0,__source:!0};function M_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)y_.call(e,i)&&!S_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Oa,type:t,key:s,ref:o,props:r,_owner:jh.current}}function mE(t,e){return{$$typeof:Oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oa}function gE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bm=/\/+/g;function wc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gE(""+t.key):e.toString(36)}function Yl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oa:case rE:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+wc(o,0):i,km(r)?(n="",t!=null&&(n=t.replace(Bm,"$&/")+"/"),Yl(r,e,n,"",function(u){return u})):r!=null&&(Xh(r)&&(r=mE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Bm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",km(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+wc(s,a);o+=Yl(s,e,n,l,r)}else if(l=pE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+wc(s,a++),o+=Yl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function il(t,e,n){if(t==null)return t;var i=[],r=0;return Yl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function vE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},ql={transition:null},_E={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:ql,ReactCurrentOwner:jh};function E_(){throw Error("act(...) is not supported in production builds of React.")}ke.Children={map:il,forEach:function(t,e,n){il(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return il(t,function(){e++}),e},toArray:function(t){return il(t,function(e){return e})||[]},only:function(t){if(!Xh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=xo;ke.Fragment=sE;ke.Profiler=aE;ke.PureComponent=Gh;ke.StrictMode=oE;ke.Suspense=fE;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_E;ke.act=E_;ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=v_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)y_.call(e,l)&&!S_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Oa,type:t.type,key:r,ref:s,props:i,_owner:o}};ke.createContext=function(t){return t={$$typeof:uE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lE,_context:t},t.Consumer=t};ke.createElement=M_;ke.createFactory=function(t){var e=M_.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:cE,render:t}};ke.isValidElement=Xh;ke.lazy=function(t){return{$$typeof:hE,_payload:{_status:-1,_result:t},_init:vE}};ke.memo=function(t,e){return{$$typeof:dE,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=ql.transition;ql.transition={};try{t()}finally{ql.transition=e}};ke.unstable_act=E_;ke.useCallback=function(t,e){return nn.current.useCallback(t,e)};ke.useContext=function(t){return nn.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};ke.useEffect=function(t,e){return nn.current.useEffect(t,e)};ke.useId=function(){return nn.current.useId()};ke.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return nn.current.useMemo(t,e)};ke.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};ke.useRef=function(t){return nn.current.useRef(t)};ke.useState=function(t){return nn.current.useState(t)};ke.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return nn.current.useTransition()};ke.version="18.3.1";m_.exports=ke;var O=m_.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xE=O,yE=Symbol.for("react.element"),SE=Symbol.for("react.fragment"),ME=Object.prototype.hasOwnProperty,EE=xE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,TE={key:!0,ref:!0,__self:!0,__source:!0};function T_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ME.call(e,i)&&!TE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:yE,type:t,key:s,ref:o,props:r,_owner:EE.current}}Zu.Fragment=SE;Zu.jsx=T_;Zu.jsxs=T_;p_.exports=Zu;var N=p_.exports,w_={exports:{}},En={},A_={exports:{}},C_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,X){var Z=L.length;L.push(X);e:for(;0<Z;){var ae=Z-1>>>1,Se=L[ae];if(0<r(Se,X))L[ae]=X,L[Z]=Se,Z=ae;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var X=L[0],Z=L.pop();if(Z!==X){L[0]=Z;e:for(var ae=0,Se=L.length,$e=Se>>>1;ae<$e;){var j=2*(ae+1)-1,se=L[j],pe=j+1,oe=L[pe];if(0>r(se,Z))pe<Se&&0>r(oe,se)?(L[ae]=oe,L[pe]=Z,ae=pe):(L[ae]=se,L[j]=Z,ae=j);else if(pe<Se&&0>r(oe,Z))L[ae]=oe,L[pe]=Z,ae=pe;else break e}}return X}function r(L,X){var Z=L.sortIndex-X.sortIndex;return Z!==0?Z:L.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,g=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(L){for(var X=n(u);X!==null;){if(X.callback===null)i(u);else if(X.startTime<=L)i(u),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(u)}}function y(L){if(x=!1,_(L),!g)if(n(l)!==null)g=!0,Y(w);else{var X=n(u);X!==null&&$(y,X.startTime-L)}}function w(L,X){g=!1,x&&(x=!1,d(b),b=-1),p=!0;var Z=h;try{for(_(X),f=n(l);f!==null&&(!(f.expirationTime>X)||L&&!P());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,h=f.priorityLevel;var Se=ae(f.expirationTime<=X);X=t.unstable_now(),typeof Se=="function"?f.callback=Se:f===n(l)&&i(l),_(X)}else i(l);f=n(l)}if(f!==null)var $e=!0;else{var j=n(u);j!==null&&$(y,j.startTime-X),$e=!1}return $e}finally{f=null,h=Z,p=!1}}var C=!1,A=null,b=-1,T=5,S=-1;function P(){return!(t.unstable_now()-S<T)}function W(){if(A!==null){var L=t.unstable_now();S=L;var X=!0;try{X=A(!0,L)}finally{X?H():(C=!1,A=null)}}else C=!1}var H;if(typeof v=="function")H=function(){v(W)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ee=K.port2;K.port1.onmessage=W,H=function(){ee.postMessage(null)}}else H=function(){m(W,0)};function Y(L){A=L,C||(C=!0,H())}function $(L,X){b=m(function(){L(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,Y(w))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var X=3;break;default:X=h}var Z=h;h=X;try{return L()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,X){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=h;h=L;try{return X()}finally{h=Z}},t.unstable_scheduleCallback=function(L,X,Z){var ae=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ae+Z:ae):Z=ae,L){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Z+Se,L={id:c++,callback:X,priorityLevel:L,startTime:Z,expirationTime:Se,sortIndex:-1},Z>ae?(L.sortIndex=Z,e(u,L),n(l)===null&&L===n(u)&&(x?(d(b),b=-1):x=!0,$(y,Z-ae))):(L.sortIndex=Se,e(l,L),g||p||(g=!0,Y(w))),L},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(L){var X=h;return function(){var Z=h;h=X;try{return L.apply(this,arguments)}finally{h=Z}}}})(C_);A_.exports=C_;var wE=A_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AE=O,Mn=wE;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R_=new Set,fa={};function us(t,e){to(t,e),to(t+"Capture",e)}function to(t,e){for(fa[t]=e,t=0;t<e.length;t++)R_.add(e[t])}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hf=Object.prototype.hasOwnProperty,CE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vm={},zm={};function RE(t){return Hf.call(zm,t)?!0:Hf.call(Vm,t)?!1:CE.test(t)?zm[t]=!0:(Vm[t]=!0,!1)}function bE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function PE(t,e,n,i){if(e===null||typeof e>"u"||bE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var $h=/[\-:]([a-z])/g;function Yh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($h,Yh);zt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($h,Yh);zt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($h,Yh);zt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function qh(t,e,n,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(PE(e,n,r,i)&&(n=null),i||r===null?RE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Gi=AE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rl=Symbol.for("react.element"),Rs=Symbol.for("react.portal"),bs=Symbol.for("react.fragment"),Kh=Symbol.for("react.strict_mode"),Gf=Symbol.for("react.profiler"),b_=Symbol.for("react.provider"),P_=Symbol.for("react.context"),Zh=Symbol.for("react.forward_ref"),Wf=Symbol.for("react.suspense"),jf=Symbol.for("react.suspense_list"),Qh=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),D_=Symbol.for("react.offscreen"),Hm=Symbol.iterator;function bo(t){return t===null||typeof t!="object"?null:(t=Hm&&t[Hm]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,Ac;function Wo(t){if(Ac===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ac=e&&e[1]||""}return`
`+Ac+t}var Cc=!1;function Rc(t,e){if(!t||Cc)return"";Cc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Cc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Wo(t):""}function DE(t){switch(t.tag){case 5:return Wo(t.type);case 16:return Wo("Lazy");case 13:return Wo("Suspense");case 19:return Wo("SuspenseList");case 0:case 2:case 15:return t=Rc(t.type,!1),t;case 11:return t=Rc(t.type.render,!1),t;case 1:return t=Rc(t.type,!0),t;default:return""}}function Xf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bs:return"Fragment";case Rs:return"Portal";case Gf:return"Profiler";case Kh:return"StrictMode";case Wf:return"Suspense";case jf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case P_:return(t.displayName||"Context")+".Consumer";case b_:return(t._context.displayName||"Context")+".Provider";case Zh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qh:return e=t.displayName||null,e!==null?e:Xf(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return Xf(t(e))}catch{}}return null}function LE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xf(e);case 8:return e===Kh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function L_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function NE(t){var e=L_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sl(t){t._valueTracker||(t._valueTracker=NE(t))}function N_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=L_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function vu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $f(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=_r(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function I_(t,e){e=e.checked,e!=null&&qh(t,"checked",e,!1)}function Yf(t,e){I_(t,e);var n=_r(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qf(t,e.type,n):e.hasOwnProperty("defaultValue")&&qf(t,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qf(t,e,n){(e!=="number"||vu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var jo=Array.isArray;function Xs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+_r(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Kf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(jo(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_r(n)}}function U_(t,e){var n=_r(e.value),i=_r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Xm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function F_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?F_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ol,O_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ol=ol||document.createElement("div"),ol.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ol.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function da(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IE=["Webkit","ms","Moz","O"];Object.keys(Qo).forEach(function(t){IE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qo[e]=Qo[t]})});function k_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Qo.hasOwnProperty(t)&&Qo[t]?(""+e).trim():e+"px"}function B_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=k_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var UE=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qf(t,e){if(e){if(UE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Jf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ed=null;function Jh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var td=null,$s=null,Ys=null;function $m(t){if(t=Va(t)){if(typeof td!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=nc(e),td(t.stateNode,t.type,e))}}function V_(t){$s?Ys?Ys.push(t):Ys=[t]:$s=t}function z_(){if($s){var t=$s,e=Ys;if(Ys=$s=null,$m(t),e)for(t=0;t<e.length;t++)$m(e[t])}}function H_(t,e){return t(e)}function G_(){}var bc=!1;function W_(t,e,n){if(bc)return t(e,n);bc=!0;try{return H_(t,e,n)}finally{bc=!1,($s!==null||Ys!==null)&&(G_(),z_())}}function ha(t,e){var n=t.stateNode;if(n===null)return null;var i=nc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var nd=!1;if(Ui)try{var Po={};Object.defineProperty(Po,"passive",{get:function(){nd=!0}}),window.addEventListener("test",Po,Po),window.removeEventListener("test",Po,Po)}catch{nd=!1}function FE(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Jo=!1,_u=null,xu=!1,id=null,OE={onError:function(t){Jo=!0,_u=t}};function kE(t,e,n,i,r,s,o,a,l){Jo=!1,_u=null,FE.apply(OE,arguments)}function BE(t,e,n,i,r,s,o,a,l){if(kE.apply(this,arguments),Jo){if(Jo){var u=_u;Jo=!1,_u=null}else throw Error(ne(198));xu||(xu=!0,id=u)}}function cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function j_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ym(t){if(cs(t)!==t)throw Error(ne(188))}function VE(t){var e=t.alternate;if(!e){if(e=cs(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ym(r),t;if(s===i)return Ym(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function X_(t){return t=VE(t),t!==null?$_(t):null}function $_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$_(t);if(e!==null)return e;t=t.sibling}return null}var Y_=Mn.unstable_scheduleCallback,qm=Mn.unstable_cancelCallback,zE=Mn.unstable_shouldYield,HE=Mn.unstable_requestPaint,Tt=Mn.unstable_now,GE=Mn.unstable_getCurrentPriorityLevel,ep=Mn.unstable_ImmediatePriority,q_=Mn.unstable_UserBlockingPriority,yu=Mn.unstable_NormalPriority,WE=Mn.unstable_LowPriority,K_=Mn.unstable_IdlePriority,Qu=null,ai=null;function jE(t){if(ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot(Qu,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:YE,XE=Math.log,$E=Math.LN2;function YE(t){return t>>>=0,t===0?32:31-(XE(t)/$E|0)|0}var al=64,ll=4194304;function Xo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Su(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Xo(a):(s&=o,s!==0&&(i=Xo(s)))}else o=n&~r,o!==0?i=Xo(o):s!==0&&(i=Xo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Qn(e),r=1<<n,i|=t[n],e&=~r;return i}function qE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function KE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=qE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function rd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Z_(){var t=al;return al<<=1,!(al&4194240)&&(al=64),t}function Pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function ZE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function tp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function Q_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var J_,np,ex,tx,nx,sd=!1,ul=[],ar=null,lr=null,ur=null,pa=new Map,ma=new Map,nr=[],QE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Km(t,e){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ma.delete(e.pointerId)}}function Do(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Va(e),e!==null&&np(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function JE(t,e,n,i,r){switch(e){case"focusin":return ar=Do(ar,t,e,n,i,r),!0;case"dragenter":return lr=Do(lr,t,e,n,i,r),!0;case"mouseover":return ur=Do(ur,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return pa.set(s,Do(pa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ma.set(s,Do(ma.get(s)||null,t,e,n,i,r)),!0}return!1}function ix(t){var e=Xr(t.target);if(e!==null){var n=cs(e);if(n!==null){if(e=n.tag,e===13){if(e=j_(n),e!==null){t.blockedOn=e,nx(t.priority,function(){ex(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=od(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ed=i,n.target.dispatchEvent(i),ed=null}else return e=Va(n),e!==null&&np(e),t.blockedOn=n,!1;e.shift()}return!0}function Zm(t,e,n){Kl(t)&&n.delete(e)}function eT(){sd=!1,ar!==null&&Kl(ar)&&(ar=null),lr!==null&&Kl(lr)&&(lr=null),ur!==null&&Kl(ur)&&(ur=null),pa.forEach(Zm),ma.forEach(Zm)}function Lo(t,e){t.blockedOn===e&&(t.blockedOn=null,sd||(sd=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,eT)))}function ga(t){function e(r){return Lo(r,t)}if(0<ul.length){Lo(ul[0],t);for(var n=1;n<ul.length;n++){var i=ul[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ar!==null&&Lo(ar,t),lr!==null&&Lo(lr,t),ur!==null&&Lo(ur,t),pa.forEach(e),ma.forEach(e),n=0;n<nr.length;n++)i=nr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)ix(n),n.blockedOn===null&&nr.shift()}var qs=Gi.ReactCurrentBatchConfig,Mu=!0;function tT(t,e,n,i){var r=tt,s=qs.transition;qs.transition=null;try{tt=1,ip(t,e,n,i)}finally{tt=r,qs.transition=s}}function nT(t,e,n,i){var r=tt,s=qs.transition;qs.transition=null;try{tt=4,ip(t,e,n,i)}finally{tt=r,qs.transition=s}}function ip(t,e,n,i){if(Mu){var r=od(t,e,n,i);if(r===null)Vc(t,e,i,Eu,n),Km(t,i);else if(JE(r,t,e,n,i))i.stopPropagation();else if(Km(t,i),e&4&&-1<QE.indexOf(t)){for(;r!==null;){var s=Va(r);if(s!==null&&J_(s),s=od(t,e,n,i),s===null&&Vc(t,e,i,Eu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Vc(t,e,i,null,n)}}var Eu=null;function od(t,e,n,i){if(Eu=null,t=Jh(i),t=Xr(t),t!==null)if(e=cs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=j_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Eu=t,null}function rx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(GE()){case ep:return 1;case q_:return 4;case yu:case WE:return 16;case K_:return 536870912;default:return 16}default:return 16}}var sr=null,rp=null,Zl=null;function sx(){if(Zl)return Zl;var t,e=rp,n=e.length,i,r="value"in sr?sr.value:sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Zl=r.slice(t,1<i?1-i:void 0)}function Ql(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function Qm(){return!1}function Tn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?cl:Qm,this.isPropagationStopped=Qm,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),e}var yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sp=Tn(yo),Ba=vt({},yo,{view:0,detail:0}),iT=Tn(Ba),Dc,Lc,No,Ju=vt({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:op,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==No&&(No&&t.type==="mousemove"?(Dc=t.screenX-No.screenX,Lc=t.screenY-No.screenY):Lc=Dc=0,No=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:Lc}}),Jm=Tn(Ju),rT=vt({},Ju,{dataTransfer:0}),sT=Tn(rT),oT=vt({},Ba,{relatedTarget:0}),Nc=Tn(oT),aT=vt({},yo,{animationName:0,elapsedTime:0,pseudoElement:0}),lT=Tn(aT),uT=vt({},yo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cT=Tn(uT),fT=vt({},yo,{data:0}),eg=Tn(fT),dT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pT[t])?!!e[t]:!1}function op(){return mT}var gT=vt({},Ba,{key:function(t){if(t.key){var e=dT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:op,charCode:function(t){return t.type==="keypress"?Ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vT=Tn(gT),_T=vt({},Ju,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tg=Tn(_T),xT=vt({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:op}),yT=Tn(xT),ST=vt({},yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),MT=Tn(ST),ET=vt({},Ju,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),TT=Tn(ET),wT=[9,13,27,32],ap=Ui&&"CompositionEvent"in window,ea=null;Ui&&"documentMode"in document&&(ea=document.documentMode);var AT=Ui&&"TextEvent"in window&&!ea,ox=Ui&&(!ap||ea&&8<ea&&11>=ea),ng=" ",ig=!1;function ax(t,e){switch(t){case"keyup":return wT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ps=!1;function CT(t,e){switch(t){case"compositionend":return lx(e);case"keypress":return e.which!==32?null:(ig=!0,ng);case"textInput":return t=e.data,t===ng&&ig?null:t;default:return null}}function RT(t,e){if(Ps)return t==="compositionend"||!ap&&ax(t,e)?(t=sx(),Zl=rp=sr=null,Ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ox&&e.locale!=="ko"?null:e.data;default:return null}}var bT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bT[t.type]:e==="textarea"}function ux(t,e,n,i){V_(i),e=Tu(e,"onChange"),0<e.length&&(n=new sp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ta=null,va=null;function PT(t){yx(t,0)}function ec(t){var e=Ns(t);if(N_(e))return t}function DT(t,e){if(t==="change")return e}var cx=!1;if(Ui){var Ic;if(Ui){var Uc="oninput"in document;if(!Uc){var sg=document.createElement("div");sg.setAttribute("oninput","return;"),Uc=typeof sg.oninput=="function"}Ic=Uc}else Ic=!1;cx=Ic&&(!document.documentMode||9<document.documentMode)}function og(){ta&&(ta.detachEvent("onpropertychange",fx),va=ta=null)}function fx(t){if(t.propertyName==="value"&&ec(va)){var e=[];ux(e,va,t,Jh(t)),W_(PT,e)}}function LT(t,e,n){t==="focusin"?(og(),ta=e,va=n,ta.attachEvent("onpropertychange",fx)):t==="focusout"&&og()}function NT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ec(va)}function IT(t,e){if(t==="click")return ec(e)}function UT(t,e){if(t==="input"||t==="change")return ec(e)}function FT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ti=typeof Object.is=="function"?Object.is:FT;function _a(t,e){if(ti(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Hf.call(e,r)||!ti(t[r],e[r]))return!1}return!0}function ag(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lg(t,e){var n=ag(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ag(n)}}function dx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hx(){for(var t=window,e=vu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vu(t.document)}return e}function lp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function OT(t){var e=hx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dx(n.ownerDocument.documentElement,n)){if(i!==null&&lp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=lg(n,s);var o=lg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kT=Ui&&"documentMode"in document&&11>=document.documentMode,Ds=null,ad=null,na=null,ld=!1;function ug(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ld||Ds==null||Ds!==vu(i)||(i=Ds,"selectionStart"in i&&lp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),na&&_a(na,i)||(na=i,i=Tu(ad,"onSelect"),0<i.length&&(e=new sp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ds)))}function fl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ls={animationend:fl("Animation","AnimationEnd"),animationiteration:fl("Animation","AnimationIteration"),animationstart:fl("Animation","AnimationStart"),transitionend:fl("Transition","TransitionEnd")},Fc={},px={};Ui&&(px=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function tc(t){if(Fc[t])return Fc[t];if(!Ls[t])return t;var e=Ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in px)return Fc[t]=e[n];return t}var mx=tc("animationend"),gx=tc("animationiteration"),vx=tc("animationstart"),_x=tc("transitionend"),xx=new Map,cg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){xx.set(t,e),us(e,[t])}for(var Oc=0;Oc<cg.length;Oc++){var kc=cg[Oc],BT=kc.toLowerCase(),VT=kc[0].toUpperCase()+kc.slice(1);Tr(BT,"on"+VT)}Tr(mx,"onAnimationEnd");Tr(gx,"onAnimationIteration");Tr(vx,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(_x,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));us("onBeforeInput",["compositionend","keypress","textInput","paste"]);us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zT=new Set("cancel close invalid load scroll toggle".split(" ").concat($o));function fg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,BE(i,e,void 0,t),t.currentTarget=null}function yx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;fg(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;fg(r,a,u),s=l}}}if(xu)throw t=id,xu=!1,id=null,t}function lt(t,e){var n=e[hd];n===void 0&&(n=e[hd]=new Set);var i=t+"__bubble";n.has(i)||(Sx(e,t,2,!1),n.add(i))}function Bc(t,e,n){var i=0;e&&(i|=4),Sx(n,t,i,e)}var dl="_reactListening"+Math.random().toString(36).slice(2);function xa(t){if(!t[dl]){t[dl]=!0,R_.forEach(function(n){n!=="selectionchange"&&(zT.has(n)||Bc(n,!1,t),Bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[dl]||(e[dl]=!0,Bc("selectionchange",!1,e))}}function Sx(t,e,n,i){switch(rx(e)){case 1:var r=tT;break;case 4:r=nT;break;default:r=ip}n=r.bind(null,e,n,t),r=void 0,!nd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Vc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Xr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}W_(function(){var u=s,c=Jh(n),f=[];e:{var h=xx.get(t);if(h!==void 0){var p=sp,g=t;switch(t){case"keypress":if(Ql(n)===0)break e;case"keydown":case"keyup":p=vT;break;case"focusin":g="focus",p=Nc;break;case"focusout":g="blur",p=Nc;break;case"beforeblur":case"afterblur":p=Nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=sT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=yT;break;case mx:case gx:case vx:p=lT;break;case _x:p=MT;break;case"scroll":p=iT;break;case"wheel":p=TT;break;case"copy":case"cut":case"paste":p=cT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=tg}var x=(e&4)!==0,m=!x&&t==="scroll",d=x?h!==null?h+"Capture":null:h;x=[];for(var v=u,_;v!==null;){_=v;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,d!==null&&(y=ha(v,d),y!=null&&x.push(ya(v,y,_)))),m)break;v=v.return}0<x.length&&(h=new p(h,g,null,n,c),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==ed&&(g=n.relatedTarget||n.fromElement)&&(Xr(g)||g[Fi]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Xr(g):null,g!==null&&(m=cs(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(x=Jm,y="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=tg,y="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?h:Ns(p),_=g==null?h:Ns(g),h=new x(y,v+"leave",p,n,c),h.target=m,h.relatedTarget=_,y=null,Xr(c)===u&&(x=new x(d,v+"enter",g,n,c),x.target=_,x.relatedTarget=m,y=x),m=y,p&&g)t:{for(x=p,d=g,v=0,_=x;_;_=hs(_))v++;for(_=0,y=d;y;y=hs(y))_++;for(;0<v-_;)x=hs(x),v--;for(;0<_-v;)d=hs(d),_--;for(;v--;){if(x===d||d!==null&&x===d.alternate)break t;x=hs(x),d=hs(d)}x=null}else x=null;p!==null&&dg(f,h,p,x,!1),g!==null&&m!==null&&dg(f,m,g,x,!0)}}e:{if(h=u?Ns(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var w=DT;else if(rg(h))if(cx)w=UT;else{w=NT;var C=LT}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=IT);if(w&&(w=w(t,u))){ux(f,w,n,c);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&qf(h,"number",h.value)}switch(C=u?Ns(u):window,t){case"focusin":(rg(C)||C.contentEditable==="true")&&(Ds=C,ad=u,na=null);break;case"focusout":na=ad=Ds=null;break;case"mousedown":ld=!0;break;case"contextmenu":case"mouseup":case"dragend":ld=!1,ug(f,n,c);break;case"selectionchange":if(kT)break;case"keydown":case"keyup":ug(f,n,c)}var A;if(ap)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ps?ax(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(ox&&n.locale!=="ko"&&(Ps||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ps&&(A=sx()):(sr=c,rp="value"in sr?sr.value:sr.textContent,Ps=!0)),C=Tu(u,b),0<C.length&&(b=new eg(b,t,null,n,c),f.push({event:b,listeners:C}),A?b.data=A:(A=lx(n),A!==null&&(b.data=A)))),(A=AT?CT(t,n):RT(t,n))&&(u=Tu(u,"onBeforeInput"),0<u.length&&(c=new eg("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=A))}yx(f,e)})}function ya(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ha(t,n),s!=null&&i.unshift(ya(t,s,r)),s=ha(t,e),s!=null&&i.push(ya(t,s,r))),t=t.return}return i}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ha(n,s),l!=null&&o.unshift(ya(n,l,a))):r||(l=ha(n,s),l!=null&&o.push(ya(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var HT=/\r\n?/g,GT=/\u0000|\uFFFD/g;function hg(t){return(typeof t=="string"?t:""+t).replace(HT,`
`).replace(GT,"")}function hl(t,e,n){if(e=hg(e),hg(t)!==e&&n)throw Error(ne(425))}function wu(){}var ud=null,cd=null;function fd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dd=typeof setTimeout=="function"?setTimeout:void 0,WT=typeof clearTimeout=="function"?clearTimeout:void 0,pg=typeof Promise=="function"?Promise:void 0,jT=typeof queueMicrotask=="function"?queueMicrotask:typeof pg<"u"?function(t){return pg.resolve(null).then(t).catch(XT)}:dd;function XT(t){setTimeout(function(){throw t})}function zc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ga(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ga(e)}function cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var So=Math.random().toString(36).slice(2),si="__reactFiber$"+So,Sa="__reactProps$"+So,Fi="__reactContainer$"+So,hd="__reactEvents$"+So,$T="__reactListeners$"+So,YT="__reactHandles$"+So;function Xr(t){var e=t[si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fi]||n[si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mg(t);t!==null;){if(n=t[si])return n;t=mg(t)}return e}t=n,n=t.parentNode}return null}function Va(t){return t=t[si]||t[Fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function nc(t){return t[Sa]||null}var pd=[],Is=-1;function wr(t){return{current:t}}function ut(t){0>Is||(t.current=pd[Is],pd[Is]=null,Is--)}function st(t,e){Is++,pd[Is]=t.current,t.current=e}var xr={},Kt=wr(xr),un=wr(!1),ns=xr;function no(t,e){var n=t.type.contextTypes;if(!n)return xr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function cn(t){return t=t.childContextTypes,t!=null}function Au(){ut(un),ut(Kt)}function gg(t,e,n){if(Kt.current!==xr)throw Error(ne(168));st(Kt,e),st(un,n)}function Mx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,LE(t)||"Unknown",r));return vt({},n,i)}function Cu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xr,ns=Kt.current,st(Kt,t),st(un,un.current),!0}function vg(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Mx(t,e,ns),i.__reactInternalMemoizedMergedChildContext=t,ut(un),ut(Kt),st(Kt,t)):ut(un),st(un,n)}var Mi=null,ic=!1,Hc=!1;function Ex(t){Mi===null?Mi=[t]:Mi.push(t)}function qT(t){ic=!0,Ex(t)}function Ar(){if(!Hc&&Mi!==null){Hc=!0;var t=0,e=tt;try{var n=Mi;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,ic=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),Y_(ep,Ar),r}finally{tt=e,Hc=!1}}return null}var Us=[],Fs=0,Ru=null,bu=0,Nn=[],In=0,is=null,Ti=1,wi="";function kr(t,e){Us[Fs++]=bu,Us[Fs++]=Ru,Ru=t,bu=e}function Tx(t,e,n){Nn[In++]=Ti,Nn[In++]=wi,Nn[In++]=is,is=t;var i=Ti;t=wi;var r=32-Qn(i)-1;i&=~(1<<r),n+=1;var s=32-Qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ti=1<<32-Qn(e)+r|n<<r|i,wi=s+t}else Ti=1<<s|n<<r|i,wi=t}function up(t){t.return!==null&&(kr(t,1),Tx(t,1,0))}function cp(t){for(;t===Ru;)Ru=Us[--Fs],Us[Fs]=null,bu=Us[--Fs],Us[Fs]=null;for(;t===is;)is=Nn[--In],Nn[In]=null,wi=Nn[--In],Nn[In]=null,Ti=Nn[--In],Nn[In]=null}var yn=null,xn=null,ft=!1,qn=null;function wx(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _g(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,xn=cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=is!==null?{id:Ti,overflow:wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,xn=null,!0):!1;default:return!1}}function md(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gd(t){if(ft){var e=xn;if(e){var n=e;if(!_g(t,e)){if(md(t))throw Error(ne(418));e=cr(n.nextSibling);var i=yn;e&&_g(t,e)?wx(i,n):(t.flags=t.flags&-4097|2,ft=!1,yn=t)}}else{if(md(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ft=!1,yn=t}}}function xg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function pl(t){if(t!==yn)return!1;if(!ft)return xg(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fd(t.type,t.memoizedProps)),e&&(e=xn)){if(md(t))throw Ax(),Error(ne(418));for(;e;)wx(t,e),e=cr(e.nextSibling)}if(xg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=yn?cr(t.stateNode.nextSibling):null;return!0}function Ax(){for(var t=xn;t;)t=cr(t.nextSibling)}function io(){xn=yn=null,ft=!1}function fp(t){qn===null?qn=[t]:qn.push(t)}var KT=Gi.ReactCurrentBatchConfig;function Io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function ml(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yg(t){var e=t._init;return e(t._payload)}function Cx(t){function e(d,v){if(t){var _=d.deletions;_===null?(d.deletions=[v],d.flags|=16):_.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=pr(d,v),d.index=0,d.sibling=null,d}function s(d,v,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<v?(d.flags|=2,v):_):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,v,_,y){return v===null||v.tag!==6?(v=qc(_,d.mode,y),v.return=d,v):(v=r(v,_),v.return=d,v)}function l(d,v,_,y){var w=_.type;return w===bs?c(d,v,_.props.children,y,_.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===er&&yg(w)===v.type)?(y=r(v,_.props),y.ref=Io(d,v,_),y.return=d,y):(y=su(_.type,_.key,_.props,null,d.mode,y),y.ref=Io(d,v,_),y.return=d,y)}function u(d,v,_,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Kc(_,d.mode,y),v.return=d,v):(v=r(v,_.children||[]),v.return=d,v)}function c(d,v,_,y,w){return v===null||v.tag!==7?(v=es(_,d.mode,y,w),v.return=d,v):(v=r(v,_),v.return=d,v)}function f(d,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=qc(""+v,d.mode,_),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case rl:return _=su(v.type,v.key,v.props,null,d.mode,_),_.ref=Io(d,null,v),_.return=d,_;case Rs:return v=Kc(v,d.mode,_),v.return=d,v;case er:var y=v._init;return f(d,y(v._payload),_)}if(jo(v)||bo(v))return v=es(v,d.mode,_,null),v.return=d,v;ml(d,v)}return null}function h(d,v,_,y){var w=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return w!==null?null:a(d,v,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case rl:return _.key===w?l(d,v,_,y):null;case Rs:return _.key===w?u(d,v,_,y):null;case er:return w=_._init,h(d,v,w(_._payload),y)}if(jo(_)||bo(_))return w!==null?null:c(d,v,_,y,null);ml(d,_)}return null}function p(d,v,_,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(_)||null,a(v,d,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case rl:return d=d.get(y.key===null?_:y.key)||null,l(v,d,y,w);case Rs:return d=d.get(y.key===null?_:y.key)||null,u(v,d,y,w);case er:var C=y._init;return p(d,v,_,C(y._payload),w)}if(jo(y)||bo(y))return d=d.get(_)||null,c(v,d,y,w,null);ml(v,y)}return null}function g(d,v,_,y){for(var w=null,C=null,A=v,b=v=0,T=null;A!==null&&b<_.length;b++){A.index>b?(T=A,A=null):T=A.sibling;var S=h(d,A,_[b],y);if(S===null){A===null&&(A=T);break}t&&A&&S.alternate===null&&e(d,A),v=s(S,v,b),C===null?w=S:C.sibling=S,C=S,A=T}if(b===_.length)return n(d,A),ft&&kr(d,b),w;if(A===null){for(;b<_.length;b++)A=f(d,_[b],y),A!==null&&(v=s(A,v,b),C===null?w=A:C.sibling=A,C=A);return ft&&kr(d,b),w}for(A=i(d,A);b<_.length;b++)T=p(A,d,b,_[b],y),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?b:T.key),v=s(T,v,b),C===null?w=T:C.sibling=T,C=T);return t&&A.forEach(function(P){return e(d,P)}),ft&&kr(d,b),w}function x(d,v,_,y){var w=bo(_);if(typeof w!="function")throw Error(ne(150));if(_=w.call(_),_==null)throw Error(ne(151));for(var C=w=null,A=v,b=v=0,T=null,S=_.next();A!==null&&!S.done;b++,S=_.next()){A.index>b?(T=A,A=null):T=A.sibling;var P=h(d,A,S.value,y);if(P===null){A===null&&(A=T);break}t&&A&&P.alternate===null&&e(d,A),v=s(P,v,b),C===null?w=P:C.sibling=P,C=P,A=T}if(S.done)return n(d,A),ft&&kr(d,b),w;if(A===null){for(;!S.done;b++,S=_.next())S=f(d,S.value,y),S!==null&&(v=s(S,v,b),C===null?w=S:C.sibling=S,C=S);return ft&&kr(d,b),w}for(A=i(d,A);!S.done;b++,S=_.next())S=p(A,d,b,S.value,y),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?b:S.key),v=s(S,v,b),C===null?w=S:C.sibling=S,C=S);return t&&A.forEach(function(W){return e(d,W)}),ft&&kr(d,b),w}function m(d,v,_,y){if(typeof _=="object"&&_!==null&&_.type===bs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case rl:e:{for(var w=_.key,C=v;C!==null;){if(C.key===w){if(w=_.type,w===bs){if(C.tag===7){n(d,C.sibling),v=r(C,_.props.children),v.return=d,d=v;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===er&&yg(w)===C.type){n(d,C.sibling),v=r(C,_.props),v.ref=Io(d,C,_),v.return=d,d=v;break e}n(d,C);break}else e(d,C);C=C.sibling}_.type===bs?(v=es(_.props.children,d.mode,y,_.key),v.return=d,d=v):(y=su(_.type,_.key,_.props,null,d.mode,y),y.ref=Io(d,v,_),y.return=d,d=y)}return o(d);case Rs:e:{for(C=_.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(d,v.sibling),v=r(v,_.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=Kc(_,d.mode,y),v.return=d,d=v}return o(d);case er:return C=_._init,m(d,v,C(_._payload),y)}if(jo(_))return g(d,v,_,y);if(bo(_))return x(d,v,_,y);ml(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,_),v.return=d,d=v):(n(d,v),v=qc(_,d.mode,y),v.return=d,d=v),o(d)):n(d,v)}return m}var ro=Cx(!0),Rx=Cx(!1),Pu=wr(null),Du=null,Os=null,dp=null;function hp(){dp=Os=Du=null}function pp(t){var e=Pu.current;ut(Pu),t._currentValue=e}function vd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ks(t,e){Du=t,dp=Os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(dp!==t)if(t={context:t,memoizedValue:e,next:null},Os===null){if(Du===null)throw Error(ne(308));Os=t,Du.dependencies={lanes:0,firstContext:t}}else Os=Os.next=t;return e}var $r=null;function mp(t){$r===null?$r=[t]:$r.push(t)}function bx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,mp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Oi(t,i)}function Oi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function gp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Px(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Oi(t,n)}return r=i.interleaved,r===null?(e.next=e,mp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Oi(t,n)}function Jl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,tp(t,n)}}function Sg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Lu(t,e,n,i){var r=t.updateQueue;tr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(h=e,p=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){f=g.call(p,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,h=typeof g=="function"?g.call(p,f,h):g,h==null)break e;f=vt({},f,h);break e;case 2:tr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ss|=o,t.lanes=o,t.memoizedState=f}}function Mg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var za={},li=wr(za),Ma=wr(za),Ea=wr(za);function Yr(t){if(t===za)throw Error(ne(174));return t}function vp(t,e){switch(st(Ea,e),st(Ma,t),st(li,za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zf(e,t)}ut(li),st(li,e)}function so(){ut(li),ut(Ma),ut(Ea)}function Dx(t){Yr(Ea.current);var e=Yr(li.current),n=Zf(e,t.type);e!==n&&(st(Ma,t),st(li,n))}function _p(t){Ma.current===t&&(ut(li),ut(Ma))}var ht=wr(0);function Nu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gc=[];function xp(){for(var t=0;t<Gc.length;t++)Gc[t]._workInProgressVersionPrimary=null;Gc.length=0}var eu=Gi.ReactCurrentDispatcher,Wc=Gi.ReactCurrentBatchConfig,rs=0,mt=null,Pt=null,Ut=null,Iu=!1,ia=!1,Ta=0,ZT=0;function Gt(){throw Error(ne(321))}function yp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ti(t[n],e[n]))return!1;return!0}function Sp(t,e,n,i,r,s){if(rs=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,eu.current=t===null||t.memoizedState===null?tw:nw,t=n(i,r),ia){s=0;do{if(ia=!1,Ta=0,25<=s)throw Error(ne(301));s+=1,Ut=Pt=null,e.updateQueue=null,eu.current=iw,t=n(i,r)}while(ia)}if(eu.current=Uu,e=Pt!==null&&Pt.next!==null,rs=0,Ut=Pt=mt=null,Iu=!1,e)throw Error(ne(300));return t}function Mp(){var t=Ta!==0;return Ta=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?mt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Bn(){if(Pt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=Ut===null?mt.memoizedState:Ut.next;if(e!==null)Ut=e,Pt=t;else{if(t===null)throw Error(ne(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Ut===null?mt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function wa(t,e){return typeof e=="function"?e(t):e}function jc(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Pt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((rs&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,mt.lanes|=c,ss|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ti(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,ss|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xc(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ti(s,e.memoizedState)||(ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Lx(){}function Nx(t,e){var n=mt,i=Bn(),r=e(),s=!ti(i.memoizedState,r);if(s&&(i.memoizedState=r,ln=!0),i=i.queue,Ep(Fx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,Aa(9,Ux.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(ne(349));rs&30||Ix(n,e,r)}return r}function Ix(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ux(t,e,n,i){e.value=n,e.getSnapshot=i,Ox(e)&&kx(t)}function Fx(t,e,n){return n(function(){Ox(e)&&kx(t)})}function Ox(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ti(t,n)}catch{return!0}}function kx(t){var e=Oi(t,1);e!==null&&Jn(e,t,1,-1)}function Eg(t){var e=ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},e.queue=t,t=t.dispatch=ew.bind(null,mt,t),[e.memoizedState,t]}function Aa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Bx(){return Bn().memoizedState}function tu(t,e,n,i){var r=ii();mt.flags|=t,r.memoizedState=Aa(1|e,n,void 0,i===void 0?null:i)}function rc(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(Pt!==null){var o=Pt.memoizedState;if(s=o.destroy,i!==null&&yp(i,o.deps)){r.memoizedState=Aa(e,n,s,i);return}}mt.flags|=t,r.memoizedState=Aa(1|e,n,s,i)}function Tg(t,e){return tu(8390656,8,t,e)}function Ep(t,e){return rc(2048,8,t,e)}function Vx(t,e){return rc(4,2,t,e)}function zx(t,e){return rc(4,4,t,e)}function Hx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gx(t,e,n){return n=n!=null?n.concat([t]):null,rc(4,4,Hx.bind(null,e,t),n)}function Tp(){}function Wx(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function jx(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Xx(t,e,n){return rs&21?(ti(n,e)||(n=Z_(),mt.lanes|=n,ss|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function QT(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=Wc.transition;Wc.transition={};try{t(!1),e()}finally{tt=n,Wc.transition=i}}function $x(){return Bn().memoizedState}function JT(t,e,n){var i=hr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Yx(t))qx(e,n);else if(n=bx(t,e,n,i),n!==null){var r=tn();Jn(n,t,i,r),Kx(n,e,i)}}function ew(t,e,n){var i=hr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yx(t))qx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ti(a,o)){var l=e.interleaved;l===null?(r.next=r,mp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=bx(t,e,r,i),n!==null&&(r=tn(),Jn(n,t,i,r),Kx(n,e,i))}}function Yx(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function qx(t,e){ia=Iu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Kx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,tp(t,n)}}var Uu={readContext:kn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},tw={readContext:kn,useCallback:function(t,e){return ii().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:Tg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tu(4194308,4,Hx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tu(4194308,4,t,e)},useInsertionEffect:function(t,e){return tu(4,2,t,e)},useMemo:function(t,e){var n=ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=JT.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=ii();return t={current:t},e.memoizedState=t},useState:Eg,useDebugValue:Tp,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=Eg(!1),e=t[0];return t=QT.bind(null,t[1]),ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=ii();if(ft){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Ft===null)throw Error(ne(349));rs&30||Ix(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Tg(Fx.bind(null,i,s,t),[t]),i.flags|=2048,Aa(9,Ux.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ii(),e=Ft.identifierPrefix;if(ft){var n=wi,i=Ti;n=(i&~(1<<32-Qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ZT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nw={readContext:kn,useCallback:Wx,useContext:kn,useEffect:Ep,useImperativeHandle:Gx,useInsertionEffect:Vx,useLayoutEffect:zx,useMemo:jx,useReducer:jc,useRef:Bx,useState:function(){return jc(wa)},useDebugValue:Tp,useDeferredValue:function(t){var e=Bn();return Xx(e,Pt.memoizedState,t)},useTransition:function(){var t=jc(wa)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:Lx,useSyncExternalStore:Nx,useId:$x,unstable_isNewReconciler:!1},iw={readContext:kn,useCallback:Wx,useContext:kn,useEffect:Ep,useImperativeHandle:Gx,useInsertionEffect:Vx,useLayoutEffect:zx,useMemo:jx,useReducer:Xc,useRef:Bx,useState:function(){return Xc(wa)},useDebugValue:Tp,useDeferredValue:function(t){var e=Bn();return Pt===null?e.memoizedState=t:Xx(e,Pt.memoizedState,t)},useTransition:function(){var t=Xc(wa)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:Lx,useSyncExternalStore:Nx,useId:$x,unstable_isNewReconciler:!1};function $n(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _d(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var sc={isMounted:function(t){return(t=t._reactInternals)?cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=tn(),r=hr(t),s=Pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,r),e!==null&&(Jn(e,t,r,i),Jl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=tn(),r=hr(t),s=Pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,r),e!==null&&(Jn(e,t,r,i),Jl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),i=hr(t),r=Pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=fr(t,r,i),e!==null&&(Jn(e,t,i,n),Jl(e,t,i))}};function wg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!_a(n,i)||!_a(r,s):!0}function Zx(t,e,n){var i=!1,r=xr,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(r=cn(e)?ns:Kt.current,i=e.contextTypes,s=(i=i!=null)?no(t,r):xr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=sc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ag(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&sc.enqueueReplaceState(e,e.state,null)}function xd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},gp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=kn(s):(s=cn(e)?ns:Kt.current,r.context=no(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_d(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&sc.enqueueReplaceState(r,r.state,null),Lu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function oo(t,e){try{var n="",i=e;do n+=DE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function $c(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var rw=typeof WeakMap=="function"?WeakMap:Map;function Qx(t,e,n){n=Pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ou||(Ou=!0,Pd=i),yd(t,e)},n}function Jx(t,e,n){n=Pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){yd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yd(t,e),typeof i!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new rw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=_w.bind(null,t,e,n),e.then(t,t))}function Rg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pi(-1,1),e.tag=2,fr(n,e,1))),n.lanes|=1),t)}var sw=Gi.ReactCurrentOwner,ln=!1;function Jt(t,e,n,i){e.child=t===null?Rx(e,null,n,i):ro(e,t.child,n,i)}function Pg(t,e,n,i,r){n=n.render;var s=e.ref;return Ks(e,r),i=Sp(t,e,n,i,s,r),n=Mp(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ki(t,e,r)):(ft&&n&&up(e),e.flags|=1,Jt(t,e,i,r),e.child)}function Dg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Lp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ey(t,e,s,i,r)):(t=su(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:_a,n(o,i)&&t.ref===e.ref)return ki(t,e,r)}return e.flags|=1,t=pr(s,i),t.ref=e.ref,t.return=e,e.child=t}function ey(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(_a(s,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,ki(t,e,r)}return Sd(t,e,n,i,r)}function ty(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(Bs,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(Bs,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(Bs,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(Bs,_n),_n|=i;return Jt(t,e,r,n),e.child}function ny(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sd(t,e,n,i,r){var s=cn(n)?ns:Kt.current;return s=no(e,s),Ks(e,r),n=Sp(t,e,n,i,s,r),i=Mp(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ki(t,e,r)):(ft&&i&&up(e),e.flags|=1,Jt(t,e,n,r),e.child)}function Lg(t,e,n,i,r){if(cn(n)){var s=!0;Cu(e)}else s=!1;if(Ks(e,r),e.stateNode===null)nu(t,e),Zx(e,n,i),xd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=kn(u):(u=cn(n)?ns:Kt.current,u=no(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Ag(e,o,i,u),tr=!1;var h=e.memoizedState;o.state=h,Lu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||un.current||tr?(typeof c=="function"&&(_d(e,n,c,i),l=e.memoizedState),(a=tr||wg(e,n,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Px(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:$n(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=cn(n)?ns:Kt.current,l=no(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Ag(e,o,i,l),tr=!1,h=e.memoizedState,o.state=h,Lu(e,i,o,r);var g=e.memoizedState;a!==f||h!==g||un.current||tr?(typeof p=="function"&&(_d(e,n,p,i),g=e.memoizedState),(u=tr||wg(e,n,u,i,h,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Md(t,e,n,i,s,r)}function Md(t,e,n,i,r,s){ny(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&vg(e,n,!1),ki(t,e,s);i=e.stateNode,sw.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ro(e,t.child,null,s),e.child=ro(e,null,a,s)):Jt(t,e,a,s),e.memoizedState=i.state,r&&vg(e,n,!0),e.child}function iy(t){var e=t.stateNode;e.pendingContext?gg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gg(t,e.context,!1),vp(t,e.containerInfo)}function Ng(t,e,n,i,r){return io(),fp(r),e.flags|=256,Jt(t,e,n,i),e.child}var Ed={dehydrated:null,treeContext:null,retryLane:0};function Td(t){return{baseLanes:t,cachePool:null,transitions:null}}function ry(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(ht,r&1),t===null)return gd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=lc(o,i,0,null),t=es(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Td(n),e.memoizedState=Ed,t):wp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ow(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=pr(a,s):(s=es(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Td(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ed,i}return s=t.child,t=s.sibling,i=pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function wp(t,e){return e=lc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gl(t,e,n,i){return i!==null&&fp(i),ro(e,t.child,null,n),t=wp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ow(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=$c(Error(ne(422))),gl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=lc({mode:"visible",children:i.children},r,0,null),s=es(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ro(e,t.child,null,o),e.child.memoizedState=Td(o),e.memoizedState=Ed,s);if(!(e.mode&1))return gl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=$c(s,i,void 0),gl(t,e,o,i)}if(a=(o&t.childLanes)!==0,ln||a){if(i=Ft,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Oi(t,r),Jn(i,t,r,-1))}return Dp(),i=$c(Error(ne(421))),gl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=xw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,xn=cr(r.nextSibling),yn=e,ft=!0,qn=null,t!==null&&(Nn[In++]=Ti,Nn[In++]=wi,Nn[In++]=is,Ti=t.id,wi=t.overflow,is=e),e=wp(e,i.children),e.flags|=4096,e)}function Ig(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),vd(t.return,e,n)}function Yc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function sy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jt(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ig(t,n,e);else if(t.tag===19)Ig(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Nu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Yc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Nu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Yc(e,!0,n,null,s);break;case"together":Yc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ki(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ss|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function aw(t,e,n){switch(e.tag){case 3:iy(e),io();break;case 5:Dx(e);break;case 1:cn(e.type)&&Cu(e);break;case 4:vp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(Pu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?ry(t,e,n):(st(ht,ht.current&1),t=ki(t,e,n),t!==null?t.sibling:null);st(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return sy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,ty(t,e,n)}return ki(t,e,n)}var oy,wd,ay,ly;oy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wd=function(){};ay=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Yr(li.current);var s=null;switch(n){case"input":r=$f(t,r),i=$f(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=Kf(t,r),i=Kf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=wu)}Qf(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&lt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};ly=function(t,e,n,i){n!==i&&(e.flags|=4)};function Uo(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function lw(t,e,n){var i=e.pendingProps;switch(cp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return cn(e.type)&&Au(),Wt(e),null;case 3:return i=e.stateNode,so(),ut(un),ut(Kt),xp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(pl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(Nd(qn),qn=null))),wd(t,e),Wt(e),null;case 5:_p(e);var r=Yr(Ea.current);if(n=e.type,t!==null&&e.stateNode!=null)ay(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Wt(e),null}if(t=Yr(li.current),pl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[si]=e,i[Sa]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<$o.length;r++)lt($o[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":Gm(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":jm(i,s),lt("invalid",i)}Qf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&hl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&hl(i.textContent,a,t),r=["children",""+a]):fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&lt("scroll",i)}switch(n){case"input":sl(i),Wm(i,s,!0);break;case"textarea":sl(i),Xm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=wu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=F_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[si]=e,t[Sa]=i,oy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jf(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<$o.length;r++)lt($o[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":Gm(t,i),r=$f(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":jm(t,i),r=Kf(t,i),lt("invalid",t);break;default:r=i}Qf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?B_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&O_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&da(t,l):typeof l=="number"&&da(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",t):l!=null&&qh(t,s,l,o))}switch(n){case"input":sl(t),Wm(t,i,!1);break;case"textarea":sl(t),Xm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+_r(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Xs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=wu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)ly(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Yr(Ea.current),Yr(li.current),pl(e)){if(i=e.stateNode,n=e.memoizedProps,i[si]=e,(s=i.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:hl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&hl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[si]=e,e.stateNode=i}return Wt(e),null;case 13:if(ut(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&xn!==null&&e.mode&1&&!(e.flags&128))Ax(),io(),e.flags|=98560,s=!1;else if(s=pl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[si]=e}else io(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else qn!==null&&(Nd(qn),qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?Dt===0&&(Dt=3):Dp())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return so(),wd(t,e),t===null&&xa(e.stateNode.containerInfo),Wt(e),null;case 10:return pp(e.type._context),Wt(e),null;case 17:return cn(e.type)&&Au(),Wt(e),null;case 19:if(ut(ht),s=e.memoizedState,s===null)return Wt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Uo(s,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nu(t),o!==null){for(e.flags|=128,Uo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&Tt()>ao&&(e.flags|=128,i=!0,Uo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Nu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return Wt(e),null}else 2*Tt()-s.renderingStartTime>ao&&n!==1073741824&&(e.flags|=128,i=!0,Uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,n=ht.current,st(ht,i?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return Pp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function uw(t,e){switch(cp(e),e.tag){case 1:return cn(e.type)&&Au(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return so(),ut(un),ut(Kt),xp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _p(e),null;case 13:if(ut(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));io()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(ht),null;case 4:return so(),null;case 10:return pp(e.type._context),null;case 22:case 23:return Pp(),null;case 24:return null;default:return null}}var vl=!1,Yt=!1,cw=typeof WeakSet=="function"?WeakSet:Set,me=null;function ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function Ad(t,e,n){try{n()}catch(i){St(t,e,i)}}var Ug=!1;function fw(t,e){if(ud=Mu,t=hx(),lp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cd={focusedElem:t,selectionRange:n},Mu=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,m=g.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?x:$n(e.type,x),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){St(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return g=Ug,Ug=!1,g}function ra(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ad(e,n,s)}r=r.next}while(r!==i)}}function oc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Cd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function uy(t){var e=t.alternate;e!==null&&(t.alternate=null,uy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[si],delete e[Sa],delete e[hd],delete e[$T],delete e[YT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cy(t){return t.tag===5||t.tag===3||t.tag===4}function Fg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wu));else if(i!==4&&(t=t.child,t!==null))for(Rd(t,e,n),t=t.sibling;t!==null;)Rd(t,e,n),t=t.sibling}function bd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(bd(t,e,n),t=t.sibling;t!==null;)bd(t,e,n),t=t.sibling}var kt=null,Yn=!1;function Xi(t,e,n){for(n=n.child;n!==null;)fy(t,e,n),n=n.sibling}function fy(t,e,n){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount(Qu,n)}catch{}switch(n.tag){case 5:Yt||ks(n,e);case 6:var i=kt,r=Yn;kt=null,Xi(t,e,n),kt=i,Yn=r,kt!==null&&(Yn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Yn?(t=kt,n=n.stateNode,t.nodeType===8?zc(t.parentNode,n):t.nodeType===1&&zc(t,n),ga(t)):zc(kt,n.stateNode));break;case 4:i=kt,r=Yn,kt=n.stateNode.containerInfo,Yn=!0,Xi(t,e,n),kt=i,Yn=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ad(n,e,o),r=r.next}while(r!==i)}Xi(t,e,n);break;case 1:if(!Yt&&(ks(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){St(n,e,a)}Xi(t,e,n);break;case 21:Xi(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,Xi(t,e,n),Yt=i):Xi(t,e,n);break;default:Xi(t,e,n)}}function Og(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cw),e.forEach(function(i){var r=yw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Yn=!1;break e;case 3:kt=a.stateNode.containerInfo,Yn=!0;break e;case 4:kt=a.stateNode.containerInfo,Yn=!0;break e}a=a.return}if(kt===null)throw Error(ne(160));fy(s,o,r),kt=null,Yn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){St(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dy(e,t),e=e.sibling}function dy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),ni(t),i&4){try{ra(3,t,t.return),oc(3,t)}catch(x){St(t,t.return,x)}try{ra(5,t,t.return)}catch(x){St(t,t.return,x)}}break;case 1:Hn(e,t),ni(t),i&512&&n!==null&&ks(n,n.return);break;case 5:if(Hn(e,t),ni(t),i&512&&n!==null&&ks(n,n.return),t.flags&32){var r=t.stateNode;try{da(r,"")}catch(x){St(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&I_(r,s),Jf(a,o);var u=Jf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?B_(r,f):c==="dangerouslySetInnerHTML"?O_(r,f):c==="children"?da(r,f):qh(r,c,f,u)}switch(a){case"input":Yf(r,s);break;case"textarea":U_(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Xs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Xs(r,!!s.multiple,s.defaultValue,!0):Xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Sa]=s}catch(x){St(t,t.return,x)}}break;case 6:if(Hn(e,t),ni(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){St(t,t.return,x)}}break;case 3:if(Hn(e,t),ni(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ga(e.containerInfo)}catch(x){St(t,t.return,x)}break;case 4:Hn(e,t),ni(t);break;case 13:Hn(e,t),ni(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Rp=Tt())),i&4&&Og(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(u=Yt)||c,Hn(e,t),Yt=u):Hn(e,t),ni(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(me=t,c=t.child;c!==null;){for(f=me=c;me!==null;){switch(h=me,p=h.child,h.tag){case 0:case 11:case 14:case 15:ra(4,h,h.return);break;case 1:ks(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){St(i,n,x)}}break;case 5:ks(h,h.return);break;case 22:if(h.memoizedState!==null){Bg(f);continue}}p!==null?(p.return=h,me=p):Bg(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=k_("display",o))}catch(x){St(t,t.return,x)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){St(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Hn(e,t),ni(t),i&4&&Og(t);break;case 21:break;default:Hn(e,t),ni(t)}}function ni(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cy(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(da(r,""),i.flags&=-33);var s=Fg(t);bd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Fg(t);Rd(t,a,o);break;default:throw Error(ne(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dw(t,e,n){me=t,hy(t)}function hy(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||vl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Yt;a=vl;var u=Yt;if(vl=o,(Yt=l)&&!u)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?Vg(r):l!==null?(l.return=o,me=l):Vg(r);for(;s!==null;)me=s,hy(s),s=s.sibling;me=r,vl=a,Yt=u}kg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):kg(t)}}function kg(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||oc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:$n(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Mg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Mg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&ga(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Yt||e.flags&512&&Cd(e)}catch(h){St(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Bg(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Vg(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{oc(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{Cd(e)}catch(l){St(e,s,l)}break;case 5:var o=e.return;try{Cd(e)}catch(l){St(e,o,l)}}}catch(l){St(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var hw=Math.ceil,Fu=Gi.ReactCurrentDispatcher,Ap=Gi.ReactCurrentOwner,On=Gi.ReactCurrentBatchConfig,Xe=0,Ft=null,bt=null,Vt=0,_n=0,Bs=wr(0),Dt=0,Ca=null,ss=0,ac=0,Cp=0,sa=null,an=null,Rp=0,ao=1/0,Si=null,Ou=!1,Pd=null,dr=null,_l=!1,or=null,ku=0,oa=0,Dd=null,iu=-1,ru=0;function tn(){return Xe&6?Tt():iu!==-1?iu:iu=Tt()}function hr(t){return t.mode&1?Xe&2&&Vt!==0?Vt&-Vt:KT.transition!==null?(ru===0&&(ru=Z_()),ru):(t=tt,t!==0||(t=window.event,t=t===void 0?16:rx(t.type)),t):1}function Jn(t,e,n,i){if(50<oa)throw oa=0,Dd=null,Error(ne(185));ka(t,n,i),(!(Xe&2)||t!==Ft)&&(t===Ft&&(!(Xe&2)&&(ac|=n),Dt===4&&ir(t,Vt)),fn(t,i),n===1&&Xe===0&&!(e.mode&1)&&(ao=Tt()+500,ic&&Ar()))}function fn(t,e){var n=t.callbackNode;KE(t,e);var i=Su(t,t===Ft?Vt:0);if(i===0)n!==null&&qm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&qm(n),e===1)t.tag===0?qT(zg.bind(null,t)):Ex(zg.bind(null,t)),jT(function(){!(Xe&6)&&Ar()}),n=null;else{switch(Q_(i)){case 1:n=ep;break;case 4:n=q_;break;case 16:n=yu;break;case 536870912:n=K_;break;default:n=yu}n=Sy(n,py.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function py(t,e){if(iu=-1,ru=0,Xe&6)throw Error(ne(327));var n=t.callbackNode;if(Zs()&&t.callbackNode!==n)return null;var i=Su(t,t===Ft?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Bu(t,i);else{e=i;var r=Xe;Xe|=2;var s=gy();(Ft!==t||Vt!==e)&&(Si=null,ao=Tt()+500,Jr(t,e));do try{gw();break}catch(a){my(t,a)}while(!0);hp(),Fu.current=s,Xe=r,bt!==null?e=0:(Ft=null,Vt=0,e=Dt)}if(e!==0){if(e===2&&(r=rd(t),r!==0&&(i=r,e=Ld(t,r))),e===1)throw n=Ca,Jr(t,0),ir(t,i),fn(t,Tt()),n;if(e===6)ir(t,i);else{if(r=t.current.alternate,!(i&30)&&!pw(r)&&(e=Bu(t,i),e===2&&(s=rd(t),s!==0&&(i=s,e=Ld(t,s))),e===1))throw n=Ca,Jr(t,0),ir(t,i),fn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Br(t,an,Si);break;case 3:if(ir(t,i),(i&130023424)===i&&(e=Rp+500-Tt(),10<e)){if(Su(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=dd(Br.bind(null,t,an,Si),e);break}Br(t,an,Si);break;case 4:if(ir(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*hw(i/1960))-i,10<i){t.timeoutHandle=dd(Br.bind(null,t,an,Si),i);break}Br(t,an,Si);break;case 5:Br(t,an,Si);break;default:throw Error(ne(329))}}}return fn(t,Tt()),t.callbackNode===n?py.bind(null,t):null}function Ld(t,e){var n=sa;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=Bu(t,e),t!==2&&(e=an,an=n,e!==null&&Nd(e)),t}function Nd(t){an===null?an=t:an.push.apply(an,t)}function pw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ti(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~Cp,e&=~ac,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),i=1<<n;t[n]=-1,e&=~i}}function zg(t){if(Xe&6)throw Error(ne(327));Zs();var e=Su(t,0);if(!(e&1))return fn(t,Tt()),null;var n=Bu(t,e);if(t.tag!==0&&n===2){var i=rd(t);i!==0&&(e=i,n=Ld(t,i))}if(n===1)throw n=Ca,Jr(t,0),ir(t,e),fn(t,Tt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Br(t,an,Si),fn(t,Tt()),null}function bp(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(ao=Tt()+500,ic&&Ar())}}function os(t){or!==null&&or.tag===0&&!(Xe&6)&&Zs();var e=Xe;Xe|=1;var n=On.transition,i=tt;try{if(On.transition=null,tt=1,t)return t()}finally{tt=i,On.transition=n,Xe=e,!(Xe&6)&&Ar()}}function Pp(){_n=Bs.current,ut(Bs)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,WT(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(cp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Au();break;case 3:so(),ut(un),ut(Kt),xp();break;case 5:_p(i);break;case 4:so();break;case 13:ut(ht);break;case 19:ut(ht);break;case 10:pp(i.type._context);break;case 22:case 23:Pp()}n=n.return}if(Ft=t,bt=t=pr(t.current,null),Vt=_n=e,Dt=0,Ca=null,Cp=ac=ss=0,an=sa=null,$r!==null){for(e=0;e<$r.length;e++)if(n=$r[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}$r=null}return t}function my(t,e){do{var n=bt;try{if(hp(),eu.current=Uu,Iu){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Iu=!1}if(rs=0,Ut=Pt=mt=null,ia=!1,Ta=0,Ap.current=null,n===null||n.return===null){Dt=1,Ca=e,bt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Rg(o);if(p!==null){p.flags&=-257,bg(p,o,a,s,e),p.mode&1&&Cg(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){Cg(s,u,e),Dp();break e}l=Error(ne(426))}}else if(ft&&a.mode&1){var m=Rg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),bg(m,o,a,s,e),fp(oo(l,a));break e}}s=l=oo(l,a),Dt!==4&&(Dt=2),sa===null?sa=[s]:sa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Qx(s,l,e);Sg(s,d);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(dr===null||!dr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Jx(s,a,e);Sg(s,y);break e}}s=s.return}while(s!==null)}_y(n)}catch(w){e=w,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function gy(){var t=Fu.current;return Fu.current=Uu,t===null?Uu:t}function Dp(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),Ft===null||!(ss&268435455)&&!(ac&268435455)||ir(Ft,Vt)}function Bu(t,e){var n=Xe;Xe|=2;var i=gy();(Ft!==t||Vt!==e)&&(Si=null,Jr(t,e));do try{mw();break}catch(r){my(t,r)}while(!0);if(hp(),Xe=n,Fu.current=i,bt!==null)throw Error(ne(261));return Ft=null,Vt=0,Dt}function mw(){for(;bt!==null;)vy(bt)}function gw(){for(;bt!==null&&!zE();)vy(bt)}function vy(t){var e=yy(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?_y(t):bt=e,Ap.current=null}function _y(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uw(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,bt=null;return}}else if(n=lw(n,e,_n),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Dt===0&&(Dt=5)}function Br(t,e,n){var i=tt,r=On.transition;try{On.transition=null,tt=1,vw(t,e,n,i)}finally{On.transition=r,tt=i}return null}function vw(t,e,n,i){do Zs();while(or!==null);if(Xe&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ZE(t,s),t===Ft&&(bt=Ft=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_l||(_l=!0,Sy(yu,function(){return Zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=On.transition,On.transition=null;var o=tt;tt=1;var a=Xe;Xe|=4,Ap.current=null,fw(t,n),dy(n,t),OT(cd),Mu=!!ud,cd=ud=null,t.current=n,dw(n),HE(),Xe=a,tt=o,On.transition=s}else t.current=n;if(_l&&(_l=!1,or=t,ku=r),s=t.pendingLanes,s===0&&(dr=null),jE(n.stateNode),fn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ou)throw Ou=!1,t=Pd,Pd=null,t;return ku&1&&t.tag!==0&&Zs(),s=t.pendingLanes,s&1?t===Dd?oa++:(oa=0,Dd=t):oa=0,Ar(),null}function Zs(){if(or!==null){var t=Q_(ku),e=On.transition,n=tt;try{if(On.transition=null,tt=16>t?16:t,or===null)var i=!1;else{if(t=or,or=null,ku=0,Xe&6)throw Error(ne(331));var r=Xe;for(Xe|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(me=u;me!==null;){var c=me;switch(c.tag){case 0:case 11:case 15:ra(8,c,s)}var f=c.child;if(f!==null)f.return=c,me=f;else for(;me!==null;){c=me;var h=c.sibling,p=c.return;if(uy(c),c===u){me=null;break}if(h!==null){h.return=p,me=h;break}me=p}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ra(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,me=d;break e}me=s.return}}var v=t.current;for(me=v;me!==null;){o=me;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,me=_;else e:for(o=v;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:oc(9,a)}}catch(w){St(a,a.return,w)}if(a===o){me=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,me=y;break e}me=a.return}}if(Xe=r,Ar(),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot(Qu,t)}catch{}i=!0}return i}finally{tt=n,On.transition=e}}return!1}function Hg(t,e,n){e=oo(n,e),e=Qx(t,e,1),t=fr(t,e,1),e=tn(),t!==null&&(ka(t,1,e),fn(t,e))}function St(t,e,n){if(t.tag===3)Hg(t,t,n);else for(;e!==null;){if(e.tag===3){Hg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dr===null||!dr.has(i))){t=oo(n,t),t=Jx(e,t,1),e=fr(e,t,1),t=tn(),e!==null&&(ka(e,1,t),fn(e,t));break}}e=e.return}}function _w(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(Vt&n)===n&&(Dt===4||Dt===3&&(Vt&130023424)===Vt&&500>Tt()-Rp?Jr(t,0):Cp|=n),fn(t,e)}function xy(t,e){e===0&&(t.mode&1?(e=ll,ll<<=1,!(ll&130023424)&&(ll=4194304)):e=1);var n=tn();t=Oi(t,e),t!==null&&(ka(t,e,n),fn(t,n))}function xw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xy(t,n)}function yw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),xy(t,n)}var yy;yy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,aw(t,e,n);ln=!!(t.flags&131072)}else ln=!1,ft&&e.flags&1048576&&Tx(e,bu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;nu(t,e),t=e.pendingProps;var r=no(e,Kt.current);Ks(e,n),r=Sp(null,e,i,t,r,n);var s=Mp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,cn(i)?(s=!0,Cu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gp(e),r.updater=sc,e.stateNode=r,r._reactInternals=e,xd(e,i,t,n),e=Md(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&up(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(nu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Mw(i),t=$n(i,t),r){case 0:e=Sd(null,e,i,t,n);break e;case 1:e=Lg(null,e,i,t,n);break e;case 11:e=Pg(null,e,i,t,n);break e;case 14:e=Dg(null,e,i,$n(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Sd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Lg(t,e,i,r,n);case 3:e:{if(iy(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Px(t,e),Lu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=oo(Error(ne(423)),e),e=Ng(t,e,i,n,r);break e}else if(i!==r){r=oo(Error(ne(424)),e),e=Ng(t,e,i,n,r);break e}else for(xn=cr(e.stateNode.containerInfo.firstChild),yn=e,ft=!0,qn=null,n=Rx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(io(),i===r){e=ki(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return Dx(e),t===null&&gd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,fd(i,r)?o=null:s!==null&&fd(i,s)&&(e.flags|=32),ny(t,e),Jt(t,e,o,n),e.child;case 6:return t===null&&gd(e),null;case 13:return ry(t,e,n);case 4:return vp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ro(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Pg(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(Pu,i._currentValue),i._currentValue=o,s!==null)if(ti(s.value,o)){if(s.children===r.children&&!un.current){e=ki(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Pi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),vd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),vd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ks(e,n),r=kn(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=$n(i,e.pendingProps),r=$n(i.type,r),Dg(t,e,i,r,n);case 15:return ey(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),nu(t,e),e.tag=1,cn(i)?(t=!0,Cu(e)):t=!1,Ks(e,n),Zx(e,i,r),xd(e,i,r,n),Md(null,e,i,!0,t,n);case 19:return sy(t,e,n);case 22:return ty(t,e,n)}throw Error(ne(156,e.tag))};function Sy(t,e){return Y_(t,e)}function Sw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new Sw(t,e,n,i)}function Lp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Mw(t){if(typeof t=="function")return Lp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zh)return 11;if(t===Qh)return 14}return 2}function pr(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function su(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Lp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case bs:return es(n.children,r,s,e);case Kh:o=8,r|=8;break;case Gf:return t=Fn(12,n,e,r|2),t.elementType=Gf,t.lanes=s,t;case Wf:return t=Fn(13,n,e,r),t.elementType=Wf,t.lanes=s,t;case jf:return t=Fn(19,n,e,r),t.elementType=jf,t.lanes=s,t;case D_:return lc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case b_:o=10;break e;case P_:o=9;break e;case Zh:o=11;break e;case Qh:o=14;break e;case er:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Fn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function es(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function lc(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=D_,t.lanes=n,t.stateNode={isHidden:!1},t}function qc(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function Kc(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ew(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pc(0),this.expirationTimes=Pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Np(t,e,n,i,r,s,o,a,l){return t=new Ew(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gp(s),t}function Tw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function My(t){if(!t)return xr;t=t._reactInternals;e:{if(cs(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(cn(n))return Mx(t,n,e)}return e}function Ey(t,e,n,i,r,s,o,a,l){return t=Np(n,i,!0,t,r,s,o,a,l),t.context=My(null),n=t.current,i=tn(),r=hr(n),s=Pi(i,r),s.callback=e??null,fr(n,s,r),t.current.lanes=r,ka(t,r,i),fn(t,i),t}function uc(t,e,n,i){var r=e.current,s=tn(),o=hr(r);return n=My(n),e.context===null?e.context=n:e.pendingContext=n,e=Pi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=fr(r,e,o),t!==null&&(Jn(t,r,o,s),Jl(t,r,o)),o}function Vu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ip(t,e){Gg(t,e),(t=t.alternate)&&Gg(t,e)}function ww(){return null}var Ty=typeof reportError=="function"?reportError:function(t){console.error(t)};function Up(t){this._internalRoot=t}cc.prototype.render=Up.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));uc(t,e,null,null)};cc.prototype.unmount=Up.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;os(function(){uc(null,t,null,null)}),e[Fi]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=tx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nr.length&&e!==0&&e<nr[n].priority;n++);nr.splice(n,0,t),n===0&&ix(t)}};function Fp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wg(){}function Aw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Vu(o);s.call(u)}}var o=Ey(e,i,t,0,null,!1,!1,"",Wg);return t._reactRootContainer=o,t[Fi]=o.current,xa(t.nodeType===8?t.parentNode:t),os(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Vu(l);a.call(u)}}var l=Np(t,0,!1,null,null,!1,!1,"",Wg);return t._reactRootContainer=l,t[Fi]=l.current,xa(t.nodeType===8?t.parentNode:t),os(function(){uc(e,l,n,i)}),l}function dc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Vu(o);a.call(l)}}uc(e,o,t,r)}else o=Aw(n,e,t,r,i);return Vu(o)}J_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xo(e.pendingLanes);n!==0&&(tp(e,n|1),fn(e,Tt()),!(Xe&6)&&(ao=Tt()+500,Ar()))}break;case 13:os(function(){var i=Oi(t,1);if(i!==null){var r=tn();Jn(i,t,1,r)}}),Ip(t,1)}};np=function(t){if(t.tag===13){var e=Oi(t,134217728);if(e!==null){var n=tn();Jn(e,t,134217728,n)}Ip(t,134217728)}};ex=function(t){if(t.tag===13){var e=hr(t),n=Oi(t,e);if(n!==null){var i=tn();Jn(n,t,e,i)}Ip(t,e)}};tx=function(){return tt};nx=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};td=function(t,e,n){switch(e){case"input":if(Yf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=nc(i);if(!r)throw Error(ne(90));N_(i),Yf(i,r)}}}break;case"textarea":U_(t,n);break;case"select":e=n.value,e!=null&&Xs(t,!!n.multiple,e,!1)}};H_=bp;G_=os;var Cw={usingClientEntryPoint:!1,Events:[Va,Ns,nc,V_,z_,bp]},Fo={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rw={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=X_(t),t===null?null:t.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||ww,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{Qu=xl.inject(Rw),ai=xl}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cw;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fp(e))throw Error(ne(200));return Tw(t,e,null,n)};En.createRoot=function(t,e){if(!Fp(t))throw Error(ne(299));var n=!1,i="",r=Ty;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Np(t,1,!1,null,null,n,!1,i,r),t[Fi]=e.current,xa(t.nodeType===8?t.parentNode:t),new Up(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=X_(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return os(t)};En.hydrate=function(t,e,n){if(!fc(e))throw Error(ne(200));return dc(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Fp(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Ty;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ey(e,null,t,1,n??null,r,!1,s,o),t[Fi]=e.current,xa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new cc(e)};En.render=function(t,e,n){if(!fc(e))throw Error(ne(200));return dc(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!fc(t))throw Error(ne(40));return t._reactRootContainer?(os(function(){dc(null,null,t,!1,function(){t._reactRootContainer=null,t[Fi]=null})}),!0):!1};En.unstable_batchedUpdates=bp;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!fc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return dc(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function wy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wy)}catch(t){console.error(t)}}wy(),w_.exports=En;var bw=w_.exports,Ay,jg=bw;Ay=jg.createRoot,jg.hydrateRoot;var Op={};Object.defineProperty(Op,"__esModule",{value:!0});Op.parse=Fw;Op.serialize=Ow;const Pw=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,Dw=/^[\u0021-\u003A\u003C-\u007E]*$/,Lw=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,Nw=/^[\u0020-\u003A\u003D-\u007E]*$/,Iw=Object.prototype.toString,Uw=(()=>{const t=function(){};return t.prototype=Object.create(null),t})();function Fw(t,e){const n=new Uw,i=t.length;if(i<2)return n;const r=(e==null?void 0:e.decode)||kw;let s=0;do{const o=t.indexOf("=",s);if(o===-1)break;const a=t.indexOf(";",s),l=a===-1?i:a;if(o>l){s=t.lastIndexOf(";",o-1)+1;continue}const u=Xg(t,s,o),c=$g(t,o,u),f=t.slice(u,c);if(n[f]===void 0){let h=Xg(t,o+1,l),p=$g(t,l,h);const g=r(t.slice(h,p));n[f]=g}s=l+1}while(s<i);return n}function Xg(t,e,n){do{const i=t.charCodeAt(e);if(i!==32&&i!==9)return e}while(++e<n);return n}function $g(t,e,n){for(;e>n;){const i=t.charCodeAt(--e);if(i!==32&&i!==9)return e+1}return n}function Ow(t,e,n){const i=(n==null?void 0:n.encode)||encodeURIComponent;if(!Pw.test(t))throw new TypeError(`argument name is invalid: ${t}`);const r=i(e);if(!Dw.test(r))throw new TypeError(`argument val is invalid: ${e}`);let s=t+"="+r;if(!n)return s;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);s+="; Max-Age="+n.maxAge}if(n.domain){if(!Lw.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);s+="; Domain="+n.domain}if(n.path){if(!Nw.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);s+="; Path="+n.path}if(n.expires){if(!Bw(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);s+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.partitioned&&(s+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"none":s+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return s}function kw(t){if(t.indexOf("%")===-1)return t;try{return decodeURIComponent(t)}catch{return t}}function Bw(t){return Iw.call(t)==="[object Date]"}/**
 * react-router v7.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Yg="popstate";function Vw(t={}){function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Id("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Ra(r)}return Hw(e,n,null,t)}function gt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function di(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function zw(){return Math.random().toString(36).substring(2,10)}function qg(t,e){return{usr:t.state,key:t.key,idx:e}}function Id(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Mo(e):e,state:n,key:e&&e.key||i||zw()}}function Ra({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Mo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function Hw(t,e,n,i={}){let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a="POP",l=null,u=c();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function c(){return(o.state||{idx:null}).idx}function f(){a="POP";let m=c(),d=m==null?null:m-u;u=m,l&&l({action:a,location:x.location,delta:d})}function h(m,d){a="PUSH";let v=Id(x.location,m,d);u=c()+1;let _=qg(v,u),y=x.createHref(v);try{o.pushState(_,"",y)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;r.location.assign(y)}s&&l&&l({action:a,location:x.location,delta:1})}function p(m,d){a="REPLACE";let v=Id(x.location,m,d);u=c();let _=qg(v,u),y=x.createHref(v);o.replaceState(_,"",y),s&&l&&l({action:a,location:x.location,delta:0})}function g(m){let d=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof m=="string"?m:Ra(m);return v=v.replace(/ $/,"%20"),gt(d,`No window.location.(origin|href) available to create URL for href: ${v}`),new URL(v,d)}let x={get action(){return a},get location(){return t(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Yg,f),l=m,()=>{r.removeEventListener(Yg,f),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let d=g(m);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:p,go(m){return o.go(m)}};return x}function Cy(t,e,n="/"){return Gw(t,e,n,!1)}function Gw(t,e,n,i){let r=typeof e=="string"?Mo(e):e,s=Bi(r.pathname||"/",n);if(s==null)return null;let o=Ry(t);Ww(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=tA(s);a=Jw(o[l],u,i)}return a}function Ry(t,e=[],n=[],i=""){let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(gt(l.relativePath.startsWith(i),`Absolute route path "${l.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(i.length));let u=Di([i,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(gt(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),Ry(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Zw(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of by(s.path))r(s,o,l)}),e}function by(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=by(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Ww(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Qw(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var jw=/^:[\w-]+$/,Xw=3,$w=2,Yw=1,qw=10,Kw=-2,Kg=t=>t==="*";function Zw(t,e){let n=t.split("/"),i=n.length;return n.some(Kg)&&(i+=Kw),e&&(i+=$w),n.filter(r=>!Kg(r)).reduce((r,s)=>r+(jw.test(s)?Xw:s===""?Yw:qw),i)}function Qw(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function Jw(t,e,n=!1){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],u=a===i.length-1,c=s==="/"?e:e.slice(s.length)||"/",f=zu({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),h=l.route;if(!f&&u&&n&&!i[i.length-1].route.index&&(f=zu({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:Di([s,f.pathname]),pathnameBase:sA(Di([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=Di([s,f.pathnameBase]))}return o}function zu(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=eA(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,{paramName:c,isOptional:f},h)=>{if(c==="*"){let g=a[h]||"";o=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}const p=a[h];return f&&!p?u[c]=void 0:u[c]=(p||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function eA(t,e=!1,n=!0){di(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function tA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return di(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Bi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function nA(t,e="/"){let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Mo(t):t;return{pathname:n?n.startsWith("/")?n:iA(n,e):e,search:oA(i),hash:aA(r)}}function iA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Zc(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function rA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Py(t){let e=rA(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function Dy(t,e,n,i=!1){let r;typeof t=="string"?r=Mo(t):(r={...t},gt(!r.pathname||!r.pathname.includes("?"),Zc("?","pathname","search",r)),gt(!r.pathname||!r.pathname.includes("#"),Zc("#","pathname","hash",r)),gt(!r.search||!r.search.includes("#"),Zc("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}a=f>=0?e[f]:"/"}let l=nA(r,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}var Di=t=>t.join("/").replace(/\/\/+/g,"/"),sA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),oA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,aA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function lA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var Ly=["POST","PUT","PATCH","DELETE"];new Set(Ly);var uA=["GET",...Ly];new Set(uA);var Eo=O.createContext(null);Eo.displayName="DataRouter";var hc=O.createContext(null);hc.displayName="DataRouterState";var Ny=O.createContext({isTransitioning:!1});Ny.displayName="ViewTransition";var cA=O.createContext(new Map);cA.displayName="Fetchers";var fA=O.createContext(null);fA.displayName="Await";var hi=O.createContext(null);hi.displayName="Navigation";var Ha=O.createContext(null);Ha.displayName="Location";var Wi=O.createContext({outlet:null,matches:[],isDataRoute:!1});Wi.displayName="Route";var kp=O.createContext(null);kp.displayName="RouteError";function dA(t,{relative:e}={}){gt(Ga(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=O.useContext(hi),{hash:r,pathname:s,search:o}=Wa(t,{relative:e}),a=s;return n!=="/"&&(a=s==="/"?n:Di([n,s])),i.createHref({pathname:a,search:o,hash:r})}function Ga(){return O.useContext(Ha)!=null}function Cr(){return gt(Ga(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(Ha).location}var Iy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Uy(t){O.useContext(hi).static||O.useLayoutEffect(t)}function hA(){let{isDataRoute:t}=O.useContext(Wi);return t?AA():pA()}function pA(){gt(Ga(),"useNavigate() may be used only in the context of a <Router> component.");let t=O.useContext(Eo),{basename:e,navigator:n}=O.useContext(hi),{matches:i}=O.useContext(Wi),{pathname:r}=Cr(),s=JSON.stringify(Py(i)),o=O.useRef(!1);return Uy(()=>{o.current=!0}),O.useCallback((l,u={})=>{if(di(o.current,Iy),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Dy(l,JSON.parse(s),r,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Di([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,r,t])}O.createContext(null);function Wa(t,{relative:e}={}){let{matches:n}=O.useContext(Wi),{pathname:i}=Cr(),r=JSON.stringify(Py(n));return O.useMemo(()=>Dy(t,JSON.parse(r),i,e==="path"),[t,r,i,e])}function mA(t,e){return Fy(t,e)}function Fy(t,e,n,i){var v;gt(Ga(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r,static:s}=O.useContext(hi),{matches:o}=O.useContext(Wi),a=o[o.length-1],l=a?a.params:{},u=a?a.pathname:"/",c=a?a.pathnameBase:"/",f=a&&a.route;{let _=f&&f.path||"";Oy(u,!f||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let h=Cr(),p;if(e){let _=typeof e=="string"?Mo(e):e;gt(c==="/"||((v=_.pathname)==null?void 0:v.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${_.pathname}" was given in the \`location\` prop.`),p=_}else p=h;let g=p.pathname||"/",x=g;if(c!=="/"){let _=c.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(_.length).join("/")}let m=!s&&n&&n.matches&&n.matches.length>0?n.matches:Cy(t,{pathname:x});di(f||m!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),di(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let d=yA(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},l,_.params),pathname:Di([c,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?c:Di([c,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),o,n,i);return e&&d?O.createElement(Ha.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},d):d}function gA(){let t=wA(),e=lA(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},s={padding:"2px 4px",backgroundColor:i},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:s},"ErrorBoundary")," or"," ",O.createElement("code",{style:s},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:r},n):null,o)}var vA=O.createElement(gA,null),_A=class extends O.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?O.createElement(Wi.Provider,{value:this.props.routeContext},O.createElement(kp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function xA({routeContext:t,match:e,children:n}){let i=O.useContext(Eo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),O.createElement(Wi.Provider,{value:t},n)}function yA(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let r=t,s=n==null?void 0:n.errors;if(s!=null){let l=r.findIndex(u=>u.route.id&&(s==null?void 0:s[u.route.id])!==void 0);gt(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),r=r.slice(0,Math.min(r.length,l+1))}let o=!1,a=-1;if(n)for(let l=0;l<r.length;l++){let u=r[l];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(a=l),u.route.id){let{loaderData:c,errors:f}=n,h=u.route.loader&&!c.hasOwnProperty(u.route.id)&&(!f||f[u.route.id]===void 0);if(u.route.lazy||h){o=!0,a>=0?r=r.slice(0,a+1):r=[r[0]];break}}}return r.reduceRight((l,u,c)=>{let f,h=!1,p=null,g=null;n&&(f=s&&u.route.id?s[u.route.id]:void 0,p=u.route.errorElement||vA,o&&(a<0&&c===0?(Oy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,g=null):a===c&&(h=!0,g=u.route.hydrateFallbackElement||null)));let x=e.concat(r.slice(0,c+1)),m=()=>{let d;return f?d=p:h?d=g:u.route.Component?d=O.createElement(u.route.Component,null):u.route.element?d=u.route.element:d=l,O.createElement(xA,{match:u,routeContext:{outlet:l,matches:x,isDataRoute:n!=null},children:d})};return n&&(u.route.ErrorBoundary||u.route.errorElement||c===0)?O.createElement(_A,{location:n.location,revalidation:n.revalidation,component:p,error:f,children:m(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):m()},null)}function Bp(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function SA(t){let e=O.useContext(Eo);return gt(e,Bp(t)),e}function MA(t){let e=O.useContext(hc);return gt(e,Bp(t)),e}function EA(t){let e=O.useContext(Wi);return gt(e,Bp(t)),e}function Vp(t){let e=EA(t),n=e.matches[e.matches.length-1];return gt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function TA(){return Vp("useRouteId")}function wA(){var i;let t=O.useContext(kp),e=MA("useRouteError"),n=Vp("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function AA(){let{router:t}=SA("useNavigate"),e=Vp("useNavigate"),n=O.useRef(!1);return Uy(()=>{n.current=!0}),O.useCallback(async(r,s={})=>{di(n.current,Iy),n.current&&(typeof r=="number"?t.navigate(r):await t.navigate(r,{fromRouteId:e,...s}))},[t,e])}var Zg={};function Oy(t,e,n){!e&&!Zg[t]&&(Zg[t]=!0,di(!1,n))}O.memo(CA);function CA({routes:t,future:e,state:n}){return Fy(t,void 0,n,e)}function Yo(t){gt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function RA({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:r,static:s=!1}){gt(!Ga(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),a=O.useMemo(()=>({basename:o,navigator:r,static:s,future:{}}),[o,r,s]);typeof n=="string"&&(n=Mo(n));let{pathname:l="/",search:u="",hash:c="",state:f=null,key:h="default"}=n,p=O.useMemo(()=>{let g=Bi(l,o);return g==null?null:{location:{pathname:g,search:u,hash:c,state:f,key:h},navigationType:i}},[o,l,u,c,f,h,i]);return di(p!=null,`<Router basename="${o}"> is not able to match the URL "${l}${u}${c}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:O.createElement(hi.Provider,{value:a},O.createElement(Ha.Provider,{children:e,value:p}))}function bA({children:t,location:e}){return mA(Ud(t),e)}function Ud(t,e=[]){let n=[];return O.Children.forEach(t,(i,r)=>{if(!O.isValidElement(i))return;let s=[...e,r];if(i.type===O.Fragment){n.push.apply(n,Ud(i.props.children,s));return}gt(i.type===Yo,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),gt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Ud(i.props.children,s)),n.push(o)}),n}var ou="get",au="application/x-www-form-urlencoded";function pc(t){return t!=null&&typeof t.tagName=="string"}function PA(t){return pc(t)&&t.tagName.toLowerCase()==="button"}function DA(t){return pc(t)&&t.tagName.toLowerCase()==="form"}function LA(t){return pc(t)&&t.tagName.toLowerCase()==="input"}function NA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function IA(t,e){return t.button===0&&(!e||e==="_self")&&!NA(t)}var yl=null;function UA(){if(yl===null)try{new FormData(document.createElement("form"),0),yl=!1}catch{yl=!0}return yl}var FA=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Qc(t){return t!=null&&!FA.has(t)?(di(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${au}"`),null):t}function OA(t,e){let n,i,r,s,o;if(DA(t)){let a=t.getAttribute("action");i=a?Bi(a,e):null,n=t.getAttribute("method")||ou,r=Qc(t.getAttribute("enctype"))||au,s=new FormData(t)}else if(PA(t)||LA(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||a.getAttribute("action");if(i=l?Bi(l,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||ou,r=Qc(t.getAttribute("formenctype"))||Qc(a.getAttribute("enctype"))||au,s=new FormData(a,t),!UA()){let{name:u,type:c,value:f}=t;if(c==="image"){let h=u?`${u}.`:"";s.append(`${h}x`,"0"),s.append(`${h}y`,"0")}else u&&s.append(u,f)}}else{if(pc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ou,i=null,r=au,o=t}return s&&r==="text/plain"&&(o=s,s=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:s,body:o}}function zp(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function kA(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function BA(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function VA(t,e,n){let i=await Promise.all(t.map(async r=>{let s=e.routes[r.route.id];if(s){let o=await kA(s,n);return o.links?o.links():[]}return[]}));return WA(i.flat(1).filter(BA).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function Qg(t,e,n,i,r,s){let o=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,a=(l,u)=>{var c;return n[u].pathname!==l.pathname||((c=n[u].route.path)==null?void 0:c.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,u)=>o(l,u)||a(l,u)):s==="data"?e.filter((l,u)=>{var f;let c=i.routes[l.route.id];if(!c||!c.hasLoader)return!1;if(o(l,u)||a(l,u))return!0;if(l.route.shouldRevalidate){let h=l.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function zA(t,e,{includeHydrateFallback:n}={}){return HA(t.map(i=>{let r=e.routes[i.route.id];if(!r)return[];let s=[r.module];return r.clientActionModule&&(s=s.concat(r.clientActionModule)),r.clientLoaderModule&&(s=s.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(s=s.concat(r.hydrateFallbackModule)),r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function HA(t){return[...new Set(t)]}function GA(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function WA(t,e){let n=new Set;return new Set(e),t.reduce((i,r)=>{let s=JSON.stringify(GA(r));return n.has(s)||(n.add(s),i.push({key:s,link:r})),i},[])}function jA(t,e){let n=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n.pathname==="/"?n.pathname="_root.data":e&&Bi(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function ky(){let t=O.useContext(Eo);return zp(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function XA(){let t=O.useContext(hc);return zp(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Hp=O.createContext(void 0);Hp.displayName="FrameworkContext";function By(){let t=O.useContext(Hp);return zp(t,"You must render this element inside a <HydratedRouter> element"),t}function $A(t,e){let n=O.useContext(Hp),[i,r]=O.useState(!1),[s,o]=O.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:u,onMouseLeave:c,onTouchStart:f}=e,h=O.useRef(null);O.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let x=d=>{d.forEach(v=>{o(v.isIntersecting)})},m=new IntersectionObserver(x,{threshold:.5});return h.current&&m.observe(h.current),()=>{m.disconnect()}}},[t]),O.useEffect(()=>{if(i){let x=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(x)}}},[i]);let p=()=>{r(!0)},g=()=>{r(!1),o(!1)};return n?t!=="intent"?[s,h,{}]:[s,h,{onFocus:Oo(a,p),onBlur:Oo(l,g),onMouseEnter:Oo(u,p),onMouseLeave:Oo(c,g),onTouchStart:Oo(f,p)}]:[!1,h,{}]}function Oo(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function YA({page:t,...e}){let{router:n}=ky(),i=O.useMemo(()=>Cy(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?O.createElement(KA,{page:t,matches:i,...e}):null}function qA(t){let{manifest:e,routeModules:n}=By(),[i,r]=O.useState([]);return O.useEffect(()=>{let s=!1;return VA(t,e,n).then(o=>{s||r(o)}),()=>{s=!0}},[t,e,n]),i}function KA({page:t,matches:e,...n}){let i=Cr(),{manifest:r,routeModules:s}=By(),{basename:o}=ky(),{loaderData:a,matches:l}=XA(),u=O.useMemo(()=>Qg(t,e,l,r,i,"data"),[t,e,l,r,i]),c=O.useMemo(()=>Qg(t,e,l,r,i,"assets"),[t,e,l,r,i]),f=O.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let g=new Set,x=!1;if(e.forEach(d=>{var _;let v=r.routes[d.route.id];!v||!v.hasLoader||(!u.some(y=>y.route.id===d.route.id)&&d.route.id in a&&((_=s[d.route.id])!=null&&_.shouldRevalidate)||v.hasClientLoader?x=!0:g.add(d.route.id))}),g.size===0)return[];let m=jA(t,o);return x&&g.size>0&&m.searchParams.set("_routes",e.filter(d=>g.has(d.route.id)).map(d=>d.route.id).join(",")),[m.pathname+m.search]},[o,a,i,r,u,e,t,s]),h=O.useMemo(()=>zA(c,r),[c,r]),p=qA(c);return O.createElement(O.Fragment,null,f.map(g=>O.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...n})),h.map(g=>O.createElement("link",{key:g,rel:"modulepreload",href:g,...n})),p.map(({key:g,link:x})=>O.createElement("link",{key:g,...x})))}function ZA(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Vy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Vy&&(window.__reactRouterVersion="7.3.0")}catch{}function QA({basename:t,children:e,window:n}){let i=O.useRef();i.current==null&&(i.current=Vw({window:n,v5Compat:!0}));let r=i.current,[s,o]=O.useState({action:r.action,location:r.location}),a=O.useCallback(l=>{O.startTransition(()=>o(l))},[o]);return O.useLayoutEffect(()=>r.listen(a),[r,a]),O.createElement(RA,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:r})}var zy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ai=O.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:r,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,viewTransition:f,...h},p){let{basename:g}=O.useContext(hi),x=typeof u=="string"&&zy.test(u),m,d=!1;if(typeof u=="string"&&x&&(m=u,Vy))try{let T=new URL(window.location.href),S=u.startsWith("//")?new URL(T.protocol+u):new URL(u),P=Bi(S.pathname,g);S.origin===T.origin&&P!=null?u=P+S.search+S.hash:d=!0}catch{di(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=dA(u,{relative:r}),[_,y,w]=$A(i,h),C=n1(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:r,viewTransition:f});function A(T){e&&e(T),T.defaultPrevented||C(T)}let b=O.createElement("a",{...h,...w,href:m||v,onClick:d||s?e:A,ref:ZA(p,y),target:l,"data-discover":!x&&n==="render"?"true":void 0});return _&&!x?O.createElement(O.Fragment,null,b,O.createElement(YA,{page:v})):b});Ai.displayName="Link";var JA=O.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:r=!1,style:s,to:o,viewTransition:a,children:l,...u},c){let f=Wa(o,{relative:u.relative}),h=Cr(),p=O.useContext(hc),{navigator:g,basename:x}=O.useContext(hi),m=p!=null&&a1(f)&&a===!0,d=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,v=h.pathname,_=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(v=v.toLowerCase(),_=_?_.toLowerCase():null,d=d.toLowerCase()),_&&x&&(_=Bi(_,x)||_);const y=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let w=v===d||!r&&v.startsWith(d)&&v.charAt(y)==="/",C=_!=null&&(_===d||!r&&_.startsWith(d)&&_.charAt(d.length)==="/"),A={isActive:w,isPending:C,isTransitioning:m},b=w?e:void 0,T;typeof i=="function"?T=i(A):T=[i,w?"active":null,C?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let S=typeof s=="function"?s(A):s;return O.createElement(Ai,{...u,"aria-current":b,className:T,ref:c,style:S,to:o,viewTransition:a},typeof l=="function"?l(A):l)});JA.displayName="NavLink";var e1=O.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:r,state:s,method:o=ou,action:a,onSubmit:l,relative:u,preventScrollReset:c,viewTransition:f,...h},p)=>{let g=s1(),x=o1(a,{relative:u}),m=o.toLowerCase()==="get"?"get":"post",d=typeof a=="string"&&zy.test(a),v=_=>{if(l&&l(_),_.defaultPrevented)return;_.preventDefault();let y=_.nativeEvent.submitter,w=(y==null?void 0:y.getAttribute("formmethod"))||o;g(y||_.currentTarget,{fetcherKey:e,method:w,navigate:n,replace:r,state:s,relative:u,preventScrollReset:c,viewTransition:f})};return O.createElement("form",{ref:p,method:m,action:x,onSubmit:i?l:v,...h,"data-discover":!d&&t==="render"?"true":void 0})});e1.displayName="Form";function t1(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Hy(t){let e=O.useContext(Eo);return gt(e,t1(t)),e}function n1(t,{target:e,replace:n,state:i,preventScrollReset:r,relative:s,viewTransition:o}={}){let a=hA(),l=Cr(),u=Wa(t,{relative:s});return O.useCallback(c=>{if(IA(c,e)){c.preventDefault();let f=n!==void 0?n:Ra(l)===Ra(u);a(t,{replace:f,state:i,preventScrollReset:r,relative:s,viewTransition:o})}},[l,a,u,n,i,e,t,r,s,o])}var i1=0,r1=()=>`__${String(++i1)}__`;function s1(){let{router:t}=Hy("useSubmit"),{basename:e}=O.useContext(hi),n=TA();return O.useCallback(async(i,r={})=>{let{action:s,method:o,encType:a,formData:l,body:u}=OA(i,e);if(r.navigate===!1){let c=r.fetcherKey||r1();await t.fetch(c,n,r.action||s,{preventScrollReset:r.preventScrollReset,formData:l,body:u,formMethod:r.method||o,formEncType:r.encType||a,flushSync:r.flushSync})}else await t.navigate(r.action||s,{preventScrollReset:r.preventScrollReset,formData:l,body:u,formMethod:r.method||o,formEncType:r.encType||a,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[t,e,n])}function o1(t,{relative:e}={}){let{basename:n}=O.useContext(hi),i=O.useContext(Wi);gt(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),s={...Wa(t||".",{relative:e})},o=Cr();if(t==null){s.search=o.search;let a=new URLSearchParams(s.search),l=a.getAll("index");if(l.some(c=>c==="")){a.delete("index"),l.filter(f=>f).forEach(f=>a.append("index",f));let c=a.toString();s.search=c?`?${c}`:""}}return(!t||t===".")&&r.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:Di([n,s.pathname])),Ra(s)}function a1(t,e={}){let n=O.useContext(Ny);gt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Hy("useViewTransitionState"),r=Wa(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Bi(n.currentLocation.pathname,i)||n.currentLocation.pathname,o=Bi(n.nextLocation.pathname,i)||n.nextLocation.pathname;return zu(r.pathname,o)!=null||zu(r.pathname,s)!=null}new TextEncoder;function l1(){const[t,e]=O.useState(!1),n=Cr(),i=[{name:"Home",path:"/"},{name:"Services",path:"/services"},{name:"About",path:"/about"},{name:"Contact",path:"/contact"}];return N.jsx("nav",{className:"bg-white shadow-lg",children:N.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[N.jsxs("div",{className:"flex justify-between h-16",children:[N.jsx("div",{className:"flex items-center",children:N.jsx(Ai,{to:"/",className:"text-xl font-bold text-blue-600",children:"ZBENYA SYSTEMS"})}),N.jsx("div",{className:"hidden md:flex items-center space-x-8",children:i.map(r=>N.jsx(Ai,{to:r.path,className:`${n.pathname===r.path?"text-blue-600":"text-gray-600 hover:text-blue-600"} transition-colors duration-200`,children:r.name},r.name))}),N.jsx("div",{className:"md:hidden flex items-center",children:N.jsx("button",{onClick:()=>e(!t),className:"text-gray-600 hover:text-blue-600",children:t?N.jsx("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}):N.jsx("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16m-7 6h7"})})})})]}),t&&N.jsx("div",{className:"md:hidden",children:N.jsx("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:i.map(r=>N.jsx(Ai,{to:r.path,className:`${n.pathname===r.path?"bg-blue-50 text-blue-600":"text-gray-600 hover:bg-blue-50 hover:text-blue-600"} block px-3 py-2 rounded-md text-base`,onClick:()=>e(!1),children:r.name},r.name))})})]})})}function u1(){return N.jsx("footer",{className:"bg-gray-900 text-white",children:N.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[N.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[N.jsxs("div",{className:"col-span-1",children:[N.jsx("h3",{className:"text-xl font-bold mb-4",children:"TechCore Solutions"}),N.jsx("p",{className:"text-gray-400",children:"Delivering innovative IT solutions for modern businesses."})]}),N.jsxs("div",{children:[N.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Quick Links"}),N.jsxs("ul",{className:"space-y-2",children:[N.jsx("li",{children:N.jsx(Ai,{to:"/",className:"text-gray-400 hover:text-white",children:"Home"})}),N.jsx("li",{children:N.jsx(Ai,{to:"/services",className:"text-gray-400 hover:text-white",children:"Services"})}),N.jsx("li",{children:N.jsx(Ai,{to:"/about",className:"text-gray-400 hover:text-white",children:"About Us"})}),N.jsx("li",{children:N.jsx(Ai,{to:"/contact",className:"text-gray-400 hover:text-white",children:"Contact"})})]})]}),N.jsxs("div",{children:[N.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Services"}),N.jsxs("ul",{className:"space-y-2",children:[N.jsx("li",{className:"text-gray-400",children:"Software Development"}),N.jsx("li",{className:"text-gray-400",children:"Cloud Solutions"}),N.jsx("li",{className:"text-gray-400",children:"IT Consulting"}),N.jsx("li",{className:"text-gray-400",children:"Cybersecurity"})]})]}),N.jsxs("div",{children:[N.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Contact Info"}),N.jsxs("ul",{className:"space-y-2 text-gray-400",children:[N.jsx("li",{children:"contact@techcore.com"}),N.jsx("li",{children:"+1 (555) 123-4567"}),N.jsx("li",{children:"123 Tech Street"}),N.jsx("li",{children:"Silicon Valley, CA 94025"})]})]})]}),N.jsx("div",{className:"border-t border-gray-800 mt-8 pt-8 text-center text-gray-400",children:N.jsxs("p",{children:["© ",new Date().getFullYear()," TechCore Solutions. All rights reserved."]})})]})})}const Gy=O.createContext({});function c1(t){const e=O.useRef(null);return e.current===null&&(e.current=t()),e.current}const Gp=typeof window<"u",f1=Gp?O.useLayoutEffect:O.useEffect,Wp=O.createContext(null),Wy=O.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function d1(t=!0){const e=O.useContext(Wp);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=O.useId();O.useEffect(()=>{if(t)return r(s)},[t]);const o=O.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}function jp(t,e){t.indexOf(e)===-1&&t.push(e)}function Xp(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Sn=t=>t;let jy=Sn;const h1={useManualTiming:!1};function $p(t){let e;return()=>(e===void 0&&(e=t()),e)}const lo=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i};class Yp{constructor(){this.subscriptions=[]}add(e){return jp(this.subscriptions,e),()=>Xp(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Li=t=>t*1e3,Ni=t=>t/1e3;function Xy(t,e){return e?t*(1e3/e):0}const p1=$p(()=>window.ScrollTimeline!==void 0);class m1{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(p1()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class g1 extends m1{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function qp(t,e){return t?t[e]||t.default||t:void 0}const Fd=2e4;function $y(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Fd;)e+=n,i=t.next(e);return e>=Fd?1/0:e}function Kp(t){return typeof t=="function"}function Jg(t,e){t.timeline=e,t.onfinish=null}const Zp=t=>Array.isArray(t)&&typeof t[0]=="number",v1={linearEasing:void 0};function _1(t,e){const n=$p(t);return()=>{var i;return(i=v1[e])!==null&&i!==void 0?i:n()}}const Hu=_1(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Yy=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(lo(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function qy(t){return!!(typeof t=="function"&&Hu()||!t||typeof t=="string"&&(t in Od||Hu())||Zp(t)||Array.isArray(t)&&t.every(qy))}const qo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Od={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:qo([0,.65,.55,1]),circOut:qo([.55,0,1,.45]),backIn:qo([.31,.01,.66,-.59]),backOut:qo([.33,1.53,.69,.99])};function Ky(t,e){if(t)return typeof t=="function"&&Hu()?Yy(t,e):Zp(t)?qo(t):Array.isArray(t)?t.map(n=>Ky(n,e)||Od.easeOut):Od[t]}const Sl=["read","resolveKeyframes","update","preRender","render","postRender"],ev={value:null};function x1(t,e){let n=new Set,i=new Set,r=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1},l=0;function u(f){o.has(f)&&(c.schedule(f),t()),l++,f(a)}const c={schedule:(f,h=!1,p=!1)=>{const x=p&&r?n:i;return h&&o.add(f),x.has(f)||x.add(f),f},cancel:f=>{i.delete(f),o.delete(f)},process:f=>{if(a=f,r){s=!0;return}r=!0,[n,i]=[i,n],n.forEach(u),e&&ev.value&&ev.value.frameloop[e].push(l),l=0,n.clear(),r=!1,s&&(s=!1,c.process(f))}};return c}const y1=40;function Zy(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Sl.reduce((d,v)=>(d[v]=x1(s,e?v:void 0),d),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:f,postRender:h}=o,p=()=>{const d=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(d-r.timestamp,y1),1),r.timestamp=d,r.isProcessing=!0,a.process(r),l.process(r),u.process(r),c.process(r),f.process(r),h.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},g=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:Sl.reduce((d,v)=>{const _=o[v];return d[v]=(y,w=!1,C=!1)=>(n||g(),_.schedule(y,w,C)),d},{}),cancel:d=>{for(let v=0;v<Sl.length;v++)o[Sl[v]].cancel(d)},state:r,steps:o}}const{schedule:ot,cancel:yr,state:Bt,steps:Jc}=Zy(typeof requestAnimationFrame<"u"?requestAnimationFrame:Sn,!0),{schedule:Qp}=Zy(queueMicrotask,!1);let lu;function S1(){lu=void 0}const ui={now:()=>(lu===void 0&&ui.set(Bt.isProcessing||h1.useManualTiming?Bt.timestamp:performance.now()),lu),set:t=>{lu=t,queueMicrotask(S1)}},Xn={x:!1,y:!1};function Qy(){return Xn.x||Xn.y}function M1(t){return t==="x"||t==="y"?Xn[t]?null:(Xn[t]=!0,()=>{Xn[t]=!1}):Xn.x||Xn.y?null:(Xn.x=Xn.y=!0,()=>{Xn.x=Xn.y=!1})}function E1(t,e,n){var i;if(t instanceof EventTarget)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function Jy(t,e){const n=E1(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function tv(t){return!(t.pointerType==="touch"||Qy())}function T1(t,e,n={}){const[i,r,s]=Jy(t,n),o=a=>{if(!tv(a))return;const{target:l}=a,u=e(l,a);if(typeof u!="function"||!l)return;const c=f=>{tv(f)&&(u(f),l.removeEventListener("pointerleave",c))};l.addEventListener("pointerleave",c,r)};return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}function nv(t,e){const n=`${e}PointerCapture`;if(t.target instanceof Element&&n in t.target&&t.pointerId!==void 0)try{t.target[n](t.pointerId)}catch{}}const eS=(t,e)=>e?t===e?!0:eS(t,e.parentElement):!1,Jp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,w1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function A1(t){return w1.has(t.tagName)||t.tabIndex!==-1}const Ko=new WeakSet;function iv(t){return e=>{e.key==="Enter"&&t(e)}}function ef(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const C1=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=iv(()=>{if(Ko.has(n))return;ef(n,"down");const r=iv(()=>{ef(n,"up")}),s=()=>ef(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function rv(t){return Jp(t)&&!Qy()}function R1(t,e,n={}){const[i,r,s]=Jy(t,n),o=a=>{const l=a.currentTarget;if(!l||!rv(a)||Ko.has(l))return;Ko.add(l),nv(a,"set");const u=e(l,a),c=(p,g)=>{l.removeEventListener("pointerup",f),l.removeEventListener("pointercancel",h),nv(p,"release"),!(!rv(p)||!Ko.has(l))&&(Ko.delete(l),typeof u=="function"&&u(p,{success:g}))},f=p=>{(p.isTrusted?b1(p,l instanceof Element?l.getBoundingClientRect():{left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}):!1)?c(p,!1):c(p,!(l instanceof Element)||eS(l,p.target))},h=p=>{c(p,!1)};l.addEventListener("pointerup",f,r),l.addEventListener("pointercancel",h,r),l.addEventListener("lostpointercapture",h,r)};return i.forEach(a=>{a=n.useGlobalTarget?window:a;let l=!1;a instanceof HTMLElement&&(l=!0,!A1(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0)),a.addEventListener("pointerdown",o,r),l&&a.addEventListener("focus",u=>C1(u,r),r)}),s}function b1(t,e){return t.clientX<e.left||t.clientX>e.right||t.clientY<e.top||t.clientY>e.bottom}const sv=30,P1=t=>!isNaN(parseFloat(t));class D1{constructor(e,n={}){this.version="12.5.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=ui.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=ui.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=P1(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Yp);const i=this.events[e].add(n);return e==="change"?()=>{i(),ot.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=ui.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>sv)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,sv);return Xy(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ba(t,e){return new D1(t,e)}const tS=O.createContext({strict:!1}),ov={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},uo={};for(const t in ov)uo[t]={isEnabled:e=>ov[t].some(n=>!!e[n])};function L1(t){for(const e in t)uo[e]={...uo[e],...t[e]}}const N1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Gu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||N1.has(t)}let nS=t=>!Gu(t);function I1(t){t&&(nS=e=>e.startsWith("on")?!Gu(e):t(e))}try{I1(require("@emotion/is-prop-valid").default)}catch{}function U1(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(nS(r)||n===!0&&Gu(r)||!e&&!Gu(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function F1(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const mc=O.createContext({});function gc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Pa(t){return typeof t=="string"||Array.isArray(t)}const em=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],tm=["initial",...em];function vc(t){return gc(t.animate)||tm.some(e=>Pa(t[e]))}function iS(t){return!!(vc(t)||t.variants)}function O1(t,e){if(vc(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Pa(n)?n:void 0,animate:Pa(i)?i:void 0}}return t.inherit!==!1?e:{}}function k1(t){const{initial:e,animate:n}=O1(t,O.useContext(mc));return O.useMemo(()=>({initial:e,animate:n}),[av(e),av(n)])}function av(t){return Array.isArray(t)?t.join(" "):t}const B1=Symbol.for("motionComponentSymbol");function Vs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function V1(t,e,n){return O.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Vs(n)&&(n.current=i))},[e])}const nm=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),z1="framerAppearId",rS="data-"+nm(z1),sS=O.createContext({});function H1(t,e,n,i,r){var s,o;const{visualElement:a}=O.useContext(mc),l=O.useContext(tS),u=O.useContext(Wp),c=O.useContext(Wy).reducedMotion,f=O.useRef(null);i=i||l.renderer,!f.current&&i&&(f.current=i(t,{visualState:e,parent:a,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:c}));const h=f.current,p=O.useContext(sS);h&&!h.projection&&r&&(h.type==="html"||h.type==="svg")&&G1(f.current,n,r,p);const g=O.useRef(!1);O.useInsertionEffect(()=>{h&&g.current&&h.update(n,u)});const x=n[rS],m=O.useRef(!!x&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,x))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,x)));return f1(()=>{h&&(g.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),Qp.render(h.render),m.current&&h.animationState&&h.animationState.animateChanges())}),O.useEffect(()=>{h&&(!m.current&&h.animationState&&h.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var d;(d=window.MotionHandoffMarkAsComplete)===null||d===void 0||d.call(window,x)}),m.current=!1))}),h}function G1(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:oS(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Vs(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:u})}function oS(t){if(t)return t.options.allowProjection!==!1?t.projection:oS(t.parent)}function W1({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&L1(t);function a(u,c){let f;const h={...O.useContext(Wy),...u,layoutId:j1(u)},{isStatic:p}=h,g=k1(u),x=i(u,p);if(!p&&Gp){X1();const m=$1(h);f=m.MeasureLayout,g.visualElement=H1(r,x,h,e,m.ProjectionNode)}return N.jsxs(mc.Provider,{value:g,children:[f&&g.visualElement?N.jsx(f,{visualElement:g.visualElement,...h}):null,n(r,u,V1(x,g.visualElement,c),x,p,g.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=O.forwardRef(a);return l[B1]=r,l}function j1({layoutId:t}){const e=O.useContext(Gy).id;return e&&t!==void 0?e+"-"+t:t}function X1(t,e){O.useContext(tS).strict}function $1(t){const{drag:e,layout:n}=uo;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const aS=t=>e=>typeof e=="string"&&e.startsWith(t),im=aS("--"),Y1=aS("var(--"),rm=t=>Y1(t)?q1.test(t.split("/*")[0].trim()):!1,q1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Da={};function K1(t){for(const e in t)Da[e]=t[e],im(e)&&(Da[e].isCSSVariable=!0)}const To=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],fs=new Set(To);function lS(t,{layout:e,layoutId:n}){return fs.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Da[t]||t==="opacity")}const qt=t=>!!(t&&t.getVelocity),uS=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Vi=(t,e,n)=>n>e?e:n<t?t:n,wo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},La={...wo,transform:t=>Vi(0,1,t)},Ml={...wo,default:1},ja=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Ji=ja("deg"),ci=ja("%"),Ce=ja("px"),Z1=ja("vh"),Q1=ja("vw"),lv={...ci,parse:t=>ci.parse(t)/100,transform:t=>ci.transform(t*100)},J1={borderWidth:Ce,borderTopWidth:Ce,borderRightWidth:Ce,borderBottomWidth:Ce,borderLeftWidth:Ce,borderRadius:Ce,radius:Ce,borderTopLeftRadius:Ce,borderTopRightRadius:Ce,borderBottomRightRadius:Ce,borderBottomLeftRadius:Ce,width:Ce,maxWidth:Ce,height:Ce,maxHeight:Ce,top:Ce,right:Ce,bottom:Ce,left:Ce,padding:Ce,paddingTop:Ce,paddingRight:Ce,paddingBottom:Ce,paddingLeft:Ce,margin:Ce,marginTop:Ce,marginRight:Ce,marginBottom:Ce,marginLeft:Ce,backgroundPositionX:Ce,backgroundPositionY:Ce},eC={rotate:Ji,rotateX:Ji,rotateY:Ji,rotateZ:Ji,scale:Ml,scaleX:Ml,scaleY:Ml,scaleZ:Ml,skew:Ji,skewX:Ji,skewY:Ji,distance:Ce,translateX:Ce,translateY:Ce,translateZ:Ce,x:Ce,y:Ce,z:Ce,perspective:Ce,transformPerspective:Ce,opacity:La,originX:lv,originY:lv,originZ:Ce},uv={...wo,transform:Math.round},sm={...J1,...eC,zIndex:uv,size:Ce,fillOpacity:La,strokeOpacity:La,numOctaves:uv},tC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},nC=To.length;function iC(t,e,n){let i="",r=!0;for(let s=0;s<nC;s++){const o=To[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=uS(a,sm[o]);if(!l){r=!1;const c=tC[o]||o;i+=`${c}(${u}) `}n&&(e[o]=u)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function om(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const u=e[l];if(fs.has(l)){o=!0;continue}else if(im(l)){r[l]=u;continue}else{const c=uS(u,sm[l]);l.startsWith("origin")?(a=!0,s[l]=c):i[l]=c}}if(e.transform||(o||n?i.transform=iC(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=s;i.transformOrigin=`${l} ${u} ${c}`}}const am=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function cS(t,e,n){for(const i in e)!qt(e[i])&&!lS(i,n)&&(t[i]=e[i])}function rC({transformTemplate:t},e){return O.useMemo(()=>{const n=am();return om(n,e,t),Object.assign({},n.vars,n.style)},[e])}function sC(t,e){const n=t.style||{},i={};return cS(i,n,t),Object.assign(i,rC(t,e)),i}function oC(t,e){const n={},i=sC(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const aC=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function lm(t){return typeof t!="string"||t.includes("-")?!1:!!(aC.indexOf(t)>-1||/[A-Z]/u.test(t))}const lC={offset:"stroke-dashoffset",array:"stroke-dasharray"},uC={offset:"strokeDashoffset",array:"strokeDasharray"};function cC(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?lC:uC;t[s.offset]=Ce.transform(-i);const o=Ce.transform(e),a=Ce.transform(n);t[s.array]=`${o} ${a}`}function cv(t,e,n){return typeof t=="string"?t:Ce.transform(e+n*t)}function fC(t,e,n){const i=cv(e,t.x,t.width),r=cv(n,t.y,t.height);return`${i} ${r}`}function um(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},c,f){if(om(t,u,f),c){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:h,style:p,dimensions:g}=t;h.transform&&(g&&(p.transform=h.transform),delete h.transform),g&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=fC(g,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(h.x=e),n!==void 0&&(h.y=n),i!==void 0&&(h.scale=i),o!==void 0&&cC(h,o,a,l,!1)}const fS=()=>({...am(),attrs:{}}),cm=t=>typeof t=="string"&&t.toLowerCase()==="svg";function dC(t,e,n,i){const r=O.useMemo(()=>{const s=fS();return um(s,e,cm(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};cS(s,t.style,t),r.style={...s,...r.style}}return r}function hC(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(lm(n)?dC:oC)(i,s,o,n),u=U1(i,typeof n=="string",t),c=n!==O.Fragment?{...u,...l,ref:r}:{},{children:f}=i,h=O.useMemo(()=>qt(f)?f.get():f,[f]);return O.createElement(n,{...c,children:h})}}function fv(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function fm(t,e,n,i){if(typeof e=="function"){const[r,s]=fv(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=fv(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const kd=t=>Array.isArray(t),pC=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),mC=t=>kd(t)?t[t.length-1]||0:t;function uu(t){const e=qt(t)?t.get():t;return pC(e)?e.toValue():e}function gC({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:vC(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const dS=t=>(e,n)=>{const i=O.useContext(mc),r=O.useContext(Wp),s=()=>gC(t,e,i,r);return n?s():c1(s)};function vC(t,e,n,i){const r={},s=i(t,{});for(const h in s)r[h]=uu(s[h]);let{initial:o,animate:a}=t;const l=vc(t),u=iS(t);e&&u&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const f=c?a:o;if(f&&typeof f!="boolean"&&!gc(f)){const h=Array.isArray(f)?f:[f];for(let p=0;p<h.length;p++){const g=fm(t,h[p]);if(g){const{transitionEnd:x,transition:m,...d}=g;for(const v in d){let _=d[v];if(Array.isArray(_)){const y=c?_.length-1:0;_=_[y]}_!==null&&(r[v]=_)}for(const v in x)r[v]=x[v]}}}return r}function dm(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(qt(r[o])||e.style&&qt(e.style[o])||lS(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}const _C={useVisualState:dS({scrapeMotionValuesFromProps:dm,createRenderState:am})};function hS(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}function pS(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const mS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function gS(t,e,n,i){pS(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(mS.has(r)?r:nm(r),e.attrs[r])}function vS(t,e,n){const i=dm(t,e,n);for(const r in t)if(qt(t[r])||qt(e[r])){const s=To.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}const dv=["x","y","width","height","cx","cy","r"],xC={useVisualState:dS({scrapeMotionValuesFromProps:vS,createRenderState:fS,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(fs.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<dv.length;a++){const l=dv[a];t[l]!==e[l]&&(o=!0)}o&&ot.read(()=>{hS(n,i),ot.render(()=>{um(i,r,cm(n.tagName),t.transformTemplate),gS(n,i)})})}})};function yC(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...lm(i)?xC:_C,preloadedFeatures:t,useRender:hC(r),createVisualElement:e,Component:i};return W1(o)}}function Na(t,e,n){const i=t.getProps();return fm(i,e,n!==void 0?n:i.custom,t)}const _S=new Set(["width","height","top","left","right","bottom",...To]);function SC(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,ba(n))}function MC(t,e){const n=Na(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=mC(s[o]);SC(t,o,a)}}function EC(t){return!!(qt(t)&&t.add)}function Bd(t,e){const n=t.getValue("willChange");if(EC(n))return n.add(e)}function xS(t){return t.props[rS]}const yS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,TC=1e-7,wC=12;function AC(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=yS(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>TC&&++a<wC);return o}function Xa(t,e,n,i){if(t===e&&n===i)return Sn;const r=s=>AC(s,0,1,t,n);return s=>s===0||s===1?s:yS(r(s),e,i)}const SS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,MS=t=>e=>1-t(1-e),ES=Xa(.33,1.53,.69,.99),hm=MS(ES),TS=SS(hm),wS=t=>(t*=2)<1?.5*hm(t):.5*(2-Math.pow(2,-10*(t-1))),pm=t=>1-Math.sin(Math.acos(t)),AS=MS(pm),CS=SS(pm),RS=t=>/^0[^.\s]+$/u.test(t);function CC(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||RS(t):!0}const aa=t=>Math.round(t*1e5)/1e5,mm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function RC(t){return t==null}const bC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,gm=(t,e)=>n=>!!(typeof n=="string"&&bC.test(n)&&n.startsWith(t)||e&&!RC(n)&&Object.prototype.hasOwnProperty.call(n,e)),bS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(mm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},PC=t=>Vi(0,255,t),tf={...wo,transform:t=>Math.round(PC(t))},qr={test:gm("rgb","red"),parse:bS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+tf.transform(t)+", "+tf.transform(e)+", "+tf.transform(n)+", "+aa(La.transform(i))+")"};function DC(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Vd={test:gm("#"),parse:DC,transform:qr.transform},zs={test:gm("hsl","hue"),parse:bS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+ci.transform(aa(e))+", "+ci.transform(aa(n))+", "+aa(La.transform(i))+")"},$t={test:t=>qr.test(t)||Vd.test(t)||zs.test(t),parse:t=>qr.test(t)?qr.parse(t):zs.test(t)?zs.parse(t):Vd.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?qr.transform(t):zs.transform(t)},LC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function NC(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(mm))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(LC))===null||n===void 0?void 0:n.length)||0)>0}const PS="number",DS="color",IC="var",UC="var(",hv="${}",FC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ia(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(FC,l=>($t.test(l)?(i.color.push(s),r.push(DS),n.push($t.parse(l))):l.startsWith(UC)?(i.var.push(s),r.push(IC),n.push(l)):(i.number.push(s),r.push(PS),n.push(parseFloat(l))),++s,hv)).split(hv);return{values:n,split:a,indexes:i,types:r}}function LS(t){return Ia(t).values}function NS(t){const{split:e,types:n}=Ia(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===PS?s+=aa(r[o]):a===DS?s+=$t.transform(r[o]):s+=r[o]}return s}}const OC=t=>typeof t=="number"?0:t;function kC(t){const e=LS(t);return NS(t)(e.map(OC))}const Sr={test:NC,parse:LS,createTransformer:NS,getAnimatableNone:kC},BC=new Set(["brightness","contrast","saturate","opacity"]);function VC(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(mm)||[];if(!i)return t;const r=n.replace(i,"");let s=BC.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const zC=/\b([a-z-]*)\(.*?\)/gu,zd={...Sr,getAnimatableNone:t=>{const e=t.match(zC);return e?e.map(VC).join(" "):t}},HC={...sm,color:$t,backgroundColor:$t,outlineColor:$t,fill:$t,stroke:$t,borderColor:$t,borderTopColor:$t,borderRightColor:$t,borderBottomColor:$t,borderLeftColor:$t,filter:zd,WebkitFilter:zd},IS=t=>HC[t];function US(t,e){let n=IS(t);return n!==zd&&(n=Sr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const GC=new Set(["auto","none","0"]);function WC(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!GC.has(s)&&Ia(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=US(n,r)}const Kr=t=>t*180/Math.PI,Hd=t=>{const e=Kr(Math.atan2(t[1],t[0]));return Gd(e)},jC={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Hd,rotateZ:Hd,skewX:t=>Kr(Math.atan(t[1])),skewY:t=>Kr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Gd=t=>(t=t%360,t<0&&(t+=360),t),pv=Hd,mv=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),gv=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),XC={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:mv,scaleY:gv,scale:t=>(mv(t)+gv(t))/2,rotateX:t=>Gd(Kr(Math.atan2(t[6],t[5]))),rotateY:t=>Gd(Kr(Math.atan2(-t[2],t[0]))),rotateZ:pv,rotate:pv,skewX:t=>Kr(Math.atan(t[4])),skewY:t=>Kr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function vv(t){return t.includes("scale")?1:0}function Wd(t,e){if(!t||t==="none")return vv(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=XC,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=jC,r=a}if(!r)return vv(e);const s=i[e],o=r[1].split(",").map(YC);return typeof s=="function"?s(o):o[s]}const $C=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return Wd(n,e)};function YC(t){return parseFloat(t.trim())}const _v=t=>t===wo||t===Ce,qC=new Set(["x","y","z"]),KC=To.filter(t=>!qC.has(t));function ZC(t){const e=[];return KC.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const co={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>Wd(e,"x"),y:(t,{transform:e})=>Wd(e,"y")};co.translateX=co.x;co.translateY=co.y;const ts=new Set;let jd=!1,Xd=!1;function FS(){if(Xd){const t=Array.from(ts).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=ZC(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Xd=!1,jd=!1,ts.forEach(t=>t.complete()),ts.clear()}function OS(){ts.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Xd=!0)})}function QC(){OS(),FS()}class vm{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ts.add(this),jd||(jd=!0,ot.read(OS),ot.resolveKeyframes(FS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ts.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ts.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const kS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),JC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function eR(t){const e=JC.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function BS(t,e,n=1){const[i,r]=eR(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return kS(o)?parseFloat(o):o}return rm(r)?BS(r,e,n+1):r}const VS=t=>e=>e.test(t),tR={test:t=>t==="auto",parse:t=>t},zS=[wo,Ce,ci,Ji,Q1,Z1,tR],xv=t=>zS.find(VS(t));class HS extends vm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let u=e[l];if(typeof u=="string"&&(u=u.trim(),rm(u))){const c=BS(u,n.current);c!==void 0&&(e[l]=c),l===e.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!_S.has(i)||e.length!==2)return;const[r,s]=e,o=xv(r),a=xv(s);if(o!==a)if(_v(o)&&_v(a))for(let l=0;l<e.length;l++){const u=e[l];typeof u=="string"&&(e[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)CC(e[r])&&i.push(r);i.length&&WC(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=co[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=co[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const yv=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Sr.test(t)||t==="0")&&!t.startsWith("url("));function nR(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function iR(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=yv(r,e),a=yv(s,e);return!o||!a?!1:nR(t)||(n==="spring"||Kp(n))&&i}const rR=t=>t!==null;function _c(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(rR),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const sR=40;class GS{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ui.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>sR?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&QC(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=ui.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!iR(e,i,r,s))if(o)this.options.duration=0;else{l&&l(_c(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const c=this.initPlayback(e,n);c!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const pt=(t,e,n)=>t+(e-t)*n;function nf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function oR({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=nf(l,a,t+1/3),s=nf(l,a,t),o=nf(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Wu(t,e){return n=>n>0?e:t}const rf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},aR=[Vd,qr,zs],lR=t=>aR.find(e=>e.test(t));function Sv(t){const e=lR(t);if(!e)return!1;let n=e.parse(t);return e===zs&&(n=oR(n)),n}const Mv=(t,e)=>{const n=Sv(t),i=Sv(e);if(!n||!i)return Wu(t,e);const r={...n};return s=>(r.red=rf(n.red,i.red,s),r.green=rf(n.green,i.green,s),r.blue=rf(n.blue,i.blue,s),r.alpha=pt(n.alpha,i.alpha,s),qr.transform(r))},uR=(t,e)=>n=>e(t(n)),$a=(...t)=>t.reduce(uR),$d=new Set(["none","hidden"]);function cR(t,e){return $d.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function fR(t,e){return n=>pt(t,e,n)}function _m(t){return typeof t=="number"?fR:typeof t=="string"?rm(t)?Wu:$t.test(t)?Mv:pR:Array.isArray(t)?WS:typeof t=="object"?$t.test(t)?Mv:dR:Wu}function WS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>_m(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function dR(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=_m(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function hR(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const pR=(t,e)=>{const n=Sr.createTransformer(e),i=Ia(t),r=Ia(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?$d.has(t)&&!r.values.length||$d.has(e)&&!i.values.length?cR(t,e):$a(WS(hR(i,r),r.values),n):Wu(t,e)};function jS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?pt(t,e,n):_m(t)(t,e)}const mR=5;function XS(t,e,n){const i=Math.max(e-mR,0);return Xy(n-t(i),e-i)}const yt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ev=.001;function gR({duration:t=yt.duration,bounce:e=yt.bounce,velocity:n=yt.velocity,mass:i=yt.mass}){let r,s,o=1-e;o=Vi(yt.minDamping,yt.maxDamping,o),t=Vi(yt.minDuration,yt.maxDuration,Ni(t)),o<1?(r=u=>{const c=u*o,f=c*t,h=c-n,p=Yd(u,o),g=Math.exp(-f);return Ev-h/p*g},s=u=>{const f=u*o*t,h=f*n+n,p=Math.pow(o,2)*Math.pow(u,2)*t,g=Math.exp(-f),x=Yd(Math.pow(u,2),o);return(-r(u)+Ev>0?-1:1)*((h-p)*g)/x}):(r=u=>{const c=Math.exp(-u*t),f=(u-n)*t+1;return-.001+c*f},s=u=>{const c=Math.exp(-u*t),f=(n-u)*(t*t);return c*f});const a=5/t,l=_R(r,s,a);if(t=Li(t),isNaN(l))return{stiffness:yt.stiffness,damping:yt.damping,duration:t};{const u=Math.pow(l,2)*i;return{stiffness:u,damping:o*2*Math.sqrt(i*u),duration:t}}}const vR=12;function _R(t,e,n){let i=n;for(let r=1;r<vR;r++)i=i-t(i)/e(i);return i}function Yd(t,e){return t*Math.sqrt(1-e*e)}const xR=["duration","bounce"],yR=["stiffness","damping","mass"];function Tv(t,e){return e.some(n=>t[n]!==void 0)}function SR(t){let e={velocity:yt.velocity,stiffness:yt.stiffness,damping:yt.damping,mass:yt.mass,isResolvedFromDuration:!1,...t};if(!Tv(t,yR)&&Tv(t,xR))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Vi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:yt.mass,stiffness:r,damping:s}}else{const n=gR(t);e={...e,...n,mass:yt.mass},e.isResolvedFromDuration=!0}return e}function $S(t=yt.visualDuration,e=yt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:u,mass:c,duration:f,velocity:h,isResolvedFromDuration:p}=SR({...n,velocity:-Ni(n.velocity||0)}),g=h||0,x=u/(2*Math.sqrt(l*c)),m=o-s,d=Ni(Math.sqrt(l/c)),v=Math.abs(m)<5;i||(i=v?yt.restSpeed.granular:yt.restSpeed.default),r||(r=v?yt.restDelta.granular:yt.restDelta.default);let _;if(x<1){const w=Yd(d,x);_=C=>{const A=Math.exp(-x*d*C);return o-A*((g+x*d*m)/w*Math.sin(w*C)+m*Math.cos(w*C))}}else if(x===1)_=w=>o-Math.exp(-d*w)*(m+(g+d*m)*w);else{const w=d*Math.sqrt(x*x-1);_=C=>{const A=Math.exp(-x*d*C),b=Math.min(w*C,300);return o-A*((g+x*d*m)*Math.sinh(b)+w*m*Math.cosh(b))/w}}const y={calculatedDuration:p&&f||null,next:w=>{const C=_(w);if(p)a.done=w>=f;else{let A=0;x<1&&(A=w===0?Li(g):XS(_,w,C));const b=Math.abs(A)<=i,T=Math.abs(o-C)<=r;a.done=b&&T}return a.value=a.done?o:C,a},toString:()=>{const w=Math.min($y(y),Fd),C=Yy(A=>y.next(w*A).value,w,30);return w+"ms "+C}};return y}function wv({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const f=t[0],h={done:!1,value:f},p=b=>a!==void 0&&b<a||l!==void 0&&b>l,g=b=>a===void 0?l:l===void 0||Math.abs(a-b)<Math.abs(l-b)?a:l;let x=n*e;const m=f+x,d=o===void 0?m:o(m);d!==m&&(x=d-f);const v=b=>-x*Math.exp(-b/i),_=b=>d+v(b),y=b=>{const T=v(b),S=_(b);h.done=Math.abs(T)<=u,h.value=h.done?d:S};let w,C;const A=b=>{p(h.value)&&(w=b,C=$S({keyframes:[h.value,g(h.value)],velocity:XS(_,b,h.value),damping:r,stiffness:s,restDelta:u,restSpeed:c}))};return A(0),{calculatedDuration:null,next:b=>{let T=!1;return!C&&w===void 0&&(T=!0,y(b),A(b)),w!==void 0&&b>=w?C.next(b-w):(!T&&y(b),h)}}}const MR=Xa(.42,0,1,1),ER=Xa(0,0,.58,1),YS=Xa(.42,0,.58,1),TR=t=>Array.isArray(t)&&typeof t[0]!="number",wR={linear:Sn,easeIn:MR,easeInOut:YS,easeOut:ER,circIn:pm,circInOut:CS,circOut:AS,backIn:hm,backInOut:TS,backOut:ES,anticipate:wS},Av=t=>{if(Zp(t)){jy(t.length===4);const[e,n,i,r]=t;return Xa(e,n,i,r)}else if(typeof t=="string")return wR[t];return t};function AR(t,e,n){const i=[],r=n||jS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Sn:e;a=$a(l,a)}i.push(a)}return i}function CR(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(jy(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=AR(e,i,r),l=a.length,u=c=>{if(o&&c<t[0])return e[0];let f=0;if(l>1)for(;f<t.length-2&&!(c<t[f+1]);f++);const h=lo(t[f],t[f+1],c);return a[f](h)};return n?c=>u(Vi(t[0],t[s-1],c)):u}function RR(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=lo(0,e,i);t.push(pt(n,1,r))}}function bR(t){const e=[0];return RR(e,t.length-1),e}function PR(t,e){return t.map(n=>n*e)}function DR(t,e){return t.map(()=>e||YS).splice(0,t.length-1)}function ju({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=TR(i)?i.map(Av):Av(i),s={done:!1,value:e[0]},o=PR(n&&n.length===e.length?n:bR(e),t),a=CR(o,e,{ease:Array.isArray(r)?r:DR(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const LR=t=>{const e=({timestamp:n})=>t(n);return{start:()=>ot.update(e,!0),stop:()=>yr(e),now:()=>Bt.isProcessing?Bt.timestamp:ui.now()}},NR={decay:wv,inertia:wv,tween:ju,keyframes:ju,spring:$S},IR=t=>t/100;class xm extends GS{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||vm,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=Kp(n)?n:NR[n]||ju;let l,u;a!==ju&&typeof e[0]!="number"&&(l=$a(IR,jS(e[0],e[1])),e=[0,100]);const c=a({...this.options,keyframes:e});s==="mirror"&&(u=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=$y(c));const{calculatedDuration:f}=c,h=f+r,p=h*(i+1)-r;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:h,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:b}=this.options;return{done:!0,value:b[b.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:f}=i;if(this.startTime===null)return s.next(0);const{delay:h,repeat:p,repeatType:g,repeatDelay:x,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-c/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const d=this.currentTime-h*(this.speed>=0?1:-1),v=this.speed>=0?d<0:d>c;this.currentTime=Math.max(d,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let _=this.currentTime,y=s;if(p){const b=Math.min(this.currentTime,c)/f;let T=Math.floor(b),S=b%1;!S&&b>=1&&(S=1),S===1&&T--,T=Math.min(T,p+1),!!(T%2)&&(g==="reverse"?(S=1-S,x&&(S-=x/f)):g==="mirror"&&(y=o)),_=Vi(0,1,S)*f}const w=v?{done:!1,value:l[0]}:y.next(_);a&&(w.value=a(w.value));let{done:C}=w;!v&&u!==null&&(C=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return A&&r!==void 0&&(w.value=_c(l,this.options,r)),m&&m(w.value),A&&this.finish(),w}get duration(){const{resolved:e}=this;return e?Ni(e.calculatedDuration):0}get time(){return Ni(this.currentTime)}set time(e){e=Li(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Ni(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=LR,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const UR=new Set(["opacity","clipPath","filter","transform"]);function FR(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const u={[e]:n};l&&(u.offset=l);const c=Ky(a,r);return Array.isArray(c)&&(u.easing=c),t.animate(u,{delay:i,duration:r,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const OR=$p(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Xu=10,kR=2e4;function BR(t){return Kp(t.type)||t.type==="spring"||!qy(t.ease)}function VR(t,e){const n=new xm({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<kR;)i=n.sample(s),r.push(i.value),s+=Xu;return{times:void 0,keyframes:r,duration:s-Xu,ease:"linear"}}const qS={anticipate:wS,backInOut:TS,circInOut:CS};function zR(t){return t in qS}class Cv extends GS{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new HS(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:u}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Hu()&&zR(s)&&(s=qS[s]),BR(this.options)){const{onComplete:f,onUpdate:h,motionValue:p,element:g,...x}=this.options,m=VR(e,x);e=m.keyframes,e.length===1&&(e[1]=e[0]),i=m.duration,r=m.times,s=m.ease,o="keyframes"}const c=FR(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return c.startTime=u??this.calcStartTime(),this.pendingTimeline?(Jg(c,this.pendingTimeline),this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:f}=this.options;a.set(_c(e,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return Ni(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return Ni(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Li(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return Sn;const{animation:i}=n;Jg(i,e)}return Sn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:f,element:h,...p}=this.options,g=new xm({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),x=Li(this.time);u.setWithVelocity(g.sample(x-Xu).value,g.sample(x).value,Xu)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return OR()&&i&&UR.has(i)&&!l&&!u&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const HR={type:"spring",stiffness:500,damping:25,restSpeed:10},GR=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),WR={type:"keyframes",duration:.8},jR={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},XR=(t,{keyframes:e})=>e.length>2?WR:fs.has(t)?t.startsWith("scale")?GR(e[1]):HR:jR;function $R({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const ym=(t,e,n,i={},r,s)=>o=>{const a=qp(i,t)||{},l=a.delay||i.delay||0;let{elapsed:u=0}=i;u=u-Li(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-u,onUpdate:h=>{e.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};$R(a)||(c={...c,...XR(t,c)}),c.duration&&(c.duration=Li(c.duration)),c.repeatDelay&&(c.repeatDelay=Li(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let f=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(f=!0)),c.allowFlatten=!a.type&&!a.ease,f&&!s&&e.get()!==void 0){const h=_c(c.keyframes,a);if(h!==void 0)return ot.update(()=>{c.onUpdate(h),c.onComplete()}),new g1([])}return!s&&Cv.supports(c)?new Cv(c):new xm(c)};function YR({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function KS(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const u=[],c=r&&t.animationState&&t.animationState.getState()[r];for(const f in l){const h=t.getValue(f,(s=t.latestValues[f])!==null&&s!==void 0?s:null),p=l[f];if(p===void 0||c&&YR(c,f))continue;const g={delay:n,...qp(o||{},f)};let x=!1;if(window.MotionHandoffAnimation){const d=xS(t);if(d){const v=window.MotionHandoffAnimation(d,f,ot);v!==null&&(g.startTime=v,x=!0)}}Bd(t,f),h.start(ym(f,h,p,t.shouldReduceMotion&&_S.has(f)?{type:!1}:g,t,x));const m=h.animation;m&&u.push(m)}return a&&Promise.all(u).then(()=>{ot.update(()=>{a&&MC(t,a)})}),u}function qd(t,e,n={}){var i;const r=Na(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(KS(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:f,staggerDirection:h}=s;return qR(t,e,c+u,f,h,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,c]=l==="beforeChildren"?[o,a]:[a,o];return u().then(()=>c())}else return Promise.all([o(),a(n.delay)])}function qR(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(u=0)=>u*i:(u=0)=>a-u*i;return Array.from(t.variantChildren).sort(KR).forEach((u,c)=>{u.notify("AnimationStart",e),o.push(qd(u,e,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",e)))}),Promise.all(o)}function KR(t,e){return t.sortNodePosition(e)}function ZR(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>qd(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=qd(t,e,n);else{const r=typeof e=="function"?Na(t,e,n.custom):e;i=Promise.all(KS(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}function ZS(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const QR=tm.length;function QS(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?QS(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<QR;n++){const i=tm[n],r=t.props[i];(Pa(r)||r===!1)&&(e[i]=r)}return e}const JR=[...em].reverse(),eb=em.length;function tb(t){return e=>Promise.all(e.map(({animation:n,options:i})=>ZR(t,n,i)))}function nb(t){let e=tb(t),n=Rv(),i=!0;const r=l=>(u,c)=>{var f;const h=Na(t,c,l==="exit"?(f=t.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(h){const{transition:p,transitionEnd:g,...x}=h;u={...u,...x,...g}}return u};function s(l){e=l(t)}function o(l){const{props:u}=t,c=QS(t.parent)||{},f=[],h=new Set;let p={},g=1/0;for(let m=0;m<eb;m++){const d=JR[m],v=n[d],_=u[d]!==void 0?u[d]:c[d],y=Pa(_),w=d===l?v.isActive:null;w===!1&&(g=m);let C=_===c[d]&&_!==u[d]&&y;if(C&&i&&t.manuallyAnimateOnMount&&(C=!1),v.protectedKeys={...p},!v.isActive&&w===null||!_&&!v.prevProp||gc(_)||typeof _=="boolean")continue;const A=ib(v.prevProp,_);let b=A||d===l&&v.isActive&&!C&&y||m>g&&y,T=!1;const S=Array.isArray(_)?_:[_];let P=S.reduce(r(d),{});w===!1&&(P={});const{prevResolvedValues:W={}}=v,H={...W,...P},K=$=>{b=!0,h.has($)&&(T=!0,h.delete($)),v.needsAnimating[$]=!0;const L=t.getValue($);L&&(L.liveStyle=!1)};for(const $ in H){const L=P[$],X=W[$];if(p.hasOwnProperty($))continue;let Z=!1;kd(L)&&kd(X)?Z=!ZS(L,X):Z=L!==X,Z?L!=null?K($):h.add($):L!==void 0&&h.has($)?K($):v.protectedKeys[$]=!0}v.prevProp=_,v.prevResolvedValues=P,v.isActive&&(p={...p,...P}),i&&t.blockInitialAnimation&&(b=!1),b&&(!(C&&A)||T)&&f.push(...S.map($=>({animation:$,options:{type:d}})))}if(h.size){const m={};if(typeof u.initial!="boolean"){const d=Na(t,Array.isArray(u.initial)?u.initial[0]:u.initial);d&&d.transition&&(m.transition=d.transition)}h.forEach(d=>{const v=t.getBaseTarget(d),_=t.getValue(d);_&&(_.liveStyle=!0),m[d]=v??null}),f.push({animation:m})}let x=!!f.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(x=!1),i=!1,x?e(f):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=t.variantChildren)===null||c===void 0||c.forEach(h=>{var p;return(p=h.animationState)===null||p===void 0?void 0:p.setActive(l,u)}),n[l].isActive=u;const f=o(l);for(const h in n)n[h].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Rv(),i=!0}}}function ib(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!ZS(e,t):!1}function Dr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Rv(){return{animate:Dr(!0),whileInView:Dr(),whileHover:Dr(),whileTap:Dr(),whileDrag:Dr(),whileFocus:Dr(),exit:Dr()}}class Rr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class rb extends Rr{constructor(e){super(e),e.animationState||(e.animationState=nb(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();gc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let sb=0;class ob extends Rr{constructor(){super(...arguments),this.id=sb++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const ab={animation:{Feature:rb},exit:{Feature:ob}};function Ua(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Ya(t){return{point:{x:t.pageX,y:t.pageY}}}const lb=t=>e=>Jp(e)&&t(e,Ya(e));function la(t,e,n,i){return Ua(t,e,lb(n),i)}function JS({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function ub({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function cb(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}const eM=1e-4,fb=1-eM,db=1+eM,tM=.01,hb=0-tM,pb=0+tM;function en(t){return t.max-t.min}function mb(t,e,n){return Math.abs(t-e)<=n}function bv(t,e,n,i=.5){t.origin=i,t.originPoint=pt(e.min,e.max,t.origin),t.scale=en(n)/en(e),t.translate=pt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=fb&&t.scale<=db||isNaN(t.scale))&&(t.scale=1),(t.translate>=hb&&t.translate<=pb||isNaN(t.translate))&&(t.translate=0)}function ua(t,e,n,i){bv(t.x,e.x,n.x,i?i.originX:void 0),bv(t.y,e.y,n.y,i?i.originY:void 0)}function Pv(t,e,n){t.min=n.min+e.min,t.max=t.min+en(e)}function gb(t,e,n){Pv(t.x,e.x,n.x),Pv(t.y,e.y,n.y)}function Dv(t,e,n){t.min=e.min-n.min,t.max=t.min+en(e)}function ca(t,e,n){Dv(t.x,e.x,n.x),Dv(t.y,e.y,n.y)}const Lv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Hs=()=>({x:Lv(),y:Lv()}),Nv=()=>({min:0,max:0}),Et=()=>({x:Nv(),y:Nv()});function Dn(t){return[t("x"),t("y")]}function sf(t){return t===void 0||t===1}function Kd({scale:t,scaleX:e,scaleY:n}){return!sf(t)||!sf(e)||!sf(n)}function Vr(t){return Kd(t)||nM(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function nM(t){return Iv(t.x)||Iv(t.y)}function Iv(t){return t&&t!=="0%"}function $u(t,e,n){const i=t-n,r=e*i;return n+r}function Uv(t,e,n,i,r){return r!==void 0&&(t=$u(t,r,i)),$u(t,n,i)+e}function Zd(t,e=0,n=1,i,r){t.min=Uv(t.min,e,n,i,r),t.max=Uv(t.max,e,n,i,r)}function iM(t,{x:e,y:n}){Zd(t.x,e.translate,e.scale,e.originPoint),Zd(t.y,n.translate,n.scale,n.originPoint)}const Fv=.999999999999,Ov=1.0000000000001;function vb(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Ws(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,iM(t,o)),i&&Vr(s.latestValues)&&Ws(t,s.latestValues))}e.x<Ov&&e.x>Fv&&(e.x=1),e.y<Ov&&e.y>Fv&&(e.y=1)}function Gs(t,e){t.min=t.min+e,t.max=t.max+e}function kv(t,e,n,i,r=.5){const s=pt(t.min,t.max,r);Zd(t,e,n,s,i)}function Ws(t,e){kv(t.x,e.x,e.scaleX,e.scale,e.originX),kv(t.y,e.y,e.scaleY,e.scale,e.originY)}function rM(t,e){return JS(cb(t.getBoundingClientRect(),e))}function _b(t,e,n){const i=rM(t,n),{scroll:r}=e;return r&&(Gs(i.x,r.offset.x),Gs(i.y,r.offset.y)),i}const sM=({current:t})=>t?t.ownerDocument.defaultView:null,Bv=(t,e)=>Math.abs(t-e);function xb(t,e){const n=Bv(t.x,e.x),i=Bv(t.y,e.y);return Math.sqrt(n**2+i**2)}class oM{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=af(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,p=xb(f.offset,{x:0,y:0})>=3;if(!h&&!p)return;const{point:g}=f,{timestamp:x}=Bt;this.history.push({...g,timestamp:x});const{onStart:m,onMove:d}=this.handlers;h||(m&&m(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),d&&d(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=of(h,this.transformPagePoint),ot.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:p,onSessionEnd:g,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=af(f.type==="pointercancel"?this.lastMoveEventInfo:of(h,this.transformPagePoint),this.history);this.startEvent&&p&&p(f,m),g&&g(f,m)},!Jp(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Ya(e),a=of(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=Bt;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(e,af(a,this.history)),this.removeListeners=$a(la(this.contextWindow,"pointermove",this.handlePointerMove),la(this.contextWindow,"pointerup",this.handlePointerUp),la(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),yr(this.updatePoint)}}function of(t,e){return e?{point:e(t.point)}:t}function Vv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function af({point:t},e){return{point:t,delta:Vv(t,aM(e)),offset:Vv(t,yb(e)),velocity:Sb(e,.1)}}function yb(t){return t[0]}function aM(t){return t[t.length-1]}function Sb(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=aM(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Li(e)));)n--;if(!i)return{x:0,y:0};const s=Ni(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Mb(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?pt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?pt(n,t,i.max):Math.min(t,n)),t}function zv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function Eb(t,{top:e,left:n,bottom:i,right:r}){return{x:zv(t.x,n,r),y:zv(t.y,e,i)}}function Hv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function Tb(t,e){return{x:Hv(t.x,e.x),y:Hv(t.y,e.y)}}function wb(t,e){let n=.5;const i=en(t),r=en(e);return r>i?n=lo(e.min,e.max-i,t.min):i>r&&(n=lo(t.min,t.max-r,e.min)),Vi(0,1,n)}function Ab(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Qd=.35;function Cb(t=Qd){return t===!1?t=0:t===!0&&(t=Qd),{x:Gv(t,"left","right"),y:Gv(t,"top","bottom")}}function Gv(t,e,n){return{min:Wv(t,e),max:Wv(t,n)}}function Wv(t,e){return typeof t=="number"?t:t[e]||0}const Rb=new WeakMap;class bb{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Et(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=c=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ya(c).point)},s=(c,f)=>{const{drag:h,dragPropagation:p,onDragStart:g}=this.getProps();if(h&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=M1(h),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Dn(m=>{let d=this.getAxisMotionValue(m).get()||0;if(ci.test(d)){const{projection:v}=this.visualElement;if(v&&v.layout){const _=v.layout.layoutBox[m];_&&(d=en(_)*(parseFloat(d)/100))}}this.originPoint[m]=d}),g&&ot.postRender(()=>g(c,f)),Bd(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(c,f)=>{const{dragPropagation:h,dragDirectionLock:p,onDirectionLock:g,onDrag:x}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:m}=f;if(p&&this.currentDirection===null){this.currentDirection=Pb(m),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",f.point,m),this.updateAxis("y",f.point,m),this.visualElement.render(),x&&x(c,f)},a=(c,f)=>this.stop(c,f),l=()=>Dn(c=>{var f;return this.getAnimationState(c)==="paused"&&((f=this.getAxisMotionValue(c).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new oM(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:sM(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&ot.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!El(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=Mb(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Vs(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=Eb(r.layoutBox,n):this.constraints=!1,this.elastic=Cb(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Dn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=Ab(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Vs(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=_b(i,r.root,this.visualElement.getTransformPagePoint());let o=Tb(r.layout.layoutBox,s);if(n){const a=n(ub(o));this.hasMutatedConstraints=!!a,a&&(o=JS(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Dn(c=>{if(!El(c,n,this.currentDirection))return;let f=l&&l[c]||{};o&&(f={min:0,max:0});const h=r?200:1e6,p=r?40:1e7,g={type:"inertia",velocity:i?e[c]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(c,g)});return Promise.all(u).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Bd(this.visualElement,e),i.start(ym(e,i,0,n,this.visualElement,!1))}stopAnimation(){Dn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Dn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Dn(n=>{const{drag:i}=this.getProps();if(!El(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-pt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Vs(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Dn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=wb({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Dn(o=>{if(!El(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(pt(l,u,r[o]))})}addListeners(){if(!this.visualElement.current)return;Rb.set(this.visualElement,this);const e=this.visualElement.current,n=la(e,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Vs(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),ot.read(i);const o=Ua(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Dn(c=>{const f=this.getAxisMotionValue(c);f&&(this.originPoint[c]+=l[c].translate,f.set(f.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Qd,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function El(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function Pb(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class Db extends Rr{constructor(e){super(e),this.removeGroupControls=Sn,this.removeListeners=Sn,this.controls=new bb(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Sn}unmount(){this.removeGroupControls(),this.removeListeners()}}const jv=t=>(e,n)=>{t&&ot.postRender(()=>t(e,n))};class Lb extends Rr{constructor(){super(...arguments),this.removePointerDownListener=Sn}onPointerDown(e){this.session=new oM(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:sM(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:jv(e),onStart:jv(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&ot.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=la(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const cu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Xv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const ko={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Ce.test(t))t=parseFloat(t);else return t;const n=Xv(t,e.target.x),i=Xv(t,e.target.y);return`${n}% ${i}%`}},Nb={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Sr.parse(t);if(r.length>5)return i;const s=Sr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const u=pt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=u),typeof r[3+o]=="number"&&(r[3+o]/=u),s(r)}};class Ib extends O.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;K1(Ub),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),cu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ot.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Qp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function lM(t){const[e,n]=d1(),i=O.useContext(Gy);return N.jsx(Ib,{...t,layoutGroup:i,switchLayoutGroup:O.useContext(sS),isPresent:e,safeToRemove:n})}const Ub={borderRadius:{...ko,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ko,borderTopRightRadius:ko,borderBottomLeftRadius:ko,borderBottomRightRadius:ko,boxShadow:Nb};function Fb(t,e,n){const i=qt(t)?t:ba(t);return i.start(ym("",i,e,n)),i.animation}function Ob(t){return t instanceof SVGElement&&t.tagName!=="svg"}const kb=(t,e)=>t.depth-e.depth;class Bb{constructor(){this.children=[],this.isDirty=!1}add(e){jp(this.children,e),this.isDirty=!0}remove(e){Xp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(kb),this.isDirty=!1,this.children.forEach(e)}}function Vb(t,e){const n=ui.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(yr(i),t(s-e))};return ot.read(i,!0),()=>yr(i)}const uM=["TopLeft","TopRight","BottomLeft","BottomRight"],zb=uM.length,$v=t=>typeof t=="string"?parseFloat(t):t,Yv=t=>typeof t=="number"||Ce.test(t);function Hb(t,e,n,i,r,s){r?(t.opacity=pt(0,n.opacity!==void 0?n.opacity:1,Gb(i)),t.opacityExit=pt(e.opacity!==void 0?e.opacity:1,0,Wb(i))):s&&(t.opacity=pt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<zb;o++){const a=`border${uM[o]}Radius`;let l=qv(e,a),u=qv(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Yv(l)===Yv(u)?(t[a]=Math.max(pt($v(l),$v(u),i),0),(ci.test(u)||ci.test(l))&&(t[a]+="%")):t[a]=u}(e.rotate||n.rotate)&&(t.rotate=pt(e.rotate||0,n.rotate||0,i))}function qv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const Gb=cM(0,.5,AS),Wb=cM(.5,.95,Sn);function cM(t,e,n){return i=>i<t?0:i>e?1:n(lo(t,e,i))}function Kv(t,e){t.min=e.min,t.max=e.max}function Rn(t,e){Kv(t.x,e.x),Kv(t.y,e.y)}function Zv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Qv(t,e,n,i,r){return t-=e,t=$u(t,1/n,i),r!==void 0&&(t=$u(t,1/r,i)),t}function jb(t,e=0,n=1,i=.5,r,s=t,o=t){if(ci.test(e)&&(e=parseFloat(e),e=pt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=pt(s.min,s.max,i);t===s&&(a-=e),t.min=Qv(t.min,e,n,a,r),t.max=Qv(t.max,e,n,a,r)}function Jv(t,e,[n,i,r],s,o){jb(t,e[n],e[i],e[r],e.scale,s,o)}const Xb=["x","scaleX","originX"],$b=["y","scaleY","originY"];function e0(t,e,n,i){Jv(t.x,e,Xb,n?n.x:void 0,i?i.x:void 0),Jv(t.y,e,$b,n?n.y:void 0,i?i.y:void 0)}function t0(t){return t.translate===0&&t.scale===1}function fM(t){return t0(t.x)&&t0(t.y)}function n0(t,e){return t.min===e.min&&t.max===e.max}function Yb(t,e){return n0(t.x,e.x)&&n0(t.y,e.y)}function i0(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function dM(t,e){return i0(t.x,e.x)&&i0(t.y,e.y)}function r0(t){return en(t.x)/en(t.y)}function s0(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class qb{constructor(){this.members=[]}add(e){jp(this.members,e),e.scheduleRender()}remove(e){if(Xp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Kb(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:f,rotateY:h,skewX:p,skewY:g}=n;u&&(i=`perspective(${u}px) ${i}`),c&&(i+=`rotate(${c}deg) `),f&&(i+=`rotateX(${f}deg) `),h&&(i+=`rotateY(${h}deg) `),p&&(i+=`skewX(${p}deg) `),g&&(i+=`skewY(${g}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const lf=["","X","Y","Z"],Zb={visibility:"hidden"},o0=1e3;let Qb=0;function uf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function hM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=xS(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ot,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&hM(i)}function pM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=Qb++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(tP),this.nodes.forEach(oP),this.nodes.forEach(aP),this.nodes.forEach(nP)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Bb)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Yp),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Ob(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),t){let f;const h=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=Vb(h,250),cu.hasAnimatedSinceResize&&(cu.hasAnimatedSinceResize=!1,this.nodes.forEach(l0))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeLayoutChanged:p,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||c.getDefaultTransition()||dP,{onLayoutAnimationStart:m,onLayoutAnimationComplete:d}=c.getProps(),v=!this.targetLayout||!dM(this.targetLayout,g),_=!h&&p;if(this.options.layoutRoot||this.resumeFrom||_||h&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,_);const y={...qp(x,"layout"),onPlay:m,onComplete:d};(c.shouldReduceMotion||this.options.layoutRoot)&&(y.delay=0,y.type=!1),this.startAnimation(y)}else h||l0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,yr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(lP),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&hM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const f=this.path[c];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(a0);return}this.isUpdating||this.nodes.forEach(rP),this.isUpdating=!1,this.nodes.forEach(sP),this.nodes.forEach(Jb),this.nodes.forEach(eP),this.clearAllSnapshots();const a=ui.now();Bt.delta=Vi(0,1e3/60,a-Bt.timestamp),Bt.timestamp=a,Bt.isProcessing=!0,Jc.update.process(Bt),Jc.preRender.process(Bt),Jc.render.process(Bt),Bt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Qp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(iP),this.sharedNodes.forEach(uP)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ot.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ot.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!en(this.snapshot.measuredBox.x)&&!en(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Et(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!fM(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&(a||Vr(this.latestValues)||c)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),hP(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return Et();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(pP))){const{scroll:c}=this.root;c&&(Gs(l.x,c.offset.x),Gs(l.y,c.offset.y))}return l}removeElementScroll(o){var a;const l=Et();if(Rn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:f,options:h}=c;c!==this.root&&f&&h.layoutScroll&&(f.wasRoot&&Rn(l,o),Gs(l.x,f.offset.x),Gs(l.y,f.offset.y))}return l}applyTransform(o,a=!1){const l=Et();Rn(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Ws(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Vr(c.latestValues)&&Ws(l,c.latestValues)}return Vr(this.latestValues)&&Ws(l,this.latestValues),l}removeTransform(o){const a=Et();Rn(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Vr(u.latestValues))continue;Kd(u.latestValues)&&u.updateSnapshot();const c=Et(),f=u.measurePageBox();Rn(c,f),e0(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Vr(this.latestValues)&&e0(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Bt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:h}=this.options;if(!(!this.layout||!(f||h))){if(this.resolvedRelativeTargetAt=Bt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Et(),this.relativeTargetOrigin=Et(),ca(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Rn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Et(),this.targetWithTransforms=Et()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),gb(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Rn(this.target,this.layout.layoutBox),iM(this.target,this.targetDelta)):Rn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Et(),this.relativeTargetOrigin=Et(),ca(this.relativeTargetOrigin,this.target,p.target),Rn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Kd(this.parent.latestValues)||nM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Bt.timestamp&&(u=!1),u)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;Rn(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,p=this.treeScale.y;vb(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Et());const{target:g}=a;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Zv(this.prevProjectionDelta.x,this.projectionDelta.x),Zv(this.prevProjectionDelta.y,this.projectionDelta.y)),ua(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==p||!s0(this.projectionDelta.x,this.prevProjectionDelta.x)||!s0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Hs(),this.projectionDelta=Hs(),this.projectionDeltaWithTransform=Hs()}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},f=Hs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=Et(),p=l?l.source:void 0,g=this.layout?this.layout.source:void 0,x=p!==g,m=this.getStack(),d=!m||m.members.length<=1,v=!!(x&&!d&&this.options.crossfade===!0&&!this.path.some(fP));this.animationProgress=0;let _;this.mixTargetDelta=y=>{const w=y/1e3;u0(f.x,o.x,w),u0(f.y,o.y,w),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ca(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),cP(this.relativeTarget,this.relativeTargetOrigin,h,w),_&&Yb(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=Et()),Rn(_,this.relativeTarget)),x&&(this.animationValues=c,Hb(c,u,this.latestValues,w,v,d)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(yr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ot.update(()=>{cu.hasAnimatedSinceResize=!0,this.currentAnimation=Fb(0,o0,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(o0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&mM(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Et();const f=en(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const h=en(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}Rn(a,l),Ws(a,c),ua(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new qb),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&uf("z",o,u,this.animationValues);for(let c=0;c<lf.length;c++)uf(`rotate${lf[c]}`,o,u,this.animationValues),uf(`skew${lf[c]}`,o,u,this.animationValues);o.render();for(const c in u)o.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Zb;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=uu(o==null?void 0:o.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=uu(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Vr(this.latestValues)&&(x.transform=c?c({},""):"none",this.hasProjected=!1),x}const h=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=Kb(this.projectionDeltaWithTransform,this.treeScale,h),c&&(u.transform=c(h,u.transform));const{x:p,y:g}=this.projectionDelta;u.transformOrigin=`${p.origin*100}% ${g.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:u.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const x in Da){if(h[x]===void 0)continue;const{correct:m,applyTo:d,isCSSVariable:v}=Da[x],_=u.transform==="none"?h[x]:m(h[x],f);if(d){const y=d.length;for(let w=0;w<y;w++)u[d[w]]=_}else v?this.options.visualElement.renderState.vars[x]=_:u[x]=_}return this.options.layoutId&&(u.pointerEvents=f===this?uu(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(a0),this.root.sharedNodes.clear()}}}function Jb(t){t.updateLayout()}function eP(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Dn(f=>{const h=o?n.measuredBox[f]:n.layoutBox[f],p=en(h);h.min=i[f].min,h.max=h.min+p}):mM(s,n.layoutBox,i)&&Dn(f=>{const h=o?n.measuredBox[f]:n.layoutBox[f],p=en(i[f]);h.max=h.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+p)});const a=Hs();ua(a,i,n.layoutBox);const l=Hs();o?ua(l,t.applyTransform(r,!0),n.measuredBox):ua(l,i,n.layoutBox);const u=!fM(a);let c=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:p}=f;if(h&&p){const g=Et();ca(g,n.layoutBox,h.layoutBox);const x=Et();ca(x,i,p.layoutBox),dM(g,x)||(c=!0),f.options.layoutRoot&&(t.relativeTarget=x,t.relativeTargetOrigin=g,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeLayoutChanged:c})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function tP(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function nP(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function iP(t){t.clearSnapshot()}function a0(t){t.clearMeasurements()}function rP(t){t.isLayoutDirty=!1}function sP(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function l0(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function oP(t){t.resolveTargetDelta()}function aP(t){t.calcProjection()}function lP(t){t.resetSkewAndRotation()}function uP(t){t.removeLeadSnapshot()}function u0(t,e,n){t.translate=pt(e.translate,0,n),t.scale=pt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function c0(t,e,n,i){t.min=pt(e.min,n.min,i),t.max=pt(e.max,n.max,i)}function cP(t,e,n,i){c0(t.x,e.x,n.x,i),c0(t.y,e.y,n.y,i)}function fP(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const dP={duration:.45,ease:[.4,0,.1,1]},f0=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),d0=f0("applewebkit/")&&!f0("chrome/")?Math.round:Sn;function h0(t){t.min=d0(t.min),t.max=d0(t.max)}function hP(t){h0(t.x),h0(t.y)}function mM(t,e,n){return t==="position"||t==="preserve-aspect"&&!mb(r0(e),r0(n),.2)}function pP(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const mP=pM({attachResizeListener:(t,e)=>Ua(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),cf={current:void 0},gM=pM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!cf.current){const t=new mP({});t.mount(window),t.setOptions({layoutScroll:!0}),cf.current=t}return cf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),gP={pan:{Feature:Lb},drag:{Feature:Db,ProjectionNode:gM,MeasureLayout:lM}};function p0(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&ot.postRender(()=>s(e,Ya(e)))}class vP extends Rr{mount(){const{current:e}=this.node;e&&(this.unmount=T1(e,(n,i)=>(p0(this.node,i,"Start"),r=>p0(this.node,r,"End"))))}unmount(){}}class _P extends Rr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=$a(Ua(this.node.current,"focus",()=>this.onFocus()),Ua(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function m0(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&ot.postRender(()=>s(e,Ya(e)))}class xP extends Rr{mount(){const{current:e}=this.node;e&&(this.unmount=R1(e,(n,i)=>(m0(this.node,i,"Start"),(r,{success:s})=>m0(this.node,r,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Jd=new WeakMap,ff=new WeakMap,yP=t=>{const e=Jd.get(t.target);e&&e(t)},SP=t=>{t.forEach(yP)};function MP({root:t,...e}){const n=t||document;ff.has(n)||ff.set(n,{});const i=ff.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(SP,{root:t,...e})),i[r]}function EP(t,e,n){const i=MP(e);return Jd.set(t,n),i.observe(t),()=>{Jd.delete(t),i.unobserve(t)}}const TP={some:0,all:1};class wP extends Rr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:TP[r]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:f}=this.node.getProps(),h=u?c:f;h&&h(l)};return EP(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(AP(e,n))&&this.startObserver()}unmount(){}}function AP({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const CP={inView:{Feature:wP},tap:{Feature:xP},focus:{Feature:_P},hover:{Feature:vP}},RP={layout:{ProjectionNode:gM,MeasureLayout:lM}},eh={current:null},vM={current:!1};function bP(){if(vM.current=!0,!!Gp)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>eh.current=t.matches;t.addListener(e),e()}else eh.current=!1}const PP=[...zS,$t,Sr],DP=t=>PP.find(VS(t)),LP=new WeakMap;function NP(t,e,n){for(const i in e){const r=e[i],s=n[i];if(qt(r))t.addValue(i,r);else if(qt(s))t.addValue(i,ba(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,ba(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const g0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class IP{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=vm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=ui.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,ot.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:c}=o;this.onUpdate=c,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=vc(n),this.isVariantNode=iS(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:f,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in h){const g=h[p];l[p]!==void 0&&qt(g)&&g.set(l[p],!1)}}mount(e){this.current=e,LP.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),vM.current||bP(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:eh.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),yr(this.notifyUpdate),yr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=fs.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&ot.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in uo){const n=uo[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Et()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<g0.length;i++){const r=g0[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=NP(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=ba(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(kS(r)||RS(r))?r=parseFloat(r):!DP(r)&&Sr.test(n)&&(r=US(e,n)),this.setBaseTarget(e,qt(r)?r.get():r)),qt(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=fm(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!qt(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Yp),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class _M extends IP{constructor(){super(...arguments),this.KeyframeResolver=HS}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;qt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function UP(t){return window.getComputedStyle(t)}class FP extends _M{constructor(){super(...arguments),this.type="html",this.renderInstance=pS}readValueFromInstance(e,n){if(fs.has(n))return $C(e,n);{const i=UP(e),r=(im(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return rM(e,n)}build(e,n,i){om(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return dm(e,n,i)}}class OP extends _M{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Et,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&hS(this.current,this.renderState)}}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(fs.has(n)){const i=IS(n);return i&&i.default||0}return n=mS.has(n)?n:nm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return vS(e,n,i)}onBindTransform(){this.current&&!this.renderState.dimensions&&ot.postRender(this.updateDimensions)}build(e,n,i){um(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){gS(e,n,i,r)}mount(e){this.isSVGTag=cm(e.tagName),super.mount(e)}}const kP=(t,e)=>lm(t)?new OP(e):new FP(e,{allowProjection:t!==O.Fragment}),BP=yC({...ab,...CP,...gP,...RP},kP),bn=F1(BP);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sm="174",VP=0,v0=1,zP=2,xM=1,HP=2,yi=3,Mr=0,dn=1,Ei=2,mr=0,Qs=1,_0=2,x0=3,y0=4,GP=5,Wr=100,WP=101,jP=102,XP=103,$P=104,YP=200,qP=201,KP=202,ZP=203,th=204,nh=205,QP=206,JP=207,eD=208,tD=209,nD=210,iD=211,rD=212,sD=213,oD=214,ih=0,rh=1,sh=2,fo=3,oh=4,ah=5,lh=6,uh=7,yM=0,aD=1,lD=2,gr=0,uD=1,cD=2,fD=3,dD=4,hD=5,pD=6,mD=7,SM=300,ho=301,po=302,ch=303,fh=304,xc=306,dh=1e3,Zr=1001,hh=1002,ei=1003,gD=1004,Tl=1005,oi=1006,df=1007,Qr=1008,zi=1009,MM=1010,EM=1011,Fa=1012,Mm=1013,as=1014,Ci=1015,qa=1016,Em=1017,Tm=1018,mo=1020,TM=35902,wM=1021,AM=1022,Zn=1023,CM=1024,RM=1025,Js=1026,go=1027,bM=1028,wm=1029,PM=1030,Am=1031,Cm=1033,fu=33776,du=33777,hu=33778,pu=33779,ph=35840,mh=35841,gh=35842,vh=35843,_h=36196,xh=37492,yh=37496,Sh=37808,Mh=37809,Eh=37810,Th=37811,wh=37812,Ah=37813,Ch=37814,Rh=37815,bh=37816,Ph=37817,Dh=37818,Lh=37819,Nh=37820,Ih=37821,mu=36492,Uh=36494,Fh=36495,DM=36283,Oh=36284,kh=36285,Bh=36286,vD=3200,_D=3201,xD=0,yD=1,rr="",Ln="srgb",vo="srgb-linear",Yu="linear",nt="srgb",ps=7680,S0=519,SD=512,MD=513,ED=514,LM=515,TD=516,wD=517,AD=518,CD=519,M0=35044,E0="300 es",Ri=2e3,qu=2001;class Ao{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hf=Math.PI/180,Vh=180/Math.PI;function Ka(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Be(t,e,n){return Math.max(e,Math.min(n,t))}function RD(t,e){return(t%e+e)%e}function pf(t,e,n){return(1-n)*t+n*e}function Bo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class it{constructor(e=0,n=0){it.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Be(this.x,e.x,n.x),this.y=Be(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Be(this.x,e,n),this.y=Be(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Be(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,n,i,r,s,o,a,l,u){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],g=i[8],x=r[0],m=r[3],d=r[6],v=r[1],_=r[4],y=r[7],w=r[2],C=r[5],A=r[8];return s[0]=o*x+a*v+l*w,s[3]=o*m+a*_+l*C,s[6]=o*d+a*y+l*A,s[1]=u*x+c*v+f*w,s[4]=u*m+c*_+f*C,s[7]=u*d+c*y+f*A,s[2]=h*x+p*v+g*w,s[5]=h*m+p*_+g*C,s[8]=h*d+p*y+g*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,g=n*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(c*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(mf.makeScale(e,n)),this}rotate(e){return this.premultiply(mf.makeRotation(-e)),this}translate(e,n){return this.premultiply(mf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mf=new Ue;function NM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ku(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function bD(){const t=Ku("canvas");return t.style.display="block",t}const T0={};function zr(t){t in T0||(T0[t]=!0,console.warn(t))}function PD(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function DD(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function LD(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const w0=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),A0=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ND(){const t={enabled:!0,workingColorSpace:vo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===nt&&(r.r=Ii(r.r),r.g=Ii(r.g),r.b=Ii(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(r.r=eo(r.r),r.g=eo(r.g),r.b=eo(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===rr?Yu:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[vo]:{primaries:e,whitePoint:i,transfer:Yu,toXYZ:w0,fromXYZ:A0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:w0,fromXYZ:A0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),t}const qe=ND();function Ii(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function eo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ms;class ID{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ms===void 0&&(ms=Ku("canvas")),ms.width=e.width,ms.height=e.height;const i=ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ms}return n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ku("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ii(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ii(n[i]/255)*255):n[i]=Ii(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UD=0;class Rm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UD++}),this.uuid=Ka(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(gf(r[o].image)):s.push(gf(r[o]))}else s=gf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function gf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ID.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FD=0;class hn extends Ao{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Zr,r=Zr,s=oi,o=Qr,a=Zn,l=zi,u=hn.DEFAULT_ANISOTROPY,c=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FD++}),this.uuid=Ka(),this.name="",this.source=new Rm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==SM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dh:e.x=e.x-Math.floor(e.x);break;case Zr:e.x=e.x<0?0:1;break;case hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dh:e.y=e.y-Math.floor(e.y);break;case Zr:e.y=e.y<0?0:1;break;case hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=SM;hn.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,n=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,y=(p+1)/2,w=(d+1)/2,C=(c+h)/4,A=(f+x)/4,b=(g+m)/4;return _>y&&_>w?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=A/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=b/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=A/s,r=b/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-x)/v,this.z=(h-c)/v,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Be(this.x,e.x,n.x),this.y=Be(this.y,e.y,n.y),this.z=Be(this.z,e.z,n.z),this.w=Be(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Be(this.x,e,n),this.y=Be(this.y,e,n),this.z=Be(this.z,e,n),this.w=Be(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OD extends Ao{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Rm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends OD{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class IM extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kD extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Za{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=x;return}if(f!==x||l!==h||u!==p||c!==g){let m=1-a;const d=l*h+u*p+c*g+f*x,v=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const w=Math.sqrt(_),C=Math.atan2(w,d*v);m=Math.sin(m*C)/w,a=Math.sin(a*C)/w}const y=a*v;if(l=l*m+h*y,u=u*m+p*y,c=c*m+g*y,f=f*m+x*y,m===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=w,u*=w,c*=w,f*=w}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+c*f+l*p-u*h,e[n+1]=l*g+c*h+u*f-a*p,e[n+2]=u*g+c*p+a*h-l*f,e[n+3]=c*g-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"YXZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"ZXY":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"ZYX":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"YZX":this._x=h*c*f+u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f-h*p*g;break;case"XZY":this._x=h*c*f-u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(C0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(C0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Be(this.x,e.x,n.x),this.y=Be(this.y,e.y,n.y),this.z=Be(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Be(this.x,e,n),this.y=Be(this.y,e,n),this.z=Be(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vf.copy(this).projectOnVector(e),this.sub(vf)}reflect(e){return this.sub(vf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Be(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vf=new z,C0=new Za;class Qa{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(s,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wl.copy(i.boundingBox)),wl.applyMatrix4(e.matrixWorld),this.union(wl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),Al.subVectors(this.max,Vo),gs.subVectors(e.a,Vo),vs.subVectors(e.b,Vo),_s.subVectors(e.c,Vo),$i.subVectors(vs,gs),Yi.subVectors(_s,vs),Lr.subVectors(gs,_s);let n=[0,-$i.z,$i.y,0,-Yi.z,Yi.y,0,-Lr.z,Lr.y,$i.z,0,-$i.x,Yi.z,0,-Yi.x,Lr.z,0,-Lr.x,-$i.y,$i.x,0,-Yi.y,Yi.x,0,-Lr.y,Lr.x,0];return!_f(n,gs,vs,_s,Al)||(n=[1,0,0,0,1,0,0,0,1],!_f(n,gs,vs,_s,Al))?!1:(Cl.crossVectors($i,Yi),n=[Cl.x,Cl.y,Cl.z],_f(n,gs,vs,_s,Al))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new z,new z,new z,new z,new z,new z,new z,new z],Gn=new z,wl=new Qa,gs=new z,vs=new z,_s=new z,$i=new z,Yi=new z,Lr=new z,Vo=new z,Al=new z,Cl=new z,Nr=new z;function _f(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Nr.fromArray(t,s);const a=r.x*Math.abs(Nr.x)+r.y*Math.abs(Nr.y)+r.z*Math.abs(Nr.z),l=e.dot(Nr),u=n.dot(Nr),c=i.dot(Nr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const BD=new Qa,zo=new z,xf=new z;class yc{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):BD.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const n=zo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(zo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(xf)),this.expandByPoint(zo.copy(e.center).sub(xf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new z,yf=new z,Rl=new z,qi=new z,Sf=new z,bl=new z,Mf=new z;class UM{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,n),gi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){yf.copy(e).add(n).multiplyScalar(.5),Rl.copy(n).sub(e).normalize(),qi.copy(this.origin).sub(yf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Rl),a=qi.dot(this.direction),l=-qi.dot(Rl),u=qi.lengthSq(),c=Math.abs(1-o*o);let f,h,p,g;if(c>0)if(f=o*l-a,h=o*a-l,g=s*c,f>=0)if(h>=-g)if(h<=g){const x=1/c;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(yf).addScaledVector(Rl,h),p}intersectSphere(e,n){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,n,i,r,s){Sf.subVectors(n,e),bl.subVectors(i,e),Mf.crossVectors(Sf,bl);let o=this.direction.dot(Mf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,e);const l=a*this.direction.dot(bl.crossVectors(qi,bl));if(l<0)return null;const u=a*this.direction.dot(Sf.cross(qi));if(u<0||l+u>o)return null;const c=-a*qi.dot(Mf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,n,i,r,s,o,a,l,u,c,f,h,p,g,x,m){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,h,p,g,x,m)}set(e,n,i,r,s,o,a,l,u,c,f,h,p,g,x,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),o=1/xs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,g=a*c,x=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+g*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=g+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,g=u*c,x=u*f;n[0]=h+x*a,n[4]=g*a-p,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=p*a-g,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,g=u*c,x=u*f;n[0]=h-x*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*c,n[9]=x-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,g=a*c,x=a*f;n[0]=l*c,n[4]=g*u-p,n[8]=h*u+x,n[1]=l*f,n[5]=x*u+h,n[9]=p*u-g,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,g=a*l,x=a*u;n[0]=l*c,n[4]=x-h*f,n[8]=g*f+p,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*f+g,n[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,p=o*u,g=a*l,x=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=h*f+x,n[5]=o*c,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*c,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VD,e,zD)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ki.crossVectors(i,gn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ki.crossVectors(i,gn)),Ki.normalize(),Pl.crossVectors(gn,Ki),r[0]=Ki.x,r[4]=Pl.x,r[8]=gn.x,r[1]=Ki.y,r[5]=Pl.y,r[9]=gn.y,r[2]=Ki.z,r[6]=Pl.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],g=i[2],x=i[6],m=i[10],d=i[14],v=i[3],_=i[7],y=i[11],w=i[15],C=r[0],A=r[4],b=r[8],T=r[12],S=r[1],P=r[5],W=r[9],H=r[13],K=r[2],ee=r[6],Y=r[10],$=r[14],L=r[3],X=r[7],Z=r[11],ae=r[15];return s[0]=o*C+a*S+l*K+u*L,s[4]=o*A+a*P+l*ee+u*X,s[8]=o*b+a*W+l*Y+u*Z,s[12]=o*T+a*H+l*$+u*ae,s[1]=c*C+f*S+h*K+p*L,s[5]=c*A+f*P+h*ee+p*X,s[9]=c*b+f*W+h*Y+p*Z,s[13]=c*T+f*H+h*$+p*ae,s[2]=g*C+x*S+m*K+d*L,s[6]=g*A+x*P+m*ee+d*X,s[10]=g*b+x*W+m*Y+d*Z,s[14]=g*T+x*H+m*$+d*ae,s[3]=v*C+_*S+y*K+w*L,s[7]=v*A+_*P+y*ee+w*X,s[11]=v*b+_*W+y*Y+w*Z,s[15]=v*T+_*H+y*$+w*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+x*(+n*l*p-n*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+n*u*f-n*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-n*l*f+n*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],v=f*m*u-x*h*u+x*l*p-a*m*p-f*l*d+a*h*d,_=g*h*u-c*m*u-g*l*p+o*m*p+c*l*d-o*h*d,y=c*x*u-g*f*u+g*a*p-o*x*p-c*a*d+o*f*d,w=g*f*l-c*x*l-g*a*h+o*x*h+c*a*m-o*f*m,C=n*v+i*_+r*y+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=v*A,e[1]=(x*h*s-f*m*s-x*r*p+i*m*p+f*r*d-i*h*d)*A,e[2]=(a*m*s-x*l*s+x*r*u-i*m*u-a*r*d+i*l*d)*A,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*A,e[4]=_*A,e[5]=(c*m*s-g*h*s+g*r*p-n*m*p-c*r*d+n*h*d)*A,e[6]=(g*l*s-o*m*s-g*r*u+n*m*u+o*r*d-n*l*d)*A,e[7]=(o*h*s-c*l*s+c*r*u-n*h*u-o*r*p+n*l*p)*A,e[8]=y*A,e[9]=(g*f*s-c*x*s-g*i*p+n*x*p+c*i*d-n*f*d)*A,e[10]=(o*x*s-g*a*s+g*i*u-n*x*u-o*i*d+n*a*d)*A,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*p-n*a*p)*A,e[12]=w*A,e[13]=(c*x*r-g*f*r+g*i*h-n*x*h-c*i*m+n*f*m)*A,e[14]=(g*a*r-o*x*r-g*i*l+n*x*l+o*i*m-n*a*m)*A,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,g=s*f,x=o*c,m=o*f,d=a*f,v=l*u,_=l*c,y=l*f,w=i.x,C=i.y,A=i.z;return r[0]=(1-(x+d))*w,r[1]=(p+y)*w,r[2]=(g-_)*w,r[3]=0,r[4]=(p-y)*C,r[5]=(1-(h+d))*C,r[6]=(m+v)*C,r[7]=0,r[8]=(g+_)*A,r[9]=(m-v)*A,r[10]=(1-(h+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=xs.set(r[0],r[1],r[2]).length();const o=xs.set(r[4],r[5],r[6]).length(),a=xs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const u=1/s,c=1/o,f=1/a;return Wn.elements[0]*=u,Wn.elements[1]*=u,Wn.elements[2]*=u,Wn.elements[4]*=c,Wn.elements[5]*=c,Wn.elements[6]*=c,Wn.elements[8]*=f,Wn.elements[9]*=f,Wn.elements[10]*=f,n.setFromRotationMatrix(Wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ri){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===Ri)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===qu)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ri){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(o-s),h=(n+e)*u,p=(i+r)*c;let g,x;if(a===Ri)g=(o+s)*f,x=-2*f;else if(a===qu)g=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const xs=new z,Wn=new At,VD=new z(0,0,0),zD=new z(1,1,1),Ki=new z,Pl=new z,gn=new z,R0=new At,b0=new Za;class Hi{constructor(e=0,n=0,i=0,r=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return R0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(R0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return b0.setFromEuler(this),this.setFromQuaternion(b0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class FM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HD=0;const P0=new z,ys=new Za,vi=new At,Dl=new z,Ho=new z,GD=new z,WD=new Za,D0=new z(1,0,0),L0=new z(0,1,0),N0=new z(0,0,1),I0={type:"added"},jD={type:"removed"},Ss={type:"childadded",child:null},Ef={type:"childremoved",child:null};class pn extends Ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HD++}),this.uuid=Ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new z,n=new Hi,i=new Za,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Ue}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new FM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ys.setFromAxisAngle(e,n),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,n){return ys.setFromAxisAngle(e,n),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(D0,e)}rotateY(e){return this.rotateOnAxis(L0,e)}rotateZ(e){return this.rotateOnAxis(N0,e)}translateOnAxis(e,n){return P0.copy(e).applyQuaternion(this.quaternion),this.position.add(P0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(D0,e)}translateY(e){return this.translateOnAxis(L0,e)}translateZ(e){return this.translateOnAxis(N0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Dl.copy(e):Dl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Ho,Dl,this.up):vi.lookAt(Dl,Ho,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),ys.setFromRotationMatrix(vi),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(I0),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(jD),Ef.child=e,this.dispatchEvent(Ef),Ef.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(I0),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,GD),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,WD,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}pn.DEFAULT_UP=new z(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new z,_i=new z,Tf=new z,xi=new z,Ms=new z,Es=new z,U0=new z,wf=new z,Af=new z,Cf=new z,Rf=new wt,bf=new wt,Pf=new wt;class Kn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),_i.subVectors(i,n),Tf.subVectors(e,n);const o=jn.dot(jn),a=jn.dot(_i),l=jn.dot(Tf),u=_i.dot(_i),c=_i.dot(Tf),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,g=(o*c-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Rf.setScalar(0),bf.setScalar(0),Pf.setScalar(0),Rf.fromBufferAttribute(e,n),bf.fromBufferAttribute(e,i),Pf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Rf,s.x),o.addScaledVector(bf,s.y),o.addScaledVector(Pf,s.z),o}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),_i.subVectors(e,n),jn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),jn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ms.subVectors(r,i),Es.subVectors(s,i),wf.subVectors(e,i);const l=Ms.dot(wf),u=Es.dot(wf);if(l<=0&&u<=0)return n.copy(i);Af.subVectors(e,r);const c=Ms.dot(Af),f=Es.dot(Af);if(c>=0&&f<=c)return n.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Ms,o);Cf.subVectors(e,s);const p=Ms.dot(Cf),g=Es.dot(Cf);if(g>=0&&p<=g)return n.copy(s);const x=p*u-l*g;if(x<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(Es,a);const m=c*g-p*f;if(m<=0&&f-c>=0&&p-g>=0)return U0.subVectors(s,r),a=(f-c)/(f-c+(p-g)),n.copy(r).addScaledVector(U0,a);const d=1/(m+x+h);return o=x*d,a=h*d,n.copy(i).addScaledVector(Ms,o).addScaledVector(Es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const OM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Ll={h:0,s:0,l:0};function Df(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=qe.workingColorSpace){if(e=RD(e,1),n=Be(n,0,1),i=Be(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Df(o,s,e+1/3),this.g=Df(o,s,e),this.b=Df(o,s,e-1/3)}return qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Ln){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ln){const i=OM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return qe.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Be(Xt.r*255,0,255))*65536+Math.round(Be(Xt.g*255,0,255))*256+Math.round(Be(Xt.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=qe.workingColorSpace){qe.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=qe.workingColorSpace){return qe.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ln){qe.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==Ln?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+n,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Zi),e.getHSL(Ll);const i=pf(Zi.h,Ll.h,n),r=pf(Zi.s,Ll.s,n),s=pf(Zi.l,Ll.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new et;et.NAMES=OM;let XD=0;class Ja extends Ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XD++}),this.uuid=Ka(),this.name="",this.type="Material",this.blending=Qs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=nh,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=S0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==th&&(i.blendSrc=this.blendSrc),this.blendDst!==nh&&(i.blendDst=this.blendDst),this.blendEquation!==Wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==S0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class kM extends Ja{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=yM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new z,Nl=new it;let $D=0;class fi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$D++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=M0,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Nl.fromBufferAttribute(this,n),Nl.applyMatrix3(e),this.setXY(n,Nl.x,Nl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Bo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==M0&&(e.usage=this.usage),e}}class BM extends fi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class VM extends fi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class vr extends fi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let YD=0;const Pn=new At,Lf=new pn,Ts=new z,vn=new Qa,Go=new Qa,It=new z;class ji extends Ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YD++}),this.uuid=Ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(NM(e)?VM:BM)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return Lf.lookAt(e),Lf.updateMatrix(),this.applyMatrix4(Lf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vr(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Go.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(vn.min,Go.min),vn.expandByPoint(It),It.addVectors(vn.max,Go.max),vn.expandByPoint(It)):(vn.expandByPoint(Go.min),vn.expandByPoint(Go.max))}vn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)It.fromBufferAttribute(a,u),l&&(Ts.fromBufferAttribute(e,u),It.add(Ts)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new z,l[b]=new z;const u=new z,c=new z,f=new z,h=new it,p=new it,g=new it,x=new z,m=new z;function d(b,T,S){u.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,S),c.sub(u),f.sub(u),p.sub(h),g.sub(h);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(P),a[b].add(x),a[T].add(x),a[S].add(x),l[b].add(m),l[T].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let b=0,T=v.length;b<T;++b){const S=v[b],P=S.start,W=S.count;for(let H=P,K=P+W;H<K;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const _=new z,y=new z,w=new z,C=new z;function A(b){w.fromBufferAttribute(r,b),C.copy(w);const T=a[b];_.copy(T),_.sub(w.multiplyScalar(w.dot(T))).normalize(),y.crossVectors(C,T);const P=y.dot(l[b])<0?-1:1;o.setXYZW(b,_.x,_.y,_.z,P)}for(let b=0,T=v.length;b<T;++b){const S=v[b],P=S.start,W=S.count;for(let H=P,K=P+W;H<K;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,u=new z,c=new z,f=new z;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*c;for(let d=0;d<c;d++)h[g++]=u[p++]}return new fi(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ji,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const F0=new At,Ir=new UM,Il=new yc,O0=new z,Ul=new z,Fl=new z,Ol=new z,Nf=new z,kl=new z,k0=new z,Bl=new z;class bi extends pn{constructor(e=new ji,n=new kM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){kl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Nf.fromBufferAttribute(f,e),o?kl.addScaledVector(Nf,c):kl.addScaledVector(Nf.sub(n),c))}n.add(kl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(s),Ir.copy(e.ray).recast(e.near),!(Il.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(Il,O0)===null||Ir.origin.distanceToSquared(O0)>(e.far-e.near)**2))&&(F0.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(F0),!(i.boundingBox!==null&&Ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,w=_;y<w;y+=3){const C=a.getX(y),A=a.getX(y+1),b=a.getX(y+2);r=Vl(this,d,e,i,u,c,f,C,A,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=Vl(this,o,e,i,u,c,f,v,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,w=_;y<w;y+=3){const C=y,A=y+1,b=y+2;r=Vl(this,d,e,i,u,c,f,C,A,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const v=m,_=m+1,y=m+2;r=Vl(this,o,e,i,u,c,f,v,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function qD(t,e,n,i,r,s,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Mr,a),l===null)return null;Bl.copy(a),Bl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Bl);return u<n.near||u>n.far?null:{distance:u,point:Bl.clone(),object:t}}function Vl(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Ul),t.getVertexPosition(l,Fl),t.getVertexPosition(u,Ol);const c=qD(t,e,n,i,Ul,Fl,Ol,k0);if(c){const f=new z;Kn.getBarycoord(k0,Ul,Fl,Ol,f),r&&(c.uv=Kn.getInterpolatedAttribute(r,a,l,u,f,new it)),s&&(c.uv1=Kn.getInterpolatedAttribute(s,a,l,u,f,new it)),o&&(c.normal=Kn.getInterpolatedAttribute(o,a,l,u,f,new z),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new z,materialIndex:0};Kn.getNormal(Ul,Fl,Ol,h.normal),c.face=h,c.barycoord=f}return c}class el extends ji{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new vr(u,3)),this.setAttribute("normal",new vr(c,3)),this.setAttribute("uv",new vr(f,2));function g(x,m,d,v,_,y,w,C,A,b,T){const S=y/A,P=w/b,W=y/2,H=w/2,K=C/2,ee=A+1,Y=b+1;let $=0,L=0;const X=new z;for(let Z=0;Z<Y;Z++){const ae=Z*P-H;for(let Se=0;Se<ee;Se++){const $e=Se*S-W;X[x]=$e*v,X[m]=ae*_,X[d]=K,u.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[d]=C>0?1:-1,c.push(X.x,X.y,X.z),f.push(Se/A),f.push(1-Z/b),$+=1}}for(let Z=0;Z<b;Z++)for(let ae=0;ae<A;ae++){const Se=h+ae+ee*Z,$e=h+ae+ee*(Z+1),j=h+(ae+1)+ee*(Z+1),se=h+(ae+1)+ee*Z;l.push(Se,$e,se),l.push($e,j,se),L+=6}a.addGroup(p,L,T),p+=L,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _o(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=_o(t[n]);for(const r in i)e[r]=i[r]}return e}function KD(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function zM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const ZD={clone:_o,merge:Qt};var QD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends Ja{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QD,this.fragmentShader=JD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=KD(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class HM extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Ri}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new z,B0=new it,V0=new it;class Un extends HM{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vh*2*Math.atan(Math.tan(hf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,n){return this.getViewBounds(e,B0,V0),n.subVectors(V0,B0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(hf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ws=-90,As=1;class eL extends pn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Un(ws,As,e,n);r.layers=this.layers,this.add(r);const s=new Un(ws,As,e,n);s.layers=this.layers,this.add(s);const o=new Un(ws,As,e,n);o.layers=this.layers,this.add(o);const a=new Un(ws,As,e,n);a.layers=this.layers,this.add(a);const l=new Un(ws,As,e,n);l.layers=this.layers,this.add(l);const u=new Un(ws,As,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class GM extends hn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:ho,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tL extends ls{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new GM(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:oi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new el(5,5,5),s=new Er({name:"CubemapFromEquirect",uniforms:_o(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:mr});s.uniforms.tEquirect.value=n;const o=new bi(r,s),a=n.minFilter;return n.minFilter===Qr&&(n.minFilter=oi),new eL(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class zl extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nL={type:"move"};class If{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),d=this._getHandJoint(u,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&h>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nL)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new zl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class iL extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Uf=new z,rL=new z,sL=new Ue;class Hr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Uf.subVectors(i,n).cross(rL.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Uf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||sL.getNormalMatrix(e),r=this.coplanarPoint(Uf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new yc,Hl=new z;class WM{constructor(e=new Hr,n=new Hr,i=new Hr,r=new Hr,s=new Hr,o=new Hr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ri){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],g=r[9],x=r[10],m=r[11],d=r[12],v=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,m-p,y-d).normalize(),i[1].setComponents(l+s,h+u,m+p,y+d).normalize(),i[2].setComponents(l+o,h+c,m+g,y+v).normalize(),i[3].setComponents(l-o,h-c,m-g,y-v).normalize(),i[4].setComponents(l-a,h-f,m-x,y-_).normalize(),n===Ri)i[5].setComponents(l+a,h+f,m+x,y+_).normalize();else if(n===qu)i[5].setComponents(a,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Hl.x=r.normal.x>0?e.max.x:e.min.x,Hl.y=r.normal.y>0?e.max.y:e.min.y,Hl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jM extends Ja{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const z0=new At,zh=new UM,Gl=new yc,Wl=new z;class oL extends pn{constructor(e=new ji,n=new jM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gl.copy(i.boundingSphere),Gl.applyMatrix4(r),Gl.radius+=s,e.ray.intersectsSphere(Gl)===!1)return;z0.copy(r).invert(),zh.copy(e.ray).applyMatrix4(z0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=h,x=p;g<x;g++){const m=u.getX(g);Wl.fromBufferAttribute(f,m),H0(Wl,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,x=p;g<x;g++)Wl.fromBufferAttribute(f,g),H0(Wl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function H0(t,e,n,i,r,s,o){const a=zh.distanceSqToPoint(t);if(a<n){const l=new z;zh.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class XM extends hn{constructor(e,n,i,r,s,o,a,l,u,c=Js){if(c!==Js&&c!==go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Js&&(i=as),i===void 0&&c===go&&(i=mo),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:ei,this.minFilter=l!==void 0?l:ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Sc extends ji{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=n/l,p=[],g=[],x=[],m=[];for(let d=0;d<c;d++){const v=d*h-o;for(let _=0;_<u;_++){const y=_*f-s;g.push(y,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const _=v+u*d,y=v+u*(d+1),w=v+1+u*(d+1),C=v+1+u*d;p.push(_,y,C),p.push(y,w,C)}this.setIndex(p),this.setAttribute("position",new vr(g,3)),this.setAttribute("normal",new vr(x,3)),this.setAttribute("uv",new vr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.width,e.height,e.widthSegments,e.heightSegments)}}class aL extends Ja{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lL extends Ja{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class uL extends HM{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class cL extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function G0(t,e,n,i){const r=fL(i);switch(n){case wM:return t*e;case CM:return t*e;case RM:return t*e*2;case bM:return t*e/r.components*r.byteLength;case wm:return t*e/r.components*r.byteLength;case PM:return t*e*2/r.components*r.byteLength;case Am:return t*e*2/r.components*r.byteLength;case AM:return t*e*3/r.components*r.byteLength;case Zn:return t*e*4/r.components*r.byteLength;case Cm:return t*e*4/r.components*r.byteLength;case fu:case du:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case hu:case pu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mh:case vh:return Math.max(t,16)*Math.max(e,8)/4;case ph:case gh:return Math.max(t,8)*Math.max(e,8)/2;case _h:case xh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Th:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case wh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case bh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case mu:case Uh:case Fh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case DM:case Oh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case kh:case Bh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function fL(t){switch(t){case zi:case MM:return{byteLength:1,components:1};case Fa:case EM:case qa:return{byteLength:2,components:1};case Em:case Tm:return{byteLength:2,components:4};case as:case Mm:case Ci:return{byteLength:4,components:1};case TM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $M(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function dL(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,c);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const x=f[p];t.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var hL=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pL=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mL=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gL=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vL=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_L=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xL=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SL=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ML=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EL=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wL=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,AL=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,CL=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,RL=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LL=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,UL=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,FL=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,OL=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kL=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,BL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GL="gl_FragColor = linearToOutputTexel( gl_FragColor );",WL=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,XL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$L=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,YL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,KL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,t2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,s2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,o2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,f2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,h2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,p2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,M2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,b2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,D2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,H2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,q2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,K2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Z2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tN=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sN=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oN=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aN=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hN=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_N=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,SN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,MN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,CN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,DN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,IN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ON=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,WN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:hL,alphahash_pars_fragment:pL,alphamap_fragment:mL,alphamap_pars_fragment:gL,alphatest_fragment:vL,alphatest_pars_fragment:_L,aomap_fragment:xL,aomap_pars_fragment:yL,batching_pars_vertex:SL,batching_vertex:ML,begin_vertex:EL,beginnormal_vertex:TL,bsdfs:wL,iridescence_fragment:AL,bumpmap_pars_fragment:CL,clipping_planes_fragment:RL,clipping_planes_pars_fragment:bL,clipping_planes_pars_vertex:PL,clipping_planes_vertex:DL,color_fragment:LL,color_pars_fragment:NL,color_pars_vertex:IL,color_vertex:UL,common:FL,cube_uv_reflection_fragment:OL,defaultnormal_vertex:kL,displacementmap_pars_vertex:BL,displacementmap_vertex:VL,emissivemap_fragment:zL,emissivemap_pars_fragment:HL,colorspace_fragment:GL,colorspace_pars_fragment:WL,envmap_fragment:jL,envmap_common_pars_fragment:XL,envmap_pars_fragment:$L,envmap_pars_vertex:YL,envmap_physical_pars_fragment:s2,envmap_vertex:qL,fog_vertex:KL,fog_pars_vertex:ZL,fog_fragment:QL,fog_pars_fragment:JL,gradientmap_pars_fragment:e2,lightmap_pars_fragment:t2,lights_lambert_fragment:n2,lights_lambert_pars_fragment:i2,lights_pars_begin:r2,lights_toon_fragment:o2,lights_toon_pars_fragment:a2,lights_phong_fragment:l2,lights_phong_pars_fragment:u2,lights_physical_fragment:c2,lights_physical_pars_fragment:f2,lights_fragment_begin:d2,lights_fragment_maps:h2,lights_fragment_end:p2,logdepthbuf_fragment:m2,logdepthbuf_pars_fragment:g2,logdepthbuf_pars_vertex:v2,logdepthbuf_vertex:_2,map_fragment:x2,map_pars_fragment:y2,map_particle_fragment:S2,map_particle_pars_fragment:M2,metalnessmap_fragment:E2,metalnessmap_pars_fragment:T2,morphinstance_vertex:w2,morphcolor_vertex:A2,morphnormal_vertex:C2,morphtarget_pars_vertex:R2,morphtarget_vertex:b2,normal_fragment_begin:P2,normal_fragment_maps:D2,normal_pars_fragment:L2,normal_pars_vertex:N2,normal_vertex:I2,normalmap_pars_fragment:U2,clearcoat_normal_fragment_begin:F2,clearcoat_normal_fragment_maps:O2,clearcoat_pars_fragment:k2,iridescence_pars_fragment:B2,opaque_fragment:V2,packing:z2,premultiplied_alpha_fragment:H2,project_vertex:G2,dithering_fragment:W2,dithering_pars_fragment:j2,roughnessmap_fragment:X2,roughnessmap_pars_fragment:$2,shadowmap_pars_fragment:Y2,shadowmap_pars_vertex:q2,shadowmap_vertex:K2,shadowmask_pars_fragment:Z2,skinbase_vertex:Q2,skinning_pars_vertex:J2,skinning_vertex:eN,skinnormal_vertex:tN,specularmap_fragment:nN,specularmap_pars_fragment:iN,tonemapping_fragment:rN,tonemapping_pars_fragment:sN,transmission_fragment:oN,transmission_pars_fragment:aN,uv_pars_fragment:lN,uv_pars_vertex:uN,uv_vertex:cN,worldpos_vertex:fN,background_vert:dN,background_frag:hN,backgroundCube_vert:pN,backgroundCube_frag:mN,cube_vert:gN,cube_frag:vN,depth_vert:_N,depth_frag:xN,distanceRGBA_vert:yN,distanceRGBA_frag:SN,equirect_vert:MN,equirect_frag:EN,linedashed_vert:TN,linedashed_frag:wN,meshbasic_vert:AN,meshbasic_frag:CN,meshlambert_vert:RN,meshlambert_frag:bN,meshmatcap_vert:PN,meshmatcap_frag:DN,meshnormal_vert:LN,meshnormal_frag:NN,meshphong_vert:IN,meshphong_frag:UN,meshphysical_vert:FN,meshphysical_frag:ON,meshtoon_vert:kN,meshtoon_frag:BN,points_vert:VN,points_frag:zN,shadow_vert:HN,shadow_frag:GN,sprite_vert:WN,sprite_frag:jN},le={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},ri={basic:{uniforms:Qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new et(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Qt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Qt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new et(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Qt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Qt([le.points,le.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Qt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Qt([le.common,le.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Qt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Qt([le.sprite,le.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Qt([le.common,le.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Qt([le.lights,le.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ri.physical={uniforms:Qt([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const jl={r:0,b:0,g:0},Fr=new Hi,XN=new At;function $N(t,e,n,i,r,s,o){const a=new et(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?n:e).get(y)),y}function x(_){let y=!1;const w=g(_);w===null?d(a,l):w&&w.isColor&&(d(w,1),y=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,y){const w=g(y);w&&(w.isCubeTexture||w.mapping===xc)?(c===void 0&&(c=new bi(new el(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:_o(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Fr.copy(y.backgroundRotation),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(XN.makeRotationFromEuler(Fr)),c.material.toneMapped=qe.getTransfer(w.colorSpace)!==nt,(f!==w||h!==w.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=w,h=w.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new bi(new Sc(2,2),new Er({name:"BackgroundMaterial",uniforms:_o(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=w,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=qe.getTransfer(w.colorSpace)!==nt,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=w,h=w.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function d(_,y){_.getRGB(jl,zM(t)),i.buffers.color.setClear(jl.r,jl.g,jl.b,y,o)}function v(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(a,l)},render:x,addToRenderList:m,dispose:v}}function YN(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,P,W,H,K){let ee=!1;const Y=f(H,W,P);s!==Y&&(s=Y,u(s.object)),ee=p(S,H,W,K),ee&&g(S,H,W,K),K!==null&&e.update(K,t.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,y(S,P,W,H),K!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function c(S){return t.deleteVertexArray(S)}function f(S,P,W){const H=W.wireframe===!0;let K=i[S.id];K===void 0&&(K={},i[S.id]=K);let ee=K[P.id];ee===void 0&&(ee={},K[P.id]=ee);let Y=ee[H];return Y===void 0&&(Y=h(l()),ee[H]=Y),Y}function h(S){const P=[],W=[],H=[];for(let K=0;K<n;K++)P[K]=0,W[K]=0,H[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:W,attributeDivisors:H,object:S,attributes:{},index:null}}function p(S,P,W,H){const K=s.attributes,ee=P.attributes;let Y=0;const $=W.getAttributes();for(const L in $)if($[L].location>=0){const Z=K[L];let ae=ee[L];if(ae===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),Z===void 0||Z.attribute!==ae||ae&&Z.data!==ae.data)return!0;Y++}return s.attributesNum!==Y||s.index!==H}function g(S,P,W,H){const K={},ee=P.attributes;let Y=0;const $=W.getAttributes();for(const L in $)if($[L].location>=0){let Z=ee[L];Z===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const ae={};ae.attribute=Z,Z&&Z.data&&(ae.data=Z.data),K[L]=ae,Y++}s.attributes=K,s.attributesNum=Y,s.index=H}function x(){const S=s.newAttributes;for(let P=0,W=S.length;P<W;P++)S[P]=0}function m(S){d(S,0)}function d(S,P){const W=s.newAttributes,H=s.enabledAttributes,K=s.attributeDivisors;W[S]=1,H[S]===0&&(t.enableVertexAttribArray(S),H[S]=1),K[S]!==P&&(t.vertexAttribDivisor(S,P),K[S]=P)}function v(){const S=s.newAttributes,P=s.enabledAttributes;for(let W=0,H=P.length;W<H;W++)P[W]!==S[W]&&(t.disableVertexAttribArray(W),P[W]=0)}function _(S,P,W,H,K,ee,Y){Y===!0?t.vertexAttribIPointer(S,P,W,K,ee):t.vertexAttribPointer(S,P,W,H,K,ee)}function y(S,P,W,H){x();const K=H.attributes,ee=W.getAttributes(),Y=P.defaultAttributeValues;for(const $ in ee){const L=ee[$];if(L.location>=0){let X=K[$];if(X===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(X=S.instanceColor)),X!==void 0){const Z=X.normalized,ae=X.itemSize,Se=e.get(X);if(Se===void 0)continue;const $e=Se.buffer,j=Se.type,se=Se.bytesPerElement,pe=j===t.INT||j===t.UNSIGNED_INT||X.gpuType===Mm;if(X.isInterleavedBufferAttribute){const oe=X.data,Re=oe.stride,Ke=X.offset;if(oe.isInstancedInterleavedBuffer){for(let Pe=0;Pe<L.locationSize;Pe++)d(L.location+Pe,oe.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Pe=0;Pe<L.locationSize;Pe++)m(L.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let Pe=0;Pe<L.locationSize;Pe++)_(L.location+Pe,ae/L.locationSize,j,Z,Re*se,(Ke+ae/L.locationSize*Pe)*se,pe)}else{if(X.isInstancedBufferAttribute){for(let oe=0;oe<L.locationSize;oe++)d(L.location+oe,X.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let oe=0;oe<L.locationSize;oe++)m(L.location+oe);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let oe=0;oe<L.locationSize;oe++)_(L.location+oe,ae/L.locationSize,j,Z,ae*se,ae/L.locationSize*oe*se,pe)}}else if(Y!==void 0){const Z=Y[$];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(L.location,Z);break;case 3:t.vertexAttrib3fv(L.location,Z);break;case 4:t.vertexAttrib4fv(L.location,Z);break;default:t.vertexAttrib1fv(L.location,Z)}}}}v()}function w(){b();for(const S in i){const P=i[S];for(const W in P){const H=P[W];for(const K in H)c(H[K].object),delete H[K];delete P[W]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const W in P){const H=P[W];for(const K in H)c(H[K].object),delete H[K];delete P[W]}delete i[S.id]}function A(S){for(const P in i){const W=i[P];if(W[S.id]===void 0)continue;const H=W[S.id];for(const K in H)c(H[K].object),delete H[K];delete W[S.id]}}function b(){T(),o=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:T,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function qN(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let g=0;g<f;g++)p+=c[g];n.update(p,i,1)}function l(u,c,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let g=0;for(let x=0;x<f;x++)g+=c[x]*h[x];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function KN(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Zn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const b=A===qa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==zi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ci&&!b)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:w,maxSamples:C}}function ZN(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Hr,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=c(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,_=v*4;let y=d.clippingState||null;l.value=y,y=c(g,h,_,p);for(let w=0;w!==_;++w)y[w]=n[w];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const d=p+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,y=p;_!==x;++_,y+=4)o.copy(f[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function QN(t){let e=new WeakMap;function n(o,a){return a===ch?o.mapping=ho:a===fh&&(o.mapping=po),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ch||a===fh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new tL(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const js=4,W0=[.125,.215,.35,.446,.526,.582],jr=20,Ff=new uL,j0=new et;let Of=null,kf=0,Bf=0,Vf=!1;const Gr=(1+Math.sqrt(5))/2,Cs=1/Gr,X0=[new z(-Gr,Cs,0),new z(Gr,Cs,0),new z(-Cs,0,Gr),new z(Cs,0,Gr),new z(0,Gr,-Cs),new z(0,Gr,Cs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],JN=new z;class $0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=JN}=s;Of=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),Bf=this._renderer.getActiveMipmapLevel(),Vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=K0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=q0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Of,kf,Bf),this._renderer.xr.enabled=Vf,e.scissorTest=!1,Xl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ho||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Of=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),Bf=this._renderer.getActiveMipmapLevel(),Vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:qa,format:Zn,colorSpace:vo,depthBuffer:!1},r=Y0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Y0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eI(s)),this._blurMaterial=tI(s,e,n)}return r}_compileMaterial(e){const n=new bi(this._lodPlanes[0],e);this._renderer.compile(n,Ff)}_sceneToCubeUV(e,n,i,r,s){const l=new Un(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(j0),f.toneMapping=gr,f.autoClear=!1;const g=new kM({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),x=new bi(new el,g);let m=!1;const d=e.background;d?d.isColor&&(g.color.copy(d),e.background=null,m=!0):(g.color.copy(j0),m=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(l.up.set(0,u[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[v],s.y,s.z)):_===1?(l.up.set(0,0,u[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[v],s.z)):(l.up.set(0,u[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[v]));const y=this._cubeSize;Xl(r,_*y,v>2?y:0,y,y),f.setRenderTarget(r),m&&f.render(x,l),f.render(e,l)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=d}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ho||e.mapping===po;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=K0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=q0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new bi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Xl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ff)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=X0[(r-s-1)%X0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new bi(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*jr-1),x=s/g,m=isFinite(s)?1+Math.floor(c*x):jr;m>jr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jr}`);const d=[];let v=0;for(let A=0;A<jr;++A){const b=A/x,T=Math.exp(-b*b/2);d.push(T),A===0?v+=T:A<m&&(v+=2*T)}for(let A=0;A<d.length;A++)d[A]=d[A]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const y=this._sizeLods[r],w=3*y*(r>_-js?r-_+js:0),C=4*(this._cubeSize-y);Xl(n,w,C,3*y,2*y),l.setRenderTarget(n),l.render(f,Ff)}}function eI(t){const e=[],n=[],i=[];let r=t;const s=t-js+1+W0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-js?l=W0[o-t+js-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,g=6,x=3,m=2,d=1,v=new Float32Array(x*g*p),_=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,b=C>2?0:-1,T=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];v.set(T,x*g*C),_.set(h,m*g*C);const S=[C,C,C,C,C,C];y.set(S,d*g*C)}const w=new ji;w.setAttribute("position",new fi(v,x)),w.setAttribute("uv",new fi(_,m)),w.setAttribute("faceIndex",new fi(y,d)),e.push(w),r>js&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Y0(t,e,n){const i=new ls(t,e,n);return i.texture.mapping=xc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function tI(t,e,n){const i=new Float32Array(jr),r=new z(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function q0(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function K0(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function bm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nI(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===ch||l===fh,c=l===ho||l===po;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new $0(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new $0(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function iI(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&zr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function rI(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function u(f){const h=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let _=0,y=v.length;_<y;_+=3){const w=v[_+0],C=v[_+1],A=v[_+2];h.push(w,C,C,A,A,w)}}else if(g!==void 0){const v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const w=_+0,C=_+1,A=_+2;h.push(w,C,C,A,A,w)}}else return;const m=new(NM(h)?VM:BM)(h,1);m.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function sI(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function u(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,h*o,g),n.update(p,i,g))}function c(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];n.update(m,i,1)}function f(h,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)u(h[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v]*x[v];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function oI(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function aI(t,e,n){const i=new WeakMap,r=new wt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let w=a.attributes.position.count*y,C=1;w>e.maxTextureSize&&(C=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const A=new Float32Array(w*C*4*f),b=new IM(A,w,C,f);b.type=Ci,b.needsUpdate=!0;const T=y*4;for(let P=0;P<f;P++){const W=d[P],H=v[P],K=_[P],ee=w*C*4*P;for(let Y=0;Y<W.count;Y++){const $=Y*T;g===!0&&(r.fromBufferAttribute(W,Y),A[ee+$+0]=r.x,A[ee+$+1]=r.y,A[ee+$+2]=r.z,A[ee+$+3]=0),x===!0&&(r.fromBufferAttribute(H,Y),A[ee+$+4]=r.x,A[ee+$+5]=r.y,A[ee+$+6]=r.z,A[ee+$+7]=0),m===!0&&(r.fromBufferAttribute(K,Y),A[ee+$+8]=r.x,A[ee+$+9]=r.y,A[ee+$+10]=r.z,A[ee+$+11]=K.itemSize===4?r.w:1)}}h={count:f,texture:b,size:new it(w,C)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function lI(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const YM=new hn,Z0=new XM(1,1),qM=new IM,KM=new kD,ZM=new GM,Q0=[],J0=[],e_=new Float32Array(16),t_=new Float32Array(9),n_=new Float32Array(4);function Co(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Q0[r];if(s===void 0&&(s=new Float32Array(r),Q0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Mc(t,e){let n=J0[e];n===void 0&&(n=new Int32Array(e),J0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function uI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function cI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function fI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function dI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function hI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Lt(n,i))return;n_.set(i),t.uniformMatrix2fv(this.addr,!1,n_),Nt(n,i)}}function pI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Lt(n,i))return;t_.set(i),t.uniformMatrix3fv(this.addr,!1,t_),Nt(n,i)}}function mI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Lt(n,i))return;e_.set(i),t.uniformMatrix4fv(this.addr,!1,e_),Nt(n,i)}}function gI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function vI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function _I(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function xI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function yI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function SI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function MI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function EI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function TI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Z0.compareFunction=LM,s=Z0):s=YM,n.setTexture2D(e||s,r)}function wI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||KM,r)}function AI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ZM,r)}function CI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||qM,r)}function RI(t){switch(t){case 5126:return uI;case 35664:return cI;case 35665:return fI;case 35666:return dI;case 35674:return hI;case 35675:return pI;case 35676:return mI;case 5124:case 35670:return gI;case 35667:case 35671:return vI;case 35668:case 35672:return _I;case 35669:case 35673:return xI;case 5125:return yI;case 36294:return SI;case 36295:return MI;case 36296:return EI;case 35678:case 36198:case 36298:case 36306:case 35682:return TI;case 35679:case 36299:case 36307:return wI;case 35680:case 36300:case 36308:case 36293:return AI;case 36289:case 36303:case 36311:case 36292:return CI}}function bI(t,e){t.uniform1fv(this.addr,e)}function PI(t,e){const n=Co(e,this.size,2);t.uniform2fv(this.addr,n)}function DI(t,e){const n=Co(e,this.size,3);t.uniform3fv(this.addr,n)}function LI(t,e){const n=Co(e,this.size,4);t.uniform4fv(this.addr,n)}function NI(t,e){const n=Co(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function II(t,e){const n=Co(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function UI(t,e){const n=Co(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function FI(t,e){t.uniform1iv(this.addr,e)}function OI(t,e){t.uniform2iv(this.addr,e)}function kI(t,e){t.uniform3iv(this.addr,e)}function BI(t,e){t.uniform4iv(this.addr,e)}function VI(t,e){t.uniform1uiv(this.addr,e)}function zI(t,e){t.uniform2uiv(this.addr,e)}function HI(t,e){t.uniform3uiv(this.addr,e)}function GI(t,e){t.uniform4uiv(this.addr,e)}function WI(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||YM,s[o])}function jI(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||KM,s[o])}function XI(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||ZM,s[o])}function $I(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||qM,s[o])}function YI(t){switch(t){case 5126:return bI;case 35664:return PI;case 35665:return DI;case 35666:return LI;case 35674:return NI;case 35675:return II;case 35676:return UI;case 5124:case 35670:return FI;case 35667:case 35671:return OI;case 35668:case 35672:return kI;case 35669:case 35673:return BI;case 5125:return VI;case 36294:return zI;case 36295:return HI;case 36296:return GI;case 35678:case 36198:case 36298:case 36306:case 35682:return WI;case 35679:case 36299:case 36307:return jI;case 35680:case 36300:case 36308:case 36293:return XI;case 36289:case 36303:case 36311:case 36292:return $I}}class qI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=RI(n.type)}}class KI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=YI(n.type)}}class ZI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const zf=/(\w+)(\])?(\[|\.)?/g;function i_(t,e){t.seq.push(e),t.map[e.id]=e}function QI(t,e,n){const i=t.name,r=i.length;for(zf.lastIndex=0;;){const s=zf.exec(i),o=zf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){i_(n,u===void 0?new qI(a,t,e):new KI(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new ZI(a),i_(n,f)),n=f}}}class gu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);QI(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function r_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const JI=37297;let eU=0;function tU(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const s_=new Ue;function nU(t){qe._getMatrix(s_,qe.workingColorSpace,t);const e=`mat3( ${s_.elements.map(n=>n.toFixed(4))} )`;switch(qe.getTransfer(t)){case Yu:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function o_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+tU(t.getShaderSource(e),o)}else return r}function iU(t,e){const n=nU(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function rU(t,e){let n;switch(e){case uD:n="Linear";break;case cD:n="Reinhard";break;case fD:n="Cineon";break;case dD:n="ACESFilmic";break;case pD:n="AgX";break;case mD:n="Neutral";break;case hD:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $l=new z;function sU(){qe.getLuminanceCoefficients($l);const t=$l.x.toFixed(4),e=$l.y.toFixed(4),n=$l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oU(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function aU(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function lU(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Zo(t){return t!==""}function a_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function l_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uU=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(t){return t.replace(uU,fU)}const cU=new Map;function fU(t,e){let n=Oe[e];if(n===void 0){const i=cU.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hh(n)}const dU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u_(t){return t.replace(dU,hU)}function hU(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function c_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pU(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===xM?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===HP?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function mU(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ho:case po:e="ENVMAP_TYPE_CUBE";break;case xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gU(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case po:e="ENVMAP_MODE_REFRACTION";break}return e}function vU(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case yM:e="ENVMAP_BLENDING_MULTIPLY";break;case aD:e="ENVMAP_BLENDING_MIX";break;case lD:e="ENVMAP_BLENDING_ADD";break}return e}function _U(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function xU(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=pU(n),u=mU(n),c=gU(n),f=vU(n),h=_U(n),p=oU(n),g=aU(s),x=r.createProgram();let m,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Zo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Zo).join(`
`),d.length>0&&(d+=`
`)):(m=[c_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),d=[c_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gr?"#define TONE_MAPPING":"",n.toneMapping!==gr?Oe.tonemapping_pars_fragment:"",n.toneMapping!==gr?rU("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,iU("linearToOutputTexel",n.outputColorSpace),sU(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Zo).join(`
`)),o=Hh(o),o=a_(o,n),o=l_(o,n),a=Hh(a),a=a_(a,n),a=l_(a,n),o=u_(o),a=u_(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===E0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===E0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=v+m+o,y=v+d+a,w=r_(r,r.VERTEX_SHADER,_),C=r_(r,r.FRAGMENT_SHADER,y);r.attachShader(x,w),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(P){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(x).trim(),H=r.getShaderInfoLog(w).trim(),K=r.getShaderInfoLog(C).trim();let ee=!0,Y=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ee=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,w,C);else{const $=o_(r,w,"vertex"),L=o_(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+$+`
`+L)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||K==="")&&(Y=!1);Y&&(P.diagnostics={runnable:ee,programLog:W,vertexShader:{log:H,prefix:m},fragmentShader:{log:K,prefix:d}})}r.deleteShader(w),r.deleteShader(C),b=new gu(r,x),T=lU(r,x)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,JI)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=eU++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=C,this}let yU=0;class SU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new MU(e),n.set(e,i)),i}}class MU{constructor(e){this.id=yU++,this.code=e,this.usedTimes=0}}function EU(t,e,n,i,r,s,o){const a=new FM,l=new SU,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,S,P,W,H){const K=W.fog,ee=H.geometry,Y=T.isMeshStandardMaterial?W.environment:null,$=(T.isMeshStandardMaterial?n:e).get(T.envMap||Y),L=$&&$.mapping===xc?$.image.height:null,X=g[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Z=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ae=Z!==void 0?Z.length:0;let Se=0;ee.morphAttributes.position!==void 0&&(Se=1),ee.morphAttributes.normal!==void 0&&(Se=2),ee.morphAttributes.color!==void 0&&(Se=3);let $e,j,se,pe;if(X){const Je=ri[X];$e=Je.vertexShader,j=Je.fragmentShader}else $e=T.vertexShader,j=T.fragmentShader,l.update(T),se=l.getVertexShaderID(T),pe=l.getFragmentShaderID(T);const oe=t.getRenderTarget(),Re=t.state.buffers.depth.getReversed(),Ke=H.isInstancedMesh===!0,Pe=H.isBatchedMesh===!0,Mt=!!T.map,dt=!!T.matcap,Ve=!!$,D=!!T.aoMap,wn=!!T.lightMap,ze=!!T.bumpMap,He=!!T.normalMap,Te=!!T.displacementMap,at=!!T.emissiveMap,Ee=!!T.metalnessMap,R=!!T.roughnessMap,M=T.anisotropy>0,k=T.clearcoat>0,Q=T.dispersion>0,te=T.iridescence>0,q=T.sheen>0,Me=T.transmission>0,fe=M&&!!T.anisotropyMap,ve=k&&!!T.clearcoatMap,We=k&&!!T.clearcoatNormalMap,re=k&&!!T.clearcoatRoughnessMap,_e=te&&!!T.iridescenceMap,be=te&&!!T.iridescenceThicknessMap,De=q&&!!T.sheenColorMap,xe=q&&!!T.sheenRoughnessMap,Ge=!!T.specularMap,Fe=!!T.specularColorMap,rt=!!T.specularIntensityMap,I=Me&&!!T.transmissionMap,ue=Me&&!!T.thicknessMap,G=!!T.gradientMap,J=!!T.alphaMap,he=T.alphaTest>0,de=!!T.alphaHash,Ie=!!T.extensions;let _t=gr;T.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(_t=t.toneMapping);const Ht={shaderID:X,shaderType:T.type,shaderName:T.name,vertexShader:$e,fragmentShader:j,defines:T.defines,customVertexShaderID:se,customFragmentShaderID:pe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Pe,batchingColor:Pe&&H._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&H.instanceColor!==null,instancingMorph:Ke&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:vo,alphaToCoverage:!!T.alphaToCoverage,map:Mt,matcap:dt,envMap:Ve,envMapMode:Ve&&$.mapping,envMapCubeUVHeight:L,aoMap:D,lightMap:wn,bumpMap:ze,normalMap:He,displacementMap:h&&Te,emissiveMap:at,normalMapObjectSpace:He&&T.normalMapType===yD,normalMapTangentSpace:He&&T.normalMapType===xD,metalnessMap:Ee,roughnessMap:R,anisotropy:M,anisotropyMap:fe,clearcoat:k,clearcoatMap:ve,clearcoatNormalMap:We,clearcoatRoughnessMap:re,dispersion:Q,iridescence:te,iridescenceMap:_e,iridescenceThicknessMap:be,sheen:q,sheenColorMap:De,sheenRoughnessMap:xe,specularMap:Ge,specularColorMap:Fe,specularIntensityMap:rt,transmission:Me,transmissionMap:I,thicknessMap:ue,gradientMap:G,opaque:T.transparent===!1&&T.blending===Qs&&T.alphaToCoverage===!1,alphaMap:J,alphaTest:he,alphaHash:de,combine:T.combine,mapUv:Mt&&x(T.map.channel),aoMapUv:D&&x(T.aoMap.channel),lightMapUv:wn&&x(T.lightMap.channel),bumpMapUv:ze&&x(T.bumpMap.channel),normalMapUv:He&&x(T.normalMap.channel),displacementMapUv:Te&&x(T.displacementMap.channel),emissiveMapUv:at&&x(T.emissiveMap.channel),metalnessMapUv:Ee&&x(T.metalnessMap.channel),roughnessMapUv:R&&x(T.roughnessMap.channel),anisotropyMapUv:fe&&x(T.anisotropyMap.channel),clearcoatMapUv:ve&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:We&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:be&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:De&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:xe&&x(T.sheenRoughnessMap.channel),specularMapUv:Ge&&x(T.specularMap.channel),specularColorMapUv:Fe&&x(T.specularColorMap.channel),specularIntensityMapUv:rt&&x(T.specularIntensityMap.channel),transmissionMapUv:I&&x(T.transmissionMap.channel),thicknessMapUv:ue&&x(T.thicknessMap.channel),alphaMapUv:J&&x(T.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(He||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ee.attributes.uv&&(Mt||J),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Re,skinning:H.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:Mt&&T.map.isVideoTexture===!0&&qe.getTransfer(T.map.colorSpace)===nt,decodeVideoTextureEmissive:at&&T.emissiveMap.isVideoTexture===!0&&qe.getTransfer(T.emissiveMap.colorSpace)===nt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ei,flipSided:T.side===dn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ie&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&T.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ht.vertexUv1s=u.has(1),Ht.vertexUv2s=u.has(2),Ht.vertexUv3s=u.has(3),u.clear(),Ht}function d(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)S.push(P),S.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(v(S,T),_(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function v(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function _(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const S=g[T.type];let P;if(S){const W=ri[S];P=ZD.clone(W.uniforms)}else P=T.uniforms;return P}function w(T,S){let P;for(let W=0,H=c.length;W<H;W++){const K=c[W];if(K.cacheKey===S){P=K,++P.usedTimes;break}}return P===void 0&&(P=new xU(t,S,T,s),c.push(P)),P}function C(T){if(--T.usedTimes===0){const S=c.indexOf(T);c[S]=c[c.length-1],c.pop(),T.destroy()}}function A(T){l.remove(T)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:w,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:b}}function TU(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function wU(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function f_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function d_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,g,x,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=x,d.group=m),e++,d}function a(f,h,p,g,x,m){const d=o(f,h,p,g,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,g,x,m){const d=o(f,h,p,g,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function u(f,h){n.length>1&&n.sort(f||wU),i.length>1&&i.sort(h||f_),r.length>1&&r.sort(h||f_)}function c(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function AU(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new d_,t.set(i,[o])):r>=s.length?(o=new d_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function CU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new et};break;case"SpotLight":n={position:new z,direction:new z,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function RU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let bU=0;function PU(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function DU(t){const e=new CU,n=RU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,s=new At,o=new At;function a(u){let c=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,v=0,_=0,y=0,w=0,C=0,A=0;u.sort(PU);for(let T=0,S=u.length;T<S;T++){const P=u[T],W=P.color,H=P.intensity,K=P.distance,ee=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=W.r*H,f+=W.g*H,h+=W.b*H;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],H);A++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,L=n.get(P);L.shadowIntensity=$.intensity,L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=Y,p++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(W).multiplyScalar(H),Y.distance=K,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[x]=Y;const $=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,$.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[x]=$.matrix,P.castShadow){const L=n.get(P);L.shadowIntensity=$.intensity,L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,i.spotShadow[x]=L,i.spotShadowMap[x]=ee,y++}x++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(W).multiplyScalar(H),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=Y,m++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const $=P.shadow,L=n.get(P);L.shadowIntensity=$.intensity,L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,L.shadowCameraNear=$.camera.near,L.shadowCameraFar=$.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=P.shadow.matrix,_++}i.point[g]=Y,g++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(H),Y.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[d]=Y,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==p||b.pointLength!==g||b.spotLength!==x||b.rectAreaLength!==m||b.hemiLength!==d||b.numDirectionalShadows!==v||b.numPointShadows!==_||b.numSpotShadows!==y||b.numSpotMaps!==w||b.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,b.directionalLength=p,b.pointLength=g,b.spotLength=x,b.rectAreaLength=m,b.hemiLength=d,b.numDirectionalShadows=v,b.numPointShadows=_,b.numSpotShadows=y,b.numSpotMaps=w,b.numLightProbes=A,i.version=bU++)}function l(u,c){let f=0,h=0,p=0,g=0,x=0;const m=c.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const _=u[d];if(_.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(_.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function h_(t){const e=new DU(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function LU(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new h_(t),e.set(r,[a])):s>=o.length?(a=new h_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const NU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UU(t,e,n){let i=new WM;const r=new it,s=new it,o=new wt,a=new aL({depthPacking:_D}),l=new lL,u={},c=n.maxTextureSize,f={[Mr]:dn,[dn]:Mr,[Ei]:Ei},h=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:NU,fragmentShader:IU}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new ji;g.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new bi(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xM;let d=this.type;this.render=function(C,A,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),W=t.state;W.setBlending(mr),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=d!==yi&&this.type===yi,K=d===yi&&this.type!==yi;for(let ee=0,Y=C.length;ee<Y;ee++){const $=C[ee],L=$.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const X=L.getFrameExtents();if(r.multiply(X),s.copy(L.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/X.x),r.x=s.x*X.x,L.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/X.y),r.y=s.y*X.y,L.mapSize.y=s.y)),L.map===null||H===!0||K===!0){const ae=this.type!==yi?{minFilter:ei,magFilter:ei}:{};L.map!==null&&L.map.dispose(),L.map=new ls(r.x,r.y,ae),L.map.texture.name=$.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const Z=L.getViewportCount();for(let ae=0;ae<Z;ae++){const Se=L.getViewport(ae);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),W.viewport(o),L.updateMatrices($,ae),i=L.getFrustum(),y(A,b,L.camera,$,this.type)}L.isPointLightShadow!==!0&&this.type===yi&&v(L,b),L.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(T,S,P)};function v(C,A){const b=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ls(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,b,h,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,b,p,x,null)}function _(C,A,b,T){let S=null;const P=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)S=P;else if(S=b.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=S.uuid,H=A.uuid;let K=u[W];K===void 0&&(K={},u[W]=K);let ee=K[H];ee===void 0&&(ee=S.clone(),K[H]=ee,A.addEventListener("dispose",w)),S=ee}if(S.visible=A.visible,S.wireframe=A.wireframe,T===yi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:f[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=t.properties.get(S);W.light=b}return S}function y(C,A,b,T,S){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===yi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);const H=e.update(C),K=C.material;if(Array.isArray(K)){const ee=H.groups;for(let Y=0,$=ee.length;Y<$;Y++){const L=ee[Y],X=K[L.materialIndex];if(X&&X.visible){const Z=_(C,X,T,S);C.onBeforeShadow(t,C,A,b,H,Z,L),t.renderBufferDirect(b,null,H,Z,C,L),C.onAfterShadow(t,C,A,b,H,Z,L)}}}else if(K.visible){const ee=_(C,K,T,S);C.onBeforeShadow(t,C,A,b,H,ee,null),t.renderBufferDirect(b,null,H,ee,C,null),C.onAfterShadow(t,C,A,b,H,ee,null)}}const W=C.children;for(let H=0,K=W.length;H<K;H++)y(W[H],A,b,T,S)}function w(C){C.target.removeEventListener("dispose",w);for(const b in u){const T=u[b],S=C.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const FU={[ih]:rh,[sh]:lh,[oh]:uh,[fo]:ah,[rh]:ih,[lh]:sh,[uh]:oh,[ah]:fo};function OU(t,e){function n(){let I=!1;const ue=new wt;let G=null;const J=new wt(0,0,0,0);return{setMask:function(he){G!==he&&!I&&(t.colorMask(he,he,he,he),G=he)},setLocked:function(he){I=he},setClear:function(he,de,Ie,_t,Ht){Ht===!0&&(he*=_t,de*=_t,Ie*=_t),ue.set(he,de,Ie,_t),J.equals(ue)===!1&&(t.clearColor(he,de,Ie,_t),J.copy(ue))},reset:function(){I=!1,G=null,J.set(-1,0,0,0)}}}function i(){let I=!1,ue=!1,G=null,J=null,he=null;return{setReversed:function(de){if(ue!==de){const Ie=e.get("EXT_clip_control");ue?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT);const _t=he;he=null,this.setClear(_t)}ue=de},getReversed:function(){return ue},setTest:function(de){de?oe(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(de){G!==de&&!I&&(t.depthMask(de),G=de)},setFunc:function(de){if(ue&&(de=FU[de]),J!==de){switch(de){case ih:t.depthFunc(t.NEVER);break;case rh:t.depthFunc(t.ALWAYS);break;case sh:t.depthFunc(t.LESS);break;case fo:t.depthFunc(t.LEQUAL);break;case oh:t.depthFunc(t.EQUAL);break;case ah:t.depthFunc(t.GEQUAL);break;case lh:t.depthFunc(t.GREATER);break;case uh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=de}},setLocked:function(de){I=de},setClear:function(de){he!==de&&(ue&&(de=1-de),t.clearDepth(de),he=de)},reset:function(){I=!1,G=null,J=null,he=null,ue=!1}}}function r(){let I=!1,ue=null,G=null,J=null,he=null,de=null,Ie=null,_t=null,Ht=null;return{setTest:function(Je){I||(Je?oe(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(Je){ue!==Je&&!I&&(t.stencilMask(Je),ue=Je)},setFunc:function(Je,Vn,pi){(G!==Je||J!==Vn||he!==pi)&&(t.stencilFunc(Je,Vn,pi),G=Je,J=Vn,he=pi)},setOp:function(Je,Vn,pi){(de!==Je||Ie!==Vn||_t!==pi)&&(t.stencilOp(Je,Vn,pi),de=Je,Ie=Vn,_t=pi)},setLocked:function(Je){I=Je},setClear:function(Je){Ht!==Je&&(t.clearStencil(Je),Ht=Je)},reset:function(){I=!1,ue=null,G=null,J=null,he=null,de=null,Ie=null,_t=null,Ht=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,p=[],g=null,x=!1,m=null,d=null,v=null,_=null,y=null,w=null,C=null,A=new et(0,0,0),b=0,T=!1,S=null,P=null,W=null,H=null,K=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,$=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(L)[1]),Y=$>=1):L.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),Y=$>=2);let X=null,Z={};const ae=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),$e=new wt().fromArray(ae),j=new wt().fromArray(Se);function se(I,ue,G,J){const he=new Uint8Array(4),de=t.createTexture();t.bindTexture(I,de),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<G;Ie++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ue+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return de}const pe={};pe[t.TEXTURE_2D]=se(t.TEXTURE_2D,t.TEXTURE_2D,1),pe[t.TEXTURE_CUBE_MAP]=se(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[t.TEXTURE_2D_ARRAY]=se(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),pe[t.TEXTURE_3D]=se(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(t.DEPTH_TEST),o.setFunc(fo),ze(!1),He(v0),oe(t.CULL_FACE),D(mr);function oe(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function Re(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function Ke(I,ue){return f[I]!==ue?(t.bindFramebuffer(I,ue),f[I]=ue,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ue),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Pe(I,ue){let G=p,J=!1;if(I){G=h.get(ue),G===void 0&&(G=[],h.set(ue,G));const he=I.textures;if(G.length!==he.length||G[0]!==t.COLOR_ATTACHMENT0){for(let de=0,Ie=he.length;de<Ie;de++)G[de]=t.COLOR_ATTACHMENT0+de;G.length=he.length,J=!0}}else G[0]!==t.BACK&&(G[0]=t.BACK,J=!0);J&&t.drawBuffers(G)}function Mt(I){return g!==I?(t.useProgram(I),g=I,!0):!1}const dt={[Wr]:t.FUNC_ADD,[WP]:t.FUNC_SUBTRACT,[jP]:t.FUNC_REVERSE_SUBTRACT};dt[XP]=t.MIN,dt[$P]=t.MAX;const Ve={[YP]:t.ZERO,[qP]:t.ONE,[KP]:t.SRC_COLOR,[th]:t.SRC_ALPHA,[nD]:t.SRC_ALPHA_SATURATE,[eD]:t.DST_COLOR,[QP]:t.DST_ALPHA,[ZP]:t.ONE_MINUS_SRC_COLOR,[nh]:t.ONE_MINUS_SRC_ALPHA,[tD]:t.ONE_MINUS_DST_COLOR,[JP]:t.ONE_MINUS_DST_ALPHA,[iD]:t.CONSTANT_COLOR,[rD]:t.ONE_MINUS_CONSTANT_COLOR,[sD]:t.CONSTANT_ALPHA,[oD]:t.ONE_MINUS_CONSTANT_ALPHA};function D(I,ue,G,J,he,de,Ie,_t,Ht,Je){if(I===mr){x===!0&&(Re(t.BLEND),x=!1);return}if(x===!1&&(oe(t.BLEND),x=!0),I!==GP){if(I!==m||Je!==T){if((d!==Wr||y!==Wr)&&(t.blendEquation(t.FUNC_ADD),d=Wr,y=Wr),Je)switch(I){case Qs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _0:t.blendFunc(t.ONE,t.ONE);break;case x0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case y0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Qs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case x0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case y0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,_=null,w=null,C=null,A.set(0,0,0),b=0,m=I,T=Je}return}he=he||ue,de=de||G,Ie=Ie||J,(ue!==d||he!==y)&&(t.blendEquationSeparate(dt[ue],dt[he]),d=ue,y=he),(G!==v||J!==_||de!==w||Ie!==C)&&(t.blendFuncSeparate(Ve[G],Ve[J],Ve[de],Ve[Ie]),v=G,_=J,w=de,C=Ie),(_t.equals(A)===!1||Ht!==b)&&(t.blendColor(_t.r,_t.g,_t.b,Ht),A.copy(_t),b=Ht),m=I,T=!1}function wn(I,ue){I.side===Ei?Re(t.CULL_FACE):oe(t.CULL_FACE);let G=I.side===dn;ue&&(G=!G),ze(G),I.blending===Qs&&I.transparent===!1?D(mr):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const J=I.stencilWrite;a.setTest(J),J&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),at(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(I){S!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),S=I)}function He(I){I!==VP?(oe(t.CULL_FACE),I!==P&&(I===v0?t.cullFace(t.BACK):I===zP?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),P=I}function Te(I){I!==W&&(Y&&t.lineWidth(I),W=I)}function at(I,ue,G){I?(oe(t.POLYGON_OFFSET_FILL),(H!==ue||K!==G)&&(t.polygonOffset(ue,G),H=ue,K=G)):Re(t.POLYGON_OFFSET_FILL)}function Ee(I){I?oe(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function R(I){I===void 0&&(I=t.TEXTURE0+ee-1),X!==I&&(t.activeTexture(I),X=I)}function M(I,ue,G){G===void 0&&(X===null?G=t.TEXTURE0+ee-1:G=X);let J=Z[G];J===void 0&&(J={type:void 0,texture:void 0},Z[G]=J),(J.type!==I||J.texture!==ue)&&(X!==G&&(t.activeTexture(G),X=G),t.bindTexture(I,ue||pe[I]),J.type=I,J.texture=ue)}function k(){const I=Z[X];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Q(){try{t.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{t.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{t.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{t.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{t.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{t.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function We(){try{t.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{t.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{t.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{t.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(I){$e.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),$e.copy(I))}function xe(I){j.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),j.copy(I))}function Ge(I,ue){let G=u.get(ue);G===void 0&&(G=new WeakMap,u.set(ue,G));let J=G.get(I);J===void 0&&(J=t.getUniformBlockIndex(ue,I.name),G.set(I,J))}function Fe(I,ue){const J=u.get(ue).get(I);l.get(ue)!==J&&(t.uniformBlockBinding(ue,J,I.__bindingPointIndex),l.set(ue,J))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},X=null,Z={},f={},h=new WeakMap,p=[],g=null,x=!1,m=null,d=null,v=null,_=null,y=null,w=null,C=null,A=new et(0,0,0),b=0,T=!1,S=null,P=null,W=null,H=null,K=null,$e.set(0,0,t.canvas.width,t.canvas.height),j.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Re,bindFramebuffer:Ke,drawBuffers:Pe,useProgram:Mt,setBlending:D,setMaterial:wn,setFlipSided:ze,setCullFace:He,setLineWidth:Te,setPolygonOffset:at,setScissorTest:Ee,activeTexture:R,bindTexture:M,unbindTexture:k,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:_e,texImage3D:be,updateUBOMapping:Ge,uniformBlockBinding:Fe,texStorage2D:We,texStorage3D:re,texSubImage2D:q,texSubImage3D:Me,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:De,viewport:xe,reset:rt}}function kU(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new it,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):Ku("canvas")}function x(R,M,k){let Q=1;const te=Ee(R);if((te.width>k||te.height>k)&&(Q=k/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(Q*te.width),Me=Math.floor(Q*te.height);f===void 0&&(f=g(q,Me));const fe=M?g(q,Me):f;return fe.width=q,fe.height=Me,fe.getContext("2d").drawImage(R,0,0,q,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+q+"x"+Me+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){t.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(R,M,k,Q,te=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=M;if(M===t.RED&&(k===t.FLOAT&&(q=t.R32F),k===t.HALF_FLOAT&&(q=t.R16F),k===t.UNSIGNED_BYTE&&(q=t.R8)),M===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(q=t.R8UI),k===t.UNSIGNED_SHORT&&(q=t.R16UI),k===t.UNSIGNED_INT&&(q=t.R32UI),k===t.BYTE&&(q=t.R8I),k===t.SHORT&&(q=t.R16I),k===t.INT&&(q=t.R32I)),M===t.RG&&(k===t.FLOAT&&(q=t.RG32F),k===t.HALF_FLOAT&&(q=t.RG16F),k===t.UNSIGNED_BYTE&&(q=t.RG8)),M===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(q=t.RG8UI),k===t.UNSIGNED_SHORT&&(q=t.RG16UI),k===t.UNSIGNED_INT&&(q=t.RG32UI),k===t.BYTE&&(q=t.RG8I),k===t.SHORT&&(q=t.RG16I),k===t.INT&&(q=t.RG32I)),M===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(q=t.RGB8UI),k===t.UNSIGNED_SHORT&&(q=t.RGB16UI),k===t.UNSIGNED_INT&&(q=t.RGB32UI),k===t.BYTE&&(q=t.RGB8I),k===t.SHORT&&(q=t.RGB16I),k===t.INT&&(q=t.RGB32I)),M===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),k===t.UNSIGNED_INT&&(q=t.RGBA32UI),k===t.BYTE&&(q=t.RGBA8I),k===t.SHORT&&(q=t.RGBA16I),k===t.INT&&(q=t.RGBA32I)),M===t.RGB&&k===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),M===t.RGBA){const Me=te?Yu:qe.getTransfer(Q);k===t.FLOAT&&(q=t.RGBA32F),k===t.HALF_FLOAT&&(q=t.RGBA16F),k===t.UNSIGNED_BYTE&&(q=Me===nt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(R,M){let k;return R?M===null||M===as||M===mo?k=t.DEPTH24_STENCIL8:M===Ci?k=t.DEPTH32F_STENCIL8:M===Fa&&(k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===as||M===mo?k=t.DEPTH_COMPONENT24:M===Ci?k=t.DEPTH_COMPONENT32F:M===Fa&&(k=t.DEPTH_COMPONENT16),k}function w(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ei&&R.minFilter!==oi?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){const M=R.target;M.removeEventListener("dispose",C),b(M),M.isVideoTexture&&c.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),S(M)}function b(R){const M=i.get(R);if(M.__webglInit===void 0)return;const k=R.source,Q=h.get(k);if(Q){const te=Q[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&T(R),Object.keys(Q).length===0&&h.delete(k)}i.remove(R)}function T(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const k=R.source,Q=h.get(k);delete Q[M.__cacheKey],o.memory.textures--}function S(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let te=0;te<M.__webglFramebuffer[Q].length;te++)t.deleteFramebuffer(M.__webglFramebuffer[Q][te]);else t.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[Q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=R.textures;for(let Q=0,te=k.length;Q<te;Q++){const q=i.get(k[Q]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(k[Q])}i.remove(R)}let P=0;function W(){P=0}function H(){const R=P;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function K(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function ee(R,M){const k=i.get(R);if(R.isVideoTexture&&Te(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,R,M);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+M)}function Y(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){j(k,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+M)}function $(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){j(k,R,M);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+M)}function L(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){se(k,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+M)}const X={[dh]:t.REPEAT,[Zr]:t.CLAMP_TO_EDGE,[hh]:t.MIRRORED_REPEAT},Z={[ei]:t.NEAREST,[gD]:t.NEAREST_MIPMAP_NEAREST,[Tl]:t.NEAREST_MIPMAP_LINEAR,[oi]:t.LINEAR,[df]:t.LINEAR_MIPMAP_NEAREST,[Qr]:t.LINEAR_MIPMAP_LINEAR},ae={[SD]:t.NEVER,[CD]:t.ALWAYS,[MD]:t.LESS,[LM]:t.LEQUAL,[ED]:t.EQUAL,[AD]:t.GEQUAL,[TD]:t.GREATER,[wD]:t.NOTEQUAL};function Se(R,M){if(M.type===Ci&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===oi||M.magFilter===df||M.magFilter===Tl||M.magFilter===Qr||M.minFilter===oi||M.minFilter===df||M.minFilter===Tl||M.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,X[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,X[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,X[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Z[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Z[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ei||M.minFilter!==Tl&&M.minFilter!==Qr||M.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function $e(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const Q=M.source;let te=h.get(Q);te===void 0&&(te={},h.set(Q,te));const q=K(M);if(q!==R.__cacheKey){te[q]===void 0&&(te[q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),te[q].usedTimes++;const Me=te[R.__cacheKey];Me!==void 0&&(te[R.__cacheKey].usedTimes--,Me.usedTimes===0&&T(M)),R.__cacheKey=q,R.__webglTexture=te[q].texture}return k}function j(R,M,k){let Q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=t.TEXTURE_3D);const te=$e(R,M),q=M.source;n.bindTexture(Q,R.__webglTexture,t.TEXTURE0+k);const Me=i.get(q);if(q.version!==Me.__version||te===!0){n.activeTexture(t.TEXTURE0+k);const fe=qe.getPrimaries(qe.workingColorSpace),ve=M.colorSpace===rr?null:qe.getPrimaries(M.colorSpace),We=M.colorSpace===rr||fe===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let re=x(M.image,!1,r.maxTextureSize);re=at(M,re);const _e=s.convert(M.format,M.colorSpace),be=s.convert(M.type);let De=_(M.internalFormat,_e,be,M.colorSpace,M.isVideoTexture);Se(Q,M);let xe;const Ge=M.mipmaps,Fe=M.isVideoTexture!==!0,rt=Me.__version===void 0||te===!0,I=q.dataReady,ue=w(M,re);if(M.isDepthTexture)De=y(M.format===go,M.type),rt&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,De,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,De,re.width,re.height,0,_e,be,null));else if(M.isDataTexture)if(Ge.length>0){Fe&&rt&&n.texStorage2D(t.TEXTURE_2D,ue,De,Ge[0].width,Ge[0].height);for(let G=0,J=Ge.length;G<J;G++)xe=Ge[G],Fe?I&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,xe.width,xe.height,_e,be,xe.data):n.texImage2D(t.TEXTURE_2D,G,De,xe.width,xe.height,0,_e,be,xe.data);M.generateMipmaps=!1}else Fe?(rt&&n.texStorage2D(t.TEXTURE_2D,ue,De,re.width,re.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,_e,be,re.data)):n.texImage2D(t.TEXTURE_2D,0,De,re.width,re.height,0,_e,be,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Fe&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,De,Ge[0].width,Ge[0].height,re.depth);for(let G=0,J=Ge.length;G<J;G++)if(xe=Ge[G],M.format!==Zn)if(_e!==null)if(Fe){if(I)if(M.layerUpdates.size>0){const he=G0(xe.width,xe.height,M.format,M.type);for(const de of M.layerUpdates){const Ie=xe.data.subarray(de*he/xe.data.BYTES_PER_ELEMENT,(de+1)*he/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,de,xe.width,xe.height,1,_e,Ie)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,xe.width,xe.height,re.depth,_e,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,De,xe.width,xe.height,re.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,xe.width,xe.height,re.depth,_e,be,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,De,xe.width,xe.height,re.depth,0,_e,be,xe.data)}else{Fe&&rt&&n.texStorage2D(t.TEXTURE_2D,ue,De,Ge[0].width,Ge[0].height);for(let G=0,J=Ge.length;G<J;G++)xe=Ge[G],M.format!==Zn?_e!==null?Fe?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,xe.width,xe.height,_e,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,G,De,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?I&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,xe.width,xe.height,_e,be,xe.data):n.texImage2D(t.TEXTURE_2D,G,De,xe.width,xe.height,0,_e,be,xe.data)}else if(M.isDataArrayTexture)if(Fe){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,De,re.width,re.height,re.depth),I)if(M.layerUpdates.size>0){const G=G0(re.width,re.height,M.format,M.type);for(const J of M.layerUpdates){const he=re.data.subarray(J*G/re.data.BYTES_PER_ELEMENT,(J+1)*G/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,_e,be,he)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,_e,be,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,re.width,re.height,re.depth,0,_e,be,re.data);else if(M.isData3DTexture)Fe?(rt&&n.texStorage3D(t.TEXTURE_3D,ue,De,re.width,re.height,re.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,_e,be,re.data)):n.texImage3D(t.TEXTURE_3D,0,De,re.width,re.height,re.depth,0,_e,be,re.data);else if(M.isFramebufferTexture){if(rt)if(Fe)n.texStorage2D(t.TEXTURE_2D,ue,De,re.width,re.height);else{let G=re.width,J=re.height;for(let he=0;he<ue;he++)n.texImage2D(t.TEXTURE_2D,he,De,G,J,0,_e,be,null),G>>=1,J>>=1}}else if(Ge.length>0){if(Fe&&rt){const G=Ee(Ge[0]);n.texStorage2D(t.TEXTURE_2D,ue,De,G.width,G.height)}for(let G=0,J=Ge.length;G<J;G++)xe=Ge[G],Fe?I&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,_e,be,xe):n.texImage2D(t.TEXTURE_2D,G,De,_e,be,xe);M.generateMipmaps=!1}else if(Fe){if(rt){const G=Ee(re);n.texStorage2D(t.TEXTURE_2D,ue,De,G.width,G.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,be,re)}else n.texImage2D(t.TEXTURE_2D,0,De,_e,be,re);m(M)&&d(Q),Me.__version=q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function se(R,M,k){if(M.image.length!==6)return;const Q=$e(R,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+k);const q=i.get(te);if(te.version!==q.__version||Q===!0){n.activeTexture(t.TEXTURE0+k);const Me=qe.getPrimaries(qe.workingColorSpace),fe=M.colorSpace===rr?null:qe.getPrimaries(M.colorSpace),ve=M.colorSpace===rr||Me===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const We=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,_e=[];for(let J=0;J<6;J++)!We&&!re?_e[J]=x(M.image[J],!0,r.maxCubemapSize):_e[J]=re?M.image[J].image:M.image[J],_e[J]=at(M,_e[J]);const be=_e[0],De=s.convert(M.format,M.colorSpace),xe=s.convert(M.type),Ge=_(M.internalFormat,De,xe,M.colorSpace),Fe=M.isVideoTexture!==!0,rt=q.__version===void 0||Q===!0,I=te.dataReady;let ue=w(M,be);Se(t.TEXTURE_CUBE_MAP,M);let G;if(We){Fe&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,Ge,be.width,be.height);for(let J=0;J<6;J++){G=_e[J].mipmaps;for(let he=0;he<G.length;he++){const de=G[he];M.format!==Zn?De!==null?Fe?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,de.width,de.height,De,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,Ge,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,de.width,de.height,De,xe,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,Ge,de.width,de.height,0,De,xe,de.data)}}}else{if(G=M.mipmaps,Fe&&rt){G.length>0&&ue++;const J=Ee(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,Ge,J.width,J.height)}for(let J=0;J<6;J++)if(re){Fe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e[J].width,_e[J].height,De,xe,_e[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ge,_e[J].width,_e[J].height,0,De,xe,_e[J].data);for(let he=0;he<G.length;he++){const Ie=G[he].image[J].image;Fe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Ie.width,Ie.height,De,xe,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,Ge,Ie.width,Ie.height,0,De,xe,Ie.data)}}else{Fe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,De,xe,_e[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ge,De,xe,_e[J]);for(let he=0;he<G.length;he++){const de=G[he];Fe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,De,xe,de.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,Ge,De,xe,de.image[J])}}}m(M)&&d(t.TEXTURE_CUBE_MAP),q.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function pe(R,M,k,Q,te,q){const Me=s.convert(k.format,k.colorSpace),fe=s.convert(k.type),ve=_(k.internalFormat,Me,fe,k.colorSpace),We=i.get(M),re=i.get(k);if(re.__renderTarget=M,!We.__hasExternalTextures){const _e=Math.max(1,M.width>>q),be=Math.max(1,M.height>>q);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,q,ve,_e,be,M.depth,0,Me,fe,null):n.texImage2D(te,q,ve,_e,be,0,Me,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),He(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,te,re.__webglTexture,0,ze(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,te,re.__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(R,M,k){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const Q=M.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,q=y(M.stencilBuffer,te),Me=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=ze(M);He(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,q,M.width,M.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,q,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,R)}else{const Q=M.textures;for(let te=0;te<Q.length;te++){const q=Q[te],Me=s.convert(q.format,q.colorSpace),fe=s.convert(q.type),ve=_(q.internalFormat,Me,fe,q.colorSpace),We=ze(M);k&&He(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,We,ve,M.width,M.height):He(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,We,ve,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ve,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Re(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(M.depthTexture);Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee(M.depthTexture,0);const te=Q.__webglTexture,q=ze(M);if(M.depthTexture.format===Js)He(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(M.depthTexture.format===go)He(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ke(R){const M=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=Q}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Re(M.__webglFramebuffer,R)}else if(k){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=t.createRenderbuffer(),oe(M.__webglDepthbuffer[Q],R,!1);else{const te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),oe(M.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(R,M,k){const Q=i.get(R);M!==void 0&&pe(Q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&Ke(R)}function Mt(R){const M=R.texture,k=i.get(R),Q=i.get(M);R.addEventListener("dispose",A);const te=R.textures,q=R.isWebGLCubeRenderTarget===!0,Me=te.length>1;if(Me||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=M.version,o.memory.textures++),q){k.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[fe]=[];for(let ve=0;ve<M.mipmaps.length;ve++)k.__webglFramebuffer[fe][ve]=t.createFramebuffer()}else k.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)k.__webglFramebuffer[fe]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(Me)for(let fe=0,ve=te.length;fe<ve;fe++){const We=i.get(te[fe]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&He(R)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){const ve=te[fe];k.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[fe]);const We=s.convert(ve.format,ve.colorSpace),re=s.convert(ve.type),_e=_(ve.internalFormat,We,re,ve.colorSpace,R.isXRRenderTarget===!0),be=ze(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,_e,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,k.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),oe(k.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Se(t.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)pe(k.__webglFramebuffer[fe][ve],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else pe(k.__webglFramebuffer[fe],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(M)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let fe=0,ve=te.length;fe<ve;fe++){const We=te[fe],re=i.get(We);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),Se(t.TEXTURE_2D,We),pe(k.__webglFramebuffer,R,We,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(We)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,Q.__webglTexture),Se(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)pe(k.__webglFramebuffer[ve],R,M,t.COLOR_ATTACHMENT0,fe,ve);else pe(k.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,fe,0);m(M)&&d(fe),n.unbindTexture()}R.depthBuffer&&Ke(R)}function dt(R){const M=R.textures;for(let k=0,Q=M.length;k<Q;k++){const te=M[k];if(m(te)){const q=v(R),Me=i.get(te).__webglTexture;n.bindTexture(q,Me),d(q),n.unbindTexture()}}}const Ve=[],D=[];function wn(R){if(R.samples>0){if(He(R)===!1){const M=R.textures,k=R.width,Q=R.height;let te=t.COLOR_BUFFER_BIT;const q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(R),fe=M.length>1;if(fe)for(let ve=0;ve<M.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const We=i.get(M[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,We,0)}t.blitFramebuffer(0,0,k,Q,0,0,k,Q,te,t.NEAREST),l===!0&&(Ve.length=0,D.length=0,Ve.push(t.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ve.push(q),D.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,D)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ve))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<M.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const We=i.get(M[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,We,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function ze(R){return Math.min(r.maxSamples,R.samples)}function He(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Te(R){const M=o.render.frame;c.get(R)!==M&&(c.set(R,M),R.update())}function at(R,M){const k=R.colorSpace,Q=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==vo&&k!==rr&&(qe.getTransfer(k)===nt?(Q!==Zn||te!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Ee(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=ee,this.setTexture2DArray=Y,this.setTexture3D=$,this.setTextureCube=L,this.rebindTextures=Pe,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=wn,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=He}function BU(t,e){function n(i,r=rr){let s;const o=qe.getTransfer(r);if(i===zi)return t.UNSIGNED_BYTE;if(i===Em)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Tm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===TM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===MM)return t.BYTE;if(i===EM)return t.SHORT;if(i===Fa)return t.UNSIGNED_SHORT;if(i===Mm)return t.INT;if(i===as)return t.UNSIGNED_INT;if(i===Ci)return t.FLOAT;if(i===qa)return t.HALF_FLOAT;if(i===wM)return t.ALPHA;if(i===AM)return t.RGB;if(i===Zn)return t.RGBA;if(i===CM)return t.LUMINANCE;if(i===RM)return t.LUMINANCE_ALPHA;if(i===Js)return t.DEPTH_COMPONENT;if(i===go)return t.DEPTH_STENCIL;if(i===bM)return t.RED;if(i===wm)return t.RED_INTEGER;if(i===PM)return t.RG;if(i===Am)return t.RG_INTEGER;if(i===Cm)return t.RGBA_INTEGER;if(i===fu||i===du||i===hu||i===pu)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===fu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===du)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===fu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===du)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ph||i===mh||i===gh||i===vh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ph)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_h||i===xh||i===yh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_h||i===xh)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sh||i===Mh||i===Eh||i===Th||i===wh||i===Ah||i===Ch||i===Rh||i===bh||i===Ph||i===Dh||i===Lh||i===Nh||i===Ih)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Eh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Th)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ah)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ch)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ph)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ih)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mu||i===Uh||i===Fh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===mu)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===DM||i===Oh||i===kh||i===Bh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===mu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Oh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const VU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new hn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Er({vertexShader:VU,fragmentShader:zU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bi(new Sc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GU extends Ao{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,g=null;const x=new HU,m=n.getContextAttributes();let d=null,v=null;const _=[],y=[],w=new it;let C=null;const A=new Un;A.viewport=new wt;const b=new Un;b.viewport=new wt;const T=[A,b],S=new cL;let P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let se=_[j];return se===void 0&&(se=new If,_[j]=se),se.getTargetRaySpace()},this.getControllerGrip=function(j){let se=_[j];return se===void 0&&(se=new If,_[j]=se),se.getGripSpace()},this.getHand=function(j){let se=_[j];return se===void 0&&(se=new If,_[j]=se),se.getHandSpace()};function H(j){const se=y.indexOf(j.inputSource);if(se===-1)return;const pe=_[se];pe!==void 0&&(pe.update(j.inputSource,j.frame,u||o),pe.dispatchEvent({type:j.type,data:j.inputSource}))}function K(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",ee);for(let j=0;j<_.length;j++){const se=y[j];se!==null&&(y[j]=null,_[j].disconnect(se))}P=null,W=null,x.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,v=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",K),r.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,oe=null,Re=null;m.depth&&(Re=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pe=m.stencil?go:Js,oe=m.stencil?mo:as);const Ke={colorFormat:n.RGBA8,depthFormat:Re,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Ke),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new ls(h.textureWidth,h.textureHeight,{format:Zn,type:zi,depthTexture:new XM(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const pe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,pe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ls(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ee(j){for(let se=0;se<j.removed.length;se++){const pe=j.removed[se],oe=y.indexOf(pe);oe>=0&&(y[oe]=null,_[oe].disconnect(pe))}for(let se=0;se<j.added.length;se++){const pe=j.added[se];let oe=y.indexOf(pe);if(oe===-1){for(let Ke=0;Ke<_.length;Ke++)if(Ke>=y.length){y.push(pe),oe=Ke;break}else if(y[Ke]===null){y[Ke]=pe,oe=Ke;break}if(oe===-1)break}const Re=_[oe];Re&&Re.connect(pe)}}const Y=new z,$=new z;function L(j,se,pe){Y.setFromMatrixPosition(se.matrixWorld),$.setFromMatrixPosition(pe.matrixWorld);const oe=Y.distanceTo($),Re=se.projectionMatrix.elements,Ke=pe.projectionMatrix.elements,Pe=Re[14]/(Re[10]-1),Mt=Re[14]/(Re[10]+1),dt=(Re[9]+1)/Re[5],Ve=(Re[9]-1)/Re[5],D=(Re[8]-1)/Re[0],wn=(Ke[8]+1)/Ke[0],ze=Pe*D,He=Pe*wn,Te=oe/(-D+wn),at=Te*-D;if(se.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(at),j.translateZ(Te),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Re[10]===-1)j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Ee=Pe+Te,R=Mt+Te,M=ze-at,k=He+(oe-at),Q=dt*Mt/R*Ee,te=Ve*Mt/R*Ee;j.projectionMatrix.makePerspective(M,k,Q,te,Ee,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function X(j,se){se===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(se.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let se=j.near,pe=j.far;x.texture!==null&&(x.depthNear>0&&(se=x.depthNear),x.depthFar>0&&(pe=x.depthFar)),S.near=b.near=A.near=se,S.far=b.far=A.far=pe,(P!==S.near||W!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,W=S.far),A.layers.mask=j.layers.mask|2,b.layers.mask=j.layers.mask|4,S.layers.mask=A.layers.mask|b.layers.mask;const oe=j.parent,Re=S.cameras;X(S,oe);for(let Ke=0;Ke<Re.length;Ke++)X(Re[Ke],oe);Re.length===2?L(S,A,b):S.projectionMatrix.copy(A.projectionMatrix),Z(j,S,oe)};function Z(j,se,pe){pe===null?j.matrix.copy(se.matrixWorld):(j.matrix.copy(pe.matrixWorld),j.matrix.invert(),j.matrix.multiply(se.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Vh*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ae=null;function Se(j,se){if(c=se.getViewerPose(u||o),g=se,c!==null){const pe=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let oe=!1;pe.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let Pe=0;Pe<pe.length;Pe++){const Mt=pe[Pe];let dt=null;if(p!==null)dt=p.getViewport(Mt);else{const D=f.getViewSubImage(h,Mt);dt=D.viewport,Pe===0&&(e.setRenderTargetTextures(v,D.colorTexture,h.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(v))}let Ve=T[Pe];Ve===void 0&&(Ve=new Un,Ve.layers.enable(Pe),Ve.viewport=new wt,T[Pe]=Ve),Ve.matrix.fromArray(Mt.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Mt.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(dt.x,dt.y,dt.width,dt.height),Pe===0&&(S.matrix.copy(Ve.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(Ve)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const Pe=f.getDepthInformation(pe[0]);Pe&&Pe.isValid&&Pe.texture&&x.init(e,Pe,r.renderState)}}for(let pe=0;pe<_.length;pe++){const oe=y[pe],Re=_[pe];oe!==null&&Re!==void 0&&Re.update(oe,se,u||o)}ae&&ae(j,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const $e=new $M;$e.setAnimationLoop(Se),this.setAnimationLoop=function(j){ae=j},this.dispose=function(){}}}const Or=new Hi,WU=new At;function jU(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,zM(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,_,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,_):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===dn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===dn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,Or.copy(y),Or.x*=-1,Or.y*=-1,Or.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),m.envMapRotation.value.setFromMatrix4(WU.makeRotationFromEuler(Or)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=_*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===dn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function XU(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const y=_.program;i.uniformBlockBinding(v,y)}function u(v,_){let y=r[v.id];y===void 0&&(g(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",m));const w=_.program;i.updateUBOMapping(v,w);const C=e.render.frame;s[v.id]!==C&&(h(v),s[v.id]=C)}function c(v){const _=f();v.__bindingPointIndex=_;const y=t.createBuffer(),w=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,w,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=r[v.id],y=v.uniforms,w=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let C=0,A=y.length;C<A;C++){const b=Array.isArray(y[C])?y[C]:[y[C]];for(let T=0,S=b.length;T<S;T++){const P=b[T];if(p(P,C,T,w)===!0){const W=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let ee=0;ee<H.length;ee++){const Y=H[ee],$=x(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,W+K,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,K),K+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,_,y,w){const C=v.value,A=_+"_"+y;if(w[A]===void 0)return typeof C=="number"||typeof C=="boolean"?w[A]=C:w[A]=C.clone(),!0;{const b=w[A];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return w[A]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function g(v){const _=v.uniforms;let y=0;const w=16;for(let A=0,b=_.length;A<b;A++){const T=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,P=T.length;S<P;S++){const W=T[S],H=Array.isArray(W.value)?W.value:[W.value];for(let K=0,ee=H.length;K<ee;K++){const Y=H[K],$=x(Y),L=y%w,X=L%$.boundary,Z=L+X;y+=X,Z!==0&&w-Z<$.storage&&(y+=w-Z),W.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=$.storage}}}const C=y%w;return C>0&&(y+=w-C),v.__size=y,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class $U{constructor(e={}){const{canvas:n=bD(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const v=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ln,this.toneMapping=gr,this.toneMappingExposure=1;const y=this;let w=!1,C=0,A=0,b=null,T=-1,S=null;const P=new wt,W=new wt;let H=null;const K=new et(0);let ee=0,Y=n.width,$=n.height,L=1,X=null,Z=null;const ae=new wt(0,0,Y,$),Se=new wt(0,0,Y,$);let $e=!1;const j=new WM;let se=!1,pe=!1;this.transmissionResolutionScale=1;const oe=new At,Re=new At,Ke=new z,Pe=new wt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Ve(){return b===null?L:1}let D=i;function wn(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Sm}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",de,!1),D===null){const U="webgl2";if(D=wn(U,E),D===null)throw wn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ze,He,Te,at,Ee,R,M,k,Q,te,q,Me,fe,ve,We,re,_e,be,De,xe,Ge,Fe,rt,I;function ue(){ze=new iI(D),ze.init(),Fe=new BU(D,ze),He=new KN(D,ze,e,Fe),Te=new OU(D,ze),He.reverseDepthBuffer&&h&&Te.buffers.depth.setReversed(!0),at=new oI(D),Ee=new TU,R=new kU(D,ze,Te,Ee,He,Fe,at),M=new QN(y),k=new nI(y),Q=new dL(D),rt=new YN(D,Q),te=new rI(D,Q,at,rt),q=new lI(D,te,Q,at),De=new aI(D,He,R),re=new ZN(Ee),Me=new EU(y,M,k,ze,He,rt,re),fe=new jU(y,Ee),ve=new AU,We=new LU(ze),be=new $N(y,M,k,Te,q,p,l),_e=new UU(y,q,He),I=new XU(D,at,He,Te),xe=new qN(D,ze,at),Ge=new sI(D,ze,at),at.programs=Me.programs,y.capabilities=He,y.extensions=ze,y.properties=Ee,y.renderLists=ve,y.shadowMap=_e,y.state=Te,y.info=at}ue();const G=new GU(y,D);this.xr=G,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(E){E!==void 0&&(L=E,this.setSize(Y,$,!1))},this.getSize=function(E){return E.set(Y,$)},this.setSize=function(E,U,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,$=U,n.width=Math.floor(E*L),n.height=Math.floor(U*L),B===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(Y*L,$*L).floor()},this.setDrawingBufferSize=function(E,U,B){Y=E,$=U,L=B,n.width=Math.floor(E*B),n.height=Math.floor(U*B),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(ae)},this.setViewport=function(E,U,B,V){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,U,B,V),Te.viewport(P.copy(ae).multiplyScalar(L).round())},this.getScissor=function(E){return E.copy(Se)},this.setScissor=function(E,U,B,V){E.isVector4?Se.set(E.x,E.y,E.z,E.w):Se.set(E,U,B,V),Te.scissor(W.copy(Se).multiplyScalar(L).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(E){Te.setScissorTest($e=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){Z=E},this.getClearColor=function(E){return E.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,B=!0){let V=0;if(E){let F=!1;if(b!==null){const ie=b.texture.format;F=ie===Cm||ie===Am||ie===wm}if(F){const ie=b.texture.type,ce=ie===zi||ie===as||ie===Fa||ie===mo||ie===Em||ie===Tm,ge=be.getClearColor(),ye=be.getClearAlpha(),Le=ge.r,Ne=ge.g,we=ge.b;ce?(g[0]=Le,g[1]=Ne,g[2]=we,g[3]=ye,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Le,x[1]=Ne,x[2]=we,x[3]=ye,D.clearBufferiv(D.COLOR,0,x))}else V|=D.COLOR_BUFFER_BIT}U&&(V|=D.DEPTH_BUFFER_BIT),B&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",de,!1),be.dispose(),ve.dispose(),We.dispose(),Ee.dispose(),M.dispose(),k.dispose(),q.dispose(),rt.dispose(),I.dispose(),Me.dispose(),G.dispose(),G.removeEventListener("sessionstart",Pm),G.removeEventListener("sessionend",Dm),br.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=at.autoReset,U=_e.enabled,B=_e.autoUpdate,V=_e.needsUpdate,F=_e.type;ue(),at.autoReset=E,_e.enabled=U,_e.autoUpdate=B,_e.needsUpdate=V,_e.type=F}function de(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ie(E){const U=E.target;U.removeEventListener("dispose",Ie),_t(U)}function _t(E){Ht(E),Ee.remove(E)}function Ht(E){const U=Ee.get(E).programs;U!==void 0&&(U.forEach(function(B){Me.releaseProgram(B)}),E.isShaderMaterial&&Me.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,B,V,F,ie){U===null&&(U=Mt);const ce=F.isMesh&&F.matrixWorld.determinant()<0,ge=QM(E,U,B,V,F);Te.setMaterial(V,ce);let ye=B.index,Le=1;if(V.wireframe===!0){if(ye=te.getWireframeAttribute(B),ye===void 0)return;Le=2}const Ne=B.drawRange,we=B.attributes.position;let je=Ne.start*Le,Ze=(Ne.start+Ne.count)*Le;ie!==null&&(je=Math.max(je,ie.start*Le),Ze=Math.min(Ze,(ie.start+ie.count)*Le)),ye!==null?(je=Math.max(je,0),Ze=Math.min(Ze,ye.count)):we!=null&&(je=Math.max(je,0),Ze=Math.min(Ze,we.count));const Ct=Ze-je;if(Ct<0||Ct===1/0)return;rt.setup(F,V,ge,B,ye);let xt,Ye=xe;if(ye!==null&&(xt=Q.get(ye),Ye=Ge,Ye.setIndex(xt)),F.isMesh)V.wireframe===!0?(Te.setLineWidth(V.wireframeLinewidth*Ve()),Ye.setMode(D.LINES)):Ye.setMode(D.TRIANGLES);else if(F.isLine){let Ae=V.linewidth;Ae===void 0&&(Ae=1),Te.setLineWidth(Ae*Ve()),F.isLineSegments?Ye.setMode(D.LINES):F.isLineLoop?Ye.setMode(D.LINE_LOOP):Ye.setMode(D.LINE_STRIP)}else F.isPoints?Ye.setMode(D.POINTS):F.isSprite&&Ye.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)zr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ye.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))Ye.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ae=F._multiDrawStarts,Ot=F._multiDrawCounts,Qe=F._multiDrawCount,zn=ye?Q.get(ye).bytesPerElement:1,ds=Ee.get(V).currentProgram.getUniforms();for(let mn=0;mn<Qe;mn++)ds.setValue(D,"_gl_DrawID",mn),Ye.render(Ae[mn]/zn,Ot[mn])}else if(F.isInstancedMesh)Ye.renderInstances(je,Ct,F.count);else if(B.isInstancedBufferGeometry){const Ae=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ot=Math.min(B.instanceCount,Ae);Ye.renderInstances(je,Ct,Ot)}else Ye.render(je,Ct)};function Je(E,U,B){E.transparent===!0&&E.side===Ei&&E.forceSinglePass===!1?(E.side=dn,E.needsUpdate=!0,nl(E,U,B),E.side=Mr,E.needsUpdate=!0,nl(E,U,B),E.side=Ei):nl(E,U,B)}this.compile=function(E,U,B=null){B===null&&(B=E),d=We.get(B),d.init(U),_.push(d),B.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),E!==B&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const V=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ie=F.material;if(ie)if(Array.isArray(ie))for(let ce=0;ce<ie.length;ce++){const ge=ie[ce];Je(ge,B,F),V.add(ge)}else Je(ie,B,F),V.add(ie)}),d=_.pop(),V},this.compileAsync=function(E,U,B=null){const V=this.compile(E,U,B);return new Promise(F=>{function ie(){if(V.forEach(function(ce){Ee.get(ce).currentProgram.isReady()&&V.delete(ce)}),V.size===0){F(E);return}setTimeout(ie,10)}ze.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Vn=null;function pi(E){Vn&&Vn(E)}function Pm(){br.stop()}function Dm(){br.start()}const br=new $M;br.setAnimationLoop(pi),typeof self<"u"&&br.setContext(self),this.setAnimationLoop=function(E){Vn=E,G.setAnimationLoop(E),E===null?br.stop():br.start()},G.addEventListener("sessionstart",Pm),G.addEventListener("sessionend",Dm),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,U,b),d=We.get(E,_.length),d.init(U),_.push(d),Re.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(Re),pe=this.localClippingEnabled,se=re.init(this.clippingPlanes,pe),m=ve.get(E,v.length),m.init(),v.push(m),G.enabled===!0&&G.isPresenting===!0){const ie=y.xr.getDepthSensingMesh();ie!==null&&Ec(ie,U,-1/0,y.sortObjects)}Ec(E,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(X,Z),dt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,dt&&be.addToRenderList(m,E),this.info.render.frame++,se===!0&&re.beginShadows();const B=d.state.shadowsArray;_e.render(B,E,U),se===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,F=m.transmissive;if(d.setupLights(),U.isArrayCamera){const ie=U.cameras;if(F.length>0)for(let ce=0,ge=ie.length;ce<ge;ce++){const ye=ie[ce];Nm(V,F,E,ye)}dt&&be.render(E);for(let ce=0,ge=ie.length;ce<ge;ce++){const ye=ie[ce];Lm(m,E,ye,ye.viewport)}}else F.length>0&&Nm(V,F,E,U),dt&&be.render(E),Lm(m,E,U);b!==null&&A===0&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(y,E,U),rt.resetDefaultState(),T=-1,S=null,_.pop(),_.length>0?(d=_[_.length-1],se===!0&&re.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ec(E,U,B,V){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){V&&Pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Re);const ce=q.update(E),ge=E.material;ge.visible&&m.push(E,ce,ge,B,Pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const ce=q.update(E),ge=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pe.copy(E.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Pe.copy(ce.boundingSphere.center)),Pe.applyMatrix4(E.matrixWorld).applyMatrix4(Re)),Array.isArray(ge)){const ye=ce.groups;for(let Le=0,Ne=ye.length;Le<Ne;Le++){const we=ye[Le],je=ge[we.materialIndex];je&&je.visible&&m.push(E,ce,je,B,Pe.z,we)}}else ge.visible&&m.push(E,ce,ge,B,Pe.z,null)}}const ie=E.children;for(let ce=0,ge=ie.length;ce<ge;ce++)Ec(ie[ce],U,B,V)}function Lm(E,U,B,V){const F=E.opaque,ie=E.transmissive,ce=E.transparent;d.setupLightsView(B),se===!0&&re.setGlobalState(y.clippingPlanes,B),V&&Te.viewport(P.copy(V)),F.length>0&&tl(F,U,B),ie.length>0&&tl(ie,U,B),ce.length>0&&tl(ce,U,B),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Nm(E,U,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new ls(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?qa:zi,minFilter:Qr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const ie=d.state.transmissionRenderTarget[V.id],ce=V.viewport||P;ie.setSize(ce.z*y.transmissionResolutionScale,ce.w*y.transmissionResolutionScale);const ge=y.getRenderTarget();y.setRenderTarget(ie),y.getClearColor(K),ee=y.getClearAlpha(),ee<1&&y.setClearColor(16777215,.5),y.clear(),dt&&be.render(B);const ye=y.toneMapping;y.toneMapping=gr;const Le=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),se===!0&&re.setGlobalState(y.clippingPlanes,V),tl(E,B,V),R.updateMultisampleRenderTarget(ie),R.updateRenderTargetMipmap(ie),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let we=0,je=U.length;we<je;we++){const Ze=U[we],Ct=Ze.object,xt=Ze.geometry,Ye=Ze.material,Ae=Ze.group;if(Ye.side===Ei&&Ct.layers.test(V.layers)){const Ot=Ye.side;Ye.side=dn,Ye.needsUpdate=!0,Im(Ct,B,V,xt,Ye,Ae),Ye.side=Ot,Ye.needsUpdate=!0,Ne=!0}}Ne===!0&&(R.updateMultisampleRenderTarget(ie),R.updateRenderTargetMipmap(ie))}y.setRenderTarget(ge),y.setClearColor(K,ee),Le!==void 0&&(V.viewport=Le),y.toneMapping=ye}function tl(E,U,B){const V=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ie=E.length;F<ie;F++){const ce=E[F],ge=ce.object,ye=ce.geometry,Le=V===null?ce.material:V,Ne=ce.group;ge.layers.test(B.layers)&&Im(ge,U,B,ye,Le,Ne)}}function Im(E,U,B,V,F,ie){E.onBeforeRender(y,U,B,V,F,ie),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(y,U,B,V,E,ie),F.transparent===!0&&F.side===Ei&&F.forceSinglePass===!1?(F.side=dn,F.needsUpdate=!0,y.renderBufferDirect(B,U,V,F,E,ie),F.side=Mr,F.needsUpdate=!0,y.renderBufferDirect(B,U,V,F,E,ie),F.side=Ei):y.renderBufferDirect(B,U,V,F,E,ie),E.onAfterRender(y,U,B,V,F,ie)}function nl(E,U,B){U.isScene!==!0&&(U=Mt);const V=Ee.get(E),F=d.state.lights,ie=d.state.shadowsArray,ce=F.state.version,ge=Me.getParameters(E,F.state,ie,U,B),ye=Me.getProgramCacheKey(ge);let Le=V.programs;V.environment=E.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(E.isMeshStandardMaterial?k:M).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Le===void 0&&(E.addEventListener("dispose",Ie),Le=new Map,V.programs=Le);let Ne=Le.get(ye);if(Ne!==void 0){if(V.currentProgram===Ne&&V.lightsStateVersion===ce)return Fm(E,ge),Ne}else ge.uniforms=Me.getUniforms(E),E.onBeforeCompile(ge,y),Ne=Me.acquireProgram(ge,ye),Le.set(ye,Ne),V.uniforms=ge.uniforms;const we=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(we.clippingPlanes=re.uniform),Fm(E,ge),V.needsLights=eE(E),V.lightsStateVersion=ce,V.needsLights&&(we.ambientLightColor.value=F.state.ambient,we.lightProbe.value=F.state.probe,we.directionalLights.value=F.state.directional,we.directionalLightShadows.value=F.state.directionalShadow,we.spotLights.value=F.state.spot,we.spotLightShadows.value=F.state.spotShadow,we.rectAreaLights.value=F.state.rectArea,we.ltc_1.value=F.state.rectAreaLTC1,we.ltc_2.value=F.state.rectAreaLTC2,we.pointLights.value=F.state.point,we.pointLightShadows.value=F.state.pointShadow,we.hemisphereLights.value=F.state.hemi,we.directionalShadowMap.value=F.state.directionalShadowMap,we.directionalShadowMatrix.value=F.state.directionalShadowMatrix,we.spotShadowMap.value=F.state.spotShadowMap,we.spotLightMatrix.value=F.state.spotLightMatrix,we.spotLightMap.value=F.state.spotLightMap,we.pointShadowMap.value=F.state.pointShadowMap,we.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Ne,V.uniformsList=null,Ne}function Um(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=gu.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Fm(E,U){const B=Ee.get(E);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function QM(E,U,B,V,F){U.isScene!==!0&&(U=Mt),R.resetTextureUnits();const ie=U.fog,ce=V.isMeshStandardMaterial?U.environment:null,ge=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:vo,ye=(V.isMeshStandardMaterial?k:M).get(V.envMap||ce),Le=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ne=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),we=!!B.morphAttributes.position,je=!!B.morphAttributes.normal,Ze=!!B.morphAttributes.color;let Ct=gr;V.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ct=y.toneMapping);const xt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ye=xt!==void 0?xt.length:0,Ae=Ee.get(V),Ot=d.state.lights;if(se===!0&&(pe===!0||E!==S)){const Zt=E===S&&V.id===T;re.setState(V,E,Zt)}let Qe=!1;V.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Ot.state.version||Ae.outputColorSpace!==ge||F.isBatchedMesh&&Ae.batching===!1||!F.isBatchedMesh&&Ae.batching===!0||F.isBatchedMesh&&Ae.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ae.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ae.instancing===!1||!F.isInstancedMesh&&Ae.instancing===!0||F.isSkinnedMesh&&Ae.skinning===!1||!F.isSkinnedMesh&&Ae.skinning===!0||F.isInstancedMesh&&Ae.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ae.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ae.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ae.instancingMorph===!1&&F.morphTexture!==null||Ae.envMap!==ye||V.fog===!0&&Ae.fog!==ie||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==re.numPlanes||Ae.numIntersection!==re.numIntersection)||Ae.vertexAlphas!==Le||Ae.vertexTangents!==Ne||Ae.morphTargets!==we||Ae.morphNormals!==je||Ae.morphColors!==Ze||Ae.toneMapping!==Ct||Ae.morphTargetsCount!==Ye)&&(Qe=!0):(Qe=!0,Ae.__version=V.version);let zn=Ae.currentProgram;Qe===!0&&(zn=nl(V,U,F));let ds=!1,mn=!1,Ro=!1;const ct=zn.getUniforms(),An=Ae.uniforms;if(Te.useProgram(zn.program)&&(ds=!0,mn=!0,Ro=!0),V.id!==T&&(T=V.id,mn=!0),ds||S!==E){Te.buffers.depth.getReversed()?(oe.copy(E.projectionMatrix),DD(oe),LD(oe),ct.setValue(D,"projectionMatrix",oe)):ct.setValue(D,"projectionMatrix",E.projectionMatrix),ct.setValue(D,"viewMatrix",E.matrixWorldInverse);const sn=ct.map.cameraPosition;sn!==void 0&&sn.setValue(D,Ke.setFromMatrixPosition(E.matrixWorld)),He.logarithmicDepthBuffer&&ct.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ct.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,mn=!0,Ro=!0)}if(F.isSkinnedMesh){ct.setOptional(D,F,"bindMatrix"),ct.setOptional(D,F,"bindMatrixInverse");const Zt=F.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),ct.setValue(D,"boneTexture",Zt.boneTexture,R))}F.isBatchedMesh&&(ct.setOptional(D,F,"batchingTexture"),ct.setValue(D,"batchingTexture",F._matricesTexture,R),ct.setOptional(D,F,"batchingIdTexture"),ct.setValue(D,"batchingIdTexture",F._indirectTexture,R),ct.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&ct.setValue(D,"batchingColorTexture",F._colorsTexture,R));const Cn=B.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&De.update(F,B,zn),(mn||Ae.receiveShadow!==F.receiveShadow)&&(Ae.receiveShadow=F.receiveShadow,ct.setValue(D,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(An.envMap.value=ye,An.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(An.envMapIntensity.value=U.environmentIntensity),mn&&(ct.setValue(D,"toneMappingExposure",y.toneMappingExposure),Ae.needsLights&&JM(An,Ro),ie&&V.fog===!0&&fe.refreshFogUniforms(An,ie),fe.refreshMaterialUniforms(An,V,L,$,d.state.transmissionRenderTarget[E.id]),gu.upload(D,Um(Ae),An,R)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(gu.upload(D,Um(Ae),An,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ct.setValue(D,"center",F.center),ct.setValue(D,"modelViewMatrix",F.modelViewMatrix),ct.setValue(D,"normalMatrix",F.normalMatrix),ct.setValue(D,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Zt=V.uniformsGroups;for(let sn=0,Tc=Zt.length;sn<Tc;sn++){const Pr=Zt[sn];I.update(Pr,zn),I.bind(Pr,zn)}}return zn}function JM(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function eE(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,U,B){Ee.get(E.texture).__webglTexture=U,Ee.get(E.depthTexture).__webglTexture=B;const V=Ee.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const B=Ee.get(E);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const tE=D.createFramebuffer();this.setRenderTarget=function(E,U=0,B=0){b=E,C=U,A=B;let V=!0,F=null,ie=!1,ce=!1;if(E){const ye=Ee.get(E);if(ye.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(ye.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(ye.__hasExternalTextures)R.rebindTextures(E,Ee.get(E.texture).__webglTexture,Ee.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const we=E.depthTexture;if(ye.__boundDepthTexture!==we){if(we!==null&&Ee.has(we)&&(E.width!==we.image.width||E.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Le=E.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ce=!0);const Ne=Ee.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?F=Ne[U][B]:F=Ne[U],ie=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?F=Ee.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?F=Ne[B]:F=Ne,P.copy(E.viewport),W.copy(E.scissor),H=E.scissorTest}else P.copy(ae).multiplyScalar(L).floor(),W.copy(Se).multiplyScalar(L).floor(),H=$e;if(B!==0&&(F=tE),Te.bindFramebuffer(D.FRAMEBUFFER,F)&&V&&Te.drawBuffers(E,F),Te.viewport(P),Te.scissor(W),Te.setScissorTest(H),ie){const ye=Ee.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,B)}else if(ce){const ye=Ee.get(E.texture),Le=U;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.__webglTexture,B,Le)}else if(E!==null&&B!==0){const ye=Ee.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ye.__webglTexture,B)}T=-1},this.readRenderTargetPixels=function(E,U,B,V,F,ie,ce){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ce!==void 0&&(ge=ge[ce]),ge){Te.bindFramebuffer(D.FRAMEBUFFER,ge);try{const ye=E.texture,Le=ye.format,Ne=ye.type;if(!He.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-V&&B>=0&&B<=E.height-F&&D.readPixels(U,B,V,F,Fe.convert(Le),Fe.convert(Ne),ie)}finally{const ye=b!==null?Ee.get(b).__webglFramebuffer:null;Te.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(E,U,B,V,F,ie,ce){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ce!==void 0&&(ge=ge[ce]),ge){const ye=E.texture,Le=ye.format,Ne=ye.type;if(!He.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-V&&B>=0&&B<=E.height-F){Te.bindFramebuffer(D.FRAMEBUFFER,ge);const we=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.bufferData(D.PIXEL_PACK_BUFFER,ie.byteLength,D.STREAM_READ),D.readPixels(U,B,V,F,Fe.convert(Le),Fe.convert(Ne),0);const je=b!==null?Ee.get(b).__webglFramebuffer:null;Te.bindFramebuffer(D.FRAMEBUFFER,je);const Ze=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await PD(D,Ze,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ie),D.deleteBuffer(we),D.deleteSync(Ze),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,B=0){E.isTexture!==!0&&(zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const V=Math.pow(2,-B),F=Math.floor(E.image.width*V),ie=Math.floor(E.image.height*V),ce=U!==null?U.x:0,ge=U!==null?U.y:0;R.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,ce,ge,F,ie),Te.unbindTexture()};const nE=D.createFramebuffer(),iE=D.createFramebuffer();this.copyTextureToTexture=function(E,U,B=null,V=null,F=0,ie=null){E.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],U=arguments[2],ie=arguments[3]||0,B=null),ie===null&&(F!==0?(zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=F,F=0):ie=0);let ce,ge,ye,Le,Ne,we,je,Ze,Ct;const xt=E.isCompressedTexture?E.mipmaps[ie]:E.image;if(B!==null)ce=B.max.x-B.min.x,ge=B.max.y-B.min.y,ye=B.isBox3?B.max.z-B.min.z:1,Le=B.min.x,Ne=B.min.y,we=B.isBox3?B.min.z:0;else{const Cn=Math.pow(2,-F);ce=Math.floor(xt.width*Cn),ge=Math.floor(xt.height*Cn),E.isDataArrayTexture?ye=xt.depth:E.isData3DTexture?ye=Math.floor(xt.depth*Cn):ye=1,Le=0,Ne=0,we=0}V!==null?(je=V.x,Ze=V.y,Ct=V.z):(je=0,Ze=0,Ct=0);const Ye=Fe.convert(U.format),Ae=Fe.convert(U.type);let Ot;U.isData3DTexture?(R.setTexture3D(U,0),Ot=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),Ot=D.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),Ot=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Qe=D.getParameter(D.UNPACK_ROW_LENGTH),zn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ds=D.getParameter(D.UNPACK_SKIP_PIXELS),mn=D.getParameter(D.UNPACK_SKIP_ROWS),Ro=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,xt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Le),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),D.pixelStorei(D.UNPACK_SKIP_IMAGES,we);const ct=E.isDataArrayTexture||E.isData3DTexture,An=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const Cn=Ee.get(E),Zt=Ee.get(U),sn=Ee.get(Cn.__renderTarget),Tc=Ee.get(Zt.__renderTarget);Te.bindFramebuffer(D.READ_FRAMEBUFFER,sn.__webglFramebuffer),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,Tc.__webglFramebuffer);for(let Pr=0;Pr<ye;Pr++)ct&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ee.get(E).__webglTexture,F,we+Pr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ee.get(U).__webglTexture,ie,Ct+Pr)),D.blitFramebuffer(Le,Ne,ce,ge,je,Ze,ce,ge,D.DEPTH_BUFFER_BIT,D.NEAREST);Te.bindFramebuffer(D.READ_FRAMEBUFFER,null),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(F!==0||E.isRenderTargetTexture||Ee.has(E)){const Cn=Ee.get(E),Zt=Ee.get(U);Te.bindFramebuffer(D.READ_FRAMEBUFFER,nE),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,iE);for(let sn=0;sn<ye;sn++)ct?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Cn.__webglTexture,F,we+sn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Cn.__webglTexture,F),An?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Zt.__webglTexture,ie,Ct+sn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Zt.__webglTexture,ie),F!==0?D.blitFramebuffer(Le,Ne,ce,ge,je,Ze,ce,ge,D.COLOR_BUFFER_BIT,D.NEAREST):An?D.copyTexSubImage3D(Ot,ie,je,Ze,Ct+sn,Le,Ne,ce,ge):D.copyTexSubImage2D(Ot,ie,je,Ze,Le,Ne,ce,ge);Te.bindFramebuffer(D.READ_FRAMEBUFFER,null),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else An?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ot,ie,je,Ze,Ct,ce,ge,ye,Ye,Ae,xt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Ot,ie,je,Ze,Ct,ce,ge,ye,Ye,xt.data):D.texSubImage3D(Ot,ie,je,Ze,Ct,ce,ge,ye,Ye,Ae,xt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ie,je,Ze,ce,ge,Ye,Ae,xt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ie,je,Ze,xt.width,xt.height,Ye,xt.data):D.texSubImage2D(D.TEXTURE_2D,ie,je,Ze,ce,ge,Ye,Ae,xt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Qe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,zn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ds),D.pixelStorei(D.UNPACK_SKIP_ROWS,mn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ro),ie===0&&U.generateMipmaps&&D.generateMipmap(Ot),Te.unbindTexture()},this.copyTextureToTexture3D=function(E,U,B=null,V=null,F=0){return E.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,V=arguments[1]||null,E=arguments[2],U=arguments[3],F=arguments[4]||0),zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,B,V,F)},this.initRenderTarget=function(E){Ee.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Te.unbindTexture()},this.resetState=function(){C=0,A=0,b=null,Te.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=qe._getUnpackColorSpace()}}const YU=()=>{const t=O.useRef(null);return O.useEffect(()=>{const e=new iL,n=new Un(75,window.innerWidth/window.innerHeight,.1,1e3),i=new $U({alpha:!0});i.setSize(window.innerWidth,window.innerHeight),t.current.appendChild(i.domElement);const r=new ji,s=new jM({color:16777215,size:.1}),o=[];for(let c=0;c<1e4;c++){const f=(Math.random()-.5)*2e3,h=(Math.random()-.5)*2e3,p=-Math.random()*2e3;o.push(f,h,p)}r.setAttribute("position",new vr(o,3));const a=new oL(r,s);e.add(a),n.position.z=5;const l=()=>{requestAnimationFrame(l),a.rotation.y+=2e-4,a.rotation.z+=1e-4,i.render(e,n)};l();const u=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",u),()=>{var c;window.removeEventListener("resize",u),(c=t.current)==null||c.removeChild(i.domElement)}},[]),N.jsx("div",{ref:t,className:"fixed top-0 left-0 w-full h-full -z-10"})};function qU(){const t={initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6}},e={animate:{transition:{staggerChildren:.2}}};return N.jsxs("div",{className:"relative flex flex-col",children:[N.jsx(YU,{}),N.jsx(bn.section,{initial:"initial",animate:"animate",variants:e,className:"relative text-white pt-20",children:N.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24",children:N.jsxs(bn.div,{className:"text-center",variants:t,children:[N.jsx(bn.h1,{className:"text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600",variants:t,children:"Innovative IT Solutions for Your Business"}),N.jsx(bn.p,{className:"text-xl md:text-2xl mb-8 text-gray-300",variants:t,children:"Transform your business with cutting-edge technology solutions"}),N.jsx(bn.button,{className:"bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Get Started"})]})})}),N.jsx(bn.section,{initial:"initial",whileInView:"animate",viewport:{once:!0},variants:e,className:"py-16 bg-black/50 backdrop-blur-sm",children:N.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[N.jsx(bn.h2,{variants:t,className:"text-3xl font-bold text-center mb-12 text-white",children:"Why Choose Us?"}),N.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[{icon:"🚀",title:"Cutting-edge Technology",description:"We leverage the latest technologies to deliver innovative solutions"},{icon:"👥",title:"Expert Team",description:"Our experienced professionals deliver excellence in every project"},{icon:"🎯",title:"Custom Solutions",description:"Tailored solutions to meet your specific business needs"}].map((n,i)=>N.jsxs(bn.div,{variants:t,className:"text-center p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300",children:[N.jsx("div",{className:"text-4xl mb-4",children:n.icon}),N.jsx("h3",{className:"text-xl font-semibold mb-3 text-white",children:n.title}),N.jsx("p",{className:"text-gray-300",children:n.description})]},i))})]})}),N.jsx(bn.section,{initial:"initial",whileInView:"animate",viewport:{once:!0},variants:e,className:"py-16 bg-black/50 backdrop-blur-sm",children:N.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[N.jsx(bn.h2,{variants:t,className:"text-3xl font-bold mb-6 text-white",children:"Ready to Transform Your Business?"}),N.jsx(bn.p,{variants:t,className:"text-xl text-gray-300 mb-8",children:"Let's discuss how we can help you achieve your technology goals"}),N.jsx(bn.button,{className:"bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Contact Us Today"})]})})]})}function KU(){const t=[{title:"Software Development",description:"Custom software solutions tailored to your business needs, from web applications to mobile apps.",icon:"💻"},{title:"Cloud Solutions",description:"Comprehensive cloud services including migration, optimization, and management.",icon:"☁️"},{title:"IT Consulting",description:"Strategic technology consulting to help your business grow and succeed.",icon:"📊"},{title:"Cybersecurity",description:"Protect your business with our comprehensive security solutions and services.",icon:"🔒"},{title:"Data Analytics",description:"Turn your data into actionable insights with our advanced analytics solutions.",icon:"📈"},{title:"IT Infrastructure",description:"Build and maintain robust IT infrastructure for your organization.",icon:"🏗️"}];return N.jsx("div",{className:"py-16",children:N.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[N.jsxs("div",{className:"text-center mb-16",children:[N.jsx("h1",{className:"text-4xl font-bold mb-6",children:"Our Services"}),N.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"We offer comprehensive IT solutions to help your business thrive in the digital age."})]}),N.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:t.map((e,n)=>N.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow",children:[N.jsx("div",{className:"text-4xl mb-4",children:e.icon}),N.jsx("h3",{className:"text-xl font-semibold mb-4",children:e.title}),N.jsx("p",{className:"text-gray-600",children:e.description})]},n))}),N.jsxs("div",{className:"mt-16 bg-blue-50 rounded-lg p-8 text-center",children:[N.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Need a Custom Solution?"}),N.jsx("p",{className:"text-gray-600 mb-6",children:"We'll work with you to develop the perfect solution for your business needs."}),N.jsx("button",{className:"bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors",children:"Schedule a Consultation"})]})]})})}function ZU(){const t=[{name:"John Smith",role:"CEO & Founder",image:"https://via.placeholder.com/150"},{name:"Sarah Johnson",role:"CTO",image:"https://via.placeholder.com/150"},{name:"Michael Brown",role:"Technical Director",image:"https://via.placeholder.com/150"}];return N.jsx("div",{className:"py-16",children:N.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[N.jsxs("div",{className:"text-center mb-16",children:[N.jsx("h1",{className:"text-4xl font-bold mb-6",children:"About TechCore Solutions"}),N.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"We're a leading IT solutions provider committed to delivering innovative technology services that drive business success."})]}),N.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 mb-16",children:[N.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-lg",children:[N.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Our Mission"}),N.jsx("p",{className:"text-gray-600",children:"To empower businesses through innovative technology solutions and exceptional service, helping them achieve their full potential in the digital age."})]}),N.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-lg",children:[N.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Our Vision"}),N.jsx("p",{className:"text-gray-600",children:"To be the most trusted technology partner for businesses worldwide, known for our expertise, innovation, and commitment to client success."})]})]}),N.jsxs("div",{className:"mb-16",children:[N.jsx("h2",{className:"text-3xl font-bold text-center mb-12",children:"Our Leadership Team"}),N.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:t.map((e,n)=>N.jsxs("div",{className:"text-center",children:[N.jsx("img",{src:e.image,alt:e.name,className:"w-32 h-32 rounded-full mx-auto mb-4"}),N.jsx("h3",{className:"text-xl font-semibold",children:e.name}),N.jsx("p",{className:"text-gray-600",children:e.role})]},n))})]}),N.jsxs("div",{className:"bg-gray-50 p-8 rounded-lg",children:[N.jsx("h2",{className:"text-3xl font-bold text-center mb-8",children:"Our Values"}),N.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[N.jsxs("div",{className:"text-center",children:[N.jsx("div",{className:"text-3xl mb-4",children:"🎯"}),N.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Excellence"}),N.jsx("p",{className:"text-gray-600",children:"We strive for excellence in everything we do"})]}),N.jsxs("div",{className:"text-center",children:[N.jsx("div",{className:"text-3xl mb-4",children:"🤝"}),N.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Integrity"}),N.jsx("p",{className:"text-gray-600",children:"We conduct business with utmost integrity and transparency"})]}),N.jsxs("div",{className:"text-center",children:[N.jsx("div",{className:"text-3xl mb-4",children:"💡"}),N.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Innovation"}),N.jsx("p",{className:"text-gray-600",children:"We continuously innovate to deliver the best solutions"})]})]})]})]})})}function QU(){const[t,e]=O.useState("contact"),[n,i]=O.useState({name:"",email:"",phone:"",company:"",message:"",cv:null}),r=o=>{o.target.type==="file"?i({...n,[o.target.name]:o.target.files[0]}):i({...n,[o.target.name]:o.target.value})},s=o=>{o.preventDefault();let a=`Name: ${n.name}
Email: ${n.email}
Phone: ${n.phone}
Company: ${n.company}
Message: ${n.message}`;n.cv&&(a+=`

Note: CV is attached as a PDF file.`);const l=`mailto:haithem.ben.abdelaziz@gmail.com?subject=${encodeURIComponent(`${t==="cv"?"CV Submission":t==="spontaneous"?"Spontaneous Application":"Contact Form"} from ${n.name}`)}&body=${encodeURIComponent(a)}`;window.location.href=l};return N.jsx("div",{className:"py-16",children:N.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[N.jsxs("div",{className:"flex justify-center space-x-4 mb-8",children:[N.jsx("button",{onClick:()=>e("contact"),className:`px-4 py-2 rounded-lg ${t==="contact"?"bg-blue-600 text-white":"bg-gray-200"}`,children:"Contact Us"}),N.jsx("button",{onClick:()=>e("cv"),className:`px-4 py-2 rounded-lg ${t==="cv"?"bg-blue-600 text-white":"bg-gray-200"}`,children:"Submit CV"}),N.jsx("button",{onClick:()=>e("spontaneous"),className:`px-4 py-2 rounded-lg ${t==="spontaneous"?"bg-blue-600 text-white":"bg-gray-200"}`,children:"Spontaneous Application"})]}),N.jsxs("div",{className:"text-center mb-16",children:[N.jsx("h1",{className:"text-4xl font-bold mb-6",children:"Contact Us"}),N.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Have a question or want to learn more about our services? We're here to help!"})]}),N.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[N.jsx("div",{children:N.jsxs("div",{className:"bg-blue-50 p-8 rounded-lg",children:[N.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Get in Touch"}),N.jsxs("div",{className:"space-y-6",children:[N.jsxs("div",{className:"flex items-start",children:[N.jsx("div",{className:"text-blue-600 mr-4",children:"📍"}),N.jsxs("div",{children:[N.jsx("h3",{className:"font-semibold",children:"Address"}),N.jsx("p",{className:"text-gray-600",children:"123 Tech Street, Silicon Valley, CA 94025"})]})]}),N.jsxs("div",{className:"flex items-start",children:[N.jsx("div",{className:"text-blue-600 mr-4",children:"📧"}),N.jsxs("div",{children:[N.jsx("h3",{className:"font-semibold",children:"Email"}),N.jsx("p",{className:"text-gray-600",children:"haithem.ben.abdelaziz@gmail.com"})]})]}),N.jsxs("div",{className:"flex items-start",children:[N.jsx("div",{className:"text-blue-600 mr-4",children:"📱"}),N.jsxs("div",{children:[N.jsx("h3",{className:"font-semibold",children:"Phone"}),N.jsx("p",{className:"text-gray-600",children:"+1 (555) 123-4567"})]})]})]})]})}),N.jsx("div",{children:N.jsxs("form",{onSubmit:s,className:"space-y-6",children:[N.jsx("h2",{className:"text-2xl font-bold mb-6",children:t==="cv"?"Submit Your CV":t==="spontaneous"?"Spontaneous Application":"Contact Form"}),N.jsxs("div",{children:[N.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Name"}),N.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:r,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",required:!0})]}),N.jsxs("div",{children:[N.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),N.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:r,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",required:!0})]}),N.jsxs("div",{children:[N.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700 mb-1",children:"Phone"}),N.jsx("input",{type:"tel",id:"phone",name:"phone",value:n.phone,onChange:r,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"})]}),N.jsxs("div",{children:[N.jsx("label",{htmlFor:"company",className:"block text-sm font-medium text-gray-700 mb-1",children:"Company"}),N.jsx("input",{type:"text",id:"company",name:"company",value:n.company,onChange:r,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"})]}),N.jsxs("div",{children:[N.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-1",children:"Message"}),N.jsx("textarea",{id:"message",name:"message",value:n.message,onChange:r,rows:"4",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",required:!0})]}),(t==="cv"||t==="spontaneous")&&N.jsxs("div",{children:[N.jsx("label",{htmlFor:"cv",className:"block text-sm font-medium text-gray-700 mb-1",children:"Upload CV (PDF)"}),N.jsx("input",{type:"file",id:"cv",name:"cv",accept:".pdf",onChange:r,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",required:!0})]}),N.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors",children:t==="cv"?"Submit CV":t==="spontaneous"?"Submit Application":"Send Message"})]})})]})]})})}function JU(){return N.jsx(QA,{children:N.jsxs("div",{className:"flex flex-col min-h-screen",children:[N.jsx(l1,{}),N.jsx("main",{className:"flex-grow",children:N.jsxs(bA,{children:[N.jsx(Yo,{path:"/",element:N.jsx(qU,{})}),N.jsx(Yo,{path:"/services",element:N.jsx(KU,{})}),N.jsx(Yo,{path:"/about",element:N.jsx(ZU,{})}),N.jsx(Yo,{path:"/contact",element:N.jsx(QU,{})})]})}),N.jsx(u1,{})]})})}Ay(document.getElementById("root")).render(N.jsx(O.StrictMode,{children:N.jsx(JU,{})}));
