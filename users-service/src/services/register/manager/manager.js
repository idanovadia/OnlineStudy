import { saveManager } from "../../../db/orm/manager"

export const saveAManager = async(manager) => {
    return await saveManager(manager);
} 