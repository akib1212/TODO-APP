import express from "express";

const router = express.Router()

// GET /todos (Get all the todos)
router.get("/todos", (req, res) => {
    res.status(200)
        .json({
            message: "Get request to /api/todos"
        })
})

// POST /todos (Create todos)
router.post("/todos", (req, res) => {
    res.status(201)
        .json({
            message: "Post request to /api/todos"
        })
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