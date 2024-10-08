const numbers = [10, 13, 20, 25, 38, 35, 40];

//Task 1: Filtering
const greater = numbers.filter((number) => number >= 25);
console.log(greater);

const divisible = numbers.filter((number) => number % 5 === 0);
console.log(divisible);

//Task 2: Mapping
const squared = numbers.map((number) => number * number);
console.log(squared);

const multiplied = numbers.map((number) => number * 2);
console.log(multiplied);

//Task 3: Filtering && Mapping
const greaterAndsquared = numbers.filter((number) => number >= 20);
greaterAndsquared.map((number) => number * number);
console.log(greaterAndsquared);

const divisibleAndMultiply = numbers.filter((number) => number % 5 === 0);
divisibleAndMultiply.map((number) => number * 2);

//CHALLENGE
function logger(array) {
  array.forEach((element) => {
    console.log(element);
  });
}
logger([2, 4, 5, 7, 9, 56, 45, 22]);

function toCelsius(temperatures) {
  return temperatures.map((F) => (F - 32) * (5 / 9));
}
console.log(toCelsius([50, 23, 13.32]));

function hottestDays(temperatures, threshhold) {
  return temperatures.filter((temperature) => temperature > threshhold);
}
console.log(hottestDays([50, 23, 13.32], 20));

function logHottestDays(temperatures, threshold) {
  const hotterTempretures = hottestDays(temperatures, threshold);
  const hotterTempInCelsius = toCelsius(hotterTempretures);
  logger(hotterTempInCelsius);
}
logHottestDays([50, 23, 13.32], 20);
