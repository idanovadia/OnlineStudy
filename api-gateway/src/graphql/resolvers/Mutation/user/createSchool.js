import UserService from "../../../../adapters/user/userService.js";

const createSchoolResolver = async(obj,{school}) => {
    return await UserService.createSchool(school);
}

export default createSchoolResolver;