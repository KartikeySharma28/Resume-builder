const userService = require('../services/userService');

const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await userService.getUserByEmail(email);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({ email: user.email });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getUserByEmail };
