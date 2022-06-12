module.exports.up = (queryInterface,DataTypes) => {
    return queryInterface.createTable("addresses",{
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        street: {
            allowNull: false,
            type: DataTypes.STRING
        },
        buildingNumber: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        apartmentNumber: {
            allowNull: true,
            type: DataTypes.INTEGER
        },
        country: {
            allowNull: false,
            type: DataTypes.STRING
        },
        city: {
            allowNull: false,
            type: DataTypes.STRING
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

module.exports.down = queryInterface => queryInterface.dropTable("addresses");