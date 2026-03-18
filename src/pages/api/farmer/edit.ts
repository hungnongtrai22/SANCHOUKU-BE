import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// import slug from 'slug';

// _mock
import db from '../../../utils/db';
import Farmer from '../../../models/Farmer';
// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    if (req.method !== 'PUT') {
      return res.status(405).json({ message: 'Method not allowed' });
    }

    await db.connectDB();

    const {
      _id,
      name,
      ward,
      state,
      address,
      rating,
      nameFarm,
      shortIntroduce,
      aboutFarmTitle,
      aboutFarmContent,
      category,
      video,
      popularProduct,
      whyTitle,
      whyContent,
      gallery,
      avatar
    } = req.body;

    if (!_id) {
      return res.status(400).json({ message: 'Missing farmer ID (_id)' });
    }

    const updatedFarmer = await Farmer.findByIdAndUpdate(
      _id,
      {
        name,
        ward,
        state,
        address,
        rating,
        nameFarm,
        shortIntroduce,
        aboutFarmTitle,
        aboutFarmContent,
        category,
        video,
        popularProduct,
        whyTitle,
        whyContent,
        gallery,
        avatar
      },
      { new: true }
    );

    if (!updatedFarmer) {
      return res.status(404).json({ message: 'Farmer not found' });
    }

    return res.status(200).json({
      farmer: updatedFarmer,
    });
  } catch (error) {
    console.error('[Update Farmer API]: ', error);
    return res.status(400).json({
      message: error,
    });
  }
}
