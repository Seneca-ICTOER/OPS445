"use strict";(self.webpackChunkOPS445=self.webpackChunkOPS445||[]).push([[57],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return b}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),b=s,f=m["".concat(l,".").concat(b)]||m[b]||u[b]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function b(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2503:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var n=r(3117),s=(r(7294),r(3905));const o={id:"sample-ansible-hosts.md",title:"Sample Ansible Hosts",sidebar_position:2,description:"Sample Ansible Hosts for Lab 9"},a="Sample Ansible Hosts file",i={unversionedId:"C-ExtraResources/sample-ansible-hosts.md",id:"C-ExtraResources/sample-ansible-hosts.md",title:"Sample Ansible Hosts",description:"Sample Ansible Hosts for Lab 9",source:"@site/docs/C-ExtraResources/sample-ansible-hosts.md",sourceDirName:"C-ExtraResources",slug:"/C-ExtraResources/sample-ansible-hosts.md",permalink:"/OPS445/C-ExtraResources/sample-ansible-hosts.md",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OPS445/tree/main/docs/C-ExtraResources/sample-ansible-hosts.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"sample-ansible-hosts.md",title:"Sample Ansible Hosts",sidebar_position:2,description:"Sample Ansible Hosts for Lab 9"},sidebar:"courseNotesSidebar",previous:{title:"Ansible Setup",permalink:"/OPS445/C-ExtraResources/ansible-setup"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sample-ansible-hosts-file"},"Sample Ansible Hosts file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"...\n[ops445]\nvmlab ansible_host=myvmlab.senecacollege.ca ansible_port=7890\nmyvm ansible_host=myvmlab.senecacollege.ca ansible_port=7654\n...\n")))}u.isMDXComponent=!0}}]);