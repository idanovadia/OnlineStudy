module.exports.up = (queryInterface,DataTypes) => {
    return queryInterface.createTable("groups",{
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        group_name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        teacher: {
            allowNull: false,
            type: DataTypes.UUID
        },
        schoolID: {
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

module.exports.down = queryInterface => queryInterface.dropTable("groups");