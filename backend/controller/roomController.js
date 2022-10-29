import Room from '../models/roomModel.js';
import Hotel from '../models/hotelModel.js';
import { errorMessage } from '../errorMessage.js';

//創建room並將其id存放在hotel中
export const createRoom = async (req, res, next) => {
  const hotelID = req.params.hotelID;
  try {
    //先確定能查詢到對應的hotelID,避免room創建了但存不進去
    if (!(await Hotel.findById(hotelID))) {
      return res.status(500).send('找不到符合的hotelID,無法上傳room更新');
    }
    const saveRoom = await Room.create(req.body);
    await Hotel.findByIdAndUpdate(
      hotelID,
      { $push: { rooms: saveRoom._id } },
      { runValidators: true }
    );
    res.send(saveRoom);
  } catch (err) {
    next(errorMessage(500, '發生錯誤,請檢查hotelID及資料格式是否正確', err));
  }
};

//取得所有rooms列表
export const getAllRoom = async (req, res, next) => {
  try {
    let roomList = await Room.find();
    res.status(200).send(roomList);
  } catch (err) {
    next(errorMessage(500, '抓取資料失敗', err));
  }
};

//取得特定hotel中的所有rooms
export const getRoom = async (req, res, next) => {
  const hotelID = req.params.hotelID;
  if (!(await Hotel.findById(hotelID))) {
    return res.status(500).send('找不到符合的hotelID');
  }
  try {
    const getHotel = await Hotel.findById(hotelID).populate('rooms');
    res.status(200).send(getHotel.rooms);
  } catch (err) {
    next(errorMessage(500, '發生錯誤,請檢查hotelID是否正確', err));
  }
};

//更新room
export const updateRoom = async (req, res, next) => {
  const roomID = req.params.roomID;
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      roomID,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedRoom) {
      res.status(500).send('更新失敗，找不到ID');
    }
    res.status(200).send(updatedRoom);
  } catch (err) {
    next(errorMessage(500, '更新失敗，請檢查roomID及資料格式是否正確', err));
  }
};

//刪除room,連同Hotel中的room一起刪除
export const deleteRoom = async (req, res, next) => {
  const hotelID = req.params.hotelID;
  const roomID = req.params.roomID;
  try {
    let deleteFromHotel = await Hotel.findByIdAndUpdate(hotelID, { $pull: { rooms: roomID } });
    //先確保能從Hotel中刪除room, 避免刪了Room先刪了, 但Hotel中還留著;
    if (!deleteFromHotel) {
      return res.status(500).send('刪除失敗，請檢查hotelID是否正確');
    }
    await Room.findByIdAndDelete(roomID).then(() => {
      res.status(200).send('資料刪除成功');
      //就算資料本來就不存在也會回傳刪除成功,可以視需要添加if判斷:是否真的有刪除實際存在的資料
    });
  } catch (err) {
    return next(errorMessage(500, '刪除失敗，請檢查hotelID和roomID是否正確', err));
  }
};
