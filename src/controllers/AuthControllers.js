import Users from "../models/UsersSchema.js";

// Register User
const registerUser = async (req,res) => {
    console.log("req.body --- >",req.body);
    try {
        const user = new Users(req.body)
        const data = await user.save()
        console.log(data);

        res.json ({
            status : true,
            message : "user created successfully",
            user : data //>>> ---- show data of register user in object form (response in postaman) (e.g. name,id,created at etc )
        })
        
    } catch (error) {
        console.log("error in creating user -->",error);
        
        res.json({
            status : false,
            message : error.message
        })
        
    }
}

// Fetched all data from db
const fetchData = async (req,res) => {
    console.log("req.body --- >",req.body);
    try {
        const user = await Users.find() // find({name:"sana"}) >>-- find secific data

        res.json ({
            status : true,
            message : "fetched data successfully",
            data : user  //>>> ---- show all fetched data in object form response in postaman
        })
        console.log("fetched users -- >> ",user);
        
        
    } catch (error) {
        console.log("error in fetching user -->",error);
        
        res.json({
            status : false,
            message : error.message
        })
        
    }
}

// Fetched single user
const fetchUser = async (req,res) => {
    console.log("req.body --- >",req.body);
    try {
        const { id } = req.params
        const user = await Users.findById(id) 
        
        // agr wo id/user exist nhi krta
        if(user == null){
             res.json ({
            status : false,
            message : "Cannot find User",
        })
        }

        res.json ({
            status : true,
            message : "User fetched successfully",
            data : user  //>>> ---- show data of fetched User in object form (response in postaman) (e.g. name,id,created at etc )
        })
        console.log("fetched user -- >> ",user);
        
        
    } catch (error) {
        console.log("error in fetching user -->",error);
        
        res.json({
            status : false,
            message : error.message
        })
        
    }
}

// Update User
const updateUser = async (req,res) => {
    console.log("req.body --- >",req.body);
    try {
        const { id } = req.params
        console.log("req.body >>-- ",req.body); // jo hum ne updation k lye request kya hy, jo hum postman ki body ma data send krty hyn update k lye
        const user = await Users.findByIdAndUpdate(id, req.body, {new:true}) 

        res.json ({
            status : true,
            message : "User updated successfully",
            updatedData : user  //>>> ---- show updated data in object form (response in postaman)
        })
        console.log("Updated user -- >> ",user);
        
        
    } catch (error) {
        console.log("error in updating user -->",error);
        
        res.json({
            status : false,
            message : error.message
        })
        
    }
}

// delete User
const deleteUser = async (req,res) => {
    console.log("req.body --- >",req.body);
    try {
        const {id} = req.params
        const user = await Users.findByIdAndDelete(id)

        res.json ({
            status : true,
            message : "user deleted successfully",
        })
        console.log("data after delete >>-- ",user); // show data o deleted user

        
    } catch (error) {
        console.log("error in deleting user -->",error);
        
        res.json({
            status : false,
            message : error.message
        })
        
    }
}

// Login User
const loginUser = async (req,res) => {
    console.log("req.body --- >",req.body);
    try {
        const {email,password} = req.body
        
        // email , password dono enter krna zaroori hy login k lye
        if(!email || !password){
             res.json({
            status : false,
            message : "all fields are required"
        })
        }

        const user = await Users.findOne({email:email}) // find({name:"sana"}) >>-- find secific data
        console.log("Data of login user",user);

        // agr email galat dali/ ya jo email di h wo db ma nhi hy to ye response ayega 
        if(user == null){
            res.json({
            status : false,
            message : "Cannot find user"
        })
        }
        if(user.password != password){
             res.json({
            status : false,
            message : "Invalid Credentials"
        })
        }

        res.json ({
            status : true,
            message : "User login successfully",
            data : user  //>>> ---- show data of login user in object form (response in postaman)
        })
        console.log("login data -- >> ",user);
        
        
    } catch (error) {
        console.log("error in login user -->",error);
        
        res.json({
            status : false,
            message : error.message
        })
        
    }
}

export {registerUser,fetchData,fetchUser,updateUser,deleteUser,loginUser}