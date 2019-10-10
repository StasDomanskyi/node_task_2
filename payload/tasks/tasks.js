const TaskGenerator = require('../../functions/TaskGenerator');
const ordersArray = require('../lists/ordersArray');
const boards = require('../boards/boardsData');
const users = require('../users/usersData');
let tasks = [];
  
for(let i = 1; i <= 100; i++) {
  tasks.push(TaskGenerator(i));
}

module.exports = {
  getAll: (req, res) => {
    res.send(tasks);
  },

  getList: (req, res) => {
    let currentBoard = boards[req.params.boardId - 1];
    if (!currentBoard) {
      res.send('Theres is no tasks under such title');
      return;
    }
    
    let currentOrder = ordersArray[req.params.listId - 1];
    if (!currentOrder) {
      res.send('Theres is no tasks under such order');
      return;
    }

    let newArr = tasks.filter(task => task.title === currentBoard.title && task.order === currentOrder);
    res.send(newArr);
  },

  getOne: (req, res) => {
    let currentBoard = boards[req.params.boardId - 1];
    if (!currentBoard) {
      res.send('Theres is no tasks under such title');
      return;
    }
    
    let currentOrder = ordersArray[req.params.listId - 1];
    if (!currentOrder) {
      res.send('Theres is no tasks under such order');
      return;
    }
    
    let tasksArray = tasks.filter(task => task.title === currentBoard.title && task.order === currentOrder);
    res.send(tasksArray[req.params.taskId - 1]);
  },

  add:  (req, res) => {
    let currentBoard = boards[req.params.boardId - 1];
    if (!currentBoard) {
      res.send('Theres is no tasks under such title');
      return;
    }
    
    let currentOrder = ordersArray[req.params.listId - 1];
    if (!currentOrder) {
      res.send('Theres is no tasks under such order');
      return;
    }
    
    let tasksArray = tasks.filter(task => task.title === currentBoard.title && task.order === currentOrder);
    let newItemNumber = tasks.length + 1;
    let newTaskInstance = TaskGenerator(newItemNumber, req.params.boardId, req.params.listId);
    let taskIndex = tasksArray.findIndex(task => newTaskInstance.description === task.description);
    let noTask = taskIndex === -1;
    
    if (noTask) {      
      tasks.push(newTaskInstance);
      res.send(newTaskInstance);
    }
    else {
      res.send("Such task already exists");
    }
  },

  change: (req, res) => {
    let currentBoard = boards[req.params.boardId - 1];
    let taskId;

    if (!currentBoard) {
      res.send('Theres is no tasks under such title');
      return;
    }
    
    let currentOrder = ordersArray[req.params.listId - 1];
    if (!currentOrder) {
      res.send('Theres is no tasks under such order');
      return;
    }

    let tasksArray = tasks.filter(task => task.title === currentBoard.title && task.order === currentOrder);
    let taskIndex = +req.params.id - 1;

    if ( taskIndex < tasksArray.length && taskIndex >= 0) {
      taskId = tasksArray[taskIndex].id;
    } else {
      res.send("There is no such task");
      return;
    }

    let taskPosition = tasks.findIndex(task => task.id === taskId);
    let noTask = taskPosition === -1;

    if (!noTask) {
      tasks[taskPosition]["description"] = "Clear that stuff immideately!!";
      res.send(tasks[taskPosition]);
    }
    else {
      res.send("There is no such task");
    }
  },

  delete: (req, res) => {
    let currentBoard = boards[req.params.boardId - 1];
    let taskId;

    if (!currentBoard) {
      res.send('Theres is no tasks under such title');
      return;
    }
    
    let currentOrder = ordersArray[req.params.listId - 1];
    if (!currentOrder) {
      res.send('Theres is no tasks under such order');
      return;
    }

    let tasksArray = tasks.filter(task => task.title === currentBoard.title && task.order === currentOrder);
    let taskIndex = +req.params.id - 1;

    if ( taskIndex < tasksArray.length && taskIndex >= 0) {
      taskId = tasksArray[taskIndex].id;
    } else {
      res.send("There is no such task");
      return;
    }

    let taskPosition = tasks.findIndex(task => task.id === taskId);
    let noTask = taskPosition === -1;

    if (!noTask) {
      res.send(tasks[taskPosition]);
      tasks.splice(taskPosition, 1);
    }
    else {
      res.send("Such task already doesn't exists");
    }
  },

  getUserTasks: (req, res) => {
    let currentUser = users[req.params.userId - 1];
    if (!currentUser) {
      res.send('Theres is no such user');
      return;
    }
    
    let tasksArray = tasks.filter(task => task.assignee === currentUser.id);
    res.send(tasksArray);
  }
};  
