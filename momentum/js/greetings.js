//const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form"); //-> 아이디를 찾는중임을 지칭해줘야함.
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); 

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    //greeting.innerText = "Hello " + username;
    greeting.innerText = ` Hello ${username}! 🙋‍♀️🙋🙋‍♂️ `; // `` '' ""
    greeting.classList.remove(HIDDEN_CLASSNAME); // remember st
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) { 
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);     
}else{
        //show the greetings
        paintGreetings(savedUsername);
    } 
    