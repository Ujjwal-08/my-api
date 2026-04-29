let db = [];

function saveUser(user) {
  db.push(user);
  return user;
}

function findAll() {
  return db;
}

module.exports = { saveUser, findAll };