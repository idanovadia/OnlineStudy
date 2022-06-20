import { DataTypes, Model } from  "sequelize";
import sequelize from "../connection";

export class School extends Model {}
School.init({
    school_name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    school_address: {
        allowNull: false,
        type: DataTypes.STRING
    },
    manager: {
        allowNull: false,
        type: DataTypes.UUID
    },
},{
    modelName: "school",
    sequelize
})