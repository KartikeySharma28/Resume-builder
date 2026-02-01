const express = require('express');
const { getUserByEmail } = require('../controllers/userController');


const router = express.Router();

router.get('/users/:email', getUserByEmail);

module.exports = router;
