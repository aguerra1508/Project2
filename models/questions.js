const post = require("../../../utsa-san-fsf-pt-07-2020-u-c/14-Full-Stack/01-Activities/12-Blog-CRUD/Unsolved/models/post");

module.exports = function(sequelize, DataTypes) {
    var Questions = sequelize.define("questions", {
        question: {
           type: DataTypes.STRING,
           allowNull: false,
        }
    });

    Questions.associate = function(db) {
       Questions.belongsTo(models.User, {
          foreignKey: {
             allowNull: false
          }
       });
    }
    return Questions;
}