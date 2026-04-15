import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
import Diary from 'src/models/Diary';

// _mock
import db from '../../../utils/db';
// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    await db.connectDB();

    const { title, topic, date, detail, avatar } = req.body;
    const newDiary = await new Diary({
      title,
      topic,
      date,
      detail,
      avatar
    }).save();

    return res.status(200).json({
      diary: newDiary,
    });
  } catch (error) {
    console.error('[Auth API]: ', error);
    return res.status(400).json({
      message: error,
    });
  }
}
