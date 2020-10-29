module.exports = function(sequelize, DataTypes) {
  const Hubs = sequelize.define("Hubs", {
    answered: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  });

  Hubs.assocaite = function(db) {
    Hubs.belongsTo(db.Users, {
      foreignKey: {
        allowNull: false
      }
    });
    Hubs.belongsTo(db.Questions, {
      foreignKey: {
        allowNull: false
      }
    });
    Hubs.belongsTo(db.UserAnswers, {
      foreignKey: {
        allowNull: false
      }
    });
    Hubs.belongsTo(db.Answers, {
      foreignKey: {
        allowNull: false
      }
    });

    return Hubs;
  };
};