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
            cnh: DataTypes.STRING,
            crm: DataTypes.STRING,
            marca: DataTypes.STRING,
            modelo: DataTypes.STRING,
            ano: DataTypes.STRING,
            placa: DataTypes.STRING,
            crmc: DataTypes.STRING,
            users_id: DataTypes.INTEGER,
        }, {
            paranoid: true,
        }
    )

    Driver.associate = (models) => {
      Driver.belongsTo(models.User, {
        foreignKey: 'users_id',
      })
    }

    return Driver;
}