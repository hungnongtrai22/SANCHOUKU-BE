import mongoose from 'mongoose';

const diarySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
    },
    date: {
      type: Date,
    },
    detail: {
      type: String,
    },
    avatar: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

const Diary = mongoose.models.Diary || mongoose.model('Diary', diarySchema);

export default Diary;
