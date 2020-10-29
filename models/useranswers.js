module.exports = function (sequelize, DataTypes) {
   var UserAnswers = sequelize.define("userAnswers", {
      question: {
         type: DataTypes.STRING,
         allowNull: false,
      }
   });

   /*userAnswers.associate = function (db) {
      userAnswers.belongsTo(models.Questions, {
         foreignKey: {
            allowNull: false
         }
      });
   }*/
   return UserAnswers;
}