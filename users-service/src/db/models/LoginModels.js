import { DataTypes, Model } from  "sequelize";
import sequelize from "../connection";

export class User extends Model {}
User.init({
    password:{
        allowNull: false,
        type: DataTypes.CHAR(64)
    },
    username: {
        allowNull: false,
        type: DataTypes.STRING
    }
},{
    modelName: "user",
    sequelize
})