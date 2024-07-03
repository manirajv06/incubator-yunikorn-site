"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76635],{51618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=n(13274),r=n(1780);const i={id:"evaluate_perf_function_with_kubemark",title:"Evaluate YuniKorn function & performance with Kubemark",keywords:["performance","throughput"]},o=void 0,c={id:"performance/evaluate_perf_function_with_kubemark",title:"Evaluate YuniKorn function & performance with Kubemark",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.0/performance/evaluate_perf_function_with_kubemark.md",sourceDirName:"performance",slug:"/performance/evaluate_perf_function_with_kubemark",permalink:"/docs/0.9.0/performance/evaluate_perf_function_with_kubemark",draft:!1,unlisted:!1,tags:[],version:"0.9.0",frontMatter:{id:"evaluate_perf_function_with_kubemark",title:"Evaluate YuniKorn function & performance with Kubemark",keywords:["performance","throughput"]},sidebar:"docs",previous:{title:"Scheduler Object States",permalink:"/docs/0.9.0/design/scheduler_object_states"},next:{title:"Scheduler Metrics",permalink:"/docs/0.9.0/performance/metrics"}},a={},l=[{value:"Scheduler Throughput",id:"scheduler-throughput",level:2},{value:"Resource Fairness between queues",id:"resource-fairness-between-queues",level:2},{value:"Node sorting policies",id:"node-sorting-policies",level:2},{value:"FAIR Policy",id:"fair-policy",level:3},{value:"BIN-PACKING",id:"bin-packing",level:3}];function h(e){const t={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["All the following tests are done with ",(0,s.jsx)(t.a,{href:"https://github.com/kubernetes/kubernetes/blob/release-1.3/docs/devel/kubemark-guide.md#starting-a-kubemark-cluster",children:"Kubemark"}),",\na tool helps us to simulate large K8s cluster and run experimental workloads.\nThere were 18 bare-metal servers being used to simulate 2000/4000 nodes for these tests."]}),"\n",(0,s.jsx)(t.h2,{id:"scheduler-throughput",children:"Scheduler Throughput"}),"\n",(0,s.jsx)(t.p,{children:"When running Big Data batch workloads, e.g Spark, on K8s, scheduler throughput becomes to be one of the main concerns.\nIn YuniKorn, we have done lots of optimizations to improve the performance, such as a fully async event-driven system\nand low-latency sorting policies. The following chart reveals the scheduler throughput (by using Kubemark simulated\nenvironment, and submitting 50,000 pods), comparing to the K8s default scheduler."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Scheduler Throughput",src:n(98482).A+"",width:"2056",height:"1158"})}),"\n",(0,s.jsx)(t.p,{children:"The charts record the time spent until all pods are running on the cluster"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"THROUGHPUT (pods/sec)"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"THROUGHPUT (pods/sec)"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ENVIRONMENT (# nodes)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Default Scheduler"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"YuniKorn"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2000"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"263"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"617"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"4000"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"141"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"373"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"resource-fairness-between-queues",children:"Resource Fairness between queues"}),"\n",(0,s.jsx)(t.p,{children:"Each of YuniKorn queues has its guaranteed and maximum capacity. When we have lots of jobs submitted to these queues,\nYuniKorn ensures each of them gets its fair share. When we monitor the resource usage of these queues, we can clearly\nsee how fairness was enforced:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Scheduler Throughput",src:n(61841).A+"",width:"2004",height:"824"})}),"\n",(0,s.jsx)(t.p,{children:"We set up 4 heterogeneous queues on this cluster, and submit different workloads against these queues.\nFrom the chart, we can see the queue resources are increasing nearly in the same trend, which means the resource\nfairness across queues is honored."}),"\n",(0,s.jsx)(t.h2,{id:"node-sorting-policies",children:"Node sorting policies"}),"\n",(0,s.jsxs)(t.p,{children:["There are 2 node sorting policies available in YuniKorn, with regarding the pod distributing flavors. One is ",(0,s.jsx)(t.em,{children:"FAIR"}),",\nwhich tries best to evenly distribute pods to nodes; the other one is ",(0,s.jsx)(t.em,{children:"BIN-PACKING"}),", which tries best to bin pack pods\nto less number of nodes. The former one is suitable for the Data Center scenarios, it helps to balance the stress of\ncluster nodes; the latter one is suitable to be used on Cloud, it can minimize the number of instances when working\nwith auto-scaler, in order to save cost."]}),"\n",(0,s.jsx)(t.h3,{id:"fair-policy",children:"FAIR Policy"}),"\n",(0,s.jsx)(t.p,{children:"We group nodes into 10 buckets, each bucket represents for the number of nodes that has a similar resource\nutilization (a range).  To help you understand the chart, imagine the buckets have the following values at a certain\npoint of time:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"BUCKET"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"RESOURCE UTILIZATION RANGE"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"VALUE"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"bucket-0"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0% - 10%"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"100"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"bucket-1"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"10% - 20%"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"300"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"..."}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"bucket-9"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"90% - 100%"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"This means at the given time, this cluster has 100 nodes whose utilization is in the range 0% to 10%;\nit has 300 nodes whose utilization is in the range 10% - 20%, and so on\u2026 Now, we run lots of workloads and\ncollect metrics, see the below chart:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Node Fairness",src:n(55645).A+"",width:"1652",height:"1492"})}),"\n",(0,s.jsx)(t.p,{children:"We can see all nodes have 0% utilization, and then all of them move to bucket-1, then bucket-2 \u2026 and eventually\nall nodes moved to bucket-9, which means all capacity is used. In another word, nodes\u2019 resource has been used in\na fairness manner."}),"\n",(0,s.jsx)(t.h3,{id:"bin-packing",children:"BIN-PACKING"}),"\n",(0,s.jsx)(t.p,{children:"This is When the bin-packing policy is enabled, we can see the following pattern:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Node Bin-Packing",src:n(8198).A+"",width:"1420",height:"1254"})}),"\n",(0,s.jsx)(t.p,{children:"On the contrary, all nodes are moving between 2 buckets, bucket-0 and bucket-9. Nodes in bucket-0 (0% - 10%)\nare decreasing in a linear manner, and nodes in bucket-9 (90% - 100%) are increasing with the same curve.\nIn other words, node resources are being used up one by one."})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8198:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/node-bin-packing-7d63f9e4a088f0b271580b794ff8c71c.png"},55645:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/node-fair-1fecf15a75eff14ca8371bc927152d84.png"},61841:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/queue-fairness-3a524e14fa54750fdc0d5456852f05f2.png"},98482:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/throughput-5a45b5084a84d880c20179703af1e6b4.png"},1780:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(79474);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);