const mongoose = require("mongoose");

/**
 * Fungsi untuk koneksi ke MongoDB
 * File ini sudah lengkap - tidak perlu dimodifikasi
 */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" MongoDB connected successfully");
  } catch (error) {
    console.error(" MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
