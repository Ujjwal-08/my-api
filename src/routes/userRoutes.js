const logger = require("../utils/logger");

router.post("/", (req, res) => {
  logger.log("creating user");

  try {
    const user = userService.createUser(req.body);
    res.json(user);
  } catch (e) {
    res.status(500).send("error");
  }
});