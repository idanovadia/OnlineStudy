import { Teacher } from "../../db/models/TeacherRegistrationModels.js"

export const saveTeacher = async({teacher}) => {
    return await Teacher(teacher);
}
