module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER
    }
  });

  User.associate = function(db) {
    User.hasMany(db.Answers, {
      onDelete: "cascade"
    });
  };


  return User;
};