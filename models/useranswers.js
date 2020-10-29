module.exports = function(sequelize, DataTypes) {
  const UserAnswers = sequelize.define("UserAnswers", {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  UserAnswers.associate = function(db) {
    UserAnswers.belongsTo(models.Questions, {
      foreignKey: {
        allowNull: false
      }
    });

    UserAnswers.hasMany(db.Hubs,{
      onDelete: "cascade"
    });
    
  };
  return UserAnswers;
};