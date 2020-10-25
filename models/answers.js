module.exports = function(sequelize, DataTypes) {
    var Answers = sequelize.define("Answers", {
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    return Answers;
}