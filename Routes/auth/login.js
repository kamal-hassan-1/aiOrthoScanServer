import express from "express";
import { handleLogin } from "../../Controllers/auth/login.controller.js";

const router=express.router();

router.post("/login",handleLogin);

export default router;