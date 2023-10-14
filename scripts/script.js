class ToDoItem {
    constructor(title) {
        this.title = title;
        this.timestamp = new Date().toLocaleString();
        this.completed = false;
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }

    editTitle(newTitle) {
        if (newTitle !== null) {
            newTitle = newTitle.trim();
            this.title = newTitle;
            this.timestamp = "modified on: " + new Date().toLocaleString();
        }
    }
}

class TodoItemPremium extends ToDoItem {
    constructor(title, iconUrl) {
        super(title); // Call the constructor of the base class (TodoItem)
        this.iconUrl = iconUrl; // Store the icon URL
    }

    // Method to display the icon
    displayIcon() {
        if (this.iconUrl) {
            var iconImg = document.createElement("img");
            iconImg.src = this.iconUrl;
            return iconImg;
        }
        return null; // Return null if no icon URL is provided
    }
}

// remove the task
function setupTaskRemoval() {
    var taskList = document.getElementById("myUL");

    taskList.addEventListener('click', function (event) {
        if (
            event.target.classList.contains("close") ||
            event.target.parentElement.classList.contains("close")
        ) {
            var div = event.target.closest("li");
            if (div) {
                // Get the task title from the todoItem associated with the li
                var taskTitle = div.todoItem.title;

                // Remove the task from local storage based on its title
                var savedTodos = JSON.parse(localStorage.getItem('todos'));
                if (savedTodos) {
                    savedTodos = savedTodos.filter(function (todo) {
                        return todo.title !== taskTitle;
                    });
                    localStorage.setItem('todos', JSON.stringify(savedTodos));
                }

                div.style.display = "none";
            }
        }
    }, false);
}

setupTaskRemoval();

//cross out competed task
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        ev.target.todoItem.toggleCompleted();
    }
}, false);

// edit the title
function handleTitleEdit(titleDiv, listItem) {
    var currentTitle = titleDiv.textContent.trim();
    var newTitle = prompt("Edit task title:", currentTitle);

    if (newTitle !== null) {
        newTitle = newTitle.trim();
        titleDiv.textContent = newTitle;
        listItem.querySelector(".timestamp").textContent = "modified on: " + new Date().toLocaleString();

        listItem.todoItem.editTitle(newTitle);

        saveTodos();
    }
}


var taskItems = document.querySelectorAll("LI");

taskItems.forEach(function (item) {
    item.addEventListener("dblclick", function () {
        var titleDiv = item.querySelector(".task-title");
        handleTitleEdit(titleDiv, item);
    });
});

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;

    if (inputValue === '') {
        alert("You can't create an empty task");
        return;
    }

    var timestamp = new Date().toLocaleString();

    var titleDiv = document.createElement("div");
    titleDiv.className = "task-title";
    var titleText = document.createTextNode(inputValue);
    titleDiv.appendChild(titleText);

    var timestampDiv = document.createElement("div");
    timestampDiv.className = "timestamp";
    var timestampText = document.createTextNode("added on: " + timestamp);
    timestampDiv.appendChild(timestampText);

    var closeDiv = document.createElement("div");
    closeDiv.className = "close";
    var closeSpan = document.createElement("SPAN");
    var closeText = document.createTextNode("\u00D7");
    closeSpan.appendChild(closeText);
    closeDiv.appendChild(closeSpan);

    li.appendChild(titleDiv);
    li.appendChild(timestampDiv);
    li.appendChild(closeDiv);

    li.todoItem = new ToDoItem(inputValue);

    var taskList = document.getElementById("myUL");

    taskList.insertBefore(li, taskList.firstChild);

    document.getElementById("myInput").value = '';

    li.addEventListener("dblclick", function () {
        handleTitleEdit(titleDiv, li);
    });

    closeDiv.onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
        delete li.todoItem;
    };

    saveTodos();
}

// keydown events
document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && e.target.id === "myInput") {
        newElement();
    } else if (e.key === "Escape") {
        var inputField = document.getElementById("myInput");
        inputField.value = "";
    }
});

function deleteAllTasks() {
    var uncompletedTasks = document.querySelectorAll('li:not(.checked)');
    var uncompletedTaskCount = uncompletedTasks.length;

    if (uncompletedTaskCount > 0) {
        var confirmMessage = "are you sure? you have " + uncompletedTaskCount + " uncompleted tasks";
        if (confirm(confirmMessage)) {
            var taskList = document.getElementById("myUL");
            while (taskList.firstChild) {
                delete taskList.firstChild.todoItem;
                taskList.removeChild(taskList.firstChild);
            }
        }
    } else {
        var taskList = document.getElementById("myUL");
        while (taskList.firstChild) {
            delete taskList.firstChild.todoItem;
            taskList.removeChild(taskList.firstChild);
        }
    }

}

