
function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  
  if (email === "" || password === "") {
    alert("Email or Password is incorrect");
  } else {

    location.href = "home.html";
  }
}



