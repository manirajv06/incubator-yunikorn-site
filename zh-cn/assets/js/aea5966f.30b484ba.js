"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[865],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},21376:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={id:"k8shim",title:"Kubernetes Shim Design"},s=void 0,u={unversionedId:"design/k8shim",id:"version-0.11.0/design/k8shim",title:"Kubernetes Shim Design",description:"\x3c!--",source:"@site/versioned_docs/version-0.11.0/design/k8shim.md",sourceDirName:"design",slug:"/design/k8shim",permalink:"/zh-cn/docs/0.11.0/design/k8shim",draft:!1,tags:[],version:"0.11.0",frontMatter:{id:"k8shim",title:"Kubernetes Shim Design"},sidebar:"version-0.11.0/docs",previous:{title:"Scheduler cache removal design",permalink:"/zh-cn/docs/0.11.0/design/cache_removal"},next:{title:"Cross Queue Preemption",permalink:"/zh-cn/docs/0.11.0/design/cross_queue_preemption"}},c={},p=[{value:"The Kubernetes shim",id:"the-kubernetes-shim",level:2},{value:"The admission controller",id:"the-admission-controller",level:2},{value:"Admission controller deployment",id:"admission-controller-deployment",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Github repo: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim"},"https://github.com/apache/incubator-yunikorn-k8shim")),(0,a.kt)("p",null,"Please read the ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/docs/0.11.0/design/architecture"},"architecture")," doc before reading this one, you will need to understand\nthe 3 layer design of YuniKorn before getting to understand what is the Kubernetes shim."),(0,a.kt)("h2",{id:"the-kubernetes-shim"},"The Kubernetes shim"),(0,a.kt)("p",null,"The YuniKorn Kubernetes shim is responsible for talking to Kubernetes, it is responsible for translating the Kubernetes\ncluster resources, and resource requests via scheduler interface and send them to the scheduler core.\nAnd when a scheduler decision is made, it is responsible for binding the pod to the specific node. All the communication\nbetween the shim and the scheduler core is through the scheduler-interface."),(0,a.kt)("h2",{id:"the-admission-controller"},"The admission controller"),(0,a.kt)("p",null,"The admission controller runs in a separate pod, it runs a\n",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#validatingadmissionwebhook"},"mutation webhook"),"\nand a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#validatingadmissionwebhook"},"validation webhook"),", where:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"mutation webhook")," mutates pod spec by:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"adding ",(0,a.kt)("inlineCode",{parentName:"li"},"schedulerName: yunikorn"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"by explicitly specifying the scheduler name, the pod will be scheduled by YuniKorn scheduler"))),(0,a.kt)("li",{parentName:"ul"},"adding ",(0,a.kt)("inlineCode",{parentName:"li"},"applicationId")," label",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"when a label ",(0,a.kt)("inlineCode",{parentName:"li"},"applicationId")," exists, reuse the given applicationId"),(0,a.kt)("li",{parentName:"ul"},"when a label ",(0,a.kt)("inlineCode",{parentName:"li"},"spark-app-selector")," exists, reuse the given spark app ID"),(0,a.kt)("li",{parentName:"ul"},"otherwise, assign a generated application ID for this pod, using convention: ",(0,a.kt)("inlineCode",{parentName:"li"},"yunikorn-<namespace>-autogen"),". this is unique per namespace. "))),(0,a.kt)("li",{parentName:"ul"},"adding ",(0,a.kt)("inlineCode",{parentName:"li"},"queue")," label",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"when a label ",(0,a.kt)("inlineCode",{parentName:"li"},"queue")," exists, reuse the given queue name. Note, if placement rule is enabled, values set in the label is ignored"),(0,a.kt)("li",{parentName:"ul"},"otherwise, adds ",(0,a.kt)("inlineCode",{parentName:"li"},"queue: root.default")))))),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"validation webhook")," validates the configuration set in the configmap",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"this is used to prevent writing malformed configuration into the configmap"),(0,a.kt)("li",{parentName:"ul"},"the validation webhook calls scheduler ",(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/0.11.0/api/scheduler#configuration-validation"},"validation REST API")," to validate configmap updates")))),(0,a.kt)("h3",{id:"admission-controller-deployment"},"Admission controller deployment"),(0,a.kt)("p",null,"Currently, the deployment of the admission-controller is done as a ",(0,a.kt)("inlineCode",{parentName:"p"},"post-start")," hook in the scheduler deployment, similarly, the\nuninstall is done as a ",(0,a.kt)("inlineCode",{parentName:"p"},"pre-stop")," hook. See the related code ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-release/blob/56e580af24ed3433e7d73d9ea556b19ad7b74337/helm-charts/yunikorn/templates/deployment.yaml#L80-L85"},"here"),".\nDuring the installation, it is expected to always co-locate the admission controller with the scheduler pod, this is done\nby adding the pod-affinity in the admission-controller pod, like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'podAffinity:\n  requiredDuringSchedulingIgnoredDuringExecution:\n    - labelSelector:\n      matchExpressions:\n      - key: component\n        operator: In\n        values:\n        - yunikorn-scheduler\n      topologyKey: "kubernetes.io/hostname"\n')),(0,a.kt)("p",null,"it also tolerates all the taints in case the scheduler pod has some toleration set."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'tolerations:\n- operator: "Exists"\n')))}h.isMDXComponent=!0}}]);