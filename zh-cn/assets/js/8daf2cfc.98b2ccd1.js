"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76258],{3905:(e,n,i)=>{i.d(n,{Zo:()=>u,kt:()=>k});var t=i(67294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(i),c=a,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return i?t.createElement(k,r(r({ref:n},u),{},{components:i})):t.createElement(k,r({ref:n},u))}));function k(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=i.length,r=new Array(l);r[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=i[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,i)}c.displayName="MDXCreateElement"},99592:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=i(87462),a=(i(67294),i(3905));const l={id:"config_v2",title:"Configuration V2"},r=void 0,o={unversionedId:"design/config_v2",id:"version-1.4.0/design/config_v2",title:"Configuration V2",description:"\x3c!--",source:"@site/versioned_docs/version-1.4.0/design/config_v2.md",sourceDirName:"design",slug:"/design/config_v2",permalink:"/zh-cn/docs/design/config_v2",draft:!1,tags:[],version:"1.4.0",frontMatter:{id:"config_v2",title:"Configuration V2"},sidebar:"docs",previous:{title:"Scheduler Object States",permalink:"/zh-cn/docs/design/scheduler_object_states"},next:{title:"Scheduler Configuration",permalink:"/zh-cn/docs/design/scheduler_configuration"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Goals",id:"goals",level:3},{value:"Non-Goals",id:"non-goals",level:3},{value:"References",id:"references",level:3},{value:"Implementation JIRA",id:"implementation-jira",level:4},{value:"Other relevant JIRAs",id:"other-relevant-jiras",level:4},{value:"Services to cover",id:"services-to-cover",level:3},{value:"Services excluded",id:"services-excluded",level:3},{value:"Configuration format",id:"configuration-format",level:2},{value:"Mutability of configuration values",id:"mutability-of-configuration-values",level:3},{value:"Update handling",id:"update-handling",level:3},{value:"Legacy configuration handling",id:"legacy-configuration-handling",level:3},{value:"Environment variables",id:"environment-variables",level:3},{value:"Helm considerations",id:"helm-considerations",level:3},{value:"Core Configuration",id:"core-configuration",level:3},{value:"Appendix",id:"appendix",level:2},{value:"Default ConfigMap",id:"default-configmap",level:3},{value:"Admission Controller Configuration",id:"admission-controller-configuration",level:3},{value:"Removed Environment Variables",id:"removed-environment-variables",level:4},{value:"Removed CLI Options",id:"removed-cli-options",level:4},{value:"Scheduler (Standard) Configuration",id:"scheduler-standard-configuration",level:3},{value:"Removed Environment Variables",id:"removed-environment-variables-1",level:4},{value:"Removed CLI Options",id:"removed-cli-options-1",level:4},{value:"Scheduler (Plugin) Configuration",id:"scheduler-plugin-configuration",level:3},{value:"Removed Environment Variables",id:"removed-environment-variables-2",level:4},{value:"Removed CLI Options",id:"removed-cli-options-2",level:4},{value:"Helm Configuration",id:"helm-configuration",level:3},{value:"Removed Options",id:"removed-options",level:4},{value:"Deprecated Options",id:"deprecated-options",level:4}],u={toc:p},m="wrapper";function d(e){let{components:n,...i}=e;return(0,a.kt)(m,(0,t.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Over time the YuniKorn configuration has increased in complexity. The current\nconfiguration for YuniKorn is split over a number of different options, file\nand command line, and formats. There is a requirement now to define an overall\nconfiguration approach that can be used for all components."),(0,a.kt)("h3",{id:"goals"},"Goals"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Define a configuration format"),(0,a.kt)("li",{parentName:"ul"},"Define an update and modification strategy"),(0,a.kt)("li",{parentName:"ul"},"Provide consistency between configuration of YuniKorn components"),(0,a.kt)("li",{parentName:"ul"},"Legacy migration strategy")),(0,a.kt)("h3",{id:"non-goals"},"Non-Goals"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Redefine the queue configuration"),(0,a.kt)("li",{parentName:"ul"},"Migration timeline for the old configuration options")),(0,a.kt)("h3",{id:"references"},"References"),(0,a.kt)("h4",{id:"implementation-jira"},"Implementation JIRA"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1221"},"YUNIKORN-1221")," - ","[Umbrella]"," Configuration V2"),(0,a.kt)("h4",{id:"other-relevant-jiras"},"Other relevant JIRAs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-455"},"YUNIKORN-455")," - Make the core configurable"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1213"},"YUNIKORN-1213")," - Background health checker needs to be configurable"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1335"},"YUNIKORN-1335")," - Write yunikorn-web error logs to stderr")),(0,a.kt)("h3",{id:"services-to-cover"},"Services to cover"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Scheduler (Standard) - K8Shim + Core"),(0,a.kt)("li",{parentName:"ul"},"Scheduler (Plugin) - K8Shim + Core"),(0,a.kt)("li",{parentName:"ul"},"Admission controller")),(0,a.kt)("h3",{id:"services-excluded"},"Services excluded"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Web UI (not needed after ",(0,a.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1335"},"YUNIKORN-1335"),")")),(0,a.kt)("h2",{id:"configuration-format"},"Configuration format"),(0,a.kt)("p",null,"Currently only Kubernetes is a supported deployment pattern. Future shims may\nneed an alternative configuration syntax. To enable this, we will update the\nscheduler interface to support passing the core configuration (the content of\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"queues.yaml")," ConfigMap entry) to the core on startup and refresh. The\nexisting config watcher functionality in the core will be removed and the shim\nwill gain the responsibility for watching for ConfigMap changes. The shim\nactually already has this ability now, it is just not used."),(0,a.kt)("p",null,"We will use two ConfigMaps to configure YuniKorn:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yunikorn-defaults"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This will be a new ConfigMap written by Helm; it will contain only values\nexplicitly configured by an administrator via Helm variables."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yunikorn-configs"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This ConfigMap will contain overrides for yunikorn-defaults. It was\npreviously a Helm hook in previous YuniKorn releases; it will no longer\nbe managed by Helm and may be updated freely by third-party tools.")))),(0,a.kt)("p",null,"The effective configuration will be the combination of both ",(0,a.kt)("inlineCode",{parentName:"p"},"yunikorn-defaults"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"yunikorn-configs"),", with ",(0,a.kt)("inlineCode",{parentName:"p"},"yunikorn-configs")," taking precedence."),(0,a.kt)("p",null,"Neither ConfigMap (even the existing one) is required for proper functionality.\nIn the case where a ConfigMap does not exist, we will use compiled-in defaults\nfor all options. This enables bootstrapping in a variety of environments,\nincluding local development mode, as the ConfigMap need not exist to bring the\nscheduler components up. Future configuration options should be set via the\nConfigMap exclusively."),(0,a.kt)("h3",{id:"mutability-of-configuration-values"},"Mutability of configuration values"),(0,a.kt)("p",null,"We should strive for hot-reload of all configuration values where possible.\nWhere hot-reload is not implemented, this should be clearly documented. For the\ninitial release, the core config and admission controller will be\nhot-reloadable but many items in the shim will likely not be. The shim was not\ndesigned to hot-reload anything so this will be a large future task. Some items\nmay never be reloadable due to architectural limitations."),(0,a.kt)("h3",{id:"update-handling"},"Update handling"),(0,a.kt)("p",null,"Given the security issues involved with updates, the default Kubernetes access\ncontrol alone should be used for ConfigMap updates. We can still syntax-check\nthe core side of the configuration in the admission controller as before.\nPartial updates are allowed as Kubernetes supports patching of ConfigMaps."),(0,a.kt)("h3",{id:"legacy-configuration-handling"},"Legacy configuration handling"),(0,a.kt)("p",null,"Helm will be updated to render all existing legacy options into the\n",(0,a.kt)("inlineCode",{parentName:"p"},"yunikorn-defaults")," ConfigMap for easier transition to the new configuration\nformat. Consequently, it is not necessary for YuniKorn components to parse the\nold environment and command-line arguments."),(0,a.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,a.kt)("p",null,"All environment variables for all services will be removed, with the exception\nof:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NAMESPACE"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Default value: ",(0,a.kt)("inlineCode",{parentName:"li"},"default")),(0,a.kt)("li",{parentName:"ul"},"Will be auto-populated from Helm and resolve to the pod's running\nnamespace"),(0,a.kt)("li",{parentName:"ul"},"Needed so that YuniKorn can determine what namespace it was launched in"),(0,a.kt)("li",{parentName:"ul"},"Should only be provided explicitly at development time"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"KUBECONFIG"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Default value: ",(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/.kube/config")),(0,a.kt)("li",{parentName:"ul"},"Will be ignored if running inside Kubernetes; in-cluster configuration\nwill be used in that case"),(0,a.kt)("li",{parentName:"ul"},"Needed so that we can bootstrap to K8s and load the YuniKorn ConfigMap at\nruntime"),(0,a.kt)("li",{parentName:"ul"},"Should only be provided explicitly at development time")))),(0,a.kt)("h3",{id:"helm-considerations"},"Helm considerations"),(0,a.kt)("p",null,"All configuration options which have moved into the ConfigMap will be marked as\ndeprecated in the Helm chart documentation. Their replacement is the more\ngeneric ",(0,a.kt)("inlineCode",{parentName:"p"},"yunikornDefaults")," dictionary. If the legacy values are present but\nthe associated ",(0,a.kt)("inlineCode",{parentName:"p"},"yunikornDefaults")," entry is missing, the legacy configuration\nvalue will be used. This will allow users some time to migrate to the new\nconfiguration style. The legacy attributes will be removed in a future release."),(0,a.kt)("h3",{id:"core-configuration"},"Core Configuration"),(0,a.kt)("p",null,"The core scheduler configuration is loaded from the ",(0,a.kt)("inlineCode",{parentName:"p"},"queues.yaml")," section of\nthe ConfigMap, assuming ",(0,a.kt)("inlineCode",{parentName:"p"},"service.policyGroup")," is set to the default value\n",(0,a.kt)("inlineCode",{parentName:"p"},"queues"),". If the policy group has been customized, core scheduler configuration\nwill be read from ",(0,a.kt)("inlineCode",{parentName:"p"},"{service.policyGroup}.yaml"),". This section is special as its\ncontents are passed directly to the core for evaluation and update and is not\nread directly by the shim. The content of this section is unchanged from prior\nreleases."),(0,a.kt)("h2",{id:"appendix"},"Appendix"),(0,a.kt)("h3",{id:"default-configmap"},"Default ConfigMap"),(0,a.kt)("p",null,"If not present, the default ConfigMap will resolve to these defaults.\nAdditionally, individual options will resolve to those listed here if not\nspecified. Note that these values are subject to change in future releases."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: yunikorn-configs\ndata:\n  service.clusterId: "mycluster"\n  service.policyGroup: "queues"\n  service.schedulingInterval: "1s"\n  service.volumeBindTimeout: "10s"\n  service.eventChannelCapacity: "1048576"\n  service.dispatchTimeout: "5m"\n  service.operatorPlugins: "general"\n  service.disableGangScheduling: "false"\n  service.enableConfigHotRefresh: "true"\n  service.placeholderImage: "registry.k8s.io/pause:3.7"\n  service.instanceTypeNodeLabelKey: "node.kubernetes.io/instance-type"\n  health.checkInterval: "30s"\n  log.level: "0"\n  kubernetes.qps: "1000"\n  kubernetes.burst: "1000"\n  admissionController.webHook.amServiceName: "yunikorn-admission-controller-service"\n  admissionController.webHook.schedulerServiceAddress: "yunikorn-service:9080"\n  admissionController.filtering.processNamespaces: ""\n  admissionController.filtering.bypassNamespaces: "^kube-system$"\n  admissionController.filtering.labelNamespaces: ""\n  admissionController.filtering.noLabelNamespaces: ""\n  admissionController.accessControl.bypassAuth: "false"\n  admissionController.accessControl.trustControllers: "true"\n  admissionController.accessControl.systemUsers: "^system:serviceaccount:kube-system:"\n  admissionController.accessControl.externalUsers: ""\n  admissionController.accessControl.externalGroups: ""\n  queues.yaml: |\n    partitions:\n      - name: default\n        placementrules:\n          - name: tag\n            value: namespace\n            create: true\n        queues:\n          - name: root\n            submitacl: \'*\'`\n')),(0,a.kt)("h3",{id:"admission-controller-configuration"},"Admission Controller Configuration"),(0,a.kt)("h4",{id:"removed-environment-variables"},"Removed Environment Variables"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"POLICY_GROUP"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.policyGroup")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ENABLE_CONFIG_HOT_REFRESH"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.enableConfigHotRefresh")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SCHEDULER_SERVICE_ADDRESS"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"admissionController.webHook.schedulerServiceAddress")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ADMISSION_CONTROLLER_SERVICE"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"admissionController.webHook.amServiceName")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ADMISSION_CONTROLLER_NAMESPACE"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use Environment variable: ",(0,a.kt)("inlineCode",{parentName:"li"},"NAMESPACE")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ADMISSION_CONTROLLER_PROCESS_NAMESPACES"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"admissionController.filtering.processNamespaces")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ADMISSION_CONTROLLER_BYPASS_NAMESPACES"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"admissionController.filtering.bypassNamespaces")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ADMISSON_CONTROLLER_LABEL_NAMESPACES"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"admissionController.filtering.labelNamespaces")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ADMISSION_CONTROLLER_NO_LABEL_NAMESPACES"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"admissionController.filtering.noLabelNamespaces"))))),(0,a.kt)("h4",{id:"removed-cli-options"},"Removed CLI Options"),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"scheduler-standard-configuration"},"Scheduler (Standard) Configuration"),(0,a.kt)("h4",{id:"removed-environment-variables-1"},"Removed Environment Variables"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"USER_LABEL_KEY"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"No replacement"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OPERATOR_PLUGINS"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.operatorPlugins")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PLACEHOLDER_IMAGE"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.placeholderImage"))))),(0,a.kt)("h4",{id:"removed-cli-options-1"},"Removed CLI Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-clusterId"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.clusterId")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-clusterVersion"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"No replacement"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-policyGroup"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.policyGroup")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-interval"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.schedulingInterval")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-logLevel"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"log.level")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-logEncoding"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"No replacement"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-logFile"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"No replacement"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-volumeBindTimeout"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.volumeBindTimeout")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-eventChannelCapacity"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.eventChannelCapacity")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-dispatchTimeout"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.dispatchTimeout")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-kubeQPS"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"kubernetes.qps")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-kubeBurst"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"kubernetes.burst")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-operatorPlugins"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.operatorPlugins")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-enableConfigHotRefresh"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.enableConfigHotRefresh")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-disableGangScheduling"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.disableGangScheduling")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-userLabelKey"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"No replacement"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-placeHolderImage"),"\nUse ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.placeholderImage"))),(0,a.kt)("h3",{id:"scheduler-plugin-configuration"},"Scheduler (Plugin) Configuration"),(0,a.kt)("h4",{id:"removed-environment-variables-2"},"Removed Environment Variables"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"USER_LABEL_KEY"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"No replacement"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OPERATOR_PLUGINS"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.operatorPlugins")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PLACEHOLDER_IMAGE"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.placeholderImage"))))),(0,a.kt)("h4",{id:"removed-cli-options-2"},"Removed CLI Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--yk-scheduler-name"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"No replacement"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--yk-cluster-id"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.clusterId")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--yk-cluster-version"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"No replacement"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--yk-policy-group"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.policyGroup")))),(0,a.kt)("li",{parentName:"ul"},"`--yk-scheduling-interval",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.schedulingInterval")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--yk-kube-config"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use environment: ",(0,a.kt)("inlineCode",{parentName:"li"},"KUBECONFIG")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--yk-log-level"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"log.level")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--yk-log-encoding"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"No replacement"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--yk-log-file"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"No replacement"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--yk-event-channel-capacity"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.eventChannelCapacity")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--yk-dispatcher-timeout"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.dispatchTimeout")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--yk-kube-qps"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"kubernetes.qps")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--yk-kube-burst"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"kubernetes.burst")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--yk-operator-plugins"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.operatorPlugins")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--yk-enable-config-hot-refresh"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.enableConfigHotRefresh")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--yk-disable-gang-scheduling"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.disableGangScheduling")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--yk-user-label-key"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"No replacement"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--yk-placeholder-image"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.placeholderImage"))))),(0,a.kt)("h3",{id:"helm-configuration"},"Helm Configuration"),(0,a.kt)("h4",{id:"removed-options"},"Removed Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"userLabelKey"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"No replacement")))),(0,a.kt)("h4",{id:"deprecated-options"},"Deprecated Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"operatorPlugins"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.operatorPlugins")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"placeHolderImage"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"service.placeholderImage")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"admissionController.processNamespaces"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"admissionController.filtering.processNamespaces")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"admissionController.bypassNamespaces"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"admissionController.filtering.bypassNamespaces")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"admissionController.labelNamespaces"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"admissionController.filtering.labelNamespaces")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"admissionController.noLabelNamespaces"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"admissionController.filtering.noLabelNamespaces")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"configuration"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,a.kt)("inlineCode",{parentName:"li"},"queues.yaml"))))))}d.isMDXComponent=!0}}]);