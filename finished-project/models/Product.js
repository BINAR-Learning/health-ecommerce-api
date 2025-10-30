const mongoose = require('mongoose');

/**
 * Product Schema
 * File ini sudah lengkap - tidak perlu dimodifikasi
 */
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Vitamin', 'Supplement', 'Medical Equipment', 'Medicine', 'Other']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be positive']
  },
  stock: {
    type: Number,
    required: [true, 'Stock is required'],
    min: [0, 'Stock cannot be negative'],
    default: 0
  },
  imageUrl: {
    type: String,
    default: '/images/default-product.jpg'
  },
  manufacturer: {
    type: String,
    required: [true, 'Manufacturer is required']
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index untuk pencarian yang lebih cepat
productSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Product', productSchema);

