document.getElementById('Submit-btn').addEventListener('click', function(){
    //get uder email
    const emailfild = document.getElementById('user-email');
    const userEmail = emailfild.value;
    //get uder password
    const passFild = document.getElementById('user-pass');
    const userPass = passFild.value;
    if (userEmail == 'sontan@gmail.com' && userPass == 'secret'){
        window.location.href = 'banking.html'
    }
    else(
        console.log('this email and password not mas')
    )

})