module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      name: { 
			type: DataTypes.STRING,
			allownull: false,
		},
      email: { 
			type: DataTypes.STRING,
			allownull: false,
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