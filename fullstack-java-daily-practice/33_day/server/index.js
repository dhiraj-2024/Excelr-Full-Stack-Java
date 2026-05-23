import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import authRouter from "./routes/authRoutes.js"
import connectDb from "./config/db.js"
dotenv.config();

connectDb();
const app = express();
app.use(express.json())
app.use(cors());

app.get("/", (req,res) => {
    res.status(200).json({
        success: "true",
        message:"hello from the server"
    })
})

app.get("/health", (req, res) => {
  res.status(200).json({
    message: "Health is ok ",
  });
});

app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api/auth", authRouter);


const PORT = process.env.PORT || 8000;
// const mongo_url = process.env.MONGO_URL
// mongoose.connect(mongo_url)
//     .then(() => console.log("mongodb connected"))
//     .catch((err)=> console.log(err))


app.listen(PORT, () => {
    console.log(`Server is runing on ${PORT}`)
})