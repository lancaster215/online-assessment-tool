import { publicEnv } from "@/helpers/env";
import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db(`${publicEnv.app.DB_NAME}`);

    const { name } = req.query
    const specificAnswer = await db.collection("user_answers").findOne({ name: name });
    res.status(200).json({ message: 'Success fetch of specific Answer', data: specificAnswer });
}