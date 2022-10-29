import { errorMessage } from '../errorMessage.js';
import Hotel from '../models/hotelModel.js';

//創建hotel
export const createHotel = async (req, res, next) => {
  try {
    const saveHotel = await Hotel(req.body).save();
    res.status(200).send('新增成功');
  } catch (err) {
    next(errorMessage(500, '新增失敗請確認資料格式是否正確', err));
  }
};

//取得所有飯店列表
export const getAllHotels = async (req, res, next) => {
  try {
    const hotelList = await Hotel.find().populate('rooms');
    res.status(200).send(hotelList);
  } catch (err) {
    next(errorMessage(500, '抓取資料失敗', err));
  }
};

//取得特定的hotel
export const getHotel = async (req, res, next) => {
  const id = req.params.id;
  try {
    const hotel = await Hotel.findById(id).populate('rooms');
    if (!hotel) {
      return res.status(500).send('找不到資料，請檢查id是否正確');
    }
    res.status(200).send(hotel);
  } catch (err) {
    next(errorMessage(500, '找不到資料，請檢查id是否正確', err));
  }
};

//更新hotel
export const updateHotel = async (req, res, next) => {
  const id = req.params.id;
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    res.status(200).send('修改成功');
  } catch (err) {
    next(errorMessage(500, '修改失敗，請確認資料id與資料格式是否正確', err));
  }
};

//刪除hotel
export const deleteHotel = async (req, res, next) => {
  let id = req.params.id;
  try {
    await Hotel.findByIdAndDelete(id);
    res.status(200).send('刪除資料成功');
  } catch (err) {
    next(errorMessage(500, '刪除失敗，請檢查id是否正確', err));
  }
};

//開發用,建立測試資料
export const seeder = async (req, res, next) => {
  try {
    await Hotel.deleteMany({});
    await Hotel.insertMany(req.body);
    res.status(200).send('多筆資料新增成功');
  } catch (err) {
    errorMessage(500, '蟲蟲危機!', err);
  }
};
