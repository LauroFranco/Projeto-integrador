module.exports = (sequelize, DataTypes) => {
    const Parent = sequelize.define(
        "Parent",
        {
            id: 
            {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
            },
            users_id:DataTypes.INTEGER,          
            }, {
                paranoid: true,
            }
        )
    
        Parent.associate = (models) => {
            Parent.belongsTo(models.User, {
                foreignKey: 'users_id',
            }),
            Parent.belongsToMany(models.Driver, {
                through: 'parents-drivers',
                foreignKey: 'parents_id'
            }),
            Parent.hasMany(models.Kid, {
                foreignKey: 'parents_id'
            })
        }

    return Parent;
}