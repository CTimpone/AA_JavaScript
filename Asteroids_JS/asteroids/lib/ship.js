(function(){

  if (typeof window.Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (obj) {
    obj.radius = Ship.RADIUS;
    obj.color = Ship.COLOR;
    obj.vel = [0, 0];
    Asteroids.MovingObject.call(this, obj);
  }

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);
  Ship.RADIUS = 10;
  Ship.COLOR = "#00FF00"

  Ship.prototype.relocate = function () {
    this.pos = Asteroids.Game.randomPosition();
    this.vel = [0, 0];
  };

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function () {
    this.game.allObjects.push(new Asteroids.Bullet({ship: this, game: this.game}));
  };


})();
