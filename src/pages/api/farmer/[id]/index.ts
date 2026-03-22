/* eslint-disable no-plusplus */

import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import Farmer from 'src/models/Farmer';
import db from 'src/utils/db';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);
    await db.connectDB();

    const farmer: any = await Farmer.findById(req.query.id).lean(); // để object thuần, dễ chỉnh sửa

    if (!farmer) {
      return res.status(404).json({ message: 'Farmer not found' });
    }

    return res.status(200).json({
      farmer,
    });
  } catch (error) {
    console.error('[Farmer API]: ', error);
    return res.status(400).json({
      message: error instanceof Error ? error.message : error,
    });
  }
}
