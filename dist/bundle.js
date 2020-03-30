!function(){"use strict";const t=(e,t)=>e===t,n=Symbol("error"),o={},r={owned:null,cleanups:null,context:null,owner:null};let l=null,i=null,s=null,c=null,u=[],d=0;function a(e,t){t&&(l=t);const o=i,s=l,c=0===e.length?r:{owned:null,cleanups:null,context:null,owner:s};let d;l=c,i=null;try{d=e(()=>S(c))}catch(e){const t=x(l,n);if(!t)throw e;t.forEach(t=>t(e))}finally{for(;u.length;)u.shift()();i=o,l=s}return d}function f(e,t){const n={value:e,observers:null,observerSlots:null,pending:o,comparator:t};return[b.bind(n),y.bind(n)]}function h(e,t){m(w(e,t))}function p(e,t,n){const r=w(e,t);return r.pending=o,r.observers=null,r.observerSlots=null,r.comparator=n,m(r),b.bind(r)}function g(e){let t,n=i;return i=null,t=e(),i=n,t}function v(e){return null===l?console.warn("cleanups created outside a `createRoot` or `render` will never be run"):null===l.cleanups?l.cleanups=[e]:l.cleanups.push(e),e}function b(){if(this.state&&this.sources){const e=c;c=null,1===this.state?m(this):function e(t){t.state=0;for(let n=0;n<t.sources.length;n+=1){const o=t.sources[n];o.sources&&(1===o.state?_(o):2===o.state&&e(o))}}(this),c=e}if(i){const e=this.observers?this.observers.length:0;i.sources?(i.sources.push(this),i.sourceSlots.push(e)):(i.sources=[this],i.sourceSlots=[e]),this.observers?(this.observers.push(i),this.observerSlots.push(i.sources.length-1)):(this.observers=[i],this.observerSlots=[i.sources.length-1])}return this.value}function y(e){if(!this.comparator||!this.comparator(this.value,e)){if(s)return this.pending===o&&s.push(this),void(this.pending=e);this.value=e,!this.observers||c&&!this.observers.length||C(()=>{for(let e=0;e<this.observers.length;e+=1){const t=this.observers[e];if(t.observers&&2!==t.state&&A(t),t.state=1,c.length>1e6)throw new Error("Potential Infinite Loop Detected.");c.push(t)}})}}function m(e){if(!e.fn)return;S(e);const t=l,n=i,o=d;i=l=e;const r=e.fn(e.value);(!e.updatedAt||e.updatedAt<=o)&&(e.observers&&e.observers.length?y.call(e,r):e.value=r,e.updatedAt=o),i=n,l=t}function w(e,t){const n={fn:e,state:0,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:l,context:null};return null===l?console.warn("computations created outside a `createRoot` or `render` will never be disposed"):l!==r&&(l.owned?l.owned.push(n):l.owned=[n]),n}function _(e){let t=1===e.state&&e;for(;e=e.owner;)1===e.state&&(t=e);t&&m(t)}function C(e){if(c)return e();c=[],d++;try{e();for(let e=0;e<c.length;e+=1)try{_(c[e])}catch(e){const t=x(l,n);if(!t)throw e;t.forEach(t=>t(e))}}finally{for(c=null;u.length;)u.shift()()}}function A(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=2,n.observers&&A(n))}}function S(e){let t;if(e.sources){for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),o=t.observers;if(o&&o.length){const e=o.pop(),r=t.observerSlots.pop();n<o.length&&(e.sourceSlots[r]=n,o[n]=e,t.observerSlots[n]=r)}}e.state=0}if(e.owned){for(t=0;t<e.owned.length;t++)S(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}}function x(e,t){return e&&(e.context&&e.context[t]||e.owner&&x(e.owner,t))}function k(e){return function(t){let n;return h(()=>{l.context={[e]:t.value},n=g(()=>function e(t){if("function"==typeof t)return p(()=>e(t()));if(Array.isArray(t)){const n=[];for(let o=0;o<t.length;o++){let r=e(t[o]);Array.isArray(r)?n.push.apply(n,r):n.push(r)}return n}return t}(t.children))}),n}}const T=Symbol("state-raw"),$=Symbol("state-node"),N=Symbol("state-proxy");function M(e,t){return e[N]||(e[N]=new Proxy(e,t||E))}function O(e){return null!=e&&"object"==typeof e&&(e.__proto__===Object.prototype||Array.isArray(e))}function P(e){let t,n,o;if(t=null!=e&&e[T])return t;if(!O(e))return e;if(Array.isArray(e)){Object.isFrozen(e)&&(e=e.slice(0));for(let t=0,r=e.length;t<r;t++)o=e[t],(n=P(o))!==o&&(e[t]=n)}else{Object.isFrozen(e)&&(e=Object.assign({},e));let t=Object.keys(e);for(let r=0,l=t.length;r<l;r++)o=e[t[r]],(n=P(o))!==o&&(e[t[r]]=n)}return e}function j(e){let t=e[$];return t||(e[$]=t={}),t}const E={get(e,t){if(t===T)return e;if(t===N||t===$)return;const n=e[t],o=O(n);if(null!==i&&("function"!=typeof n||e.hasOwnProperty(t))){let r,l;o&&(r=j(n))&&(l=r._||(r._=f()),l[0]()),r=j(e),l=r[t]||(r[t]=f()),l[0]()}return o?M(n):n},set:()=>!0,deleteProperty:()=>!0},B={get(e,t){if(t===T)return e;const n=e[t];return O(n)?new Proxy(n,B):n},set:(e,t,n)=>(I(e,t,P(n)),!0),deleteProperty:(e,t)=>(I(e,t,void 0),!0)};function I(e,t,n,o){if(!o&&e[t]===n)return;const r=Array.isArray(e)||!(t in e);void 0===n?delete e[t]:e[t]=n;let l,i=j(e);(l=i[t])&&l[1](),r&&(l=i._)&&l[1]()}function L(e,t,n=[]){let o,r=e;if(t.length>1){o=t.shift();const l=typeof o,i=Array.isArray(e);if(Array.isArray(o)){for(let r=0;r<o.length;r++)L(e,[o[r]].concat(t),[o[r]].concat(n));return}if(i&&"function"===l){for(let r=0;r<e.length;r++)o(e[r],r)&&L(e,[r].concat(t),[r].concat(n));return}if(i&&"object"===l){const{from:r=0,to:l=e.length-1,by:i=1}=o;for(let o=r;o<=l;o+=i)L(e,[o].concat(t),[o].concat(n));return}if(t.length>1)return void L(e[o],t,[o].concat(n));r=e[o],n=[o].concat(n)}let l=t[0];if("function"==typeof l){const e=void 0===o||O(r)?new Proxy(r,B):r;if(l=l(e,n),l===e||void 0===l)return}l=P(l),void 0===o||O(r)&&O(l)&&!Array.isArray(l)?function(e,t,n){const o=Object.keys(t);for(let r=0;r<o.length;r+=1){const l=o[r];I(e,l,t[l],n)}}(r,l):I(e,o,l)}function D(e){const t=P(e||{});return[M(t),function(...e){!function(e){let t=s,n=s=[];const r=e();s=t,C(()=>{for(let e=0;e<n.length;e+=1){const t=n[e];if(t.pending!==o){const e=t.pending;t.pending=o,y.call(t,e)}}})}(()=>L(t,e))}]}const V=Symbol("fallback");const H=function(e){const t=Symbol("context");return{id:t,Provider:k(t),defaultValue:e}}({}),[z,F,J]=function(){let e=0;const[t,n]=f(!1);return[t,()=>0==e++&&n(!0),()=>--e<=0&&n(!1)]}();function R(e){const{state:t}=x(l,(n=H).id)||n.defaultValue;var n;let o;return t?()=>"suspended"===t()?o:o=e():e}H.active=z,H.increment=F,H.decrement=J;const W=new Set,q={};function G(e,t,n){const o=document.createElement("template");o.innerHTML=e,t&&o.innerHTML.split("<").length-1!==t&&console.warn(`Template html does not match input:\n${o.innerHTML}\n\n${e}`);let r=o.content.firstChild;return n&&(r=r.firstChild),r}function K(e,t,n){if(n)for(let e=0;e<n.length;e++)X(t,n[e]);return g(()=>e(t))}function Q(e,t,n){const o=Object.keys(t);for(let r=0,l=o.length;r<l;r++){const l=o[r],i=!!t[l],s=l.split(/\s+/);if(l&&(!n||n[l]!==i))for(let t=0,n=s.length;t<n;t++)e.classList.toggle(s[t],i)}}function U(e,t,n,o){if(void 0===n||o||(o=[]),"function"!=typeof t)return te(e,t,o,n);h(o=>te(e,t(),o,n),o)}function X(e,t){const n=e[t];Object.defineProperty(e,t,{get:()=>n(),enumerable:!0})}function Y(e){const t=`__${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>n});null!==n;){const o=n[t];if(o){const r=n[`${t}Data`];if(r?o(r,e):o(e),e.cancelBubble)return}n=n.host&&n.host instanceof Node?n.host:n.parentNode}}function Z(e,t,n){for(let o=0,r=t.length;o<r;o++)e.insertBefore(t[o],n)}function ee(e,t,n,o){if(void 0===n)return e.textContent="";const r=o||document.createTextNode("");if(t.length){r!==t[0]&&e.replaceChild(r,t[0]);for(let n=t.length-1;n>0;n--)e.removeChild(t[n])}else e.insertBefore(r,n);return[r]}function te(e,t,n,o,r){for(;"function"==typeof n;)n=n();if(t===n)return n;const l=typeof t,i=void 0!==o;if(e=i&&n[0]&&n[0].parentNode||e,"string"===l||"number"===l)if("number"===l&&(t=t.toString()),i){let r=n[0];r&&3===r.nodeType?r.data=t:r=document.createTextNode(t),n=ee(e,n,o,r)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t;else if(null==t||"boolean"===l){if(q.hydrate&&q.hydrate.registry)return n;n=ee(e,n,o)}else{if("function"===l)return h(()=>n=te(e,t(),n,o)),()=>n;if(Array.isArray(t)){const l=[];if(function e(t,n,o){let r=!1;for(let l=0,i=n.length;l<i;l++){let i,s=n[l];if(s instanceof Node)t.push(s);else if(null==s||!0===s||!1===s);else if(Array.isArray(s))r=e(t,s)||r;else if("string"==(i=typeof s))t.push(document.createTextNode(s));else if("function"===i)if(o){const n=s();r=e(t,Array.isArray(n)?n:[n])||r}else t.push(s),r=!0;else t.push(document.createTextNode(s.toString()))}return r}(l,t,r))return h(()=>n=te(e,l,n,o,!0)),()=>n;if(q.hydrate&&q.hydrate.registry)return n;if(0===l.length){if(n=ee(e,n,o),i)return n}else Array.isArray(n)?0===n.length?Z(e,l,o):ne(e,n,l):null==n||""===n?Z(e,l):ne(e,i&&n||[e.firstChild],l);n=l}else if(t instanceof Node){if(Array.isArray(n)){if(i)return n=ee(e,n,o,t);ee(e,n,null,t)}else null==n||""===n?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ne(e,t,n){let o=n.length,r=t.length,l=o,i=0,s=0,c=t[r-1].nextSibling,u=null;for(;i<r||s<l;)if(r===i){const t=l<o?s?n[s-1].nextSibling:n[l-s]:c;for(;s<l;)e.insertBefore(n[s++],t)}else if(l===s)for(;i<r;)u&&u.has(t[i])||e.removeChild(t[i]),i++;else if(t[i]===n[s])i++,s++;else if(t[r-1]===n[l-1])r--,l--;else{if(r-i==1&&l-s==1){u&&u.has(t[i])?e.insertBefore(n[s],l<o?n[l]:c):e.replaceChild(n[s],t[i]);break}if(t[i]===n[l-1]&&n[s]===t[r-1]){const o=t[--r].nextSibling;e.insertBefore(n[s++],t[i++].nextSibling),e.insertBefore(n[--l],o),t[r]=n[l]}else{if(!u){u=new Map;let e=s;for(;e<l;)u.set(n[e],e++)}if(u.has(t[i])){const o=u.get(t[i]);if(s<o&&o<l){let c=i,d=1;for(;++c<r&&c<l&&u.has(t[c])&&u.get(t[c])===o+d;)d++;if(d>o-s){const r=t[i];for(;s<o;)e.insertBefore(n[s++],r)}else e.replaceChild(n[s++],t[i++])}else i++}else e.removeChild(t[i++])}}return n}function oe(e){const t="fallback"in e&&{fallback:()=>e.fallback};return R(p(function(e,t,n){return"function"!=typeof t?(n=t||{},t=e,o):(n||(n={}),o(e));function o(e){let o=[],r=[],l=[],i=0;return v(()=>{for(let e=0,t=l.length;e<t;e++)l[e]()}),()=>{let s,c,u=e()||[];return g(()=>{let e,t,f,h,p,g,v,b,y=u.length;if(0===y){if(0!==i){for(s=0;s<i;s++)l[s]();l=[],o=[],r=[],i=0}n.fallback&&(o=[V],r[0]=a(e=>(l[0]=e,n.fallback())),i=1)}else if(0===i){for(c=0;c<y;c++)o[c]=u[c],r[c]=a(d);i=y}else{for(f=new Array(y),h=new Array(y),p=0,g=Math.min(i,y);p<g&&o[p]===u[p];p++);for(g=i-1,v=y-1;g>=p&&v>=p&&o[g]===u[v];g--,v--)f[v]=r[g],h[v]=l[g];if(p>v){for(c=g;p<=c;c--)l[c]();const e=g-p+1;return e>0&&(r.splice(p,e),l.splice(p,e)),o=u.slice(0),i=y,r}if(p>g){for(c=p;c<=v;c++)r[c]=a(d);for(;c<y;c++)r[c]=f[c],l[c]=h[c];return o=u.slice(0),i=y,r}for(e=new Map,t=new Array(v+1),c=v;c>=p;c--)b=u[c],s=e.get(b),t[c]=void 0===s?-1:s,e.set(b,c);for(s=p;s<=g;s++)b=o[s],c=e.get(b),void 0!==c&&-1!==c?(f[c]=r[s],h[c]=l[s],c=t[c],e.set(b,c)):l[s]();for(c=p;c<y;c++)c in f?(r[c]=f[c],l[c]=h[c]):r[c]=a(d);i=r.length=y,o=u.slice(0)}return r});function d(e){return l[c]=e,t(u[c],c)}}}}(()=>e.each,e.children,t||void 0)))}function re(e){const n="fallback"in e,o=p(()=>!!e.when,void 0,t);return R(p(()=>o()?g(()=>e.children):n?g(()=>e.fallback):void 0))}function le(){const[e,t]=function(e){const t=localStorage.getItem("todos-solid"),[n,o]=D(t?JSON.parse(t):e);return h(()=>localStorage.setItem("todos-solid",JSON.stringify(n))),[n,o]}({counter:1,todos:[],showMode:"all"});return h(()=>{const n=e.todos.filter(e=>e.completed).length;t({completedCount:n,remainingCount:e.todos.length-n})}),[e,{addTodo:({title:n})=>t({todos:[{title:n,id:e.counter,completed:!1},...e.todos],counter:e.counter+1}),removeTodo:e=>t("todos",t=>t.filter(t=>t.id!==e)),editTodo:n=>t("todos",e.todos.findIndex(e=>e.id===n.id),n),clearCompleted:()=>t("todos",e=>e.filter(e=>!e.completed)),toggleAll:e=>t("todos",t=>t.completed!==e,{completed:e}),setVisibility:e=>t("showMode",e)}]}const ie=G('<section class="todoapp"></section>',2),se=G('<header class="header"><h1>todos</h1><input class="new-todo" placeholder="What needs to be done?"></header>',5),ce=G('<section class="main"><input id="toggle-all" class="toggle-all" type="checkbox"><label for="toggle-all"></label><ul class="todo-list"></ul></section>',7),ue=G('<input class="edit">',1),de=G('<li class="todo"><div class="view"><input class="toggle" type="checkbox"><label></label><button class="destroy"></button></div></li>',9),ae=G('<button class="clear-completed">Clear completed</button>',2),fe=G('<footer class="footer"><span class="todo-count"><strong></strong> left</span><ul class="filters"><li><a href="#/">All</a></li><li><a href="#/active">Active</a></li><li><a href="#/completed">Completed</a></li></ul></footer>',20),he=["children","when"],pe=["each"],ge=e=>setTimeout(()=>e.focus()),ve=({addTodo:e})=>function(){const t=se.cloneNode(!0);return t.firstChild.nextSibling.__keyup=({target:t,keyCode:n})=>{const o=t.value.trim();13===n&&o&&(e({title:o}),t.value="")},t}(),be=({store:t,editTodo:n,removeTodo:o,toggleAll:r})=>{const[l,i]=D({editingTodoId:null}),s=e=>l.editingTodoId===e,c=e=>i("editingTodoId",e),u=(e,{target:{value:t}})=>{const o=t.trim();l.editingTodoId===e&&o&&(n({id:e,title:o}),c())},d=(e,{target:{checked:t}})=>n({id:e,completed:t}),a=e=>c(e),f=e=>o(e),p=t=>{13===e.keyCode?u(e,t):27===e.keyCode&&c()};return function(){const e=ce.cloneNode(!0),n=e.firstChild,o=n.nextSibling.nextSibling;return n.__input=({target:{checked:e}})=>r(e),U(o,K(oe,{each:()=>{return e=t.todos,"active"===t.showMode?e.filter(e=>!e.completed):"completed"===t.showMode?e.filter(e=>e.completed):e;var e},children:e=>K(ye,{todo:e,isEditing:s,toggle:d,edit:a,remove:f,doneEditing:p,save:u})},pe)),h(()=>n.checked=!t.remainingCount),e}()},ye=({todo:e,isEditing:t,toggle:n,edit:o,remove:r,save:l,doneEditing:i})=>function(){const s=de.cloneNode(!0),c=s.firstChild.firstChild,u=c.nextSibling,d=u.nextSibling;return c.__input=n,c.__inputData=e.id,u.__dblclick=o,u.__dblclickData=e.id,U(u,()=>e.title),d.__click=r,d.__clickData=e.id,U(s,K(re,{when:()=>t(e.id),children:()=>{const t=ue.cloneNode(!0);return ge&&ge(t),t.__keyup=i,t.__keyupData=e.id,t.__focusout=l,t.__focusoutData=e.id,h(()=>t.value=e.title),t}},he),null),h(n=>{const o={editing:t(e.id),completed:e.completed},r=n._v$,l=e.completed;return o!==n._v$&&Q(s,n._v$=o,r),l!==n._v$3&&(c.checked=n._v$3=l),n},{_v$:void 0,_v$3:void 0}),s}(),me=({store:e,clearCompleted:t})=>function(){const n=fe.cloneNode(!0),o=n.firstChild,r=o.firstChild,l=r.nextSibling,i=o.nextSibling.firstChild,s=i.firstChild,c=i.nextSibling,u=c.firstChild,d=c.nextSibling.firstChild;return U(r,()=>e.remainingCount),U(o,()=>1===e.remainingCount?" item ":" items ",l),U(n,K(re,{when:()=>e.completedCount>0,children:()=>{const e=ae.cloneNode(!0);return e.__click=t,e}},he),null),h(t=>{const n={selected:"all"===e.showMode},o=t._v$4,r={selected:"active"===e.showMode},l=t._v$6,i={selected:"completed"===e.showMode},c=t._v$8;return n!==t._v$4&&Q(s,t._v$4=n,o),r!==t._v$6&&Q(u,t._v$6=r,l),i!==t._v$8&&Q(d,t._v$8=i,c),t},{_v$4:void 0,_v$6:void 0,_v$8:void 0}),n}();!function(e,t){let n;a(o=>{n=o,U(t,e())})}(()=>{const[e,{addTodo:t,toggleAll:n,editTodo:o,removeTodo:r,clearCompleted:l,setVisibility:i}]=le(),s=()=>i(location.hash.slice(2)||"all");return window.addEventListener("hashchange",s),v(()=>window.removeEventListener("hashchange",s)),function(){const i=ie.cloneNode(!0);return U(i,K(ve,{addTodo:t}),null),U(i,K(re,{when:()=>e.todos.length>0,children:()=>[K(be,{store:e,toggleAll:n,editTodo:o,removeTodo:r}),K(me,{store:e,clearCompleted:l})]},he),null),i}()},document.getElementById("main")),function(e){for(let t=0,n=e.length;t<n;t++){const n=e[t];W.has(n)||(W.add(n),document.addEventListener(n,Y))}}(["keyup","input","dblclick","click","focusout"])}();
