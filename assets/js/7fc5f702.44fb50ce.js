"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33811],{45468:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var a=i(13274),s=i(1780);const n={id:"state_aware_scheduling",title:"Batch Workloads Ordering with StateAware Policy"},o=void 0,l={id:"design/state_aware_scheduling",title:"Batch Workloads Ordering with StateAware Policy",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.0/design/state_aware_scheduling.md",sourceDirName:"design",slug:"/design/state_aware_scheduling",permalink:"/docs/1.5.0/design/state_aware_scheduling",draft:!1,unlisted:!1,tags:[],version:"1.5.0",frontMatter:{id:"state_aware_scheduling",title:"Batch Workloads Ordering with StateAware Policy"},sidebar:"docs",previous:{title:"Resilience",permalink:"/docs/1.5.0/design/resilience"},next:{title:"Configuration V2",permalink:"/docs/1.5.0/design/config_v2"}},r={},h=[{value:"The problem",id:"the-problem",level:2},{value:"Example issue",id:"example-issue",level:3},{value:"Design",id:"design",level:2},{value:"Design goals",id:"design-goals",level:3},{value:"None goals",id:"none-goals",level:3},{value:"Possible solutions",id:"possible-solutions",level:3},{value:"Algorithm",id:"algorithm",level:3},{value:"Fallback mechanism",id:"fallback-mechanism",level:3},{value:"Example run",id:"example-run",level:3}];function c(e){const t={br:"br",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"the-problem",children:"The problem"}),"\n",(0,a.jsx)(t.p,{children:"A common pattern while processing data is that the application can be divided into multiple stages.\nAnother way to look at this is the fact that processing needs to be kicked off and that the first step is to start a driver or manager for the application.\nLater stages might depend on the previous stages.\nWhen running applications in a size limited environment this could lead to a resource exhaustion when submitting multiple applications at the same time.\nThese first stages might consume all available resources leaving no room for the next stage(s) to start.\nOften this issue is caused by having a high number of applications start simultaneous and trying to get resources in parallel."}),"\n",(0,a.jsx)(t.h3,{id:"example-issue",children:"Example issue"}),"\n",(0,a.jsx)(t.p,{children:"When submitting numerous Spark applications in a short amount of time the drivers will all be started shortly after each other.\nThe drivers consume all available resources in a queue or in the whole cluster.\nAfter starting the drivers they will request resources for the executors.\nSince the queue or cluster has no resources left the executors will not be started.\nThe driver cannot progress.\nThe only way that progress would be made is if and when one of the drivers finishes or fails and frees up resources for executors to be started."}),"\n",(0,a.jsx)(t.h2,{id:"design",children:"Design"}),"\n",(0,a.jsx)(t.h3,{id:"design-goals",children:"Design goals"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Prevent resource exhaustion by first stage allocations"}),"\n",(0,a.jsx)(t.li,{children:"Improve chance for jobs to get minimal required resources over others"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"none-goals",children:"None goals"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"This is NOT an implementation of Gang scheduling."}),"\n",(0,a.jsx)(t.li,{children:"No change to the currently supported FAIR or FIFO scheduling algorithms"}),"\n",(0,a.jsx)(t.li,{children:"Fix resource quota usage outside of the core scheduler for submitted but waiting applications"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"possible-solutions",children:"Possible solutions"}),"\n",(0,a.jsx)(t.p,{children:"Other batch schedulers like the YARN schedulers use a limit on the number of simultaneous running applications.\nThey use either resource constraints on the driver or management stage or set a hard limit of the number of applications that can run in a queue.\nThe draw back of that solution is that it does not work well in a cluster that can scale up or down automatically in a cloud environment.\nTo work around that percentage based limits could be set on the consumed resources for the driver or management stage.\nThis does not alleviate the fact that driver or management stages can be of any size, large and or small, which complicates the percentage scenario further as it does not give a predictable behaviour."}),"\n",(0,a.jsx)(t.p,{children:"A different solution would be to assume a specific behaviour of the applications.\nUsing that assumption a limit on the applications could be set based on the state it is in.\nThe spark driver and executor behaviour is the most usual use case.\nThis would provide a way to limit scheduling to existing applications and only drip feed new applications into the list of applications to schedule when there are resources available."}),"\n",(0,a.jsx)(t.h3,{id:"algorithm",children:"Algorithm"}),"\n",(0,a.jsx)(t.p,{children:"The algorithm described here is based on the drip feed of new applications into the applications to schedule based on the states of all applications.\nScheduling is based on the applications in a queue.\nThe algorithm will be applied at a queue level.\nThis is not a cluster wide setup."}),"\n",(0,a.jsx)(t.p,{children:"What we want to achieve is the following behaviour: only schedule one (1) application that is in its early stage(s) (called a starting state) at the same time.\nOnly consider another new application if and when the previous application has transitioned out of the starting state.\nApplications will always be allocated resources on a first in first out basis based on submission time.\nThat means that an application that is newly added and in its starting phase will only get resources if applications in the later stages do not need any resources."}),"\n",(0,a.jsx)(t.p,{children:"This algorithm will be implemented as an application sorting policy on a queue.\nThis allows specific queues to limit parallel application startup while other queues with different work loads can schedule without or with different limitations."}),"\n",(0,a.jsx)(t.h3,{id:"fallback-mechanism",children:"Fallback mechanism"}),"\n",(0,a.jsx)(t.p,{children:"A fallback mechanism has to be built into the algorithm.\nNot all applications will request more than one allocation.\nThe other case that has to be accounted for could be a misbehaving or a slow application.\nHaving an application stuck in the starting state could cause a scheduler livelock and starvation of other applications."}),"\n",(0,a.jsx)(t.p,{children:"The fall back mechanism proposed is as simple as a time limit on the starting state.\nThis means that any application auto progresses out of the starting state.\nThe time limit will be set to five (5) minutes hard coded as a starting point and will not be made configurable."}),"\n",(0,a.jsx)(t.p,{children:"The other fallback mechanism considered was making the number of allocations for the starting state configurable.\nThis option provided a number of issues which made it difficult to implement.\nOne of the main stumbling blocks is the fact that it requires the application submitter to specify the value.\nIt also does not guarantee that the application will leave the starting state either and does not fix the livelock issue.\nIf an application was submitted with five required allocation but due to issues during the run never asked for more than four then the livelock would still occur."}),"\n",(0,a.jsx)(t.p,{children:"Setting a default of zero (0) would also not work as it would bypass the starting state.\nIt would make the sorting policy an opt-in instead of an opt-out.\nSetting a default of one (1) does not give us much enhancement to what we currently propose.\nIt makes the sorting policy an opt-out but does not give the cluster administrator any control over the scheduling behaviour.\nWeighing those against each other the proposal is to not make this configurable."}),"\n",(0,a.jsx)(t.h3,{id:"example-run",children:"Example run"}),"\n",(0,a.jsx)(t.p,{children:"Using Spark applications as an example: a new application can only be scheduled if the previous application has at least one (1) executor allocated."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"images",src:i(37894).A+"",width:"1344",height:"820"})}),"\n",(0,a.jsx)(t.p,{children:"Assume we have the following Spark apps: App1 & App2 as in the diagram above. The applications were submitted in that order: App1 first, then App2. They were both submitted to the same queue."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Both applications are in the queue waiting for the first allocation: accepted by the scheduler. App1 has requested driver D1 and App2 has requested driver D2."}),"\n",(0,a.jsxs)(t.li,{children:["The scheduler sorts the application and allows 1 accepted application to be scheduled (no starting applications yet): App1 as the oldest applications with an outstanding request is scheduled.",(0,a.jsx)(t.br,{}),"\n","App1 is allocated its driver (D1) and progresses to starting.",(0,a.jsx)(t.br,{}),"\n","App2 request for a driver is ignored as the scheduler is starting App1 (only 1 application in starting or accepted state is scheduled)."]}),"\n",(0,a.jsx)(t.li,{children:"App1 requests executors E11 and E12. The scheduler assigns E11 and E12. At this point the application state changes to running when it has at least 1 executor allocated."}),"\n",(0,a.jsx)(t.li,{children:"App2 has been waiting to get the driver allocated. Since there are no applications in a starting state the scheduler looks at App2 which is in an accepted state. App2 moves from the accepted state to starting when the driver is allocated."}),"\n",(0,a.jsx)(t.li,{children:"App2 requests its executor E21. The application state changes to running when E21 is allocated."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"This process would repeat itself for any new application submitted."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},37894:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/fifo-state-example-294dbf22ea35a750c8ad768c8760929d.png"},1780:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var a=i(79474);const s={},n=a.createContext(s);function o(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);