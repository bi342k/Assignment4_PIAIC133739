let email = prompt('Enter an Email Address ');
let patern=/\S+@\S+\.\S+/


if (email.match(patern)){
    alert('email is valid');
}
else{
    alert('email is invalid')
}