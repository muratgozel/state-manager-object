!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("basekits"),require("event-emitter-object")):"function"==typeof define&&define.amd?define(["basekits","event-emitter-object"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).StateManagerObject=e(t.Basekits,t.EventEmitterObject)}(this,(function(t,e){"use strict";function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var a=i(t),n=i(e),r=a.default.typekit,o=a.default.objectkit,u=a.default.validationkit;return{create:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;if(!r.isObject(t))throw new Error("Invalid initial state.");var e=n.default.create(),i={state:t,prevState:null};function a(t){if(!r.isObject(t))throw new Error("Invalid payload.");var a=s(),n=Object.assign({},a,t);u.isEqual(a,n)||(i.state=n,i.prevState=a,e.emit("update",[i.state,i.prevState]))}function f(t,i){e.on("update",(function(e,a){var n=o.getProp(e,t),u=o.getProp(a,t);r.isEqual(n,u)||i(n,u)}))}function s(){return i.state}function d(){return i.prevState}return{getState:s,getPrevState:d,updateState:a,subscribe:f}}}}));
