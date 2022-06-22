import { create } from "../../../db/orm/students"

export const saveStudent = async({student}) => {
    return await create({student});
}