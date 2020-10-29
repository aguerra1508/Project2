module.exports = function(sequelize, DataTypes) {
  const Questions = sequelize.define("Questions", {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Questions.associate = function(db) {
    Questions.hasMany(db.Answers, {
      onDelete: "cascade"
    });

    Questions.hasMany(db.Hubs, {
      onDelete: "cascade"
    });
  };

  return Questions;
};