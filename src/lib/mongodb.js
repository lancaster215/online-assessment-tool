import { MongoClient } from 'mongodb';

const { publicEnv } = require("@/helpers/env");

const uri = publicEnv.app.DB_URL

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

let client;
let clientPromise;

if (!uri) {
    throw new Error('Add Mongo URI to .env.local')
  }

if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
}
clientPromise = global._mongoClientPromise

export default clientPromise