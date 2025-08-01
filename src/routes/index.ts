import { Router } from "express";
import registerUser from "../controllers/registerUser";

const router = Router();

router.get("/", registerUser);

export default router;
