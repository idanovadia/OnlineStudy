import got from "got";
import { apiPostCall } from "../../helpers/APIs/apisCalls.js";

// import { RABBITMQ } from "../../helpers/rabbitMQ.js";

const USER_SERVICE_URI = "http://users-service:7101";

// const rabbitMQ = new RABBITMQ();
export default class UserService {

    // static createUserQueue = async(user) => {
    //     rabbitMQ.sendToQueue(user);
    // }

    static createStudent = async(user) => {
        console.log("call createUser");
        apiPostCall(
            {
                url : `${USER_SERVICE_URI}/register`,
                body: {json: {user}}
            }
        );
    }

    static createTeacher = async(teacher) => {
        console.log("call createTeacher");
        return await apiPostCall(
            {
                url : `${USER_SERVICE_URI}/register/teacher`,
                body: {json: {teacher}}
            }
        );
    }

    static createSchool = async(school) => {
        console.log("call createSchool");
        return apiPostCall(
            {
                url : `${USER_SERVICE_URI}/register/school`,
                body: school
            }
        );
    }

    static async login(userLogin) {
        console.log("UserLogin");
        return await apiPostCall(
            {
                url : `${USER_SERVICE_URI}/login`,
                body: {json: {userLogin}}
            }
        );
    }

    static async userDetails({userId}) {
        console.log("userDetails");
        return await apiGetCall(
            {
                url : `${USER_SERVICE_URI}/myDetails/${userId}`,
                body: {json: {userLogin}}
            }
        );
    }
}