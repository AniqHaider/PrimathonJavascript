// Js callback function & higher order function

// function printAcademyName () {
//     console.log('Primathon Academy');
// }
// function greet (message) {
//     console.log("Message here: " + message);
// }
// setTimeout(printAcademyName, 2000);
// greet('Hello World');

// Basic Assignments

// Q1- Write a function to map both the items of the array together in a new array.

// const array = [
//   {
//     first: "Javascript",
//     last: "Tutorial",
//   },
//   {
//     first: "Primathon",
//     last: "Academy",
//   },
// ];

// const newArr = array.map((item) => {
//   return item.first + " " + item.last;
// });
// console.log(newArr); // ["Javascript Tutorial", "Primathon Academy"];

// Q2- Write a function to filter out the age lesser than 5 and and greater than 10.

// const ages = [1, 2, 4, 5, 7, 8, 10, 11, 12];
// const output = [];
// const filterAges = (logic) => {
//  for (let i = 0; i < ages.length; i++) {
//  logic(ages[i]) ? output.push(logic(ages[i])) : null;
//  }
//  return output;
// }
// const ageCalculation = (input) => {
//  if (input < 5 || input > 10) {
//  return input
//  }
// }
// filterAges(ageCalculation);
// console.log(output); // output [1, 2, 4, 11, 12]

// Medium Assignment

// Q -- Write a function to perform add, subtract, multiply and divide using Higher Order Function.

// const differentOperations = (arr, instructions) => {
//   const output = [];
//   for (let i = 0; i < arr.length; i++) {
//     output.push(instructions(arr[i]));
//   }
//   return output;
// };
// const addBy2 = (input) => {
//   return input + 2;
// };
// const subtractBy2 = (input) => {
//   return input - 2;
// };
// const divideBy2 = (input) => {
//   return input / 2;
// };
// const multiplyBy2 = (input) => {
//   return input * 2;
// };
// const addResult = differentOperations([1, 2, 3], addBy2);
// const subtractResult = differentOperations([2, 4, 6], subtractBy2);
// const divideResult = differentOperations([10, 20, 30], divideBy2);
// const multiplyResult = differentOperations([1, 2, 3], multiplyBy2);
// console.log("Add: ", addResult);
// console.log("Subtract: ", subtractResult);
// console.log("Divide: ", divideResult);
// console.log("Multiply: ", multiplyResult);
