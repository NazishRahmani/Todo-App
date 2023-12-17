let todoList=[];






function addTodo(){
    let inputElement=document.querySelector('#todo-input');
    let todoItem=inputElement.value;
    todoList.push(todoItem);
console.log(todoList);
inputElement.value='';
}

function displayItems(){
  let [a]=todoList;
let display=document.querySelector('#todo-items');
display.value=[a];
console.log(display);
}