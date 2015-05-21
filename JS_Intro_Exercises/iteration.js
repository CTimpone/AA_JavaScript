String.prototype.subStrings = function () {
  var subs = [];

  for (var i = 0; i < this.length; i++) {
    for (var j = i+1; j <= this.length; j++) {
      subs.push(this.slice(i,j));
    };
  };

  var sorted = subs.sort();
  var uniques = [sorted[0]];

  for(var i = 1; i < sorted.length; i++) {
    if(sorted[i] !== sorted[i-1]) {
      uniques.push(sorted[i]);
    };
  };

  return uniques;
};

Array.prototype.bubbleSort = function () {
  for (var i = 0; i < this.length; i++) {
    for (var j = i+1; j < this.length; j++) {
      if (this[i] > this[j]) {
        var dummy = this[i];
        this[i] = this[j];
        this[j] = dummy;
      };
    };
  };

  return this;
};
