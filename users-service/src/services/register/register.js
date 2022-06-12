import generateUUID from "../../helpers/generateUUID.js";
import { User } from "#root/db/models/RegistrationModels";
import { Address } from "../../db/models/AddressModels.js";
import {validateUserRegister} from "./registerValidation.js";
import { createAddress } from "../address/addAddress.js";
import { createGroup } from "../group/addGroup.js";

export const registerUser = async(user) => {
    user["id"] = generateUUID();
    await register(user);
}

export const registerManager = async(manager) => {
    var { group, user  } = manager;
    group["id"] = generateUUID();
    user["id"] = group["managerID"] = generateUUID();
    await createGroup(group);
    await register({...user, groupID: group.id});
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

const saveUser = async(user) => {
    await save(user);
    return user.id;
}

const save = async(user) => {
    await User.create(user);
}

