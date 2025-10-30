/**
 * ⚠️ FILE INI PERLU DILENGKAPI
 *
 * Health E-Commerce API Server
 * Entry point untuk aplikasi Express.js
 *
 * Tugas:
 * 1. Load environment variables
 * 2. Import dependencies yang diperlukan
 * 3. Setup Express app
 * 4. Connect ke database
 * 5. Setup middleware (CORS, JSON parser, logger)
 * 6. Mount routes
 * 7. Setup error handler
 * 8. Start server
 */

// TODO: Load environment variables
// Hint: require('dotenv').config();

// TODO: Import Express
// Hint: const express = require('express');

// TODO: Import dependencies lainnya
// - cors
// - connectDB dari './config/database'
// - productRoutes dari './routes/productRoutes'
// - errorHandler dari './middleware/errorHandler'
// - devLogger dari './middleware/logger'

// TODO: Initialize Express app
// Hint: const app = express();

// TODO: Connect to database
// Hint: connectDB();

// ==========================================
// MIDDLEWARE SETUP
// ==========================================

// TODO: Setup middleware
// 1. app.use(cors());
// 2. app.use(express.json());
// 3. app.use(express.urlencoded({ extended: true }));
// 4. app.use(devLogger);

// ==========================================
// ROUTES
// ==========================================

// TODO: Mount product routes
// Hint: app.use('/api/products', productRoutes);

// TODO: Health check endpoint
// Buat endpoint GET /health yang return:
// {
//   "success": true,
//   "message": "Server is running",
//   "timestamp": <current timestamp>
// }

// TODO: 404 handler untuk route yang tidak ditemukan
// Hint: app.use((req, res) => { ... });

// ==========================================
// ERROR HANDLING
// ==========================================

// TODO: Setup error handling middleware
// Hint: app.use(errorHandler);

// ==========================================
// START SERVER
// ==========================================

// TODO: Start server
// 1. Ambil PORT dari environment variable atau gunakan 3000
// 2. Listen pada PORT tersebut
// 3. Log message yang informatif ketika server berjalan

/* Expected output:
  ╔════════════════════════════════════════╗
  ║  🚀 Server running on port 3000       ║
  ║  🏥 Health: http://localhost:3000/health     ║
  ╚════════════════════════════════════════╝
*/

// TODO: Handle unhandled promise rejections
// Hint: process.on('unhandledRejection', (err) => { ... });

