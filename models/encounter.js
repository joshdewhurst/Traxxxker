'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class encounter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.encounter.belongsTo(models.user)
      models.encounter.belongsToMany(models.partner, { through: "partners_encounters"})
    }
  }
  encounter.init({
    date: DataTypes.STRING,
    note: DataTypes.STRING,
    partnerId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'encounter',
  });
  return encounter;
};