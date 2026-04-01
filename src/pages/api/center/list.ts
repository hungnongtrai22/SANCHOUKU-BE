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


    const centers = await Center.find(); 
    return res.status(200).json({
      centers,
    });
  } catch (error) {
    console.error('[Center API]: ', error);
    return res.status(400).json({
      message: error,
    });
  }
}
