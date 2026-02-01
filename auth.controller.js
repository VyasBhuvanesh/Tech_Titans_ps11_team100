const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

const SECRET = "hostel_secret";

exports.login = (req, res) => {
  const { username, password } = req.body;

  User.findByUsername(username, (err, result) => {
    if (result.length === 0)
      return res.status(401).json({ message: "User not found" });

    const user = result[0];

    if (!bcrypt.compareSync(password, user.password))
      return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      role: user.role,
      id: user.id,
      name: user.name
    });
  });
};
