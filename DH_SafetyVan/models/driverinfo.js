module.exports = (sequelize, DataTypes) => {
  const driverinfo = sequelize.define(
    "driverinfo", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ajudante: {
      type: DataTypes.STRING,
    },
    qntCriancas: {
      type: DataTypes.INTEGER,
    },
    Idiomas: {
      type: DataTypes.STRING,
    },
    cadeirinha: {
      type: DataTypes.BOOLEAN,
    },
    cadeiraRoda: {
      type: DataTypes.BOOLEAN,
    },
    driver_id:
    {
      type: DataTypes.INTEGER,
    },
  });

  driverinfo.associate = (models) => {
    driverinfo.belongsTo(models.Driver, {
      foreignKey: 'driver_id',
    })
  }


  return driverinfo;
}