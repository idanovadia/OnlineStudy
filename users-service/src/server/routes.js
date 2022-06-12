// import { User } from "../db/models/RegistrationModels";
// import { RABBITMQ } from "../helpers/rabbitMQ.js";
import login from "../services/login/loginService.js";
import {registerManager, registerUser} from "../services/register/register.js"
import { getUserDetails } from "../services/userDetails/userDetails.js";

// const rabbitMQ = new RABBITMQ();

const setupRoutes = app => {

    app.post("/register", async (req,res,next) => {
        console.log("route register");
        console.log(req.body);
        try {
            await registerUser(req.body.user);
            return res.json("User successfully registered").status(201);
        }catch(err){
            console.log("error register route : " + err);
            return res.json(`${err}`).status(500);
        }
    });

    app.post("/manager/register", async (req,res,next) => {
        console.log("route register");
        console.log(req.body);
        const manager = req.body.manager;
        try {
            await registerManager(manager);
            return res.json("Manager successfully registered").status(201);
        }catch(err){
            console.log("error register route : " + err);
            return res.json(`${err}`).status(500);
        }
    });

    app.post("/login", async (req,res,next) => {
        console.log("route login");
        console.log(req.body);
        const user = req.body.userLogin;
        try {
            const token = await login(user);
            return res.json({token}).status(200);
        }catch(err){
            console.log("error login route : " + err);
            return res.json(`${err}`).status(500);
        }
    });

    app.get("/myDetails/:userId", async (req,res,next) => {
        console.log("route myDetails");
        try {
            const UserDetails = await getUserDetails({userID: req.params.userId})
            return res.json(UserDetails).status(200);
        }catch(err){
            console.log("error myDetails route : " + err);
            return res.json(`${err}`).status(500);
        }
    })
}

export default setupRoutes;