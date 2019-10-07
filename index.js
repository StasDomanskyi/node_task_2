const express = require('express');
const app = express();
const port = 3000;

const tasks = require('./payload/tasks/tasks');
const users = require('./payload/users/users');
const boards = require('./payload/boards/boards');

app.get('/', (req, res) => res.send('Wellcome to Express\'ive api!'));

app.get('/users', users.getAll);
app.get('/user/:id', users.getOne);
app.post('/user', users.add);
app.put('/user/:id', users.change);
app.delete('/user/:id', users.delete);

app.get('/boards', boards.getAll);
app.get('/board/:id', boards.getOne);
app.post('/board', boards.add);
app.put('/board/:id', boards.change);
app.delete('/board/:id', boards.delete);

app.get('/board/:boardId/lists', lists.getAll);
app.get('/board/:boardId/list/:listId', lists.getOne);
app.post('/board/:boardId/list', lists.add);
app.put('/board/:boardId/list/:listId', lists.change);
app.delete('/board/:boardId/list/:listId', lists.delete);

app.get('/tasks', tasks.getAll);
app.get('/task/:id', tasks.getOne);
app.post('/task', tasks.add);
app.put('/task/:id', tasks.change);
app.delete('/task/:id', tasks.delete);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));