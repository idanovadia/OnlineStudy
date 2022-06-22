import { saveAManager } from "./manager/manager.js";
import { saveASchool } from "./school/school.js";
import { School } from "./school/schoolModel.js";
import { saveStudent } from "./student/student.js";
import { saveTeacher } from "./teacher/teacher.js";
import { registerUser } from "./user/userRegister.js";

export const registerStudent = async (user) => {
  user && registerUser({ user: user.user_data });
  user && saveStudent({ student: user.student });
};

export const registerTeacher = async (user) => {
  user && (await registerUser({ user: user.user_data }));
  user && (await saveTeacher({ teacher: user.teacher }));
};

export const RegisterManager = async (manager) => {
  console.log("RegisterManager");
  const { user } = manager;
  console.log(user);
  const savedUser = user && (await registerUser({ user: user }));
  console.log(savedUser.dataValues.id);
  savedUser?.dataValues?.id &&
    (await saveAManager({ id: savedUser.dataValues.id }));
  return savedUser.dataValues;
};

export const registerSchool = async (school) => {
  console.log("registerSchool");
  if (school && school.address) {
    const manager = await RegisterManager(school.manager);
    const school_data = new School(school.name, manager.addressID, manager.id);
    school && (await saveASchool({ school: school_data }));
  }
};
