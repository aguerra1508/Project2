
const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  const Questions = sequelize.define("Questions", {
    question: {
      type: Sequelize.STRING
    }, 
    date: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue("createdAt")).format("DD/MM/YYYY h:mm:ss");
      }
    },
    updatedAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue("updatedAt")).format("DD/MM/YYYY h:mm:ss");
      }
    }
  });
  
  Questions.associate = function(db) {
    Questions.hasMany(db.UserAnswers, {
      onDelete: "cascade"
    });

    Questions.hasMany(db.Hub, {
      onDelete: "cascade"
    });
  };
<<<<<<< HEAD
  
console.log(Questions);
=======

>>>>>>> eaf52b1bbbb0d3467d717c7e45aa6bc1b1bd6fe1
  return Questions;
};