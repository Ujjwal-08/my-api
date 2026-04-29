// partially implemented but unused

function auth(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("unauthorized");
  }

  next();
}

module.exports = auth;