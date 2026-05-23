import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim:true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase:true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default:"user",
    }
}, {
    timestamps:true,
})

export default mongoose.model("Auth", authSchema);