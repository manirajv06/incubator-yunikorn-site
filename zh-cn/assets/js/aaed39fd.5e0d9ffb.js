"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6783],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32711:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={id:"predicates",title:"Support K8s Predicates"},c=void 0,l={unversionedId:"design/predicates",id:"design/predicates",title:"Support K8s Predicates",description:"\x3c!--",source:"@site/docs/design/predicates.md",sourceDirName:"design",slug:"/design/predicates",permalink:"/zh-cn/docs/next/design/predicates",draft:!1,tags:[],version:"current",frontMatter:{id:"predicates",title:"Support K8s Predicates"},sidebar:"docs",previous:{title:"Resilience",permalink:"/zh-cn/docs/next/design/resilience"},next:{title:"Scheduler Configuration",permalink:"/zh-cn/docs/next/design/scheduler_configuration"}},u={},p=[{value:"Design",id:"design",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Predicates White-list",id:"predicates-white-list",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"design"},"Design"),(0,o.kt)("p",null,"Predicates are a set of pre-registered functions in K8s, the scheduler invokes these functions to check if a pod\nis eligible to be allocated onto a node. Common predicates are: node-selector, pod affinity/anti-affinity etc. To support\nthese predicates in YuniKorn, we don't intend to re-implement everything on our own, but to re-use the core predicates\ncode as much as possible."),(0,o.kt)("p",null,"YuniKorn-core is agnostic about underneath RMs, so the predicates functions are implemented in K8s-shim as a ",(0,o.kt)("inlineCode",{parentName:"p"},"SchedulerPlugin"),".\nSchedulerPlugin is a way to plug/extend scheduler capabilities. Shim can implement such plugin and register itself to\nyunikorn-core, so plugged function can be invoked in the scheduler core. Find all supported plugins in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-core/blob/master/pkg/plugins/types.go"},"types"),"."),(0,o.kt)("h2",{id:"workflow"},"Workflow"),(0,o.kt)("p",null,"First, RM needs to register itself to yunikorn-core, it advertises what scheduler plugin interfaces are supported.\nE.g a RM could implement ",(0,o.kt)("inlineCode",{parentName:"p"},"PredicatePlugin")," interface and register itself to yunikorn-core. Then yunikorn-core will\ncall PredicatePlugin API to run predicates before making allocation decisions."),(0,o.kt)("p",null,"Following workflow demonstrates how allocation looks like when predicates are involved."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pending pods: A, B\nshim sends requests to core, including A, B\ncore starts to schedule A, B\n  partition -> queue -> app -> request\n    schedule A (1)\n      run predicates (3)\n        generate predicates metadata (4)\n        run predicate functions one by one with the metadata\n        success\n        proposal: A->N\n    schedule B (2)\n      run predicates (calling shim API)\n        generate predicates metadata\n        run predicate functions one by one with the metadata\n        success\n        proposal: B->N\ncommit the allocation proposal for A and notify k8s-shim\ncommit the allocation proposal for B and notify k8s-shim\nshim binds pod A to N\nshim binds pod B to N\n")),(0,o.kt)("p",null,"(1) and (2) are running in parallel."),(0,o.kt)("p",null,"(3) yunikorn-core calls a ",(0,o.kt)("inlineCode",{parentName:"p"},"schedulerPlugin")," API to run predicates, this API is implemented on k8s-shim side."),(0,o.kt)("p",null,"(4) K8s-shim generates metadata based on current scheduler cache, the metadata includes some intermittent states about nodes and pods."),(0,o.kt)("h2",{id:"predicates-white-list"},"Predicates White-list"),(0,o.kt)("p",null,"Intentionally, we only support a white-list of predicates. Majorly due to 2 reasons,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Predicate functions are time-consuming, it has negative impact on scheduler performance. To support predicates that are only necessary can minimize the impact. This will be configurable via CLI options;"),(0,o.kt)("li",{parentName:"ul"},"The implementation depends heavily on K8s default scheduler code, though we reused some unit tests, the coverage is still a problem. We'll continue to improve the coverage when adding new predicates.")),(0,o.kt)("p",null,"The white-list currently is defined in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim/blob/master/pkg/plugin/predicates/predicate_manager.go"},"PredicateManager"),"."))}m.isMDXComponent=!0}}]);