(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{201:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),o=(n(0),n(216)),c={id:"deployment",title:"Deploy to Kubernetes"},i={id:"developer_guide/deployment",isDocsHomePage:!1,title:"Deploy to Kubernetes",description:"\x3c!--",source:"@site/docs/developer_guide/deployment.md",permalink:"/docs/next/developer_guide/deployment",version:"next",sidebar:"docs",previous:{title:"Build",permalink:"/docs/next/developer_guide/build"},next:{title:"Architecture",permalink:"/docs/next/design/architecture"},latestVersionMainDocPermalink:"/docs"},l=[{value:"Build docker image",id:"build-docker-image",children:[]},{value:"Setup RBAC",id:"setup-rbac",children:[]},{value:"Create the ConfigMap",id:"create-the-configmap",children:[]},{value:"Attach ConfigMap to the Scheduler Pod",id:"attach-configmap-to-the-scheduler-pod",children:[]},{value:"Deploy the Scheduler",id:"deploy-the-scheduler",children:[]},{value:"Access to the web UI",id:"access-to-the-web-ui",children:[]},{value:"Configuration Hot Refresh",id:"configuration-hot-refresh",children:[]}],u={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The easiest way to deploy YuniKorn is to leverage our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.helm.sh/charts/yunikorn/yunikorn"}),"helm charts"),",\nyou can find the guide ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/"}),"here"),". This document describes the manual process to deploy YuniKorn\nscheduler and it is majorly for developers."),Object(o.b)("h2",{id:"build-docker-image"},"Build docker image"),Object(o.b)("p",null,"Under project root of the ",Object(o.b)("inlineCode",{parentName:"p"},"yunikorn-k8shim"),", run the command to build an image using the map for the configuration:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"make image\n")),Object(o.b)("p",null,"This command will build an image. The image will be tagged with a default version and image tag."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note")," the default build uses a hardcoded user and tag. You ",Object(o.b)("em",{parentName:"p"},"must")," update the ",Object(o.b)("inlineCode",{parentName:"p"},"IMAGE_TAG")," variable in the ",Object(o.b)("inlineCode",{parentName:"p"},"Makefile")," to push to an appropriate repository. "),Object(o.b)("h2",{id:"setup-rbac"},"Setup RBAC"),Object(o.b)("p",null,"The first step is to create the RBAC role for the scheduler, see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/apache/incubator-yunikorn-k8shim/blob/master/deployments/scheduler/yunikorn-rbac.yaml"}),"yunikorn-rbac.yaml")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl create -f scheduler/yunikorn-rbac.yaml\n")),Object(o.b)("p",null,"The role is a requirement on the current versions of kubernetes."),Object(o.b)("h2",{id:"create-the-configmap"},"Create the ConfigMap"),Object(o.b)("p",null,"This must be done before deploying the scheduler. It requires a correctly setup kubernetes environment.\nThis kubernetes environment can be either local or remote. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"download configuration file if not available on the node to add to kubernetes:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"curl -o queues.yaml https://raw.githubusercontent.com/apache/incubator-yunikorn-k8shim/master/conf/queues.yaml\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"create ConfigMap in kubernetes:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl create configmap yunikorn-configs --from-file=queues.yaml\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"check if the ConfigMap was created correctly:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl describe configmaps yunikorn-configs\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note")," if name of the ConfigMap is changed the volume in the scheduler yaml file must be updated to reference the new name otherwise the changes to the configuration will not be picked up. "),Object(o.b)("h2",{id:"attach-configmap-to-the-scheduler-pod"},"Attach ConfigMap to the Scheduler Pod"),Object(o.b)("p",null,"The ConfigMap is attached to the scheduler as a special volume. First step is to specify where to mount it in the pod:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"  volumeMounts:\n    - name: config-volume\n      mountPath: /etc/yunikorn/\n")),Object(o.b)("p",null,"Second step is to link the mount point back to the configuration map created in kubernetes:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"  volumes:\n    - name: config-volume\n      configMap:\n        name: yunikorn-configs\n")),Object(o.b)("p",null,"Both steps are part of the scheduler yaml file, an example can be seen at ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/apache/incubator-yunikorn-k8shim/blob/master/deployments/scheduler/scheduler.yaml"}),"scheduler.yaml"),"\nfor reference."),Object(o.b)("h2",{id:"deploy-the-scheduler"},"Deploy the Scheduler"),Object(o.b)("p",null,"The scheduler can be deployed with following command."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl create -f deployments/scheduler/scheduler.yaml\n")),Object(o.b)("p",null,"The deployment will run 2 containers from your pre-built docker images in 1 pod,"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"yunikorn-scheduler-core (yunikorn scheduler core and shim for K8s)"),Object(o.b)("li",{parentName:"ul"},"yunikorn-scheduler-web (web UI)")),Object(o.b)("p",null,"The pod is deployed as a customized scheduler, it will take the responsibility to schedule pods which explicitly specifies ",Object(o.b)("inlineCode",{parentName:"p"},"schedulerName: yunikorn")," in pod's spec."),Object(o.b)("h2",{id:"access-to-the-web-ui"},"Access to the web UI"),Object(o.b)("p",null,"When the scheduler is deployed, the web UI is also deployed in a container.\nPort forwarding for the web interface on the standard ports can be turned on via:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'POD=`kubectl get pod -l app=yunikorn -o jsonpath="{.items[0].metadata.name}"` && \\\nkubectl port-forward ${POD} 9889 9080\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"9889")," is the default port for Web UI, ",Object(o.b)("inlineCode",{parentName:"p"},"9080")," is the default port of scheduler's Restful service where web UI retrieves info from.\nOnce this is done, web UI will be available at: http://localhost:9889."),Object(o.b)("h2",{id:"configuration-hot-refresh"},"Configuration Hot Refresh"),Object(o.b)("p",null,"YuniKorn supports to load configuration changes automatically from attached configmap. Simply update the content in the configmap,\nthat can be done either via Kubernetes dashboard UI or commandline. ",Object(o.b)("em",{parentName:"p"},"Note"),", changes made to the configmap might have some\ndelay to be picked up by the scheduler."))}b.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,h=p["".concat(c,".").concat(d)]||p[d]||s[d]||o;return n?a.a.createElement(h,i(i({ref:t},u),{},{components:n})):a.a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);