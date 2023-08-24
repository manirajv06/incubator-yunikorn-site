"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34171],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(t),s=i,d=m["".concat(o,".").concat(s)]||m[s]||k[s]||a;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=s;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[m]="string"==typeof e?e:i,l[1]=p;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},28988:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),l=["components"],p={id:"sorting_policies",title:"\u6392\u5e8f\u7b56\u7565"},o=void 0,u={unversionedId:"user_guide/sorting_policies",id:"version-1.3.0/user_guide/sorting_policies",title:"\u6392\u5e8f\u7b56\u7565",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.3.0/user_guide/sorting_policies.md",sourceDirName:"user_guide",slug:"/user_guide/sorting_policies",permalink:"/zh-cn/docs/user_guide/sorting_policies",draft:!1,tags:[],version:"1.3.0",frontMatter:{id:"sorting_policies",title:"\u6392\u5e8f\u7b56\u7565"},sidebar:"docs",previous:{title:"\u89e3\u6790\u7528\u6237\u548c\u7fa4\u7ec4",permalink:"/zh-cn/docs/user_guide/usergroup_resolution"},next:{title:"App & Queue Priorities",permalink:"/zh-cn/docs/user_guide/priorities"}},c={},m=[{value:"\u5e94\u7528\u7a0b\u5e8f\u6392\u5e8f",id:"\u5e94\u7528\u7a0b\u5e8f\u6392\u5e8f",level:2},{value:"FifoSortPolicy",id:"fifosortpolicy",level:3},{value:"FairSortPolicy",id:"fairsortpolicy",level:3},{value:"StateAwarePolicy",id:"stateawarepolicy",level:3},{value:"\u8282\u70b9\u6392\u5e8f",id:"\u8282\u70b9\u6392\u5e8f",level:2},{value:"FairnessPolicy",id:"fairnesspolicy",level:3},{value:"BinPackingPolicy",id:"binpackingpolicy",level:3},{value:"\u8d44\u6e90\u52a0\u6743",id:"\u8d44\u6e90\u52a0\u6743",level:2},{value:"\u8bf7\u6c42\u6392\u5e8f",id:"\u8bf7\u6c42\u6392\u5e8f",level:2}],k={toc:m},s="wrapper";function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)(s,(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8c03\u5ea6\u5668\u4f7f\u7528\u7b56\u7565\u53ef\u4ee5\u5728\u4e0d\u66f4\u6539\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\u6539\u53d8\u8c03\u5ea6\u884c\u4e3a\u3002\n\u53ef\u4ee5\u4e3a\u4ee5\u4e0b\u9879\u76ee\u8bbe\u7f6e\u7b56\u7565\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E6%8E%92%E5%BA%8F"},"\u5e94\u7528\u7a0b\u5e8f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E8%8A%82%E7%82%B9%E6%8E%92%E5%BA%8F"},"\u8282\u70b9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E8%AF%B7%E6%B1%82%E6%8E%92%E5%BA%8F"},"\u8bf7\u6c42"))),(0,a.kt)("h2",{id:"\u5e94\u7528\u7a0b\u5e8f\u6392\u5e8f"},"\u5e94\u7528\u7a0b\u5e8f\u6392\u5e8f"),(0,a.kt)("p",null,"\u901a\u8fc7\u914d\u7f6e\u4e3a\u6bcf\u4e2a\u961f\u5217\u8bbe\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6392\u5e8f\u7b56\u7565\u3002\u6392\u5e8f\u7b56\u7565\u8bbe\u7f6e\u4ec5\u5bf9",(0,a.kt)("em",{parentName:"p"},"\u53f6\u5b50"),"\u961f\u5217\u6709\u6548\u3002\u6bcf\u4e2a",(0,a.kt)("em",{parentName:"p"},"\u53f6\u5b50"),"\u961f\u5217\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u7b56\u7565\u3002"),(0,a.kt)("p",null,"\u6392\u5e8f\u7b56\u7565\u4ec5\u6307\u5b9a\u5e94\u7528\u7a0b\u5e8f\u5728\u961f\u5217\u5185\u6392\u5e8f\u7684\u987a\u5e8f\u3002\n\u8be5\u987a\u5e8f\u5bf9\u4e8e\u6307\u5b9a\u5728\u5206\u914d\u8d44\u6e90\u65f6\u9996\u5148\u8003\u8651\u54ea\u4e2a\u5e94\u7528\u7a0b\u5e8f\u975e\u5e38\u91cd\u8981\u3002\n\u6392\u5e8f\u7b56\u7565",(0,a.kt)("em",{parentName:"p"},"\u4e0d\u4f1a"),"\u5f71\u54cd\u5728\u961f\u5217\u4e2d\u540c\u65f6\u8c03\u5ea6\u6216\u6fc0\u6d3b\u7684\u5e94\u7528\u7a0b\u5e8f\u6570\u91cf\u3002\n\u6240\u6709\u5177\u6709\u5f85\u5904\u7406\u8d44\u6e90\u8bf7\u6c42\u7684\u5e94\u7528\u7a0b\u5e8f\u90fd\u53ef\u4ee5\u5e76\u4e14\u5c06\u5728\u961f\u5217\u4e2d\u8c03\u5ea6\uff0c\u9664\u975e\u660e\u786e\u5730\u88ab\u8fc7\u6ee4\u6389\u3002\n\u5373\u4f7f\u4f7f\u7528\u5148\u8fdb\u5148\u51fa\u7b56\u7565(FIFO)\u5bf9\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u6392\u5e8f\uff0c\u591a\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e5f\u5c06\u5728\u961f\u5217\u4e2d\u5e76\u884c\u8fd0\u884c\u3002"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u7236"),"\u961f\u5217\u59cb\u7ec8\u4f7f\u7528\u516c\u5e73\u7b56\u7565\u5bf9\u5b50\u961f\u5217\u8fdb\u884c\u6392\u5e8f\u3002"),(0,a.kt)("p",null,"\u8003\u8651\u5b50\u961f\u5217\u7684\u76f8\u5bf9\u4f18\u5148\u7ea7\uff08\u5728",(0,a.kt)("em",{parentName:"p"},"\u7236"),"\u961f\u5217\u6392\u5e8f\u7684\u60c5\u51b5\u4e0b\uff09\u548c\u5e94\u7528\u7a0b\u5e8f\u7684\u76f8\u5bf9\u4f18\u5148\u7ea7\uff08\u5728",(0,a.kt)("em",{parentName:"p"},"\u53f6\u5b50"),"\u961f\u5217\u6392\u5e8f\u7684\u60c5\u51b5\u4e0b\uff09\u3002\n\u8981\u5728\u8c03\u5ea6\u65f6\u5ffd\u7565\u5e94\u7528\u7a0b\u5e8f\u548c\u961f\u5217\u4f18\u5148\u7ea7\uff0c\u8bf7\u5c06\u961f\u5217\u5c5e\u6027",(0,a.kt)("inlineCode",{parentName:"p"},"application.sort.priority"),"\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"disabled"),"\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u914d\u7f6e\u6761\u76ee\u5c06\u5e94\u7528\u7a0b\u5e8f\u6392\u5e8f\u7b56\u7565\u8bbe\u7f6e\u4e3aFIFO\uff0c\u9002\u7528\u4e8e\u961f\u5217",(0,a.kt)("inlineCode",{parentName:"p"},"root.sandbox"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: default\n    queues:\n    - name: root\n      queues:\n      - name: sandbox\n        properties:\n          application.sort.policy: fifo\n")),(0,a.kt)("p",null,"\u4ec5\u8003\u8651\u5177\u6709\u672a\u5904\u7406\u8bf7\u6c42\u7684\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u8c03\u5ea6\u3002\n\u5728\u6392\u5e8f\u5e94\u7528\u7a0b\u5e8f",(0,a.kt)("em",{parentName:"p"},"\u65f6"),"\u5e94\u7528\u7b5b\u9009\u5668\u4ee5\u79fb\u9664\u6240\u6709\u6ca1\u6709\u672a\u5904\u7406\u8bf7\u6c42\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,a.kt)("h3",{id:"fifosortpolicy"},"FifoSortPolicy"),(0,a.kt)("p",null,"\u7b80\u77ed\u63cf\u8ff0\uff1a\u5148\u8fdb\u5148\u51fa\uff0c\u57fa\u4e8e\u5e94\u7528\u7a0b\u5e8f\u521b\u5efa\u65f6\u95f4\u3002 "),(0,a.kt)("p",null,"\u914d\u7f6e\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"fifo"),"\uff08\u9ed8\u8ba4\uff09"),(0,a.kt)("p",null,"\u5728\u6392\u5e8f\u4e4b\u524d\uff0c\u9700\u8981\u8fc7\u6ee4\u5e94\u7528\u7a0b\u5e8f\uff0c\u5e76\u4e14\u5fc5\u987b\u6709\u6302\u8d77(pending)\u7684\u8d44\u6e90\u8bf7\u6c42\u3002"),(0,a.kt)("p",null,"\u7ecf\u8fc7\u7b5b\u9009\u540e\uff0c\u5e94\u7528\u7a0b\u5e8f\u5c06\u6839\u636e\u521b\u5efa\u65f6\u95f4\u6233\u8fdb\u884c\u6392\u5e8f\uff0c\u4e0d\u4f1a\u4f7f\u7528\u5176\u4ed6\u8fc7\u6ee4\u3002\n\u7531\u4e8e\u7cfb\u7edf\u4ec5\u5728\u9501\u5b9a\u72b6\u6001\u4e0b\u6dfb\u52a0\u5e94\u7528\u7a0b\u5e8f\uff0c\u56e0\u6b64\u4e0d\u53ef\u80fd\u6709\u4e24\u4e2a\u5177\u6709\u5b8c\u5168\u76f8\u540c\u65f6\u95f4\u6233\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,a.kt)("p",null,"\u7ed3\u679c\uff0c\u6700\u65e9\u7684\u8bf7\u6c42\u8d44\u6e90\u7684\u5e94\u7528\u7a0b\u5e8f\u83b7\u5f97\u8d44\u6e90\u3002\n\u8f83\u665a\u8bf7\u6c42\u7684\u5e94\u7528\u7a0b\u5e8f\u5c06\u5728\u6ee1\u8db3\u4e4b\u524d\u5e94\u7528\u7a0b\u5e8f\u5f53\u524d\u6240\u6709\u8bf7\u6c42\u4e4b\u540e\u83b7\u5f97\u8d44\u6e90\u3002"),(0,a.kt)("h3",{id:"fairsortpolicy"},"FairSortPolicy"),(0,a.kt)("p",null,"\u7b80\u77ed\u63cf\u8ff0\uff1a\u57fa\u4e8e\u8d44\u6e90\u5229\u7528\u7387\u516c\u5e73\u6027\u6392\u5e8f\u3002"),(0,a.kt)("p",null,"\u914d\u7f6e\u503c\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"fair")),(0,a.kt)("p",null,"\u5728\u6392\u5e8f\u4e4b\u524d\uff0c\u9700\u8981\u8fc7\u6ee4\u5e94\u7528\u7a0b\u5e8f\uff0c\u5e76\u4e14\u5fc5\u987b\u6709\u6302\u8d77(pending)\u7684\u8d44\u6e90\u8bf7\u6c42\u3002"),(0,a.kt)("p",null,"\u7ecf\u8fc7\u7b5b\u9009\u540e\uff0c\u5269\u4e0b\u7684\u5e94\u7528\u7a0b\u5e8f\u5c06\u6839\u636e\u4f7f\u7528\u60c5\u51b5\u8fdb\u884c\u6392\u5e8f\u3002\n\u5e94\u7528\u7a0b\u5e8f\u7684\u4f7f\u7528\u60c5\u51b5\u662f\u6307\u5e94\u7528\u7a0b\u5e8f\u6240\u6709\u5df2\u786e\u8ba4\u548c\u672a\u786e\u8ba4\u7684\u5206\u914d\u3002\n\u8ba1\u7b97\u4f7f\u7528\u60c5\u51b5\u65f6\uff0c\u5c06\u8003\u8651\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5b9a\u4e49\u7684\u6240\u6709\u8d44\u6e90\u3002"),(0,a.kt)("p",null,"\u8fbe\u5230\u7684\u6548\u679c\u662f\u8d44\u6e90\u76f8\u5bf9\u5e73\u5747\u5206\u914d\u7ed9\u6240\u6709\u8bf7\u6c42\u8d44\u6e90\u7684\u5e94\u7528\u7a0b\u5e8f"),(0,a.kt)("h3",{id:"stateawarepolicy"},"StateAwarePolicy"),(0,a.kt)("p",null,"\u7b80\u77ed\u63cf\u8ff0\uff1a\u9650\u5236\u540c\u4e00\u65f6\u95f4\u53ea\u6709\u4e00\u4e2a\u4e3a Starting \u6216 Accepted \u72b6\u6001\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,a.kt)("p",null,"\u914d\u7f6e\u503c\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"stateaware")),(0,a.kt)("p",null,"\u6b64\u6392\u5e8f\u7b56\u7565\u9700\u8981\u4e86\u89e3\u5e94\u7528\u7a0b\u5e8f\u72b6\u6001\u3002\n\u5e94\u7528\u7a0b\u5e8f\u72b6\u6001\u5728",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/docs/design/scheduler_object_states#application-state"},"\u5e94\u7528\u7a0b\u5e8f\u72b6\u6001"),"\u6587\u6863\u4e2d\u8fdb\u884c\u4e86\u63cf\u8ff0\u3002"),(0,a.kt)("p",null,"\u5728\u5bf9\u6240\u6709\u6392\u961f\u7684\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u6392\u5e8f\u4e4b\u524d\uff0c\u5c06\u5e94\u7528\u4ee5\u4e0b\u8fc7\u6ee4\u5668\uff1a\n\u7b2c\u4e00\u4e2a\u8fc7\u6ee4\u5668\u57fa\u4e8e\u5e94\u7528\u7a0b\u5e8f\u72b6\u6001\u3002\n\u4ee5\u4e0b\u5e94\u7528\u7a0b\u5e8f\u901a\u8fc7\u8fc7\u6ee4\u5668\u5e76\u751f\u6210\u7b2c\u4e00\u4e2a\u4e2d\u95f4\u5217\u8868\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5904\u4e8e ",(0,a.kt)("em",{parentName:"li"},"running")," \u72b6\u6001\u7684\u6240\u6709\u5e94\u7528\u7a0b\u5e8f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"\u4e00\u4e2a"),"\uff081\uff09\u5904\u4e8e ",(0,a.kt)("em",{parentName:"li"},"starting")," \u72b6\u6001\u7684\u5e94\u7528\u7a0b\u5e8f"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c",(0,a.kt)("em",{parentName:"li"},"\u6ca1\u6709"),"\u5904\u4e8e ",(0,a.kt)("em",{parentName:"li"},"starting")," \u72b6\u6001\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u5219\u6dfb\u52a0 ",(0,a.kt)("em",{parentName:"li"},"\u4e00\u4e2a"),"\uff081\uff09\u5904\u4e8e ",(0,a.kt)("em",{parentName:"li"},"accepted")," \u72b6\u6001\u7684\u5e94\u7528\u7a0b\u5e8f")),(0,a.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u8fc7\u6ee4\u5668\u5c06\u7b2c\u4e00\u4e2a\u8fc7\u6ee4\u5668\u7684\u7ed3\u679c\u4f5c\u4e3a\u8f93\u5165\u3002\n\u518d\u6b21\u8fc7\u6ee4\u521d\u6b65\u5217\u8868\uff1a\u5220\u9664\u6240\u6709",(0,a.kt)("em",{parentName:"p"},"\u6ca1\u6709"),"\u6302\u8d77(pending)\u8bf7\u6c42\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,a.kt)("p",null,"\u6839\u636e\u72b6\u6001\u548c\u6302\u8d77(pending)\u8bf7\u6c42\u8fdb\u884c\u8fc7\u6ee4\u540e\uff0c\u5269\u4f59\u7684\u5e94\u7528\u7a0b\u5e8f\u5c06\u8fdb\u884c\u6392\u5e8f\u3002\n\u56e0\u6b64\uff0c\u6700\u7ec8\u5217\u8868\u5c06\u4f7f\u7528\u5269\u4f59\u7684\u5e94\u7528\u7a0b\u5e8f\u4e24\u6b21\u8fc7\u6ee4\u5e76\u6309\u521b\u5efa\u65f6\u95f4\u6392\u5e8f\u3002"),(0,a.kt)("p",null,"\u56de\u987e\u4e0b ",(0,a.kt)("em",{parentName:"p"},"Starting")," \u548c ",(0,a.kt)("em",{parentName:"p"},"Accepted")," \u72b6\u6001\u7684\u4ea4\u4e92\uff1a\n\u53ea\u6709\u5728\u6ca1\u6709\u5904\u4e8e ",(0,a.kt)("em",{parentName:"p"},"Starting")," \u72b6\u6001\u7684\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u624d\u4f1a\u6dfb\u52a0\u5904\u4e8e ",(0,a.kt)("em",{parentName:"p"},"Accepted")," \u72b6\u6001\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\n\u5904\u4e8e ",(0,a.kt)("em",{parentName:"p"},"Starting")," \u72b6\u6001\u7684\u5e94\u7528\u7a0b\u5e8f\u4e0d\u5fc5\u6709\u6302\u8d77(pending)\u8bf7\u6c42\u3002\n\u4efb\u4f55\u5904\u4e8e ",(0,a.kt)("em",{parentName:"p"},"Starting")," \u72b6\u6001\u7684\u5e94\u7528\u7a0b\u5e8f\u90fd\u5c06\u9632\u6b62 ",(0,a.kt)("em",{parentName:"p"},"Accepted")," \u5e94\u7528\u7a0b\u5e8f\u88ab\u6dfb\u52a0\u5230\u5df2\u8fc7\u6ee4\u7684\u5217\u8868\u4e2d\u3002"),(0,a.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u8bbe\u8ba1\u6587\u6863\u4e2d\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/docs/design/state_aware_scheduling#example-run"},"\u793a\u4f8b")," \u8fd0\u884c\u3002"),(0,a.kt)("p",null,"\u8fbe\u5230\u7684\u6548\u679c\u662f\uff0c\u5df2\u7ecf\u5728\u8fd0\u884c\u7684\u5e94\u7528\u7a0b\u5e8f\u8bb2\u4f18\u5148\u5f97\u5230\u8d44\u6e90\u3002\n\u5728\u6240\u6709\u5df2\u8fd0\u884c\u7684\u5e94\u7528\u7a0b\u5e8f\u540e\uff0c\u9010\u4e00\u8c03\u5ea6\u65b0\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,a.kt)("h2",{id:"\u8282\u70b9\u6392\u5e8f"},"\u8282\u70b9\u6392\u5e8f"),(0,a.kt)("p",null,"\u8282\u70b9\u6392\u5e8f\u7b56\u7565\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u4e3a\u6bcf\u4e2a\u5206\u533a\u8bbe\u7f6e\uff0c\u4e0d\u540c\u7684\u5206\u533a\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u7b56\u7565\u3002\n\u4ee5\u4e0b\u914d\u7f6e\u9879\u5c06\u5206\u533a",(0,a.kt)("inlineCode",{parentName:"p"},"default"),"\u7684\u8282\u70b9\u6392\u5e8f\u7b56\u7565\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"fair"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: default\n    nodesortpolicy:\n        type: fair\n")),(0,a.kt)("h3",{id:"fairnesspolicy"},"FairnessPolicy"),(0,a.kt)("p",null,"\u7b80\u8981\u63cf\u8ff0\uff1a\u6309\u53ef\u7528\u8d44\u6e90\u6392\u5e8f\uff0c\u6309\u964d\u5e8f\u6392\u5217"),(0,a.kt)("p",null,"\u914d\u7f6e\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"fair")," (\u9ed8\u8ba4\u503c)"),(0,a.kt)("p",null,"\u884c\u4e3a\uff1a\n\u6309\u53ef\u7528\u8d44\u6e90\u7684\u6570\u91cf\u5bf9\u8282\u70b9\u5217\u8868\u8fdb\u884c\u6392\u5e8f\uff0c\u4f7f\u5177\u6709\u6700\u9ad8\u53ef\u7528\u8d44\u6e90\u91cf\u7684\u8282\u70b9\u6392\u5728\u5217\u8868\u7684\u7b2c\u4e00\u4f4d\u3002\n\u8ba1\u7b97\u4f7f\u7528\u60c5\u51b5\u65f6\uff0c\u5c06\u8003\u8651\u8282\u70b9\u4e0a\u5b9a\u4e49\u7684\u6240\u6709\u8d44\u6e90\u3002\n\u5bf9\u4e8e\u8282\u70b9\u7684\u76f8\u540c\u7c7b\u578b\u8d44\u6e90\u8fdb\u884c\u6bd4\u8f83\u3002"),(0,a.kt)("p",null,"\u8fd9\u5c06\u5bfc\u81f4\u8003\u8651\u53ef\u7528\u6027\u6700\u4f4e\u7684\u8282\u70b9\u9996\u5148\u8fdb\u884c\u65b0\u5206\u914d\u7684\u5206\u914d\uff0c\u4ece\u800c\u5728\u6240\u6709\u53ef\u7528\u8282\u70b9\u4e0a\u5206\u6563\u5206\u914d\u3002\n\u8fd9\u5c06\u5bfc\u81f4\u6bcf\u4e2a\u53ef\u7528\u8282\u70b9\u7684\u6574\u4f53\u5229\u7528\u7387\u964d\u4f4e\uff0c\u9664\u975e\u6574\u4e2a\u73af\u5883\u7684\u5229\u7528\u7387\u975e\u5e38\u9ad8\u3002\n\u5c06\u6240\u6709\u8282\u70b9\u7684\u8d1f\u8f7d\u4fdd\u6301\u5728\u76f8\u4f3c\u6c34\u5e73\u6709\u52a9\u4e8e\u3002\n\u5728\u81ea\u52a8\u7f29\u653e\u6dfb\u52a0\u65b0\u8282\u70b9\u7684\u73af\u5883\u4e2d\uff0c\u8fd9\u53ef\u80fd\u4f1a\u89e6\u53d1\u610f\u5916\u7684\u81ea\u52a8\u7f29\u653e\u8bf7\u6c42\u3002   "),(0,a.kt)("h3",{id:"binpackingpolicy"},"BinPackingPolicy"),(0,a.kt)("p",null,"\u7b80\u8981\u63cf\u8ff0\uff1a\u6309\u53ef\u7528\u8d44\u6e90\u6392\u5e8f\uff0c\u6309\u5347\u5e8f\u6392\u5217"),(0,a.kt)("p",null,"\u914d\u7f6e\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"binpacking")),(0,a.kt)("p",null,"\u884c\u4e3a\uff1a\n\u6309\u53ef\u7528\u8d44\u6e90\u7684\u6570\u91cf\u5bf9\u8282\u70b9\u5217\u8868\u8fdb\u884c\u6392\u5e8f\uff0c\u4f7f\u5177\u6709\u6700\u4f4e\u53ef\u7528\u8d44\u6e90\u91cf\u7684\u8282\u70b9\u6392\u5728\u5217\u8868\u7684\u7b2c\u4e00\u4f4d\u3002\n\u8ba1\u7b97\u4f7f\u7528\u60c5\u51b5\u65f6\uff0c\u5c06\u8003\u8651\u8282\u70b9\u4e0a\u5b9a\u4e49\u7684\u6240\u6709\u8d44\u6e90\u3002\n\u5bf9\u4e8e\u8282\u70b9\u7684\u76f8\u540c\u7c7b\u578b\u8d44\u6e90\u8fdb\u884c\u6bd4\u8f83\u3002"),(0,a.kt)("p",null,"\u8fd9\u5c06\u5bfc\u81f4\u8003\u8651\u53ef\u7528\u6027\u6700\u9ad8\u7684\u8282\u70b9\u9996\u5148\u8fdb\u884c\u65b0\u5206\u914d\u7684\u5206\u914d\uff0c\u4ece\u800c\u4f7f\u5c11\u91cf\u8282\u70b9\u7684\u5229\u7528\u7387\u66f4\u9ad8\uff0c\u66f4\u9002\u5408\u4e91\u90e8\u7f72\u3002"),(0,a.kt)("h2",{id:"\u8d44\u6e90\u52a0\u6743"},"\u8d44\u6e90\u52a0\u6743"),(0,a.kt)("p",null,"\u8282\u70b9\u6392\u5e8f\u7b56\u7565\u53ef\u80fd\u4f7f\u7528\u8282\u70b9\u5229\u7528\u7387\u6765\u786e\u5b9a\u987a\u5e8f\u3002\n\u56e0\u4e3a\u8282\u70b9\u53ef\u4ee5\u5177\u6709\u591a\u4e2a\u552f\u4e00\u7684\u8d44\u6e90\u7c7b\u578b\uff0c\u6240\u4ee5\u8282\u70b9\u7684\u5229\u7528\u7387\u662f\u7531\u5176\u5404\u4e2a\u8d44\u6e90\u7c7b\u578b\u7684\u52a0\u6743\u5e73\u5747\u503c\u786e\u5b9a\u7684\u3002\n\u8d44\u6e90\u52a0\u6743\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"nodesortpolicy"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"resourceweights"),"\u90e8\u5206\u8fdb\u884c\u81ea\u5b9a\u4e49\u3002\n\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"resourceweights"),"\u4e0d\u5b58\u5728\u6216\u4e3a\u7a7a\uff0c\u5219\u9ed8\u8ba4\u914d\u7f6e\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"vcore"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"memory"),"\u7684\u6743\u91cd\u8bbe\u7f6e\u4e3a\u76f8\u7b49\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"1.0"),"\u3002\n\u6240\u6709\u5176\u4ed6\u8d44\u6e90\u7c7b\u578b\u90fd\u5c06\u88ab\u5ffd\u7565\u3002\n\u53ea\u6709\u660e\u786e\u63d0\u5230\u7684\u8d44\u6e90\u7c7b\u578b\u624d\u4f1a\u5177\u6709\u6743\u91cd\u3002"),(0,a.kt)("p",null,"YuniKorn\u5728\u5185\u90e8\u8ddf\u8e2aCPU\u8d44\u6e90\u4f5c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"vcore"),"\u8d44\u6e90\u7c7b\u578b\u3002\n\u8fd9\u5c06\u6620\u5c04\u5230Kubernetes\u8d44\u6e90\u7c7b\u578b",(0,a.kt)("inlineCode",{parentName:"p"},"cpu"),"\u3002\n\u9664",(0,a.kt)("inlineCode",{parentName:"p"},"vcore"),"\u548cmemory\u4e4b\u5916\uff0c\u6240\u6709\u5176\u4ed6\u8d44\u6e90\u7c7b\u578b\u5728YuniKorn\u548cKubernetes\u4e4b\u95f4\u5177\u6709\u4e00\u81f4\u7684\u547d\u540d\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u5728\u9ed8\u8ba4\u914d\u7f6e\u4e2d\uff0c\u5982\u679c\u8282\u70b9\u7684CPU\u548c\u5185\u5b58\u5206\u522b\u5206\u914d\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"90\uff05"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"50\uff05"),"\uff0c\u5219\u8be5\u8282\u70b9\u5c06\u88ab\u89c6\u4e3a\u5df2\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"70\uff05"),"\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u914d\u7f6e\u6761\u76ee\u4e3a\u5206\u533adefault\u8bbe\u7f6e\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"vcore"),"\u6743\u91cd\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"4.0"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"memory"),"\u6743\u91cd\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"1.0"),"\u3002\n\u8fd9\u5c06\u4f7fCPU\u4f7f\u7528\u7684\u6743\u91cd\u6bd4\u5185\u5b58\u4f7f\u7528\u9ad8\u56db\u500d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: default\n    nodesortpolicy:\n      type: fair\n      resourceweights:\n        vcore: 4.0\n        memory: 1.0\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u6b64\u914d\u7f6e\uff0c\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u5982\u679c\u8282\u70b9\u7684CPU\u548c\u5185\u5b58\u5206\u522b\u5206\u914d\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"90\uff05"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"50\uff05"),"\uff0c\u5219\u8be5\u8282\u70b9\u5c06\u88ab\u89c6\u4e3a\u5df2\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"82\uff05"),"\u3002"),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u6743\u91cd\u662f\u76f8\u5bf9\u4e8e\u5f7c\u6b64\u7684\uff0c\u56e0\u6b64\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"p"},"{4.0\uff0c1.0}"),"\u7684\u6743\u91cd\u7b49\u6548\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"{1.0\uff0c0.25}"),"\u3002\u4e0d\u5141\u8bb8\u8d1f\u6743\u91cd\u3002"),(0,a.kt)("h2",{id:"\u8bf7\u6c42\u6392\u5e8f"},"\u8bf7\u6c42\u6392\u5e8f"),(0,a.kt)("p",null,"\u5f53\u524d\u4ec5\u6709\u4e00\u79cd\u7b56\u7565\u53ef\u7528\u4e8e\u5728\u5e94\u7528\u7a0b\u5e8f\u5185\u5bf9\u8bf7\u6c42\u8fdb\u884c\u6392\u5e8f\u3002\n\u6b64\u7b56\u7565\u4e0d\u53ef\u914d\u7f6e\u3002\n\u4ec5\u53ef\u4ee5\u57fa\u4e8e\u8bf7\u6c42\u7684\u4f18\u5148\u7ea7\u5bf9\u8bf7\u6c42\u8fdb\u884c\u6392\u5e8f\u3002\n\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u4e2d\u6709\u591a\u4e2a\u5177\u6709\u76f8\u540c\u4f18\u5148\u7ea7\u7684\u8bf7\u6c42\uff0c\u5219\u8bf7\u6c42\u7684\u987a\u5e8f\u672a\u786e\u5b9a\u3002\n\u8fd9\u610f\u5473\u7740\u5177\u6709\u76f8\u540c\u4f18\u5148\u7ea7\u7684\u8bf7\u6c42\u7684\u987a\u5e8f\u53ef\u80fd\u4f1a\u5728\u8fd0\u884c\u4e4b\u95f4\u6539\u53d8\u3002"))}d.isMDXComponent=!0}}]);