// Exception Handling ( error handling )

// basically we can find out which code block is causing error like this and console log the type and also return the output as error name or message but this lets the rest of the code block execute as it is ...

// try{
//     console.log(aniq)
// }catch(e){
//     console.log(e.name)
//     console.log(e.message)
// }

// console.log("ANIQ")

// Write a code to catch a range error and print a customised message.

// try{
//     console.log(array[6])
// }catch(e){
//     console.log(e.name)
//     console.log(e.message)
// }

// BASIC ASSIGNMENT

//  let num = 200;
// try {
//     num.toPrecision(1000);
//     // Have added extra 0 in 100
//    } catch (err) {
//     console.log('Error Message', err)
//    }

//    shows the range error because args in precision can be only 0 to 100

// MEDIUM ASSIGNMENT

// 1 -- Write a code to throw and catch a URI error and print the name of the Error.

// try {
//  decodeURIComponent('%')
// } catch (e) {
//  console.log('Error caught. Name of the error is: ', e.name)
// // "URIError"
//  console.log('Message of the error is: ', e.message)
// // "URI malformed"
// }

// 2 -- Write a code to throw and catch a type error and print name and message of the error

// let num = 1;
// try {
//  num.toUpperCase(); // Trying to convert a number to upper case
// } catch (err) {
//  console.log('Error caught. Name of the error is:', err.name);
//  console.log('Message of error says:', err.message);
// }

// try {
//   decodeURIComponent("%");
// } catch (e) {
//   console.log("Error caught. Name of the error is: ", e.name);
//   console.log("Message of the error is: ", e.message);
// }finally{
//     console.log(decodeURIComponent)
//     console.log("finally always prints and not even return statement of a function can stop it from printing")
// }
