"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2652],{64487:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var o=r(13274),i=r(1780);const t={id:"deployment",title:"Deploy to Kubernetes"},s=void 0,l={id:"developer_guide/deployment",title:"Deploy to Kubernetes",description:"\x3c!--",source:"@site/docs/developer_guide/deployment.md",sourceDirName:"developer_guide",slug:"/developer_guide/deployment",permalink:"/docs/next/developer_guide/deployment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"deployment",title:"Deploy to Kubernetes"},sidebar:"docs",previous:{title:"Go module updates",permalink:"/docs/next/developer_guide/dependencies"},next:{title:"Development in CodeReady Containers",permalink:"/docs/next/developer_guide/openshift_development"}},d={},c=[{value:"Build docker image",id:"build-docker-image",level:2},{value:"Setup RBAC for Scheduler",id:"setup-rbac-for-scheduler",level:2},{value:"Create/Update the ConfigMap",id:"createupdate-the-configmap",level:2},{value:"Deploy the Scheduler",id:"deploy-the-scheduler",level:2},{value:"Setup RBAC for Admission Controller",id:"setup-rbac-for-admission-controller",level:2},{value:"Create the Secret",id:"create-the-secret",level:2},{value:"Deploy the Admission Controller",id:"deploy-the-admission-controller",level:2},{value:"Access to the web UI",id:"access-to-the-web-ui",level:2},{value:"Configuration Hot Refresh",id:"configuration-hot-refresh",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The easiest way to deploy YuniKorn is to leverage our ",(0,o.jsx)(n.a,{href:"https://hub.helm.sh/charts/yunikorn/yunikorn",children:"helm charts"}),",\nyou can find the guide ",(0,o.jsx)(n.a,{href:"/docs/next/",children:"here"}),". This document describes the manual process to deploy YuniKorn\nscheduler and admission controller. It is primarily intended for developers."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note"})," The primary source of deployment information is the Helm chart, which can be found at ",(0,o.jsx)(n.a,{href:"https://github.com/apache/yunikorn-release/",children:"yunikorn-release"}),". Manual deployment may lead to out-of-sync configurations, see ",(0,o.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim/tree/master/deployments/scheduler",children:"deployments/scheduler"})]}),"\n",(0,o.jsx)(n.h2,{id:"build-docker-image",children:"Build docker image"}),"\n",(0,o.jsxs)(n.p,{children:["Under project root of the ",(0,o.jsx)(n.code,{children:"yunikorn-k8shim"}),", run the command to build an image using the map for the configuration:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"make image\n"})}),"\n",(0,o.jsx)(n.p,{children:"This command will build an image. The image will be tagged with a default version, image tag and your build architecture."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note"})," the default build uses a hardcoded user and tag. You ",(0,o.jsx)(n.em,{children:"must"})," update the ",(0,o.jsx)(n.code,{children:"IMAGE_TAG"})," variable in the ",(0,o.jsx)(n.code,{children:"Makefile"})," to push to an appropriate repository."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note"})," the latest yunikorn images in docker hub are not updated anymore due to ASF policy. Hence, you should build both scheduler image and web image locally before deploying them."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note"})," the imaging tagging includes your build architecture. For Intel, it would be ",(0,o.jsx)(n.code,{children:"amd64"})," and for Mac M1, it would be ",(0,o.jsx)(n.code,{children:"arm64"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"setup-rbac-for-scheduler",children:"Setup RBAC for Scheduler"}),"\n",(0,o.jsxs)(n.p,{children:["In the example, RBAC are configured for the yuniKorn namespace.\nThe first step is to create the RBAC role for the scheduler, see ",(0,o.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim/blob/master/deployments/scheduler/yunikorn-rbac.yaml",children:"yunikorn-rbac.yaml"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"kubectl create -f deployments/scheduler/yunikorn-rbac.yaml\n"})}),"\n",(0,o.jsx)(n.p,{children:"The role is a requirement on the current versions of kubernetes."}),"\n",(0,o.jsx)(n.h2,{id:"createupdate-the-configmap",children:"Create/Update the ConfigMap"}),"\n",(0,o.jsx)(n.p,{children:"This must be done before deploying the scheduler. It requires a correctly setup kubernetes environment.\nThis kubernetes environment can be either local or remote."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"download configuration file if not available on the node to add to kubernetes:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"curl -o yunikorn-configs.yaml https://raw.githubusercontent.com/apache/yunikorn-k8shim/master/deployments/scheduler/yunikorn-configs.yaml\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"modify the content of yunikorn-configs.yaml file as needed, and apply yunikorn-configs.yaml file in kubernetes:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"kubectl apply -f yunikorn-configs.yaml\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"check if the ConfigMap was created/updated correctly:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"kubectl describe configmaps yunikorn-configs\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["for more configuration detail, see ",(0,o.jsx)(n.a,{href:"/docs/next/user_guide/service_config",children:"Service Configuration"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"deploy-the-scheduler",children:"Deploy the Scheduler"}),"\n",(0,o.jsx)(n.p,{children:"The scheduler can be deployed with following command."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"kubectl create -f deployments/scheduler/scheduler.yaml\n"})}),"\n",(0,o.jsx)(n.p,{children:"The deployment will run 2 containers from your pre-built docker images in 1 pod,"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"yunikorn-scheduler-core (yunikorn scheduler core and shim for K8s)"}),"\n",(0,o.jsx)(n.li,{children:"yunikorn-scheduler-web (web UI)"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Alternatively, the scheduler can be deployed as a K8S scheduler plugin:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"kubectl create -f deployments/scheduler/plugin.yaml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The pod is deployed as a customized scheduler, it will take the responsibility to schedule pods which explicitly specifies ",(0,o.jsx)(n.code,{children:"schedulerName: yunikorn"})," in pod's spec. In addition to the ",(0,o.jsx)(n.code,{children:"schedulerName"}),", you will also have to add a label ",(0,o.jsx)(n.code,{children:"applicationId"})," to the pod."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"  metadata:\n    name: pod_example\n    labels:\n      applicationId: appID\n  spec:\n    schedulerName: yunikorn\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note: Admission controller abstracts the addition of ",(0,o.jsx)(n.code,{children:"schedulerName"})," and ",(0,o.jsx)(n.code,{children:"applicationId"})," from the user and hence, routes all traffic to YuniKorn. If you use helm chart to deploy, it will install admission controller along with the scheduler. Otherwise, proceed to the steps below to manually deploy the admission controller if running non-example workloads where ",(0,o.jsx)(n.code,{children:"schedulerName"})," and ",(0,o.jsx)(n.code,{children:"applicationId"})," are not present in the pod spec and metadata, respectively."]}),"\n",(0,o.jsx)(n.h2,{id:"setup-rbac-for-admission-controller",children:"Setup RBAC for Admission Controller"}),"\n",(0,o.jsxs)(n.p,{children:["Before the admission controller is deployed, we must create its RBAC role, see ",(0,o.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim/blob/master/deployments/scheduler/admission-controller-rbac.yaml",children:"admission-controller-rbac.yaml"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"kubectl create -f deployments/scheduler/admission-controller-rbac.yaml\n"})}),"\n",(0,o.jsx)(n.h2,{id:"create-the-secret",children:"Create the Secret"}),"\n",(0,o.jsxs)(n.p,{children:["Since the admission controller intercepts calls to the API server to validate/mutate incoming requests, we must deploy an empty secret\nused by the webhook server to store TLS certificates and keys. See ",(0,o.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim/blob/master/deployments/scheduler/admission-controller-secrets.yaml",children:"admission-controller-secrets.yaml"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"kubectl create -f deployments/scheduler/admission-controller-secrets.yaml\n"})}),"\n",(0,o.jsx)(n.h2,{id:"deploy-the-admission-controller",children:"Deploy the Admission Controller"}),"\n",(0,o.jsxs)(n.p,{children:["Now we can deploy the admission controller as a service. This will automatically validate/modify incoming requests and objects, respectively, in accordance with the ",(0,o.jsx)(n.a,{href:"#Deploy-the-Scheduler",children:"example in Deploy the Scheduler"}),". See the contents of the admission controller deployment and service in ",(0,o.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim/blob/master/deployments/scheduler/admission-controller.yaml",children:"admission-controller.yaml"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"kubectl create -f deployments/scheduler/admission-controller.yaml\n"})}),"\n",(0,o.jsx)(n.h2,{id:"access-to-the-web-ui",children:"Access to the web UI"}),"\n",(0,o.jsx)(n.p,{children:"When the scheduler is deployed, the web UI is also deployed in a container.\nPort forwarding for the web interface on the standard ports can be turned on via:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"kubectl port-forward svc/yunikorn-service 9889 9080\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"9889"})," is the default port for Web UI, ",(0,o.jsx)(n.code,{children:"9080"})," is the default port of scheduler's Restful service where web UI retrieves info from.\nOnce this is done, web UI will be available at: ",(0,o.jsx)(n.a,{href:"http://localhost:9889",children:"http://localhost:9889"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"configuration-hot-refresh",children:"Configuration Hot Refresh"}),"\n",(0,o.jsx)(n.p,{children:"YuniKorn uses config maps for configurations, and it supports loading configuration changes automatically by watching config map changes using shared informers."}),"\n",(0,o.jsx)(n.p,{children:"To make configuration changes, simply update the content in the configmap, which can be done either via Kubernetes dashboard UI or command line. Note, changes made to the configmap might have some delay to be picked up by the scheduler."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1780:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var o=r(79474);const i={},t=o.createContext(i);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);