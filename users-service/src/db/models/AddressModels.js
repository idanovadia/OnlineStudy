import { DataTypes, Model } from  "sequelize";
import sequelize from "../connection";

export class Address extends Model {}
Address.init({
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
},{
    modelName: "address",
    sequelize
})