import { Address } from "../../db/models/AddressModels.js";
import { addUUID } from "../../global/generate.js";


export const createAddress = async(address) => {
    address = addUUID(address);
    await save(address);
    return address.id;
}

const save = async(address) => {
    await Address.create(address);
}