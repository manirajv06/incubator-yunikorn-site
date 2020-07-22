(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(9),a=(n(0),n(216)),i={id:"build",title:"Build"},c={id:"developer_guide/build",isDocsHomePage:!1,title:"Build",description:"\x3c!--",source:"@site/docs/developer_guide/build.md",permalink:"/docs/next/developer_guide/build",version:"next",sidebar:"docs",previous:{title:"Dev Environment Setup",permalink:"/docs/next/developer_guide/env_setup"},next:{title:"Deploy to Kubernetes",permalink:"/docs/next/developer_guide/deployment"},latestVersionMainDocPermalink:"/docs"},l=[{value:"Development Environment setup",id:"development-environment-setup",children:[]},{value:"Build YuniKorn for Kubernetes",id:"build-yunikorn-for-kubernetes",children:[{value:"Build Docker image",id:"build-docker-image",children:[]},{value:"Inspect the docker image",id:"inspect-the-docker-image",children:[]},{value:"Dependencies",id:"dependencies",children:[]}]},{value:"Build the web UI",id:"build-the-web-ui",children:[]},{value:"Locally run the integrated scheduler",id:"locally-run-the-integrated-scheduler",children:[]}],u={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"YuniKorn always works with a container orchestrator system. Currently, a Kubernetes shim ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/apache/incubator-yunikorn-k8shim"}),"yunikorn-k8shim"),"\nis provided in our repositories, you can leverage it to develop YuniKorn scheduling features and integrate with Kubernetes.\nThis document describes resources how to setup dev environment and how to do the development."),Object(a.b)("h2",{id:"development-environment-setup"},"Development Environment setup"),Object(a.b)("p",null,"Read the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/developer_guide/env_setup"}),"environment setup guide")," first to setup Docker and Kubernetes development environment."),Object(a.b)("h2",{id:"build-yunikorn-for-kubernetes"},"Build YuniKorn for Kubernetes"),Object(a.b)("p",null,"Prerequisite:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Go 1.11+")),Object(a.b)("p",null,"You can build the scheduler for Kubernetes from ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/apache/incubator-yunikorn-k8shim"}),"yunikorn-k8shim")," project.\nThe build procedure will built all components into a single executable that can be deployed and running on Kubernetes."),Object(a.b)("p",null,"Start the integrated build process by pulling the ",Object(a.b)("inlineCode",{parentName:"p"},"yunikorn-k8shim")," repository:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mkdir $HOME/yunikorn/\ncd $HOME/yunikorn/\ngit clone https://github.com/apache/incubator-yunikorn-k8shim.git\n")),Object(a.b)("p",null,"At this point you have an environment that will allow you to build an integrated image for the YuniKorn scheduler."),Object(a.b)("h3",{id:"build-docker-image"},"Build Docker image"),Object(a.b)("p",null,"Building a docker image can be triggered by following command."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"make image\n")),Object(a.b)("p",null,"The image with the build in configuration can be deployed directly on kubernetes.\nSome sample deployments that can be used are found under ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/deployments/scheduler"}),"deployments")," directory.\nFor the deployment that uses a config map you need to set up the ConfigMap in kubernetes.\nHow to deploy the scheduler with a ConfigMap is explained in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/developer_guide/deployment"}),"scheduler configuration deployment")," document."),Object(a.b)("p",null,"The image build command will first build the integrated executable and then create the docker image.\nCurrently, there are some published docker images under ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/r/apache/yunikorn"}),"this docker hub repo"),", you are free to fetch and use.\nBut keep in mind, YuniKorn has no official release yet, the latest version image can only be used for testing or evaluating, do not use it in production.\nThe default image tags are not be suitable for deployments to an accessible repository as it uses a hardcoded user and would push to Docker Hub with proper credentials.\nYou ",Object(a.b)("em",{parentName:"p"},"must")," update the ",Object(a.b)("inlineCode",{parentName:"p"},"TAG")," variable in the ",Object(a.b)("inlineCode",{parentName:"p"},"Makefile")," to push to an accessible repository.\nWhen you update the image tag be aware that the deployment examples given will also need to be updated to reflect the same change."),Object(a.b)("h3",{id:"inspect-the-docker-image"},"Inspect the docker image"),Object(a.b)("p",null,"The docker image built from previous step has embedded some important build info in image's metadata. You can retrieve\nthese info with docker ",Object(a.b)("inlineCode",{parentName:"p"},"inspect")," command."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"docker inspect apache/yunikorn:scheduler-latest\n")),Object(a.b)("p",null,"these info includes git revisions (last commit SHA) for each component, to help you understand which version of the source code\nwas shipped by this image. They are listed as docker image ",Object(a.b)("inlineCode",{parentName:"p"},"labels"),", such as"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'"Labels": {\n    "BuildTimeStamp": "2019-07-16T23:08:06+0800",\n    "Version": "0.1",\n    "yunikorn-core-revision": "dca66c7e5a9e",\n    "yunikorn-k8shim-revision": "bed60f720b28",\n    "yunikorn-scheduler-interface-revision": "3df392eded1f"\n}\n')),Object(a.b)("h3",{id:"dependencies"},"Dependencies"),Object(a.b)("p",null,"The dependencies in the projects are managed using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://blog.golang.org/using-go-modules"}),"go modules"),".\nGo Modules require at least Go version 1.11 to be installed on the development system."),Object(a.b)("p",null,"If you want to modify one of the projects locally and build with your local dependencies you will need to change the module file.\nChanging dependencies uses mod ",Object(a.b)("inlineCode",{parentName:"p"},"replace")," directives as explained in the ","[Update dependencies]","(#Updating dependencies)."),Object(a.b)("p",null,"The YuniKorn project has four repositories three of those repositories have a dependency at the go level.\nThese dependencies are part of the go modules and point to the github repositories.\nDuring development it can be required to break the dependency on the committed version from github.\nThis requires making changes in the module file to allow loading a local copy or a forked copy from a different repository.  "),Object(a.b)("h4",{id:"affected-repositories"},"Affected repositories"),Object(a.b)("p",null,"The following dependencies exist between the repositories:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"repository"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"depends on"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"yunikorn-core"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"yunikorn-scheduler-interface")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"yunikorn-k8shim"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"yunikorn-scheduler-interface, yunikorn-core")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"yunikorn-scheduler-interface"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"none")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"yunikorn-web"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"yunikorn-core")))),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"yunikorn-web")," repository has no direct go dependency on the other repositories. However any change to the ",Object(a.b)("inlineCode",{parentName:"p"},"yunikorn-core")," webservices can affect the web interface. "),Object(a.b)("h4",{id:"making-local-changes"},"Making local changes"),Object(a.b)("p",null,"To make sure that the local changes will not break other parts of the build you should run:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A full build ",Object(a.b)("inlineCode",{parentName:"li"},"make")," (build target depends on the repository)"),Object(a.b)("li",{parentName:"ul"},"A full unit test run ",Object(a.b)("inlineCode",{parentName:"li"},"make test"))),Object(a.b)("p",null,"Any test failures should be fixed before proceeding."),Object(a.b)("h4",{id:"updating-dependencies"},"Updating dependencies"),Object(a.b)("p",null,"The simplest way is to use the ",Object(a.b)("inlineCode",{parentName:"p"},"replace")," directive in the module file. The ",Object(a.b)("inlineCode",{parentName:"p"},"replace")," directive allows you to override the import path with a new (local) path.\nThere is no need to change any of the imports in the source code. The change must be made in the ",Object(a.b)("inlineCode",{parentName:"p"},"go.mod")," file of the repository that has the dependency. "),Object(a.b)("p",null,"Using ",Object(a.b)("inlineCode",{parentName:"p"},"replace")," to use of a forked dependency, such as:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"replace github.com/apache/incubator-yunikorn-core => example.com/some/forked-yunikorn\n")),Object(a.b)("p",null,"There is no requirement to fork and create a new repository. If you do not have a repository you can use a local checked out copy too.\nUsing ",Object(a.b)("inlineCode",{parentName:"p"},"replace")," to use of a local directory as a dependency:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"replace github.com/apache/incubator-yunikorn-core => /User/example/local/checked-out-yunikorn\n")),Object(a.b)("p",null,"and for the same dependency using a relative path:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"replace github.com/apache/incubator-yunikorn-core => ../checked-out-yunikorn\n")),Object(a.b)("p",null,"Note: if the ",Object(a.b)("inlineCode",{parentName:"p"},"replace")," directive is using a local filesystem path, then the target must have the ",Object(a.b)("inlineCode",{parentName:"p"},"go.mod")," file at that location."),Object(a.b)("p",null,"Further details on the modules wiki: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/golang/go/wiki/Modules#when-should-i-use-the-replace-directive"}),"When should I use the 'replace' directive?"),"."),Object(a.b)("h2",{id:"build-the-web-ui"},"Build the web UI"),Object(a.b)("p",null,"Example deployments reference the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/apache/incubator-yunikorn-web"}),"YuniKorn web UI"),".\nThe YuniKorn web UI has its own specific requirements for the build. The project has specific requirements for the build follow the steps in the README to prepare a development environment and build how to build the projects.\nThe scheduler is fully functional without the web UI. "),Object(a.b)("h2",{id:"locally-run-the-integrated-scheduler"},"Locally run the integrated scheduler"),Object(a.b)("p",null,"When you have a local development environment setup you can run the scheduler in your local kubernetes environment.\nThis has been tested in a Docker desktop with docker for desktop and Minikube. See the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/developer_guide/env_setup"}),"environment setup guide")," for further details."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"make run\n")),Object(a.b)("p",null,"It will connect with the kubernetes cluster using the users configured configuration located in ",Object(a.b)("inlineCode",{parentName:"p"},"$HOME/.kube/config"),"."),Object(a.b)("p",null,"You can also use the same approach to run the scheduler locally but connecting to a remote kubernetes cluster,\nas long as the ",Object(a.b)("inlineCode",{parentName:"p"},"$HOME/.kube/config")," file is pointing to that remote cluster."))}b.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=b(n),s=r,h=d["".concat(i,".").concat(s)]||d[s]||p[s]||a;return n?o.a.createElement(h,c(c({ref:t},u),{},{components:n})):o.a.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);