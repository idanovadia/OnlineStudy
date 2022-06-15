module.exports.up = (queryInterface,DataTypes) => {
    return queryInterface.createTable("permissions_users",{
        permission_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        user_id: {
            allowNull: false,
            type: DataTypes.UUID
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

module.exports.down = queryInterface => queryInterface.dropTable("permissions_users");