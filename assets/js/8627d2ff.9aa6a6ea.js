"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90302],{98814:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var r=n(13274),s=n(1780);const t={id:"priorities",title:"App & Queue Priorities"},o=void 0,d={id:"user_guide/priorities",title:"App & Queue Priorities",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.1/user_guide/priorities.md",sourceDirName:"user_guide",slug:"/user_guide/priorities",permalink:"/docs/user_guide/priorities",draft:!1,unlisted:!1,tags:[],version:"1.5.1",frontMatter:{id:"priorities",title:"App & Queue Priorities"},sidebar:"docs",previous:{title:"Sorting Policies",permalink:"/docs/user_guide/sorting_policies"},next:{title:"Preemption",permalink:"/docs/user_guide/preemption_cases"}},l={},c=[{value:"Request Priority",id:"request-priority",level:2},{value:"Application Priority",id:"application-priority",level:2},{value:"Queue Priority",id:"queue-priority",level:2},{value:"Priority Fencing",id:"priority-fencing",level:2},{value:"Effective Priority",id:"effective-priority",level:2},{value:"Examples",id:"examples",level:2},{value:"Single queue",id:"single-queue",level:3},{value:"Multitenancy",id:"multitenancy",level:3}];function h(e){const i={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"YuniKorn has advanced support for priority scheduling. Priorities are\nspecified on a per-task basis, but how those priorities are used can be\ncustomized for each queue."}),"\n",(0,r.jsx)(i.h2,{id:"request-priority",children:"Request Priority"}),"\n",(0,r.jsx)(i.p,{children:"Every allocation request to the scheduler has a numeric priority associated\nwith it. Any 32-bit integer value (positive or negative) may be used. Larger\nvalues indicate higher relative priorities."}),"\n",(0,r.jsxs)(i.p,{children:["When using Kubernetes, priorities are defined in ",(0,r.jsx)(i.code,{children:"PriorityClass"}),"\nobjects, which are referenced by ",(0,r.jsx)(i.code,{children:"Pod"})," objects via a ",(0,r.jsx)(i.code,{children:"priorityClassName"}),"\nproperty. If no priority class is referenced, a ",(0,r.jsx)(i.code,{children:"Pod"})," inherits the cluster\ndefault priority, typically ",(0,r.jsx)(i.code,{children:"0"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["See the Kubernetes ",(0,r.jsx)(i.a,{href:"https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/",children:"Pod Priority and Preemption"}),"\ndocumentation for more details."]}),"\n",(0,r.jsx)(i.h2,{id:"application-priority",children:"Application Priority"}),"\n",(0,r.jsx)(i.p,{children:"During scheduling, applications have a dynamic priority value which resolves\nto the highest priority outstanding request in that application. This allows\nthe scheduler to dynamically reprioritize scheduling decisions."}),"\n",(0,r.jsxs)(i.p,{children:["For example, if an application has two requests, one with priority ",(0,r.jsx)(i.code,{children:"10"})," and\nanother with priority ",(0,r.jsx)(i.code,{children:"20"}),", the application's dynamic priority will be ",(0,r.jsx)(i.code,{children:"20"}),".\nIf the higher-priority request is satisfied, the application's priority will\ndrop to ",(0,r.jsx)(i.code,{children:"10"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["When choosing between applications to schedule, the application sorting policy\nwill (by default) schedule requests from higher-priority applications first.\nPriority can be ignored when sorting applications by setting the queue\nproperty ",(0,r.jsx)(i.code,{children:"application.sort.priority"})," to ",(0,r.jsx)(i.code,{children:"disabled"})," on a ",(0,r.jsx)(i.em,{children:"leaf"})," queue."]}),"\n",(0,r.jsx)(i.h2,{id:"queue-priority",children:"Queue Priority"}),"\n",(0,r.jsxs)(i.p,{children:["As with applications, queue priorities are also dynamically computed. For\n",(0,r.jsx)(i.em,{children:"parent"})," queues, the queue's priority will be equal to the highest priority\nchild queue it contains. For ",(0,r.jsx)(i.em,{children:"leaf"})," queues, the queue's priority will be\nequal to the highest priority application it contains."]}),"\n",(0,r.jsxs)(i.p,{children:["Queue priorities can also be adjusted automatically up or down by a fixed\namount, specified in the ",(0,r.jsx)(i.code,{children:"priority.offset"})," queue property. This can be useful\nin larger queue hierarchies to establish low or high priority queues."]}),"\n",(0,r.jsxs)(i.p,{children:["For example, if a ",(0,r.jsx)(i.em,{children:"leaf"})," queue with an offset of ",(0,r.jsx)(i.code,{children:"5"})," contains two\napplications, one with priority ",(0,r.jsx)(i.code,{children:"10"})," and another with priority ",(0,r.jsx)(i.code,{children:"20"}),", the\nqueue's priority will evaluate to ",(0,r.jsx)(i.code,{children:"25"})," (",(0,r.jsx)(i.code,{children:"20 + 5"}),"). If the higher-priority\napplication no longer has requests, the queue's priority will drop to ",(0,r.jsx)(i.code,{children:"15"}),"\n(",(0,r.jsx)(i.code,{children:"10 + 5"}),")."]}),"\n",(0,r.jsxs)(i.p,{children:["When choosing between child queues to schedule from, the queue sorting policy\nwill (by default) schedule requests from higher-priority queues first.\nPriority can be ignored when sorting queues by setting the queue\nproperty ",(0,r.jsx)(i.code,{children:"application.sort.priority"})," to ",(0,r.jsx)(i.code,{children:"disabled"})," on a ",(0,r.jsx)(i.em,{children:"parent"})," queue."]}),"\n",(0,r.jsx)(i.h2,{id:"priority-fencing",children:"Priority Fencing"}),"\n",(0,r.jsx)(i.p,{children:"By default, priorities have global scope, meaning that higher-priority queues\nwill be serviced before lower-priority queues regardless of their location\nin the queue hierarchy."}),"\n",(0,r.jsxs)(i.p,{children:["However, it can be useful to limit prioritization to a subset of queues. This\ncan be accomplished by setting the ",(0,r.jsx)(i.code,{children:"priority.policy"})," queue property to\n",(0,r.jsx)(i.code,{children:"fence"}),". When a queue's priority is fenced, priorities are still evaluated\nwithin that queue (and subqueues), but the queue's priority itself will always\nevaluate to the ",(0,r.jsx)(i.code,{children:"priority.offset"})," value or ",(0,r.jsx)(i.code,{children:"0"})," if not specified."]}),"\n",(0,r.jsx)(i.h2,{id:"effective-priority",children:"Effective Priority"}),"\n",(0,r.jsxs)(i.p,{children:["Because of offsets and fencing, at any time a request may be thought of as\nhaving an ",(0,r.jsx)(i.em,{children:"effective"})," (or computed) priority based on its location within\nthe queue hierarchy. Requests with higher effective priorities will be\nscheduled before those with lower effective priorities."]}),"\n",(0,r.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(i.h3,{id:"single-queue",children:"Single queue"}),"\n",(0,r.jsx)(i.p,{children:"This example demonstrates a single leaf queue with all properties specified:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-yaml",children:'partitions:\n  - name: default\n    queues:\n    - name: root\n      queues:\n      - name: default\n        properties:\n          application.sort.policy: fifo\n          application.sort.priority: enabled\n          priority.policy: default\n          priority.offset: "0"\n'})}),"\n",(0,r.jsx)(i.h3,{id:"multitenancy",children:"Multitenancy"}),"\n",(0,r.jsx)(i.p,{children:"This example demonstrates a complex queue tree containing multiple tenants\nwith subqueues along with a multiple system queues:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-yaml",children:'partitions:\n  - name: default\n    queues:\n    - name: root\n      queues:\n      - name: system\n        queues:\n        - name: system-normal\n          properties:\n            priority.offset: "0"\n        - name: system-high\n          properties:\n            priority.offset: "1000"\n        - name: system-low\n          properties:\n            priority.offset: "-1000"\n      - name: tenants\n        properties:\n          priority.policy: "fence"\n        queues:\n          - name: tenant-a\n            properties:\n              priority.policy: "fence"\n              priority.offset: "10"\n            queues:\n              - name: child-a-1\n              - name: child-a-2\n          - name: tenant-b\n            properties:\n              priority.policy: "fence"\n              priority.offset: "0"\n            queues:\n              - name: child-b-1\n              - name: child-b-2\n\n'})}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"system-normal"}),", ",(0,r.jsx)(i.code,{children:"system-high"})," and ",(0,r.jsx)(i.code,{children:"system-low"})," queues are unfenced, and\ncan therefore be prioritized above any other queue in the system. The\n",(0,r.jsx)(i.code,{children:"system-high"})," and ",(0,r.jsx)(i.code,{children:"system-low"})," queues have offsets of ",(0,r.jsx)(i.code,{children:"1000"})," and ",(0,r.jsx)(i.code,{children:"-1000"}),"\nrespectively, so the priority of requests in those queues will be adjusted\naccordingly."]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"tenants"})," ",(0,r.jsx)(i.em,{children:"parent"})," queue is priority-fenced, and has no ",(0,r.jsx)(i.code,{children:"priority.offset"}),"\ndefined, so this queue will always be treated as though it has priority ",(0,r.jsx)(i.code,{children:"0"}),".\nThis ensures that normal and high-priority system tasks schedule ahead of\ntenant tasks, and low priority system tasks schedule after tenant tasks."]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"tenant-a"})," and ",(0,r.jsx)(i.code,{children:"tenant-b"})," ",(0,r.jsx)(i.em,{children:"parent"})," queues are also priority-fenced,\npreventing tenants from adjusting their priority relative to one another.\nThe ",(0,r.jsx)(i.code,{children:"tenant-a"})," queue also has a priority offset to ensure that it always\nschedules before ",(0,r.jsx)(i.code,{children:"tenant-b"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.em,{children:"leaf"})," queues of ",(0,r.jsx)(i.code,{children:"tenant-a"})," and ",(0,r.jsx)(i.code,{children:"tenant-b"})," are not fenced, so tasks from\nthe entire ",(0,r.jsx)(i.code,{children:"tenant-a"})," or ",(0,r.jsx)(i.code,{children:"tenant-b"})," subtree will prioritize relative to each\nother, but not outside their respective subtrees."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"priority tree",src:n(42191).A+"",width:"1281",height:"931"})}),"\n",(0,r.jsx)(i.p,{children:"In the figure above, multiple requests are shown with various priorities.\nBefore scheduling, the queue priorities will be as follows:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["root","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["system: 1001","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"system-normal: 10"}),"\n",(0,r.jsx)(i.li,{children:"system-high: 1001"}),"\n",(0,r.jsx)(i.li,{children:"system-low: -997"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["tenants: 0 (fence)","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["tenant-a: 10 (fence)","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"child-a-1: 8"}),"\n",(0,r.jsx)(i.li,{children:"child-a-2: 6"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["tenant-b: 0 (fence)","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"child-b-1: 9"}),"\n",(0,r.jsx)(i.li,{children:"child-b-2: 8"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Queue traversal starts from the root, descending into each child queue in order\nstarting with the highest effective priority. Assuming sufficient scheduling\nresources, the order of scheduling and effective queue priority changes are\nas follows:"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Step"}),(0,r.jsx)(i.th,{children:"Queue"}),(0,r.jsx)(i.th,{children:"Task"}),(0,r.jsx)(i.th,{children:"Result"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"1"}),(0,r.jsx)(i.td,{children:"root.system.system-high"}),(0,r.jsx)(i.td,{children:"P1"}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.strong,{children:"system-high"}),": ",(0,r.jsx)(i.code,{children:"1001"})," -> n/a ",(0,r.jsx)("br",{})," ",(0,r.jsx)(i.strong,{children:"system"}),": ",(0,r.jsx)(i.code,{children:"1001"})," -> ",(0,r.jsx)(i.code,{children:"10"})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"2"}),(0,r.jsx)(i.td,{children:"root.system.system-normal"}),(0,r.jsx)(i.td,{children:"P10"}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.strong,{children:"system-normal"}),": ",(0,r.jsx)(i.code,{children:"10"})," -> ",(0,r.jsx)(i.code,{children:"2"})," ",(0,r.jsx)("br",{})," ",(0,r.jsx)(i.strong,{children:"system"}),": ",(0,r.jsx)(i.code,{children:"10"})," -> ",(0,r.jsx)(i.code,{children:"2"})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"3"}),(0,r.jsx)(i.td,{children:"root.system.system-normal"}),(0,r.jsx)(i.td,{children:"P2"}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.strong,{children:"system-normal"}),": ",(0,r.jsx)(i.code,{children:"2"})," -> n/a ",(0,r.jsx)("br",{})," ",(0,r.jsx)(i.strong,{children:"system"}),": ",(0,r.jsx)(i.code,{children:"2"})," -> ",(0,r.jsx)(i.code,{children:"-997"})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"4"}),(0,r.jsx)(i.td,{children:"root.tenants.tenant-a.child-a-1"}),(0,r.jsx)(i.td,{children:"P8"}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.strong,{children:"child-a-1"}),": ",(0,r.jsx)(i.code,{children:"8"})," -> ",(0,r.jsx)(i.code,{children:"5"})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"5"}),(0,r.jsx)(i.td,{children:"root.tenants.tenant-a.child-a-2"}),(0,r.jsx)(i.td,{children:"P6"}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.strong,{children:"child-a-2"}),": ",(0,r.jsx)(i.code,{children:"6"})," -> ",(0,r.jsx)(i.code,{children:"4"})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"6"}),(0,r.jsx)(i.td,{children:"root.tenants.tenant-a.child-a-1"}),(0,r.jsx)(i.td,{children:"P5"}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.strong,{children:"child-a-1"}),": ",(0,r.jsx)(i.code,{children:"5"})," -> n/a"]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"7"}),(0,r.jsx)(i.td,{children:"root.tenants.tenant-a.child-a-2"}),(0,r.jsx)(i.td,{children:"P4"}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.strong,{children:"child-a-2"}),": ",(0,r.jsx)(i.code,{children:"4"})," -> n/a ",(0,r.jsx)("br",{})," ",(0,r.jsx)(i.strong,{children:"tenant-a"}),": ",(0,r.jsx)(i.code,{children:"10"})," -> n/a"]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"8"}),(0,r.jsx)(i.td,{children:"root.tenants.tenant-b.child-b-1"}),(0,r.jsx)(i.td,{children:"P9"}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.strong,{children:"child-b-1"}),": ",(0,r.jsx)(i.code,{children:"9"})," -> ",(0,r.jsx)(i.code,{children:"7"})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"9"}),(0,r.jsx)(i.td,{children:"root.tenants.tenant-b.child-b-2"}),(0,r.jsx)(i.td,{children:"P8"}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.strong,{children:"child-b-2"}),": ",(0,r.jsx)(i.code,{children:"8"})," -> n/a"]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"10"}),(0,r.jsx)(i.td,{children:"root.tenants.tenant-b.child-b-1"}),(0,r.jsx)(i.td,{children:"P7"}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.strong,{children:"child-b-1"}),": ",(0,r.jsx)(i.code,{children:"7"})," -> n/a ",(0,r.jsx)("br",{})," ",(0,r.jsx)(i.strong,{children:"tenant-b"}),": ",(0,r.jsx)(i.code,{children:"0"})," -> n/a ",(0,r.jsx)("br",{})," ",(0,r.jsx)(i.strong,{children:"tenants"}),": ",(0,r.jsx)(i.code,{children:"0"})," -> n/a"]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"11"}),(0,r.jsx)(i.td,{children:"root.system.system-low"}),(0,r.jsx)(i.td,{children:"P3"}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.strong,{children:"system-low"}),": ",(0,r.jsx)(i.code,{children:"-997"})," -> n/a ",(0,r.jsx)("br",{})," ",(0,r.jsx)(i.strong,{children:"system"}),": ",(0,r.jsx)(i.code,{children:"-997"})," -> n/a"]})]})]})]})]})}function a(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},42191:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/priority-tree-22c71367f79a99792c40f6c557dfe2b8.png"},1780:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>d});var r=n(79474);const s={},t=r.createContext(s);function o(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);