var StateManagerObject=function(t,e){"use strict";function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var a=i(t);function o(t,e){a.default.call(this,e),this.checkInitialState(t)}return o.prototype=Object.create(a.default.prototype),o.prototype.constructor=o,o.prototype._state={},o.prototype._prevState=null,o.prototype.checkInitialState=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;e.validationkit.isObject(t)&&(this._state=t)},o.prototype.updateState=function(t){if(e.validationkit.isObject(t)){var i=Object.assign({},this.getState()),a=Object.assign({},i,t);return!e.validationkit.isEqual(i,a)&&(this._prevState=i,this._state=a,this.emit("update",[this.getState(),this.getPrevState()]),!0)}},o.prototype.subscribe=function(t,i){e.validationkit.isFunction(i)&&(e.validationkit.isString(t)||e.validationkit.isArray(t))&&this.on("update",(function(a,o){var n=e.objectkit.getProp(o,t),r=e.objectkit.getProp(a,t);e.validationkit.isEqual(r,n)||i(r,n)}))},o.prototype.getState=function(){return this._state},o.prototype.getPrevState=function(){return this._prevState},o}(EventEmitterObject,Basekits);
