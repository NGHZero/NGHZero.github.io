let domSignin = document.getElementById("formSignin");

formSignup.onsubmit = function (e) {
    e.preventDefault();





    let email = domSignin.email.value
    let password = domSignin.password.value

    console.log(email);
    console.log(password);
}