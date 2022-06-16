module.exports.up = (queryInterface,DataTypes) => {
    return queryInterface.createTable("students_groups",{
        groupID: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        studentID: {
            allowNull: false,
            primaryKey: true,
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

module.exports.down = queryInterface => queryInterface.dropTable("students_groups");