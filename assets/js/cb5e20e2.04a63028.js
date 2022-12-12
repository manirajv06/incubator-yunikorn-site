"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8787],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(n),k=a,h=c["".concat(p,".").concat(k)]||c[k]||d[k]||s;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},49325:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],i={id:"run_spark",title:"Run Spark Jobs",description:"How to run Spark jobs with YuniKorn",keywords:["spark"]},p=void 0,u={unversionedId:"user_guide/workloads/run_spark",id:"version-1.1.0/user_guide/workloads/run_spark",title:"Run Spark Jobs",description:"How to run Spark jobs with YuniKorn",source:"@site/versioned_docs/version-1.1.0/user_guide/workloads/run_spark.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/run_spark",permalink:"/docs/user_guide/workloads/run_spark",draft:!1,tags:[],version:"1.1.0",frontMatter:{id:"run_spark",title:"Run Spark Jobs",description:"How to run Spark jobs with YuniKorn",keywords:["spark"]},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/user_guide/workloads/workload_overview"},next:{title:"Run Flink Jobs",permalink:"/docs/user_guide/workloads/run_flink"}},l={},c=[{value:"Prepare the docker image for Spark",id:"prepare-the-docker-image-for-spark",level:2},{value:"Create a namespace for Spark jobs",id:"create-a-namespace-for-spark-jobs",level:2},{value:"Submit a Spark job",id:"submit-a-spark-job",level:2},{value:"What happens behind the scenes?",id:"what-happens-behind-the-scenes",level:2}],d={toc:c};function k(e){var t=e.components,i=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"This document assumes you have YuniKorn and its admission-controller both installed. Please refer to\n",(0,s.kt)("a",{parentName:"p",href:"/docs/"},"get started")," to see how that is done.")),(0,s.kt)("h2",{id:"prepare-the-docker-image-for-spark"},"Prepare the docker image for Spark"),(0,s.kt)("p",null,"To run Spark on Kubernetes, you'll need the Spark docker images. You can 1) use the docker images provided by the YuniKorn\nteam, or 2) build one from scratch. If you want to build your own Spark docker image, you can"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Download a Spark version that has Kubernetes support, URL: ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/spark"},"https://github.com/apache/spark")),(0,s.kt)("li",{parentName:"ul"},"Build spark with Kubernetes support:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"mvn -Pyarn -Phadoop-2.7 -Dhadoop.version=2.7.4 -Phive -Pkubernetes -Phive-thriftserver -DskipTests package\n")),(0,s.kt)("h2",{id:"create-a-namespace-for-spark-jobs"},"Create a namespace for Spark jobs"),(0,s.kt)("p",null,"Create a namespace:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"cat <<EOF | kubectl apply -f -\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: spark-test\nEOF\n")),(0,s.kt)("p",null,"Create service account and cluster role bindings under ",(0,s.kt)("inlineCode",{parentName:"p"},"spark-test")," namespace:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'cat <<EOF | kubectl apply -n spark-test -f -\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: spark\n  namespace: spark-test\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: spark-cluster-role\n  namespace: spark-test\nrules:\n- apiGroups: [""]\n  resources: ["pods"]\n  verbs: ["get", "watch", "list", "create", "delete"]\n- apiGroups: [""]\n  resources: ["configmaps"]\n  verbs: ["get", "create", "delete"]\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: spark-cluster-role-binding\n  namespace: spark-test\nsubjects:\n- kind: ServiceAccount\n  name: spark\n  namespace: spark-test\nroleRef:\n  kind: ClusterRole\n  name: spark-cluster-role\n  apiGroup: rbac.authorization.k8s.io\nEOF\n')),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Do NOT use ",(0,s.kt)("inlineCode",{parentName:"p"},"ClusterRole")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"ClusterRoleBinding")," to run Spark jobs in production, please configure a more fine-grained\nsecurity context for running Spark jobs. See more about how to configure proper RBAC rules ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"here"),".")),(0,s.kt)("h2",{id:"submit-a-spark-job"},"Submit a Spark job"),(0,s.kt)("p",null,"If this is running from local machine, you will need to start the proxy in order to talk to the api-server."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl proxy\n")),(0,s.kt)("p",null,"Run a simple SparkPi job (this assumes that the Spark binaries are installed to ",(0,s.kt)("inlineCode",{parentName:"p"},"/usr/local")," directory)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"export SPARK_HOME=/usr/local/spark-2.4.4-bin-hadoop2.7/\n${SPARK_HOME}/bin/spark-submit --master k8s://http://localhost:8001 --deploy-mode cluster --name spark-pi \\\n   --master k8s://http://localhost:8001 --deploy-mode cluster --name spark-pi \\\n   --class org.apache.spark.examples.SparkPi \\\n   --conf spark.executor.instances=1 \\\n   --conf spark.kubernetes.namespace=spark-test \\\n   --conf spark.kubernetes.executor.request.cores=1 \\\n   --conf spark.kubernetes.container.image=apache/yunikorn:spark-2.4.4 \\\n   --conf spark.kubernetes.authenticate.driver.serviceAccountName=spark-test:spark \\\n   local:///opt/spark/examples/jars/spark-examples_2.11-2.4.4.jar\n")),(0,s.kt)("p",null,"You'll see Spark driver and executors been created on Kubernetes:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"spark-pods",src:n(61794).Z,width:"2724",height:"1288"})),(0,s.kt)("p",null,"You can also view the job info from YuniKorn UI. If you do not know how to access the YuniKorn UI, please read the document\n",(0,s.kt)("a",{parentName:"p",href:"/docs/#access-the-web-ui"},"here"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"spark-jobs-on-ui",src:n(8881).Z,width:"5972",height:"1732"})),(0,s.kt)("h2",{id:"what-happens-behind-the-scenes"},"What happens behind the scenes?"),(0,s.kt)("p",null,"When the Spark job is submitted to the cluster, the job is submitted to ",(0,s.kt)("inlineCode",{parentName:"p"},"spark-test")," namespace. The Spark driver pod will\nbe firstly created under this namespace. Since this cluster has YuniKorn admission-controller enabled, when the driver pod\nget created, the admission-controller mutates the pod's spec and injects ",(0,s.kt)("inlineCode",{parentName:"p"},"schedulerName=yunikorn"),", by doing this, the\ndefault K8s scheduler will skip this pod and it will be scheduled by YuniKorn instead. See how this is done by ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/extend-kubernetes/configure-multiple-schedulers/"},"configuring\nanother scheduler in Kubernetes"),"."),(0,s.kt)("p",null,"The default configuration has placement rule enabled, which automatically maps the ",(0,s.kt)("inlineCode",{parentName:"p"},"spark-test")," namespace to a YuniKorn\nqueue ",(0,s.kt)("inlineCode",{parentName:"p"},"root.spark-test"),". All Spark jobs submitted to this namespace will be automatically submitted to the queue first.\nTo see more about how placement rule works, please see doc ",(0,s.kt)("a",{parentName:"p",href:"/docs/user_guide/placement_rules"},"placement-rules"),". By far,\nthe namespace defines the security context of the pods, and the queue determines how the job and pods will be scheduled\nwith considering of job ordering, queue resource fairness, etc. Note, this is the simplest setup, which doesn't enforce\nthe queue capacities. The queue is considered as having unlimited capacity."),(0,s.kt)("p",null,"YuniKorn reuses the Spark application ID set in label ",(0,s.kt)("inlineCode",{parentName:"p"},"spark-app-selector"),", and this job is submitted\nto YuniKorn and being considered as a job. The job is scheduled and running as there is sufficient resources in the cluster.\nYuniKorn allocates the driver pod to a node, binds the pod and starts all the containers. Once the driver pod gets started,\nit requests for a bunch of executor pods to run its tasks. Those pods will be created in the same namespace as well and\nscheduled by YuniKorn as well."))}k.isMDXComponent=!0},8881:function(e,t,n){t.Z=n.p+"assets/images/spark-jobs-on-ui-21e219c2182fd987302f26a7428b9cac.png"},61794:function(e,t,n){t.Z=n.p+"assets/images/spark-pods-21a4c799796031460e737650d06d3f7b.png"}}]);