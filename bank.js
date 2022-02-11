// get same money



// --------------------Deposit-------------------
document.getElementById('Deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('Deposit-input');
    const deposittext = depositInput.value;
    const depositAmount = parseFloat(deposittext);

    // updet Deposit total

    const Deposittotal = document.getElementById('Deposit-total');
    const correntDeposittext = parseFloat(Deposittotal.innerText);
    const newDepositTotal = correntDeposittext + depositAmount;
    Deposittotal.innerText = newDepositTotal;

    // updet account balence
    const Blancetotal = document.getElementById('Blance-total');
    const correntBlancetotal = parseFloat(Blancetotal.innerText);
    const newBlancetotal = correntBlancetotal + depositAmount;
    Blancetotal.innerText = newBlancetotal;

    depositInput.value = '';
})

// handel Event hendelar
document.getElementById('Withdraw-btn').addEventListener('click', function(){
    const WithdrawInput = document.getElementById('Withdraw-input');
    const WithdrawAmounttext = WithdrawInput.value;
    const NewWithdrawAmount = parseFloat(WithdrawAmounttext);

    // set withdrow Amount
    const Withdrawtotal = document.getElementById('Withdraw-total');
    const preveoWithdrawtotaltext = Withdrawtotal.innerText;
    const preveoWithdrawtotal = parseFloat(preveoWithdrawtotaltext);

    const NewpreveoWithdrawtotal = NewWithdrawAmount + preveoWithdrawtotal;
    Withdrawtotal.innerText = NewpreveoWithdrawtotal;

     // updet account balence
     const Blancetotal = document.getElementById('Blance-total');
     const correntBlancetotal = parseFloat(Blancetotal.innerText);
     const newBlancetotal = correntBlancetotal - NewWithdrawAmount;
     Blancetotal.innerText = newBlancetotal;

    WithdrawInput.value = '';
})