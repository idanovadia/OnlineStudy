// import { User } from "../db/models/RegistrationModels";
// import { RABBITMQ } from "../helpers/rabbitMQ.js";
import login from "../services/login/loginService.js";
import { registerStudent, registerTeacher } from "../services/register/register.js"
import { getUserDetails } from "../services/userDetails/userDetails.js";

// const rabbitMQ = new RABBITMQ();

const setupRoutes = app => {

    const userTypeRegistrationMap = {
        "student" : registerStudent,
        "teacher" : registerTeacher,
    }

    app.post("/register/student", async (req,res,next) => {
        console.log("route register");
        console.log(req.body);
        const user = req.body.user;
        try {
            await userTypeRegistrationMap[user.type](user);
            return res.json("User successfully registered").status(201);
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