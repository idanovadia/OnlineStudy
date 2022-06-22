import { v4 as uuidv4 } from 'uuid';

const generateUUID = () => uuidv4();

export const addUUID = (db_object) => {
    return {...db_object,id: generateUUID()};
}