import { DataTypes, Model } from  "sequelize";
import sequelize from "../connection";

export class Group extends Model {}
Group.init({
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    addressID: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    },
    managerID: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    }
},{
    modelName: "group",
    sequelize
})