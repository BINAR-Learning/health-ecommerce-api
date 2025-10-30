/**
 * Product Controller
 * Menangani business logic untuk operasi CRUD produk
 */

const Product = require("../models/Product");

// ==========================================
// @desc    Get all products
// @route   GET /api/products
// @access  Public
// ==========================================
exports.getAllProducts = async (req, res, next) => {
  try {
    // Ambil query parameters untuk filtering
    const { category, minPrice, maxPrice, search } = req.query;

    // Buat query object
    let query = { isActive: true };

    // Filter by category
    if (category) {
      query.category = category;
    }

    // Filter by price range
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // Search by name or description
    if (search) {
      query.$text = { $search: search };
    }

    // Query database
    const products = await Product.find(query)
      .sort({ createdAt: -1 })
      .limit(50);

    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

// ==========================================
// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
// ==========================================
exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// ==========================================
// @desc    Create new product
// @route   POST /api/products
// @access  Private (admin only)
// ==========================================
exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// ==========================================
// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private (admin only)
// ==========================================
exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return updated document
      runValidators: true, // Jalankan validasi schema
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// ==========================================
// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private (admin only)
// ==========================================
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

