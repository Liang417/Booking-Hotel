import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 10,
    },
    email: {
      type: String,
      unique: true, //not a validator!
      minLength: 6,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
//在save進db前,先透過middleware處理需要hash的部分
userSchema.pre('save', async function (next) {
  try {
    if (this.isModified('password') || this.isNew) {
      const hash = await bcrypt.hash(this.password, 10);
      this.password = hash;
    }
    next();
  } catch (err) {
    next(err);
  }
});

export default mongoose.model('User', userSchema);
