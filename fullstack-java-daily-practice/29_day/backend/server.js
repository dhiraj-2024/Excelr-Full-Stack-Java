import express from "express";
import cors from "cors";
import mongoose  from "mongoose";
import dotenv from "dotenv";
import UserRoutes from "./routes/UserRoutes.js"
import ProductsRoute from "./routes/ProductRoutes.js"

dotenv.config()

const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ msg: "hello this is from the server side" });
})
app.use("/api", UserRoutes);
app.use("/api", ProductsRoute);


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("mongo connected"))
.catch((err)=> console.log(err) )

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
})