import mongoose from 'mongoose';
const roomSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, //房間名稱 如海景房
    desc: { type: String, required: true }, //房間描述 如雙人床與獨立衛浴各式設備
    price: { type: Number, min: [0, '不能小於0'], required: true },
    maxPeople: { type: Number, min: [1, '不能小於1'], required: true },
    roomNumbers: [
      {
        number: { type: Number, min: [0, '不能小於0'], required: true }, //房號
        unavailableDates: [{ type: Date }], //已被預定的時間
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.model('Room', roomSchema);
