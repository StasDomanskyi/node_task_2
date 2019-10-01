const task = require('./payload/task');
const board = require('./payload/board');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/task', (req, res) => res.send(task));

app.get('/board', (req, res) => res.send(board));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));