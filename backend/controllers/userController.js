const User = require('../models/User');

exports.getUsers = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Access denied' });
  const users = await User.find();
  res.json(users);
};

// Add manage users logic
