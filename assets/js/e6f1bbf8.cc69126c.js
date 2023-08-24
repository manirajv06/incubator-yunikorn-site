"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77651],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),h=r,g=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},69729:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],s={id:"gang_scheduling",title:"Gang Scheduling"},l=void 0,u={unversionedId:"user_guide/gang_scheduling",id:"version-0.10.0/user_guide/gang_scheduling",title:"Gang Scheduling",description:"\x3c!--",source:"@site/versioned_docs/version-0.10.0/user_guide/gang_scheduling.md",sourceDirName:"user_guide",slug:"/user_guide/gang_scheduling",permalink:"/docs/0.10.0/user_guide/gang_scheduling",draft:!1,tags:[],version:"0.10.0",frontMatter:{id:"gang_scheduling",title:"Gang Scheduling"},sidebar:"version-0.10.0/docs",previous:{title:"Resource Quota Management",permalink:"/docs/0.10.0/user_guide/resource_quota_management"},next:{title:"Run Spark Jobs",permalink:"/docs/0.10.0/user_guide/workloads/run_spark"}},p={},d=[{value:"What is Gang Scheduling",id:"what-is-gang-scheduling",level:2},{value:"Enable Gang Scheduling",id:"enable-gang-scheduling",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"App Configuration",id:"app-configuration",level:3},{value:"How many task groups needed?",id:"how-many-task-groups-needed",level:4},{value:"How to define task groups?",id:"how-to-define-task-groups",level:4},{value:"Scheduling Policy Parameters",id:"scheduling-policy-parameters",level:4},{value:"Example",id:"example",level:4},{value:"Enable Gang scheduling for Spark jobs",id:"enable-gang-scheduling-for-spark-jobs",level:3},{value:"Verify Configuration",id:"verify-configuration",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:d},h="wrapper";function g(e){var n=e.components,s=(0,r.Z)(e,i);return(0,o.kt)(h,(0,a.Z)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-gang-scheduling"},"What is Gang Scheduling"),(0,o.kt)("p",null,"When Gang Scheduling is enabled, YuniKorn schedules the app only when\nthe app\u2019s minimal resource request can be satisfied. Otherwise, apps\nwill be waiting in the queue. Apps are queued in hierarchy queues,\nwith gang scheduling enabled, each resource queue is assigned with the\nmaximum number of applications running concurrently with min resource guaranteed."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Gang Scheduling",src:t(62090).Z,width:"1186",height:"444"})),(0,o.kt)("h2",{id:"enable-gang-scheduling"},"Enable Gang Scheduling"),(0,o.kt)("p",null,"There is no cluster-wide configuration needed to enable Gang Scheduling.\nThe scheduler actively monitors the metadata of each app, if the app has included\na valid taskGroups definition, it will be considered as gang scheduling desired."),(0,o.kt)("admonition",{title:"Task Group",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"A task group is a \u201cgang\u201d of tasks in an app, these tasks are having the same resource profile\nand the same placement constraints. They are considered as homogeneous requests that can be\ntreated as the same kind in the scheduler.")),(0,o.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"For the queues which runs gang scheduling enabled applications, the queue sorting policy needs to be set either\n",(0,o.kt)("inlineCode",{parentName:"p"},"FIFO")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"StateAware"),". To configure queue sorting policy, please refer to doc: ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.10.0/user_guide/sorting_policies#Application_sorting"},"app sorting policies"),"."),(0,o.kt)("admonition",{title:"Why FIFO based sorting policy?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"When Gang Scheduling is enabled, the scheduler proactively reserves resources\nfor each application. If the queue sorting policy is not FIFO based (StateAware is FIFO based sorting policy),\nthe scheduler might reserve partial resources for each app and causing resource segmentation issues.")),(0,o.kt)("h3",{id:"app-configuration"},"App Configuration"),(0,o.kt)("p",null,"On Kubernetes, YuniKorn discovers apps by loading metadata from individual pod, the first pod of the app\nis required to enclosed with a full copy of app metadata. If the app doesn\u2019t have any notion about the first or second pod,\nthen all pods are required to carry the same taskGroups info. Gang scheduling requires taskGroups definition,\nwhich can be specified via pod annotations. The required fields are:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Annotation"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yunikorn.apache.org/task-group-name"),(0,o.kt)("td",{parentName:"tr",align:null},"Task group name, it must be unique within the application")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yunikorn.apache.org/task-groups"),(0,o.kt)("td",{parentName:"tr",align:null},"A list of task groups, each item contains all the info defined for the certain task group")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yunikorn.apache.org/schedulingPolicyParameters"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. A arbitrary key value pairs to define scheduling policy parameters. Please read ",(0,o.kt)("a",{parentName:"td",href:"#scheduling-policy-parameters"},"schedulingPolicyParameters section"))))),(0,o.kt)("h4",{id:"how-many-task-groups-needed"},"How many task groups needed?"),(0,o.kt)("p",null,"This depends on how many different types of pods this app requests from K8s. A task group is a \u201cgang\u201d of tasks in an app,\nthese tasks are having the same resource profile and the same placement constraints. They are considered as homogeneous\nrequests that can be treated as the same kind in the scheduler. Use Spark as an example, each job will need to have 2 task groups,\none for the driver pod and the other one for the executor pods."),(0,o.kt)("h4",{id:"how-to-define-task-groups"},"How to define task groups?"),(0,o.kt)("p",null,"The task group definition is a copy of the app\u2019s real pod definition, values for fields like resources, node-selector\nand toleration should be the same as the real pods. This is to ensure the scheduler can reserve resources with the\nexact correct pod specification."),(0,o.kt)("h4",{id:"scheduling-policy-parameters"},"Scheduling Policy Parameters"),(0,o.kt)("p",null,"Scheduling policy related configurable parameters. Apply the parameters in the following format in pod's annotation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'annotations:\n   yunikorn.apache.org/schedulingPolicyParameters: "PARAM1=VALUE1 PARAM2=VALUE2 ..."\n')),(0,o.kt)("p",null,"Currently, the following parameters are supported:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"placeholderTimeoutInSeconds")),(0,o.kt)("p",null,"Default value: ",(0,o.kt)("em",{parentName:"p"},"15 minutes"),".\nThis parameter defines the reservation timeout for how long the scheduler should wait until giving up allocating all the placeholders.\nThe timeout timer starts to tick when the scheduler ",(0,o.kt)("em",{parentName:"p"},"allocates the first placeholder pod"),". This ensures if the scheduler\ncould not schedule all the placeholder pods, it will eventually give up after a certain amount of time. So that the resources can be\nfreed up and used by other apps. If non of the placeholders can be allocated, this timeout won't kick-in. To avoid the placeholder\npods stuck forever, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.10.0/user_guide/trouble_shooting#gang-scheduling"},"troubleshooting")," for solutions."),(0,o.kt)("p",null,"More scheduling parameters will added in order to provide more flexibility while scheduling apps."),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("p",null,"The following example is a yaml file for a job. This job launches 2 pods and each pod sleeps 30 seconds.\nThe notable change in the pod spec is ",(0,o.kt)("em",{parentName:"p"},"spec.template.metadata.annotations"),", where we defined ",(0,o.kt)("inlineCode",{parentName:"p"},"yunikorn.apache.org/task-group-name"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"yunikorn.apache.org/task-groups"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: gang-scheduling-job-example\nspec:\n  completions: 2\n  parallelism: 2\n  template:\n    metadata:\n      labels:\n        app: sleep\n        applicationId: "gang-scheduling-job-example"\n        queue: root.sandbox\n      annotations:\n        yunikorn.apache.org/task-group-name: task-group-example\n        yunikorn.apache.org/task-groups: |-\n          [{\n              "name": "task-group-example",\n              "minMember": 2,\n              "minResource": {\n                "cpu": "100m",\n                "memory": "50M"\n              },\n              "nodeSelector": {},\n              "tolerations": []\n          }]\n    spec:\n      schedulerName: yunikorn\n      restartPolicy: Never\n      containers:\n        - name: sleep30\n          image: "alpine:latest"\n          command: ["sleep", "30"]\n          resources:\n            requests:\n              cpu: "100m"\n              memory: "50M"\n')),(0,o.kt)("p",null,"When this job is submitted to Kubernetes, 2 pods will be created using the same template, and they all belong to one taskGroup:\n",(0,o.kt)("em",{parentName:"p"},"\u201ctask-group-example\u201d"),". YuniKorn will create 2 placeholder pods, each uses the resources specified in the taskGroup definition.\nWhen all 2 placeholders are allocated, the scheduler will bind the the real 2 sleep pods using the spot reserved by the placeholders."),(0,o.kt)("p",null,"You can add more than one taskGroups if necessary, each taskGroup is identified by the taskGroup name,\nit is required to map each real pod with a pre-defined taskGroup by setting the taskGroup name. Note,\nthe task group name is only required to be unique within an application."),(0,o.kt)("h3",{id:"enable-gang-scheduling-for-spark-jobs"},"Enable Gang scheduling for Spark jobs"),(0,o.kt)("p",null,"Each Spark job runs 2 types of pods, driver and executor. Hence, we need to define 2 task groups for each job.\nThe annotations for the driver pod looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Annotations:\n  yunikorn.apache.org/schedulingPolicyParameters: \u201cplaceholderTimeoutSeconds=30\u201d\n  yunikorn.apache.org/taskGroupName: \u201cspark-driver\u201d\n  yunikorn.apache.org/taskGroup: \u201c\n    TaskGroups: [\n     {\n       Name: \u201cspark-driver\u201d\n       minMember: 1,\n       minResource: {\n         Cpu: 1,\n         Memory: 2Gi\n       },\n       Node-selector: ...\n       Tolerations: ...\n     },\n      {\n        Name: \u201cspark-executor\u201d,\n        minMember: 10, \n        minResource: {\n          Cpu: 1,\n          Memory: 2Gi\n        }\n      }\n  ]\n  \u201d\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Spark driver and executor pod has memory overhead, that needs to be considered in the taskGroup resources. ")),(0,o.kt)("p",null,"For all the executor pods,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Annotations:\n  # the taskGroup name should match to the names\n  # defined in the taskGroups field\n  yunikorn.apache.org/taskGroupName: \u201cspark-executor\u201d\n")),(0,o.kt)("p",null,"Once the job is submitted to the scheduler, the job won\u2019t be scheduled immediately.\nInstead, the scheduler will ensure it gets its minimal resources before actually starting the driver/executors. "),(0,o.kt)("h2",{id:"verify-configuration"},"Verify Configuration"),(0,o.kt)("p",null,"To verify if the configuration has been done completely and correctly, check the following things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When an app is submitted, verify the expected number of placeholders are created by the scheduler.\nIf you define 2 task groups, 1 with minMember 1 and the other with minMember 5, that means we are expecting 6 placeholder\ngets created once the job is submitted."),(0,o.kt)("li",{parentName:"ol"},"Verify the placeholder spec is correct. Each placeholder needs to have the same info as the real pod in the same taskGroup.\nCheck field including: namespace, pod resources, node-selector, and toleration."),(0,o.kt)("li",{parentName:"ol"},"Verify the placeholders can be allocated on correct type of nodes, and verify the real pods are started by replacing the placeholder pods.")),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"Please see the troubleshooting doc when gang scheduling is enabled ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.10.0/user_guide/trouble_shooting#gang-scheduling"},"here"),"."))}g.isMDXComponent=!0},62090:function(e,n,t){n.Z=t.p+"assets/images/gang_scheduling_iintro-7f458cff1f69a386818aedfbc0443a34.png"}}]);