// let p = new Promise((resolve, reject) => {
//   let s = true;
//   if (s == true) {
//     resolve(" promise is completed");
//   } else {
//     reject("something errror in promise");
//   }
// });

// p.then((msg) => {
//   console.log(msg); //true
// })
//   .catch((error) => {
//     console.error(error); //fasle
//   })
//   .finally(() => {
//     console.log("done");
//   });

let p = new Promise((resolve, reject) => {
  let n = 9;
  if (n % 2 === 0) {
    resolve("number is even");
  } else {
    reject("number is odd");
  }
});

p.then((msg) => {
  console.log(msg);
}).catch((error) => {
  console.log(error);
});
//output number is odd
