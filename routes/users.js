var express = require('express');
const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require('../controllers/user.controller');
const validate = require('../middlewares/validator');
var router = express.Router();

router.get('/', getAllUsers);
router.get('/:userId', getUser);
router.post('/', validate, createUser);
router.put('/:userId', validate, updateUser);
router.delete('/:userId', deleteUser);

module.exports = router;
