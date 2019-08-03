module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Examplee", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER
  });
  return Example;
};
