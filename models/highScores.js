module.exports = function(sequelize, DataTypes) {
  const HighScore = sequelize.define("HighScore", {
    rank: {
      type: DataTypes.INTEGER
    }
            

  });
  return (HighScore);
};