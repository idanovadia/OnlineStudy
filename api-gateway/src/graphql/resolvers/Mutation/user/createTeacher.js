import { User } from "../../../../adapters/user/userModel.js";
import UserService from "../../../../adapters/user/userService.js";

const createTeacherResolver = async(obj,{teacher}) => {
    return await UserService.createTeacher(teacher);
}

export default createUserResolver;