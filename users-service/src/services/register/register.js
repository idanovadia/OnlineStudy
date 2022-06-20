import generateUUID from "../../helpers/generateUUID.js";
import { User } from "#root/db/models/UserRegistrationModels";
import { Student } from "../../db/models/StudentRegistrationModels.js"
import { Teacher } from "../../db/models/TeacherRegistrationModels.js"
import { Address } from "../../db/models/AddressModels.js";
import {validateUserRegister} from "./registerValidation.js";
import { createAddress } from "../address/addAddress.js";
import { createGroup } from "../group/addGroup.js";

export const registerStudent = async(user) => {
    user && registerUser({user : user.user_data});
    user && saveStudent({student :user.student});
}

export const registerTeacher = async(user) => {
    user && registerUser({user : user.user_data});
    user && saveTeacher({teacher : user.teacher});
}


export const registerUser = async({user}) => {
    user["id"] = generateUUID();
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

const saveStudent = async({student}) => {
    await Student(student);
}

const saveTeacher = async({teacher}) => {
    await Teacher(teacher);
}

const saveUser = async(user) => {
    await User.create(user);
}

