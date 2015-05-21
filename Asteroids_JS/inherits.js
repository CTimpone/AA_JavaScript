Function.prototype.inherits = function(base){
  var Surrogate = function(){};
  Surrogate.prototype = base.prototype;
  this.prototype = new Surrogate();
}
