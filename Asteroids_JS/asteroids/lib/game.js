(function(){

  if (typeof window.Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function () {
    this.asteroids = [];
    var shipPos = Game.randomPosition();
    this.ship = new Asteroids.Ship( {pos: shipPos, game: this} );
    this.addAsteroids();
    this.allObjects = this.asteroids.concat(this.ship);
  };

  Game.DIM_X = window.innerWidth;
  Game.DIM_Y = window.innerHeight;

  Game.NUM_ASTEROIDS = 20;

  Game.prototype.addAsteroids = function () {
    var that = this;
    for(var i = 0; i < Game.NUM_ASTEROIDS; i++){
      position = Game.randomPosition();
      this.asteroids.push(new Asteroids.Asteroid( {pos: position, game: that} ));
    }
  };

  Game.randomPosition = function () {
    var x = Math.floor(Math.random() * Game.DIM_X)
    var y = Math.floor(Math.random() * Game.DIM_Y)
    return [x,y];
  };

  Game.prototype.draw = function (ctx) {
    for (var i = 0; i< this.allObjects.length; i++) {
      this.allObjects[i].draw(ctx);
    };
  };

  Game.prototype.move = function () {
    for (var i = 0; i< this.allObjects.length; i++) {
      this.allObjects[i].move();
    };
  };

  Game.prototype.wrap = function (pos) {
    if (pos[0] < 0) {
      pos[0] += Game.DIM_X;
    }
    else if (pos[0] > Game.DIM_X) {
      pos[0] -= Game.DIM_X;
    }
    if (pos[1] < 0) {
      pos[1] += Game.DIM_Y;
    }
    else if (pos[1] > Game.DIM_Y) {
      pos[1] -= Game.DIM_Y;
    }
    return pos;
  };

  Game.prototype.outOfBounds = function (pos) {
    if (pos[0] > Game.DIM_X || pos[0] < 0 || pos[1] > Game.DIM_Y || pos[1] < 0) {
      return true;
    } else {
      return false;
    }
  };

  Game.prototype.checkCollisions = function() {
    for (var i = 0; i < this.allObjects.length; i++) {
      for (var j = i+1; j < this.allObjects.length; j++) {
        var obj1 = this.allObjects[i];
        var obj2 = this.allObjects[j];
        if (obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
        }
      };
    };
  };

  Game.prototype.step = function (ctx) {
    this.move();
    this.draw(ctx);
    this.checkCollisions();
  };

  Game.prototype.remove = function (obj) {
    var i = this.allObjects.indexOf(obj);
    this.allObjects.splice(i,1);
  }


})();
