export const isAddressIdExist = async(addressID) => {
    return await findOneAddress({ where: { id: addressID } });
}