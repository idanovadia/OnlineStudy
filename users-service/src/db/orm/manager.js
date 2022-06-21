import { Manager } from "../models/ManagerModels"


export const saveManager = async(manager) => {
  return await Manager.create(manager);
}