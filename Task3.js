let password = prompt('Enter Your Password');
let flag=false;
if (password.length >= 8) {
    if (password.charAt(0).toLowerCase() >= 'a' && password.charAt(0).toLowerCase() <= 'z') {
        for (let i = 0; i < password.length; i++) {

            if (!((password.charAt(i).toLowerCase() >= 'a' && password.charAt(i).toLowerCase() <= 'z') || Number(password.charAt(i)) >= 0)) {
                flag=true
                break;
            }
        }
    }
    else{
        flag=true;
    }
}
else{
    flag=true;
}

if (flag){
    document.write('<h1>Enter a valid password of min 8 character containing a-z, A-Z & 0-9</h1>');
    document.write('<h1>and first character must be an Alphabet</h1>');

}
else{
    document.write('<h1>Entered PASSWORD is OK</h1>');
}
