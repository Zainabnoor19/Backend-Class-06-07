import express from "express"
import { registerUser,fetchData,fetchUser, updateUser, deleteUser, loginUser } from "../controllers/AuthControllers.js"

const authroute = express.Router()

authroute.post('/user',registerUser)
authroute.get('/getdata',fetchData)
authroute.get('/user/:id',fetchUser)
authroute.put('/user/:id',updateUser)
authroute.delete('/user/:id',deleteUser)
authroute.post('/login',loginUser)

export default authroute