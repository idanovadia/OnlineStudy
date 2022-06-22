import { School } from "../models/SchoolModels.js"

export const isExistByID = async(schoolID) => {
    return School.findByPk(schoolID).then(function(school) {
        console.log(school);
        return school;
    }).catch(function(err){
        console.log(err);
    })
}

export const saveSchool = async(school) => {
    await School.create(school);
}

export const findOneSchool = async(conditions) => {
    console.log("findOneSchool");
    console.log(conditions);
    return School.findOne(conditions).then(function(school_result) {
        console.log(`school ${school_result}`);
        return school_result;
    }).catch(function(err){
        console.log(err);
    })
}