function removeCompleted() {
    var list = document.getElementById("myUL");
    var checkedItems = list.querySelectorAll("li.checked");

    for (var i = 0; i < checkedItems.length; i++) {
        var listItem = checkedItems[i];
        delete listItem.todoItem;
        list.removeChild(listItem);
    }
}

var deleteButton = document.getElementById("rem-all");
deleteButton.addEventListener("click", deleteAllTasks);

var removeComp = document.getElementById("rem-completed");
removeComp.addEventListener("click", removeCompleted)

// save todos to local storage
function saveTodos() {
    let taskList = document.getElementById("myUL");
    let todos = Array.from(taskList.children)
        .map(function (li) {
            return li.todoItem;
        });
    console.log(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// load todos from local storage
function loadTodos() {
    let savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
        savedTodos.reverse().forEach(function (todo) {
            if (todo && todo.title) {
                var li = document.createElement("li");

                var titleDiv = document.createElement("div");
                titleDiv.className = "task-title";
                var titleText = document.createTextNode(todo.title);
                titleDiv.appendChild(titleText);

                var timestampDiv = document.createElement("div");
                timestampDiv.className = "timestamp";
                var timestampText = document.createTextNode(todo.timestamp);
                timestampDiv.appendChild(timestampText);

                var closeDiv = document.createElement("div");
                closeDiv.className = "close";
                var closeSpan = document.createElement("SPAN");
                var closeText = document.createTextNode("\u00D7");
                closeSpan.appendChild(closeText);
                closeDiv.appendChild(closeSpan);

                li.appendChild(titleDiv);
                li.appendChild(timestampDiv);
                li.appendChild(closeDiv);

                var taskList = document.getElementById("myUL");
                taskList.insertBefore(li, taskList.firstChild);

                var task = new ToDoItem(todo.title);
                task.timestamp = todo.timestamp;
                task.completed = todo.completed;

                li.todoItem = task;

                if (todo.completed) {
                    li.classList.add('checked');
                    task.toggleCompleted();
                }
                li.addEventListener("dblclick", function () {
                    var titleDiv = li.querySelector(".task-title");
                    handleTitleEdit(titleDiv, li);
                });
            }
        });
    }
}


function clearStorage() {
    localStorage.clear();
    alert("storage was cleared");
}

document.addEventListener("DOMContentLoaded", loadTodos);

var clear = document.getElementById("clear-stor");
clear.addEventListener("click", clearStorage);

// highlight random task
function pickRandomTodo() {
    var taskList = document.getElementById("myUL");
    var taskItems = taskList.getElementsByTagName("li");

    for (var i = 0; i < taskItems.length; i++) {
        taskItems[i].classList.remove("active-todo");
    }

    var randomIndex = Math.floor(Math.random() * taskItems.length);
    var selectedTodo = taskItems[randomIndex];

    selectedTodo.classList.add("active-todo");
}

var pickTodoButton = document.getElementById("pick");
pickTodoButton.addEventListener("click", pickRandomTodo);

var sortOrderText = document.getElementById("sortOrderText");

// sorting by date
var descending = true;

function toggleSortingOrder() {
    descending = !descending;
    if (descending) {
        sortOrderText.textContent = "oldest to newest \u2193";
        sortByDateAscending();
    } else {
        sortOrderText.textContent = "newest to oldest \u2193";
        sortByDateDescending();
    }
}

toggleSortingOrder();

var sortingIndicator = document.getElementById("sorting-indicator");
sortingIndicator.addEventListener("click", toggleSortingOrder);

function sortByDateAscending() {
    var taskList = document.getElementById("myUL");
    var taskItems = Array.from(taskList.getElementsByTagName("li"));

    taskItems.sort(function (a, b) {
        var dateA = new Date(a.todoItem.timestamp);
        var dateB = new Date(b.todoItem.timestamp);
        return dateA - dateB;
    });

    taskItems.forEach(function (item) {
        taskList.appendChild(item);
    });
}

function sortByDateDescending() {
    var taskList = document.getElementById("myUL");
    var taskItems = Array.from(taskList.getElementsByTagName("li"));

    taskItems.sort(function (a, b) {
        var dateA = new Date(a.todoItem.timestamp);
        var dateB = new Date(b.todoItem.timestamp);
        return dateB - dateA;
    });

    taskItems.forEach(function (item) {
        taskList.appendChild(item);
    });
}