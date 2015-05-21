(function () {

  if (typeof window.Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = function () {};

  Util.inherits = function (ChildClass, BaseClass) {
    function Surrogate () {};
    Surrogate.prototype = BaseClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  Util.randomVec = function (length) {
    var vec, x, y;
    var signs = [1, -1];
    vec = [];
    x = Math.floor(Math.random() * (length - 1)) * signs[Math.floor(Math.random() * 2)];
    y = Math.sqrt((Math.pow(length, 2)) - (Math.pow(x, 2))) * signs[Math.floor(Math.random() * 2)];
    vec.push(x)
    vec.push(y);
    return vec;
  };
})();
