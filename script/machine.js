console.log('machine conding test')
//machine id input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(value);
    return value;
}

//machine -> balance output dibe
function getBalance(){
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("current balance", Number(balance));
    return Number(balance);
}

// machine set balance
function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

//machine id > hide 
function showOnly(id){
   
    const addmoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    //  console.log(`add money ${addmoney}, Cashout ${cashout}`);
    //sobaike hide kore dau
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");

    //id ola element tumi show koro
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}