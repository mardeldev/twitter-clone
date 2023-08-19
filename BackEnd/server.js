import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { getPeepRoute } from "./routes/getPeepData.route.js";
import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

const DATABASE = async () => { console.log(`Connecting to DB @ ${process.env.DB_URI}`); }

const databaseConnection = async () => {
    console.log(`Connecting to database....`);
    await mongoose.connect(`${process.env.DB_URI}`);
    console.log(`Connected to database.`);
}

databaseConnection().catch(err => console.log(err))

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
})