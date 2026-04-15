/* eslint-disable no-plusplus */

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

    const diary: any = await Diary.findById(req.query.id).lean(); // để object thuần, dễ chỉnh sửa

    if (!diary) {
      return res.status(404).json({ message: 'Diary not found' });
    }

    return res.status(200).json({
      diary,
    });
  } catch (error) {
    console.error('[Diary API]: ', error);
    return res.status(400).json({
      message: error instanceof Error ? error.message : error,
    });
  }
}
