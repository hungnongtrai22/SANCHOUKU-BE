import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// import slug from 'slug';

// _mock
import db from '../../../utils/db';
import Employee from '../../../models/Employee';
// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    if (req.method !== 'PUT') {
      return res.status(405).json({ message: 'Method not allowed' });
    }

    await db.connectDB();

    const { _id, name, nameJP, position, positionJP, facebook, line, youtube, instagram } =
      req.body;

    if (!_id) {
      return res.status(400).json({ message: 'Missing employee ID (_id)' });
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(
      _id,
      {
        name,
        nameJP,
        position,
        positionJP,
        facebook,
        line,
        youtube,
        instagram,
      },
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    return res.status(200).json({
      employee: updatedEmployee,
    });
  } catch (error) {
    console.error('[Update Employee API]: ', error);
    return res.status(400).json({
      message: error,
    });
  }
}
