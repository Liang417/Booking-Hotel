import express from 'express';
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUserEmail,
  updateUserPassword,
} from '../controller/userController.js';
const userRouter = express.Router();

//取得特定用戶資料
userRouter.get('/:id', getUser);
//取得所有用戶資料
userRouter.get('/', getAllUsers);
//修改用戶信箱
userRouter.put('/:id/edit/email', updateUserEmail);
//修改用戶密碼
userRouter.put('/:id/edit/password', updateUserPassword);
//刪除用戶
userRouter.delete('/:id', deleteUser);

export default userRouter;
