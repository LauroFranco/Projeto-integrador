module.exports = (sequelize, DataTypes) => {
    const Kid = sequelize.define(
        "Kid",
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
            birthdate: DataTypes.DATE,
            avatar: DataTypes.STRING,
            parents_id: DataTypes.INTEGER,
            schools_id: DataTypes.INTEGER,
        }, {
            paranoid: true,
        }
    )

    Kid.associate = (models) => {
      Kid.belongsTo(models.School, {
        foreignKey: 'schools_id',
      });
      Kid.belongsTo(models.Parent, {
        foreignKey: 'parents_id'
      })
    }

    return Kid;
}