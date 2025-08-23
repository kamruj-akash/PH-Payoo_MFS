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
    const addMoneyPinNo = document.getElementById("addMoney_pin").value;
    const availableBalance = parseInt(
      document.getElementById("available_balance").innerText
    );
    if (addMoneyAccountNo.length === 11) {
      if (addMoneyPinNo.length === 4) {
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
