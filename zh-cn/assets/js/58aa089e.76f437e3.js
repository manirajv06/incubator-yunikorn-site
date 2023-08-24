"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67382],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},95598:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={id:"run_tf",title:"\u8fd0\u884cTensorFlow\u4f5c\u4e1a",description:"\u5982\u4f55\u4f7f\u7528 YuniKorn \u8fd0\u884c TensorFlow \u4f5c\u4e1a",keywords:["tensorflow"]},p=void 0,s={unversionedId:"user_guide/workloads/run_tf",id:"version-1.3.0/user_guide/workloads/run_tf",title:"\u8fd0\u884cTensorFlow\u4f5c\u4e1a",description:"\u5982\u4f55\u4f7f\u7528 YuniKorn \u8fd0\u884c TensorFlow \u4f5c\u4e1a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.3.0/user_guide/workloads/run_tensorflow.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/run_tf",permalink:"/zh-cn/docs/user_guide/workloads/run_tf",draft:!1,tags:[],version:"1.3.0",frontMatter:{id:"run_tf",title:"\u8fd0\u884cTensorFlow\u4f5c\u4e1a",description:"\u5982\u4f55\u4f7f\u7528 YuniKorn \u8fd0\u884c TensorFlow \u4f5c\u4e1a",keywords:["tensorflow"]},sidebar:"docs",previous:{title:"\u8fd0\u884cFlink\u4f5c\u4e1a",permalink:"/zh-cn/docs/user_guide/workloads/run_flink"},next:{title:"\u8fd0\u884cMPI\u4f5c\u4e1a",permalink:"/zh-cn/docs/user_guide/workloads/run_mpi"}},c={},u=[{value:"\u5b89\u88c5 training-operator",id:"\u5b89\u88c5-training-operator",level:2},{value:"\u51c6\u5907 docker \u955c\u50cf",id:"\u51c6\u5907-docker-\u955c\u50cf",level:2},{value:"\u8fd0\u884c\u4e00\u4e2a TensorFlow \u4f5c\u4e1a",id:"\u8fd0\u884c\u4e00\u4e2a-tensorflow-\u4f5c\u4e1a",level:2},{value:"\u4f7f\u7528GPU Time-slicing",id:"\u4f7f\u7528gpu-time-slicing",level:2},{value:"\u524d\u63d0",id:"\u524d\u63d0",level:3},{value:"\u4f7f\u7528GPU\u6d4b\u8bd5TensorFlow job",id:"\u4f7f\u7528gpu\u6d4b\u8bd5tensorflow-job",level:3}],m={toc:u},d="wrapper";function f(e){var n=e.components,l=(0,a.Z)(e,i);return(0,o.kt)(d,(0,r.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u7ae0\u8282\u6982\u8ff0\u4e86\u5982\u4f55\u8bbe\u7f6e ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/training-operator"},"training-operator")," \u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 YuniKorn \u8c03\u5ea6\u5668\u8fd0\u884c Tensorflow \u4f5c\u4e1a\u3002\ntraining-operator \u662f\u7531 Kubeflow \u7ef4\u62a4\u7684\u4e00\u4f53\u5316\u96c6\u6210\u7684\u8bad\u7ec3 operator\u3002\u5b83\u4e0d\u4ec5\u652f\u6301 TensorFlow\uff0c\u8fd8\u652f\u6301 PyTorch\u3001XGboots \u7b49\u3002"),(0,o.kt)("h2",{id:"\u5b89\u88c5-training-operator"},"\u5b89\u88c5 training-operator"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5728 kubeflow \u547d\u540d\u7a7a\u95f4\u4e2d\u9ed8\u8ba4\u5b89\u88c5 training operator\u3002\u5982\u679c\u5b89\u88c5\u6709\u95ee\u9898\uff0c\n\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/training-operator#installation"},"\u6b64\u6587\u6863")," \u6765\u67e5\u627e\u76f8\u5173\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'kubectl apply -k "github.com/kubeflow/training-operator/manifests/overlays/standalone?ref=v1.3.0"\n')),(0,o.kt)("h2",{id:"\u51c6\u5907-docker-\u955c\u50cf"},"\u51c6\u5907 docker \u955c\u50cf"),(0,o.kt)("p",null,"\u5728\u5f00\u59cb\u4e8e Kubernetes \u4e0a\u8fd0\u884c TensorFlow \u4f5c\u4e1a\u4e4b\u524d\uff0c\u60a8\u9700\u8981\u6784\u5efa docker \u955c\u50cf\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4ece ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-k8shim/tree/master/deployments/examples/tfjob"},"deployment/examples/tfjob")," \u4e0a\u4e0b\u8f7d\u6587\u4ef6"),(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6784\u5efa\u8fd9\u4e2a docker \u955c\u50cf")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker build -f Dockerfile -t kubeflow/tf-dist-mnist-test:1.0 .\n")),(0,o.kt)("h2",{id:"\u8fd0\u884c\u4e00\u4e2a-tensorflow-\u4f5c\u4e1a"},"\u8fd0\u884c\u4e00\u4e2a TensorFlow \u4f5c\u4e1a"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u4f7f\u7528 MNIST ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim/blob/master/deployments/examples/tfjob/tf-job-mnist.yaml"},"\u6837\u4f8b")," \u7684 TFJob yaml. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kubeflow.org/v1\nkind: TFJob\nmetadata:\n  name: dist-mnist-for-e2e-test\n  namespace: kubeflow\nspec:\n  tfReplicaSpecs:\n    PS:\n      replicas: 2\n      restartPolicy: Never\n      template:\n        metadata:\n          labels:\n            applicationId: "tf_job_20200521_001"\n            queue: root.sandbox\n        spec:\n          schedulerName: yunikorn\n          containers:\n            - name: tensorflow\n              image: kubeflow/tf-dist-mnist-test:1.0\n    Worker:\n      replicas: 4\n      restartPolicy: Never\n      template:\n        metadata:\n          labels:\n            applicationId: "tf_job_20200521_001"\n            queue: root.sandbox\n        spec:\n          schedulerName: yunikorn\n          containers:\n            - name: tensorflow\n              image: kubeflow/tf-dist-mnist-test:1.0\n')),(0,o.kt)("p",null,"\u521b\u5efa TFJob"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create -f deployments/examples/tfjob/tf-job-mnist.yaml\n")),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u4ece YuniKorn UI \u4e2d\u67e5\u770b\u4f5c\u4e1a\u4fe1\u606f\u3002 \u5982\u679c\u60a8\u4e0d\u77e5\u9053\u5982\u4f55\u8bbf\u95ee YuniKorn UI\uff0c\n\u8bf7\u9605\u8bfb\u6b64 ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/#%E8%AE%BF%E9%97%AE-web-ui"},"\u6587\u6863"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"tf-job-on-ui",src:t(8485).Z,width:"2442",height:"1308"})),(0,o.kt)("h2",{id:"\u4f7f\u7528gpu-time-slicing"},"\u4f7f\u7528GPU Time-slicing"),(0,o.kt)("h3",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,o.kt)("p",null,"\u8981\u4f7f\u7528 Time-slicing GPU\uff0c\u60a8\u9700\u8981\u5148\u8bbe\u5b9a\u4e1b\u96c6\u4ee5\u8ba9GPU\u548cTime-slicing GPU\u80fd\u88ab\u4f7f\u7528\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8282\u70b9\u4e0a\u5fc5\u987b\u8fde\u63a5GPU"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes\u7248\u672c\u4e3a1.24"),(0,o.kt)("li",{parentName:"ul"},"\u4e1b\u96c6\u4e2d\u9700\u8981\u5b89\u88c5 GPU drivers"),(0,o.kt)("li",{parentName:"ul"},"\u900f\u8fc7  ",(0,o.kt)("a",{parentName:"li",href:"https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/getting-started.html"},"GPU Operator")," \u81ea\u52a8\u5316\u7684\u5efa\u7f6e\u4e0e\u7ba1\u7406\u8282\u70b9\u4e2d\u7684 NVIDIA \u8f6f\u4f53\u7ec4\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u5728Kubernetes\u4e2d\u8bbe\u5b9a ",(0,o.kt)("a",{parentName:"li",href:"https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/gpu-sharing.html"},"Time-Slicing GPUs in Kubernetes"))),(0,o.kt)("p",null,"\u5728\u5b89\u88c5\u5b8c GPU Operator \u53ca Time-slicing GPU \u4ee5\u540e\uff0c\u786e\u8ba4pods\u7684\u72b6\u6001\u4ee5\u786e\u4fdd\u6240\u6709\u7684containers\u6b63\u5728\u8fd0\u884c\u6216\u5b8c\u6210\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl get pod -n gpu-operator\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"NAME                                                          READY   STATUS      RESTARTS       AGE\ngpu-feature-discovery-fd5x4                                   2/2     Running     0              5d2h\ngpu-operator-569d9c8cb-kbn7s                                  1/1     Running     14 (39h ago)   5d2h\ngpu-operator-node-feature-discovery-master-84c7c7c6cf-f4sxz   1/1     Running     0              5d2h\ngpu-operator-node-feature-discovery-worker-p5plv              1/1     Running     8 (39h ago)    5d2h\nnvidia-container-toolkit-daemonset-zq766                      1/1     Running     0              5d2h\nnvidia-cuda-validator-5tldf                                   0/1     Completed   0              5d2h\nnvidia-dcgm-exporter-95vm8                                    1/1     Running     0              5d2h\nnvidia-device-plugin-daemonset-7nzvf                          2/2     Running     0              5d2h\nnvidia-device-plugin-validator-gj7nn                          0/1     Completed   0              5d2h\nnvidia-operator-validator-nz84d                               1/1     Running     0              5d2h\n")),(0,o.kt)("p",null,"\u786e\u8ba4\u65f6\u95f4\u7247\u8bbe\u5b9a\u662f\u5426\u88ab\u6210\u529f\u7684\u4f7f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl describe node\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"Capacity:\n  nvidia.com/gpu:     16\n...\nAllocatable:\n  nvidia.com/gpu:     16\n...\n")),(0,o.kt)("h3",{id:"\u4f7f\u7528gpu\u6d4b\u8bd5tensorflow-job"},"\u4f7f\u7528GPU\u6d4b\u8bd5TensorFlow job"),(0,o.kt)("p",null,"\u5728\u8fd9\u4e2a\u6bb5\u843d\u4e2d\u4f1a\u5728 Time-slicing GPU \u7684\u652f\u63f4\u4e0b\uff0c\u6d4b\u8bd5\u53ca\u9a8c\u8bc1TFJob\u7684\u8fd0\u884c"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u65b0\u5efa\u4e00\u4e2aworkload\u7684\u6d4b\u8bd5\u6863\u6848tf-gpu.yaml\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vim tf-gpu.yaml\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: "kubeflow.org/v1"\nkind: "TFJob"\nmetadata:\n  name: "tf-smoke-gpu"\n  namespace: kubeflow\nspec:\n  tfReplicaSpecs:\n    PS:\n      replicas: 1\n      template:\n        metadata:\n          creationTimestamp: \n          labels:\n            applicationId: "tf_job_20200521_001"\n        spec:\n          schedulerName: yunikorn\n          containers:\n            - args:\n                - python\n                - tf_cnn_benchmarks.py\n                - --batch_size=32\n                - --model=resnet50\n                - --variable_update=parameter_server\n                - --flush_stdout=true\n                - --num_gpus=1\n                - --local_parameter_device=cpu\n                - --device=cpu\n                - --data_format=NHWC\n              image: docker.io/kubeflow/tf-benchmarks-cpu:v20171202-bdab599-dirty-284af3\n              name: tensorflow\n              ports:\n                - containerPort: 2222\n                  name: tfjob-port\n              workingDir: /opt/tf-benchmarks/scripts/tf_cnn_benchmarks\n          restartPolicy: OnFailure\n    Worker:\n      replicas: 1\n      template:\n        metadata:\n          creationTimestamp: null\n          labels:\n            applicationId: "tf_job_20200521_001"\n        spec:\n          schedulerName: yunikorn\n          containers:\n            - args:\n                - python\n                - tf_cnn_benchmarks.py\n                - --batch_size=32\n                - --model=resnet50\n                - --variable_update=parameter_server\n                - --flush_stdout=true\n                - --num_gpus=1\n                - --local_parameter_device=cpu\n                - --device=gpu\n                - --data_format=NHWC\n              image: docker.io/kubeflow/tf-benchmarks-gpu:v20171202-bdab599-dirty-284af3\n              name: tensorflow\n              ports:\n                - containerPort: 2222\n                  name: tfjob-port\n              resources:\n                limits:\n                  nvidia.com/gpu: 2\n              workingDir: /opt/tf-benchmarks/scripts/tf_cnn_benchmarks\n          restartPolicy: OnFailure\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u521b\u5efaTFJob"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl apply -f tf-gpu.yaml\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728Yunikorn\u4e2d\u9a8c\u8bc1TFJob\u662f\u5426\u8fd0\u884c\n",(0,o.kt)("img",{alt:"tf-job-gpu-on-ui",src:t(3584).Z,width:"958",height:"698"}),"\n\u5bdf\u770bpod\u7684\u65e5\u5fd7:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl logs logs po/tf-smoke-gpu-worker-0 -n kubeflow\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},".......\n..Found device 0 with properties:\n..name: NVIDIA GeForce RTX 3080 major: 8 minor: 6 memoryClockRate(GHz): 1.71\n\n.......\n..Creating TensorFlow device (/device:GPU:0) -> (device: 0, name: NVIDIA GeForce RTX 3080, pci bus id: 0000:01:00.0, compute capability: 8.6)\n.......\n")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{alt:"tf-job-gpu-on-logs",src:t(60790).Z,width:"1434",height:"631"})))))}f.isMDXComponent=!0},60790:function(e,n,t){n.Z=t.p+"assets/images/tf-job-gpu-on-logs-45743e6e0d1330891435e70f544b0773.png"},3584:function(e,n,t){n.Z=t.p+"assets/images/tf-job-gpu-on-ui-f6dfde883fe4393624dfe813086a68d1.png"},8485:function(e,n,t){n.Z=t.p+"assets/images/tf-job-on-ui-e31edb85612822915f336b8cf9a25c3f.png"}}]);