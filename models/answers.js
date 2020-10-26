module.exports = function (sequelize, DataTypes) {
        var Answers = sequelize.define("Answers", {
                answer: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        len: [1]
                    }
                })

            return Answers;
        }