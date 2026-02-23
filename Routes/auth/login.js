import express from "express";
import { handleLogin } from "../../Controllers/auth/login.controller.js";

const router=express.Router();

router.post("/login",handleLogin);

export default router;