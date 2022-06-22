import { DataTypes, Model } from  "sequelize";
import sequelize from "../connection";

export class Teacher extends Model {}
Teacher.init({
    schoolID: {
        allowNull: false,
        type: DataTypes.UUID
    },
},{
    modelName: "teacher",
    sequelize
})