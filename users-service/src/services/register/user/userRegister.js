import { saveUser } from "../../../db/orm/users.js";
import { validateUserRegister } from "./userRegisterValidation.js";
import { addUUID } from "../../../global/generate.js"
import { saveAnAddress } from "../address/address.js";

export const registerUser = async({user}) => {
    console.log("registerUser");
    user = addUUID(user);
    console.log(user);
    return await register(user);
}

const register = async (user) => {
    console.log("register");
    const validation = await validateUserRegister(user);
    if(!validation) throw new Error("validate User Register - Error");
    return await saveUserInfo(user);
};

const saveUserInfo = async(user) => {
    console.log("saveUserInfo");
    const { address, ...myUser } = user;
    console.log(address);
    const addressID = (await saveAnAddress({address})).dataValues.id;
    return await saveUser( {...myUser, addressID : addressID });
}

