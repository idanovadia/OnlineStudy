import { saveUser } from "../../../db/orm/users.js";
import { validateUserRegister } from "./userRegisterValidation.js";

export const registerUser = async({user}) => {
    user = addUUID(user);
    await register(user);
}

const register = async (user) => {
    console.log("service register");
    const validation = await validateUserRegister(user);
    if(!validation) throw new Error("validate User Register - Error");
    await saveUserInfo(user);
};

const saveUserInfo = async(user) => {
    const { address, ...myUser } = user;
    const addressID = await createAddress(address);
    await saveUser( {...myUser, addressID : addressID });
}

