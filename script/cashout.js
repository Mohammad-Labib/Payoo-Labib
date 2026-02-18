document.getElementById("cashout-btn").addEventListener("click", function(){
    //get agent number & valid 
    const cashoutNumber = getValueFromInput("cashout-number");
    if(cashoutNumber.length != 11){
        alert("invalid Amount");
        return;
    }
    //get the amount
    const cashoutAmount = getValueFromInput("cashout-amount");

  const currentBalance = getBalance();
    // 4. calculate Balance
    const nweBalance = currentBalance - Number(cashoutAmount);
    console.log(nweBalance);
    if(this.nweBalance < 0){
        alert("invalid Amount");
        return;
    }
    const pin =  getValueFromInput("cashout-pin");
    if(pin === "1234"){
        alert("Cashout SuccessFull");
       setBalance(nweBalance)
    }else{
        alert("invalid pin");
        return;
    }

})



// document.getElementById("cashout-btn").addEventListener("click", function(){
//     //get the agent number $ valid
//     const cashNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashNumberInput.value;
//     console.log(cashoutNumber) 
//     if(cashoutNumber.length !=11){
//         alert("Ivalid Agent Number");
//         return;
//     }

//     //get the amount, valiad , convert to number
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);
//     //3 curent balance, valiad , convert to number
//     const balanceElement = document.getElementById("balance");
//     const  balance = balanceElement.innerText;
//     console.log(balance);
//     //calculator new balance
//     const newBalance = Number(balance) - Number(cashoutAmount);
    

//     if(newBalance < 0) {
//         alert("Invalid Amount");
//         return;
//     }
//     console.log(newBalance)
//     //get the pin and varify
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const pin = cashoutPinInput.value;
//     if(pin === '1234'){
//         //true show and alert>balance set
//         alert("cashout successful")
//         balanceElement.innerText = newBalance;
        
//     }else{
//          //true show anerror alert>return
//         alert("Invalid Pin");
//         return;
//     }
    
   
// })