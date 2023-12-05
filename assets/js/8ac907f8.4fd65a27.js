"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21502],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=s,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||a;return t?r.createElement(k,o(o({ref:n},u),{},{components:t})):r.createElement(k,o({ref:n},u))}));function k(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[c]="string"==typeof e?e:s,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},60597:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(87462),s=(t(67294),t(3905));const a={id:"cluster",title:"Cluster"},o=void 0,l={unversionedId:"api/cluster",id:"version-0.12.2/api/cluster",title:"Cluster",description:"\x3c!--",source:"@site/versioned_docs/version-0.12.2/api/cluster.md",sourceDirName:"api",slug:"/api/cluster",permalink:"/docs/0.12.2/api/cluster",draft:!1,tags:[],version:"0.12.2",frontMatter:{id:"cluster",title:"Cluster"},sidebar:"version-0.12.2/docs",previous:{title:"Run TensorFlow Jobs",permalink:"/docs/0.12.2/user_guide/workloads/run_tf"},next:{title:"Scheduler",permalink:"/docs/0.12.2/api/scheduler"}},i={},p=[{value:"Clusters",id:"clusters",level:2},{value:"Success response",id:"success-response",level:3},{value:"Error response",id:"error-response",level:3},{value:"Clusters utilization",id:"clusters-utilization",level:2},{value:"Success response",id:"success-response-1",level:3},{value:"Error response",id:"error-response-1",level:3}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,s.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"clusters"},"Clusters"),(0,s.kt)("p",null,"Returns general information about the clusters managed by the YuniKorn Scheduler. Information includes number of (total, failed, pending, running, completed) applications and containers.  "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"URL")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"/ws/v1/clusters")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Method")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"GET")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Auth required")," : NO"),(0,s.kt)("h3",{id:"success-response"},"Success response"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Code")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Content examples")),(0,s.kt)("p",null,"As an example, here is a response from a 2-node cluster with 3 applications and 4 running containers."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "partition": "[rm-123]default",\n        "clusterName": "kubernetes",\n        "totalApplications": "3",\n        "failedApplications": "1",\n        "pendingApplications": "",\n        "runningApplications": "3",\n        "completedApplications": "",\n        "totalContainers": "4",\n        "failedContainers": "",\n        "pendingContainers": "",\n        "runningContainers": "4",\n        "activeNodes": "2",\n        "totalNodes": "2",\n        "failedNodes": ""\n    }\n]\n')),(0,s.kt)("h3",{id:"error-response"},"Error response"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Code")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"500 Internal Server Error")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Content examples")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status_code": 500,\n    "message": "system error message. for example, json: invalid UTF-8 in string: ..",\n    "description": "system error message. for example, json: invalid UTF-8 in string: .."\n}\n')),(0,s.kt)("h2",{id:"clusters-utilization"},"Clusters utilization"),(0,s.kt)("p",null,"Returns statistical data related the cluster resource utilization"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"URL")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"/ws/v1/clusters/utilization")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Method")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"GET")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Auth required")," : NO"),(0,s.kt)("h3",{id:"success-response-1"},"Success response"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Code")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Content examples")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "partition": "[mycluster]default",\n        "utilization": [\n            {\n                "type": "memory",\n                "total": 5076,\n                "used": 1500,\n                "usage": "29%"\n            },\n            {\n                "type": "vcore",\n                "total": 4000,\n                "used": 300,\n                "usage": "7%"\n            }\n        ]\n    }\n]\n')),(0,s.kt)("h3",{id:"error-response-1"},"Error response"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Code")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"500 Internal Server Error")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Content examples")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status_code": 500,\n    "message": "system error message. for example, json: invalid UTF-8 in string: ..",\n    "description": "system error message. for example, json: invalid UTF-8 in string: .."\n}\n')))}d.isMDXComponent=!0}}]);