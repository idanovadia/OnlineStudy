import UserService from "../../../../adapters/user/userService.js";

const createStudentResolver = async(obj,{student}) => {
    return await UserService.createStudent(student);
}

export default createUserResolver;