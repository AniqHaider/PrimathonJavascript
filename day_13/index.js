// Js functions

// let arr = [2,[3,12,24],17,[54,[24,3],8]];
// let result=[];
// function flattenArray(arr,i){
//  if(i>=arr.length){
//  return;
//  }
//  if(Array.isArray(arr[i])){
//  flattenArray(arr[i],0);
//  }
//  else{
//  result.push(arr[i]);
//  }
//  flattenArray(arr,i+1);
// }
// flattenArray(arr,0);
// console.log(result);
// // [2, 3, 12, 24, 17, 54, 24, 3, 8]

// live assignment part

// Q1 -- sum range

// let n = 5;
// let res = 0;
// for(i=0; i<=n; i++){
//     res += i
//     console.log("total right now is : " + res)
// }
// console.log(res)

// Q2 -- write a function called power which takes in a base and an exponent. if the exponent is zero return 1

// function power(base, exponent) {
//   if (exponent === 0) {
//     return 1;
//   } else {
//     return Math.pow(base, exponent);
//   }
// }

// let result = power(2, 5);
// console.log(result); // Output: 32

// result = power(10, 0);
// console.log(result); // Output: 1

// Q3 -- factorial of a number

// let num = 10;
// let res = 1;
// for (i = 1; i <= num; i++) {
//   res *= i;
// }

// console.log(res); // 3628800

// Q4 - product of array --

// let arr = [2, 3, 4, 5];
// let res = 1;
// for (i = 0; i < arr.length; i++) {
//   res *= arr[i];

//   console.log("value now : "+res);
// }

// console.log(res);

// q5 - greatest common divisor

// function greatestCommonDivisor(a, b) {
//   // Everything divides 0
//   if (a == 0) {
//     return b;
//   }
//   if (b == 0) {
//     return a;
//   }
//   // base case
//   if (a == b) {
//     return a;
//   }
//   // a is greater
//   if (a > b) {
//     return greatestCommonDivisor(a - b, b);
//   }
//   return greatestCommonDivisor(a, b - a);
// }

// let num1 = 12;
// let num2 = 66;

// console.log(greatestCommonDivisor(num1, num2))

// Q6 write a program to get first n fibonacci numbers

// function fibonacci(n){
//     if(n==1) return 1;
//     if(n==2) return 1;

//     let begin = 0;
//     let num1 = 1;
//     let num2 = 2;

//     while(n>2){
//         console.log(begin)
//         begin = num1+ num2;
//         num1 = num2;
//         num2 = begin
//         n--
//     }
//     return begin
// }
// console.log(fibonacci(8));














