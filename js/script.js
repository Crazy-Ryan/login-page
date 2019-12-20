var username = document.getElementById("username");
var password = document.getElementById("password");
var loginMes = document.getElementById("login-message");
var clickButton = document.getElementById("clicker");
var onClickButton = function() {
  if (("123" === password.value) && ("123" === username.value)) {
    loginMes.textContent = "Login Succeed";
    loginMes.style.color = "green";
  } else {
    password.value = "";
    loginMes.textContent = "Wrong Password!";
    loginMes.style.color = "red";
  }
}
clickButton.addEventListener("click", onClickButton);