import { MongoClient } from "mongodb"; 

import { uri } from "../secrets.js"; 

export function dbConnect () {
    const client = new MongoClient (uri); 
    return client.db("mydatabase");
}

//THIS IS A DUPLICATE FOLDER ON THE OUTSIDE OF THIS FILE FOLDER...