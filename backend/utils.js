import jwt from 'jsonwebtoken';
import { errorMessage } from './errorMessage.js';

const JWT_Token = (req, res, next, cb) => {
  const token = req.cookies.JWT_token;
  if (!token) {
    return next(errorMessage(401, 'Please login first'));
  }
  jwt.verify(token, process.env.JWT, (err, payload) => {
    if (err) {
      return next(errorMessage(403, 'Invalid token!'));
    }
    req.userData = payload;
    cb();
  });
};

export const verifyUser = (req, res, next) => {
  JWT_Token(req, res, next, () => {
    const userId = req.params.id;
    if (userId === req.userData.id || req.userData.isAdmin) {
      next();
    } else {
      next(errorMessage(403, '無管理員權限,你只能修改或瀏覽自己的資料'));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  JWT_Token(req, res, next, () => {
    if (req.userData.isAdmin) next();
    else next(errorMessage(403, '無管理員權限'));
  });
};
