import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
import Employee from 'src/models/Employee';

// _mock
import db from '../../../utils/db';
// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    await db.connectDB();

    const { name, nameJP, position, positionJP, facebook, line, youtube, instagram,image } = req.body;
    const newEmployee = await new Employee({
      name,
      nameJP,
      position,
      positionJP,
      facebook,
      line,
      youtube,
      instagram,
      image
    }).save();

    return res.status(200).json({
      employee: newEmployee,
    });
  } catch (error) {
    console.error('[Auth API]: ', error);
    return res.status(400).json({
      message: error,
    });
  }
}
