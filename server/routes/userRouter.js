const router = express.Router();
import express from "express";
import { login, register, logout } from "../controllers/authDetail.js";
import newCard from "../controllers/newCard.js";
import upload from "../features/images.js";

router.post("/register", register);

router.post("/login", login);

router.get("/logout", logout);

router.post("/sell", upload.single("image"), newCard);

router.post("/rent", upload.single("image"), newCard);

export default router;
