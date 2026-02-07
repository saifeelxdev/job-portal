const express = require("express");
const router = express.Router();

const { jobController } = require("../controllers/jobs.controller");
const { allowRoles } = require("../middleware/role.middleware");
const { authMiddlware } = require("../middleware/auth.middleware");

router.post("/jobs", authMiddlware, allowRoles("recruiter"), jobController);

module.exports = router;
