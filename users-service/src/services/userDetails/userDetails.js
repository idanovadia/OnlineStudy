import {User} from "../../db/models/UserDetailsModels.js"

export const getUserDetails = async ({userID}) => {
    console.log("getUserDetails");
    const user = await User.findByPk(userID);
    return user.dataValues;
}