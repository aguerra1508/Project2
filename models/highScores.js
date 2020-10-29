module.exports = function(sequelize, DataTypes) {
    var HighScores = sequelize.define("High Score", {
        rank: {
            type: DataTypes.INTEGER
        }
    })
    return HighScores
}