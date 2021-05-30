const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();

  res.json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.get(req.params.id);

  if (board) {
    res.json(Board.toResponse(board));
  } else {
    res.sendStatus(404);
  }
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.post(new Board(req.body));

  res.status(201);
  res.json(Board.toResponse(board));
});

router.route('/:id').put(async (req, res) => {
  const board = await boardsService.put(req.params.id, req.body);

  res.json(Board.toResponse(board));
});

router.route('/:id').delete(async (req, res) => {
  await boardsService.del(req.params.id);

  res.sendStatus(204);
});

module.exports = router;