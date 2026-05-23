import mongoose, { model } from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        unique: true,
        required:true
    },
    address: {
        type: String,
        required:true
    }
},
    {
        timestaps:true
    }
)

export default mongoose.model("User", userSchema);
