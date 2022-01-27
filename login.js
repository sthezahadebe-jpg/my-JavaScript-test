var email = [];
var password = [];


function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;


  if (email === "" && password === "") {
    alert("email or password is correct");
  } else {

  }

  if (email == "user@gmail.com" && password == "mypassword") {
    window.location.href = "home.html"
  }
  else {
    alert("email & password is incorrect");
  }

}




