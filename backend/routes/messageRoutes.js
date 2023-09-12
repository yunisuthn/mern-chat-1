const express = require("express")
const { protect } = require("../middlewares/authMiddleware")
const { sendMessage } = require("../controllers/messageControllers")
const { allMesages } = require("../controllers/messageControllers")

const router = express.Router()

router.route("/").post(protect, sendMessage)
router.route("/:chatId").get(protect, allMesages)

module.exports = router