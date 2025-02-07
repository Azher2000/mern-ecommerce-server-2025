import express from "express";
import { getBarCharts, getDashboardStats, getLineCharts, getPieCharts } from "../controllers/stats.js";
import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();

// route - /api/v1/dashboard/stats
// app.get("/stats", adminOnly, getDashboardStats);

// app.get("/pie", adminOnly, getPieCharts);

// app.get("/bar", adminOnly, getBarCharts);

// app.get("/line", adminOnly, getLineCharts);

app.get("/stats", getDashboardStats);

app.get("/pie", getPieCharts);

app.get("/bar", getBarCharts);

app.get("/line", getLineCharts);

export default app;