function Clock (input) {
  this.TICK = input;
}

Clock.prototype.printTime = function () {
  console.log(this.hour + ":" + this.minutes+ ":" + this.seconds);
};

Clock.prototype.run = function () {
  var clock = this;

  this.time = new Date();
  this.hour = this.time.getHours();
  this.minutes = this.time.getMinutes();
  this.seconds = this.time.getSeconds();
  this._tick();

  var my_tick = function () {clock._tick()};

  setInterval(my_tick, clock.TICK * 1000);
};

Clock.prototype._tick = function () {
  console.log(this);
  this.seconds += this.TICK;
  if (this.seconds > 60)
  {
    this.seconds -= 60;
    this.minutes += 1;
  }
  if (this.minutes > 60)
  {
    this.minutes -= 60;
    this.hour += 1;
  }
  this.printTime();

};
