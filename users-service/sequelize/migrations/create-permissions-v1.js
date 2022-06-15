module.exports.up = (queryInterface,DataTypes) => {
    return queryInterface.createTable("permissions",{
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        permission_name: {
            allowNull: false,
            type: DataTypes.String
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        deletedAt: {
            allowNull: true,
            type: DataTypes.DATE
        },
    },{charset:"utf8"})
}

module.exports.down = queryInterface => queryInterface.dropTable("permissions");