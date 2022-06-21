import { isExist } from "../../../db/orm/school.js"

export const isSchoolExist = (schoolID) => {
    return isExist(schoolID)
}