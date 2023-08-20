import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    savedPeeps: [{ type: mongoose.Schema.Types.ObjectId, ref: "peeps" }]
});

export const UserModel = mongoose.model("users", userSchema);