var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function HanoiGame () {
  this.stacks = [[3, 2, 1], [], []];

};

HanoiGame.prototype.isWon = function () {
  if (this.stacks[1].length === 3 || this.stacks[2].length === 3){
    return true;
  }
  else {
    return false;
  }
};

HanoiGame.prototype.isValidMove = function (startIdx, endIdx) {
  if ((this.stacks[endIdx][0] === undefined ||
      this.stacks[startIdx][0] < this.stacks[endIdx][0]) &&
      this.stacks[startIdx][0] !== undefined){
        return true;
      }
  else{
    return false;
  }
};

HanoiGame.prototype.move = function (startIdx, endIdx, callback) {
  if (this.isValidMove(startIdx, endIdx)){
    this.stacks[endIdx].push(this.stacks[startIdx].pop());
    console.log(this.stacks);
    return true;
  }
  else {
    return false;
  }
};

HanoiGame.prototype.print = function () {
  console.log(JSON.stringify(this.stacks));
};

HanoiGame.prototype.promptMove = function(callback, callback2) {
  var startIdx, endIdx;
  var game = this;
  reader.question("Which stack would you like to take from? ", function(startString) {
    reader.question("Which stack would you like to place on? ", function(endString) {
      startIdx = parseInt(startString);
      endIdx = parseInt(endString);

      if (game.isValidMove(startIdx, endIdx)) {
        callback.apply(game, [startIdx, endIdx]);
      } else {
        console.log("Invalid move.")
      }
      callback2();
    })
  })
};

HanoiGame.prototype.run = function (completionCallback) {
  var game = this;
  game.print();
  game.promptMove(game.move, function () {  if (!game.isWon()) {
      game.run(completionCallback);
    } else {
      console.log("Congrats, you win.");
      completionCallback();
    }});
};

var h = new HanoiGame();
h.run(function () {console.log("Hooray!"); reader.close();});
