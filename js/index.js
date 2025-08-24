const login = document.getElementById("login_btn");
const loginMobile = "12345678910";
const accountPinNo = "1234";

login.addEventListener("click", function (e) {
  e.preventDefault();
  const inputMobile = document.getElementById("input_mobileNo").value;
  const inputPin = document.getElementById("input_PinNo").value;
  if (inputMobile === loginMobile && inputPin === accountPinNo) {
    window.location.href = "./homePage.html";
  } else {
    alert("Incorrect Mobile or Password");
  }
});
