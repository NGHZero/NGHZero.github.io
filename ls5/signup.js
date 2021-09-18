let formSignup = document.getElementById("formSignup");

let users = localStorage.getItem("users")

let userslist = []
if (users) {
userslist = JSON.parse(localStorage.getItem("users"))
    
}
formSignup.onsubmit = function(e){
        e.preventDefault();
        
        setTextError("#emailError","");
        setTextError("#passError","");
        setTextError("#cfpassError","");



    let email = formSignup.email.value
    let password = formSignup.password.value
    let cfpassword= formSignup.cfpassword.value

    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    localStorage.setItem("cfpassword",cfpassword);




let validate = true

if (!email) {
    setTextError("#emailError","Email is required");
    validate = false
    
}

if (!password) {
    setTextError("#passError","Password is required");
    validate = false
    
}

if (password.length < 6) {
    setTextError("#passError","Password length must be more than 6 characters");
    validate = false
    
}


if (cfpassword != password) {
    setTextError("#cfpassError","Password not matched");
    validate = false
    
}

if (validate) {
    let users ={
        email : email,
        password : password,
    }
    userslist.push(users)
    localStorage.setItem("users",JSON.stringify(userslist))
}



}
function setTextError(query,content) {
    document.querySelector(query).innerHTML = content
}




























