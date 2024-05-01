import express from "express";

import { submitForm } from "../controller/UserController";

const router = express.Router();

router.post("/form", submitForm);

export default router;
