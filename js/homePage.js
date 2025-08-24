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

// logOut_btn
document.getElementById("logOut_btn").addEventListener("click", function () {
  window.location.href = "../index.html";
});

// import { accountPinNo } from "./index";
const couponCode = "GET500";

// get value as a number
function getNumberValue(id) {
  return parseInt(document.getElementById(id).value);
}

// get value as default
function getDefaultValue(id) {
  return document.getElementById(id).value;
}

// innerText get value
function getInnerValue(id) {
  return parseInt(document.getElementById(id).innerText);
}

// addMoney
document
  .getElementById("add_money_btn")
  .addEventListener("click", function (e) {
    e.defaultPrevented;
    const addMoneyAccountNo = getDefaultValue("addMoney_account_no");
    const availableBalance = getInnerValue("available_balance");
    const addAmount = getNumberValue("addMoney_amount");
    const addMoneyPin = getNumberValue("addMoney_pin");
    const addMoneyBalance = availableBalance + addAmount;

    if (addMoneyAccountNo.length === 1) {
      if (accountPinNo === addMoneyPin) {
        if (addAmount > 0) {
          document.getElementById("available_balance").innerText =
            addMoneyBalance;
        } else {
          alert("Enter Valid Amount");
        }
      } else {
        alert("Enter Valid PIN No");
      }
    } else {
      alert("Enter Valid Account No");
    }
  });

// Cash Out
document.getElementById("withdraw_btn").addEventListener("click", function (e) {
  e.defaultPrevented;
  const availableBalance = getInnerValue("available_balance");
  const cashOutAccountNo = getDefaultValue("withdraw_account_no");
  const cashOutPin = getNumberValue("withdraw_pin");
  const cashOutAmount = getNumberValue("withdraw_amount");
  const cashOutBalance = availableBalance - cashOutAmount;

  if (cashOutAccountNo.length === 1) {
    if (accountPinNo === cashOutPin) {
      if (cashOutAmount > 0) {
        document.getElementById("available_balance").innerText = cashOutBalance;
      } else {
        alert("Enter Valid Amount");
      }
    } else {
      alert("Enter Valid PIN No");
    }
  } else {
    alert("Enter Valid Account No");
  }
});

// Transfer Money
document
  .getElementById("transferAmount_btn")
  .addEventListener("click", function (e) {
    e.defaultPrevented;
    const availableBalance = getInnerValue("available_balance");
    const transferAmount = getNumberValue("transferMoney_amount");
    const transferAccountNo = getDefaultValue("transferMoney_account_no");
    const transferPin = getNumberValue("transfer_pin");
    const transferBalance = availableBalance - transferAmount;

    if (transferAccountNo.length === 1) {
      if (accountPinNo === transferPin) {
        if (transferAmount > 0) {
          document.getElementById("available_balance").innerText =
            transferBalance;
        } else {
          alert("Enter Valid Amount");
        }
      } else {
        alert("Enter Valid PIN No");
      }
    } else {
      alert("Enter Valid Account No");
    }
  });

// Get Bonus
document
  .getElementById("getBonus_amount_btn")
  .addEventListener("click", function (e) {
    e.defaultPrevented;
    const availableBalance = getInnerValue("available_balance");
    const inputCouponCode = getDefaultValue("getBonus_Coupon");
    if (couponCode === inputCouponCode) {
      const getBonusBalance = availableBalance - 500;
      document.getElementById("available_balance").innerText = getBonusBalance;
    } else {
      alert("Enter a Valid Coupon Code");
    }
  });

// Transfer Money
document
  .getElementById("PayBilling_btn")
  .addEventListener("click", function (e) {
    e.defaultPrevented;
    const availableBalance = getInnerValue("available_balance");
    const PayBillAmount = getNumberValue("payBill_amount");
    const PayBillPin = getNumberValue("payBill_pin");
    const PayBillBalance = availableBalance - PayBillAmount;
    if (accountPinNo === PayBillPin) {
      document.getElementById("available_balance").innerText = PayBillBalance;
    }
  });
