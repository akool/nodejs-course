const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const get = (id) => boardsRepo.get(id);
const post = (data) => boardsRepo.post(data);
const put = (id, data) => boardsRepo.put(id, data);
const del = (id) => boardsRepo.del(id);

module.exports = { getAll, get, post, put, del };