import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
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

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
