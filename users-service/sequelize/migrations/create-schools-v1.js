module.exports.up = (queryInterface,DataTypes) => {
    return queryInterface.createTable("schools",{
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        school_name: {
            allowNull: false,
            type: DataTypes.String
        },
        school_address: {
            allowNull: false,
            type: DataTypes.String
        },
        manager: {
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

module.exports.down = queryInterface => queryInterface.dropTable("schools");