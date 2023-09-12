const express = require("express")
const { protect } = require("../middlewares/authMiddleware")
const { accessChat, fetchChats, createGroupChat, renameGroup, addGroup, removeFromGroup } = require("../controllers/chatControllers")
const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupadd").put(protect, addGroup);
router.route("/groupremove").put(protect, removeFromGroup);

module.exports = router