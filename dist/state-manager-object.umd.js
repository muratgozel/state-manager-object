!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("event-emitter-object"),require("basekits")):"function"==typeof define&&define.amd?define(["event-emitter-object","basekits"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).StateManagerObject=e(t.EventEmitterObject,t.Basekits)}(this,(function(t,e){"use strict";function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=i(t);function a(t,e){o.default.call(this,e),this.checkInitialState(t)}return a.prototype=Object.create(o.default.prototype),a.prototype.constructor=a,a.prototype._state={},a.prototype._prevState=null,a.prototype.checkInitialState=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;e.validationkit.isObject(t)&&(this._state=t)},a.prototype.updateState=function(t){if(e.validationkit.isObject(t)){var i=Object.assign({},this.getState()),o=Object.assign({},i,t);return!e.validationkit.isEqual(i,o)&&(this._prevState=i,this._state=o,this.emit("update",[this.getState(),this.getPrevState()]),!0)}},a.prototype.subscribe=function(t,i){e.validationkit.isFunction(i)&&(e.validationkit.isString(t)||e.validationkit.isArray(t))&&this.on("update",(function(o,a){var n=e.objectkit.getProp(a,t),r=e.objectkit.getProp(o,t);e.validationkit.isEqual(r,n)||i(r,n)}))},a.prototype.getState=function(){return this._state},a.prototype.getPrevState=function(){return this._prevState},a}));
