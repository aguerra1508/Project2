module.exports = function(sequelize, DataTypes) {
  const UserAnswers = sequelize.define("UserAnswers", {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  UserAnswers.associate = function(db) {
    UserAnswers.belongsTo(db.Questions, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return UserAnswers;
};