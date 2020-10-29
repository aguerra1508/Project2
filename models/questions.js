module.exports = function (sequelize, DataTypes) {
   var Questions = sequelize.define("question", {
      question: {
         type: DataTypes.STRING,
         allowNull: false,
      }
   });

   /*Questions.associate = function (db) {
      Questions.belongsTo(db.User, {
         foreignKey: {
            allowNull: false
         }
      });
   }*/
   return Questions;
}