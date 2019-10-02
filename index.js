const express = require('express');
const app = express();
const port = 3000;

const task = require('./payload/task');
const user = require('./payload/user');
const board = require('./payload/board');

app.get('/', (req, res) => res.send('Wellcome to Express\'ive api!'));

app.get('/users', user.getAll);
app.get('/user/:id', user.getOne);
app.post('/user', user.add);
app.put('/user/:id', user.change);
app.delete('/user/:id', user.delete);

app.get('/board', (req, res) => res.send(board));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));