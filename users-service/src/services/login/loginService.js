import { checkLoginPassword, loginInputValidation, searchUser } from "./loginValidation";
// const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const login = async(user) => {
    console.log("login Service")
    if( await loginInputValidation(user)) {
        const dbUser = await searchUser(user);
        if(await checkLoginPassword(user, dbUser))
        {
            return createToken(dbUser);
        }
    }
    throw new Error("User or password are not correct");
}

const createToken = (user) => {
    console.log("createToken");
    const userData = user.dataValues;
    const accessToken = jwt.sign(
    {
        id: userData.id,
    },
    process.env.JWT_SEC,
    {expiresIn:"3d"}
    );
    return accessToken;
}

export default login;