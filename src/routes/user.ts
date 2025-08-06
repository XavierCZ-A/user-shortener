import { Router } from "express";
import registerUser from "../controllers/registerUser";
import login from "../controllers/login";

const router = Router();

router.post("/register", registerUser);
router.post("/login", login);

export default router;
