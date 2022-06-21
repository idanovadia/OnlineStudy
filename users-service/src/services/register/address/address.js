import { saveAddress } from "../../../db/orm/address.js";
import { createError } from "../../../global/errors.js";
import { addUUID } from "../../../global/generate.js"

export const saveAnAddress = async ({ address }) => {
  try {
    console.log(address);
    address = addUUID(address);
    return await saveAddress(address);
  } catch (err) {
    console.log(err);
    throw createError({
      status_code: 500,
      massage: "address is existing already",
    });
  }
};
