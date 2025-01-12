// Get necessary elements
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task');
const clearTasksButton = document.getElementById('clear-tasks');

// Add task functionality with animation
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  const dueTime = document.getElementById('due-time').value;

  // If input field isn't empty, add a new task
  if (taskText) {
    const task = document.createElement('li');
    task.classList.add('task');
    task.innerHTML = `${taskText} <br> <small>Due: ${dueTime ? dueTime : 'No due time'}</small>`;

    // Add task to the list and trigger the animation
    taskList.appendChild(task);

    // Trigger the "added" class to start the fade-in animation
    setTimeout(() => {
      task.classList.add('added');
    }, 10);

    // Clear the input fields after adding the task
    taskInput.value = '';
    document.getElementById('due-time').value = '';
  }
});

// Remove task with animation
taskList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const task = event.target;
    task.classList.add('removing');

    // Wait for animation to finish before removing task from the DOM
    setTimeout(() => {
      task.remove();
    }, 300);
  }
});

// Clear all tasks
clearTasksButton.addEventListener('click', () => {
  taskList.innerHTML = ''; // Clear all tasks
});
