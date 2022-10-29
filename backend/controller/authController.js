import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import { errorMessage } from '../errorMessage.js';

//註冊
export const register = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body); //hash的部分交給schema中的middleware處理
    res.send(newUser);
  } catch (err) {
    let errMsg;
    if (err.code == 11000) {
      errMsg = 'email已被註冊';
    }
    next(errorMessage(400, errMsg || '註冊失敗,請檢查資料格式是否正確', err));
  }
};
//登入
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return next(errorMessage(404, 'email或password錯誤'));
    }
    const comparePassword = await bcrypt.compare(req.body.password, user.password);
    if (!comparePassword) {
      return next(errorMessage(404, 'email或password錯誤'));
    }
    res.status(200).send('登入成功');
  } catch (err) {
    next(errorMessage(500, '登入失敗', err));
  }
};
