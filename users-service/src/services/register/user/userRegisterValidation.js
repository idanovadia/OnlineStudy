import { User } from "../../../db/models/UserRegistrationModels.js";
import { findOneAddress } from "../../../db/orm/address.js";
import { findOneUser } from "../../../db/orm/users.js";
import { emailRegex, passwordRegex } from "../../../global/regex.js";

export const validateUserRegister = async (user) => {
    console.log("validateUserRegister");
    if( user &&
        user.firstName &&
        user.lastName &&
        checkPhone(user.phone) &&
        isPasswordValid(user.password) &&
        validateEmail(user.email) &&
        await dbFunctions(
            {username: user.username}
        )
    ) return true;
    return false;
}

const dbFunctions = async ({username}) => {
    return await Promise.all([
        isUserNameUnique(username)
    ]).then((values) => {
        console.log(values);
        return values.reduce((res, cur) => res && cur, true);
    });
}

const isUserNameUnique = async(username) => {
    console.log("isUserNameUnique: " + JSON.stringify(username));
    return !(await findOneUser({ where: { username: username}}));
}

const checkPhone  = (phone) => {
    if(parseInt(phone)) return true;
    throw new Error("Phone format is not valid");
}

const isPasswordValid = (password) => {
    const regex = new RegExp(passwordRegex);
    if( regex.test(password) ) return true;
    throw new Error("Password is not valid");
}

const isAddressIdExist = (addressID) => {
    return await findOneAddress({ where: { id: addressID } });
}

const validateEmail = (email) => {
    if(String(email).toLowerCase().match(emailRegex)) return true;
    throw new Error("Email format is not valid");
};