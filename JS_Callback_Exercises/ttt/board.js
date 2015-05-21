function Board () {
  this.grid = [[null, null, null], [null, null, null], [null, null, null]];
  this.winner = null;
};

Board.prototype._horizontals = function () {
  return ([[this.grid[0][0], this.grid[0][1], this.grid[0][2]],
                      [this.grid[1][0], this.grid[1][1], this.grid[1][2]],
                      [this.grid[2][0], this.grid[2][1], this.grid[2][2]]]);
}

Board.prototype._verticals = function () {
  return ([[this.grid[0][0], this.grid[1][0], this.grid[2][0]],
                      [this.grid[0][1], this.grid[1][1], this.grid[2][1]],
                      [this.grid[0][2], this.grid[1][2], this.grid[2][2]]]);
}

Board.prototype._diagonals = function () {
  return ([[this.grid[0][0], this.grid[1][1], this.grid[2][2]],
                  [this.grid[0][2], this.grid[1][1], this.grid[2][0]]]);
}


Board.prototype.print = function (callback) {
  console.log(this.grid[0]);
  console.log(this.grid[1]);
  console.log(this.grid[2]);
  callback();
};

Board.prototype.won = function (mark1, mark2) {
  var flag = -1;
  for (var i = 0; i < this._horizontals().length; i++) {
    if (this._horizontals()[i].indexOf(mark2) === -1 && this._horizontals()[i].indexOf(null) === -1 ) {
      flag = 0;
    } else if (this._horizontals()[i].indexOf(mark1) === -1 && this._horizontals()[i].indexOf(null) === -1 ) {
      flag = 1;
    }
  };
  for (var i = 0; i < this._verticals().length; i++) {
    if (this._verticals()[i].indexOf(mark2) === -1 && this._verticals()[i].indexOf(null) === -1 ) {
      flag = 0;
    } else if (this._verticals()[i].indexOf(mark1) === -1 && this._verticals()[i].indexOf(null) === -1 ) {
      flag = 1;
    }
  };

  for (var i = 0; i < this._diagonals().length; i++) {
    if (this._diagonals()[i].indexOf(mark2) === -1 && this._diagonals()[i].indexOf(null) === -1 ) {
      flag = 0;
    } else if (this._diagonals()[i].indexOf(mark1) === -1 && this._diagonals()[i].indexOf(null) === -1 ) {
      flag = 1;
    }
  };
  this.winner = flag;
  return flag;
};


Board.prototype.placeMark = function (array, mark, callback) {
  var x, y;
  x = array[0];
  y = array[1];
  if (x !== 9 && this.isEmpty(x, y)) {
    this.grid[x][y] = mark;
    this.print(callback);
  }
};

Board.prototype.isEmpty = function (x, y) {
  if (this.grid[x][y] === null){
    return true;
  }
  else {
    return false;
  }
}

Board.prototype.parse = function (num, mark, placement, callback) {
  var val;

  switch(num) {

    case 1:
      val = [0, 0];
      break;
    case 2:
      val = [0, 1];
      break;
    case 3:
      val = [0, 2];
      break;
    case 4:
      val = [1, 0];
      break;
    case 5:
      val = [1, 1];
      break;
    case 6:
      val = [1, 2];
      break;
    case 7:
      val = [2, 0];
      break;
    case 8:
      val = [2, 1];
      break;
    case 9:
      val = [2, 2];
      break;
    default:
      val = [9, 9];
      break;
  };

  placement.call(this, val, mark, callback);

}

module.exports = Board;
