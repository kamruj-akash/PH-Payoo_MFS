const userPinNo = 1;
const giftCoupon = "GET500";
const couponCodeAmount = 500;
const transactionData = [];

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

function getTime(id) {
  const data = {
    Name: id,
    Date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
}

// Add Money Function
getID("add_money_btn").addEventListener("click", function () {
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
  getTime("Add Money");
});

// CashOut Function
getID("withdraw_btn").addEventListener("click", function () {
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
  getTime("Cash Out");
});

// Transfer Money Function
getID("transferAmount_btn").addEventListener("click", function () {
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
  getTime("Transfer Money");
});

// getBonus  Function
getID("getBonus_amount_btn").addEventListener("click", function () {
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
  getTime("Get Bonus");
});

// Pay Bill Function
getID("PayBilling_btn").addEventListener("click", function () {
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
        document.getElementById("available_balance").innerText = payBillBalance;
      } else {
        alert("Please Provide Valid PIN");
      }
    } else {
      alert("Not Sufficient Balance");
    }
  } else {
    alert("Please Provide Valid Bill Amount");
  }
  getTime("Pay Bill");
});

//  transactions function

getID("transactions_btn").addEventListener("click", function () {
  const transactionDiv = getID("transaction_div");
  const revData = transactionData.reverse();

  transactionDiv.innerText = "";
  for (const data of revData) {
    const div = document.createElement("div");
    div.innerHTML = `
              <div
            class="flex justify-between items-center bg-white py-3 px-4 rounded-xl my-4"
          >
            <div
              class="w-12 h-12 bg-[#F4F5F7] rounded-full flex items-center justify-center"
            >
              <div class="">
                <img src="assets/wallet1.png" alt="wallet" />
              </div>
            </div>
            <div class="w-8/12 ps-2">
              <h1>${data.Name}</h1>
              <p>${data.Date}</p>
            </div>
            <div
              class="w-12 h-12 bg-[#F4F5F7] rounded-full flex items-center justify-center"
            >
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
    `;
    transactionDiv.appendChild(div);
  }
});
