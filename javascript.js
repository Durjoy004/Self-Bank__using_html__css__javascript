//page changing 
let btnHandle = document.getElementById('button');
btnHandle.addEventListener('click', function () {
    var first_page_remove = document.getElementById('loginArea');
    first_page_remove.style.display = 'none';
    let secPageShow = document.getElementById('transactionArea');
    secPageShow.style.display = 'block';

})
// Deposite
let depositeButton = document.getElementById("depoBtn");
depositeButton.addEventListener('click', function () {
    let depositAmount = document.getElementById("depoInpu").value;
    if(depositAmount==='')
    {
        let depositAmount = document.getElementById("depoInpu").value;

    }
    else{
    let depositNumber = parseFloat(depositAmount);
    let currentDeposit = document.getElementById('currentDeposit').innerText;
    let currentDepositNumber = parseFloat(currentDeposit);
    let total = depositNumber + currentDepositNumber;
    document.getElementById('currentDeposit').innerText = total;
    let currentBalance = document.getElementById('balanceAmount').innerText;
    let currentBalanceNumber = parseFloat(currentBalance);
    document.getElementById('balanceAmount').innerText = currentBalanceNumber + depositNumber;
    }
    
})
//Withdraw
let withdrawButton = document.getElementById("withBtn");
withdrawButton.addEventListener('click', function () {
    let withdrawAmount = document.getElementById("withdrawInpu").value;
    if(withdrawAmount==='')
    {
        let withdrawAmount = document.getElementById("withdrawInpu").value;   
    }
    else{
        let withdrawNumber = parseFloat(withdrawAmount);
        let currentWithdraw = document.getElementById('currentWithdraw').innerText;
        let currentWithdrawNumber = parseFloat(currentWithdraw);
        let whole = withdrawNumber + currentWithdrawNumber;
        document.getElementById('currentWithdraw').innerText = whole;
        let currentBalance = document.getElementById('balanceAmount').innerText;
        let currentBalanceNumber = parseFloat(currentBalance);
        if(currentBalanceNumber===0 || currentBalanceNumber<withdrawNumber)
        {
            document.getElementById('balanceAmount').innerText = currentBalanceNumber;
            document.getElementById('currentWithdraw').innerText=  currentWithdrawNumber;
        }
        else{
            document.getElementById('balanceAmount').innerText = currentBalanceNumber - withdrawNumber;
        }
    }
    
})
