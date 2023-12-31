const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event) {
    const deleteLi = event.target.parentElement;
    deleteLi.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(deleteLi.id));
    saveToDos();
}

function checkToDo(event) {
    const checkLi = event.target.parentElement;
    console.dir(checkLi);
    if (checkLi.firstChild.className === "") {
        checkLi.firstChild.classList.add("success");    
    } else {
        checkLi.firstChild.classList.remove("success");
    }
}

function paintToDo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const checkBtn = document.createElement("button");
    checkBtn.innerText = "⭕️";
    checkBtn.addEventListener("click",checkToDo);
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(checkBtn);
    li.appendChild(deleteBtn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null ){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
