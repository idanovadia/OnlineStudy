
export const addUUID = (obj) => {
    return {...obj,id:generateUUID()};
}