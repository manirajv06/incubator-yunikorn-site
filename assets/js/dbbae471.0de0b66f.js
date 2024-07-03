"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61145],{8468:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>d,metadata:()=>r,toc:()=>u});var o=t(13274),s=t(1780);const d={id:"deployment_modes",title:"Deployment Modes"},i=void 0,r={id:"user_guide/deployment_modes",title:"Deployment Modes",description:"\x3c!--",source:"@site/versioned_docs/version-1.2.0/user_guide/deployment_modes.md",sourceDirName:"user_guide",slug:"/user_guide/deployment_modes",permalink:"/docs/1.2.0/user_guide/deployment_modes",draft:!1,unlisted:!1,tags:[],version:"1.2.0",frontMatter:{id:"deployment_modes",title:"Deployment Modes"},sidebar:"docs",previous:{title:"Features",permalink:"/docs/1.2.0/get_started/core_features"},next:{title:"Service Configuration",permalink:"/docs/1.2.0/user_guide/service_config"}},l={},u=[{value:"YuniKorn deployment modes",id:"yunikorn-deployment-modes",level:2},{value:"Which version should I use?",id:"which-version-should-i-use",level:2},{value:"Standard mode",id:"standard-mode",level:3},{value:"Plugin mode",id:"plugin-mode",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"yunikorn-deployment-modes",children:"YuniKorn deployment modes"}),"\n",(0,o.jsx)(n.p,{children:"YuniKorn can be deployed in two different modes: standard and plugin. In standard mode, YuniKorn runs as a customized\nKubernetes scheduler. In plugin mode, YuniKorn is implemented as a set of plugins on top of the default Kubernetes\nscheduling framework."}),"\n",(0,o.jsx)(n.p,{children:"In both cases, it is recommended to run the admission controller as well, as this will ensure that only a single\nscheduler is active within your Kubernetes cluster. In this mode, the default Kubernetes scheduler (which is always running)\nwill be bypassed for all pods except YuniKorn itself."}),"\n",(0,o.jsx)(n.h2,{id:"which-version-should-i-use",children:"Which version should I use?"}),"\n",(0,o.jsx)(n.h3,{id:"standard-mode",children:"Standard mode"}),"\n",(0,o.jsx)(n.p,{children:"Standard mode is currently the default. It is stable, efficient, and very performant. It is well-suited for\ndeployments where most if not all pods are leveraging the queueing features of YuniKorn."}),"\n",(0,o.jsx)(n.h3,{id:"plugin-mode",children:"Plugin mode"}),"\n",(0,o.jsx)(n.p,{children:"Plugin mode is a new deployment model where the scheduler is implemented on top of the default Kubernetes scheduling\nlogic, allowing for better compatibility with the default Kubernetes scheduler. It is well-suited for mixed\nworkloads (traditional Kubernetes as well as queued applications)."}),"\n",(0,o.jsx)(n.p,{children:"Plugin mode is currently very new and has therefore not yet reached the maturity level of standard mode."}),"\n",(0,o.jsxs)(n.p,{children:["To activate plugin mode when deploying with Helm, set the variable ",(0,o.jsx)(n.code,{children:"enableSchedulerPlugin"})," to ",(0,o.jsx)(n.code,{children:"true"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1780:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var o=t(79474);const s={},d=o.createContext(s);function i(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);