const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/entries/pages_index.riCqzeUN.js","assets/static/app_generated_index-6937cd5a.Cckci7cC.css"])))=>i.map(i=>d[i]);
function me(e){return Array.from(new Set(e))}const Le="0.4.210",K={projectName:"Vike",projectVersion:Le},te=`_${K.projectName.toLowerCase()}`;function R(e,t){const n=We();return n[e]=n[e]||t}function We(){return globalThis[te]=globalThis[te]||{}}const E=new Proxy({},{get:(e,t)=>n=>t==="code"?`\`${n}\``:t==="string"?`'${n}'`:n}),$=R("assertSingleInstance.ts",{instances:[],alreadyLogged:new Set}),Ae="Client runtime of both Server Routing and Client Routing loaded https://vike.dev/client-runtimes-conflict",ye="Client runtime loaded twice https://vike.dev/client-runtime-duplicated";function Ee(){{const e=me($.instances);Ve(e.length<=1,`vike@${E.bold(e[0])} and vike@${E.bold(e[1])} loaded but only one version should be loaded`)}$.checkSingleInstance&&$.instances.length>1&&N(!1,ye,{onlyOnce:!0,showStackTrace:!0})}function ze(e){N($.isClientRouting!==!0,Ae,{onlyOnce:!0,showStackTrace:!0}),N($.isClientRouting===void 0,ye,{onlyOnce:!0,showStackTrace:!0}),$.isClientRouting=!1,$.checkSingleInstance=!0,Ee()}function De(){$.instances.push(K.projectVersion),Ee()}function Ve(e,t){if(e)return;const n=`[vike][Wrong Usage] ${t}`;throw new Error(n)}function N(e,t,{onlyOnce:n,showStackTrace:r}){if(e)return;const i=`[vike][Warning] ${t}`;if(n){const{alreadyLogged:s}=$,a=n===!0?i:n;if(s.has(a))return;s.add(a)}console.warn(r?new Error(i):i)}function Ue(){return!(typeof process>"u"||!process.cwd||!process.versions||typeof process.versions.node>"u"||!process.release||process.release.name!=="node")}function A(e,t){const n=new Error(e);return Ue()&&(n.stack=He(n.stack,t)),n}function He(e,t){if(!e)return e;const n=Ne(e);let r=0;return n.filter(s=>s.includes(" (internal/")||s.includes(" (node:internal")?!1:r<t&&Be(s)?(r++,!1):!0).join(`
`)}function Be(e){return e.startsWith("    at ")}function Ne(e){return e.split(/\r?\n/)}function w(e){return typeof e=="object"&&e!==null}const v=R("utils/assert.ts",{alreadyLogged:new Set,logger(e,t){t==="info"?console.log(e):console.warn(e)},showStackTraceList:new WeakSet});De();const Ge="[vike]",Je=`[vike@${K.projectVersion}]`,z=2;function o(e,t){var a;if(e)return;const n=(()=>{if(!t)return null;const l=typeof t=="string"?t:JSON.stringify(t);return E.dim(`Debug info (for Vike maintainers; you can ignore this): ${l}`)})();let i=[`You stumbled upon a Vike bug. Go to ${E.blue("https://github.com/vikejs/vike/issues/new")} and copy-paste this error. A maintainer will fix the bug (usually within 24 hours).`,n].filter(Boolean).join(" ");i=V(i),i=D(i,"Bug"),i=U(i,!0);const s=A(i,z);throw(a=v.onBeforeLog)==null||a.call(v),s}function m(e,t,{showStackTrace:n}={}){var i;if(e)return;n=n||v.alwaysShowStackTrace,t=V(t),t=D(t,"Wrong Usage"),t=U(t);const r=A(t,z);throw n&&v.showStackTraceList.add(r),(i=v.onBeforeLog)==null||i.call(v),r}function Ye(e){return e=V(e),e=D(e,"Error"),e=U(e),A(e,z)}function T(e,t,{onlyOnce:n,showStackTrace:r}){var i;if(!e){if(r=r||v.alwaysShowStackTrace,t=V(t),t=D(t,"Warning"),t=U(t),n){const{alreadyLogged:s}=v,a=n===!0?t:n;if(s.has(a))return;s.add(a)}if((i=v.onBeforeLog)==null||i.call(v),r){const s=A(t,z);v.showStackTraceList.add(s),v.logger(s,"warn")}else v.logger(t,"warn")}}function D(e,t){let n=`[${t}]`;const r=t==="Warning"?"yellow":"red";return n=E.bold(E[r](n)),`${n}${e}`}function V(e){return e.startsWith("[")?e:` ${e}`}function U(e,t=!1){return`${t?Je:Ge}${e}`}function X(){return typeof window<"u"&&typeof window.scrollY=="number"}const ne=R("utils/assertRouterType.ts",{});function Me(){qe(ne.isClientRouting!==!0),ne.isClientRouting=!1}function qe(e){m(X(),`${E.cyan("import { something } from 'vike/client/router'")} is forbidden on the server-side`,{showStackTrace:!0}),T(e,"You shouldn't `import { something } from 'vike/client/router'` when using Server Routing. The 'vike/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` as they unnecessarily bloat your client-side bundle sizes.",{showStackTrace:!0,onlyOnce:!0})}function Se(e,t,n){return typeof e=="string"?re(e.split(""),t,n).join(""):re(e,t,n)}function re(e,t,n){const r=[];let i=t;o(i>=0&&i<=e.length);let s=e.length+n;for(o(s>=0&&s<=e.length);!(i===s||(i===e.length&&(i=0),i===s));){const a=e[i];o(a!==void 0),r.push(a),i++}return r}function Ke(e,t){o(ot(e),e),o(t.startsWith("/"));const{hashString:n,withoutHash:r}=Xe(e);o(n===null||n.startsWith("#"));const i=n===null?"":ve(n.slice(1)),{searchString:s,withoutSearch:a}=ie(r);o(s===null||s.startsWith("?"));let l="";if(s!==null)l=s;else if(e.startsWith("#")){const C=be();l=C&&ie(C).searchString||""}const c={},u={};Array.from(new URLSearchParams(l)).forEach(([C,F])=>{c[C]=F,u[C]=[...u.hasOwnProperty(C)?u[C]:[],F]});let{protocol:g,origin:h,pathnameAbsoluteWithBase:d}=Ze(a,t);const f=a.slice((h||"").length);st(e,h,f,s,n);let{pathname:p,hasBaseServer:S}=rt(d,t);const b=Pe(h,p,s,n),O=h?h.slice(g.length):null,{hostname:P,port:B}=et(O,e);return p=Qe(p),o(p.startsWith("/")),{href:b,protocol:g,hostname:P,port:B,origin:h,pathname:p,pathnameOriginal:f,hasBaseServer:S,search:c,searchAll:u,searchOriginal:s,hash:i,hashOriginal:n}}function Xe(e){const[t,...n]=e.split("#");return{hashString:["",...n].join("#")||null,withoutHash:t}}function ie(e){const[t,...n]=e.split("?");return{searchString:["",...n].join("?")||null,withoutSearch:t}}function ve(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function Qe(e){return e=e.replace(/\s+$/,""),e=e.split("/").map(t=>ve(t).split("/").join("%2F")).join("/"),e}function Ze(e,t){o(!e.includes("?")&&!e.includes("#"));{const{protocol:n,origin:r,pathname:i}=se(e);if(r)return{protocol:n,origin:r,pathnameAbsoluteWithBase:i};o(i===e)}if(e.startsWith("/"))return{protocol:null,origin:null,pathnameAbsoluteWithBase:e};{const n=be();let r;return n?r=se(n.split("?")[0].split("#")[0]).pathname:r=t,{protocol:null,origin:null,pathnameAbsoluteWithBase:nt(e,r)}}}function be(){var t;return typeof window<"u"?(t=window==null?void 0:window.document)==null?void 0:t.baseURI:void 0}function se(e){if(Ce(e)){const{protocol:t,uriWithoutProtocol:n}=we(e);o(t);const[r,...i]=n.split("/"),s=t+r;return{pathname:"/"+i.join("/"),origin:s,protocol:t}}else return{pathname:e,origin:null,protocol:null}}function et(e,t){const n={hostname:null,port:null};if(!e)return n;const r=e.split(":");if(r.length>1){const i=parseInt(r.pop(),10);o(i||i===0,t),n.port=i}return n.hostname=r.join(":"),n}function we(e){const t=":",[n,...r]=e.split(t);if(r.length===0||!/^[a-z][a-z0-9\+\-]*$/i.test(n))return{protocol:null,uriWithoutProtocol:e};let i=n+t,s=r.join(t);const a="//";return s.startsWith(a)&&(i=i+a,s=s.slice(a.length)),{protocol:i,uriWithoutProtocol:s}}function tt(e){return["ipfs://","ipns://"].includes(e)?!1:e.endsWith("://")}function nt(e,t){const n=t.split("/"),r=e.split("/");let i=t.endsWith("/");e.startsWith(".")&&n.pop();for(const a in r){const l=r[a];l==""&&a==="0"||l!="."&&(l==".."?n.pop():(i=!1,n.push(l)))}let s=n.join("/");return i&&!s.endsWith("/")&&(s+="/"),s.startsWith("/")||(s="/"+s),s}function rt(e,t){return o(e.startsWith("/")),o(it(t)),o(e.startsWith("/")),o(t.startsWith("/")),{pathname:e,hasBaseServer:!0}}function it(e){return e.startsWith("/")}function st(e,t,n,r,i){const s=Pe(t,n,r,i);o(e===s)}function Pe(e,t,n,r){return`${e||""}${t}${n||""}${r||""}`}function ot(e){return Ce(e)||e.startsWith("/")||at(e)}function at(e){return[".","?","#"].some(t=>e.startsWith(t))||e===""}function Ce(e){const{protocol:t}=we(e);return!!t&&tt(t)}function x(e,t){t&&(o(!("_isPageContextObject"in t)),Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)))}function H(e){return e instanceof Function||typeof e=="function"}function lt(e){return(t,n)=>{const r=e(t),i=e(n);if(o([!0,!1,null].includes(r)),o([!0,!1,null].includes(i)),r===i)return 0;if(r===!0||i===!1)return-1;if(i===!0||r===!1)return 1;o(!1)}}function ct(e){return lt(t=>{const n=e(t);return n===null?null:!n})}function j(e){return Array.isArray(e)}function ut(e){return j(e)&&e.every(t=>typeof t=="string")}function ft(e){return w(e)&&Object.values(e).every(t=>typeof t=="string")}function y(e,t,n){if(!w(e))return!1;if(!(t in e))return n==="undefined";if(n===void 0)return!0;const r=e[t];return n==="undefined"?r===void 0:n==="array"?j(r):n==="object"?w(r):n==="string[]"?ut(r):n==="string{}"?ft(r):n==="function"?H(r):j(n)?typeof r=="string"&&n.includes(r):n==="null"?r===null:n==="true"?r===!0:n==="false"?r===!1:typeof r===n}function dt(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const gt=e=>e!=null;function $e(e){const t=n=>`Not a posix path: ${n}`;o(e!==null,t("null")),o(typeof e=="string",t(`typeof path === ${JSON.stringify(typeof e)}`)),o(e!=="",t("(empty string)")),o(e),o(!e.includes("\\"),t(e))}const ht=["clientRouting"];function pt(e){ht.forEach(t=>{if(o(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;m(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is prohibited: remove \`export { ${t} }\` instead. (${n})`),m(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const xe=["render","clientRouting","prerender","doNotPrerender"];function mt(e,t){m(!xe.includes(e),`${t} has \`export default { ${e} }\` which is prohibited, use \`export { ${e} }\` instead.`)}function yt(e){const t=".page.",n=Se(e.split(t),0,-1).join(t);return o(!n.includes("\\")),n}function _(e){$e(e)}function Q(e,t){return o(!e.includes("\\")),e.includes("/_error")}function Et(e,t){if(t.length>0){const n=t.find(r=>r.pageId===e);return o(n),!!n.isErrorPage}else return Q(e)}const Te=["js","ts","cjs","cts","mjs","mts"],St=["jsx","tsx","cjsx","ctsx","mjsx","mtsx"],Re=["vue","svelte","marko","md","mdx"],vt=[...Te,...St,...Re];function je(e){const t=vt.some(n=>e.endsWith("."+n));return bt(e)&&o(t),t}function bt(e){const t=/\.(c|m)?(j|t)s$/.test(e),n=Te.some(r=>e.endsWith("."+r));return o(t===n),t}function wt(e){return Re.some(t=>e.endsWith("."+t))}const Pt=[".page",".page.server",".page.route",".page.client",".css"];function Ct(e){if($e(e),e.endsWith(".css"))return".css";o(je(e),e);const n=e.split("/").slice(-1)[0].split("."),r=n.slice(-3)[0],i=n.slice(-2)[0];if(i==="page")return".page";if(o(r==="page",e),i==="server")return".page.server";if(i==="client")return".page.client";if(i==="route")return".page.route";o(!1,e)}function _e(e){const t=s=>i.pageId===s||i.isDefaultPageFile&&(oe(i.filePath)||$t(s,i.filePath)),n=Ct(e),i={filePath:e,fileType:n,isEnv:s=>{if(o(n!==".page.route"),s==="CLIENT_ONLY")return n===".page.client"||n===".css";if(s==="SERVER_ONLY")return n===".page.server";if(s==="CLIENT_AND_SERVER")return n===".page";o(!1)},isRelevant:t,isDefaultPageFile:G(e),isRendererPageFile:n!==".css"&&G(e)&&oe(e),isErrorPageFile:Q(e),pageId:yt(e)};return i}function G(e){return _(e),Q(e)?!1:e.includes("/_default")}function oe(e){return _(e),e.includes("/renderer/")}function $t(e,t){_(e),_(t),o(!e.endsWith("/")),o(!t.endsWith("/")),o(G(t));const n=Se(t.split("/"),0,-1).filter(r=>r!=="_default").join("/");return e.startsWith(n)}function xt(e,t){if(!e)return null;let[n,...r]=e;if(!n||r.length===0&&["*","default",t].includes(n))return null;o(n!=="*");let i="",s="";return n==="default"?i="export default":(i="export",r=[n,...r]),r.forEach(l=>{i=`${i} { ${l}`,s=` }${s}`}),i+s}function Tt(e,t,n){return`${J(e,t)} at ${W(n,t)}`}function Rt(e,t,n){return n?`${J(e,t)} at ${W(n,t)}`:`${J(e,t)} internally`}function J(e,t){return`${e} ${E.cyan(t)} defined`}function W(e,t){let n;return j(e)?n=e:n=[e],o(n.length>=1),n.map(i=>{const{filePathToShowToUser:s,fileExportPathToShowToUser:a}=i;let l=s;const c=xt(a,t);return c&&(l=`${l} > ${E.cyan(c)}`),l}).join(" / ")}const jt=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],r=t[2];return new RegExp(n,r)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function Oe(e){const t=JSON.parse(e);return Z(t)}function Z(e){return typeof e=="string"?_t(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=Z(n)}),e)}function _t(e){for(const{match:t,deserialize:n}of jt)if(t(e))return n(e,Oe);return e}const Ot=["$$registrations","_rerender_only"],Ft=[".md",".mdx"];function kt(e,t,n){const r=Object.keys(e),i=u=>u==="default"||u===n,s=r.filter(i),a=E.code("export default"),l=E.code(`export { ${n} }`);s.length===0&&m(!1,`${t} should have ${l} or ${a}`),s.length===2&&m(!1,`${t} is ambiguous: remove ${a} or ${l}`),o(s.length===1);const c=r.filter(u=>!i(u)).filter(u=>!Ot.includes(u));Ft.some(u=>t.endsWith(u))||c.forEach(u=>{T(!1,`${t} unexpected ${E.cyan(`export { ${u} }`)}, see https://vike.dev/no-side-exports`,{onlyOnce:!0})})}function Y(e){return Wt(e)}function It(e,t){const n=e.map(i=>{const s=Y(i.configValuesSerialized),{pageId:a,isErrorPage:l,routeFilesystem:c,loadConfigValuesAll:u}=i;return Lt(s),{pageId:a,isErrorPage:l,routeFilesystem:c,configValues:s,loadConfigValuesAll:u}}),r={configValues:{}};{const i=Y(t.configValuesSerialized);Object.assign(r.configValues,i)}return{pageConfigs:n,pageConfigGlobal:r}}function Lt(e){const t="route",n=e[t];if(!n)return;const{value:r,definedAtData:i}=n,s=typeof r;o(i);const a=Tt("Config",t,i);m(s==="string"||H(r),`${a} has an invalid type '${s}': it should be a string or a function instead, see https://vike.dev/route`)}function Wt(e){const t={};return Object.entries(e).forEach(([r,i])=>{let s;if(i.type==="cumulative"){const{valueSerialized:a,...l}=i;s={value:a.map((u,g)=>{const{value:h,sideExports:d}=ae(u,r,()=>{const f=i.definedAtData[g];return o(f),f});return n(d),h}),...l}}else{const{valueSerialized:a,...l}=i,{value:c,sideExports:u}=ae(a,r,()=>(o(i.type!=="computed"),i.definedAtData));n(u),s={value:c,...l}}t[r]=s}),t;function n(r){r.forEach(i=>{const{configName:s,configValue:a}=i;t[s]||(t[s]=a)})}}function ae(e,t,n){if(e.type==="js-serialized"){let{value:r}=e;return r=Z(r),{value:r,sideExports:[]}}if(e.type==="pointer-import"){const{value:r}=e;return{value:r,sideExports:[]}}if(e.type==="plus-file"){const r=n(),{exportValues:i}=e;kt(i,r.filePathToShowToUser,t);let s,a=!1;const l=[];return Object.entries(i).forEach(([c,u])=>{c!=="default"&&c!==t?l.push({configName:c,configValue:{type:"standard",value:u,definedAtData:{filePathToShowToUser:r.filePathToShowToUser,fileExportPathToShowToUser:[c]}}}):(s=u,o(!a),a=!0)}),o(a),{value:s,sideExports:l}}o(!1)}function At(e){o(y(e,"pageFilesLazy","object")),o(y(e,"pageFilesEager","object")),o(y(e,"pageFilesExportNamesLazy","object")),o(y(e,"pageFilesExportNamesEager","object")),o(y(e.pageFilesLazy,".page")),o(y(e.pageFilesLazy,".page.client")||y(e.pageFilesLazy,".page.server")),o(y(e,"pageFilesList","string[]")),o(y(e,"pageConfigsSerialized")),o(y(e,"pageConfigGlobalSerialized"));const{pageConfigsSerialized:t,pageConfigGlobalSerialized:n}=e;zt(t),Dt(n);const{pageConfigs:r,pageConfigGlobal:i}=It(t,n),s={};I(e.pageFilesLazy).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const g=u;le(g),c.loadFile=async()=>{"fileExports"in c||(c.fileExports=await g(),pt(c))}}),I(e.pageFilesExportNamesLazy).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const g=u;le(g),c.loadExportNames=async()=>{if(!("exportNames"in c)){const h=await g();o(y(h,"exportNames","string[]"),c.filePath),c.exportNames=h.exportNames}}}),I(e.pageFilesEager).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const g=u;o(w(g)),c.fileExports=g}),I(e.pageFilesExportNamesEager).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const g=u;o(w(g)),o(y(g,"exportNames","string[]"),c.filePath),c.exportNames=g.exportNames}),e.pageFilesList.forEach(l=>{s[l]=s[l]??_e(l)});const a=Object.values(s);return a.forEach(({filePath:l})=>{o(!l.includes("\\"))}),{pageFiles:a,pageConfigs:r,pageConfigGlobal:i}}function I(e){const t=[];return Object.entries(e).forEach(([n,r])=>{o(Pt.includes(n)),o(w(r)),Object.entries(r).forEach(([i,s])=>{const a=_e(i);o(a.fileType===n),t.push({filePath:i,pageFile:a,globValue:s})})}),t}function le(e){o(H(e))}function zt(e){o(j(e)),e.forEach(t=>{o(w(t)),o(y(t,"pageId","string")),o(y(t,"routeFilesystem")),o(y(t,"configValuesSerialized"))})}function Dt(e){o(y(e,"configValuesSerialized"))}const k=R("setPageFiles.ts",{});function Vt(e){const{pageFiles:t,pageConfigs:n,pageConfigGlobal:r}=At(e);k.pageFilesAll=t,k.pageConfigs=n,k.pageConfigGlobal=r}async function Ut(e,t){o(!k.pageFilesGetter),o(t===void 0);const{pageFilesAll:n,pageConfigs:r,pageConfigGlobal:i}=k;o(n&&r&&i);const s=Ht(n,r);return{pageFilesAll:n,allPageIds:s,pageConfigs:r,pageConfigGlobal:i}}function Ht(e,t){const n=e.filter(({isDefaultPageFile:s})=>!s).map(({pageId:s})=>s),r=me(n),i=t.map(s=>s.pageId);return[...r,...i]}function Bt(e,t){return Nt(e,t,!0)}function Nt(e,t,n){const r="CLIENT_ONLY",i=e.filter(f=>f.isRelevant(t)&&f.fileType!==".page.route").sort(Gt(n,t)),s=f=>{const p=i.filter(b=>b.pageId===t&&b.isEnv(f?"CLIENT_AND_SERVER":r));m(p.length<=1,`Merge the following files into a single file: ${p.map(b=>b.filePath).join(" ")}`);const S=p[0];return o(S===void 0||!S.isDefaultPageFile),S},a=s(!1),l=s(!0),c=f=>i.filter(p=>p.isRendererPageFile&&p.isEnv(f?"CLIENT_AND_SERVER":r))[0],u=c(!1),g=c(!0),h=i.filter(f=>f.isDefaultPageFile&&!f.isRendererPageFile&&(f.isEnv(r)||f.isEnv("CLIENT_AND_SERVER")));return[a,l,...h,u,g].filter(gt)}function Gt(e,t){const n="CLIENT_ONLY";return(a,l)=>{if(!a.isDefaultPageFile&&l.isDefaultPageFile)return-1;if(!l.isDefaultPageFile&&a.isDefaultPageFile)return 1;{const c=a.isRendererPageFile,u=l.isRendererPageFile;if(!c&&u)return-1;if(!u&&c)return 1;o(c===u)}{const c=ce(t,a.filePath),u=ce(t,l.filePath);if(c<u)return-1;if(u<c)return 1;o(c===u)}{if(a.isEnv(n)&&l.isEnv("CLIENT_AND_SERVER"))return-1;if(l.isEnv(n)&&a.isEnv("CLIENT_AND_SERVER"))return 1}return 0}}function ce(e,t){_(e),_(t);let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const r=e.slice(n),i=t.slice(n),s=r.split("/").length,a=i.split("/").length;return s+a}function Jt(e){if(!e||j(e))return null;const{filePathToShowToUser:t}=e;return o(t),t}function Yt(e,t){const n={},r={},i={};e.forEach(d=>{Mt(d).forEach(({exportName:p,exportValue:S,isFromDefaultExport:b})=>{o(p!=="default"),i[p]=i[p]??[],i[p].push({exportValue:S,exportSource:`${d.filePath} > ${b?`\`export default { ${p} }\``:`\`export { ${p} }\``}`,filePath:d.filePath,_filePath:d.filePath,_fileType:d.fileType,_isFromDefaultExport:b})})});const s={},a={},l=(d,f)=>{s[f]=d,a[f]??(a[f]=[]),a[f].push(d)},c={configsStandard:{},configsCumulative:{},configsComputed:{}};t&&Object.entries(t.configValues).forEach(([d,f])=>{const{value:p}=f,S=Jt(f.definedAtData),b=Rt("Config",d,f.definedAtData);if(r[d]=r[d]??p,n[d]=n[d]??[],o(n[d].length===0),n[d].push({configValue:p,configDefinedAt:b,configDefinedByFile:S}),f.type==="standard"){const P={type:"configsStandard",value:f.value,definedAt:W(f.definedAtData,d)};l(P,d),c.configsStandard[d]=P}if(f.type==="cumulative"){const P={type:"configsCumulative",values:f.value.map((B,C)=>{const F=f.definedAtData[C];o(F);const Ie=W(F,d);return{value:B,definedAt:Ie}})};l(P,d),c.configsCumulative[d]=P}if(f.type==="computed"){const P={type:"configsComputed",value:f.value};l(P,d),c.configsComputed[d]=P}const O=d;i[O]=i[O]??[],i[O].push({exportValue:p,exportSource:b,filePath:S,_filePath:S,_fileType:null,_isFromDefaultExport:null})});const u=qt(),g={};return Object.entries(i).forEach(([d,f])=>{f.forEach(({exportValue:p,_fileType:S,_isFromDefaultExport:b})=>{g[d]=g[d]??p,S===".page"&&!b&&(d in u||(u[d]=p))})}),o(!("default"in g)),o(!("default"in i)),{from:c,source:s,sources:a,config:r,configEntries:n,exports:g,exportsAll:i,pageExports:u}}function Mt(e){const{filePath:t,fileExports:n}=e;o(n),o(je(t));const r=[];return Object.entries(n).sort(ct(([i])=>i==="default")).forEach(([i,s])=>{let a=i==="default";if(a)if(wt(t))i="Page";else{m(w(s),`The ${E.cyan("export default")} of ${t} should be an object.`),Object.entries(s).forEach(([l,c])=>{mt(l,t),r.push({exportName:l,exportValue:c,isFromDefaultExport:a})});return}r.push({exportName:i,exportValue:s,isFromDefaultExport:a})}),r.forEach(({exportName:i,isFromDefaultExport:s})=>{o(!(s&&xe.includes(i)))}),r}function qt(){return new Proxy({},{get(...e){return X()||T(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vike.dev/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}const Kt="modulepreload",Xt=function(e){return"/"+e},ue={},Qt=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=Xt(c),c in ue)return;ue[c]=!0;const u=c.endsWith(".css"),g=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${g}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":Kt,u||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((d,f)=>{h.addEventListener("load",d),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})},ee={},Zt={},en={},tn={},nn=[],Fe={},rn=[{pageId:"/pages/index",isErrorPage:void 0,routeFilesystem:{routeString:"/",definedBy:"/pages/index/"},loadConfigValuesAll:()=>Qt(()=>import("./pages_index.riCqzeUN.js"),__vite__mapDeps([0,1])),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}}],sn={configValuesSerialized:{}},on=Object.assign({}),an={...on};ee[".page"]=an;const ln=Object.assign({}),cn={...ln};ee[".page.client"]=cn;const un=Object.assign({}),fn={...un};Fe[".page.server"]=fn;const dn=Object.freeze(Object.defineProperty({__proto__:null,neverLoaded:Fe,pageConfigGlobalSerialized:sn,pageConfigsSerialized:rn,pageFilesEager:Zt,pageFilesExportNamesEager:tn,pageFilesExportNamesLazy:en,pageFilesLazy:ee,pageFilesList:nn},Symbol.toStringTag,{value:"Module"}));Vt(dn);function gn(){o(X())}function hn(){gn()}function fe(e){const t=e/1e3;if(t<120){const n=de(t);return`${n} second${ge(n)}`}{const n=t/60,r=de(n);return`${r} minute${ge(r)}`}}function de(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function ge(e){return e==="1"?"":"s"}const M=R("utils/executeHook.ts",{userHookErrors:new WeakMap,pageContext:null});function pn(e,t,n){const{hookName:r,hookFilePath:i,hookTimeout:{error:s,warning:a}}=t;let l,c;const u=new Promise((f,p)=>{l=S=>{g(),f(S)},c=S=>{g(),p(S)}}),g=()=>{h&&clearTimeout(h),d&&clearTimeout(d)},h=he(a)&&setTimeout(()=>{T(!1,`The ${r}() hook defined by ${i} is slow: it's taking more than ${fe(a)} (https://vike.dev/hooksTimeout)`,{onlyOnce:!1})},a),d=he(s)&&setTimeout(()=>{const f=Ye(`The ${r}() hook defined by ${i} timed out: it didn't finish after ${fe(s)} (https://vike.dev/hooksTimeout)`);c(f)},s);return(async()=>{try{mn(n);const f=await e();l(f)}catch(f){w(f)&&M.userHookErrors.set(f,{hookName:r,hookFilePath:i}),c(f)}})(),u}function he(e){return!!e&&e!==1/0}function mn(e){M.pageContext=e,Promise.resolve().then(()=>{M.pageContext=null})}function yn(e){return typeof e=="string"&&En(e)?`.${e}`:`[${JSON.stringify(e)}]`}function En(e){return/^[a-z0-9\$_]+$/i.test(e)}hn();function Sn(){const e="vike_pageContext",t=document.getElementById(e);m(t,`Couldn't find #${e} (which Vike automatically injects in the HTML): make sure it exists (i.e. don't remove it and make sure your HTML isn't malformed)`);const n=t.textContent;o(n);const r=Oe(n);return o(y(r,"pageId","string")),o(y(r,"routeParams","string{}")),r}function vn(e,t){const n=e.filter(i=>i.pageId===t);return o(n.length<=1),n[0]??null}async function bn(e,t){if("isAllLoaded"in e&&!t)return e;const n=await e.loadConfigValuesAll(),r=Y(n.configValuesSerialized);return Object.assign(e.configValues,r),x(e,{isAllLoaded:!0}),e}const wn="__whileFetchingAssets";async function Pn(e,t,n){const r=Bt(t,e),i=vn(n,e);let s;const a=!1;try{s=(await Promise.all([i&&bn(i,a),...r.map(g=>{var h;return(h=g.loadFile)==null?void 0:h.call(g)})]))[0]}catch(u){throw Cn(u)&&Object.assign(u,{[wn]:!0}),u}const l=Yt(r,s),c={};return x(c,l),x(c,{_pageFilesLoaded:r}),c}function Cn(e){return e instanceof Error?["Failed to fetch dynamically imported module","error loading dynamically imported module","Importing a module script failed","error resolving module specifier","failed to resolve module"].some(n=>e.message.toLowerCase().includes(n.toLowerCase())):!1}function $n(e,t){o(!e.startsWith("#"));const{searchOriginal:n,hashOriginal:r,pathname:i}=Ke(e,"/");let s=`${i}${n||""}`;return t!=null&&t.withoutHash||(s+=r||""),o(s.startsWith("/")),s}function ke(e){return $n(window.location.href,e)}const pe=ke({withoutHash:!0});async function xn(){const e=Sn();return x(e,{isHydration:!0,isBackwardNavigation:null,_hasPageContextFromServer:!0,_hasPageContextFromClient:!1}),x(e,await Rn(e.pageId)),Tn(),e}function Tn(){const e=ke({withoutHash:!0});m(pe===e,`The URL was manipulated before the hydration finished ('${pe}' to '${e}'). Ensure the hydration has finished before manipulating the URL. Consider using the onHydrationEnd() hook.`)}async function Rn(e){const t={},{pageFilesAll:n,pageConfigs:r}=await Ut();return x(t,{_pageFilesAll:n,_pageConfigs:r}),x(t,await Pn(e,t._pageFilesAll,t._pageConfigs)),n.filter(i=>i.fileType!==".page.server").forEach(i=>{var s;T(!((s=i.fileExports)!=null&&s.onBeforeRender),`export { onBeforeRender } of ${i.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define onBeforeRender() in a .page.server.js file instead, see https://vike.dev/onBeforeRender-isomorphic#server-routing`,{onlyOnce:!0})}),t}const jn=R("getHook.ts",{});function q(e,t){if(!(t in e.exports))return null;const{hooksTimeout:n}=e.config,r=Fn(n,t),i=e.exports[t],s=e.exportsAll[t][0];if(o(s.exportValue===i),i===null)return null;const a=s.filePath;return o(a),o(!a.endsWith(" ")),On(i,{hookName:t,hookFilePath:a}),{hookFn:i,hookName:t,hookFilePath:a,hookTimeout:r}}function _n(e,t){q(e,t)}function On(e,{hookName:t,hookFilePath:n}){o(t&&n),o(!t.endsWith(")")),m(H(e),`Hook ${t}() defined by ${n} should be a function`)}function Fn(e,t){const n=kn(e);if(n===!1)return{error:!1,warning:!1};const r=n[t],i=In(t);return(r==null?void 0:r.error)!==void 0&&(i.error=r.error),(r==null?void 0:r.warning)!==void 0&&(i.warning=r.warning),i}function kn(e){if(e===void 0)return{};if(e===!1)return!1;m(w(e),`Setting ${E.cyan("hooksTimeout")} should be ${E.cyan("false")} or an object`);const t={};return Object.entries(e).forEach(([n,r])=>{if(r===!1){t[n]={error:!1,warning:!1};return}m(w(r),`Setting ${E.cyan(`hooksTimeout.${n}`)} should be ${E.cyan("false")} or an object`);const[i,s]=["error","warning"].map(a=>{const l=r[a];if(l===void 0||l===!1)return l;const c=`Setting ${E.cyan(`hooksTimeout.${n}.${a}`)} should be`;return m(typeof l=="number",`${c} ${E.cyan("false")} or a number`),m(l>0,`${c} a positive number`),l});t[n]={error:i,warning:s}}),t}function In(e){return e==="onBeforeRoute"?{error:5*1e3,warning:1*1e3}:jn.isPrerendering?{error:2*60*1e3,warning:30*1e3}:(o(!e.toLowerCase().includes("prerender")),{error:30*1e3,warning:4*1e3})}const Ln="not-serializable",L=R("getPageContextProxyForUser.ts",{});function Wn(e){return o([!0,!1].includes(e._hasPageContextFromServer)),o([!0,!1].includes(e._hasPageContextFromClient)),new Proxy(e,{get(t,n){const r=e[n],i=yn(n);return m(r!==Ln,`Can't access pageContext${i} on the client side. Because it can't be serialized, see server logs.`),An(e,n,i),r}})}function An(e,t,n){if(Vn(t)||t in e||Dn(t)||!e._hasPageContextFromServer)return;const r=`pageContext${n} isn't defined on the client-side, see https://vike.dev/passToClient#error`;e._hasPageContextFromClient?T(!1,r,{onlyOnce:!1,showStackTrace:!0}):m(!1,r)}const zn=["then","toJSON"];function Dn(e){return!!(zn.includes(e)||typeof e=="symbol"||typeof e!="string"||e.startsWith("__v_"))}function Vn(e){return L.prev===e||L.prev==="__v_raw"?!0:(L.prev=e,window.setTimeout(()=>{L.prev=void 0},0),!1)}function Un(e){Hn(e),Bn(e)}function Hn(e){Et(e.pageId,e._pageConfigs)&&o(y(e,"is404","boolean"))}function Bn(e){if(e.is404===void 0||e.is404===null)return;const t=e.pageProps||{};if(!w(t)){T(!1,"pageContext.pageProps should be an object",{showStackTrace:!0,onlyOnce:!0});return}t.is404=t.is404||e.is404,e.pageProps=t}function Nn(e){o(e.pageId),o("config"in e),o("configEntries"in e),Un(e),"_pageId"in e||Object.defineProperty(e,"_pageId",{get(){return T(!1,"pageContext._pageId has been renamed to pageContext.pageId",{showStackTrace:!0,onlyOnce:!0}),e.pageId},enumerable:!1}),Gn(e)}function Gn(e){let t=Object.getOwnPropertyDescriptors(e);for(const n of Object.keys(e))delete e[n];t=Object.fromEntries(Object.entries(t).sort(([n],[r])=>dt(n,r))),Object.defineProperties(e,t)}function Jn(e,t){{const i=e;o(i.isHydration===!0),o(i.isBackwardNavigation===null)}const n=e.config.Page||e.exports.Page;return x(e,{Page:n}),Yn(e),Nn(e),Wn(e)}function Yn(e){Mn(e)}function Mn(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}async function qn(e,t){const n=Jn(e);let r=null,i;r=q(e,"render"),i="render";{const l=q(e,"onRenderClient");l&&(r=l,i="onRenderClient")}if(!r){const l=Kn(e);if(o(l),e._pageConfigs.length>0)m(!1,`No onRenderClient() hook defined for URL '${l}', but it's needed, see https://vike.dev/onRenderClient`);else{const c=e._pageFilesLoaded.filter(g=>g.fileType===".page.client");let u;c.length===0?u="No file `*.page.client.*` found for URL "+l:u="One of the following files should export a render() hook: "+c.map(g=>g.filePath).join(" "),m(!1,u)}}o(r);const s=r.hookFn;o(i);const a=await pn(()=>s(n),r,e);m(a===void 0,`The ${i}() hook defined by ${r.hookFilePath} isn't allowed to return a value`)}function Kn(e){let t;try{t=e.urlPathname??e.urlOriginal}catch{}return t=t??window.location.href,t}Me();ze();Xn();async function Xn(){var t,n;const e=await xn();await qn(e),_n(e,"onHydrationEnd"),await((n=(t=e.exports).onHydrationEnd)==null?void 0:n.call(t,e))}
