"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||a;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},21376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const a={id:"k8shim",title:"Kubernetes Shim Design"},o=void 0,l={unversionedId:"design/k8shim",id:"version-0.11.0/design/k8shim",title:"Kubernetes Shim Design",description:"\x3c!--",source:"@site/versioned_docs/version-0.11.0/design/k8shim.md",sourceDirName:"design",slug:"/design/k8shim",permalink:"/docs/0.11.0/design/k8shim",draft:!1,tags:[],version:"0.11.0",frontMatter:{id:"k8shim",title:"Kubernetes Shim Design"},sidebar:"version-0.11.0/docs",previous:{title:"Scheduler cache removal design",permalink:"/docs/0.11.0/design/cache_removal"},next:{title:"Cross Queue Preemption",permalink:"/docs/0.11.0/design/cross_queue_preemption"}},s={},u=[{value:"The Kubernetes shim",id:"the-kubernetes-shim",level:2},{value:"The admission controller",id:"the-admission-controller",level:2},{value:"Admission controller deployment",id:"admission-controller-deployment",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Github repo: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim"},"https://github.com/apache/incubator-yunikorn-k8shim")),(0,r.kt)("p",null,"Please read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.11.0/design/architecture"},"architecture")," doc before reading this one, you will need to understand\nthe 3 layer design of YuniKorn before getting to understand what is the Kubernetes shim."),(0,r.kt)("h2",{id:"the-kubernetes-shim"},"The Kubernetes shim"),(0,r.kt)("p",null,"The YuniKorn Kubernetes shim is responsible for talking to Kubernetes, it is responsible for translating the Kubernetes\ncluster resources, and resource requests via scheduler interface and send them to the scheduler core.\nAnd when a scheduler decision is made, it is responsible for binding the pod to the specific node. All the communication\nbetween the shim and the scheduler core is through the scheduler-interface."),(0,r.kt)("h2",{id:"the-admission-controller"},"The admission controller"),(0,r.kt)("p",null,"The admission controller runs in a separate pod, it runs a\n",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#mutatingadmissionwebhook"},"mutation webhook"),"\nand a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#validatingadmissionwebhook"},"validation webhook"),", where:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"mutation webhook")," mutates pod spec by:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"adding ",(0,r.kt)("inlineCode",{parentName:"li"},"schedulerName: yunikorn"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"by explicitly specifying the scheduler name, the pod will be scheduled by YuniKorn scheduler"))),(0,r.kt)("li",{parentName:"ul"},"adding ",(0,r.kt)("inlineCode",{parentName:"li"},"applicationId")," label",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"when a label ",(0,r.kt)("inlineCode",{parentName:"li"},"applicationId")," exists, reuse the given applicationId"),(0,r.kt)("li",{parentName:"ul"},"when a label ",(0,r.kt)("inlineCode",{parentName:"li"},"spark-app-selector")," exists, reuse the given spark app ID"),(0,r.kt)("li",{parentName:"ul"},"otherwise, assign a generated application ID for this pod, using convention: ",(0,r.kt)("inlineCode",{parentName:"li"},"yunikorn-<namespace>-autogen"),". this is unique per namespace. "))),(0,r.kt)("li",{parentName:"ul"},"adding ",(0,r.kt)("inlineCode",{parentName:"li"},"queue")," label",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"when a label ",(0,r.kt)("inlineCode",{parentName:"li"},"queue")," exists, reuse the given queue name. Note, if placement rule is enabled, values set in the label is ignored"),(0,r.kt)("li",{parentName:"ul"},"otherwise, adds ",(0,r.kt)("inlineCode",{parentName:"li"},"queue: root.default")))))),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"validation webhook")," validates the configuration set in the configmap",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"this is used to prevent writing malformed configuration into the configmap"),(0,r.kt)("li",{parentName:"ul"},"the validation webhook calls scheduler ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.11.0/api/scheduler#configuration-validation"},"validation REST API")," to validate configmap updates")))),(0,r.kt)("h3",{id:"admission-controller-deployment"},"Admission controller deployment"),(0,r.kt)("p",null,"Currently, the deployment of the admission-controller is done as a ",(0,r.kt)("inlineCode",{parentName:"p"},"post-start")," hook in the scheduler deployment, similarly, the\nuninstall is done as a ",(0,r.kt)("inlineCode",{parentName:"p"},"pre-stop")," hook. See the related code ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-release/blob/56e580af24ed3433e7d73d9ea556b19ad7b74337/helm-charts/yunikorn/templates/deployment.yaml#L80-L85"},"here"),".\nDuring the installation, it is expected to always co-locate the admission controller with the scheduler pod, this is done\nby adding the pod-affinity in the admission-controller pod, like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'podAffinity:\n  requiredDuringSchedulingIgnoredDuringExecution:\n    - labelSelector:\n      matchExpressions:\n      - key: component\n        operator: In\n        values:\n        - yunikorn-scheduler\n      topologyKey: "kubernetes.io/hostname"\n')),(0,r.kt)("p",null,"it also tolerates all the taints in case the scheduler pod has some toleration set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'tolerations:\n- operator: "Exists"\n')))}d.isMDXComponent=!0}}]);