module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Tackle", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER
  });
  return Example;
};
