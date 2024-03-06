const express = require("express");
const { authUserLogin } = require("../controller/Login");
const { createNote, updateNote } = require("../controller/Notes");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route('/').get((req, res) => { res.send('API is working') });
router.route('/login').post(authUserLogin);
router.route("/add-note").post(protect,createNote)
router.route("/update-note/:id").post(protect,updateNote);

module.exports = router;