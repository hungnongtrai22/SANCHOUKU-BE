import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import db from '../../../utils/db';
import Center from '../../../models/Center';
// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }

    await db.connectDB();

    const { _id } = req.body;

    if (!_id) {
      return res.status(400).json({ message: 'Missing center ID (_id)' });
    }

    const deletedCenter = await Center.findByIdAndDelete(_id);

    if (!deletedCenter) {
      return res.status(404).json({ message: 'Center not found' });
    }

    return res.status(200).json({
      message: 'Center deleted successfully',
      center: deletedCenter,
    });
  } catch (error) {
    console.error('[Delete Center API]: ', error);
    return res.status(500).json({
      message: 'Internal server error',
      error,
    });
  }
}
