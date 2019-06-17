(function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?this:self:global:window,b.StateManagerObject=a()}})(function(){var a=Math.min,b=Math.max;return function(){function b(d,e,g){function a(j,i){if(!e[j]){if(!d[j]){var f="function"==typeof require&&require;if(!i&&f)return f(j,!0);if(h)return h(j,!0);var c=new Error("Cannot find module '"+j+"'");throw c.code="MODULE_NOT_FOUND",c}var k=e[j]={exports:{}};d[j][0].call(k.exports,function(b){var c=d[j][1][b];return a(c||b)},k,k.exports,b,d,e,g)}return e[j].exports}for(var h="function"==typeof require&&require,c=0;c<g.length;c++)a(g[c]);return a}return b}()({1:[function(a,b){var c=a("../internals/is-object");b.exports=function(a){if(!c(a))throw TypeError(a+" is not an object");return a}},{"../internals/is-object":21}],2:[function(a,b){var c=a("../internals/to-indexed-object"),d=a("../internals/to-length"),e=a("../internals/to-absolute-index"),f=function(a){return function(b,f,g){var h,i=c(b),j=d(i.length),k=e(g,j);if(a&&f!=f){for(;j>k;)if(h=i[k++],h!=h)return!0;}else for(;j>k;k++)if((a||k in i)&&i[k]===f)return a||k||0;return!a&&-1}};b.exports={includes:f(!0),indexOf:f(!1)}},{"../internals/to-absolute-index":39,"../internals/to-indexed-object":40,"../internals/to-length":42}],3:[function(a,b){var c={}.toString;b.exports=function(a){return c.call(a).slice(8,-1)}},{}],4:[function(a,b){var c=a("../internals/has"),d=a("../internals/own-keys"),e=a("../internals/object-get-own-property-descriptor"),f=a("../internals/object-define-property");b.exports=function(a,b){for(var g,h=d(b),j=f.f,k=e.f,l=0;l<h.length;l++)g=h[l],c(a,g)||j(a,g,k(b,g))}},{"../internals/has":14,"../internals/object-define-property":25,"../internals/object-get-own-property-descriptor":26,"../internals/own-keys":32}],5:[function(a,b){b.exports=function(a,b){return{enumerable:!(1&a),configurable:!(2&a),writable:!(4&a),value:b}}},{}],6:[function(a,b){var c=a("../internals/fails");b.exports=!c(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"../internals/fails":10}],7:[function(a,b){var c=a("../internals/global"),d=a("../internals/is-object"),e=c.document,f=d(e)&&d(e.createElement);b.exports=function(a){return f?e.createElement(a):{}}},{"../internals/global":13,"../internals/is-object":21}],8:[function(a,b){b.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},{}],9:[function(a,b){var c=a("../internals/global"),d=a("../internals/object-get-own-property-descriptor").f,e=a("../internals/hide"),f=a("../internals/redefine"),g=a("../internals/set-global"),h=a("../internals/copy-constructor-properties"),i=a("../internals/is-forced");b.exports=function(a,b){var j,k,l,m,n,o,p=a.target,q=a.global,r=a.stat;if(k=q?c:r?c[p]||g(p,{}):(c[p]||{}).prototype,k)for(l in b){if(n=b[l],a.noTargetGet?(o=d(k,l),m=o&&o.value):m=k[l],j=i(q?l:p+(r?".":"#")+l,a.forced),!j&&void 0!==m){if(typeof n==typeof m)continue;h(n,m)}(a.sham||m&&m.sham)&&e(n,"sham",!0),f(k,l,n,a)}}},{"../internals/copy-constructor-properties":4,"../internals/global":13,"../internals/hide":16,"../internals/is-forced":20,"../internals/object-get-own-property-descriptor":26,"../internals/redefine":34,"../internals/set-global":36}],10:[function(a,b){b.exports=function(a){try{return!!a()}catch(a){return!0}}},{}],11:[function(a,b){var c=a("../internals/shared");b.exports=c("native-function-to-string",Function.toString)},{"../internals/shared":38}],12:[function(a,b){var c=a("../internals/path"),d=a("../internals/global"),e=function(a){return"function"==typeof a?a:void 0};b.exports=function(a,b){return 2>arguments.length?e(c[a])||e(d[a]):c[a]&&c[a][b]||d[a]&&d[a][b]}},{"../internals/global":13,"../internals/path":33}],13:[function(a,b){(function(a){var c=function(a){return a&&a.Math==Math&&a};b.exports=c(typeof globalThis=="object"&&globalThis)||c(typeof window=="object"&&window)||c(typeof self=="object"&&self)||c(typeof a=="object"&&a)||Function("return this")()}).call(this,"undefined"==typeof global?"undefined"==typeof self?"undefined"==typeof window?{}:window:self:global)},{}],14:[function(a,b){var c={}.hasOwnProperty;b.exports=function(a,b){return c.call(a,b)}},{}],15:[function(a,b){b.exports={}},{}],16:[function(a,b){var c=a("../internals/descriptors"),d=a("../internals/object-define-property"),e=a("../internals/create-property-descriptor");b.exports=c?function(a,b,c){return d.f(a,b,e(1,c))}:function(a,b,c){return a[b]=c,a}},{"../internals/create-property-descriptor":5,"../internals/descriptors":6,"../internals/object-define-property":25}],17:[function(a,b){var c=a("../internals/descriptors"),d=a("../internals/fails"),e=a("../internals/document-create-element");b.exports=!c&&!d(function(){return 7!=Object.defineProperty(e("div"),"a",{get:function(){return 7}}).a})},{"../internals/descriptors":6,"../internals/document-create-element":7,"../internals/fails":10}],18:[function(a,b){var c=a("../internals/fails"),d=a("../internals/classof-raw"),e="".split;b.exports=c(function(){return!Object("z").propertyIsEnumerable(0)})?function(a){return"String"==d(a)?e.call(a,""):Object(a)}:Object},{"../internals/classof-raw":3,"../internals/fails":10}],19:[function(a,b){var c,d,e,f=a("../internals/native-weak-map"),g=a("../internals/global"),h=a("../internals/is-object"),i=a("../internals/hide"),j=a("../internals/has"),k=a("../internals/shared-key"),l=a("../internals/hidden-keys"),m=g.WeakMap,n=function(a){return e(a)?d(a):c(a,{})};if(f){var o=new m,p=o.get,q=o.has,r=o.set;c=function(a,b){return r.call(o,a,b),b},d=function(a){return p.call(o,a)||{}},e=function(a){return q.call(o,a)}}else{var s=k("state");l[s]=!0,c=function(a,b){return i(a,s,b),b},d=function(a){return j(a,s)?a[s]:{}},e=function(a){return j(a,s)}}b.exports={set:c,get:d,has:e,enforce:n,getterFor:function(a){return function(b){var c;if(!h(b)||(c=d(b)).type!==a)throw TypeError("Incompatible receiver, "+a+" required");return c}}}},{"../internals/global":13,"../internals/has":14,"../internals/hidden-keys":15,"../internals/hide":16,"../internals/is-object":21,"../internals/native-weak-map":23,"../internals/shared-key":37}],20:[function(a,b){var c=a("../internals/fails"),d=/#|\.prototype\./,e=function(a,b){var d=g[f(a)];return!(d!=i)||d!=h&&("function"==typeof b?c(b):!!b)},f=e.normalize=function(a){return(a+"").replace(d,".").toLowerCase()},g=e.data={},h=e.NATIVE="N",i=e.POLYFILL="P";b.exports=e},{"../internals/fails":10}],21:[function(a,b){b.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a}},{}],22:[function(a,b){b.exports=!1},{}],23:[function(a,b){var c=a("../internals/global"),d=a("../internals/function-to-string"),e=c.WeakMap;b.exports="function"==typeof e&&/native code/.test(d.call(e))},{"../internals/function-to-string":11,"../internals/global":13}],24:[function(a,b){'use strict';var c=a("../internals/descriptors"),d=a("../internals/fails"),e=a("../internals/object-keys"),f=a("../internals/object-get-own-property-symbols"),g=a("../internals/object-property-is-enumerable"),h=a("../internals/to-object"),i=a("../internals/indexed-object"),j=Object.assign;b.exports=!j||d(function(){var a={},b={},c=Symbol(),d="abcdefghijklmnopqrst";return a[c]=7,d.split("").forEach(function(a){b[a]=a}),7!=j({},a)[c]||e(j({},b)).join("")!=d})?function(a){for(var b=h(a),d=arguments.length,k=1,l=f.f,m=g.f;d>k;)for(var n,o=i(arguments[k++]),p=l?e(o).concat(l(o)):e(o),q=p.length,r=0;q>r;)n=p[r++],(!c||m.call(o,n))&&(b[n]=o[n]);return b}:j},{"../internals/descriptors":6,"../internals/fails":10,"../internals/indexed-object":18,"../internals/object-get-own-property-symbols":28,"../internals/object-keys":30,"../internals/object-property-is-enumerable":31,"../internals/to-object":43}],25:[function(a,b,c){var d=a("../internals/descriptors"),e=a("../internals/ie8-dom-define"),f=a("../internals/an-object"),g=a("../internals/to-primitive"),h=Object.defineProperty;c.f=d?h:function(a,b,c){if(f(a),b=g(b,!0),f(c),e)try{return h(a,b,c)}catch(a){}if("get"in c||"set"in c)throw TypeError("Accessors not supported");return"value"in c&&(a[b]=c.value),a}},{"../internals/an-object":1,"../internals/descriptors":6,"../internals/ie8-dom-define":17,"../internals/to-primitive":44}],26:[function(a,b,c){var d=a("../internals/descriptors"),e=a("../internals/object-property-is-enumerable"),f=a("../internals/create-property-descriptor"),g=a("../internals/to-indexed-object"),h=a("../internals/to-primitive"),i=a("../internals/has"),j=a("../internals/ie8-dom-define"),k=Object.getOwnPropertyDescriptor;c.f=d?k:function(a,b){if(a=g(a),b=h(b,!0),j)try{return k(a,b)}catch(a){}return i(a,b)?f(!e.f.call(a,b),a[b]):void 0}},{"../internals/create-property-descriptor":5,"../internals/descriptors":6,"../internals/has":14,"../internals/ie8-dom-define":17,"../internals/object-property-is-enumerable":31,"../internals/to-indexed-object":40,"../internals/to-primitive":44}],27:[function(a,b,c){var d=a("../internals/object-keys-internal"),e=a("../internals/enum-bug-keys"),f=e.concat("length","prototype");c.f=Object.getOwnPropertyNames||function(a){return d(a,f)}},{"../internals/enum-bug-keys":8,"../internals/object-keys-internal":29}],28:[function(a,b,c){c.f=Object.getOwnPropertySymbols},{}],29:[function(a,b){var c=a("../internals/has"),d=a("../internals/to-indexed-object"),e=a("../internals/array-includes").indexOf,f=a("../internals/hidden-keys");b.exports=function(a,b){var g,h=d(a),j=0,k=[];for(g in h)!c(f,g)&&c(h,g)&&k.push(g);for(;b.length>j;)c(h,g=b[j++])&&(~e(k,g)||k.push(g));return k}},{"../internals/array-includes":2,"../internals/has":14,"../internals/hidden-keys":15,"../internals/to-indexed-object":40}],30:[function(a,b){var c=a("../internals/object-keys-internal"),d=a("../internals/enum-bug-keys");b.exports=Object.keys||function(a){return c(a,d)}},{"../internals/enum-bug-keys":8,"../internals/object-keys-internal":29}],31:[function(a,b,c){'use strict';var d={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,f=e&&!d.call({1:2},1);c.f=f?function(a){var b=e(this,a);return!!b&&b.enumerable}:d},{}],32:[function(a,b){var c=a("../internals/get-built-in"),d=a("../internals/object-get-own-property-names"),e=a("../internals/object-get-own-property-symbols"),f=a("../internals/an-object");b.exports=c("Reflect","ownKeys")||function(a){var b=d.f(f(a)),c=e.f;return c?b.concat(c(a)):b}},{"../internals/an-object":1,"../internals/get-built-in":12,"../internals/object-get-own-property-names":27,"../internals/object-get-own-property-symbols":28}],33:[function(a,b){b.exports=a("../internals/global")},{"../internals/global":13}],34:[function(a,b){var c=a("../internals/global"),d=a("../internals/shared"),e=a("../internals/hide"),f=a("../internals/has"),g=a("../internals/set-global"),h=a("../internals/function-to-string"),i=a("../internals/internal-state"),j=i.get,k=i.enforce,l=(h+"").split("toString");d("inspectSource",function(a){return h.call(a)}),(b.exports=function(a,b,d,h){var i=!!h&&!!h.unsafe,j=!!h&&!!h.enumerable,m=!!h&&!!h.noTargetGet;return("function"==typeof d&&("string"==typeof b&&!f(d,"name")&&e(d,"name",b),k(d).source=l.join("string"==typeof b?b:"")),a===c)?void(j?a[b]=d:g(b,d)):void(i?!m&&a[b]&&(j=!0):delete a[b],j?a[b]=d:e(a,b,d))})(Function.prototype,"toString",function(){return"function"==typeof this&&j(this).source||h.call(this)})},{"../internals/function-to-string":11,"../internals/global":13,"../internals/has":14,"../internals/hide":16,"../internals/internal-state":19,"../internals/set-global":36,"../internals/shared":38}],35:[function(a,b){b.exports=function(a){if(a==null)throw TypeError("Can't call method on "+a);return a}},{}],36:[function(a,b){var c=a("../internals/global"),d=a("../internals/hide");b.exports=function(a,b){try{d(c,a,b)}catch(d){c[a]=b}return b}},{"../internals/global":13,"../internals/hide":16}],37:[function(a,b){var c=a("../internals/shared"),d=a("../internals/uid"),e=c("keys");b.exports=function(a){return e[a]||(e[a]=d(a))}},{"../internals/shared":38,"../internals/uid":45}],38:[function(a,b){var c=a("../internals/global"),d=a("../internals/set-global"),e=a("../internals/is-pure"),f="__core-js_shared__",g=c[f]||d(f,{});(b.exports=function(a,b){return g[a]||(g[a]=b===void 0?{}:b)})("versions",[]).push({version:"3.1.3",mode:e?"pure":"global",copyright:"\xA9 2019 Denis Pushkarev (zloirock.ru)"})},{"../internals/global":13,"../internals/is-pure":22,"../internals/set-global":36}],39:[function(c,d){var e=c("../internals/to-integer");d.exports=function(c,d){var f=e(c);return 0>f?b(f+d,0):a(f,d)}},{"../internals/to-integer":41}],40:[function(a,b){var c=a("../internals/indexed-object"),d=a("../internals/require-object-coercible");b.exports=function(a){return c(d(a))}},{"../internals/indexed-object":18,"../internals/require-object-coercible":35}],41:[function(a,b){var c=Math.ceil,d=Math.floor;b.exports=function(a){return isNaN(a=+a)?0:(0<a?d:c)(a)}},{}],42:[function(b,c){var d=b("../internals/to-integer");c.exports=function(b){return 0<b?a(d(b),9007199254740991):0}},{"../internals/to-integer":41}],43:[function(a,b){var c=a("../internals/require-object-coercible");b.exports=function(a){return Object(c(a))}},{"../internals/require-object-coercible":35}],44:[function(a,b){var c=a("../internals/is-object");b.exports=function(a,b){if(!c(a))return a;var d,e;if(b&&"function"==typeof(d=a.toString)&&!c(e=d.call(a)))return e;if("function"==typeof(d=a.valueOf)&&!c(e=d.call(a)))return e;if(!b&&"function"==typeof(d=a.toString)&&!c(e=d.call(a)))return e;throw TypeError("Can't convert object to primitive value")}},{"../internals/is-object":21}],45:[function(a,b){var c=0,d=Math.random();b.exports=function(a){return"Symbol("+((a===void 0?"":a)+"")+")_"+(++c+d).toString(36)}},{}],46:[function(a){var b=a("../internals/export"),c=a("../internals/object-assign");b({target:"Object",stat:!0,forced:Object.assign!==c},{assign:c})},{"../internals/export":9,"../internals/object-assign":24}],47:[function(a,b){function c(a){const b=a||{},c=Object.keys(b);this._events=0<c.length?c.reduce(function(a,c){return a[c]=Array.isArray(b[c])?b[c]:[b[c]],a},{}):{}}c.prototype._eventsWillBeFiredOnce={},c.prototype.on=function(a,b,c=null){if("function"!=typeof b||"string"!=typeof a)return!1;this._events.hasOwnProperty(a)||(this._events[a]=[]),this._eventsWillBeFiredOnce.hasOwnProperty(a)||(this._eventsWillBeFiredOnce[a]=[]);const d="[object Object]"===Object.prototype.toString.call(c)?c:{once:!1},e=this._events[a].push(b);return d.once&&!0===d.once&&this._eventsWillBeFiredOnce[a].push(e-1),!0},c.prototype.once=function(a,b){return this.on(a,b,{once:!0})},c.prototype.emit=function(a,b=[]){if(!this._events.hasOwnProperty(a)){if("error"==a){const a=b instanceof Error?b:new Error("Unhandled error.");throw a}return!1}const c=Array.isArray(b)?b:[b];for(let d=0;d<this._events[a].length;d++)this._events[a][d].apply(this,c);if(this._eventsWillBeFiredOnce.hasOwnProperty(a))for(var d=0;d<this._eventsWillBeFiredOnce[a].length;d++)this.removeListener(a,this._eventsWillBeFiredOnce[a][d]);return!0},c.prototype.removeListener=function(a,b){this._events[a].splice(b,1)},c.prototype.removeListeners=function(a){return!("string"!=typeof a)&&!!this._events.hasOwnProperty(a)&&(this._events[a]=[],this._eventsWillBeFiredOnce.hasOwnProperty(a)&&(this._eventsWillBeFiredOnce[a]=[]),!0)},c.prototype.flushEventEmitter=function(){this._events={},this._eventsWillBeFiredOnce={}},b.exports=c},{}],48:[function(a,b){function c(){}const d=Object.assign({},a("./methods/type"),a("./methods/formatting"),a("./methods/string"),a("./methods/array"),a("./methods/object"),a("./methods/functions"),a("./methods/dom"),a("./methods/slugify")),e=Object.keys(d);for(var f=0;f<e.length;f++)c.prototype[e[f]]=d[e[f]];b.exports=new c},{"./methods/array":49,"./methods/dom":50,"./methods/formatting":51,"./methods/functions":52,"./methods/object":53,"./methods/slugify":54,"./methods/string":55,"./methods/type":56}],49:[function(a,b){b.exports={removeDuplicates:function(a){return a.filter(function(b,c){return a.indexOf(b)===c})},sortItemsBy:function(a,b,c="asc"){let d=null;if(this.isArray(b))d="__"+b.join("_"),a=a.map(function(a){return a[d]=this.getProp(a,b),a}.bind(this));else if(this.isString(b))d=b;else return a;return a.sort(function(e,a){const b=e[d],f=a[d];return"desc"==c?b>f?-1:f>b?1:0:(c="asc")?b>f?1:f>b?-1:0:b>f?1:f>b?-1:0})}}},{}],50:[function(a,b){b.exports={setWindowObject:function(a){this.browserWindow=a},setDocumentObject:function(a){this.browserDocument=a},getViewportDimensions:function(){this.isUndefined(this.browserWindow)&&(this.browserWindow=window),this.isUndefined(this.browserDocument)&&(this.browserDocument=document);let b=this.browserWindow,c="inner";return"innerWidth"in this.browserWindow||(c="client",b=this.browserDocument.documentElement||this.browserDocument.body),{width:b[c+"Width"],height:b[c+"Height"]}},hasWEBPSupport:function(){let a=null;return new Promise(function(b){function c(){return clearTimeout(a),b(1===d.width)}const d=new Image;d.onload=d.onerror=c,d.src="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",a=setTimeout(function(){return b(!1)},3e3)})}}},{}],51:[function(a,b){const c={tr:{u:["I","\u0130","\xDC","\xD6","\xC7","\u011E","\u015E"],l:["\u0131","i","\xFC","\xF6","\xE7","\u011F","\u015F"]},en:{u:[],l:[]}};b.exports={case:function(a,b,c="en"){switch(a){case"upper":return this.uppercase(b,c);break;case"lower":return this.lowercase(b,c);break;case"title":return this.titlecase(b,c);break;case"sentence":return this.sentencecase(b,c);break;default:}},uppercase:function(a,b="en"){if(!this.isString(a))return;const d=this.getProp(c,b,this.getProp(c,b.slice(0,2),{u:[],l:[]}));let e="";const f=a.length;for(let c=0;c<f;c++){const b=a[c],f=d.l.indexOf(b);e+=-1===f?b.toUpperCase():d.u[f]}return e},lowercase:function(a,b="en"){if(!this.isString(a))return;const d=this.getProp(c,b,this.getProp(c,b.slice(0,2),{u:[],l:[]}));let e="";const f=a.length;for(let c=0;c<f;c++){const b=a[c],f=d.u.indexOf(b);e+=-1===f?b.toLowerCase():d.l[f]}return e},titlecase:function(a,b="en"){if(!this.isString(a))return;let c="";const d=a.split(" "),e=d.length;for(let f=0;f<e;f++){const a=d[f];c+=this.uppercase(a.slice(0,1),b)+this.lowercase(a.slice(1),b)+(f+1===e?"":" ")}return c},sentencecase:function(a,b="en"){return this.isString(a)?this.uppercase(a.slice(0,1),b)+this.lowercase(a.slice(1),b):void 0},template:function(a,b={}){if(!this.isString(a))return;const c=/({{)[^{}]+(}})/gm,d=a.match(c);return d&&0!==d.length?this.isObject(b)?d.reduce(function(a,c){const d=c.slice(2,-2);return b.hasOwnProperty(d)&&(a=a.replace(c,b[d])),a},a):a:a},sprintf:function(a,b){function c(a){if(0===b.length||!d.test(a))return a;else{const e=a.replace(d,b[0]);return b.shift(),c(e)}}if("number"==typeof b&&(b=b.toString()),"string"==typeof b&&0<b.length&&(b=[b]),!Array.isArray(b))return a;const d=/(%s)/;return d.test(a)?c(a):a},isEqual:function(a,b){if(a===b)return!0;if(null===a||null===b)return!1;const c=this.getType(a),d=this.getType(b);if(c!=d)return!1;switch(c){case"object":const d=Object.keys(a),e=Object.keys(b),f=d.length;if(f!==e.length)return!1;for(let c=0;c<f;c++){const f=d[c];if(-1===e.indexOf(f))return!1;if(!this.isEqual(a[f],b[f]))return!1}return!0;break;case"array":const g=a.length;if(g!==b.length)return!1;for(let c=0;c<g;c++)if(!this.isEqual(a[c],b[c]))return!1;return!0;break;case"error":const h=this.objectifyError(a),i=this.objectifyError(b);return this.isEqual(h,i);break;case"date":return a.getTime()===b.getTime();break;case"undefined":return!0;break;case"number":case"nan":case"string":case"boolean":case"domelement":return a===b;break;case"regexp":return a.toString()===b.toString();break;default:return!1;}},objectifyError:function(a){const b=JSON.stringify(a,Object.getOwnPropertyNames(a)),c=JSON.parse(b);return c.stack=c.stack.split(/[\n]/g),c},stringifyError:function(a){return JSON.stringify(this.objectifyError(a))}}},{}],52:[function(c,d){d.exports={waitForIt:function(a,b,c=300,d=1e4){let e=setInterval(function(){!0===a.call()&&(clearInterval(e),b.call())},c);setTimeout(function(){e&&(clearInterval(e),b.call(null,!1))},d)},throttle:function(a,b,c){let d=!0,e=!0;if("function"!=typeof a)throw new TypeError("Invalid debounce function.");return this.isObject(c)&&(d="leading"in c?!!c.leading:d,e="trailing"in c?!!c.trailing:e),this.debounce(a,b,{leading:d,maxWait:b,trailing:e})},debounce:function(c,d,e){function f(a){let b=o,d=p;return o=p=void 0,u=a,r=c.apply(d,b),r}function g(a){return u=a,s=setTimeout(j,d),v?f(a):r}function h(b){let c=b-t,e=b-u,f=d-c;return w?a(f,q-e):f}function i(a){let b=a-t,c=a-u;return void 0===t||b>=d||0>b||w&&c>=q}function j(){let a=Date.now();return i(a)?k(a):void(s=setTimeout(j,h(a)))}function k(a){return(s=void 0,x&&o)?f(a):(o=p=void 0,r)}function l(){void 0!==s&&clearTimeout(s),u=0,o=t=p=s=void 0}function m(){return void 0===s?r:k(Date.now())}function n(){let a=Date.now(),b=i(a);if(o=arguments,p=this,t=a,b){if(void 0===s)return g(t);if(w)return s=setTimeout(j,d),f(t)}return void 0===s&&(s=setTimeout(j,d)),r}let o,p,q,r,s,t,u=0,v=!1,w=!1,x=!0;if("function"!=typeof c)throw new TypeError("Invalid debounce function.");return d=parseFloat(d)||0,this.isObject(e)&&(v=!!e.leading,w="maxWait"in e,q=w?b(parseFloat(e.maxWait)||0,d):q,x="trailing"in e?!!e.trailing:x),n.cancel=l,n.flush=m,n}}},{}],53:[function(a,b){b.exports={getProp:function(a,b,c=void 0){if(!this.isObject(a))return c;if(this.isString(b))b=[b];else if(!this.isArray(b))return c;if(1>b.length)return c;let d=0;for(const e=b.length;this.isObject(a)&&d<e;)a=a[b[d]],d+=1;return this.isUndefined(a)?c:a},removeProp:function(a,b){return Object.keys(b).reduce(function(c,d){return d!=a&&(c[d]=b[d]),c},{})}}},{}],54:[function(a,b){const c={ş:"s",Ş:"S",ı:"i",İ:"I",ç:"c",Ç:"C",ü:"u",Ü:"U",ö:"o",Ö:"O",ğ:"g",Ğ:"G",À:"A",Á:"A",Â:"A",Ã:"A",Ä:"Ae",Å:"A",Æ:"AE",Ç:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ő:"O",Ø:"O",Ù:"U",Ú:"U",Û:"U",Ű:"U",Ý:"Y",Þ:"TH",ß:"ss",à:"a",á:"a",â:"a",ã:"a",ä:"ae",å:"a",æ:"ae",ç:"c",è:"e",é:"e",ê:"e",ë:"e",ì:"i",í:"i",î:"i",ï:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ő:"o",ø:"o",ù:"u",ú:"u",û:"u",ű:"u",ý:"y",þ:"th",ÿ:"y",ẞ:"SS",ا:"a",أ:"a",إ:"i",آ:"aa",ؤ:"u",ئ:"e",ء:"a",ب:"b",ت:"t",ث:"th",ج:"j",ح:"h",خ:"kh",د:"d",ذ:"th",ر:"r",ز:"z",س:"s",ش:"sh",ص:"s",ض:"dh",ط:"t",ظ:"z",ع:"a",غ:"gh",ف:"f",ق:"q",ك:"k",ل:"l",م:"m",ن:"n",ه:"h",و:"w",ي:"y",ى:"a",ة:"h",ﻻ:"la",ﻷ:"laa",ﻹ:"lai",ﻵ:"laa",گ:"g",چ:"ch",پ:"p",ژ:"zh",ک:"k",ی:"y","َ":"a","ً":"an","ِ":"e","ٍ":"en","ُ":"u","ٌ":"on","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9",က:"k",ခ:"kh",ဂ:"g",ဃ:"ga",င:"ng",စ:"s",ဆ:"sa",ဇ:"z",စျ:"za",ည:"ny",ဋ:"t",ဌ:"ta",ဍ:"d",ဎ:"da",ဏ:"na",တ:"t",ထ:"ta",ဒ:"d",ဓ:"da",န:"n",ပ:"p",ဖ:"pa",ဗ:"b",ဘ:"ba",မ:"m",ယ:"y",ရ:"ya",လ:"l",ဝ:"w",သ:"th",ဟ:"h",ဠ:"la",အ:"a","ြ":"y","ျ":"ya","ွ":"w","ြွ":"yw","ျွ":"ywa","ှ":"h",ဧ:"e","၏":"-e",ဣ:"i",ဤ:"-i",ဉ:"u",ဦ:"-u",ဩ:"aw",သြော:"aw",ဪ:"aw","၀":"0","၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","္":"","့":"","း":"",č:"c",ď:"d",ě:"e",ň:"n",ř:"r",š:"s",ť:"t",ů:"u",ž:"z",Č:"C",Ď:"D",Ě:"E",Ň:"N",Ř:"R",Š:"S",Ť:"T",Ů:"U",Ž:"Z",ހ:"h",ށ:"sh",ނ:"n",ރ:"r",ބ:"b",ޅ:"lh",ކ:"k",އ:"a",ވ:"v",މ:"m",ފ:"f",ދ:"dh",ތ:"th",ލ:"l",ގ:"g",ޏ:"gn",ސ:"s",ޑ:"d",ޒ:"z",ޓ:"t",ޔ:"y",ޕ:"p",ޖ:"j",ޗ:"ch",ޘ:"tt",ޙ:"hh",ޚ:"kh",ޛ:"th",ޜ:"z",ޝ:"sh",ޞ:"s",ޟ:"d",ޠ:"t",ޡ:"z",ޢ:"a",ޣ:"gh",ޤ:"q",ޥ:"w","ަ":"a","ާ":"aa","ި":"i","ީ":"ee","ު":"u","ޫ":"oo","ެ":"e","ޭ":"ey","ޮ":"o","ޯ":"oa","ް":"",ა:"a",ბ:"b",გ:"g",დ:"d",ე:"e",ვ:"v",ზ:"z",თ:"t",ი:"i",კ:"k",ლ:"l",მ:"m",ნ:"n",ო:"o",პ:"p",ჟ:"zh",რ:"r",ს:"s",ტ:"t",უ:"u",ფ:"p",ქ:"k",ღ:"gh",ყ:"q",შ:"sh",ჩ:"ch",ც:"ts",ძ:"dz",წ:"ts",ჭ:"ch",ხ:"kh",ჯ:"j",ჰ:"h",α:"a",β:"v",γ:"g",δ:"d",ε:"e",ζ:"z",η:"i",θ:"th",ι:"i",κ:"k",λ:"l",μ:"m",ν:"n",ξ:"ks",ο:"o",π:"p",ρ:"r",σ:"s",τ:"t",υ:"y",φ:"f",χ:"x",ψ:"ps",ω:"o",ά:"a",έ:"e",ί:"i",ό:"o",ύ:"y",ή:"i",ώ:"o",ς:"s",ϊ:"i",ΰ:"y",ϋ:"y",ΐ:"i",Α:"A",Β:"B",Γ:"G",Δ:"D",Ε:"E",Ζ:"Z",Η:"I",Θ:"TH",Ι:"I",Κ:"K",Λ:"L",Μ:"M",Ν:"N",Ξ:"KS",Ο:"O",Π:"P",Ρ:"R",Σ:"S",Τ:"T",Υ:"Y",Φ:"F",Χ:"X",Ψ:"PS",Ω:"O",Ά:"A",Έ:"E",Ί:"I",Ό:"O",Ύ:"Y",Ή:"I",Ώ:"O",Ϊ:"I",Ϋ:"Y",ā:"a",ē:"e",ģ:"g",ī:"i",ķ:"k",ļ:"l",ņ:"n",ū:"u",Ā:"A",Ē:"E",Ģ:"G",Ī:"I",Ķ:"k",Ļ:"L",Ņ:"N",Ū:"U",Ќ:"Kj",ќ:"kj",Љ:"Lj",љ:"lj",Њ:"Nj",њ:"nj",Тс:"Ts",тс:"ts",ą:"a",ć:"c",ę:"e",ł:"l",ń:"n",ś:"s",ź:"z",ż:"z",Ą:"A",Ć:"C",Ę:"E",Ł:"L",Ń:"N",Ś:"S",Ź:"Z",Ż:"Z",Є:"Ye",І:"I",Ї:"Yi",Ґ:"G",є:"ye",і:"i",ї:"yi",ґ:"g",ă:"a",Ă:"A",ș:"s",Ș:"S",ț:"t",Ț:"T",ţ:"t",Ţ:"T",а:"a",б:"b",в:"v",г:"g",д:"d",е:"e",ё:"yo",ж:"zh",з:"z",и:"i",й:"i",к:"k",л:"l",м:"m",н:"n",о:"o",п:"p",р:"r",с:"s",т:"t",у:"u",ф:"f",х:"kh",ц:"c",ч:"ch",ш:"sh",щ:"sh",ъ:"",ы:"y",ь:"",э:"e",ю:"yu",я:"ya",А:"A",Б:"B",В:"V",Г:"G",Д:"D",Е:"E",Ё:"Yo",Ж:"Zh",З:"Z",И:"I",Й:"I",К:"K",Л:"L",М:"M",Н:"N",О:"O",П:"P",Р:"R",С:"S",Т:"T",У:"U",Ф:"F",Х:"Kh",Ц:"C",Ч:"Ch",Ш:"Sh",Щ:"Sh",Ъ:"",Ы:"Y",Ь:"",Э:"E",Ю:"Yu",Я:"Ya",ђ:"dj",ј:"j",ћ:"c",џ:"dz",Ђ:"Dj",Ј:"j",Ћ:"C",Џ:"Dz",ľ:"l",ĺ:"l",ŕ:"r",Ľ:"L",Ĺ:"L",Ŕ:"R",ả:"a",Ả:"A",ẳ:"a",Ẳ:"A",ẩ:"a",Ẩ:"A",đ:"d",Đ:"D",ẹ:"e",Ẹ:"E",ẽ:"e",Ẽ:"E",ẻ:"e",Ẻ:"E",ế:"e",Ế:"E",ề:"e",Ề:"E",ệ:"e",Ệ:"E",ễ:"e",Ễ:"E",ể:"e",Ể:"E",ỏ:"o",ọ:"o",Ọ:"o",ố:"o",Ố:"O",ồ:"o",Ồ:"O",ổ:"o",Ổ:"O",ộ:"o",Ộ:"O",ỗ:"o",Ỗ:"O",ơ:"o",Ơ:"O",ớ:"o",Ớ:"O",ờ:"o",Ờ:"O",ợ:"o",Ợ:"O",ỡ:"o",Ỡ:"O",Ở:"o",ở:"o",ị:"i",Ị:"I",ĩ:"i",Ĩ:"I",ỉ:"i",Ỉ:"i",ủ:"u",Ủ:"U",ụ:"u",Ụ:"U",ũ:"u",Ũ:"U",ư:"u",Ư:"U",ứ:"u",Ứ:"U",ừ:"u",Ừ:"U",ự:"u",Ự:"U",ữ:"u",Ữ:"U",ử:"u",Ử:"\u01B0",ỷ:"y",Ỷ:"y",ỳ:"y",Ỳ:"Y",ỵ:"y",Ỵ:"Y",ỹ:"y",Ỹ:"Y",ạ:"a",Ạ:"A",ấ:"a",Ấ:"A",ầ:"a",Ầ:"A",ậ:"a",Ậ:"A",ẫ:"a",Ẫ:"A",ắ:"a",Ắ:"A",ằ:"a",Ằ:"A",ặ:"a",Ặ:"A",ẵ:"a",Ẵ:"A","⓪":"0","①":"1","②":"2","③":"3","④":"4","⑤":"5","⑥":"6","⑦":"7","⑧":"8","⑨":"9","⑩":"10","⑪":"11","⑫":"12","⑬":"13","⑭":"14","⑮":"15","⑯":"16","⑰":"17","⑱":"18","⑲":"18","⑳":"18","⓵":"1","⓶":"2","⓷":"3","⓸":"4","⓹":"5","⓺":"6","⓻":"7","⓼":"8","⓽":"9","⓾":"10","⓿":"0","⓫":"11","⓬":"12","⓭":"13","⓮":"14","⓯":"15","⓰":"16","⓱":"17","⓲":"18","⓳":"19","⓴":"20","Ⓐ":"A","Ⓑ":"B","Ⓒ":"C","Ⓓ":"D","Ⓔ":"E","Ⓕ":"F","Ⓖ":"G","Ⓗ":"H","Ⓘ":"I","Ⓙ":"J","Ⓚ":"K","Ⓛ":"L","Ⓜ":"M","Ⓝ":"N","Ⓞ":"O","Ⓟ":"P","Ⓠ":"Q","Ⓡ":"R","Ⓢ":"S","Ⓣ":"T","Ⓤ":"U","Ⓥ":"V","Ⓦ":"W","Ⓧ":"X","Ⓨ":"Y","Ⓩ":"Z","ⓐ":"a","ⓑ":"b","ⓒ":"c","ⓓ":"d","ⓔ":"e","ⓕ":"f","ⓖ":"g","ⓗ":"h","ⓘ":"i","ⓙ":"j","ⓚ":"k","ⓛ":"l","ⓜ":"m","ⓝ":"n","ⓞ":"o","ⓟ":"p","ⓠ":"q","ⓡ":"r","ⓢ":"s","ⓣ":"t","ⓤ":"u","ⓦ":"v","ⓥ":"w","ⓧ":"x","ⓨ":"y","ⓩ":"z","∂":"d",ƒ:"f",œ:"oe",Œ:"OE",$:"USD","€":"EUR","₢":"BRN","₣":"FRF","£":"GBP","₤":"ITL","₦":"NGN","₧":"ESP","₩":"KRW","₪":"ILS","₫":"VND","₭":"LAK","₮":"MNT","₯":"GRD","₱":"ARS","₲":"PYG","₳":"ARA","₴":"UAH","₵":"GHS","¢":"cent","¥":"CNY",元:"CNY",円:"YEN","﷼":"IRR","₠":"EWE","฿":"THB","₨":"INR","₹":"INR","₰":"PF","₺":"TRY","؋":"AFN","₼":"AZN",лв:"BGN","៛":"KHR","₡":"CRC","₸":"KZT",ден:"MKD",zł:"PLN","₽":"RUB","₾":"GEL"};b.exports={slugify:function(a){if(!this.isString(a))return"";const b=this.transliterate(a);let c="";for(let d=0;d<b.length;d++){const a=b.charAt(d);c+=/[0-9a-zA-Z]/.test(a)?a:"-"}return c=c.replace(/[-]{2,}/g,"-"),c=c.replace(/(^[-])|([-]$)/g,""),c=c.toLowerCase(),"-"==c||0===c.length?"":c},transliterate:function(a){const b=Object.keys(c);let d="";for(let e=0;e<a.length;e++){const f=a.charAt(e);d+=-1===b.indexOf(f)?f:c[f]}return d}}},{}],55:[function(a,b){b.exports={hashcode:function(a){let b=0;if(!this.isString(a))return b;for(let c=0;c<a.length;c++){const d=a.charCodeAt(c);b=(b<<5)-b+d,b&=b}return b}}},{}],56:[function(a,b){b.exports={getType:function(a){return this.isObject(a)?"object":this.isArray(a)?"array":this.isPromise(a)?"promise":this.isError(a)?"error":this.isDate(a)?"date":this.isNull(a)?"null":this.isUndefined(a)?"undefined":this.isFunction(a)?"function":this.isNumber(a)?"number":this.isNan(a)?"nan":this.isRegExp(a)?"regexp":this.isString(a)?"string":this.isBoolean(a)?"boolean":this.isDOMElement(a)?"domelement":"none"},isString:function(a){return"string"==typeof a},isObject:function(a){return"[object Object]"===Object.prototype.toString.call(a)},isArray:function(a){return Array.isArray(a)},isPromise:function(a){return!!(a&&"function"==typeof a.then)},isError:function(a){return a instanceof Error},isDate:function(a){return a instanceof Date},isFunction:function(a){return"function"==typeof a},isNull:function(a){return null===a},isUndefined:function(a){return"undefined"==typeof a},isNumber:function(a){return"number"==typeof a&&!0===Number.isFinite(a)},isNan:function(a){return"number"==typeof a&&a!=+a},isRegExp:function(a){return a instanceof RegExp},isBoolean:function(a){return!0===a||!1===a},isDOMElement:function(a){return!!(a&&(a.nodeName||a.prop&&a.attr&&a.find))},isEmpty:function(a){return this.isObject(a)?this.isEqual({},a):this.isArray(a)?0===a.length:!!this.isNull(a)||!!this.isUndefined(a)||(this.isNumber(a)?this.isEqual(0,a):!!this.isNan(a)||(this.isString(a)?this.isEqual("",a):!!this.isBoolean(a)&&this.isEqual(!1,a)))}}},{}],57:[function(a,b){"use strict";function c(c,a){d.call(this,a||{}),this._state=c||{}}a("core-js/modules/es.object.assign");var d=a("event-emitter-object/source"),e=a("my-little-lodash/source");c.prototype=Object.create(d.prototype),c.prototype.constructor=c,c.prototype.utility=e,c.prototype._prevState=null,c.prototype.updateState=function(d){if(this.utility.isObject(d)){if(!this.utility.isObject(this.getState()))throw new Error("Current state is not an object and therefore canceled state update operation.");var a=Object.assign({},this.getState()),b=Object.assign({},a,d);this.utility.isEqual(a,b)||(this.emit("beforeUpdate",[a,b]),this._prevState=a,this._state=b,this.emit("afterUpdate",[this.getState(),this.getPrevState()]))}},c.prototype.subscribe=function(h,a){var b=this;b.utility.isFunction(a)&&(b.utility.isString(h)||b.utility.isArray(h))&&b.on("afterUpdate",function(c,d){var e=b.utility.getProp(d,h),f=b.utility.getProp(c,h);b.utility.isEqual(f,e)||a(f,e)})},c.prototype.getState=function(){return this._state},c.prototype.getPrevState=function(){return this._prevState},b.exports=c},{"core-js/modules/es.object.assign":46,"event-emitter-object/source":47,"my-little-lodash/source":48}]},{},[57])(57)});