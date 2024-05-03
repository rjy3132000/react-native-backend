const express = require("express");
const { authUserLogin } = require("../controller/Login");
const {
  createNote,
  updateNote,
  delteNote,
  getNoteById,
} = require("../controller/Notes");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").get((req, res) => {
  res.json({ message: "API is working" });
});
router.route("/login").post(authUserLogin);
router.route("/add-note").post(protect, createNote);
router.route("/update-note/:id").post(protect, updateNote);
router.route("/delete-note/:id").delete(protect, delteNote);
router.route("/note/:id").delete(protect, getNoteById);

module.exports = router;
