import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "dotenv";

config({ path: `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}` });


import { userRouter } from './routes/users.route.js';
import { peepRouter } from "./routes/peeps.route.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/", peepRouter);

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