import express from "express";
import users from "../model/User.js"
const router = express.Router();



router.post("/users",async (req, res) => {
    try {
        const user = await users.create(req.body);
        res.status(201).json({
            success: true,
            data : user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})
router.get("/users",async (req, res) => {
    try {
        const user = await users.find();
        res.status(200).json({
            data:user
        })
    
} catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
}
})

export default router;