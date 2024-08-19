"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33871],{89405:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(13274),i=s(1780);const r={id:"e2e_test",title:"End-to-End Testing"},l=void 0,o={id:"developer_guide/e2e_test",title:"End-to-End Testing",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.1/developer_guide/e2e_test.md",sourceDirName:"developer_guide",slug:"/developer_guide/e2e_test",permalink:"/docs/1.5.1/developer_guide/e2e_test",draft:!1,unlisted:!1,tags:[],version:"1.5.1",frontMatter:{id:"e2e_test",title:"End-to-End Testing"},sidebar:"docs",previous:{title:"Scheduler Object States",permalink:"/docs/1.5.1/developer_guide/scheduler_object_states"},next:{title:"Architecture",permalink:"/docs/1.5.1/design/architecture"}},c={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Understanding the Command Line Arguments",id:"understanding-the-command-line-arguments",level:2},{value:"Launching Tests",id:"launching-tests",level:2},{value:"Trigger through CLI",id:"trigger-through-cli",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"End-to-end (e2e) tests for YuniKorn-K8shim provide a mechanism to test end-to-end behavior of the system, and is the last signal to ensure end user operations match developer specifications."}),"\n",(0,t.jsx)(n.p,{children:"The primary objectives of the e2e tests are to ensure a consistent and reliable behavior of the yunikorn code base, and to catch hard-to-test bugs before users do, when unit and integration tests are insufficient."}),"\n",(0,t.jsxs)(n.p,{children:["The e2e tests are built atop of ",(0,t.jsx)(n.a,{href:"https://onsi.github.io/ginkgo/",children:"Ginkgo"})," and ",(0,t.jsx)(n.a,{href:"https://github.com/onsi/gomega",children:"Gomega"}),". There are a host of features that this Behavior-Driven Development (BDD) testing framework provides, and it is recommended that the developer read the documentation prior to diving into the tests."]}),"\n",(0,t.jsxs)(n.p,{children:["Below is the structure of e2e tests, all contained within the ",(0,t.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim",children:"yunikorn-k8shim"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"test/e2e/"})," contains tests for YuniKorn Features like Scheduling, Predicates etc"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"test/e2e/framework/configManager"})," manages & maintains the test and cluster configuration"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"test/e2e/framework/helpers"})," contains utility modules for k8s client, (de)serializers, rest api client and other common libraries."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"test/e2e/testdata"})," contains all the test related data like configmaps, pod specs etc"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,t.jsxs)(n.p,{children:["This project requires Go to be installed. On OS X with Homebrew you can just run ",(0,t.jsx)(n.code,{children:"brew install go"}),".\nOR follow this doc for deploying go ",(0,t.jsx)(n.a,{href:"https://golang.org/doc/install",children:"https://golang.org/doc/install"})]}),"\n",(0,t.jsx)(n.h2,{id:"understanding-the-command-line-arguments",children:"Understanding the Command Line Arguments"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"yk-namespace"})," - namespace under which YuniKorn is deployed. [Required]"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"kube-config"})," - path to kube config file, needed for k8s client [Required]"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"yk-host"})," - hostname of the YuniKorn REST Server, defaults to localhost."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"yk-port"})," - port number of the YuniKorn REST Server, defaults to 9080."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"yk-scheme"})," - scheme of the YuniKorn REST Server, defaults to http."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"timeout"})," -  timeout for all tests, defaults to 24 hours"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"launching-tests",children:"Launching Tests"}),"\n",(0,t.jsx)(n.h3,{id:"trigger-through-cli",children:"Trigger through CLI"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Begin by installing a new cluster dedicated to testing, such as one named 'yktest'"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"./scripts/run-e2e-tests.sh -a install -n yktest -v kindest/node:v1.28.0\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Launching CI tests is as simple as below."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'# We need to add a \'kind\' prefix to the argument of the run-e2e-tests.sh -n command.\nkubectl config use-context kind-yktest \nginkgo -r -v ci -timeout=2h -- -yk-namespace "yunikorn" -kube-config "$HOME/.kube/config"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Launching all the tests can be done as."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'ginkgo -r -v -timeout=2h -- -yk-namespace "yunikorn" -kube-config "$HOME/.kube/config"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Launching all the tests in specified e2e folder.\ne.g. test/e2e/user_group_limit/"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'cd test/e2e/\nginkgo -r user_group_limit -v -- -yk-namespace "yunikorn" -kube-config "$HOME/.kube/config"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Launching specified test file."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'cd test/e2e/\nginkgo run -r -v --focus-file "admission_controller_test.go" -- -yk-namespace "yunikorn" -kube-config "$HOME/.kube/config"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Launching specified test.\ne.g. Run test with ginkgo.it() spec name "Verify_maxapplications_with_a_specific_group_limit"'}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'cd test/e2e/\nginkgo run -r -v --focus "Verify_maxapplications_with_a_specific_group_limit" -- -yk-namespace "yunikorn" -kube-config "$HOME/.kube/config"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Launching all the tests except specified test file."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'cd test/e2e/\nginkgo run -r -v --skip-file "admission_controller_test.go" -- -yk-namespace "yunikorn" -kube-config "$HOME/.kube/config"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Delete the cluster after we finish testing (this step is optional)."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"./scripts/run-e2e-tests.sh -a cleanup -n yktest\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1780:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var t=s(79474);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);