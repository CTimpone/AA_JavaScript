(function(){

  if (typeof window.Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (obj) {
    obj.radius = Asteroid.RADIUS;
    obj.color = Asteroid.COLOR;
    obj.vel = Asteroids.Util.randomVec(Math.random() * 7);
    Asteroids.MovingObject.call(this, obj);
  }

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);
  Asteroid.COLOR = "red";
  Asteroid.RADIUS = 50;

  Asteroid.prototype.collideWith = function (otherObject) {
    firstObject = this;
    if (otherObject instanceof window.Asteroids.Ship){
      otherObject.relocate();
    } else if (otherObject instanceof window.Asteroids.Bullet) {
      this.game.remove(firstObject);
      this.game.remove(otherObject);
    }
  };

})();
