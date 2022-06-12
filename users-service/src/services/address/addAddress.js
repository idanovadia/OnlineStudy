import { Address } from "../../db/models/AddressModels.js";
import generateUUID from "../../helpers/generateUUID.js";


export const createAddress = async(address) => {
    address["id"] = generateUUID();
    await save(address);
    return address.id;
}

const save = async(address) => {
    await Address.create(address);
}