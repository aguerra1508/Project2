module.exports = function(sequelize, DataTypes) {
  const Questions = sequelize.define("Questions", {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  return Questions;
};