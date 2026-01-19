//name ->apn user kdun name ghete
//callback ->ha jo apl callback fucntion tyala refer krt he
function greet(name, callback) {
  console.log("good morning " + name);
  callback(); //yethun Bye() function call zal
}

function bye() {
  //call backfunction
  console.log("good bye");
}
//name="sai",bye() function reference bye
greet("Sai", bye);
