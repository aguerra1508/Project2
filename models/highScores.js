module.exports = function(sequelize, DataTypes) {
    var highScore = sequelize.define("High Scores", {
        rank: {
            type: DataTypes.INTEGER
        }
            

    })
}