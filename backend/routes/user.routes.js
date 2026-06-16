import express from "express";

const router = express.Router


router.route("/login").post(login)
router.route("/register").post(register)