import express from "express";
const router = express.Router();
import { getConnectedClient } from "./database.js";
import { ObjectId } from "mongodb";


const getCollection = () => {
    const client = getConnectedClient();
    const collection = client.db("todosdb").collection("todos");
    return collection;
}

// GET /todos (Get all the todos)
router.get("/todos", async (req, res) => {
    const collection = getCollection();
    const todos = await collection.find({}).toArray();

    res.status(200)
        .json(todos)
})

// POST /todos (Create todos)
router.post("/todos", async (req, res) => {
    const collection = getCollection();
    const { todo } = req.body;
    const newTodo = await collection.insertOne({ todo, status: false });
    console.log(todo);

    res.status(201)
        .json({
            todo, status: false, _id: newTodo.insertedId
        });
})

// DELETE /todos/:id (Delete todos)
router.delete("/todos/:id", async (req, res) => {
    const collection = getCollection();
    const _id = new ObjectId(req.params.id);
    const deletedTodo = await collection.deleteOne({ _id });
    res.status(200)
        .json(deletedTodo)
})

// PUT /todos/:id (Edit existing todos)
router.put("/todos/:id", async (req, res) => {
    const collection = getCollection();
    const _id = new ObjectId(req.params.id);
    const { status } = req.body;
    const updatedTodo = await collection.updateOne({ _id }, { $set: { status: !status } })

    res.status(200)
        .json(updatedTodo);
})


export default router;