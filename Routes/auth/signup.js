import express from "express"
import controllerFunction from "../../Controllers"
const router = express.Router();


router.post("/signup/", controllerFunction)

module.exports=router;