import express from "express";
import {
  allUser,
  login,
  logout,
  signUp,
} from "../controllers/user.controller.js";
import secureRoute from "../middleware/secureRoute.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", logout);
router.get("/allusers", secureRoute, allUser);

export default router;
