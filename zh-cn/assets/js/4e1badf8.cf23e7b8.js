"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5503],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),h=o,m=s["".concat(c,".").concat(h)]||s[h]||d[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},20523:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"build_local",title:"Build Local"},c=void 0,u={unversionedId:"setup/build_local",id:"version-0.8.0/setup/build_local",title:"Build Local",description:"\x3c!--",source:"@site/versioned_docs/version-0.8.0/setup/build_local.md",sourceDirName:"setup",slug:"/setup/build_local",permalink:"/zh-cn/docs/0.8.0/setup/build_local",draft:!1,tags:[],version:"0.8.0",frontMatter:{id:"build_local",title:"Build Local"},sidebar:"version-0.8.0/docs",previous:{title:"Developer Guide",permalink:"/zh-cn/docs/0.8.0/get_started/developer_guide"},next:{title:"Configure Scheduler",permalink:"/zh-cn/docs/0.8.0/setup/configure_scheduler"}},p={},d=[{value:"Affected repositories",id:"affected-repositories",level:2},{value:"Making local changes",id:"making-local-changes",level:2},{value:"Updating dependencies",id:"updating-dependencies",level:2}],s={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"building-with-local-dependencies"},"Building with local dependencies"),(0,a.kt)("p",null,"The YuniKorn project has four repositories three of those repositories have a dependency at the go level.\nThese dependencies are part of the go modules and point to the github repositories.\nDuring development it can be required to break the dependency on the committed version from github.\nThis requires making changes in the module file to allow loading a local copy or a forked copy from a different repository.  "),(0,a.kt)("h2",{id:"affected-repositories"},"Affected repositories"),(0,a.kt)("p",null,"The following dependencies exist between the repositories:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"repository"),(0,a.kt)("th",{parentName:"tr",align:null},"depends on"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"yunikorn-core"),(0,a.kt)("td",{parentName:"tr",align:null},"yunikorn-scheduler-interface")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"yunikorn-k8shim"),(0,a.kt)("td",{parentName:"tr",align:null},"yunikorn-scheduler-interface, yunikorn-core")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"yunikorn-scheduler-interface"),(0,a.kt)("td",{parentName:"tr",align:null},"none")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"yunikorn-web"),(0,a.kt)("td",{parentName:"tr",align:null},"yunikorn-core")))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"yunikorn-web")," repository has no direct go dependency on the other repositories. However any change to the ",(0,a.kt)("inlineCode",{parentName:"p"},"yunikorn-core")," webservices can affect the web interface. "),(0,a.kt)("h2",{id:"making-local-changes"},"Making local changes"),(0,a.kt)("p",null,"To make sure that the local changes will not break other parts of the build you should run:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A full build ",(0,a.kt)("inlineCode",{parentName:"li"},"make")," (build target depends on the repository)"),(0,a.kt)("li",{parentName:"ul"},"A full unit test run ",(0,a.kt)("inlineCode",{parentName:"li"},"make test"))),(0,a.kt)("p",null,"Any test failures should be fixed before proceeding."),(0,a.kt)("h2",{id:"updating-dependencies"},"Updating dependencies"),(0,a.kt)("p",null,"The simplest way is to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"replace")," directive in the module file. The ",(0,a.kt)("inlineCode",{parentName:"p"},"replace")," directive allows you to override the import path with a new (local) path.\nThere is no need to change any of the imports in the source code. The change must be made in the ",(0,a.kt)("inlineCode",{parentName:"p"},"go.mod")," file of the repository that has the dependency. "),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"replace")," to use of a forked dependency, such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"replace github.com/apache/incubator-yunikorn-core => example.com/some/forked-yunikorn\n")),(0,a.kt)("p",null,"There is no requirement to fork and create a new repository. If you do not have a repository you can use a local checked out copy too.\nUsing ",(0,a.kt)("inlineCode",{parentName:"p"},"replace")," to use of a local directory as a dependency:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"replace github.com/apache/incubator-yunikorn-core => /User/example/local/checked-out-yunikorn\n")),(0,a.kt)("p",null,"and for the same dependency using a relative path:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"replace github.com/apache/incubator-yunikorn-core => ../checked-out-yunikorn\n")),(0,a.kt)("p",null,"Note: if the ",(0,a.kt)("inlineCode",{parentName:"p"},"replace")," directive is using a local filesystem path, then the target must have the ",(0,a.kt)("inlineCode",{parentName:"p"},"go.mod")," file at that location."),(0,a.kt)("p",null,"Further details on the modules wiki: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/Modules#when-should-i-use-the-replace-directive"},"When should I use the 'replace' directive?"),"."))}h.isMDXComponent=!0}}]);