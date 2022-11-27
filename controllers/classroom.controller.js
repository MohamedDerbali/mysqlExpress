const { classroom } = require("../models");

const createClassroom = async (req, res, next) => {
  const { name, description, capacity } = req.body;
  try {
    const createdClassroom = await classroom.create({
      name,
      description,
      capacity,
    });
    res.status(201).json({
      createdClassroom,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const findUsersByClass = async (req, res) => {
  try {
    const { classroomId } = req.params;
    const classroomData = await classroom.findOne({
      where: { id: classroomId },
      include: "users",
    });
    if (!classroomData) {
      throw new Error("Classroom not found");
    }
    res.status(200).json({
      classroomData,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
module.exports = {
  createClassroom,
  findUsersByClass,
};
