var readline = require("readline");
var Board = require("./board.js");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Game (marks) {
  this.reader = reader;
  this.marks = marks;
  this.board = new Board();
}

Game.prototype.prompt = function (mark, callback) {
  var that = this;

  that.reader.question("What square would you like to mark (1-9)? ", function (response) {
    var square = parseInt(response);
    var placement = function (square) {
      that.board.parse(square, mark, that.board.placeMark, callback);
      // reader.close();
    }
    placement(square);
  })
}
Game.prototype.run = function (notMark, completionCallback) {
  var mark = (notMark === "X") ? "O" : "X";

  var game = this;
  game.prompt(mark, function ()
  {
    if (game.board.won(game.marks[0], game.marks[1]) === 0)
    {
      console.log("Congrats, " + game.marks[0] + " player wins.");
      completionCallback();
    }
    else if (game.board.won(game.marks[0], game.marks[1]) === 1)
    {
      console.log("Congrats, " + game.marks[1] + " player wins.");
      completionCallback();
    }
    else
    {
      game.run(mark, completionCallback);
    }
  });
}

// var b = new Board();
var m = ['X', 'O'];
var g = new Game(m);
// var x = function () {console.log("Game Over"); game.reader.close()}
g.run('O', function () {console.log("Game Over"); reader.close();})

// var game = this;
// game.print();
// game.promptMove(game.move, function () {  if (!game.isWon()) {
//     game.run(completionCallback);
//   } else {
//     console.log("Congrats, you win.");
//     completionCallback();
//   }});
// }
