module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
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
            email:
            {
              type: DataTypes.STRING,
              allowNull: false,
            },
            password:
            {
              type: DataTypes.STRING,
              allowNull: false,
            },
            cpf: DataTypes.STRING,
            birthdate: DataTypes.DATE,
            phone: DataTypes.STRING,
            roles_id: DataTypes.INTEGER,
        }, {
            paranoid: true,
        }
    )

    return User;
}