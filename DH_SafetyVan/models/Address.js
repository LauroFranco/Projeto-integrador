module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define(
        "Address",
        {
            id: 
            {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
            },
            cep: 
            {
              type: DataTypes.STRING,
              allowNull: false,
            },
            street: DataTypes.STRING,
            complemento: DataTypes.STRING,
            district: DataTypes.STRING,
            city: DataTypes.STRING,
            uf: DataTypes.STRING,
            users_id:DataTypes.INTEGER,          
            }, {
                paranoid: true,
            }
        )
    
        Address.associate = (models) => {
            Address.belongsTo(models.User, {
                foreignKey: 'users_id',
            })
        }

    return Address;
}