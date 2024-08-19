"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16626],{7082:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(13274),r=t(1780);const i={id:"user_guide",title:"Get Started",slug:"/"},o=void 0,l={id:"get_started/user_guide",title:"Get Started",description:"\x3c!--",source:"@site/versioned_docs/version-0.11.0/get_started/get_started.md",sourceDirName:"get_started",slug:"/",permalink:"/docs/0.11.0/",draft:!1,unlisted:!1,tags:[],version:"0.11.0",frontMatter:{id:"user_guide",title:"Get Started",slug:"/"},sidebar:"docs",next:{title:"Features",permalink:"/docs/0.11.0/get_started/core_features"}},a={},c=[{value:"Install",id:"install",level:2},{value:"Uninstall",id:"uninstall",level:2},{value:"Access the Web UI",id:"access-the-web-ui",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Before reading this guide, we assume you either have a Kubernetes cluster, or a local Kubernetes dev environment, e.g MiniKube.\nIt is also assumed that ",(0,s.jsx)(n.code,{children:"kubectl"})," is on your path and properly configured.\nFollow this ",(0,s.jsx)(n.a,{href:"/docs/0.11.0/developer_guide/env_setup",children:"guide"})," on how to setup a local Kubernetes cluster using docker-desktop."]}),"\n",(0,s.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,s.jsx)(n.p,{children:"The easiest way to get started is to use our Helm Charts to deploy YuniKorn on an existing Kubernetes cluster.\nIt is recommended to use Helm 3 or later versions."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"script",children:"helm repo add yunikorn  https://apache.github.io/incubator-yunikorn-release\nhelm repo update\nkubectl create namespace yunikorn\nhelm install yunikorn yunikorn/yunikorn --namespace yunikorn\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By default, the helm chart will install the scheduler, web-server and the admission-controller in the cluster.\nWhen ",(0,s.jsx)(n.code,{children:"admission-controller"})," is installed, it simply routes all traffic to YuniKorn. That means the resource scheduling\nis delegated to YuniKorn. You can disable it by setting ",(0,s.jsx)(n.code,{children:"embedAdmissionController"})," flag to false during the helm install."]}),"\n",(0,s.jsxs)(n.p,{children:["Further configuration options for installing YuniKorn via Helm are available in the ",(0,s.jsx)(n.a,{href:"https://hub.helm.sh/charts/yunikorn/yunikorn",children:"YuniKorn Helm hub page"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you don't want to use helm charts, you can find our step-by-step\ntutorial ",(0,s.jsx)(n.a,{href:"/docs/0.11.0/developer_guide/deployment",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"uninstall",children:"Uninstall"}),"\n",(0,s.jsx)(n.p,{children:"Run the following command to uninstall YuniKorn:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"script",children:"helm uninstall yunikorn --namespace yunikorn\n"})}),"\n",(0,s.jsx)(n.h2,{id:"access-the-web-ui",children:"Access the Web UI"}),"\n",(0,s.jsx)(n.p,{children:"When the scheduler is deployed, the web UI is also deployed in a container.\nPort forwarding for the web interface on the standard port can be turned on via:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl port-forward svc/yunikorn-service 9889:9889 -n yunikorn\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"9889"})," is the default port for web UI.\nOnce this is done, web UI will be available at: ",(0,s.jsx)(n.code,{children:"http://localhost:9889"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"UI Screenshots",src:t(31253).A+"",width:"1200",height:"617"})}),"\n",(0,s.jsx)(n.p,{children:"YuniKorn UI provides a centralised view for cluster resource capacity, utilization, and all application info."})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},31253:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/yk-ui-screenshots-d24de16a6a2af41a4d5ac1f488ce04a1.gif"},1780:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(79474);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);