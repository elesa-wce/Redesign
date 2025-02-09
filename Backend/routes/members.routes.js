import { addMember,getAllMembers,Chiefs,Joints, Members } from "../controllers/members.controller.js";
import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/upload").post(verifyJWT,upload.single("photo"),addMember)

router.route("/").get(getAllMembers);

router.route("/chiefs").get(Chiefs);

router.route("/joints").get(Joints);

router.route("/members").get(Members);

export default router;