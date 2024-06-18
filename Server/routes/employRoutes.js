import express from "express";
import {
  createEmploye,
  deleteEmploy,
  getAllEmploye,
  getEmployByID,
  updateEmploy,
} from "../controller/employController.js";
//Routers
const router = express.Router();

//Get All Employes || GET
router.get("/getallemploys", getAllEmploye);
//GET Employe By ID || GET
router.get("/oneemploy/:id", getEmployByID);
//Create Employ || POST
router.post("/create", createEmploye);
//Update employe || POST
router.put("/update/:id", updateEmploy);
//Delete Employ || DELETE
router.delete("/removeEmploye/:id", deleteEmploy);

//exporing
export default router;
