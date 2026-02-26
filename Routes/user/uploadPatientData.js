import express from "express";
import {uploadPatientData} from "../../Controllers/user/uploadPatientData.controller.js";
import multer from "multer";
const storage=multer.memoryStorage();
const upload=multer({
    storage:storage
})

const router=express.Router();

router.post("/main/uploadPatientData",upload.single("image"),uploadPatientData);

export default router;