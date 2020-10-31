module.exports = function(sequelize, DataTypes) {

  const Hub = sequelize.define("Hub", {
    answered: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  });

  Hub.associate = function(db) {
    Hub.belongsTo(db.Users, {
      foreignKey: {
        allowNull: false
      }
    });
    Hub.belongsTo(db.Questions, {
      foreignKey: {
        allowNull: false
      }
    });
    Hub.belongsTo(db.UserAnswers, {
      foreignKey: {
        allowNull: false
      }
    });
    Hub.belongsTo(db.Answers, {
      foreignKey: {
        allowNull: false
      }
    });

  };

  return Hub;
};
