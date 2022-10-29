import mongoose from 'mongoose';
const hotelSchema = new mongoose.Schema({
  name: {
    //住宿名稱
    type: String,
    required: true,
  },
  type: {
    //住宿種類 飯店or民宿or渡假村...
    type: String,
    required: true,
  },
  city: {
    //城市
    type: String,
    required: true,
  },
  address: {
    //飯店地址
    type: String,
    required: true,
  },
  distance: {
    //離市中心距離
    type: String,
  },
  photos: {
    //照片
    type: [String],
  },
  title: {
    //住宿標題
    type: String,
    required: true,
  },
  desc: {
    //對飯店的詳細描述
    type: String,
    required: true,
  },
  rating: {
    //1~10分
    type: Number,
    min: [1, '不能小於1'],
    max: [10, '不能大於10'],
  },
  rooms: {
    //各式房型 ex:海景房/四人房/總統套房 and其他資訊...
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Room',
  },
  cheapestPrice: {
    //展示最便宜的房型價格
    type: Number,
    min: [0, '不能小於0'],
    required: true,
  },
  popularHotel: {
    //true的話就可以顯示再homepage
    type: Boolean,
    default: false,
  },
  comments: {
    //評論數
    type: Number,
    min: 0,
    default: 0,
  },
});

export default mongoose.model('Hotel', hotelSchema);
