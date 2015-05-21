Array.prototype.myInject = function (func) {
  var acc = this[0];

  function aux(arg) {
    acc=func(acc, arg)
  };

  this.myEach(aux);
  return acc;
};

Array.prototype.myMap = function (func) {
  var mapped = [];

  function aux(arg) {
    mapped.push(func(arg))
  };

  this.myEach(aux);
  return mapped;
};

Array.prototype.myEach = function (func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  };
};
