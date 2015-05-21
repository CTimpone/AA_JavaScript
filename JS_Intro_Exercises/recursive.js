var subSets = function(arr) {
  var subs = [[]];

  if (arr.length <= 1) {
    subs.push(arr);
  } else {
    subs = subSets(arr.slice(1));
    var mapped = subs.map(function(array) { return array.concat([arr[0]])});
    subs = subs.concat(mapped);
  }

  return subs;
};

var mergeSort = function(arr) {
  var len = arr.length;
  var half = Math.floor(len / 2);
  var merged = arr;

  if (len > 1) {
    var first_half = arr.slice(0, half);
    var second_half = arr.slice(half);

    merged = merge(mergeSort(first_half), mergeSort(second_half));
  }

  return merged;
};

var merge = function(arr1, arr2) {
  var merged = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr2[0] < arr1[0]) {
      merged.push(arr2.shift());
    }
    else {
      merged.push(arr1.shift());
    }
  };

  merged = merged.concat(arr1).concat(arr2);

  return merged;
};

var makeChange = function(num, coins) {

  var best_coins_len = num;
  var remainder = num;
  var final = [];

  while (coins.length >= 1) {
    var best_coins = [];
    var coins_copy = coins.slice();
    if (coins_copy[0] <= num) {
      remainder = num - coins_copy[0];
      best_coins.push(coins_copy[0]);
      best_coins = best_coins.concat(makeChange(remainder, coins_copy));
    } else if (coins_copy[0] > num && num !== 0) {
      coins_copy.shift();
      best_coins = best_coins.concat(makeChange(remainder, coins_copy));
    }
    if (best_coins.length > 0) {
      var coins_total = best_coins.reduce(function(previousValue, currentValue, index, array) {
        return previousValue + currentValue;
      });
    }
    if (best_coins_len >= best_coins.length && coins_total === num) {
      best_coins_len = best_coins.length;
      final = best_coins;
    }
    coins.shift();

  }
  return final;

};

var bsearch = function(arr, target) {
  var sorted = arr.sort();
  var len = sorted.length;
  var half = Math.floor(len / 2);
  var idx = 0;

  if (len > 1) {
    var first_half = sorted.slice(0, half);
    var second_half = sorted.slice(half);

    if (target <= first_half[half - 1]) {
      idx = bsearch(first_half, target);
    } else if (target >= second_half[0]) {
      idx = bsearch(second_half, target);
      if (idx !== undefined) {
        idx += half;
      }
    }
  } else if (sorted[0] === target) {
    idx = 0;
  } else {
    idx = undefined;
  };

  return idx;
};

var fibs_array = function(num) {
  var fibs = []

  if (num === 2) {
    fibs = [1,1];
  }
  else if (num === 1) {
    fibs = [1];
  }
  else if (num > 2) {
    var prev_fibs = fibs_array(num-1);
    var pre_length = prev_fibs.length;
    fibs = prev_fibs.concat(prev_fibs[pre_length - 1] + prev_fibs[pre_length - 2] );
  };

  return fibs;
};

var exp2 = function(base, power) {
  if (power === 0) {
    var val = 1;
  }
  else if (power === 1) {
    var val = base;
  };

  if (power > 0 && power % 2 === 0) {
    val = exp2(base, power/2)*exp2(base, power/2);
  }
  else if (power > 0 && power % 2 === 1) {
    val = base*exp2(base, (power-1)/2)*exp2(base, (power-1)/2);
  };

  return val;
};

var exp1 = function(base, power) {
  var val = 1;

  if (power > 0) {
    val = base*exp1(base, power-1);
  };

  return val;
};

var range = function(start, finish) {
  var base = [start];
  if (start < finish){
    base = base.concat(range(start + 1, finish));
  };

  return base;
};

Array.prototype.mySum = function() {
  var base = this[0];

  if (this.length > 1) {
    base += this.slice(1).mySum();
  };

  return base;
};
