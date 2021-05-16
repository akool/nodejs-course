const router = require('express').Router({mergeParams: true});
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll(req.params.boardId);

  res.json(tasks.map(Task.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const task = await tasksService.get(req.params.boardId, req.params.id);

  res.json(Task.toResponse(task));
});

router.route('/').post(async (req, res) => {
  const data = req.body;
  data.boardId = req.params.boardId;
  const task = await tasksService.post(new Task(data));

  res.status(201);
  res.json(Task.toResponse(task));
});

router.route('/:id').put(async (req, res) => {
  const task = await tasksService.put(req.params.id, req.body);

  res.json(Task.toResponse(task));
});

router.route('/:id').delete(async (req, res) => {
  await tasksService.del(req.params.taskId);

  res.sendStatus(204);
});

module.exports = router;