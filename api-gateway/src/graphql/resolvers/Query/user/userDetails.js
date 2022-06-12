import UserService from "../../../../adapters/user/userService.js";
import handleToken from "../../../../helpers/verifyToken.js";

const userResolver = async ( parent, args, context, info) => {
    const id = handleToken(context.req);
    if(!id) throw new Error("No user provided");
    return await UserService.userDetails({userId :id.id});
};

export default userResolver;