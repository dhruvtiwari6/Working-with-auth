const router = require('express').Router();
const {userLogin} = require('../controllers/user.controller.js')

router.route('/login').post(userLogin);

module.exports = {router};

