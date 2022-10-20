import { dbConnect } from "./src/dbConnect.js";

export async function addNewFurniture(req, res) {
    const newFurniture = req.body
    const db = dbConnect()
    await db.collection("furniture").insertOne(newFurniture)
        .catch(err => {
            res.status(500).send(err)
            return
        })
        res.status(201).send({ message: 'New Furniture Added.'})
}

export async function getAllFurniture(req, res) {
    const db = dbConnect()
    
    const collection = await db.collection("furniture").find().toArray()
    
    res.send(collection)
    
//We are connecting to our own database in our file (const db = dbConnect()s)
//We are getting db.collection("furniture").find().toArray() getting our furniture collection into the database, setting it into an array
//We are assigning a variable the variable is collection 
//We get the 2 types of furniture returned as an array
}


export async function findFurnitureByModel(req, res) {
    const db = dbConnect()
    const { search } = req.params
    const collection = await db.collection("furniture")
    .find({ model: search })
    .toArray()
    res.send(collection)
}
