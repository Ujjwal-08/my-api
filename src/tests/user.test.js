// incomplete tests

const { createUser } = require("../src/services/userService");

test("create user", () => {
  const user = createUser({ name: "test" });
  expect(user.name).toBe("test");
});

// TODO: test invalid input