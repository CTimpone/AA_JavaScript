var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan (el1, el2, callback) {
  reader.question("Is " + el1 + " greater than " + el2 + "? ", function (answer) {
    if (answer === "y")
    {
      callback(true);
    }
    else
    {
      callback(false);
    }
  })
};

function innerBubbleSortLoop (arr, i, madeAnySwaps, outerBubbleSortLoop) {
  var greaterThan;
  if (i === (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps)
  } else {
    askIfGreaterThan(arr[i], arr[i+1], function (greaterThan) {
      if (greaterThan) {
        var tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp
        madeAnySwaps = true;
        }

      i += 1;
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);}
    );
  }
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}

function absurdBubbleSort (arr, sortCompletionCallback) {
  function outerBubbleSortLoop (madeAnySwaps) {
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
    } else {
      sortCompletionCallback(arr)
    }

    // Begin an inner loop if `madeAnySwaps` is true, else call
    // `sortCompletionCallback`.
  }

  outerBubbleSortLoop(true)
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1, 4], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
