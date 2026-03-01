import express from "express";
import {handleAiDiagnosis} from "../../Controllers/user/aiDiagnosis.controller.js";

const router=express.Router();

router.post("/diagnosis/Aidiagnosis",handleAiDiagnosis);

export default router;