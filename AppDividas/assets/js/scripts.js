const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');


form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	const inputField1 = document.getElementById('task-valor');
	addTask(inputField.value,inputField1.value);
	form.reset();
};

function addTask(description,description1) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);


	const taskLabel1 = document.createElement('label');
	const taskDescriptionNode1 = document.createTextNode(description1);


	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskLabel1.setAttribute('for', description1);
	taskLabel1.appendChild(taskDescriptionNode1);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskContainer.appendChild(taskLabel1);

	taskList.appendChild(taskContainer);
}