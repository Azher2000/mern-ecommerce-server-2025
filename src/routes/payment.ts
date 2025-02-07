import express from "express";
import { allCoupons, applyDiscount, createPaymentIntent, deleteCoupon, newCoupon } from "../controllers/payment.js";
// import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();

// route - /api/v1/payment/create
app.post("/create", createPaymentIntent);

app.get("/discount", applyDiscount);

// // route - /api/v1/payment/Coupon/new
// app.post("/coupon/new", adminOnly, newCoupon);

// app.get("/coupon/all", adminOnly, allCoupons);

// app.delete("/coupon/:id", adminOnly, deleteCoupon);

// route - /api/v1/payment/Coupon/new
app.post("/coupon/new", newCoupon);

app.get("/coupon/all", allCoupons);

app.delete("/coupon/:id", deleteCoupon);


export default app;