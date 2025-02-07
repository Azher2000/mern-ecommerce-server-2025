import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { deleteProduct, getAdminProducts, getAllCategories, getAllProducts, getlatestProducts, getSingleProduct, newProduct, updateProduct } from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";

const app = express.Router();

// To Create New Product
// app.post("/new", adminOnly, singleUpload, newProduct);
app.post("/new", singleUpload, newProduct);

// To get all Products with filters
app.get("/all", getAllProducts);

// To get last 5 Products
app.get("/latest", getlatestProducts);

// To get All Unique Categories
app.get("/categories", getAllCategories);

// To get all Products
app.get("/admin-products", getAdminProducts);

app
  .route("/:id")
  .get(getSingleProduct)
  .put(adminOnly, singleUpload, updateProduct)
  .delete(adminOnly, deleteProduct);

export default app;