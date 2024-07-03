"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42856],{73565:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=i(13274),t=i(1780);const o={id:"k8shim",title:"Kubernetes Shim Design"},r=void 0,l={id:"design/k8shim",title:"Kubernetes Shim Design",description:"\x3c!--",source:"@site/versioned_docs/version-0.12.1/design/k8shim.md",sourceDirName:"design",slug:"/design/k8shim",permalink:"/docs/0.12.1/design/k8shim",draft:!1,unlisted:!1,tags:[],version:"0.12.1",frontMatter:{id:"k8shim",title:"Kubernetes Shim Design"},sidebar:"docs",previous:{title:"Scheduler cache removal design",permalink:"/docs/0.12.1/design/cache_removal"},next:{title:"Cross Queue Preemption",permalink:"/docs/0.12.1/design/cross_queue_preemption"}},d={},a=[{value:"The Kubernetes shim",id:"the-kubernetes-shim",level:2},{value:"The admission controller",id:"the-admission-controller",level:2},{value:"Admission controller deployment",id:"admission-controller-deployment",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Github repo: ",(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-yunikorn-k8shim",children:"https://github.com/apache/incubator-yunikorn-k8shim"})]}),"\n",(0,s.jsxs)(n.p,{children:["Please read the ",(0,s.jsx)(n.a,{href:"/docs/0.12.1/design/architecture",children:"architecture"})," doc before reading this one, you will need to understand\nthe 3 layer design of YuniKorn before getting to understand what is the Kubernetes shim."]}),"\n",(0,s.jsx)(n.h2,{id:"the-kubernetes-shim",children:"The Kubernetes shim"}),"\n",(0,s.jsx)(n.p,{children:"The YuniKorn Kubernetes shim is responsible for talking to Kubernetes, it is responsible for translating the Kubernetes\ncluster resources, and resource requests via scheduler interface and send them to the scheduler core.\nAnd when a scheduler decision is made, it is responsible for binding the pod to the specific node. All the communication\nbetween the shim and the scheduler core is through the scheduler-interface."}),"\n",(0,s.jsx)(n.h2,{id:"the-admission-controller",children:"The admission controller"}),"\n",(0,s.jsxs)(n.p,{children:["The admission controller runs in a separate pod, it runs a\n",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#mutatingadmissionwebhook",children:"mutation webhook"}),"\nand a ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#validatingadmissionwebhook",children:"validation webhook"}),", where:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"mutation webhook"})," mutates pod spec by:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Adding ",(0,s.jsx)(n.code,{children:"schedulerName: yunikorn"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"By explicitly specifying the scheduler name, the pod will be scheduled by YuniKorn scheduler."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Adding ",(0,s.jsx)(n.code,{children:"applicationId"})," label","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When a label ",(0,s.jsx)(n.code,{children:"applicationId"})," exists, reuse the given applicationId."]}),"\n",(0,s.jsxs)(n.li,{children:["When a label ",(0,s.jsx)(n.code,{children:"spark-app-selector"})," exists, reuse the given spark app ID."]}),"\n",(0,s.jsxs)(n.li,{children:["Otherwise, assign a generated application ID for this pod, using convention: ",(0,s.jsx)(n.code,{children:"yunikorn-<namespace>-autogen"}),". This is unique per namespace."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Adding ",(0,s.jsx)(n.code,{children:"queue"})," label","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When a label ",(0,s.jsx)(n.code,{children:"queue"})," exists, reuse the given queue name. Note, if placement rule is enabled, values set in the label is ignored."]}),"\n",(0,s.jsxs)(n.li,{children:["Otherwise, adds ",(0,s.jsx)(n.code,{children:"queue: root.default"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Adding ",(0,s.jsx)(n.code,{children:"disableStateAware"})," label","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If pod was assigned a generated applicationId by the admission controller, also set ",(0,s.jsx)(n.code,{children:"disableStateAware: true"}),". This causes the generated application\nto immediately transition from the ",(0,s.jsx)(n.code,{children:"Starting"})," to ",(0,s.jsx)(n.code,{children:"Running"})," state so that it will not block other applications."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"validation webhook"})," validates the configuration set in the configmap","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This is used to prevent writing malformed configuration into the configmap."}),"\n",(0,s.jsxs)(n.li,{children:["The validation webhook calls scheduler ",(0,s.jsx)(n.a,{href:"/docs/0.12.1/api/scheduler#configuration-validation",children:"validation REST API"})," to validate configmap updates."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"admission-controller-deployment",children:"Admission controller deployment"}),"\n",(0,s.jsxs)(n.p,{children:["Currently, the deployment of the admission-controller is done as a ",(0,s.jsx)(n.code,{children:"post-start"})," hook in the scheduler deployment, similarly, the\nuninstall is done as a ",(0,s.jsx)(n.code,{children:"pre-stop"})," hook. See the related code ",(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-yunikorn-release/blob/56e580af24ed3433e7d73d9ea556b19ad7b74337/helm-charts/yunikorn/templates/deployment.yaml#L80-L85",children:"here"}),".\nDuring the installation, it is expected to always co-locate the admission controller with the scheduler pod, this is done\nby adding the pod-affinity in the admission-controller pod, like:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'podAffinity:\n  requiredDuringSchedulingIgnoredDuringExecution:\n    - labelSelector:\n      matchExpressions:\n      - key: component\n        operator: In\n        values:\n        - yunikorn-scheduler\n      topologyKey: "kubernetes.io/hostname"\n'})}),"\n",(0,s.jsx)(n.p,{children:"it also tolerates all the taints in case the scheduler pod has some toleration set."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'tolerations:\n- operator: "Exists"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1780:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(79474);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);