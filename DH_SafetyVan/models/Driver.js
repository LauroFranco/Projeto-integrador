module.exports = (sequelize, DataTypes) => {
    const Driver = sequelize.define(
        "Driver",
        {
            id: 
            {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
            },
            cnh: {
              type: DataTypes.STRING,
              unique: true,
            },
            crm: {
              type: DataTypes.STRING,
              unique: true,
            },
            marca: DataTypes.STRING,
            modelo: DataTypes.STRING,
            ano: DataTypes.STRING,
            placa: {
              type: DataTypes.STRING,
              unique: true,
            },
            crmc: {
              type: DataTypes.STRING,
              unique: true,
            },
            users_id: DataTypes.INTEGER,
            sobre: DataTypes.STRING,
        }, {
            paranoid: true,
        }
    )

    Driver.associate = (models) => {
      Driver.belongsTo(models.User, {
        foreignKey: 'users_id',
      });
      Driver.belongsToMany(models.Parent, {
        through: 'parents-drivers',
        foreignKey: 'drivers_id'
      });
      Driver.belongsToMany(models.School, {
        through: 'drivers-schools',
        foreignKey: 'drivers_id'
      })
    }

    return Driver;
}