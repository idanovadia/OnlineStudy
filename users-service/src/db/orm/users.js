import { User } from "#root/db/models/UserRegistrationModels";

export const saveUser = async(user) => {
    return await User.create(user);
}

export const findOneUser = async(conditions) => {
    return User.findOne(conditions).then(function(user) {
        console.log(user);
        return user;
    }).catch(function(err){
        console.log(err);
    })
}