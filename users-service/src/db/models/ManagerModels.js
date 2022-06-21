import { DataTypes, Model } from  "sequelize";
import sequelize from "../connection";

export class Manager extends Model {}
Manager.init({
},{
    modelName: "manager",
    sequelize
})