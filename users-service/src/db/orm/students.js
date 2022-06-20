import { Student } from "../../db/models/StudentRegistrationModels.js"

export const saveStudent = async({student}) => {
    return await Student(student);
}