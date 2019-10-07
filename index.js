const express = require('express');
const app = express();
const port = 3000;

const lists = require('./payload/lists/lists');
const tasks = require('./payload/tasks/tasks');
const users = require('./payload/users/users');
const boards = require('./payload/boards/boards');

app.get('/', (req, res) => res.send('Welcome to Express backend API!'));
// USERS
app.get('/users', users.getAll);
app.get('/user/:id', users.getOne);
app.post('/user', users.add);
app.put('/user/:id', users.change);
app.delete('/user/:id', users.delete);
// BOARDS
app.get('/boards', boards.getAll);
app.get('/board/:id', boards.getOne);
app.post('/board', boards.add);
app.put('/board/:id', boards.change);
app.delete('/board/:id', boards.delete);
// LISTS
app.get('/board/:boardId/lists', lists.getAll);
app.get('/board/:boardId/list/:listId', lists.getOne);
app.post('/board/:boardId/list', lists.add);
app.put('/board/:boardId/list/:listId', lists.change);
app.delete('/board/:boardId/list/:listId', lists.delete);
// TASKS
app.get('/board/:boardId/list/:listId/tasks', tasks.getAll);
app.get('/board/:boardId/list/:listId/task/:id', tasks.getOne);
app.post('/board/:boardId/list/:listId/task', tasks.add);
app.put('/board/:boardId/list/:listId/task/:id', tasks.change);
app.delete('/board/:boardId/list/:listId/task/:id', tasks.delete);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));