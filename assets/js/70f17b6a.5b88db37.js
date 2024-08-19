"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96553],{96707:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=i(13274),s=i(1780);const r={id:"predicates",title:"Support K8s Predicates"},o=void 0,a={id:"archived_design/predicates",title:"Support K8s Predicates",description:"\x3c!--",source:"@site/versioned_docs/version-1.3.0/archived_design/predicates.md",sourceDirName:"archived_design",slug:"/archived_design/predicates",permalink:"/docs/1.3.0/archived_design/predicates",draft:!1,unlisted:!1,tags:[],version:"1.3.0",frontMatter:{id:"predicates",title:"Support K8s Predicates"},sidebar:"docs",previous:{title:"Namespace Resource Quota",permalink:"/docs/1.3.0/archived_design/namespace_resource_quota"},next:{title:"Scheduler Core Design",permalink:"/docs/1.3.0/archived_design/scheduler_core_design"}},c={},d=[{value:"Design",id:"design",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Predicates White-list",id:"predicates-white-list",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"design",children:"Design"}),"\n",(0,t.jsx)(n.p,{children:"Predicates are a set of pre-registered functions in K8s, the scheduler invokes these functions to check if a pod\nis eligible to be allocated onto a node. Common predicates are: node-selector, pod affinity/anti-affinity etc. To support\nthese predicates in YuniKorn, we don't intend to re-implement everything on our own, but to re-use the core predicates\ncode as much as possible."}),"\n",(0,t.jsxs)(n.p,{children:["YuniKorn-core is agnostic about underneath RMs, so the predicates functions are implemented in K8s-shim as a ",(0,t.jsx)(n.code,{children:"SchedulerPlugin"}),".\nSchedulerPlugin is a way to plug/extend scheduler capabilities. Shim can implement such plugin and register itself to\nyunikorn-core, so plugged function can be invoked in the scheduler core. Find all supported plugins in\n",(0,t.jsx)(n.a,{href:"https://github.com/apache/yunikorn-core/blob/master/pkg/plugins/types.go",children:"types"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"workflow",children:"Workflow"}),"\n",(0,t.jsxs)(n.p,{children:["First, RM needs to register itself to yunikorn-core, it advertises what scheduler plugin interfaces are supported.\nE.g a RM could implement ",(0,t.jsx)(n.code,{children:"PredicatePlugin"})," interface and register itself to yunikorn-core. Then yunikorn-core will\ncall PredicatePlugin API to run predicates before making allocation decisions."]}),"\n",(0,t.jsx)(n.p,{children:"Following workflow demonstrates how allocation looks like when predicates are involved."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pending pods: A, B\nshim sends requests to core, including A, B\ncore starts to schedule A, B\n  partition -> queue -> app -> request\n    schedule A (1)\n      run predicates (3)\n        generate predicates metadata (4)\n        run predicate functions one by one with the metadata\n        success\n        proposal: A->N\n    schedule B (2)\n      run predicates (calling shim API)\n        generate predicates metadata\n        run predicate functions one by one with the metadata\n        success\n        proposal: B->N\ncommit the allocation proposal for A and notify k8s-shim\ncommit the allocation proposal for B and notify k8s-shim\nshim binds pod A to N\nshim binds pod B to N\n"})}),"\n",(0,t.jsx)(n.p,{children:"(1) and (2) are running in parallel."}),"\n",(0,t.jsxs)(n.p,{children:["(3) yunikorn-core calls a ",(0,t.jsx)(n.code,{children:"schedulerPlugin"})," API to run predicates, this API is implemented on k8s-shim side."]}),"\n",(0,t.jsx)(n.p,{children:"(4) K8s-shim generates metadata based on current scheduler cache, the metadata includes some intermittent states about nodes and pods."}),"\n",(0,t.jsx)(n.h2,{id:"predicates-white-list",children:"Predicates White-list"}),"\n",(0,t.jsx)(n.p,{children:"Intentionally, we only support a white-list of predicates. Majorly due to 2 reasons,"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Predicate functions are time-consuming, it has negative impact on scheduler performance. To support predicates that are only necessary can minimize the impact. This will be configurable via CLI options;"}),"\n",(0,t.jsx)(n.li,{children:"The implementation depends heavily on K8s default scheduler code, though we reused some unit tests, the coverage is still a problem. We'll continue to improve the coverage when adding new predicates."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The white-list currently is defined in ",(0,t.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim/blob/master/pkg/plugin/predicates/predicate_manager.go",children:"PredicateManager"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1780:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(79474);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);