(function(){

  if (typeof window.Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function (obj) {
    this.ship = obj.ship;
    obj.pos = this.ship.pos;
    var shipVelocity = this.ship.vel;
    obj.vel = this.computeVel(shipVelocity);

    obj.radius = Bullet.RADIUS;
    obj.color = Bullet.COLOR;

    Asteroids.MovingObject.call(this, obj);
    this.wrappable = false;
  }

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);
  Bullet.COLOR = "black";
  Bullet.RADIUS = 3;

  // Bullet.prototype.collideWith = function(otherObject){
  //   firstObject = this;
  //   if (otherObject instanceof window.Asteroids.Asteroid){
  //     console.log(true)
  //     this.game.remove(firstObject);
  //     this.game.remove(otherObject);
  //   }
  // };

  Bullet.prototype.computeVel = function (shipVelocity) {
    var speed = Math.sqrt(Math.pow(shipVelocity[0], 2) +
                          Math.pow(shipVelocity[1], 2));
    var bulletVel = [];
    bulletVel[0] = shipVelocity[0] + (shipVelocity[0]/speed) * 15;
    bulletVel[1] = shipVelocity[1] + (shipVelocity[1]/speed) * 15;

    return bulletVel;
  };
})();
