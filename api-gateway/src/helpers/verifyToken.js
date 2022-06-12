import jwt from "jsonwebtoken";
import { ApolloError } from 'apollo-server-errors';


const verifyToken = (authHeader) => {
    if(authHeader){
        const token = authHeader.split(" ")[1];
        console.log(token);
        return jwt.verify(token,process.env.JWT_SEC,(err,id) => {
            if(err) throw new Error("token not verified");
            return id;
        });
    }else{
        throw new Error("token not valid");
    }
}

const handleToken = (req) => {
    if(!req.headers || !req.headers.authorization) return { userID: null }
    try{
        const token = req.headers.authorization;
        return verifyToken(token);
    } catch(e){
      throw new ApolloError(e, 500);
    }
  }

export default handleToken;

// export const verifyTokenAndAuthorization = (req, res , next) => {
//     verifyToken(req, res, () => {
//         if(req.user.id === req.params.id || req.user.isAdmin) next();
//         else return res.status(403).json("You are not allowed");
//     });
// };

// export const verifyTokenAndAdmin = (req, res , next) => {
//     verifyToken(req, res, () => {
//         if(req.user.isAdmin) next();
//         else return res.status(403).json("You are not allowed");
//     });
// };