import mongoose from "mongoose";


const PeepSchema = new mongoose.Schema({
    peepContent: {
        type: String,
        required: true
    },
    imgURL: {
        type: String,
        required: true
    },
    peepCreated: {
        type: Date,
        default: Date.now
    },
    userOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

export const PeepModel = mongoose.model("peeps", PeepSchema);