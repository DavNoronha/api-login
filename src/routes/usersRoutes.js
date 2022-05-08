import express from "express";
import UserController from "../controllers/usersControllers.js";

const router = express.Router();

router
    .get('/users', UserController.getUsers)
    .post('/users', UserController.createUser)

export default router