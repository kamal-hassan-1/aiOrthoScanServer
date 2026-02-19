import express from "express"
import authroutes from "./auth"

const router=express.Router();

app.use("/auth",authroutes);

module.exports=router;