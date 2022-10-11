module.exports = (sequelize, DataTypes) => {
    const Cars = sequelize.define('Cars', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
          type: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        price: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        image: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        size: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        }
    }, {
        tableName: 'cars'
    });

    return Cars;
}