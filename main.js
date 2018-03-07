/*
1 - A running total

Using a for loop, compute the sum of the numbers in the array named prices;
storing the result in the sum variable.
*/

var prices = [33, 26, 99, 120, 12, 45];
var sum = 0;

for (let i = 0; i < prices.length; i++) {
  sum += prices[i];
}

console.log("The sum is: ", sum);

/*
2 - 99 Crows on the Wall

Write a program in a new Repl.it that outputs all 100 lines of the classic song:
99 Crows on the Wall. You shouldn’t have to write 300 lines of JavaScript for this
program at all - this is the perfect chance to use a for loop or while loop!
*/

function crows() {
  for (let n = 99; n > 0; n--) {
    if (n !== 1) {
      console.log(`${n} crows on the wall. ${n} crows.`);
      console.log('1 fell down and became a wight.');
      console.log(`${n} crows on the wall.`);
      console.log('');
    } else {
      console.log('1 crow on the wall. 1 single crow.');
      console.log('It fell down and became a wight.');
      console.log('There\'s no one left to defend Westeros now.');
    }
  }
}

crows();

/*
3 - Challege : Finding recurring numbers

Write a program in a new Repl.it that outputs how many times a number is repeated in the given array:

Let arr = [5,10,5,2,2,1,653,5,90,5,2,7,9,20,43,92,1,74]

For example:
Array = [1,2,1,2,5]

Should print out :
“2 exists 2 times”
“1 exists 2 times”
“5 exists 1 time”
*/

let arr = [5,10,5,2,2,1,653,5,90,5,2,7,9,20,43,92,1,74];
let sorted = {};

for (let i = 0; i < arr.length; i++) {
  let newNum = arr[i];
  let counter = 0;
  for (let j = 0; j < arr.length; j++) {
    if (newNum === arr[j]) {
      counter++;
    }
  }
  sorted[newNum] = counter;
}

for (var prop in sorted) {
  if (sorted[prop] === 1) {
    console.log(`${prop} exists ${sorted[prop]} time`);
  } else {
    console.log(`${prop} exists ${sorted[prop]} times`);
  }
}
