import { DataTypes, Model } from  "sequelize";
import sequelize from "../connection";

export class User extends Model {}
User.init({
    firstName: {
        allowNull: false,
        type: DataTypes.STRING
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING
    },
    phone: {
        allowNull: false,
        type: DataTypes.STRING
    },
    addressID: {
        allowNull: false,
        type: DataTypes.UUID
    },
    password:{
        allowNull: false,
        type: DataTypes.CHAR(64)
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING
    },
    username: {
        allowNull: false,
        type: DataTypes.STRING
    },
    groupID: {
        allowNull: false,
        type: DataTypes.UUID
    }
},{
    modelName: "user",
    sequelize
})