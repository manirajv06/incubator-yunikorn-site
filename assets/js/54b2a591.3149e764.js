"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77871],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},98216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={id:"trouble_shooting",title:"Trouble Shooting"},l=void 0,i={unversionedId:"user_guide/trouble_shooting",id:"version-0.10.0/user_guide/trouble_shooting",title:"Trouble Shooting",description:"\x3c!--",source:"@site/versioned_docs/version-0.10.0/user_guide/trouble_shooting.md",sourceDirName:"user_guide",slug:"/user_guide/trouble_shooting",permalink:"/docs/0.10.0/user_guide/trouble_shooting",draft:!1,tags:[],version:"0.10.0",frontMatter:{id:"trouble_shooting",title:"Trouble Shooting"},sidebar:"version-0.10.0/docs",previous:{title:"System",permalink:"/docs/0.10.0/api/system"},next:{title:"Dev Environment Setup",permalink:"/docs/0.10.0/developer_guide/env_setup"}},s={},c=[{value:"Scheduler logs",id:"scheduler-logs",level:2},{value:"Retrieve scheduler logs",id:"retrieve-scheduler-logs",level:3},{value:"Set Logging Level",id:"set-logging-level",level:3},{value:"Pods are stuck at Pending state",id:"pods-are-stuck-at-pending-state",level:2},{value:"1. Non of the nodes satisfy pod placement requirement",id:"1-non-of-the-nodes-satisfy-pod-placement-requirement",level:3},{value:"2. The queue is running out of capacity",id:"2-the-queue-is-running-out-of-capacity",level:3},{value:"Restart the scheduler",id:"restart-the-scheduler",level:2},{value:"Gang Scheduling",id:"gang-scheduling",level:2},{value:"1. No placeholders created, app&#39;s pods are pending",id:"1-no-placeholders-created-apps-pods-are-pending",level:3},{value:"2. Not all placeholders can be allocated",id:"2-not-all-placeholders-can-be-allocated",level:3},{value:"3. Not all placeholders are swapped",id:"3-not-all-placeholders-are-swapped",level:3},{value:"4.Placeholders are not cleaned up when the app terminated",id:"4placeholders-are-not-cleaned-up-when-the-app-terminated",level:3},{value:"Still got questions?",id:"still-got-questions",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"scheduler-logs"},"Scheduler logs"),(0,r.kt)("h3",{id:"retrieve-scheduler-logs"},"Retrieve scheduler logs"),(0,r.kt)("p",null,"Currently, the scheduler writes its logs to stdout/stderr, docker container handles the redirection of these logs to a\nlocal location on the underneath node, you can read more document ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/containers/logging/configure/"},"here"),".\nThese logs can be retrieved by ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#logs"},"kubectl logs"),". Such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"// get the scheduler pod\nkubectl get pod -l component=yunikorn-scheduler -n yunikorn\nNAME                                  READY   STATUS    RESTARTS   AGE\nyunikorn-scheduler-766d7d6cdd-44b82   2/2     Running   0          33h\n\n// retrieve logs\nkubectl logs yunikorn-scheduler-766d7d6cdd-44b82 yunikorn-scheduler-k8s -n yunikorn\n")),(0,r.kt)("p",null,"In most cases, this command cannot get all logs because the scheduler is rolling logs very fast. To retrieve more logs in\nthe past, you will need to setup the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/logging/#cluster-level-logging-architectures"},"cluster level logging"),".\nThe recommended setup is to leverage ",(0,r.kt)("a",{parentName:"p",href:"https://www.fluentd.org/"},"fluentd")," to collect and persistent logs on an external storage, e.g s3. "),(0,r.kt)("h3",{id:"set-logging-level"},"Set Logging Level"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Changing the logging level requires a restart of the scheduler pod.")),(0,r.kt)("p",null,"Stop the scheduler:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl scale deployment yunikorn-scheduler -n yunikorn --replicas=0\n")),(0,r.kt)("p",null,"edit the deployment config in vim:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl edit deployment yunikorn-scheduler -n yunikorn\n")),(0,r.kt)("p",null,"add ",(0,r.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," field of the container template. For example setting ",(0,r.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," sets the logging\nlevel to ",(0,r.kt)("inlineCode",{parentName:"p"},"INFO"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n ...\nspec:\n  template: \n   ...\n    spec:\n      containers:\n      - env:\n        - name: LOG_LEVEL\n          value: '0'\n")),(0,r.kt)("p",null,"Start the scheduler:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl scale deployment yunikorn-scheduler -n yunikorn --replicas=1\n")),(0,r.kt)("p",null,"Available logging levels:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Logging Level"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"DEBUG")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"INFO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"WARN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ERROR")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"DPanic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Panic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Fatal")))),(0,r.kt)("h2",{id:"pods-are-stuck-at-pending-state"},"Pods are stuck at Pending state"),(0,r.kt)("p",null,"If some pods are stuck at Pending state, that means the scheduler could not find a node to allocate the pod. There are\nseveral possibilities to cause this:"),(0,r.kt)("h3",{id:"1-non-of-the-nodes-satisfy-pod-placement-requirement"},"1. Non of the nodes satisfy pod placement requirement"),(0,r.kt)("p",null,"A pod can be configured with some placement constraints, such as ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector"},"node-selector"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity"},"affinity/anti-affinity"),",\ndo not have certain toleration for node ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/"},"taints"),", etc.\nTo debug such issues, you can describe the pod by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl describe pod <pod-name> -n <namespace>\n")),(0,r.kt)("p",null,"the pod events will contain the predicate failures and that explains why nodes are not qualified for allocation."),(0,r.kt)("h3",{id:"2-the-queue-is-running-out-of-capacity"},"2. The queue is running out of capacity"),(0,r.kt)("p",null,"If the queue is running out of capacity, pods will be pending for available queue resources. To check if a queue is still\nhaving enough capacity for the pending pods, there are several approaches:"),(0,r.kt)("p",null,"1) check the queue usage from yunikorn UI"),(0,r.kt)("p",null,"If you do not know how to access the UI, you can refer the document ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.10.0/#access-the-web-ui"},"here"),". Go\nto the ",(0,r.kt)("inlineCode",{parentName:"p"},"Queues")," page, navigate to the queue where this job is submitted to. You will be able to see the available capacity\nleft for the queue."),(0,r.kt)("p",null,"2) check the pod events"),(0,r.kt)("p",null,"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl describe pod")," to get the pod events. If you see some event like:\n",(0,r.kt)("inlineCode",{parentName:"p"},"Application <appID> does not fit into <queuePath> queue"),". That means the pod could not get allocated because the queue\nis running out of capacity."),(0,r.kt)("p",null,"The pod will be allocated if some other pods in this queue is completed or removed. If the pod remains pending even\nthe queue has capacity, that may because it is waiting for the cluster to scale up."),(0,r.kt)("h2",{id:"restart-the-scheduler"},"Restart the scheduler"),(0,r.kt)("p",null,"YuniKorn can recover its state upon a restart. YuniKorn scheduler pod is deployed as a deployment, restart the scheduler\ncan be done by scale down and up the replica:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl scale deployment yunikorn-scheduler -n yunikorn --replicas=0\nkubectl scale deployment yunikorn-scheduler -n yunikorn --replicas=1\n")),(0,r.kt)("h2",{id:"gang-scheduling"},"Gang Scheduling"),(0,r.kt)("h3",{id:"1-no-placeholders-created-apps-pods-are-pending"},"1. No placeholders created, app's pods are pending"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Reason"),": This is usually because the app is rejected by the scheduler, therefore non of the pods are scheduled.\nThe common reasons caused the rejection are: 1) The taskGroups definition is invalid. The scheduler does the\nsanity check upon app submission, to ensure all the taskGroups are defined correctly, if these info are malformed,\nthe scheduler rejects the app; 2) The total min resources defined in the taskGroups is bigger than the queues' max\ncapacity, scheduler rejects the app because it won't fit into the queue's capacity. Check the pod event for relevant messages,\nand you will also be able to find more detail error messages from the schedulers' log."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Solution"),": Correct the taskGroups definition and retry submitting the app. "),(0,r.kt)("h3",{id:"2-not-all-placeholders-can-be-allocated"},"2. Not all placeholders can be allocated"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Reason"),": The placeholders also consume resources, if not all of them can be allocated, that usually means either the queue\nor the cluster has no sufficient resources for them. In this case, the placeholders will be cleaned up after a certain\namount of time, defined by the ",(0,r.kt)("inlineCode",{parentName:"p"},"placeholderTimeoutInSeconds")," scheduling policy parameter."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Solution"),": Note, if the placeholder timeout reaches, currently the app will transit to failed state and can not be scheduled\nanymore. You can increase the placeholder timeout value if you are willing to wait for a longer time. In the future, a fallback policy\nmight be added to provide some retry other than failing the app."),(0,r.kt)("h3",{id:"3-not-all-placeholders-are-swapped"},"3. Not all placeholders are swapped"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Reason"),": This usually means the actual app's pods are less than the minMembers defined in the taskGroups."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Solution"),": Check the ",(0,r.kt)("inlineCode",{parentName:"p"},"minMember")," in the taskGroup field and ensure it is correctly set. The ",(0,r.kt)("inlineCode",{parentName:"p"},"minMember")," can be less than\nthe actual pods, setting it to bigger than the actual number of pods is invalid."),(0,r.kt)("h3",{id:"4placeholders-are-not-cleaned-up-when-the-app-terminated"},"4.Placeholders are not cleaned up when the app terminated"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Reason"),": All the placeholders are set an ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/#owners-and-dependents"},"ownerReference"),"\nto the first real pod of the app, or the controller reference. If the placeholder could not be cleaned up, that means\nthe garbage collection is not working properly. "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Solution"),": check the placeholder ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerReference")," and the garbage collector in Kubernetes.    "),(0,r.kt)("h2",{id:"still-got-questions"},"Still got questions?"),(0,r.kt)("p",null,"No problem! The Apache YuniKorn community will be happy to help. You can reach out to the community with the following options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Post your questions to ",(0,r.kt)("a",{parentName:"li",href:"mailto:dev@yunikorn.apache.org"},"dev@yunikorn.apache.org")),(0,r.kt)("li",{parentName:"ol"},"Join the ",(0,r.kt)("a",{parentName:"li",href:"https://join.slack.com/t/yunikornworkspace/shared_invite/enQtNzAzMjY0OTI4MjYzLTBmMDdkYTAwNDMwNTE3NWVjZWE1OTczMWE4NDI2Yzg3MmEyZjUyYTZlMDE5M2U4ZjZhNmYyNGFmYjY4ZGYyMGE"},"YuniKorn slack channel")," and post your questions to the ",(0,r.kt)("inlineCode",{parentName:"li"},"#yunikorn-user")," channel."),(0,r.kt)("li",{parentName:"ol"},"Join the ",(0,r.kt)("a",{parentName:"li",href:"http://yunikorn.apache.org/community/getInvolved#community-meetings"},"community sync up meetings")," and directly talk to the community members.")))}d.isMDXComponent=!0}}]);