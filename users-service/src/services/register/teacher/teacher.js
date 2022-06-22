import { create } from "../../../db/orm/teachers";

export const saveTeacher = async({teacher}) => {
    return await create({teacher});
}