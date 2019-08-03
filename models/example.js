module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER
  });
  return Example;
};
