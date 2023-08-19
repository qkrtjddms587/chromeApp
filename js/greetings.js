const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input:first-child");
const greeting = document.querySelector("#greeting");
const toDoFormClassList = document.querySelector("#todo-form").classList;
const weatherClassList = document.querySelector("#weather").classList;
const welcome = document.querySelector("#welcome");
const body = document.body;
const password = document.querySelector("#password");

const HIDDEN_CLASSNAME = "hidden";
const FLEX_HIDDEN_CLASSNAME = "flex-hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  if (password.value === pwd) {
    loginForm.classList.add(FLEX_HIDDEN_CLASSNAME);
    welcome.classList.add(FLEX_HIDDEN_CLASSNAME);
    body.classList.add("text-shadow");
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
  } else {
    alert("Password is Wrong!, Try again!");
  }
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  quote.classList.remove(HIDDEN_CLASSNAME);
  weatherClassList.remove(HIDDEN_CLASSNAME);
  toDoFormClassList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Welcome! ${username}!`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(FLEX_HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  body.classList.add("text-shadow");
  welcome.classList.add(FLEX_HIDDEN_CLASSNAME);
  paintGreetings();
}
