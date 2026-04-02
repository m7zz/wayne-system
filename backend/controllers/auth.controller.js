const users = require("../utils/users");

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ error: "Login inválido" });
  }

  res.json({
    message: "Login ok",
    role: user.role
  });
};