"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82495],{4751:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=i(13274),l=i(1780);const r={id:"config_v2",title:"Configuration V2"},o=void 0,c={id:"design/config_v2",title:"Configuration V2",description:"\x3c!--",source:"@site/docs/design/config_v2.md",sourceDirName:"design",slug:"/design/config_v2",permalink:"/docs/next/design/config_v2",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"config_v2",title:"Configuration V2"},sidebar:"docs",previous:{title:"Resilience",permalink:"/docs/next/design/resilience"},next:{title:"Scheduler Configuration",permalink:"/docs/next/design/scheduler_configuration"}},d={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Goals",id:"goals",level:3},{value:"Non-Goals",id:"non-goals",level:3},{value:"References",id:"references",level:3},{value:"Implementation JIRA",id:"implementation-jira",level:4},{value:"Other relevant JIRAs",id:"other-relevant-jiras",level:4},{value:"Services to cover",id:"services-to-cover",level:3},{value:"Services excluded",id:"services-excluded",level:3},{value:"Configuration format",id:"configuration-format",level:2},{value:"Mutability of configuration values",id:"mutability-of-configuration-values",level:3},{value:"Update handling",id:"update-handling",level:3},{value:"Legacy configuration handling",id:"legacy-configuration-handling",level:3},{value:"Environment variables",id:"environment-variables",level:3},{value:"Helm considerations",id:"helm-considerations",level:3},{value:"Core Configuration",id:"core-configuration",level:3},{value:"Appendix",id:"appendix",level:2},{value:"Default ConfigMap",id:"default-configmap",level:3},{value:"Admission Controller Configuration",id:"admission-controller-configuration",level:3},{value:"Removed Environment Variables",id:"removed-environment-variables",level:4},{value:"Removed CLI Options",id:"removed-cli-options",level:4},{value:"Scheduler (Standard) Configuration",id:"scheduler-standard-configuration",level:3},{value:"Removed Environment Variables",id:"removed-environment-variables-1",level:4},{value:"Removed CLI Options",id:"removed-cli-options-1",level:4},{value:"Scheduler (Plugin) Configuration",id:"scheduler-plugin-configuration",level:3},{value:"Removed Environment Variables",id:"removed-environment-variables-2",level:4},{value:"Removed CLI Options",id:"removed-cli-options-2",level:4},{value:"Helm Configuration",id:"helm-configuration",level:3},{value:"Removed Options",id:"removed-options",level:4},{value:"Deprecated Options",id:"deprecated-options",level:4}];function t(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"Over time the YuniKorn configuration has increased in complexity. The current\nconfiguration for YuniKorn is split over a number of different options, file\nand command line, and formats. There is a requirement now to define an overall\nconfiguration approach that can be used for all components."}),"\n",(0,s.jsx)(n.h3,{id:"goals",children:"Goals"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Define a configuration format"}),"\n",(0,s.jsx)(n.li,{children:"Define an update and modification strategy"}),"\n",(0,s.jsx)(n.li,{children:"Provide consistency between configuration of YuniKorn components"}),"\n",(0,s.jsx)(n.li,{children:"Legacy migration strategy"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"non-goals",children:"Non-Goals"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Redefine the queue configuration"}),"\n",(0,s.jsx)(n.li,{children:"Migration timeline for the old configuration options"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,s.jsx)(n.h4,{id:"implementation-jira",children:"Implementation JIRA"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-1221",children:"YUNIKORN-1221"})," - [Umbrella] Configuration V2"]}),"\n",(0,s.jsx)(n.h4,{id:"other-relevant-jiras",children:"Other relevant JIRAs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-455",children:"YUNIKORN-455"})," - Make the core configurable"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-1213",children:"YUNIKORN-1213"})," - Background health checker needs to be configurable"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-1335",children:"YUNIKORN-1335"})," - Write yunikorn-web error logs to stderr"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"services-to-cover",children:"Services to cover"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Scheduler (Standard) - K8Shim + Core"}),"\n",(0,s.jsx)(n.li,{children:"Scheduler (Plugin) - K8Shim + Core"}),"\n",(0,s.jsx)(n.li,{children:"Admission controller"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"services-excluded",children:"Services excluded"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Web UI (not needed after ",(0,s.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-1335",children:"YUNIKORN-1335"}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-format",children:"Configuration format"}),"\n",(0,s.jsxs)(n.p,{children:["Currently only Kubernetes is a supported deployment pattern. Future shims may\nneed an alternative configuration syntax. To enable this, we will update the\nscheduler interface to support passing the core configuration (the content of\nthe ",(0,s.jsx)(n.code,{children:"queues.yaml"})," ConfigMap entry) to the core on startup and refresh. The\nexisting config watcher functionality in the core will be removed and the shim\nwill gain the responsibility for watching for ConfigMap changes. The shim\nactually already has this ability now, it is just not used."]}),"\n",(0,s.jsx)(n.p,{children:"We will use two ConfigMaps to configure YuniKorn:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"yunikorn-defaults"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This will be a new ConfigMap written by Helm; it will contain only values\nexplicitly configured by an administrator via Helm variables."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"yunikorn-configs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This ConfigMap will contain overrides for yunikorn-defaults. It was\npreviously a Helm hook in previous YuniKorn releases; it will no longer\nbe managed by Helm and may be updated freely by third-party tools."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The effective configuration will be the combination of both ",(0,s.jsx)(n.code,{children:"yunikorn-defaults"}),"\nand ",(0,s.jsx)(n.code,{children:"yunikorn-configs"}),", with ",(0,s.jsx)(n.code,{children:"yunikorn-configs"})," taking precedence."]}),"\n",(0,s.jsx)(n.p,{children:"Neither ConfigMap (even the existing one) is required for proper functionality.\nIn the case where a ConfigMap does not exist, we will use compiled-in defaults\nfor all options. This enables bootstrapping in a variety of environments,\nincluding local development mode, as the ConfigMap need not exist to bring the\nscheduler components up. Future configuration options should be set via the\nConfigMap exclusively."}),"\n",(0,s.jsx)(n.h3,{id:"mutability-of-configuration-values",children:"Mutability of configuration values"}),"\n",(0,s.jsx)(n.p,{children:"We should strive for hot-reload of all configuration values where possible.\nWhere hot-reload is not implemented, this should be clearly documented. For the\ninitial release, the core config and admission controller will be\nhot-reloadable but many items in the shim will likely not be. The shim was not\ndesigned to hot-reload anything so this will be a large future task. Some items\nmay never be reloadable due to architectural limitations."}),"\n",(0,s.jsx)(n.h3,{id:"update-handling",children:"Update handling"}),"\n",(0,s.jsx)(n.p,{children:"Given the security issues involved with updates, the default Kubernetes access\ncontrol alone should be used for ConfigMap updates. We can still syntax-check\nthe core side of the configuration in the admission controller as before.\nPartial updates are allowed as Kubernetes supports patching of ConfigMaps."}),"\n",(0,s.jsx)(n.h3,{id:"legacy-configuration-handling",children:"Legacy configuration handling"}),"\n",(0,s.jsxs)(n.p,{children:["Helm will be updated to render all existing legacy options into the\n",(0,s.jsx)(n.code,{children:"yunikorn-defaults"})," ConfigMap for easier transition to the new configuration\nformat. Consequently, it is not necessary for YuniKorn components to parse the\nold environment and command-line arguments."]}),"\n",(0,s.jsx)(n.h3,{id:"environment-variables",children:"Environment variables"}),"\n",(0,s.jsx)(n.p,{children:"All environment variables for all services will be removed, with the exception\nof:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"NAMESPACE"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default value: ",(0,s.jsx)(n.code,{children:"default"})]}),"\n",(0,s.jsx)(n.li,{children:"Will be auto-populated from Helm and resolve to the pod's running\nnamespace"}),"\n",(0,s.jsx)(n.li,{children:"Needed so that YuniKorn can determine what namespace it was launched in"}),"\n",(0,s.jsx)(n.li,{children:"Should only be provided explicitly at development time"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"KUBECONFIG"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default value: ",(0,s.jsx)(n.code,{children:"$HOME/.kube/config"})]}),"\n",(0,s.jsx)(n.li,{children:"Will be ignored if running inside Kubernetes; in-cluster configuration\nwill be used in that case"}),"\n",(0,s.jsx)(n.li,{children:"Needed so that we can bootstrap to K8s and load the YuniKorn ConfigMap at\nruntime"}),"\n",(0,s.jsx)(n.li,{children:"Should only be provided explicitly at development time"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"helm-considerations",children:"Helm considerations"}),"\n",(0,s.jsxs)(n.p,{children:["All configuration options which have moved into the ConfigMap will be marked as\ndeprecated in the Helm chart documentation. Their replacement is the more\ngeneric ",(0,s.jsx)(n.code,{children:"yunikornDefaults"})," dictionary. If the legacy values are present but\nthe associated ",(0,s.jsx)(n.code,{children:"yunikornDefaults"})," entry is missing, the legacy configuration\nvalue will be used. This will allow users some time to migrate to the new\nconfiguration style. The legacy attributes will be removed in a future release."]}),"\n",(0,s.jsx)(n.h3,{id:"core-configuration",children:"Core Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["The core scheduler configuration is loaded from the ",(0,s.jsx)(n.code,{children:"queues.yaml"})," section of\nthe ConfigMap, assuming ",(0,s.jsx)(n.code,{children:"service.policyGroup"})," is set to the default value\n",(0,s.jsx)(n.code,{children:"queues"}),". If the policy group has been customized, core scheduler configuration\nwill be read from ",(0,s.jsx)(n.code,{children:"{service.policyGroup}.yaml"}),". This section is special as its\ncontents are passed directly to the core for evaluation and update and is not\nread directly by the shim. The content of this section is unchanged from prior\nreleases."]}),"\n",(0,s.jsx)(n.h2,{id:"appendix",children:"Appendix"}),"\n",(0,s.jsx)(n.h3,{id:"default-configmap",children:"Default ConfigMap"}),"\n",(0,s.jsx)(n.p,{children:"If not present, the default ConfigMap will resolve to these defaults.\nAdditionally, individual options will resolve to those listed here if not\nspecified. Note that these values are subject to change in future releases."}),"\n",(0,s.jsx)(n.p,{children:'apiVersion: v1\nkind: ConfigMap\nmetadata:\nname: yunikorn-configs\ndata:\nservice.clusterId: "mycluster"\nservice.policyGroup: "queues"\nservice.schedulingInterval: "1s"\nservice.volumeBindTimeout: "10s"\nservice.eventChannelCapacity: "1048576"\nservice.dispatchTimeout: "5m"\nservice.operatorPlugins: "general"\nservice.disableGangScheduling: "false"\nservice.enableConfigHotRefresh: "true"\nservice.placeholderImage: "registry.k8s.io/pause:3.7"\nservice.instanceTypeNodeLabelKey: "node.kubernetes.io/instance-type"\nhealth.checkInterval: "30s"\nlog.level: "0"\nkubernetes.qps: "1000"\nkubernetes.burst: "1000"\nadmissionController.webHook.amServiceName: "yunikorn-admission-controller-service"\nadmissionController.webHook.schedulerServiceAddress: "yunikorn-service:9080"\nadmissionController.filtering.processNamespaces: ""\nadmissionController.filtering.bypassNamespaces: "^kube-system$"\nadmissionController.filtering.labelNamespaces: ""\nadmissionController.filtering.noLabelNamespaces: ""\nadmissionController.accessControl.bypassAuth: "false"\nadmissionController.accessControl.trustControllers: "true"\nadmissionController.accessControl.systemUsers: "^system:serviceaccount:kube-system:"\nadmissionController.accessControl.externalUsers: ""\nadmissionController.accessControl.externalGroups: ""\nqueues.yaml: |\npartitions:'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["name: default\nplacementrules:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"name: tag\nvalue: namespace\ncreate: true\nqueues:"}),"\n",(0,s.jsx)(n.li,{children:"name: root\nsubmitacl: '*'`"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"admission-controller-configuration",children:"Admission Controller Configuration"}),"\n",(0,s.jsx)(n.h4,{id:"removed-environment-variables",children:"Removed Environment Variables"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POLICY_GROUP"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.policyGroup"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ENABLE_CONFIG_HOT_REFRESH"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.enableConfigHotRefresh"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SCHEDULER_SERVICE_ADDRESS"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"admissionController.webHook.schedulerServiceAddress"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ADMISSION_CONTROLLER_SERVICE"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"admissionController.webHook.amServiceName"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ADMISSION_CONTROLLER_NAMESPACE"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use Environment variable: ",(0,s.jsx)(n.code,{children:"NAMESPACE"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ADMISSION_CONTROLLER_PROCESS_NAMESPACES"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"admissionController.filtering.processNamespaces"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ADMISSION_CONTROLLER_BYPASS_NAMESPACES"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"admissionController.filtering.bypassNamespaces"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ADMISSON_CONTROLLER_LABEL_NAMESPACES"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"admissionController.filtering.labelNamespaces"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ADMISSION_CONTROLLER_NO_LABEL_NAMESPACES"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"admissionController.filtering.noLabelNamespaces"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"removed-cli-options",children:"Removed CLI Options"}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h3,{id:"scheduler-standard-configuration",children:"Scheduler (Standard) Configuration"}),"\n",(0,s.jsx)(n.h4,{id:"removed-environment-variables-1",children:"Removed Environment Variables"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"USER_LABEL_KEY"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No replacement"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"OPERATOR_PLUGINS"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.operatorPlugins"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PLACEHOLDER_IMAGE"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.placeholderImage"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"removed-cli-options-1",children:"Removed CLI Options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-clusterId"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.clusterId"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-clusterVersion"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No replacement"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-policyGroup"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.policyGroup"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-interval"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.schedulingInterval"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-logLevel"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"log.level"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-logEncoding"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No replacement"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-logFile"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No replacement"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-volumeBindTimeout"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.volumeBindTimeout"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-eventChannelCapacity"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.eventChannelCapacity"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-dispatchTimeout"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.dispatchTimeout"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-kubeQPS"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"kubernetes.qps"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-kubeBurst"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"kubernetes.burst"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-operatorPlugins"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.operatorPlugins"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-enableConfigHotRefresh"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.enableConfigHotRefresh"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-disableGangScheduling"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.disableGangScheduling"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-userLabelKey"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No replacement"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-placeHolderImage"}),"\nUse ConfigMap: ",(0,s.jsx)(n.code,{children:"service.placeholderImage"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"scheduler-plugin-configuration",children:"Scheduler (Plugin) Configuration"}),"\n",(0,s.jsx)(n.h4,{id:"removed-environment-variables-2",children:"Removed Environment Variables"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"USER_LABEL_KEY"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No replacement"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"OPERATOR_PLUGINS"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.operatorPlugins"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PLACEHOLDER_IMAGE"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.placeholderImage"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"removed-cli-options-2",children:"Removed CLI Options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--yk-scheduler-name"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No replacement"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--yk-cluster-id"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.clusterId"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--yk-cluster-version"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No replacement"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--yk-policy-group"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.policyGroup"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["`--yk-scheduling-interval","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.schedulingInterval"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--yk-kube-config"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use environment: ",(0,s.jsx)(n.code,{children:"KUBECONFIG"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--yk-log-level"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"log.level"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--yk-log-encoding"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No replacement"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--yk-log-file"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No replacement"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--yk-event-channel-capacity"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.eventChannelCapacity"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--yk-dispatcher-timeout"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.dispatchTimeout"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--yk-kube-qps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"kubernetes.qps"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--yk-kube-burst"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"kubernetes.burst"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--yk-operator-plugins"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.operatorPlugins"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--yk-enable-config-hot-refresh"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.enableConfigHotRefresh"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--yk-disable-gang-scheduling"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.disableGangScheduling"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--yk-user-label-key"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No replacement"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--yk-placeholder-image"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.placeholderImage"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"helm-configuration",children:"Helm Configuration"}),"\n",(0,s.jsx)(n.h4,{id:"removed-options",children:"Removed Options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"userLabelKey"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No replacement"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"deprecated-options",children:"Deprecated Options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"operatorPlugins"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.operatorPlugins"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"placeHolderImage"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"service.placeholderImage"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"admissionController.processNamespaces"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"admissionController.filtering.processNamespaces"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"admissionController.bypassNamespaces"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"admissionController.filtering.bypassNamespaces"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"admissionController.labelNamespaces"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"admissionController.filtering.labelNamespaces"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"admissionController.noLabelNamespaces"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"admissionController.filtering.noLabelNamespaces"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"configuration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ConfigMap: ",(0,s.jsx)(n.code,{children:"queues.yaml"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},1780:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var s=i(79474);const l={},r=s.createContext(l);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);