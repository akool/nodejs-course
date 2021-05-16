const router = require('express').Router({mergeParams: true});
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll(req.params.boardId);

  res.json(tasks.map(Task.toResponse));
});

router.route('/:taskId').get(async (req, res) => {
  const task = await tasksService.get(req.params.boardId, req.params.taskId);

  if (task) {
    res.json(Task.toResponse(task));
  } else {
    res.sendStatus(404);
  }
});

router.route('/').post(async (req, res) => {
  const data = req.body;
  data.boardId = req.params.boardId;

  const task = await tasksService.post(new Task(data));

  res.status(201);
  res.json(Task.toResponse(task));
});

router.route('/:taskId').put(async (req, res) => {
  const task = await tasksService.put(req.params.taskId, req.body);

  res.json(Task.toResponse(task));
});

router.route('/:taskId').delete(async (req, res) => {
  const deleted = await tasksService.del(req.params.taskId);

  const status = deleted ? 204 : 404;

  res.sendStatus(status);
});

module.exports = router;