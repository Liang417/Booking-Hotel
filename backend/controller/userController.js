import { errorMessage } from '../errorMessage.js';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

//取得特定用戶資料
export const getUser = async (req, res, next) => {
  try {
    const getUser = await User.findById(req.params.id);
    if (!getUser) {
      return next(errorMessage(404, '查無此用戶'));
    }
    res.status(200).send(getUser);
  } catch (err) {
    next(errorMessage(500, '出現錯誤,請檢查id格式是否正確', err));
  }
};

//取得所有用戶資料
export const getAllUsers = async (req, res, next) => {
  try {
    const getUsers = await User.find();
    res.status(200).send(getUsers);
  } catch (err) {
    next(errorMessage(500, '查詢所有用戶失敗', err));
  }
};

//更新使用者email
export const updateUserEmail = async (req, res, next) => {
  //檢查是否已被註冊過
  const isExist = await User.findOne(req.body);
  if (isExist) {
    return next(errorMessage(404, '此email已被註冊'));
  }
  try {
    const getUser = await User.findById(req.params.id);
    const saveEmail = getUser.set({ email: req.body.email }).save(function (err) {
      //這邊用callback抓validation err
      if (err) next(errorMessage(500, '出現錯誤,請檢查email格式是否正確', err));
      else res.status(200).send('email變更成功');
    });
  } catch (err) {
    console.log(err.name);
    next(errorMessage(500, '出現錯誤,請檢查id是否正確', err));
  }
};

//更新使用者password
export const updateUserPassword = async (req, res, next) => {
  try {
    const getUser = await User.findById(req.params.id);
    const comparePassword = await bcrypt.compare(req.body.password, getUser.password);
    //新password與原password必須不同才允許更改
    if (comparePassword) {
      return next(errorMessage(500, '不可與原本password相同'));
    }
    //交給middleware hash
    const savePassword = getUser.set({ password: req.body.password }).save(function (err) {
      if (err) next(errorMessage(500, '出現錯誤,請檢查password格式是否正確', err));
      else res.status(200).send('password變更成功');
    });
  } catch (err) {
    next(errorMessage(500, '出現錯誤,請檢查id格式是否正確', err));
  }
};

//刪除用戶
export const deleteUser = async (req, res, next) => {
  try {
    const byeByeUser = await User.findByIdAndDelete(req.params.id);
    //if(!byeByeUser) 視情況另外處理null case
    res.status(200).send('使用者已被殲滅');
  } catch (err) {
    next(errorMessage(500, '出現錯誤,請檢查id格式是否正確', err));
  }
};
