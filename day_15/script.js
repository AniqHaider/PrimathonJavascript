// A Promise has a total of 3 states - Fulfilled, Rejected, Pending

// myNewPromise is a promise instance
// const myNewPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() < 0.5) {
//       resolve({ paymentId: "123xyz" });
//     } else {
//       reject({
//         reasons: ["Balance insufficient", "Network Error"],
//       });
//     }
//   }, 2000);
// });

// console.log("promise", myNewPromise);

// // some methods are available for us on a Promise instance
// // then

// myNewPromise.then(
//   (resolutionValue) => {
//     console.log("Promise was resolved", resolutionValue);
//   },
//   (rejectionReason) => {
//     console.log("Promise was rejected because ", rejectionReason);
//   }
// );

// setTimeout(() => {
//   console.log("a");

//   setTimeout(() => {
//     console.log("b");

//     setTimeout(() => {
//       console.log("c");

//       setTimeout(() => {
//         console.log("d");

//         setTimeout(() => {
//           console.log("e");
//         }, 1000);
//       }, 1000);
//     }, 4000);
//   }, 1000);
// }, 1000);

function delay(delayBy) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delayBy, delayBy);
  });
}

delay(3000).then((delayBy) => {
  console.log(`Delay by ${delayBy}ms`);
});
