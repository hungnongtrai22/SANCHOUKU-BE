import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// import slug from 'slug';

// _mock
import db from '../../../utils/db';
import Center from '../../../models/Center';
// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    if (req.method !== 'PUT') {
      return res.status(405).json({ message: 'Method not allowed' });
    }

    await db.connectDB();

    const { _id, regulation } =
      req.body;

    if (!_id) {
      return res.status(400).json({ message: 'Missing center ID (_id)' });
    }

    const updatedCenter = await Center.findByIdAndUpdate(
      _id,
      {
       regulation
      },
      { new: true }
    );

    if (!updatedCenter) {
      return res.status(404).json({ message: 'Center not found' });
    }

    return res.status(200).json({
      center: updatedCenter,
    });
  } catch (error) {
    console.error('[Update Center API]: ', error);
    return res.status(400).json({
      message: error,
    });
  }
}
