import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { loginAdmin,logoutAdmin } from "../controllers/auth.controller.js";

const router = Router();

router.route("/adminLogin").post(loginAdmin);

router.route("/adminLogout").post(verifyJWT,logoutAdmin);

export default router;