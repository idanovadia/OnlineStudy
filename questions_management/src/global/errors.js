export const createError = ({status_code,massage}) => {
    const error = new Error(massage);
    error.code = status_code;
    return error;
}