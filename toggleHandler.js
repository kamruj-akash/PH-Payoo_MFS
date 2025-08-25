function getID(id) {
  const result = document.getElementById(id);
  return result;
}
// logout function
getID("logOut_btn").addEventListener("click", function () {
  window.location.href = "./index.html";
});

// toggle handler
function toggleHandle(id) {
  const classNames = document.getElementsByClassName("toggle_handler");
  for (const className of classNames) {
    className.style.display = "none";
  }
  const result = (getID(id).style.display = "block");
  return result;
}

// active btn function
function btnActive(id) {
  const classNames = document.getElementsByClassName("activeStyle");
  for (const className of classNames) {
    className.classList.remove("bg-[#0875f21d]", "border-[#0874F2]");
    className.classList.add("border-[#08080857]");
    className.children[1].style.color = "#080808bd";
  }
  getID(id).children[1].style.color = "#0874F2";
  getID(id).classList.remove("border-[#08080857]");
  getID(id).classList.add("bg-[#0875f21d]", "border-[#0874F2]");
}

// all btn behavior function
getID("addMoney_btn").addEventListener("click", function () {
  toggleHandle("addmoney_parent_div");
  btnActive("addMoney_btn");
});

getID("cashOut_btn").addEventListener("click", function () {
  toggleHandle("cashout_parent_div");
  btnActive("cashOut_btn");
});

getID("transferMoney_btn").addEventListener("click", function () {
  toggleHandle("transferMoney_parent_div");
  btnActive("transferMoney_btn");
});

getID("getBonus_btn").addEventListener("click", function () {
  toggleHandle("getBonus_parent_div");
  btnActive("getBonus_btn");
});

getID("payBill_btn").addEventListener("click", function () {
  toggleHandle("payBill_parent_div");
  btnActive("payBill_btn");
});

getID("transactions_btn").addEventListener("click", function () {
  toggleHandle("transactions_parent_div");
  btnActive("transactions_btn");
});
