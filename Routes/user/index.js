// import uploadRoutes from "./uploadPatientData.js";
import PatientDetail from "./patientRecords.js";
import express from "express";

const router=express.Router();

// router.use("/",uploadRoutes);
router.use("/",PatientDetail);

export default router;