//print data on console

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((Response) => Response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((Error) => {
//     console.error(error);
//   });
//fetch ->send request to url and return promise with data
//first then()->convert response into JSON usig json() method it also return promise
//2nd then()  recive json data an print on console
//catch() it print any error if occure

//single data using seprate by attribute
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => res.json())
//   .then((post) => {
//     // console.log(post);

//     console.log(
//       "user id =" +
//         post.userId +
//         "\n id =" +
//         post.id +
//         "\n title =" +
//         post.title +
//         "\n body =" +
//         post.body,
//     );
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fetch("https://jsonplaceholder.typicode.com/posts/")
//   .then((res) => res.json())
//   .then((p) => {
//     let ul = document.getElementById("ul");
//     p.forEach((ele) => {
//       let li = document.createElement("li");
//       li.innerText =
//         "user id =" +
//         p.userId +
//         "\n id =" +
//         p.id +
//         "\n title =" +
//         p.title +
//         "\n body =" +
//         p.body;
//       //apend kela mhnje html chya page vr lihil
//       ul.appendChild(li);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

fetch("https://jsonplaceholder.typicode.com/posts/")
  .then((res) => res.json())
  .then((p) => {
    // parent 1: table body
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
  })
  .catch((err) => {
    console.log(err);
  });

// fetch("https://jsonplaceholder.typicode.com/posts/")
//   .then((resp) => resp.json())
//   .then((user) => {
//     let ul = document.getElementById("ul");

//     user.forEach((ele) => {
//       let li = document.createElement("li");
//       li.innerText =
//         "User ID: " +
//         ele.userId +
//         "\n" +
//         "Post ID: " +
//         ele.id +
//         "\n" +
//         "Title: " +
//         ele.title +
//         "\n" +
//         "Body: " +
//         ele.body;

//       ul.appendChild(li);
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// fetch("https://jsonplaceholder.typicode.com/posts/")
//   .then((resp) => resp.json())
//   .then((users) => {
//     const tableBody = document.getElementById("tableBody");

//     users.forEach((user) => {
// const row = document.createElement("tr");

// row.innerHTML = `
//   <td>${user.userId}</td>
//   <td>${user.id}</td>
//   <td>${user.title}</td>
//   <td>${user.body}</td>
// `;

// tableBody.appendChild(row);

//     const row = document.createElement("tr");

//     const td1 = document.createElement("td");
//     td1.innerText = user.userId;

//     const td2 = document.createElement("td");
//     td2.innerText = user.id;

//     const td3 = document.createElement("td");
//     td3.innerText = user.title;

//     const td4 = document.createElement("td");
//     td4.innerText = user.body;

//     row.appendChild(td1);
//     row.appendChild(td2);
//     row.appendChild(td3);
//     row.appendChild(td4);

//     tableBody.appendChild(row);
//   });
// })
// .catch((error) => {
//   console.error(error);
// });
