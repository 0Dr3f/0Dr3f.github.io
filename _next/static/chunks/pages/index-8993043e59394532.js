(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6074)}])},765:function(e,t,r){"use strict";var s=r(5893);r(7294);let n=()=>(0,s.jsx)("footer",{className:"py-5 px-5 md:px-10 mt-auto",children:(0,s.jsx)("div",{className:"container mx-auto",children:(0,s.jsxs)("div",{className:"max-w-3xl mx-auto text-center",children:[(0,s.jsxs)("p",{className:"text-sm text-secondarytext",children:["MYNAME \xa9 ",new Date().getFullYear()]}),(0,s.jsxs)("div",{className:"flex justify-center mt-4",children:[(0,s.jsx)("a",{href:"https://www.github.com",target:"_blank",rel:"noopener noreferrer",className:"transition-all duration-200 transform hover:scale-110 hover:shadow-lg",children:(0,s.jsx)("img",{src:"/images/github.png",alt:"Facebook",className:"w-6 h-6 mx-2"})}),(0,s.jsx)("a",{href:"https://www.twitter.com",target:"_blank",rel:"noopener noreferrer",className:"transition-all duration-200 transform hover:scale-110 hover:shadow-lg",children:(0,s.jsx)("img",{src:"/images/twitter.png",alt:"Twitter",className:"w-6 h-6 mx-2"})}),(0,s.jsx)("a",{href:"mailto:somemail@mail.com",target:"_blank",rel:"noopener noreferrer",className:"transition-all duration-200 transform hover:scale-110 hover:shadow-lg",children:(0,s.jsx)("img",{src:"/images/email.png",alt:"mail",className:"w-6 h-6 mx-2"})})]})]})})});t.Z=n},6568:function(e,t,r){"use strict";var s=r(5893),n=r(1664),i=r.n(n),a=r(1163);let c=e=>{let{allPostsData:t}=e,r=(0,a.useRouter)(),n=e=>r.pathname===e?"text-accent1":"text-primarytext";return(0,s.jsx)("nav",{className:"bg-background py-2",children:(0,s.jsx)("div",{className:"container mx-auto px-4",children:(0,s.jsxs)("div",{className:"max-w-3xl mx-auto flex items-center justify-between",children:[(0,s.jsx)(i(),{href:"/",children:(0,s.jsxs)("a",{className:"flex items-center space-x-2 group",children:[(0,s.jsx)("img",{src:"/images/logo.png",alt:"Logo",className:"w-12 h-12 object-contain transition-transform duration-200 group-hover:scale-110"}),(0,s.jsx)("span",{className:"text-xl font-bold text-primarytext transition-transform duration-200 group-hover:scale-110",children:"NAME"})]})}),(0,s.jsxs)("div",{className:"flex items-center space-x-6",children:[(0,s.jsx)(i(),{href:"/",children:(0,s.jsx)("a",{className:"".concat(n("/")," hover:text-accent1 transition-colors duration-200"),children:"Archive"})}),(0,s.jsx)(i(),{href:"/contact",children:(0,s.jsx)("a",{className:"".concat(n("/contact")," hover:text-accent1 transition-colors duration-200"),children:"Contact"})})]})]})})})};t.Z=c},6074:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return et},default:function(){return er}});var s=r(5893),n=r(9008),i=r.n(n),a=r(1664),c=r.n(a),l=r(6568),o=r(765),h=r(7294);function u(e){return Array.isArray?Array.isArray(e):"[object Array]"===y(e)}let d=1/0;function g(e){return"string"==typeof e}function f(e){return"number"==typeof e}function p(e){return"object"==typeof e}function m(e){return null!=e}function x(e){return!e.trim().length}function y(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}let j=e=>`Invalid value for key ${e}`,v=e=>`Pattern length exceeds max of ${e}.`,w=e=>`Missing ${e} property in key`,_=e=>`Property 'weight' in key '${e}' must be a positive integer`,N=Object.prototype.hasOwnProperty;class b{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(e=>{let r=M(e);t+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,t+=r.weight}),this._keys.forEach(e=>{e.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function M(e){let t=null,r=null,s=null,n=1,i=null;if(g(e)||u(e))s=e,t=k(e),r=E(e);else{if(!N.call(e,"name"))throw Error(w("name"));let a=e.name;if(s=a,N.call(e,"weight")&&(n=e.weight)<=0)throw Error(_(a));t=k(a),r=E(a),i=e.getFn}return{path:t,id:r,weight:n,src:s,getFn:i}}function k(e){return u(e)?e:e.split(".")}function E(e){return u(e)?e.join("."):e}var A={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,useExtendedSearch:!1,getFn:function(e,t){let r=[],s=!1,n=(e,t,i)=>{if(m(e)){if(t[i]){var a,c;let l=t[i],o=e[l];if(m(o)){if(i===t.length-1&&(g(o)||f(o)||!0===(a=o)||!1===a||p(c=a)&&null!==c&&"[object Boolean]"==y(a)))r.push(null==o?"":function(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-d?"-0":t}(o));else if(u(o)){s=!0;for(let e=0,r=o.length;e<r;e+=1)n(o[e],t,i+1)}else t.length&&n(o,t,i+1)}}else r.push(e)}};return n(e,g(t)?t.split("."):t,0),s?r:r[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};let S=/[^ ]+/g;class ${constructor({getFn:e=A.getFn,fieldNormWeight:t=A.fieldNormWeight}={}){this.norm=function(e=1,t=3){let r=new Map,s=Math.pow(10,t);return{get(t){let n=t.match(S).length;if(r.has(n))return r.get(n);let i=parseFloat(Math.round(1/Math.pow(n,.5*e)*s)/s);return r.set(n,i),i},clear(){r.clear()}}}(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((e,t)=>{this._keysMap[e.id]=t})}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,g(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){let t=this.size();g(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,r=this.size();t<r;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!m(e)||x(e))return;let r={v:e,i:t,n:this.norm.get(e)};this.records.push(r)}_addObject(e,t){let r={i:t,$:{}};this.keys.forEach((t,s)=>{let n=t.getFn?t.getFn(e):this.getFn(e,t.path);if(m(n)){if(u(n)){let e=[],t=[{nestedArrIndex:-1,value:n}];for(;t.length;){let{nestedArrIndex:r,value:s}=t.pop();if(m(s)){if(g(s)&&!x(s)){let t={v:s,i:r,n:this.norm.get(s)};e.push(t)}else u(s)&&s.forEach((e,r)=>{t.push({nestedArrIndex:r,value:e})})}}r.$[s]=e}else if(g(n)&&!x(n)){let e={v:n,n:this.norm.get(n)};r.$[s]=e}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function I(e,t,{getFn:r=A.getFn,fieldNormWeight:s=A.fieldNormWeight}={}){let n=new $({getFn:r,fieldNormWeight:s});return n.setKeys(e.map(M)),n.setSources(t),n.create(),n}function L(e,{errors:t=0,currentLocation:r=0,expectedLocation:s=0,distance:n=A.distance,ignoreLocation:i=A.ignoreLocation}={}){let a=t/e.length;if(i)return a;let c=Math.abs(s-r);return n?a+c/n:c?1:a}class R{constructor(e,{location:t=A.location,threshold:r=A.threshold,distance:s=A.distance,includeMatches:n=A.includeMatches,findAllMatches:i=A.findAllMatches,minMatchCharLength:a=A.minMatchCharLength,isCaseSensitive:c=A.isCaseSensitive,ignoreLocation:l=A.ignoreLocation}={}){if(this.options={location:t,threshold:r,distance:s,includeMatches:n,findAllMatches:i,minMatchCharLength:a,isCaseSensitive:c,ignoreLocation:l},this.pattern=c?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;let o=(e,t)=>{this.chunks.push({pattern:e,alphabet:function(e){let t={};for(let r=0,s=e.length;r<s;r+=1){let n=e.charAt(r);t[n]=(t[n]||0)|1<<s-r-1}return t}(e),startIndex:t})},h=this.pattern.length;if(h>32){let e=0,t=h%32,r=h-t;for(;e<r;)o(this.pattern.substr(e,32),e),e+=32;if(t){let e=h-32;o(this.pattern.substr(e),e)}}else o(this.pattern,0)}searchIn(e){let{isCaseSensitive:t,includeMatches:r}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return r&&(t.indices=[[0,e.length-1]]),t}let{location:s,distance:n,threshold:i,findAllMatches:a,minMatchCharLength:c,ignoreLocation:l}=this.options,o=[],h=0,u=!1;this.chunks.forEach(({pattern:t,alphabet:d,startIndex:g})=>{let{isMatch:f,score:p,indices:m}=function(e,t,r,{location:s=A.location,distance:n=A.distance,threshold:i=A.threshold,findAllMatches:a=A.findAllMatches,minMatchCharLength:c=A.minMatchCharLength,includeMatches:l=A.includeMatches,ignoreLocation:o=A.ignoreLocation}={}){let h;if(t.length>32)throw Error(v(32));let u=t.length,d=e.length,g=Math.max(0,Math.min(s,d)),f=i,p=g,m=c>1||l,x=m?Array(d):[];for(;(h=e.indexOf(t,p))>-1;)if(f=Math.min(L(t,{currentLocation:h,expectedLocation:g,distance:n,ignoreLocation:o}),f),p=h+u,m){let e=0;for(;e<u;)x[h+e]=1,e+=1}p=-1;let y=[],j=1,w=u+d,_=1<<u-1;for(let s=0;s<u;s+=1){let i=0,c=w;for(;i<c;){let e=L(t,{errors:s,currentLocation:g+c,expectedLocation:g,distance:n,ignoreLocation:o});e<=f?i=c:w=c,c=Math.floor((w-i)/2+i)}w=c;let l=Math.max(1,g-c+1),h=a?d:Math.min(g+c,d)+u,v=Array(h+2);v[h+1]=(1<<s)-1;for(let i=h;i>=l;i-=1){let a=i-1,c=r[e.charAt(a)];if(m&&(x[a]=+!!c),v[i]=(v[i+1]<<1|1)&c,s&&(v[i]|=(y[i+1]|y[i])<<1|1|y[i+1]),v[i]&_&&(j=L(t,{errors:s,currentLocation:a,expectedLocation:g,distance:n,ignoreLocation:o}))<=f){if(f=j,(p=a)<=g)break;l=Math.max(1,2*g-p)}}let N=L(t,{errors:s+1,currentLocation:g,expectedLocation:g,distance:n,ignoreLocation:o});if(N>f)break;y=v}let N={isMatch:p>=0,score:Math.max(.001,j)};if(m){let e=function(e=[],t=A.minMatchCharLength){let r=[],s=-1,n=-1,i=0;for(let a=e.length;i<a;i+=1){let a=e[i];a&&-1===s?s=i:a||-1===s||((n=i-1)-s+1>=t&&r.push([s,n]),s=-1)}return e[i-1]&&i-s>=t&&r.push([s,i-1]),r}(x,c);e.length?l&&(N.indices=e):N.isMatch=!1}return N}(e,t,d,{location:s+g,distance:n,threshold:i,findAllMatches:a,minMatchCharLength:c,includeMatches:r,ignoreLocation:l});f&&(u=!0),h+=p,f&&m&&(o=[...o,...m])});let d={isMatch:u,score:u?h/this.chunks.length:1};return u&&r&&(d.indices=o),d}}class C{constructor(e){this.pattern=e}static isMultiMatch(e){return O(e,this.multiRegex)}static isSingleMatch(e){return O(e,this.singleRegex)}search(){}}function O(e,t){let r=e.match(t);return r?r[1]:null}class F extends C{constructor(e,{location:t=A.location,threshold:r=A.threshold,distance:s=A.distance,includeMatches:n=A.includeMatches,findAllMatches:i=A.findAllMatches,minMatchCharLength:a=A.minMatchCharLength,isCaseSensitive:c=A.isCaseSensitive,ignoreLocation:l=A.ignoreLocation}={}){super(e),this._bitapSearch=new R(e,{location:t,threshold:r,distance:s,includeMatches:n,findAllMatches:i,minMatchCharLength:a,isCaseSensitive:c,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class P extends C{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t,r=0,s=[],n=this.pattern.length;for(;(t=e.indexOf(this.pattern,r))>-1;)r=t+n,s.push([t,r-1]);let i=!!s.length;return{isMatch:i,score:i?0:1,indices:s}}}let T=[class extends C{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){let t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},P,class extends C{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){let t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},class extends C{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){let t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends C{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){let t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends C{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){let t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}},class extends C{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){let t=e.indexOf(this.pattern),r=-1===t;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}},F],W=T.length,z=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,D=new Set([F.type,P.type]),K=[];function Z(e,t){for(let r=0,s=K.length;r<s;r+=1){let s=K[r];if(s.condition(e,t))return new s(e,t)}return new R(e,t)}let q={AND:"$and",OR:"$or"},H={PATH:"$path",PATTERN:"$val"},J=e=>!!(e[q.AND]||e[q.OR]),B=e=>!!e[H.PATH],V=e=>!u(e)&&p(e)&&!J(e),X=e=>({[q.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Y(e,t,{auto:r=!0}={}){let s=e=>{let n=Object.keys(e),i=B(e);if(!i&&n.length>1&&!J(e))return s(X(e));if(V(e)){let s=i?e[H.PATH]:n[0],a=i?e[H.PATTERN]:e[s];if(!g(a))throw Error(j(s));let c={keyId:E(s),pattern:a};return r&&(c.searcher=Z(a,t)),c}let a={children:[],operator:n[0]};return n.forEach(t=>{let r=e[t];u(r)&&r.forEach(e=>{a.children.push(s(e))})}),a};return J(e)||(e=X(e)),s(e)}function G(e,t){let r=e.matches;t.matches=[],m(r)&&r.forEach(e=>{if(!m(e.indices)||!e.indices.length)return;let{indices:r,value:s}=e,n={indices:r,value:s};e.key&&(n.key=e.key.src),e.idx>-1&&(n.refIndex=e.idx),t.matches.push(n)})}function Q(e,t){t.score=e.score}class U{constructor(e,t={},r){this.options={...A,...t},this.options.useExtendedSearch,this._keyStore=new b(this.options.keys),this.setCollection(e,r)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof $))throw Error("Incorrect 'index' type");this._myIndex=t||I(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){m(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){let t=[];for(let r=0,s=this._docs.length;r<s;r+=1){let n=this._docs[r];e(n,r)&&(this.removeAt(r),r-=1,s-=1,t.push(n))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){let{includeMatches:r,includeScore:s,shouldSort:n,sortFn:i,ignoreFieldNorm:a}=this.options,c=g(e)?g(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return!function(e,{ignoreFieldNorm:t=A.ignoreFieldNorm}){e.forEach(e=>{let r=1;e.matches.forEach(({key:e,norm:s,score:n})=>{let i=e?e.weight:null;r*=Math.pow(0===n&&i?Number.EPSILON:n,(i||1)*(t?1:s))}),e.score=r})}(c,{ignoreFieldNorm:a}),n&&c.sort(i),f(t)&&t>-1&&(c=c.slice(0,t)),function(e,t,{includeMatches:r=A.includeMatches,includeScore:s=A.includeScore}={}){let n=[];return r&&n.push(G),s&&n.push(Q),e.map(e=>{let{idx:r}=e,s={item:t[r],refIndex:r};return n.length&&n.forEach(t=>{t(e,s)}),s})}(c,this._docs,{includeMatches:r,includeScore:s})}_searchStringList(e){let t=Z(e,this.options),{records:r}=this._myIndex,s=[];return r.forEach(({v:e,i:r,n:n})=>{if(!m(e))return;let{isMatch:i,score:a,indices:c}=t.searchIn(e);i&&s.push({item:e,idx:r,matches:[{score:a,value:e,norm:n,indices:c}]})}),s}_searchLogical(e){let t=Y(e,this.options),r=(e,t,s)=>{if(!e.children){let{keyId:r,searcher:n}=e,i=this._findMatches({key:this._keyStore.get(r),value:this._myIndex.getValueForItemAtKeyId(t,r),searcher:n});return i&&i.length?[{idx:s,item:t,matches:i}]:[]}let n=[];for(let i=0,a=e.children.length;i<a;i+=1){let a=e.children[i],c=r(a,t,s);if(c.length)n.push(...c);else if(e.operator===q.AND)return[]}return n},s=this._myIndex.records,n={},i=[];return s.forEach(({$:e,i:s})=>{if(m(e)){let a=r(t,e,s);a.length&&(n[s]||(n[s]={idx:s,item:e,matches:[]},i.push(n[s])),a.forEach(({matches:e})=>{n[s].matches.push(...e)}))}}),i}_searchObjectList(e){let t=Z(e,this.options),{keys:r,records:s}=this._myIndex,n=[];return s.forEach(({$:e,i:s})=>{if(!m(e))return;let i=[];r.forEach((r,s)=>{i.push(...this._findMatches({key:r,value:e[s],searcher:t}))}),i.length&&n.push({idx:s,item:e,matches:i})}),n}_findMatches({key:e,value:t,searcher:r}){if(!m(t))return[];let s=[];if(u(t))t.forEach(({v:t,i:n,n:i})=>{if(!m(t))return;let{isMatch:a,score:c,indices:l}=r.searchIn(t);a&&s.push({score:c,key:e,value:t,idx:n,norm:i,indices:l})});else{let{v:n,n:i}=t,{isMatch:a,score:c,indices:l}=r.searchIn(n);a&&s.push({score:c,key:e,value:n,norm:i,indices:l})}return s}}U.version="6.6.2",U.createIndex=I,U.parseIndex=function(e,{getFn:t=A.getFn,fieldNormWeight:r=A.fieldNormWeight}={}){let{keys:s,records:n}=e,i=new $({getFn:t,fieldNormWeight:r});return i.setKeys(s),i.setIndexRecords(n),i},U.config=A,U.parseQuery=Y,function(...e){K.push(...e)}(class{constructor(e,{isCaseSensitive:t=A.isCaseSensitive,includeMatches:r=A.includeMatches,minMatchCharLength:s=A.minMatchCharLength,ignoreLocation:n=A.ignoreLocation,findAllMatches:i=A.findAllMatches,location:a=A.location,threshold:c=A.threshold,distance:l=A.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:r,minMatchCharLength:s,findAllMatches:i,ignoreLocation:n,location:a,threshold:c,distance:l},this.pattern=t?e:e.toLowerCase(),this.query=function(e,t={}){return e.split("|").map(e=>{let r=e.trim().split(z).filter(e=>e&&!!e.trim()),s=[];for(let e=0,n=r.length;e<n;e+=1){let n=r[e],i=!1,a=-1;for(;!i&&++a<W;){let e=T[a],r=e.isMultiMatch(n);r&&(s.push(new e(r,t)),i=!0)}if(!i)for(a=-1;++a<W;){let e=T[a],r=e.isSingleMatch(n);if(r){s.push(new e(r,t));break}}}return s})}(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){let t=this.query;if(!t)return{isMatch:!1,score:1};let{includeMatches:r,isCaseSensitive:s}=this.options;e=s?e:e.toLowerCase();let n=0,i=[],a=0;for(let s=0,c=t.length;s<c;s+=1){let c=t[s];i.length=0,n=0;for(let t=0,s=c.length;t<s;t+=1){let s=c[t],{isMatch:l,indices:o,score:h}=s.search(e);if(l){if(n+=1,a+=h,r){let e=s.constructor.type;D.has(e)?i=[...i,...o]:i.push(o)}}else{a=0,n=0,i.length=0;break}}if(n){let e={isMatch:!0,score:a/n};return r&&(e.indices=i),e}}return{isMatch:!1,score:1}}});let ee=e=>{let{posts:t,setFilteredPosts:r}=e,[n,i]=(0,h.useState)(""),a=new U(t,{keys:["title","content"],threshold:.3}),c=e=>{let{value:s}=e.target;if(i(s),s.trim()){let e=a.search(s);r(e.map(e=>{let{item:t}=e;return t}))}else r(t)};return(0,s.jsx)("div",{className:"relative py-5",children:(0,s.jsx)("input",{type:"text",value:n,onChange:c,className:"bg-background-lighter1 text-gray_light px-3 py-2 rounded-md focus:outline-none",placeholder:"Search posts..."})})};var et=!0;function er(e){let{allPostsData:t}=e,[r,n]=(0,h.useState)(t);return(0,s.jsxs)("div",{className:"min-h-screen bg-background text-white",children:[(0,s.jsx)(i(),{children:(0,s.jsx)("title",{children:"Next.js Blog"})}),(0,s.jsx)(l.Z,{}),(0,s.jsx)("main",{className:"container mx-auto px-4 py-8",children:(0,s.jsxs)("div",{className:"max-w-3xl mx-auto",children:[(0,s.jsx)("h1",{className:"text-xl font-semibold mb-1 text-center",children:"Latest Posts"}),(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)("div",{className:"ml-auto",children:(0,s.jsx)(ee,{posts:t,setFilteredPosts:n})})}),(0,s.jsx)("ul",{children:r.map(e=>{let{id:t,date:r,title:n,subtitle:i,image:a}=e;return(0,s.jsx)("li",{className:"mb-6",children:(0,s.jsx)(c(),{href:"/posts/".concat(t),children:(0,s.jsxs)("a",{className:"relative block mb-6 p-6 bg-background-lighter1 rounded-md shadow-md group hover:shadow-background-darker2 hover:shadow-lg transition-shadow duration-200",children:[a&&(0,s.jsx)("img",{src:a,alt:n,className:"w-32 h-32 pb-10 object-cover mb-3 rounded-lg shadow-md float-left mr-4"}),(0,s.jsxs)("div",{className:"flex flex-col justify-between h-full",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"text-2xl font-bold",children:n}),(0,s.jsx)("p",{className:"text-sm text-secondarytext mb-2",children:i})]}),(0,s.jsx)("time",{className:"absolute bottom-1 right-1 text-sm text-secondarytext",dateTime:r,children:r})]})]})},t)},t)})})]})}),(0,s.jsx)(o.Z,{})]})}}},function(e){e.O(0,[814,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);