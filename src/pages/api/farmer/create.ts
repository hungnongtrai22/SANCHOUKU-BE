import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
import Farmer from 'src/models/Farmer';

// _mock
import db from '../../../utils/db';
// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    await db.connectDB();

    const {
      name,
      nameJP,
      ward,
      state,
      address,
      rating,
      nameFarm,
      nameFarmJP,
      shortIntroduce,
      shortIntroduceJP,
      aboutFarmTitle,
      aboutFarmTitleJP,
      aboutFarmContent,
      aboutFarmContentJP,
      category,
      categoryJP,
      video,
      popularProduct,
      whyTitle,
      whyTitleJP,
      whyContent,
      whyContentJP,
      gallery,
      avatar
    } = req.body;
    const newFarmer = await new Farmer({
      name,
      nameJP,
      ward,
      state,
      address,
      rating,
      nameFarm,
      nameFarmJP,
      shortIntroduce,
      shortIntroduceJP,
      aboutFarmTitle,
      aboutFarmTitleJP,
      aboutFarmContent,
      aboutFarmContentJP,
      category,
      categoryJP,
      video,
      popularProduct,
      whyTitle,
      whyTitleJP,
      whyContent,
      whyContentJP,
      gallery,
      avatar
    }).save();

    return res.status(200).json({
      farmer: newFarmer,
    });
  } catch (error) {
    console.error('[Auth API]: ', error);
    return res.status(400).json({
      message: error,
    });
  }
}
