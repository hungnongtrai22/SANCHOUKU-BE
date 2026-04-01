/* eslint-disable no-plusplus */

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

    const employee: any = await Employee.findById(req.query.id).lean(); // để object thuần, dễ chỉnh sửa

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    return res.status(200).json({
      employee,
    });
  } catch (error) {
    console.error('[Employee API]: ', error);
    return res.status(400).json({
      message: error instanceof Error ? error.message : error,
    });
  }
}
