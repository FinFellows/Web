// import { NextApiRequest, NextApiResponse } from 'next';
// import { connectToDatabase } from '../../util/mongodb';

// interface RequestBody {
//   postId: number;
//   bookmarked: boolean;
// }

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'POST') {
//     const { db } = await connectToDatabase();
//     const { postId, bookmarked } = req.body as RequestBody;
//     await db.collection('posts').updateOne({ id: postId }, { $set: { bookmarked } });
//     res.status(200).json({ success: true });
//   } else {
//     res.status(400).json({ success: false });
//   }
// };
