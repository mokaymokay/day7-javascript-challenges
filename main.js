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
