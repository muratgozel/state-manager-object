define(["basekits","event-emitter-object"],(function(t,e){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(t),o=n(e),i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function u(t){var e={exports:{}};return t(e,e.exports),e.exports}var c=function(t){return t&&t.Math==Math&&t},f=c("object"==typeof globalThis&&globalThis)||c("object"==typeof window&&window)||c("object"==typeof self&&self)||c("object"==typeof i&&i)||function(){return this}()||Function("return this")(),a=function(t){try{return!!t()}catch(t){return!0}},l=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),s={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,y={f:p&&!s.call({1:2},1)?function(t){var e=p(this,t);return!!e&&e.enumerable}:s},g=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},v={}.toString,b="".split,d=a((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==function(t){return v.call(t).slice(8,-1)}(t)?b.call(t,""):Object(t)}:Object,h=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},j=function(t){return d(h(t))},m=function(t){return"object"==typeof t?null!==t:"function"==typeof t},O=function(t,e){if(!m(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!m(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!m(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!m(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},S={}.hasOwnProperty,w=function(t,e){return S.call(t,e)},P=f.document,E=m(P)&&m(P.createElement),T=!l&&!a((function(){return 7!=Object.defineProperty((t="div",E?P.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),k=Object.getOwnPropertyDescriptor,M={f:l?k:function(t,e){if(t=j(t),e=O(e,!0),T)try{return k(t,e)}catch(t){}if(w(t,e))return g(!y.f.call(t,e),t[e])}},x=function(t){if(!m(t))throw TypeError(String(t)+" is not an object");return t},I=Object.defineProperty,_={f:l?I:function(t,e,n){if(x(t),e=O(e,!0),x(n),T)try{return I(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},F=l?function(t,e,n){return _.f(t,e,g(1,n))}:function(t,e,n){return t[e]=n,t},L=function(t,e){try{F(f,t,e)}catch(n){f[t]=e}return e},N="__core-js_shared__",q=f[N]||L(N,{}),z=Function.toString;"function"!=typeof q.inspectSource&&(q.inspectSource=function(t){return z.call(t)});var C,D,A,G,W=q.inspectSource,K=f.WeakMap,R="function"==typeof K&&/native code/.test(W(K)),V=u((function(t){(t.exports=function(t,e){return q[t]||(q[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.1",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),Y=0,B=Math.random(),H=V("keys"),J={},Q=f.WeakMap;if(R){var U=q.state||(q.state=new Q),X=U.get,Z=U.has,$=U.set;C=function(t,e){return e.facade=t,$.call(U,t,e),e},D=function(t){return X.call(U,t)||{}},A=function(t){return Z.call(U,t)}}else{var tt=H[G="state"]||(H[G]=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++Y+B).toString(36)}(G));J[tt]=!0,C=function(t,e){return e.facade=t,F(t,tt,e),e},D=function(t){return w(t,tt)?t[tt]:{}},A=function(t){return w(t,tt)}}var et={set:C,get:D,has:A,enforce:function(t){return A(t)?D(t):C(t,{})},getterFor:function(t){return function(e){var n;if(!m(e)||(n=D(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},nt=u((function(t){var e=et.get,n=et.enforce,r=String(String).split("String");(t.exports=function(t,e,o,i){var u,c=!!i&&!!i.unsafe,a=!!i&&!!i.enumerable,l=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof e||w(o,"name")||F(o,"name",e),(u=n(o)).source||(u.source=r.join("string"==typeof e?e:""))),t!==f?(c?!l&&t[e]&&(a=!0):delete t[e],a?t[e]=o:F(t,e,o)):a?t[e]=o:L(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||W(this)}))})),rt=f,ot=function(t){return"function"==typeof t?t:void 0},it=Math.ceil,ut=Math.floor,ct=function(t){return isNaN(t=+t)?0:(t>0?ut:it)(t)},ft=Math.min,at=Math.max,lt=Math.min,st=function(t){return function(e,n,r){var o,i,u=j(e),c=(o=u.length)>0?ft(ct(o),9007199254740991):0,f=function(t,e){var n=ct(t);return n<0?at(n+e,0):lt(n,e)}(r,c);if(t&&n!=n){for(;c>f;)if((i=u[f++])!=i)return!0}else for(;c>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}},pt={includes:st(!0),indexOf:st(!1)}.indexOf,yt=function(t,e){var n,r=j(t),o=0,i=[];for(n in r)!w(J,n)&&w(r,n)&&i.push(n);for(;e.length>o;)w(r,n=e[o++])&&(~pt(i,n)||i.push(n));return i},gt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],vt=gt.concat("length","prototype"),bt={f:Object.getOwnPropertyNames||function(t){return yt(t,vt)}},dt={f:Object.getOwnPropertySymbols},ht=function(t,e){return arguments.length<2?ot(rt[t])||ot(f[t]):rt[t]&&rt[t][e]||f[t]&&f[t][e]}("Reflect","ownKeys")||function(t){var e=bt.f(x(t)),n=dt.f;return n?e.concat(n(t)):e},jt=function(t,e){for(var n=ht(e),r=_.f,o=M.f,i=0;i<n.length;i++){var u=n[i];w(t,u)||r(t,u,o(e,u))}},mt=/#|\.prototype\./,Ot=function(t,e){var n=wt[St(t)];return n==Et||n!=Pt&&("function"==typeof e?a(e):!!e)},St=Ot.normalize=function(t){return String(t).replace(mt,".").toLowerCase()},wt=Ot.data={},Pt=Ot.NATIVE="N",Et=Ot.POLYFILL="P",Tt=Ot,kt=M.f,Mt=Object.keys||function(t){return yt(t,gt)},xt=function(t){return Object(h(t))},It=Object.assign,_t=Object.defineProperty,Ft=!It||a((function(){if(l&&1!==It({b:1},It(_t({},"a",{enumerable:!0,get:function(){_t(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=It({},t)[n]||Mt(It({},e)).join("")!=r}))?function(t,e){for(var n=xt(t),r=arguments.length,o=1,i=dt.f,u=y.f;r>o;)for(var c,f=d(arguments[o++]),a=i?Mt(f).concat(i(f)):Mt(f),s=a.length,p=0;s>p;)c=a[p++],l&&!u.call(f,c)||(n[c]=f[c]);return n}:It;!function(t,e){var n,r,o,i,u,c=t.target,a=t.global,l=t.stat;if(n=a?f:l?f[c]||L(c,{}):(f[c]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(u=kt(n,r))&&u.value:n[r],!Tt(a?r:c+(l?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;jt(i,o)}(t.sham||o&&o.sham)&&F(i,"sham",!0),nt(n,r,i,t)}}({target:"Object",stat:!0,forced:Object.assign!==Ft},{assign:Ft});var Lt=r.default.typekit,Nt=r.default.objectkit,qt=r.default.validationkit;return{create:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;if(!Lt.isObject(t))throw new Error("Invalid initial state.");var e=o.default.create(),n={state:t,prevState:null};function r(t){if(!Lt.isObject(t))throw new Error("Invalid payload.");var r=u(),o=Object.assign({},r,t);qt.isEqual(r,o)||(n.state=o,n.prevState=r,e.emit("update",[n.state,n.prevState]))}function i(t,n){e.on("update",(function(e,r){var o=Nt.getProp(e,t),i=Nt.getProp(r,t);Lt.isEqual(o,i)||n(o,i)}))}function u(){return n.state}function c(){return n.prevState}return{getState:u,getPrevState:c,updateState:r,subscribe:i}}}}));
