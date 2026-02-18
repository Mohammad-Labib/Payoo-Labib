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