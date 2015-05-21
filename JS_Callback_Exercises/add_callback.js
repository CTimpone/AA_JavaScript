var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers (sum, numsLeft, completionCallback) {
  var num, val;

  if (numsLeft > 0) {
    reader.question("Enter value: ", function (numString) {
      num = parseInt(numString);

      sum += num;
      numsLeft -= 1;

      val = addNumbers(sum, numsLeft, completionCallback);
    });


  } else if (numsLeft === 0) {
    val = completionCallback(sum);
  }

  return val;
};

addNumbers(0, 5, function (sum) {
  console.log("Total Sum: " + sum);
  reader.close();
});

//
// var readline = require('readline');
//
// var reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// reader.question("What is your name?", function (answer) {
//   console.log("Hello " + answer + "!");
//
//   // Close the reader, which will allow the program to end because it
//   // is no longer waiting for any events.
//   reader.close();
// });
//
// console.log("Last program line");
