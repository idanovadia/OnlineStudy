import { saveASchool } from "./school/school.js";
import { saveStudent } from "./student/student.js";
import { saveTeacher } from "./teacher/teacher.js";
import { registerUser } from "./user/userRegister.js";


export const registerStudent = async(user) => {
    user && registerUser({user : user.user_data});
    user && saveStudent({student :user.student});
}

export const registerTeacher = async(user) => {
    user && registerUser({user : user.user_data});
    user && saveTeacher({teacher : user.teacher});
}

export const registerSchool = async(school) => {
    school && saveASchool({school : school.school_data});
}





