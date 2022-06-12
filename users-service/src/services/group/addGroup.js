import { Group } from "../../db/models/GroupModels.js";
import { createAddress } from "../address/addAddress.js";

export const createGroup = async (group) => {
    console.log("createGroup");
    const {address, ...myGroup} = group;
    const addressID = await createAddress(address);
    await saveGroup({...myGroup, addressID: addressID});
    return group.id;
};

const saveGroup = async(group) => {
    await Group.create(group);
}