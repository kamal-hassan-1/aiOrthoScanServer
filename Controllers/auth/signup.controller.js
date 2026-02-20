import {signupService} from "../../Services/auth/signup.service.js"

export const handleSignup= async (req, res)=> {
    console.log("this is signup ");
    try{
        const user= await signupService(req.body);
        
        res.status(201).json({
            success: true,
            data: user
        })

    }catch(error){
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
    
};

