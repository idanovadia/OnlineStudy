import { User } from "../../db/models/UserRegistrationModels.js";
import { Group } from "../../db/models/GroupModels.js";


const passwordRegex = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$";
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateUserRegister = async (user) => {
    console.log("validateUserRegister");
    if(user.firstName &&
        user.lastName &&
        checkPhone(user.phone) &&
        isPasswordValid(user.password) &&
        validateEmail(user.email) &&
        await dbFunctions(
            {username: user.username,groupID: user.groupID}
        )
    ) return true;
    return false;
}

const dbFunctions = async ({username,groupID}) => {
    return await Promise.all([
        isUserNameUnique(username),
        isGroupIDValid(groupID)
        // isAddressIdExist(addressID)
    ]).then((values) => {
        console.log(values);
        return values.reduce((res, cur) => res && cur, true);
    });
}

const isGroupIDValid = (groupID) => {
    return Group.findOne( { where: { id: groupID } } ).then(function(group) {
        return !!group;
      }).catch(function(err){
        console.log(err);
      });
}

const isUserNameUnique = (username) => {
    console.log("isUserNameUnique: " + JSON.stringify(username));
        return User.findOne({ where: { username: username}}).then(function(user) {
            console.log(!user);
            return !user;
        }).catch(function(err){
            console.log(err);
        });;
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
    return Address.findOne( { where: { id: addressID } } ).then(function(address) {
        return !!address;
      }).catch(function(err){
        console.log(err);
      });
}

const validateEmail = (email) => {
    if(String(email).toLowerCase().match(emailRegex)) return true;
    throw new Error("Email format is not valid");
};