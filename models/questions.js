module.exports = function(sequelize, DataTypes) {
  const Questions = sequelize.define("questions", {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Questions.associate = function(db) {
    Questions.hasMany(db.Answers, {
      onDelete: "cascade"
    });
  };

  return Questions;
};