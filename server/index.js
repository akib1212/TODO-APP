import express from "express";
import router from "./routes.js"
const app = express();


app.use("/api", router)
const port = 5000;
app.listen(port, () => {
    console.log('server is running');

})