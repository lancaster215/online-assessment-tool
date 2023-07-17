import { publicEnv } from "@/helpers/env";
import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db(`${publicEnv.app.DB_NAME}`);

    let bodyObject = {...req.body};

    switch (req.method) {
        case "POST":
            const userDetails = await db.collection("user_details").insertOne(bodyObject);
            res.status(200).json({ message: 'Success insert of Details in MongoDB', data: userDetails});
            break;
        case "GET":
            const { name } = req.query
            const specificUser = await db.collection("user_details").findOne({ fullName: name });
            res.status(200).json({ message: 'Success fetch of specific User', data: specificUser });
            break;    
    }
    
}