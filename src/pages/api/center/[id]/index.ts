/* eslint-disable no-plusplus */

import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import Center from 'src/models/Center';
import db from 'src/utils/db';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);
    await db.connectDB();

    const center: any = await Center.findById(req.query.id).lean(); // để object thuần, dễ chỉnh sửa

    if (!center) {
      return res.status(404).json({ message: 'Center not found' });
    }

    return res.status(200).json({
      center,
    });
  } catch (error) {
    console.error('[Center API]: ', error);
    return res.status(400).json({
      message: error instanceof Error ? error.message : error,
    });
  }
}
