import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import db from '../../../utils/db';
import Employee from '../../../models/Employee';
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
      return res.status(400).json({ message: 'Missing employee ID (_id)' });
    }

    const deletedEmployee = await Employee.findByIdAndDelete(_id);

    if (!deletedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    return res.status(200).json({
      message: 'Employee deleted successfully',
      employee: deletedEmployee,
    });
  } catch (error) {
    console.error('[Delete Employee API]: ', error);
    return res.status(500).json({
      message: 'Internal server error',
      error,
    });
  }
}
