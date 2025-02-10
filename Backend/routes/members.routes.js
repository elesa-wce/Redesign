import { addMember,getAllMembers,Chiefs,Joints, Members } from "../controllers/members.controller.js";
import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/upload").post(verifyJWT,upload.single("photo"),addMember)

router.route("/").get(getAllMembers);

router.route("/chief").get(Chiefs);

router.route("/joint").get(Joints);

router.route("/member").get(Members);

export default router;