module.exports = (sequelize, Sequelize) => {
    const ClassRoom = sequelize.define("classroom", {
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      capacity: {
        type: Sequelize.INTEGER,
      },
    });
  
    return ClassRoom;
  };
  