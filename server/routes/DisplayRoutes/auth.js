import express from "express";
import { register, login, forgotPass, verifyOTP, resetPass, validateToken } from "../../controllers/PanelControllers/auth.js";
import { loginSuccess, loginFailed, googleLogin, googleCallback, logout } from "../../controllers/PanelControllers/googleAuth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgotPass", forgotPass);
router.post("/verifyOTP", verifyOTP);
router.post("/resetPass", resetPass);
router.post("/validateToken", validateToken);
router.get("/google", googleLogin);
router.get("/google/callback", googleCallback);
router.get("/google/login/success", loginSuccess);
router.get("/google/login/failed", loginFailed);
router.get("/google/logout", logout);

export default router;
