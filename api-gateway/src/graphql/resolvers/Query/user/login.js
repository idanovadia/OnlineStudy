import UserService from "../../../../adapters/user/userService.js";

const loginResolver = async ( obj, userLogin) => {
    return await UserService.login(userLogin);
};

export default loginResolver;