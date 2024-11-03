import express from "express";
import router from "./routes.js";
import dotenv from "dotenv";
import { connectToMongoDB, getConnectedClient } from "./database.js"

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api", router);

const port = process.env.PORT || 4000;



async function startServer() {
    await connectToMongoDB();
    app.listen(port, () => {
        console.log(`server is running on port ${port}` );
    })
};
startServer();