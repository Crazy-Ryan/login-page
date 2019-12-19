var username = document.getElementById("user-name")
var passcode = document.getElementById("pass-word");
var loginMes = document.getElementById("login-message");
var clickButton = document.getElementById("clicker");
var onClickButton = function() {
  console.log(passcode);
  if ((passcode.value === "123") && (username.value === "123")) {
    loginMes.textContent = "Login Success";
  } else {
    loginMes.textContent = "Wrong Password!";
    passcode.value = "";
  }
}
clickButton.addEventListener("click", onClickButton);