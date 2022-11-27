const express = require("express");
const router = express.Router();
const { createClassroom, findUsersByClass } = require("../controllers/classroom.controller");

router.post("/", createClassroom);
router.get("/:classroomId", findUsersByClass);


module.exports = router;