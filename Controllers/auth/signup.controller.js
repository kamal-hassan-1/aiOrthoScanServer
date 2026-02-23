import {signupService} from "../../Services/auth/signup.service.js"
import User from "../../Models/user.js"

export const handleSignup= async (req, res)=> {
    // console.log("this is signup ");
    try{
        console.log(req.body);
        
        const user= await signupService(req.body);
        console.log(user)
        res.status(201).json({
            success: true,
            data: user
        })

    }catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
    
};
