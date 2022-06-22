import { Student } from "../../db/models/StudentRegistrationModels.js"

export const create = async({student}) => {
    return await Student.create(student);
}