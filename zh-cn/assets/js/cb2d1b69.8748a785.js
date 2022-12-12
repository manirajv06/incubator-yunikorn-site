"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5297],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25578:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"run_tf",title:"\u8fd0\u884cTensorFlow\u4f5c\u4e1a",description:"\u5982\u4f55\u4f7f\u7528 YuniKorn \u8fd0\u884c TensorFlow \u4f5c\u4e1a",keywords:["tensorflow"]},s=void 0,u={unversionedId:"user_guide/workloads/run_tf",id:"version-1.1.0/user_guide/workloads/run_tf",title:"\u8fd0\u884cTensorFlow\u4f5c\u4e1a",description:"\u5982\u4f55\u4f7f\u7528 YuniKorn \u8fd0\u884c TensorFlow \u4f5c\u4e1a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.1.0/user_guide/workloads/run_tensorflow.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/run_tf",permalink:"/zh-cn/docs/user_guide/workloads/run_tf",draft:!1,tags:[],version:"1.1.0",frontMatter:{id:"run_tf",title:"\u8fd0\u884cTensorFlow\u4f5c\u4e1a",description:"\u5982\u4f55\u4f7f\u7528 YuniKorn \u8fd0\u884c TensorFlow \u4f5c\u4e1a",keywords:["tensorflow"]},sidebar:"docs",previous:{title:"\u8fd0\u884cFlink\u4f5c\u4e1a",permalink:"/zh-cn/docs/user_guide/workloads/run_flink"},next:{title:"Cluster",permalink:"/zh-cn/docs/api/cluster"}},c={},p=[{value:"\u5b89\u88c5 training-operator",id:"\u5b89\u88c5-training-operator",level:2},{value:"\u51c6\u5907 docker \u955c\u50cf",id:"\u51c6\u5907-docker-\u955c\u50cf",level:2},{value:"\u8fd0\u884c\u4e00\u4e2a TensorFlow \u4f5c\u4e1a",id:"\u8fd0\u884c\u4e00\u4e2a-tensorflow-\u4f5c\u4e1a",level:2}],f={toc:p};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u7ae0\u8282\u6982\u8ff0\u4e86\u5982\u4f55\u8bbe\u7f6e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/training-operator"},"training-operator")," \u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 YuniKorn \u8c03\u5ea6\u5668\u8fd0\u884c Tensorflow \u4f5c\u4e1a\u3002\ntraining-operator \u662f\u7531 Kubeflow \u7ef4\u62a4\u7684\u4e00\u4f53\u5316\u96c6\u6210\u7684\u8bad\u7ec3 operator\u3002\u5b83\u4e0d\u4ec5\u652f\u6301 TensorFlow\uff0c\u8fd8\u652f\u6301 PyTorch\u3001XGboots \u7b49\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5-training-operator"},"\u5b89\u88c5 training-operator"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5728 kubeflow \u547d\u540d\u7a7a\u95f4\u4e2d\u9ed8\u8ba4\u5b89\u88c5 training operator\u3002\u5982\u679c\u5b89\u88c5\u6709\u95ee\u9898\uff0c\n\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/training-operator#installation"},"\u6b64\u6587\u6863")," \u6765\u67e5\u627e\u76f8\u5173\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl apply -k "github.com/kubeflow/training-operator/manifests/overlays/standalone?ref=v1.3.0"\n')),(0,a.kt)("h2",{id:"\u51c6\u5907-docker-\u955c\u50cf"},"\u51c6\u5907 docker \u955c\u50cf"),(0,a.kt)("p",null,"\u5728\u5f00\u59cb\u4e8e Kubernetes \u4e0a\u8fd0\u884c TensorFlow \u4f5c\u4e1a\u4e4b\u524d\uff0c\u60a8\u9700\u8981\u6784\u5efa docker \u955c\u50cf\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4ece ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-k8shim/tree/master/deployments/examples/tfjob"},"deployment/examples/tfjob")," \u4e0a\u4e0b\u8f7d\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6784\u5efa\u8fd9\u4e2a docker \u955c\u50cf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build -f Dockerfile -t kubeflow/tf-dist-mnist-test:1.0 .\n")),(0,a.kt)("h2",{id:"\u8fd0\u884c\u4e00\u4e2a-tensorflow-\u4f5c\u4e1a"},"\u8fd0\u884c\u4e00\u4e2a TensorFlow \u4f5c\u4e1a"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u4f7f\u7528 MNIST ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim/blob/master/deployments/examples/tfjob/tf-job-mnist.yaml"},"\u6837\u4f8b")," \u7684 TFJob yaml. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kubeflow.org/v1\nkind: TFJob\nmetadata:\n  name: dist-mnist-for-e2e-test\n  namespace: kubeflow\nspec:\n  tfReplicaSpecs:\n    PS:\n      replicas: 2\n      restartPolicy: Never\n      template:\n        metadata:\n          labels:\n            applicationId: "tf_job_20200521_001"\n            queue: root.sandbox\n        spec:\n          schedulerName: yunikorn\n          containers:\n            - name: tensorflow\n              image: kubeflow/tf-dist-mnist-test:1.0\n    Worker:\n      replicas: 4\n      restartPolicy: Never\n      template:\n        metadata:\n          labels:\n            applicationId: "tf_job_20200521_001"\n            queue: root.sandbox\n        spec:\n          schedulerName: yunikorn\n          containers:\n            - name: tensorflow\n              image: kubeflow/tf-dist-mnist-test:1.0\n')),(0,a.kt)("p",null,"\u521b\u5efa TFJob"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl create -f deployments/examples/tfjob/tf-job-mnist.yaml\n")),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4ece YuniKorn UI \u4e2d\u67e5\u770b\u4f5c\u4e1a\u4fe1\u606f\u3002 \u5982\u679c\u60a8\u4e0d\u77e5\u9053\u5982\u4f55\u8bbf\u95ee YuniKorn UI\uff0c\n\u8bf7\u9605\u8bfb\u6b64 ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/docs/#%E8%AE%BF%E9%97%AE-web-ui"},"\u6587\u6863"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"tf-job-on-ui",src:n(64157).Z,width:"2442",height:"1308"})))}d.isMDXComponent=!0},64157:function(e,t,n){t.Z=n.p+"assets/images/tf-job-on-ui-e31edb85612822915f336b8cf9a25c3f.png"}}]);