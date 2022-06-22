import { findOneSchool, saveSchool } from "../../../db/orm/school.js";
import { createError } from "../../../global/errors.js";
import { addUUID } from "../../../global/generate.js";

export const saveASchool = async ({ school }) => {
  console.log("saveASchool");
  console.log(`school ${school}`);
  const name = school.name;
  if (!await findOneSchool({ where: { name: name } })) {
    console.log(`school ${school}`);
    school = await addUUID(school);
    return await saveSchool(school);
  }
  throw createError({
    status_code: 409,
    massage: "School is existing already",
  });
};
