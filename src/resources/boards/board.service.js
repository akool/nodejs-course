const boardsRepo = require('./board.memory.repository');
const { delByBoard } = require('../tasks/task.service');

const getAll = () => boardsRepo.getAll();
const get = (id) => boardsRepo.get(id);
const post = (data) => boardsRepo.post(data);
const put = (id, data) => boardsRepo.put(id, data);
const del = async (id) => {
  await boardsRepo.del(id);
  await delByBoard(id);
}

module.exports = { getAll, get, post, put, del };