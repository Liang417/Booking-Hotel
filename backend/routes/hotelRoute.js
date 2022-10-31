import express from 'express';
import {
  createHotel,
  getHotel,
  getAllHotels,
  updateHotel,
  deleteHotel,
  seeder,
} from '../controller/hotelController.js';
import { verifyAdmin, verifyUser } from '../utils.js';
const hotelRouter = express.Router();

//創建hotel
hotelRouter.post('/', verifyAdmin, createHotel);
//取得所有飯店列表
hotelRouter.get('/', getAllHotels);
//取得特定的hotel
hotelRouter.get('/:id', getHotel);
//更新hotel
hotelRouter.put('/:id', verifyAdmin, updateHotel);
//刪除hotel
hotelRouter.delete('/:id', verifyAdmin, deleteHotel);
//? 開發用,建立測試資料
hotelRouter.post('/seeder', seeder);

export default hotelRouter;
