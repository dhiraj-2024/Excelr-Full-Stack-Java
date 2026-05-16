import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRoutes from "./routes/UserRoutes.js"

dotenv.config();
const PORT = process.env.PORT || 8080


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(201).json({
        success: true,
        message:"hello from the server"

    })
})

app.use("/api", UserRoutes);

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("mongodb conected"))
    .catch((err)=> console.log(err))



app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})