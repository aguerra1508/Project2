module.exports = function(sequelize, DataTypes) {
  const Users = sequelize.define("Users", {
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER
    },
    rank: {
      type: DataTypes.INTEGER
    }
  });

  Users.associate = function(db) {
    Users.hasMany(db.Questions, {
      onDelete: "cascade"
    });
    Users.hasMany(db.Hub, {
      onDelete: "cascade"
    });
  };
  return Users;
};