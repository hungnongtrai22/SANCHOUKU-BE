import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import Diary from 'src/models/Diary';
import db from 'src/utils/db';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);
    await db.connectDB();


    const diaries = await Diary.find(); 
    return res.status(200).json({
      diaries,
    });
  } catch (error) {
    console.error('[Diary API]: ', error);
    return res.status(400).json({
      message: error,
    });
  }
}
