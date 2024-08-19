"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83510],{34760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=t(13274),a=t(1780);const s={id:"generic_resource",title:"Generic Resource Types in Namespace Quota"},i="Generic Resource Types in Namespace Quota",r={id:"design/generic_resource",title:"Generic Resource Types in Namespace Quota",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.0/design/generic_resource.md",sourceDirName:"design",slug:"/design/generic_resource",permalink:"/docs/1.5.0/design/generic_resource",draft:!1,unlisted:!1,tags:[],version:"1.5.0",frontMatter:{id:"generic_resource",title:"Generic Resource Types in Namespace Quota"},sidebar:"docs",previous:{title:"DaemonSet Scheduling using Simple Preemptor",permalink:"/docs/1.5.0/design/simple_preemptor"},next:{title:"Priority Scheduling",permalink:"/docs/1.5.0/design/priority_scheduling"}},c={},l=[{value:"Functional gap",id:"functional-gap",level:2},{value:"Current solution",id:"current-solution",level:2},{value:"Proposed solution",id:"proposed-solution",level:2},{value:"Annotation name",id:"annotation-name",level:3},{value:"Annotation content",id:"annotation-content",level:3}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"generic-resource-types-in-namespace-quota",children:"Generic Resource Types in Namespace Quota"}),"\n",(0,o.jsxs)(n.p,{children:["Tracking jira: ",(0,o.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-1279",children:"YUNIKORN-1275"})]}),"\n",(0,o.jsx)(n.h2,{id:"functional-gap",children:"Functional gap"}),"\n",(0,o.jsx)(n.p,{children:"The queue configuration allows all resource types to be set in a quota. Namespace annotations do not. Support for the same resource types in the annotations on namespaces should be possible."}),"\n",(0,o.jsx)(n.h2,{id:"current-solution",children:"Current solution"}),"\n",(0,o.jsx)(n.p,{children:"In the current setup YuniKorn supports annotations on a namespace to specify a resource quota for that namespace. This is used in combination with placement rules to create a quota limited queue automatically based on the namespace in Kubernetes."}),"\n",(0,o.jsx)(n.p,{children:"The annotations that are supported limit the possible resource types that are supported on these auto created queues. Each resource type uses its own annotation. Current annotations supported as per the quota management documentation:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"yunikorn.apache.org/namespace.max.cpu\nyunikorn.apache.org/namespace.max.memory\n"})}),"\n",(0,o.jsx)(n.p,{children:"The queue configuration itself, as part of the yaml file, supports all Kubernetes resources including extended resources."}),"\n",(0,o.jsx)(n.h2,{id:"proposed-solution",children:"Proposed solution"}),"\n",(0,o.jsx)(n.p,{children:"The current solution uses a specific annotation for each type that is supported. This means that each new resource would require a new annotation to be defined. Reading a new annotation requires a code change in the k8shim."}),"\n",(0,o.jsx)(n.p,{children:"In comparison when we look at the gang scheduling setup with the task groups specification we are far more flexible. In that case we allow a map of resources to be specified. The map uses the resource name as the key and allows a value as per the Kubenetes resource specification. This solution allows any resource type to be set as a request for a task group."}),"\n",(0,o.jsx)(n.p,{children:"An equivalent solution should be allowed for the quota annotation on the namespace. This would provide a more flexible solution that does not require code changes for every new resource type that must be supported as part of the namespace quota."}),"\n",(0,o.jsx)(n.h3,{id:"annotation-name",children:"Annotation name"}),"\n",(0,o.jsx)(n.p,{children:"The new name for the annotation should not interfere with the existing annotations that are used for the memory and cpu resource quota. Beside that rule we are free to use any name that complies with the naming conventions for names."}),"\n",(0,o.jsx)(n.p,{children:"The proposal is to use:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"yunikorn.apache.org/namespace.quota\n"})}),"\n",(0,o.jsx)(n.h3,{id:"annotation-content",children:"Annotation content"}),"\n",(0,o.jsx)(n.p,{children:"The content of the annotation must be a simple string. There are no length limits for a specific annotation. All annotations together on one object do have a size limit however that is not a restriction we have to plan around."}),"\n",(0,o.jsx)(n.p,{children:"Since the content must be a simple string we should use a simple json representation for the quota that contains a list of resources. Representing the quota:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'yunikorn.apache.org/namespace.quota: "{\\"cpu\\": \\"100m\\",\\"memory\\": \\"1G\\",\\"nvidia.com/gpu\\": \\"1\\"}"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Similar as for other resources we allow in annotations: we allow any string as the key content.\nThe value content should be interpreted as a Kubernetes formatted resource quantity. Parsing will handle that enforcement. If any of the values do not comply with the formatting no quota will be set.\nPropagation to the core\nNo changes are proposed or required. The quota is passed from the k8shim into the core via the application tags. The content of the tag is a Resource object as defined in the scheduler interface. The schedule interface Resource object supports arbitrary resources already. The content passed from the k8shim to the core will not change. There will also be no changes in the way the quota will be processed in the core as that processing is not linked to resource types.\nBackwards compatibility\nThe current annotations will remain supported for the 1.x minor releases. Deprecation will be announced with the first release that supports the new annotation. Messages mentioning the processing of the old annotation will also be logged at a WARN level in the logs."}),"\n",(0,o.jsx)(n.p,{children:"Removing the existing annotation processing is a breaking change that could cause a large change in behaviour. Removal of processing for the old annotations should be part of the next major release. The next major release is 2.0.0. This is based on the fact that we do not have a deprecation policy defined as yet."}),"\n",(0,o.jsx)(n.p,{children:"Preference in processing will be with the new annotations. In the case that both the old and new annotations are present on the namespace the new annotation will be used. Using both old and new annotations, i.e. merging of the two sets, will not be supported."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1780:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var o=t(79474);const a={},s=o.createContext(a);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);