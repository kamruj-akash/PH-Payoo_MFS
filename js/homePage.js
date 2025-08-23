document
  .getElementById("add_money_btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const addMoneyBankName = document.getElementById("addMoney_bank");
    const addMoneyAccountNo = document.getElementById(
      "addMoney_account_no"
    ).value;
    const addMoneyAmount = parseInt(
      document.getElementById("addMoney_amount").value
    );
    const accountPinNo = document.getElementById("account_pin").value;
    const availableBalance = parseInt(
      document.getElementById("available_balance").innerText
    );
    if (addMoneyAccountNo.length === 11) {
      if (accountPinNo.length === 4) {
        if (addMoneyAmount > 0) {
          let admoneyAvailableBalance = availableBalance + addMoneyAmount;
          document.getElementById("available_balance").innerText =
            admoneyAvailableBalance;
        } else {
          alert("Please provide correct amount");
        }
      } else {
        alert("Please provide 4 digit PIN");
      }
    } else {
      alert("Please provide 11 digit Account No");
    }
  });

// toggle btn
document.getElementById("addMoney_btn").addEventListener("click", function () {
  document.getElementById("latestPayment_parent_div").style.display = "none";
  document.getElementById("addmoney_parent_div").style.display = "block";
  document.getElementById("cashout_parent_div").style.display = "none";
  document.getElementById("transferMoney_parent_div").style.display = "none";
  document.getElementById("getBonus_parent_div").style.display = "none";
  document.getElementById("payBill_parent_div").style.display = "none";
  document.getElementById("transactions_parent_div").style.display = "none";
});

document.getElementById("cashOut_btn").addEventListener("click", function () {
  document.getElementById("latestPayment_parent_div").style.display = "none";
  document.getElementById("addmoney_parent_div").style.display = "none";
  document.getElementById("cashout_parent_div").style.display = "block";
  document.getElementById("transferMoney_parent_div").style.display = "none";
  document.getElementById("getBonus_parent_div").style.display = "none";
  document.getElementById("payBill_parent_div").style.display = "none";
  document.getElementById("transactions_parent_div").style.display = "none";
});

document
  .getElementById("transferMoney_btn")
  .addEventListener("click", function () {
    document.getElementById("latestPayment_parent_div").style.display = "none";
    document.getElementById("addmoney_parent_div").style.display = "none";
    document.getElementById("cashout_parent_div").style.display = "none";
    document.getElementById("transferMoney_parent_div").style.display = "block";
    document.getElementById("getBonus_parent_div").style.display = "none";
    document.getElementById("payBill_parent_div").style.display = "none";
    document.getElementById("transactions_parent_div").style.display = "none";
  });

document.getElementById("getBonus_btn").addEventListener("click", function () {
  document.getElementById("latestPayment_parent_div").style.display = "none";
  document.getElementById("addmoney_parent_div").style.display = "none";
  document.getElementById("cashout_parent_div").style.display = "none";
  document.getElementById("transferMoney_parent_div").style.display = "none";
  document.getElementById("getBonus_parent_div").style.display = "block";
  document.getElementById("payBill_parent_div").style.display = "none";
  document.getElementById("transactions_parent_div").style.display = "none";
});

document.getElementById("payBill_btn").addEventListener("click", function () {
  document.getElementById("latestPayment_parent_div").style.display = "none";
  document.getElementById("addmoney_parent_div").style.display = "none";
  document.getElementById("cashout_parent_div").style.display = "none";
  document.getElementById("transferMoney_parent_div").style.display = "none";
  document.getElementById("getBonus_parent_div").style.display = "none";
  document.getElementById("payBill_parent_div").style.display = "block";
  document.getElementById("transactions_parent_div").style.display = "none";
});

document
  .getElementById("transactions_btn")
  .addEventListener("click", function () {
    document.getElementById("latestPayment_parent_div").style.display = "none";
    document.getElementById("addmoney_parent_div").style.display = "none";
    document.getElementById("cashout_parent_div").style.display = "none";
    document.getElementById("transferMoney_parent_div").style.display = "none";
    document.getElementById("getBonus_parent_div").style.display = "none";
    document.getElementById("payBill_parent_div").style.display = "none";
    document.getElementById("transactions_parent_div").style.display = "block";
  });
