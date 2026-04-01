import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import Employee from 'src/models/Employee';
import db from 'src/utils/db';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);
    await db.connectDB();


    const employees = await Employee.find(); 
    return res.status(200).json({
      employees,
    });
  } catch (error) {
    console.error('[Employee API]: ', error);
    return res.status(400).json({
      message: error,
    });
  }
}
