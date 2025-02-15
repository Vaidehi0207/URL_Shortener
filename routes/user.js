// is route me saara user se related kaam hoga 
// for example login signup etc 
const express = require('express');
const { handleUserSignup } = require('../controller/user')
const { handleUserLogin } = require('../controller/user');
const router = express.Router();

// first create route for signup 

router.post('/', handleUserSignup)
router.post('/login', handleUserLogin)

module.exports = router;