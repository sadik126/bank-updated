const submitBtn = document.getElementById('btn-submit');

submitBtn.onclick = function(){
    let email = document.getElementById('email')
    let emailvalue = email.value ; 

    

    let password = document.getElementById('password')
    let passwordvalue = password.value;


    if(emailvalue === 'sadikhimel04@gmail.com' && passwordvalue == '1234'){
     window.location.href = 'calculate.html';
    }
}