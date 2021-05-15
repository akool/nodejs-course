const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const get = (id) => usersRepo.get(id);
const post = (data) => usersRepo.post(data);
const put = (id, data) => usersRepo.put(id, data);
const del = (id) => usersRepo.del(id);

module.exports = { getAll, get, post, put, del };
