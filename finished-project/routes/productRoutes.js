/**
 * Product Routes
 * Mendefinisikan endpoint untuk operasi CRUD produk
 */

const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// ==========================================
// ROUTES DEFINITION
// ==========================================

// GET / - Get all products
router.get("/", productController.getAllProducts);

// GET /:id - Get product by ID
router.get("/:id", productController.getProductById);

// POST / - Create new product
router.post("/", productController.createProduct);

// PUT /:id - Update product
router.put("/:id", productController.updateProduct);

// DELETE /:id - Delete product
router.delete("/:id", productController.deleteProduct);

module.exports = router;

