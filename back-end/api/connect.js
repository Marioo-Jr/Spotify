// js assincrono
// await async

import { MongoClient } from "mongodb"



const URI = 
    "mongodb+srv://juniorminas2013:xq5tBFpfuRuvwyY0@cluster0.vj2as.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


const client = new MongoClient(URI);


// a baixo o comando para criar o BD
export const db = client.db("SpotifyAula");

// COMANDO A BAIXO SERVE APENAS PARA PEGAR INFORMACOES
//const songCollection = await db.collection("songs").find({}).toArray();


//console.log(songCollection)