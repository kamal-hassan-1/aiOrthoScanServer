import express, { Router } from "express";
import signupRoute from "./signup.js";

const router = express.Router();

router.use("/", signupRoute);
// app.use("/",loginRouteRoute);

export default router;
