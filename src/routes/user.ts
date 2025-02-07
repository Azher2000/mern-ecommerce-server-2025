import express from "express";
import { deleteUser, getAllUsers, getUser, newUser } from "../controllers/user.js";
// import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();

// route - /api/v1/user/new 
app.post("/new", newUser);

// app.get("/all",adminOnly, getAllUsers);

app.get("/all", getAllUsers);

app.get("/:id", getUser);

// app.delete("/:id", adminOnly, deleteUser);

app.delete("/:id", deleteUser);

export default app;