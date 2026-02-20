import express from "express"
import {handleSignup} from "../../Controllers/auth/signup.controller.js"

const router = express.Router();


router.get("/signup", handleSignup)

export default router;