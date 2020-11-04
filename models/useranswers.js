
module.exports = function (sequelize, DataTypes) {
  // eslint-disable-next-line prefer-const
  let UserAnswers = sequelize.define("UserAnswers", {
    answer: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  });

  UserAnswers.associate = function (db) {
    UserAnswers.belongsTo(db.Questions, {
      foreignKey: {
        allowNull: false
      }
    });
    UserAnswers.belongsTo(db.Users, {
      foreignKey: {
        allowNull: false
      }
    });

    UserAnswers.hasMany(db.Hub, {
      onDelete: "cascade",
    });
  };
  return UserAnswers;
};