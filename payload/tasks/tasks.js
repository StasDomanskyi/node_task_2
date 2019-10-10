const TaskGenerator = require('../../functions/TaskGenerator');
const ordersArray = require('../lists/ordersArray');
let tasks = [];
  
for(let i = 1; i <= 20; i++) {
  tasks.push(TaskGenerator(i));
}

module.exports = {
  getAll: (req, res) => {
    res.send(tasks);
  },

  getList: (req, res) => {
    let currentTitle = ordersArray[req.params.listId - 1];
    if (!currentTitle) {
      res.send('Theres is no tasks under such id');
      return;
    }

    let newArr = tasks.filter(task => task.title === currentTitle);
    res.send(newArr);
  },

  getOne: (req, res) => {
    let currentTitle = ordersArray[req.params.listId - 1];
    if (!currentTitle) {
      res.send('Theres is no tasks under such id');
      return;
    }
    
    let tasksArray = tasks.filter(task => task.title === currentTitle);
    res.send(tasksArray[req.params.taskId - 1]);
  },

  add:  (req, res) => {
    let currentTitle = ordersArray[req.params.listId - 1];
    if (!currentTitle) {
      res.send('Theres is no tasks under such title');
      return;
    }
    
    let tasksArray = tasks.filter(task => task.title === currentTitle);
    let taskIndex = tasksArray.findIndex(task => +req.params.id === +task.id);
    let noTask = taskIndex === -1;
    
    if (noTask) {
      let newItemNumber = tasks.length + 1;  
      let newTaskInstance = TaskGenerator(newItemNumber); 
      
      tasks.push(newTaskInstance);
      res.send(newTaskInstance);
    }
    else {
      res.send("Such task already exists");
    }
  },

  change: (req, res) => {
    let taskIndex = tasks.findIndex(task => +req.params.id === +task.id);
    let noTask = taskIndex === -1;
  
    if (!noTask) {
      tasks[taskIndex]["title"] = "Clear that stuff immideately";
      res.send(tasks[taskIndex]);
    }
    else {
      res.send("There is no such task");
    }
  },

  delete: (req, res) => {
    let taskIndex = tasks.findIndex(task => +req.params.id === +task.id);
    let noTask = taskIndex === -1;

    if (!noTask) {
      res.send(tasks[taskIndex]);
      tasks.splice(taskIndex, 1);
    } else {
      res.send("Such task already doesn't exists");
    }
  }
};  
