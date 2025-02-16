// js assincrono
// await async

import { MongoClient } from "mongodb"



const URI = 
    "mongodb+srv://juniorminas2013:xq5tBFpfuRuvwyY0@cluster0.vj2as.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


const client = new MongoClient(URI);

const db = client.db("SpotifyAula");
const songCollection = await db.collection("songs").find({}).toArray();


console.log(songCollection)