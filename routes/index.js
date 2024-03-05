const express = require('express');
const { signIn, signUp } = require('../controller/user/user');
const router = express.Router();

router.route('/').get((req, res) => { res.send('API') });
router.route("/login").post(signIn)
router.route("/sign-up").post(signUp)

module.exports = router;