import mongoose from 'mongoose';

const diarySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    titleJP: {
      type: String,
    },
    topic: {
      type: String,
    },
      topicJP: {
      type: String,
    },
    date: {
      type: Date,
    },
    detail: {
      type: String,
    },
     detailJP: {
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
