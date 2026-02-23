import express from "express"
import {handleSignup} from "../../Controllers/auth/signup.controller.js"
import User from "../../Models/user.js"

const router = express.Router();

router.post("/signup", handleSignup)
// router.get("/signup/get",async (req,res)=>{
//     res.status(201).json(await User.find());
// })

export default router;