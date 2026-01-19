//function bnvl mhnje apl logic tya madhe return promise
function msg() {
  return new Promise((resolve, reject) => {
    let s = true;
    if (s == false) {
      resolve("sucessful");
    } else {
      reject("un sucessful");
    }
  });
}
//new aysnc function bnvl tyat te call kel ani dislay
async function dis() {
  let res = await msg();
  console.log(res);
}
//asycn function call
dis();
