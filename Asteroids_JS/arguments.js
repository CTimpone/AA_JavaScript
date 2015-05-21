var sum = function(){
  var val = 0;
  for(var i=0; i < arguments.length; i++){
    val += arguments[i];
  }
  return val;
}

Function.prototype.myBind = function(obj){
  var args = arguments.slice(1);
  var fn = this;
  return function(){
    return fn.apply(obj, args);
  };
}

var curriedSum = function(numArgs){
  var numbers = [];
  var _curriedSum = function(num){
    numbers.push(num);
    if (numbers.length === numArgs){
      var val = 0;
      for (var i=0; i < numArgs; i++) {
        val += numbers[i];
      };

      return val;
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
  var args = [];
  var fn = this;
  var _curry = function(arg){
    args.push(arg);
    if (args.length === numArgs){
      var val = fn.apply(null, args);
      return val;
    } else {
      return _curry;
    }
  };

  return _curry;
};
