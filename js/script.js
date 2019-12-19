var username = document.getElementById("user-name")
var passcode = document.getElementById("pass-word");
var loginMes = document.getElementById("login-message");
var clickButton = document.getElementById("clicker");
var onClickButton = function() {
  console.log(passcode);
  if ((passcode.value === "123") && (username.value === "123")) {
    loginMes.textContent = "Login Success";
    loginMes.style.color = "green";
  } else {
    passcode.value = "";
    loginMes.textContent = "Wrong Password!";
    loginMes.style.color = "red";
  }
}
clickButton.addEventListener("click", onClickButton);