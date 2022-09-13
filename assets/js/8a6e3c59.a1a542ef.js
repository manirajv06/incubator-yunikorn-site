"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5600],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10247:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={id:"core_features",title:"Features",keywords:["feature"]},s=void 0,u={unversionedId:"get_started/core_features",id:"version-0.10.0/get_started/core_features",title:"Features",description:"\x3c!--",source:"@site/versioned_docs/version-0.10.0/get_started/core_features.md",sourceDirName:"get_started",slug:"/get_started/core_features",permalink:"/docs/0.10.0/get_started/core_features",draft:!1,tags:[],version:"0.10.0",frontMatter:{id:"core_features",title:"Features",keywords:["feature"]},sidebar:"version-0.10.0/docs",previous:{title:"Get Started",permalink:"/docs/0.10.0/"},next:{title:"Partition and Queue Configuration",permalink:"/docs/0.10.0/user_guide/queue_config"}},l={},p=[{value:"Gang Scheduling",id:"gang-scheduling",level:2},{value:"Application Tracking API and CRD Phase One",id:"application-tracking-api-and-crd-phase-one",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The main features of YuniKorn include:"),(0,o.kt)("h2",{id:"gang-scheduling"},"Gang Scheduling"),(0,o.kt)("p",null,"In this release, YuniKorn starts to support the Gang Scheduling. Users can apply Gang Scheduling for the applications requiring gang scheduling semantics, such as Spark, Tensorflow, Pytorch, etc. YuniKorn proactively reserves resources for gang scheduling applications, which can work more efficiently with cluster-autoscaler. The initial support has been well tested with Spark, and it can be used with the native Spark on K8s or the Spark K8s operator. For more information how to enable and use Gang Scheduling, please read the doc ",(0,o.kt)("a",{parentName:"p",href:"/docs/user_guide/gang_scheduling"},"here"),"."),(0,o.kt)("h2",{id:"application-tracking-api-and-crd-phase-one"},"Application Tracking API and CRD Phase One"),(0,o.kt)("p",null,"This release introduces an application tracking API and K8s custom resource definition (CRD) to further improve the user experience. The CRD will be used by the app operator/job server to interact with YuniKorn, to provide a better app lifecycle management. The first phase has defined the common protocol messages and CRD object formats."))}f.isMDXComponent=!0}}]);