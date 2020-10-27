module.exports = function(sequelize, DataTypes) {
  const Scores = sequelize.define("Scores", {
    rank: {
      type: DataTypes.INTEGER,
    }
  });

  return Scores;
};