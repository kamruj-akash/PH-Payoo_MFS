const userMobileNo = "1";
const userPinNo = 1;

document.getElementById("login_btn").addEventListener("click", function () {
  const inputMobile = document.getElementById("input_mobileNo").value;
  const inputPIN = parseInt(document.getElementById("input_PinNo").value);

  if (inputMobile === userMobileNo && inputPIN === userPinNo) {
    window.location.href = "./homePage.html";
  } else {
    alert("Please Provide Valid Mobile or PIN");
  }
});
