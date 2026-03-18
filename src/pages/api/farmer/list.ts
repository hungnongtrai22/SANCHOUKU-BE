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


    const farmers = await Farmer.find(); 
    return res.status(200).json({
      farmers,
    });
  } catch (error) {
    console.error('[Farmer API]: ', error);
    return res.status(400).json({
      message: error,
    });
  }
}
