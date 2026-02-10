const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET;

exports.register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Email and password required" });

  const existingUser = await User.findOne({ email });
  if (existingUser)
    return res.status(409).json({ message: "Email already exists" });

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    passwordHash,
  });

  const token = jwt.sign(
    { userId: user._id },
    JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.status(201).json({ token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Email and password required" });

  const user = await User.findOne({ email });
  if (!user)
    return res.status(401).json({ message: "No User Find" });

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid)
    return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { userId: user._id },
    JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({ token });
};
