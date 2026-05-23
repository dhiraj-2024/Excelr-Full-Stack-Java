import express from "express"

import { create,getAllUsers,getUserById,updateUser,deletUser } from "../controller/userController.js"

const route = express.Router();

route.post("/user", create);
route.get("/users", getAllUsers);
route.get("/user/:id", getUserById);
route.put("/update/user/:id", updateUser);
route.delete("/delete/user/:id",deletUser)

export default route;