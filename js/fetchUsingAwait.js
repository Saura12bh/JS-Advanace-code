// async function save() {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts/1"); //then 1
//     let data = await res.json(); //then 2
//     console.log(data);
//   } catch (err) {
//     //cacth
//     console.log(err);
//   }
// }
// save();

//using list
async function save() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/"); //then 1
    let p = await res.json(); //then 2
    let tb = document.getElementById("tableBody");
    p.forEach((ele) => {
      // parent 2: table row
      let tr = document.createElement("tr");

      let td1 = document.createElement("td");
      td1.innerText = ele.userId;

      let td2 = document.createElement("td");
      td2.innerText = ele.id;

      let td3 = document.createElement("td");
      td3.innerText = ele.title;

      let td4 = document.createElement("td");
      td4.innerText = ele.body;

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);

      // append row to table body
      tb.appendChild(tr);
    });
  } catch (err) {
    //cacth
    console.log(err);
  }
}
save();
