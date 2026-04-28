import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
        minlength : [4,"minimum 4 required"],
        maxLength : [12,"Maximum 12 letters"]
    },
    email:{
        type: String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true,
        // minlength: [6,"minimum 6 characters required"],
        match: [
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
            "Password must contain uppercase, lowercase, number and special character"
        ]
        // (?= ) >> Ye positive lookahead hota hai , Matlab: “check karo ke aage ye condition exist karti hai ya nahi”.
        // .* >> (.) = koi bhi character ho sakta hai , (*) → us character ko 0 ya multiple times allow karta hai --- Matlab: password me kahin bhi search karo.
        // [a-z] >> Ye range batata hai
        // "Check karo ke password me kahin bhi at least ek lowercase letter mujood ho."
        // \d >> digit (0–9)
        // {8,} >> minimum 8 characters hone chahiye
        // $ >> Ye batata hai ke string yahin end honi chahiye , Matlab pura password regex ke rules follow kare.
    }
},
{
    timestamps : true
}
)

const Users = mongoose.model('user',UserSchema)
export default Users