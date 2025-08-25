const userPinNo = 1;
const giftCoupon = "GET500";
const couponCodeAmount = 500;

// reusable function
function getID(id) {
  const result = document.getElementById(id);
  return result;
}

function getNumberValue(id) {
  var result = parseInt(document.getElementById(id).value);
  return result;
}

function getDefaultValue(id) {
  var result = document.getElementById(id).value;
  return result;
}

// Add Money Function
document.getElementById("add_money_btn").addEventListener("click", function () {
  const inoutAccountNo = getDefaultValue("addMoney_account_no");
  const inputAmount = getNumberValue("addMoney_amount");
  const inputPIN = getNumberValue("addMoney_pin");
  const mainBalance = parseInt(
    document.getElementById("available_balance").innerText
  );
  const addMoney = mainBalance + inputAmount;

  if (inoutAccountNo.length === 1) {
    if (inputAmount > 0) {
      if (inputPIN === userPinNo) {
        document.getElementById("available_balance").innerText = addMoney;
      } else {
        alert("Provide Valid PIN");
      }
    } else {
      alert("Provide Valid Amount");
    }
  } else {
    alert("Provide Valid Account No");
  }
});

// CashOut Function
document.getElementById("withdraw_btn").addEventListener("click", function () {
  const inoutAccountNo = getDefaultValue("withdraw_account_no");
  const inputAmount = getNumberValue("withdraw_amount");
  const inputPIN = getNumberValue("withdraw_pin");
  const mainBalance = parseInt(
    document.getElementById("available_balance").innerText
  );
  const withdrawABalance = mainBalance - inputAmount;

  if (inoutAccountNo.length === 1) {
    if (inputAmount <= mainBalance) {
      if (inputAmount > 0) {
        if (inputPIN === userPinNo) {
          document.getElementById("available_balance").innerText =
            withdrawABalance;
        } else {
          alert("Please Provide a Valid PIN No");
        }
      } else {
        alert("Please Input Valid Amount");
      }
    } else {
      alert("Not Sufficient Balance");
    }
  } else {
    alert("Please Provide a Valid Account NO");
  }
});

// Transfer Money Function
document
  .getElementById("transferAmount_btn")
  .addEventListener("click", function () {
    const inoutAccountNo = getDefaultValue("transferMoney_account_no");
    const inputAmount = getNumberValue("transferMoney_amount");
    const inputPIN = getNumberValue("transfer_pin");
    const mainBalance = parseInt(
      document.getElementById("available_balance").innerText
    );
    const withdrawABalance = mainBalance - inputAmount;

    if (inoutAccountNo.length === 1) {
      if (inputAmount <= mainBalance) {
        if (inputAmount > 0) {
          if (inputPIN === userPinNo) {
            document.getElementById("available_balance").innerText =
              withdrawABalance;
          } else {
            alert("Please Provide a Valid PIN No");
          }
        } else {
          alert("Please Input Valid Amount");
        }
      } else {
        alert("Not Sufficient Balance");
      }
    } else {
      alert("Please Provide a Valid Account NO");
    }
  });

// getBonus  Function
document
  .getElementById("getBonus_amount_btn")
  .addEventListener("click", function () {
    const couponCode = getDefaultValue("getBonus_Coupon");
    const mainBalance = parseInt(
      document.getElementById("available_balance").innerText
    );
    const couponBalance = mainBalance + couponCodeAmount;

    if (couponCode === giftCoupon) {
      document.getElementById("available_balance").innerText = couponBalance;
    } else {
      alert("Coupon Code is: GET500");
    }
  });

// Pay Bill Function
document
  .getElementById("PayBilling_btn")
  .addEventListener("click", function () {
    const inoutAccountNo = getDefaultValue("biller_account_no");
    const inputAmount = getNumberValue("payBill_amount");
    const inputPIN = getNumberValue("payBill_pin");
    const mainBalance = parseInt(
      document.getElementById("available_balance").innerText
    );
    const payBillBalance = mainBalance - inputAmount;

    if (inputAmount > 0) {
      if (inputAmount <= mainBalance) {
        if (inputPIN === userPinNo) {
          document.getElementById("available_balance").innerText =
            payBillBalance;
        } else {
          alert("Please Provide Valid PIN");
        }
      } else {
        alert("Not Sufficient Balance");
      }
    } else {
      alert("Please Provide Valid Bill Amount");
    }
  });

//  transactions function
