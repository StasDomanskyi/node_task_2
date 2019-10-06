let tasks = [
  {
  "id": 1,
  "title": "Stay alive till tomorrow",
  "order": "Firstly",
  "description": "Do all what you can",
  "assignee": "all witnesseses"
}];

const task = {
  getAll: (req, res) => {
    res.send(tasks)
  },
  getOne: (req, res) => {
    res.send(tasks[req.params.id - 1]);
  },
};

module.exports = task;
