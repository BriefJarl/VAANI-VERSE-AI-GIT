const express = require("express");
const router = express.Router();

const { extractTask } = require("../controllers/aiController");

router.post("/extract", extractTask);

module.exports = router;