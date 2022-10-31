import express from 'express';
import {
  createRoom,
  getRoom,
  getAllRoom,
  updateRoom,
  deleteRoom,
} from '../controller/roomController.js';
import { verifyAdmin } from '../utils.js';
const roomRouter = express.Router();

//創建room並將其id存放在hotel中
roomRouter.post('/:hotelID', verifyAdmin, createRoom);
//取得特定hotel中的所有rooms
roomRouter.get('/:hotelID', getRoom);
//取得所有rooms
roomRouter.get('/', getAllRoom);
//更新room
roomRouter.put('/:roomID', verifyAdmin, updateRoom);
//刪除room,連同Hotel中的room一起刪除
roomRouter.delete('/:hotelID/:roomID', verifyAdmin, deleteRoom);

export default roomRouter;
