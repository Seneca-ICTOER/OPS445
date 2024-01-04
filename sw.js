(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"26ef0594900c9fcb3214d527c487729e","url":"404.html"},{"revision":"ae7cbba1b0b9dbc8e46b938acf7496d3","url":"A-Labs/lab1.html"},{"revision":"efa4e10384b7296c46d8beec5ed19954","url":"A-Labs/lab2.html"},{"revision":"309dbdb5a168416c23825379462a428f","url":"A-Labs/lab3.html"},{"revision":"a02046a7926cf347d449db839a5e0917","url":"A-Labs/lab4.html"},{"revision":"00cd665d1224dda920851b2a8da6b134","url":"A-Labs/lab5.html"},{"revision":"26c2c1ae40284bfdb24094e452f7b628","url":"A-Labs/lab6.html"},{"revision":"7728ced37327b6cf7223a17aae8ef728","url":"A-Labs/lab7.html"},{"revision":"c70845a127a916b643852b2b191c668c","url":"A-Labs/lab8.html"},{"revision":"78a38efde468f4ffbab502c537dac76a","url":"A-Labs/lab9.html"},{"revision":"4a30e0992a6a9401f7f666bf4fc5df74","url":"assets/css/styles.099fe1a9.css"},{"revision":"6b2231caa387bbc1bee44836e8f21428","url":"assets/js/131.a5c32f64.js"},{"revision":"939c0735c8c1071341ebcdab1006e197","url":"assets/js/17896441.dc7e8dbe.js"},{"revision":"47ee7b281cc208ea0e7749dd4e78b1f9","url":"assets/js/1be78505.5a448879.js"},{"revision":"0dfa04dcce40791352bb93fc71183129","url":"assets/js/283.bb40f6eb.js"},{"revision":"82b2c257e90038a376bf0eaa09981538","url":"assets/js/30eb2287.bb6783af.js"},{"revision":"195fb2044203776061deca89e0923c83","url":"assets/js/4330e482.886feeb5.js"},{"revision":"d8d15fb152c69cf276db4259a102e72e","url":"assets/js/539.2ac5db46.js"},{"revision":"0688a63a20b47f7223267bd86cafae9a","url":"assets/js/5b25c642.6258f9b7.js"},{"revision":"e60e5fdae67fa445492dc89e834a4659","url":"assets/js/5d94b711.be441221.js"},{"revision":"91bc8a6a051add0d865165791eb8122d","url":"assets/js/5f827bca.9f30fa1c.js"},{"revision":"86d216034de98acfa4ffe3e214f70a02","url":"assets/js/61c5f690.f66e0206.js"},{"revision":"7112768b77c4a43a2aff731138874b48","url":"assets/js/66689c68.40fe2033.js"},{"revision":"d3f23150fd26897d76675952009408f0","url":"assets/js/781f504e.ae4f8611.js"},{"revision":"600423afce74b492b5b721800e81d14f","url":"assets/js/78b6b014.04506a16.js"},{"revision":"51a7b5dbb9cd5654deee04f015f10a2f","url":"assets/js/8661af7e.6a7428d2.js"},{"revision":"9ae6576cf3e2f919349aadb2b7a98a8f","url":"assets/js/87ed921c.6f7db910.js"},{"revision":"3804ead007884fc8294f7f19e2113205","url":"assets/js/8fadf213.3e217371.js"},{"revision":"99b9ac033fa1c1e201557595f2928d6d","url":"assets/js/935f2afb.45fd12f1.js"},{"revision":"31a3a33a70c3fa7c8413f995f186875f","url":"assets/js/972.2a0cfec8.js"},{"revision":"5fb9245fc9e0a1fc623678ae51e4e7b1","url":"assets/js/9af68f33.675ec74d.js"},{"revision":"fa99e1613b6c505cf174311b34ca8a11","url":"assets/js/b5a834d3.2553b315.js"},{"revision":"ab9711f3e60c7ae5bdad4bd9935a0cfe","url":"assets/js/b9232272.70d90c9c.js"},{"revision":"52bf11442d13089109a997e898e78681","url":"assets/js/c0e20c00.5f6f45c3.js"},{"revision":"e1324146d84ece0c66c8ab5ce261772c","url":"assets/js/cf5422e2.2f4bd652.js"},{"revision":"f9d2904d63217c8dfe02a794451a7a08","url":"assets/js/d909226c.b9c0ac30.js"},{"revision":"60e791493a2de1f482f0a705eec31d0e","url":"assets/js/ea934244.1aa4074e.js"},{"revision":"f2d1316fcc7e6155c6fadd9fadee34ac","url":"assets/js/eb6a5da1.8cf2e886.js"},{"revision":"a0ca96c1c8d697d055bd03fcae305537","url":"assets/js/ebee8391.ba47c19b.js"},{"revision":"0e40cb20f0a771588513751a0a0ac6e7","url":"assets/js/main.15bbecc1.js"},{"revision":"0d61b149e95e08e2d4cbae6a1a0ee936","url":"assets/js/runtime~main.2d62ef5e.js"},{"revision":"5940b278839db7eb5a2d95c4dc3b328b","url":"B-Assignments/assignment1.html"},{"revision":"c6cbfada270179b71a8707a8987c1715","url":"B-Assignments/assignment1naanbb.html"},{"revision":"565e47f5d7e9ac679c10426c22196148","url":"B-Assignments/assignment1ncc.html"},{"revision":"c86fcfe74d81dd10b2ae5a0dce5f1457","url":"B-Assignments/assignment2.html"},{"revision":"5717ffa7a3be6f1cef1283d26aa541a5","url":"B-Assignments/assignment2naancc.html"},{"revision":"6f973c3cc6f37d9d6f2228274bdf0548","url":"B-Assignments/online-assignment2.html"},{"revision":"d972fe36939fd880834bdc933bd4584f","url":"C-ExtraResources/ansible-setup.html"},{"revision":"b6c20fe58bca8b63f272b68031298a32","url":"C-ExtraResources/introduction-to-yaml.html"},{"revision":"b5d85e25817f002d3d8bcecde6415e47","url":"C-ExtraResources/sample-ansible-hosts.html"},{"revision":"4e8e010a9660d89731b127e3deec1a0d","url":"index.html"},{"revision":"2524df02c6e551be5aef857403777080","url":"manifest.json"},{"revision":"4ab2b9d5f47cbcbed5b8a639e4bc8af8","url":"weekly-schedule.html"},{"revision":"d002bf43a5195dae5527e217bdc4aa93","url":"assets/images/Automatewithpython-d0734102b7aed12b6cbd2b23155a19db.png"},{"revision":"b82033fcd5f7477f0738581a2679ddd7","url":"assets/images/Scaling-formula-4a1822d03e1edddac625e98ced3f1c17.png"},{"revision":"ce22eba7b55840496b27089f4163963c","url":"assets/images/Scaling-formula-min0-242c648000d51852ab094bfbe4b69e1c.png"},{"revision":"8f8a74fba512392e72e1312da661b616","url":"assets/images/Thinkpython-064a877fdca22412959862569f35af26.png"},{"revision":"d002bf43a5195dae5527e217bdc4aa93","url":"img/Automatewithpython.png"},{"revision":"771ce94ec5015fbc7ad49b8f4d699638","url":"img/Centos_ssh.png"},{"revision":"d7e3179946ffbe47a9c75841554ff91f","url":"img/commit-changes.png"},{"revision":"972a5a5d918a2c2a708e929c2ee801cc","url":"img/commit-dialog.png"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"bbde74a9c97571a7c870d03d9d05beb8","url":"img/Eric_brauer.jpg"},{"revision":"ef2266bfb84465c731756b58cde0afb8","url":"img/favicon.ico"},{"revision":"7685ba4492fa1eb5044c77f38028f109","url":"img/github-actions-extension.png"},{"revision":"bdf6c435a6b835dff58f3938c7040c14","url":"img/github-actions.png"},{"revision":"5b54abe425c5d5e06a722956d91e901e","url":"img/github-check_change.png"},{"revision":"afe774d7fc75aad0ef523c8a96724076","url":"img/github-codespace-2.png"},{"revision":"4ce3488bede3244a0d5aef1c87a601a5","url":"img/github-codespace-source_control.png"},{"revision":"5e73303160820994caca80683d5dddac","url":"img/github-codespace.png"},{"revision":"951098320b22ccff79c540ada9c08fa3","url":"img/github-error_pass.png"},{"revision":"481afa959ff562582cda513a3635a072","url":"img/github-error.png"},{"revision":"ae4c1bbce0b6578dc4038c91247c492b","url":"img/github-error2.png"},{"revision":"dc6528b7f1d0fed414a50e056608574d","url":"img/github-error3.png"},{"revision":"a21c8c59f0853557677c2c4789fffa27","url":"img/github-highlighted_files-unedited.png"},{"revision":"53a9e32d807abf39af5c54b544679f22","url":"img/github-highlighted_files.png"},{"revision":"8e1ff443c6e9db1cdaf9fc97ac36341b","url":"img/github-pr_and_issues-extension.png"},{"revision":"2f3e44e1b18c7af8f144c976fb48087b","url":"img/github-prettier-extension.png"},{"revision":"d4f552517d661c60bd05073a96a1dd08","url":"img/github-repo.png"},{"revision":"22c6eb8088b86099d5a78b5a13f7b24d","url":"img/logo-dark.svg"},{"revision":"8817e00103e8837d17c2758b0ce25c41","url":"img/logo.svg"},{"revision":"2e1cb1ba37fc5ae886ea57248bdb60bd","url":"img/pwa/icon-192x192.png"},{"revision":"a0f8ed72d3d3489353a57a03aeac9b0d","url":"img/pwa/icon-256x256.png"},{"revision":"ab9ed19e2716b5c233d6132d66204d53","url":"img/pwa/icon-384x384.png"},{"revision":"b71acc5b894ccfac0c22eb39a590f2a0","url":"img/pwa/icon-512x512.png"},{"revision":"ce22eba7b55840496b27089f4163963c","url":"img/Scaling-formula-min0.png"},{"revision":"b82033fcd5f7477f0738581a2679ddd7","url":"img/Scaling-formula.png"},{"revision":"8f8a74fba512392e72e1312da661b616","url":"img/Thinkpython.png"},{"revision":"b9d9189ed8f8dd58e70d9f8b3f693b3e","url":"img/tutorial/docsVersionDropdown.png"},{"revision":"c14bff79aafafca0957ccc34ee026e2c","url":"img/tutorial/localeDropdown.png"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"},{"revision":"a7651195e5149cb6d1b6b4ccb14ea70b","url":"img/vscode-extensions.png"},{"revision":"5b25494591002e58af37b866714f89f7","url":"img/vscode-file_explorer.png"},{"revision":"44c0fac4733884f86d2e3bb02dc3a085","url":"img/vscode-source_control.png"},{"revision":"a53207c340a304b3dc1ba9292703e117","url":"img/Window10_ssh.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();