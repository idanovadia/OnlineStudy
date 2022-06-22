import { Address } from "../models/AddressModels.js"


export const saveAddress = async(address) => {
  console.log(address);
  const response = await Address.create(address);
  console.log(response);
  return response;
}

export const findOneAddress = async (conditions) => {
  try {
    const address = await Address.findOne(conditions);
    return !!address;
  } catch (err) {
    console.log(err);
  }
};
