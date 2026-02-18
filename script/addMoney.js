document.getElementById("add-money-btn").addEventListener("click", function(){
    //1.bank acount add
    const bankAcount = getValueFromInput("add-money-bank");
    if(bankAcount == "Select a bank"){
        alert("Please select a bank");
        return;
    }
    //2. get bank account number
    const accno = getValueFromInput("add-money-number");
    if(accno.length != 11){
        alert("Invalid acc No");
        return;
    }

    //3. get Amount 
    const amount = getValueFromInput("add-money-amount");
    const currentBalance = getBalance();

    const newBalance = currentBalance + Number(amount);
    console.log(newBalance);

    const pin = getValueFromInput("add-money-pin");
    if(pin == "1234"){
        alert(`Add money success 
            ${bankAcount}
             at ${new Date()}`);
        setBalance(newBalance)
    }else{
        alert("Invalid Pin");
        return;
    }
})