/**
 * ⚠️ FILE INI PERLU DILENGKAPI
 *
 * Product Controller
 * Menangani business logic untuk operasi CRUD produk
 *
 * Tugas:
 * Implementasikan 5 fungsi controller berikut:
 * 1. getAllProducts - Get semua produk dengan filtering
 * 2. getProductById - Get satu produk berdasarkan ID
 * 3. createProduct - Buat produk baru
 * 4. updateProduct - Update produk
 * 5. deleteProduct - Hapus produk
 */

// TODO: Import Product model
// Hint: const Product = require('../models/Product');

// ==========================================
// @desc    Get all products
// @route   GET /api/products
// @access  Public
// ==========================================
exports.getAllProducts = async (req, res, next) => {
  try {
    // TODO: Ambil query parameters untuk filtering
    // const { category, minPrice, maxPrice, search } = req.query;
    // TODO: Buat query object
    // let query = { isActive: true };
    // TODO: Filter by category (jika ada)
    // if (category) {
    //   query.category = category;
    // }
    // TODO: Filter by price range (jika ada)
    // if (minPrice || maxPrice) {
    //   query.price = {};
    //   if (minPrice) query.price.$gte = Number(minPrice);
    //   if (maxPrice) query.price.$lte = Number(maxPrice);
    // }
    // TODO: Search by name or description (jika ada)
    // if (search) {
    //   query.$text = { $search: search };
    // }
    // TODO: Query database
    // const products = await Product.find(query)
    //   .sort({ createdAt: -1 })
    //   .limit(50);
    // TODO: Return response
    // res.status(200).json({
    //   success: true,
    //   count: products.length,
    //   data: products
    // });
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
    // TODO: Ambil product berdasarkan ID
    // const product = await Product.findById(req.params.id);
    // TODO: Check jika product tidak ditemukan
    // if (!product) {
    //   return res.status(404).json({
    //     success: false,
    //     message: 'Product not found'
    //   });
    // }
    // TODO: Return response
    // res.status(200).json({
    //   success: true,
    //   data: product
    // });
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
    // TODO: Buat product baru dari req.body
    // const product = await Product.create(req.body);
    // TODO: Return response dengan status 201
    // res.status(201).json({
    //   success: true,
    //   message: 'Product created successfully',
    //   data: product
    // });
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
    // TODO: Update product berdasarkan ID
    // const product = await Product.findByIdAndUpdate(
    //   req.params.id,
    //   req.body,
    //   {
    //     new: true,        // Return updated document
    //     runValidators: true  // Jalankan validasi schema
    //   }
    // );
    // TODO: Check jika product tidak ditemukan
    // if (!product) {
    //   return res.status(404).json({
    //     success: false,
    //     message: 'Product not found'
    //   });
    // }
    // TODO: Return response
    // res.status(200).json({
    //   success: true,
    //   message: 'Product updated successfully',
    //   data: product
    // });
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
    // TODO: Delete product berdasarkan ID
    // const product = await Product.findByIdAndDelete(req.params.id);
    // TODO: Check jika product tidak ditemukan
    // if (!product) {
    //   return res.status(404).json({
    //     success: false,
    //     message: 'Product not found'
    //   });
    // }
    // TODO: Return response
    // res.status(200).json({
    //   success: true,
    //   message: 'Product deleted successfully',
    //   data: {}
    // });
  } catch (error) {
    next(error);
  }
};

