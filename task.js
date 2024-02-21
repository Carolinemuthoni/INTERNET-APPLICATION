window.onload = function() {
    var tasks = [];
    var submit = document.getElementById('submit');
    var newTask = document.getElementById('task');
    var button = document.getElementById('submit');

    button.disabled = true;
    newTask.addEventListener("input", enableButton);

    function enableButton() {
        submit.disabled = false;
    }

    submit.addEventListener("click", addTask);

    function addTask() {
        var taskItem = newTask.value;

        var taskObject = {
            taskItem: taskItem
        };

        tasks.push(taskObject);
        console.log(tasks);

        var ul = document.getElementById('tasks');
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(taskItem));
        ul.appendChild(li);

        newTask.value = ''; // Clear input field after adding task
        button.disabled = true;
    }

    // Prevent default form submission
    document.querySelector('form').onsubmit = function() {
        return false;
    };
}
