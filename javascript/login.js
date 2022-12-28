function validateEmail(){
    let email = document.getElementById('email').value;
    if(email.trim().length == 0){
        document.getElementById('eout').innerText = "Please Enter Email Id"
    }else{
       if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") == null){
            document.getElementById('eout').innerText = "Please Enter Valid Email"
       } else{
            document.getElementById('eout').innerText = ""
       }
    }
}