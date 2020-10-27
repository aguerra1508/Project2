module.exports = function (sequelize, DataTypes) {
  const Answers = sequelize.define("Answers", {
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Answers.associate = function(db) {
    Answers.belongsTo(db.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Answers.belongsTo(db.Questions, {
      foreignKey: {
        allowNull: false
      }
    });
        
  };

  return Answers;
};