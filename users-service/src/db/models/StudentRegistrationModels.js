import { DataTypes, Model } from  "sequelize";
import sequelize from "../connection";

export class Student extends Model {}
Student.init({
    schoolID: {
        allowNull: false,
        type: DataTypes.UUID
    },
},{
    modelName: "student",
    sequelize
})