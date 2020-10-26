module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
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
      }
    });

    User.associate = function(models) {
       User.hasMany(db.Questions, {
          onDelete: "cascade"
       });
    }


    return User;
  };