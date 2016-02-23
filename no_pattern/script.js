function save() {
	// Obtener elementos
	var task = document.getElementById("task").value;
	var complete = document.getElementById("complete").checked;

	//save into array
	listTasks.push({
		"task": task,
		"complete": complete
	});

	// check if task is complete and create element in dom
	if (complete) {
		document.getElementById("tasks").innerHTML += '<li class="list-group-item complete">' + task + '<span class="glyphicon glyphicon-remove pull-right" aria-hidden="true" onclick="remove()"></span></li>';
	} else {
		document.getElementById("tasks").innerHTML += '<li class="list-group-item">' + task + '<span class="glyphicon glyphicon-remove pull-right" aria-hidden="true" onclick="remove()"></span></li>';
	}

	// add event of remove to list of tasks
	var classname = document.getElementsByClassName("glyphicon-remove");
	for (var i = 0; i < classname.length; i++) {
		classname[i].onclick = function(event) {
			listTasks.forEach(function(task, index) {
				if (task.task === event.target.parentElement.textContent) {
					listTasks.splice(index, 1);
					localStorage.setItem('task', JSON.stringify(listTasks));
					event.target.parentElement.remove();
				}
			});
		};
	};
	
	//save data on local storage
	localStorage.setItem('task', JSON.stringify(listTasks));
}

var listTasks = localStorage.task? JSON.parse(localStorage.task) : [];

listTasks.forEach(function(task) {
	if (task.complete) {
		document.getElementById("tasks").innerHTML += '<li class="list-group-item complete">' + task.task + '<span class="glyphicon glyphicon-remove pull-right" aria-hidden="true" onclick="remove()"></span></li>';
	} else {
		document.getElementById("tasks").innerHTML += '<li class="list-group-item">' + task.task + '<span class="glyphicon glyphicon-remove pull-right" aria-hidden="true" onclick="remove()"></span></li>';
	}
	var classname = document.getElementsByClassName("glyphicon-remove");
	for (var i = 0; i < classname.length; i++) {
		classname[i].onclick = function(event) {
			listTasks.forEach(function(task, index) {
				if (task.task === event.target.parentElement.textContent) {
					listTasks.splice(index, 1);
					localStorage.setItem('task', JSON.stringify(listTasks));
					event.target.parentElement.remove();
				}
			});
		};
	};
});