import { findOneSchool, saveSchool } from "../../../db/orm/school.js";
import { createError } from "../../../global/errors.js";
import { addUUID } from "../../../global/generate.js";

export const saveASchool = async ({ school }) => {
  if (!!(await findOneSchool({ where: { name: school.name } }))) {
    school = await addUUID(school);
    return await saveSchool(school);
  }
  throw createError({
    status_code: 409,
    massage: "School is existing already",
  });
};
