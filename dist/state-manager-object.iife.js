var StateManagerObject=function(t,e){"use strict";function a(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=a(t),i=a(e),n=r.default.typekit,o=r.default.objectkit,u=r.default.validationkit;return{create:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;if(!n.isObject(t))throw new Error("Invalid initial state.");var e=i.default.create(),a={state:t,prevState:null};function r(t){if(!n.isObject(t))throw new Error("Invalid payload.");var r=c(),i=Object.assign({},r,t);u.isEqual(r,i)||(a.state=i,a.prevState=r,e.emit("update",[a.state,a.prevState]))}function f(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r="string"==typeof t?t:void 0,i=void 0===r?t:a;if("function"!=typeof i)throw new Error("Subscriber function should be a type of function.");e.on("update",(function(t,e){var a=r?o.getProp(t,r):t,n=r?o.getProp(e,r):e;u.isEqual(a,n)||i(a,n)}))}function c(){return a.state}function v(){return a.prevState}return{getState:c,getPrevState:v,updateState:r,subscribe:f}}}}(Basekits,EventEmitterObject);
