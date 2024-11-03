import express from "express";
const router = express.Router();
import {getConnectedClient} from "./database.js";
import { Collection } from "mongodb";


const getCollection=()=>{
    const client=getConnectedClient();
    const collection=client.db("todosdb").collection("todos");
    return collection;
}

// GET /todos (Get all the todos)
router.get("/todos",async (req, res) => {
    const collection=getCollection();
    const todos=await collection.find({}).toArray();

    res.status(200)
        .json(todos)
})

// POST /todos (Create todos)
router.post("/todos", async (req, res) => {
    const collection=getCollection();
    const {todo}=req.body;
    const newTodo=await collection.insertOne({todo,status:false});
    console.log(todo);
    
    res.status(201)
        .json({
            todo,status:false,_id:newTodo.insertedId
        });
})

// DELETE /todos/:id (Delete todos)
router.delete("/todos/:id", (req, res) => {
    res.status(200)
        .json({
            message: "Delete request to /api/todos/:id"
        })
})

// PUT /todos/:id (Edit existing todos)
router.put("/todos/:id", (req, res) => {
    res.status(200)
        .json({
            message: "Put request to /api/todos/:id"
        })
})


export default router;