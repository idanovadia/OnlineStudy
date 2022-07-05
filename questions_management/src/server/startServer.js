import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import accessEnv from "#root/helpers/accessEnv";

import setupRoutes from "./routes";

const dotenv = require("dotenv");
dotenv.config();

const PORT = accessEnv("PORT",7102);

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors({
    origin: (origin, cb) => cb(null,true),
    credentials: true
}));

setupRoutes(app);

app.listen(PORT, "0.0.0.0", () => {
    console.info(`Users service listening on ${PORT}`);
});