import UserService from "../../../../adapters/user/userService.js";

const createTeacherResolver = async(obj,{teacher}) => {
    return await UserService.createTeacher(teacher);
}

export default createTeacherResolver;