const express = require('express');
const app = express();
const port = 3000;

const tasks = require('./payload/tasks');
const users = require('./payload/users');
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));