const tasksRepo = require('./task.memory.repository');

const getAll = (boardId) => tasksRepo.getAll(boardId);
const get = (boardId, id) => tasksRepo.get(boardId, id);
const post = (data) => tasksRepo.post(data);
const put = (boardId, id, data) => tasksRepo.put(boardId, id, data);
const del = (boardId, id) => tasksRepo.del(boardId, id);
const delByBoard = (boardId) => tasksRepo.delByBoard(boardId);

module.exports = { getAll, get, post, put, del, delByBoard };