const TaskGenerator = require('./TaskGenerator');

let tasks = [
  TaskGenerator(1),
  TaskGenerator(2),
  TaskGenerator(3),
];

module.exports = {
  getAll: (req, res) => {
    res.send(tasks);
  },

  getOne: (req, res) => {
    if (req.params.id > tasks.length) {
      res.send('No task under such id exists.');
    }

    res.send(tasks[req.params.id - 1]);
  },

  add:  (req, res) => {
    let taskIndex = tasks.findIndex(task => +req.params.id === +task.id);
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
      tasks[taskIndex]["title"] = "Purchase that stuff immideately";
      res.send(tasks[taskIndex]);
    }
    else {
      res.send("There is no such task");
    }
  },

  delete: (req, res) => {
    let taskIndex = tasks.findIndex(task => {
      return +req.params.id === +task.id;
    });

    let noTask = taskIndex === -1;
    if (!noTask) {
      res.send(tasks[taskIndex]);
      tasks.splice(taskIndex, 1);
    } else {
      res.send("No task exists");
    }
  }
};  
