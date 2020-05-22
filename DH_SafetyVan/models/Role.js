module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define(
        "Role",
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
              allowNull: false,
            },
        }, {
            paranoid: true,
        }
    );

    Role.associate = (models) => {
        Role.hasMany(models.User, {
            foreignKey: "roles_id",
        });
    };

    return Role;
}