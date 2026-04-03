import { NextApiRequest, NextApiResponse } from 'next';
import cors from 'src/utils/cors';
import Center from 'src/models/Center';
import db from '../../../utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);
    await db.connectDB();

    const { regulation } = req.body;

    // tìm center đầu tiên
    let center = await Center.findOne();

    if (center) {
      // nếu đã tồn tại → update
      center.regulation = regulation;
      await center.save();
    } else {
      // nếu chưa có → tạo mới
      center = await new Center({
        regulation,
      }).save();
    }

    return res.status(200).json({
      center,
    });
  } catch (error) {
    console.error('[Center API]: ', error);
    return res.status(400).json({
      message: error,
    });
  }
}