import { publicEnv } from "@/helpers/env";
import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db(`${publicEnv.app.DB_NAME}`);

    let bodyObject = {...req.body};

    switch (req.method) {
        case "POST":
            const userAnswers = await db.collection("user_answers").insertOne(bodyObject);
            res.status(200).json({ message: 'Success insert of Answers to MongoDB', data: userAnswers});
            break;
        case "GET": 
            // if(req.query) {
            //     const { name } = req.query
            //     const specificAnswer = await db.collection("user_answers").findOne({ fullName: name });
            //     res.status(200).json({ message: 'Success fetch of specific Answer', data: specificAnswer });
            //     break; 
            // } else {
                const allAnswers = await db.collection("user_answers").find({}).toArray();
                res.status(200).json({ message: 'Success fetch of all Answers', data: allAnswers });
                break; 
            // }
    }
    
}