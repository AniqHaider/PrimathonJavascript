// Strings & Methods

// Basic Assignment

// 1. Split a string and convert it into an array of words.
// const str = “I love Javascript”;

// var words = "i love javascript";

// let word = words.split(" ")
// console.log(word)

// 2. Print only ‘javascript’ from all the programming languages.
// const programming Languages = “Java, Javascript, Python, C, C++”;

// var programmingLanguages = "Java, Javascript, Python, C, C++";

// let finding = console.log(programmingLanguages.slice(6, 16));

// 3. Split a string and convert it into an array of words.

// var programmingLanguages = "Java, Javascript, Python, C, C++";

// let array = programmingLanguages.split(" ");

// console.log(array);

// 4. Write a code to parametrize a string (‘-’ seperated).

// var programmingLanguages = "Java Javascript Python C C++";

// let word = programmingLanguages.split(" ")

// let words = word.join(" - ")

// console.log(words)


// 5. Extract a specific number of characters from a string

// var programmingLanguages = "Java Javascript Python C C++";

// var extract = console.log(programmingLanguages.slice(5,15))


// Medium assignment --

const str = "Hello, I'm a student of Primathon Academy.";
// Expected output -
// Hello, I'm a student
// Primathon Academy

var str1 = str.split(" ")
console.log(str1)

var str3 = str1.splice(5,7).join(" ")
console.log(str3)

var str2 = str1.splice(0,4).join(" ")

console.log(str2)
