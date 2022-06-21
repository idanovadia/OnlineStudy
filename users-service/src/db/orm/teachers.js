import { Teacher } from "../../db/models/TeacherRegistrationModels.js"

export const create = async({teacher}) => {
    return await Teacher(teacher);
}
