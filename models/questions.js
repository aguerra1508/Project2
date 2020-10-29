module.exports = function(sequelize, DataTypes) {
  const Questions = sequelize.define("Questions", {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Questions.associate = function(db) {
    Questions.hasMany(db.UserAnswers, {
      onDelete: "cascade"
    });

    Questions.hasMany(db.Hub, {
      onDelete: "cascade"
    });
  };
  

  return Questions;
};