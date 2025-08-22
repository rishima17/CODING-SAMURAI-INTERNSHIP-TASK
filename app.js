document.addEventListener("DOMContentLoaded", () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));

  if (storedTasks) {
    storedTasks.forEach((task) => tasks.push(task));
    updateTasksList();
    updateStats(); // list ko dubara render karne ke liye
  }
});

const tasks = [];
const saveTask=()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));

}


// Function to add a new task
const addTask = () => {
  const taskInput = document.getElementById("taskInput");
  const text = taskInput.value.trim();


  if (text) {
    tasks.push({ text: text, completed: false });
    taskInput.value = "";
    updateTasksList();
    updateStats();
    saveTask();
  }
  updateStats();
   saveTask();
};
const  toggleTaskComplete=(index)=>{
    tasks[index].completed=!tasks[index].completed;
     updateTasksList();
     updateStats();

      saveTask();
      if (tasks[index].completed) {
   confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 },
});
}
}
const deleteTask=(index)=>{
    tasks.splice(index,1);
    updateTasksList();
    updateStats();
     saveTask();
}
const editTask = (index) => {
  const taskInput = document.getElementById('taskInput');
 taskInput.value = tasks[index].text;
tasks.splice(index, 1);
  updateTasksList();
  updateStats();
   saveTask();
};
const updateStats = () => {
  // Count completed tasks
  const completedTasks = tasks.filter((task) => task.completed).length;

  // Total tasks
  const totalTasks = tasks.length;

  // Calculate progress in percentage
  const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  // Select progress bar element
  const progressBar = document.getElementById("progress");

  // Debug log
  console.log(progress);

  // Update progress bar width
  progressBar.style.width = `${progress}%`;

  document.getElementById("numbers").innerText=`${completedTasks}/${totalTasks}`
   if (tasks.length && completedTasks===totalTasks){
    blastConfetti();
  }
};


// Function to update/render the tasks list
const updateTasksList = () => {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
      <div class="taskItem">
        <div class="task ${task.completed ? "completed" : ""}">
          <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""} />
          <p>${task.text}</p>
        </div>
        <div class="icons">
          <img src="./images/edit.png" onclick="editTask(${index})" />
          <img src="./images/delete.png" onclick="deleteTask(${index})" />
        </div>
      </div>
    `;

    // Checkbox toggle
    listItem.querySelector(".checkbox").addEventListener("change", () => {
      toggleTaskComplete(index);
    });

    taskList.append(listItem);
  });
 
};



document.getElementById("newTask").addEventListener("click",(event)=>{
    event.preventDefault();
    addTask();
});
const blastConfetti=()=>{
    const defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ["star"],
  colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ["star"],
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ["circle"],
  });
}

setTimeout(shoot, 0);
setTimeout(shoot, 100);
setTimeout(shoot, 200);
}