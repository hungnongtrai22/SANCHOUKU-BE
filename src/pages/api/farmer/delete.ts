import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import db from '../../../utils/db';
import Farmer from '../../../models/Farmer';
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
      return res.status(400).json({ message: 'Missing farmer ID (_id)' });
    }

    const deletedFarmer = await Farmer.findByIdAndDelete(_id);

    if (!deletedFarmer) {
      return res.status(404).json({ message: 'Farmer not found' });
    }

    return res.status(200).json({
      message: 'Farmer deleted successfully',
      farmer: deletedFarmer,
    });
  } catch (error) {
    console.error('[Delete Category API]: ', error);
    return res.status(500).json({
      message: 'Internal server error',
      error,
    });
  }
}
