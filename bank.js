// get same money



// --------------------Deposit-------------------
document.getElementById('Deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('Deposit-input');
    const depositAmount = depositInput.value
    console.log(depositAmount);

    const Deposittotal = document.getElementById('Deposit-total');
    Deposittotal.innerText = depositAmount;
    depositInput.value = '';
})



// --------------Withdraw--------------------
document.getElementById('Withdraw-btn').addEventListener('click', function(){
    const WithdrawInput = document.getElementById('Withdraw-input');
    const WithdrawAmount = WithdrawInput.value
    console.log(WithdrawAmount);
})