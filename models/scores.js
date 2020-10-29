module.exports = function(sequelize, DataTypes) {
  const Score = sequelize.define("Score", {
    rank: {
      type: DataTypes.INTEGER
    }
            

  });
  return Score;
};