Array.prototype.transpose = function () {
  var transposed = [];

  for (var i = 0; i < this.length; i++) {
    transposed[i] = this[i].slice();
  }

  for (var i = 0; i < this.length; i++) {

    for (var j = 0; j < this.length; j++) {
      transposed[j][i] = this[i][j];
    };
  };

  return transposed;
};

Array.prototype.twoSum = function () {
  var sums = [];

  for (var i = 0; i < this.length; i++) {
    for (var j = i+1; j < this.length; j++) {
      if (this[j] + this[i] === 0) {
        sums.push([i,j]);
      };
    };
  };

  return sums;
};

Array.prototype.uniq = function () {
  var sorted = this.sort();
  var uniques = [sorted[0]];

  for(var i = 1; i < sorted.length; i++) {
    if(sorted[i] !== sorted[i-1]) {
      uniques.push(sorted[i]);
    };
  };

  return uniques;
};
