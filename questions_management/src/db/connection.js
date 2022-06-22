
import accessEnv from "#root/helpers/accessEnv";

const DB_URI = accessEnv("DB_URI");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

const mongoDB = "";

export default mongoDB;