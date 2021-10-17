const UNCOMPLETED_LIST_TODO_ID = "todos";

function addTodo() {
    const uncompletedTODOList = document.getElementById(UNCOMPLETED_LIST_TODO_ID);

    const textTodo = document.getElementById("title").value;
    const timestamp = document.getElementById("date").value;
    console.log("todo" + textTodo);
    console.log("timestamp" + timestamp);
    
}