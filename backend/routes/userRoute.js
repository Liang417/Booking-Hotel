import express from 'express';
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUserEmail,
  updateUserPassword,
} from '../controller/userController.js';
import { verifyAdmin, verifyUser } from '../utils.js';
const userRouter = express.Router();

//取得特定用戶資料
userRouter.get('/:id', verifyUser, getUser);
//取得所有用戶資料
userRouter.get('/', verifyAdmin, getAllUsers);
//修改用戶信箱
userRouter.put('/:id/edit/email', verifyUser, updateUserEmail);
//修改用戶密碼
userRouter.put('/:id/edit/password', verifyUser, updateUserPassword);
//刪除用戶
userRouter.delete('/:id', verifyUser, deleteUser);

export default userRouter;
