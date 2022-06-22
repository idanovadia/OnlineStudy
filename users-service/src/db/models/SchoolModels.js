import { DataTypes, Model } from  "sequelize";
import sequelize from "../connection";

export class School extends Model {}
School.init({
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    address_id: {
        allowNull: false,
        type: DataTypes.UUID
    },
    manager_id: {
        allowNull: false,
        type: DataTypes.UUID
    },
},{
    modelName: "school",
    sequelize
})