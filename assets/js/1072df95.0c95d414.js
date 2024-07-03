"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36347],{82401:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var a=s(13274),i=s(1780);const t={id:"gang_scheduling",title:"Gang Scheduling"},r=void 0,o={id:"user_guide/gang_scheduling",title:"Gang Scheduling",description:"\x3c!--",source:"@site/versioned_docs/version-0.11.0/user_guide/gang_scheduling.md",sourceDirName:"user_guide",slug:"/user_guide/gang_scheduling",permalink:"/docs/0.11.0/user_guide/gang_scheduling",draft:!1,unlisted:!1,tags:[],version:"0.11.0",frontMatter:{id:"gang_scheduling",title:"Gang Scheduling"},sidebar:"docs",previous:{title:"Resource Quota Management",permalink:"/docs/0.11.0/user_guide/resource_quota_management"},next:{title:"Run Spark Jobs",permalink:"/docs/0.11.0/user_guide/workloads/run_spark"}},l={},d=[{value:"What is Gang Scheduling",id:"what-is-gang-scheduling",level:2},{value:"Enable Gang Scheduling",id:"enable-gang-scheduling",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"App Configuration",id:"app-configuration",level:3},{value:"How many task groups needed?",id:"how-many-task-groups-needed",level:4},{value:"How to define task groups?",id:"how-to-define-task-groups",level:4},{value:"Scheduling Policy Parameters",id:"scheduling-policy-parameters",level:4},{value:"Example",id:"example",level:4},{value:"Enable Gang scheduling for Spark jobs",id:"enable-gang-scheduling-for-spark-jobs",level:3},{value:"Gang scheduling Styles",id:"gang-scheduling-styles",level:2},{value:"Example",id:"example-1",level:4},{value:"Verify Configuration",id:"verify-configuration",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"what-is-gang-scheduling",children:"What is Gang Scheduling"}),"\n",(0,a.jsx)(n.p,{children:"When Gang Scheduling is enabled, YuniKorn schedules the app only when\nthe app\u2019s minimal resource request can be satisfied. Otherwise, apps\nwill be waiting in the queue. Apps are queued in hierarchy queues,\nwith gang scheduling enabled, each resource queue is assigned with the\nmaximum number of applications running concurrently with min resource guaranteed."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Gang Scheduling",src:s(88009).A+"",width:"1186",height:"444"})}),"\n",(0,a.jsx)(n.h2,{id:"enable-gang-scheduling",children:"Enable Gang Scheduling"}),"\n",(0,a.jsx)(n.p,{children:"There is no cluster-wide configuration needed to enable Gang Scheduling.\nThe scheduler actively monitors the metadata of each app, if the app has included\na valid taskGroups definition, it will be considered as gang scheduling desired."}),"\n",(0,a.jsx)(n.admonition,{title:"Task Group",type:"info",children:(0,a.jsx)(n.p,{children:"A task group is a \u201cgang\u201d of tasks in an app, these tasks are having the same resource profile\nand the same placement constraints. They are considered as homogeneous requests that can be\ntreated as the same kind in the scheduler."})}),"\n",(0,a.jsx)(n.h3,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,a.jsxs)(n.p,{children:["For the queues which runs gang scheduling enabled applications, the queue sorting policy needs to be set either\n",(0,a.jsx)(n.code,{children:"FIFO"})," or ",(0,a.jsx)(n.code,{children:"StateAware"}),". To configure queue sorting policy, please refer to doc: ",(0,a.jsx)(n.a,{href:"/docs/0.11.0/user_guide/sorting_policies#Application_sorting",children:"app sorting policies"}),"."]}),"\n",(0,a.jsx)(n.admonition,{title:"Why FIFO based sorting policy?",type:"info",children:(0,a.jsx)(n.p,{children:"When Gang Scheduling is enabled, the scheduler proactively reserves resources\nfor each application. If the queue sorting policy is not FIFO based (StateAware is FIFO based sorting policy),\nthe scheduler might reserve partial resources for each app and causing resource segmentation issues."})}),"\n",(0,a.jsx)(n.h3,{id:"app-configuration",children:"App Configuration"}),"\n",(0,a.jsx)(n.p,{children:"On Kubernetes, YuniKorn discovers apps by loading metadata from individual pod, the first pod of the app\nis required to enclosed with a full copy of app metadata. If the app doesn\u2019t have any notion about the first or second pod,\nthen all pods are required to carry the same taskGroups info. Gang scheduling requires taskGroups definition,\nwhich can be specified via pod annotations. The required fields are:"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Annotation"}),(0,a.jsx)(n.th,{children:"Value"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"yunikorn.apache.org/task-group-name"}),(0,a.jsx)(n.td,{children:"Task group name, it must be unique within the application"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"yunikorn.apache.org/task-groups"}),(0,a.jsx)(n.td,{children:"A list of task groups, each item contains all the info defined for the certain task group"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"yunikorn.apache.org/schedulingPolicyParameters"}),(0,a.jsxs)(n.td,{children:["Optional. A arbitrary key value pairs to define scheduling policy parameters. Please read ",(0,a.jsx)(n.a,{href:"#scheduling-policy-parameters",children:"schedulingPolicyParameters section"})]})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"how-many-task-groups-needed",children:"How many task groups needed?"}),"\n",(0,a.jsx)(n.p,{children:"This depends on how many different types of pods this app requests from K8s. A task group is a \u201cgang\u201d of tasks in an app,\nthese tasks are having the same resource profile and the same placement constraints. They are considered as homogeneous\nrequests that can be treated as the same kind in the scheduler. Use Spark as an example, each job will need to have 2 task groups,\none for the driver pod and the other one for the executor pods."}),"\n",(0,a.jsx)(n.h4,{id:"how-to-define-task-groups",children:"How to define task groups?"}),"\n",(0,a.jsx)(n.p,{children:"The task group definition is a copy of the app\u2019s real pod definition, values for fields like resources, node-selector\nand toleration should be the same as the real pods. This is to ensure the scheduler can reserve resources with the\nexact correct pod specification."}),"\n",(0,a.jsx)(n.h4,{id:"scheduling-policy-parameters",children:"Scheduling Policy Parameters"}),"\n",(0,a.jsx)(n.p,{children:"Scheduling policy related configurable parameters. Apply the parameters in the following format in pod's annotation:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'annotations:\n   yunikorn.apache.org/schedulingPolicyParameters: "PARAM1=VALUE1 PARAM2=VALUE2 ..."\n'})}),"\n",(0,a.jsx)(n.p,{children:"Currently, the following parameters are supported:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"placeholderTimeoutInSeconds"})}),"\n",(0,a.jsxs)(n.p,{children:["Default value: ",(0,a.jsx)(n.em,{children:"15 minutes"}),".\nThis parameter defines the reservation timeout for how long the scheduler should wait until giving up allocating all the placeholders.\nThe timeout timer starts to tick when the scheduler ",(0,a.jsx)(n.em,{children:"allocates the first placeholder pod"}),". This ensures if the scheduler\ncould not schedule all the placeholder pods, it will eventually give up after a certain amount of time. So that the resources can be\nfreed up and used by other apps. If non of the placeholders can be allocated, this timeout won't kick-in. To avoid the placeholder\npods stuck forever, please refer to ",(0,a.jsx)(n.a,{href:"/docs/0.11.0/user_guide/trouble_shooting#gang-scheduling",children:"troubleshooting"})," for solutions."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:" gangSchedulingStyle"})}),"\n",(0,a.jsxs)(n.p,{children:["Valid values: ",(0,a.jsx)(n.em,{children:"Soft"}),", ",(0,a.jsx)(n.em,{children:"Hard"})]}),"\n",(0,a.jsxs)(n.p,{children:["Default value: ",(0,a.jsx)(n.em,{children:"Soft"}),".\nThis parameter defines the fallback mechanism if the app encounters gang issues due to placeholder pod allocation.\nSee more details in ",(0,a.jsx)(n.a,{href:"#gang-scheduling-styles",children:"Gang Scheduling styles"})," section"]}),"\n",(0,a.jsx)(n.p,{children:"More scheduling parameters will added in order to provide more flexibility while scheduling apps."}),"\n",(0,a.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.p,{children:["The following example is a yaml file for a job. This job launches 2 pods and each pod sleeps 30 seconds.\nThe notable change in the pod spec is ",(0,a.jsx)(n.em,{children:"spec.template.metadata.annotations"}),", where we defined ",(0,a.jsx)(n.code,{children:"yunikorn.apache.org/task-group-name"}),"\nand ",(0,a.jsx)(n.code,{children:"yunikorn.apache.org/task-groups"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: gang-scheduling-job-example\nspec:\n  completions: 2\n  parallelism: 2\n  template:\n    metadata:\n      labels:\n        app: sleep\n        applicationId: "gang-scheduling-job-example"\n        queue: root.sandbox\n      annotations:\n        yunikorn.apache.org/task-group-name: task-group-example\n        yunikorn.apache.org/task-groups: |-\n          [{\n              "name": "task-group-example",\n              "minMember": 2,\n              "minResource": {\n                "cpu": "100m",\n                "memory": "50M"\n              },\n              "nodeSelector": {},\n              "tolerations": []\n          }]\n    spec:\n      schedulerName: yunikorn\n      restartPolicy: Never\n      containers:\n        - name: sleep30\n          image: "alpine:latest"\n          command: ["sleep", "30"]\n          resources:\n            requests:\n              cpu: "100m"\n              memory: "50M"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["When this job is submitted to Kubernetes, 2 pods will be created using the same template, and they all belong to one taskGroup:\n",(0,a.jsx)(n.em,{children:"\u201ctask-group-example\u201d"}),". YuniKorn will create 2 placeholder pods, each uses the resources specified in the taskGroup definition.\nWhen all 2 placeholders are allocated, the scheduler will bind the the real 2 sleep pods using the spot reserved by the placeholders."]}),"\n",(0,a.jsx)(n.p,{children:"You can add more than one taskGroups if necessary, each taskGroup is identified by the taskGroup name,\nit is required to map each real pod with a pre-defined taskGroup by setting the taskGroup name. Note,\nthe task group name is only required to be unique within an application."}),"\n",(0,a.jsx)(n.h3,{id:"enable-gang-scheduling-for-spark-jobs",children:"Enable Gang scheduling for Spark jobs"}),"\n",(0,a.jsx)(n.p,{children:"Each Spark job runs 2 types of pods, driver and executor. Hence, we need to define 2 task groups for each job.\nThe annotations for the driver pod looks like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Annotations:\n  yunikorn.apache.org/schedulingPolicyParameters: \u201cplaceholderTimeoutSeconds=30\u201d\n  yunikorn.apache.org/taskGroupName: \u201cspark-driver\u201d\n  yunikorn.apache.org/taskGroup: \u201c\n    TaskGroups: [\n     {\n       Name: \u201cspark-driver\u201d\n       minMember: 1,\n       minResource: {\n         Cpu: 1,\n         Memory: 2Gi\n       },\n       Node-selector: ...\n       Tolerations: ...\n     },\n      {\n        Name: \u201cspark-executor\u201d,\n        minMember: 10, \n        minResource: {\n          Cpu: 1,\n          Memory: 2Gi\n        }\n      }\n  ]\n  \u201d\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Spark driver and executor pod has memory overhead, that needs to be considered in the taskGroup resources."})}),"\n",(0,a.jsx)(n.p,{children:"For all the executor pods,"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Annotations:\n  # the taskGroup name should match to the names\n  # defined in the taskGroups field\n  yunikorn.apache.org/taskGroupName: \u201cspark-executor\u201d\n"})}),"\n",(0,a.jsx)(n.p,{children:"Once the job is submitted to the scheduler, the job won\u2019t be scheduled immediately.\nInstead, the scheduler will ensure it gets its minimal resources before actually starting the driver/executors."}),"\n",(0,a.jsx)(n.h2,{id:"gang-scheduling-styles",children:"Gang scheduling Styles"}),"\n",(0,a.jsx)(n.p,{children:"There are 2 gang scheduling styles supported, Soft and Hard respectively. It can be configured per app-level to define how the app will behave in case the gang scheduling fails."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Hard style"}),": when this style is used, we will have the initial behavior, more precisely if the application cannot be scheduled according to gang scheduling rules, and it times out, it will be marked as failed, without retrying to schedule it."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Soft style"}),": when the app cannot be gang scheduled, it will fall back to the normal scheduling, and the non-gang scheduling strategy will be used to achieve the best-effort scheduling. When this happens, the app transits to the Resuming state and all the remaining placeholder pods will be cleaned up."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Default style used"}),": ",(0,a.jsx)(n.code,{children:"Soft"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Enable a specific style"}),": the style can be changed by setting in the application definition the \u2018gangSchedulingStyle\u2019 parameter to Soft or Hard."]}),"\n",(0,a.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: gang-app-timeout\nspec:\n  completions: 4\n  parallelism: 4\n  template:\n    metadata:\n      labels:\n        app: sleep\n        applicationId: gang-app-timeout\n        queue: fifo\n      annotations:\n        yunikorn.apache.org/task-group-name: sched-style\n        yunikorn.apache.org/schedulingPolicyParameters: "placeholderTimeoutInSeconds=60 gangSchedulingStyle=Hard"\n        yunikorn.apache.org/task-groups: |-\n          [{\n              "name": "sched-style",\n              "minMember": 4,\n              "minResource": {\n                "cpu": "1",\n                "memory": "1000M"\n              },\n              "nodeSelector": {},\n              "tolerations": []\n          }]\n    spec:\n      schedulerName: yunikorn\n      restartPolicy: Never\n      containers:\n        - name: sleep30\n          image: "alpine:latest"\n          imagePullPolicy: "IfNotPresent"\n          command: ["sleep", "30"]\n          resources:\n            requests:\n              cpu: "1"\n              memory: "1000M"\n\n'})}),"\n",(0,a.jsx)(n.h2,{id:"verify-configuration",children:"Verify Configuration"}),"\n",(0,a.jsx)(n.p,{children:"To verify if the configuration has been done completely and correctly, check the following things:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"When an app is submitted, verify the expected number of placeholders are created by the scheduler.\nIf you define 2 task groups, 1 with minMember 1 and the other with minMember 5, that means we are expecting 6 placeholder\ngets created once the job is submitted."}),"\n",(0,a.jsx)(n.li,{children:"Verify the placeholder spec is correct. Each placeholder needs to have the same info as the real pod in the same taskGroup.\nCheck field including: namespace, pod resources, node-selector, and toleration."}),"\n",(0,a.jsx)(n.li,{children:"Verify the placeholders can be allocated on correct type of nodes, and verify the real pods are started by replacing the placeholder pods."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,a.jsxs)(n.p,{children:["Please see the troubleshooting doc when gang scheduling is enabled ",(0,a.jsx)(n.a,{href:"/docs/0.11.0/user_guide/trouble_shooting#gang-scheduling",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},88009:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/gang_scheduling_iintro-7f458cff1f69a386818aedfbc0443a34.png"},1780:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var a=s(79474);const i={},t=a.createContext(i);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);