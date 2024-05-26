import express from "express"
import { getUsersForSidebar } from "../controllers/user.controller.js";
const router=express.Router();
import protectRoute from "../middleware/protectRoute.js";
router.get("/",protectRoute,getUsersForSidebar);
export default router;