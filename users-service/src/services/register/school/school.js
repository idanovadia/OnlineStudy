import { saveSchool } from "../../../db/orm/school.js";
import { createError } from "../../../global/erros.js";

export const saveASchool = async ({ school }) => {
  if (isSchoolExist(school.id)) {
    return await saveSchool(school);
  }
  throw createError({
    status_code: 409,
    massage: "School is existing already",
  });
};
