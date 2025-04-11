import mongoose from "mongoose";
//import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    cartData: {
        type: Object,
        default: [],
    },
    wishList: {
        type: Object,
        default: [],
    },

},{minimize: false})

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;