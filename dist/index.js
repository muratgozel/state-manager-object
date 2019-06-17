const EventEmitter=require("event-emitter-object/source"),utility=require("my-little-lodash/source");function StateManager(a,b){EventEmitter.call(this,b||{}),this._state=a}StateManager.prototype=Object.create(EventEmitter.prototype),StateManager.prototype.constructor=StateManager,StateManager.prototype.utility=utility,StateManager.prototype._state=null,StateManager.prototype._prevState=null,StateManager.prototype.updateState=function(a){if(!this.utility.isObject(a))return;if(this.utility.isNull(this.getState()))throw new Error("Please call setInitialState first.");const b=Object.assign({},this.getState()),c=Object.assign({},b,a);this.utility.isEqual(b,c)||(this.emit("beforeUpdate",[b,c]),this._prevState=b,this._state=c,this.emit("afterUpdate",[this.getState(),this.getPrevState()]))},StateManager.prototype.subscribe=function(a,b){const c=this;c.utility.isFunction(b)&&(c.utility.isString(a)||c.utility.isArray(a))&&c.on("afterUpdate",function(d,e){const f=c.utility.getProp(e,a),g=c.utility.getProp(d,a);c.utility.isEqual(g,f)||b(g,f)})},StateManager.prototype.getState=function(){return this._state},StateManager.prototype.getPrevState=function(){return this._prevState},StateManager.prototype.setInitialState=function(a){this.utility.isObject(a)&&this.utility.isNull(this.getState())&&(this._state=a)},module.exports=StateManager;