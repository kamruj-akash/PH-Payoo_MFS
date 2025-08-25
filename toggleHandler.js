function getID(id) {
  const result = document.getElementById(id);
  return result;
}

function toggleHandle(id) {
  getID("addmoney_parent_div").style.display = "none";
  getID("latestPayment_parent_div").style.display = "none";
  getID("cashout_parent_div").style.display = "none";
  getID("getBonus_parent_div").style.display = "none";
  getID("payBill_parent_div").style.display = "none";
  getID("transferMoney_parent_div").style.display = "none";
  getID("transactions_parent_div").style.display = "none";
  const result = (getID(id).style.display = "block");
  return result;
}

getID("addMoney_btn").addEventListener("click", function () {
  toggleHandle("addmoney_parent_div");
});

getID("cashOut_btn").addEventListener("click", function () {
  toggleHandle("cashout_parent_div");
});

getID("transferMoney_btn").addEventListener("click", function () {
  toggleHandle("transferMoney_parent_div");
});

getID("getBonus_btn").addEventListener("click", function () {
  toggleHandle("getBonus_parent_div");
});

getID("payBill_btn").addEventListener("click", function () {
  toggleHandle("payBill_parent_div");
});

getID("transactions_btn").addEventListener("click", function () {
  toggleHandle("transactions_parent_div");
});
