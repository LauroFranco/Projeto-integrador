module.exports = (sequelize, DataTypes) => {
    const School = sequelize.define(
        "School",
        {
            id: 
            {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name:
            {
            type: DataTypes.STRING,
            notNull: false,
            },
            email:
            {
                type: DataTypes.STRING,
                notNull: false,
            },
            phone:
            {
                type: DataTypes.STRING,
                notNull: false,
            },
            resp: DataTypes.STRING,
            cep:
            {
                type: DataTypes.STRING,
                allowNull: false
            },
            street: DataTypes.STRING,
            complemento: DataTypes.STRING,
            district: DataTypes.STRING,
            city: DataTypes.STRING,
            uf: DataTypes.STRING,
            }, {
                paranoid: true,
            }
        )

        School.associate = (models) => {
            School.hasMany(models.Kid, {
                foreignKey: 'schools_id'
            }),
            School.belongsToMany(models.Driver, {
                through: 'drivers-schools',
                foreignKey: 'schools_id'
            })
        }
    
    return School;
}