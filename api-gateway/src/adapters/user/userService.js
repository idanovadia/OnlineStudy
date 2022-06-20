import got from "got";
import { apiPostCall } from "../../helpers/APIs/apisCalls";

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
                url : `${USER_SERVICE_URI}/student`,
                body: {json: {user}}
            }
        );
    }

    static createTeacher = async(teacher) => {
        console.log("call createUser");
        return await apiPostCall(
            {
                url : `${USER_SERVICE_URI}/teacher`,
                body: {json: {teacher}}
            }
        );
    }

    static createSchool = async(school) => {
        console.log("call createUser");
        return apiPostCall(
            {
                url : `${USER_SERVICE_URI}/school`,
                body: {json: {school}}
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