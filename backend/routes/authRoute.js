import express from 'express';
import { login, register } from '../controller/authController.js';
const authRouter = express.Router();

//註冊
authRouter.post('/register', register);
//登入
authRouter.post('/login', login);

export default authRouter;
