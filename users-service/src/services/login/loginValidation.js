
import { User } from "../../db/models/LoginModels.js";

export const loginInputValidation = (user) => {
    console.log("loginInputValidation");
    return user.username && user.password;
}

export const checkLoginPassword = async(user,searchedUser) => {
    console.log("checkLoginPassword");
    if(user == null) throw new Error("User or password are not correct");
    else return user.password === searchedUser.dataValues.password;
}

export const searchUser = async(user) => {
    console.log("searchUser");
    return await User.findOne({ where: { username: user.username } });
}