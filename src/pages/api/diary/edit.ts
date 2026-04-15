import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// import slug from 'slug';

// _mock
import db from '../../../utils/db';
import Diary from '../../../models/Diary';
// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    if (req.method !== 'PUT') {
      return res.status(405).json({ message: 'Method not allowed' });
    }

    await db.connectDB();

    const { _id, title, topic, date, detail } = req.body;

    if (!_id) {
      return res.status(400).json({ message: 'Missing diary ID (_id)' });
    }

    const updatedDiary = await Diary.findByIdAndUpdate(
      _id,
      {
        title,
        topic,
        date,
        detail,
      },
      { new: true }
    );

    if (!updatedDiary) {
      return res.status(404).json({ message: 'Diary not found' });
    }

    return res.status(200).json({
      diary: updatedDiary,
    });
  } catch (error) {
    console.error('[Update Diary API]: ', error);
    return res.status(400).json({
      message: error,
    });
  }
}
