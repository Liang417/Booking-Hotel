import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import hotelRouter from './routes/hotelRoute.js';
import roomRouter from './routes/roomRoute.js';
import authRouter from './routes/authRoute.js';
import userRouter from './routes/userRoute.js';
const port = 5000;
const app = express();

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('MongoDB connection SUCCESS');
  })
  .catch((err) => {
    console.log('MongoDB connection FAIL ');
  });

app.use(express.json());
app.use('/api/hotels', hotelRouter);
app.use('/api/rooms', roomRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'error';
  return res.status(errorStatus).json({
    Status: errorStatus,
    Message: errorMessage,
    Detail: err.detail,
  });
});

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
