/**
 * Health E-Commerce API Server
 * Entry point untuk aplikasi Express.js
 */

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const connectDB = require("./config/database");
const productRoutes = require("./routes/productRoutes");
const { errorHandler } = require("./middleware/errorHandler");
const { devLogger } = require("./middleware/logger");

// Initialize Express app
const app = express();

// Connect to database
connectDB();

// ==========================================
// MIDDLEWARE SETUP
// ==========================================

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON body
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded body
app.use(devLogger); // Request logging

// ==========================================
// SWAGGER UI (API Documentation)
// ==========================================
// Load swagger.yaml from project root (one level up from finished-project)
try {
  const swaggerPath = path.join(__dirname, "..", "swagger.yaml");
  const swaggerDocument = YAML.load(swaggerPath);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  console.log(
    ` Swagger UI available at /api-docs (loaded from ${swaggerPath})`
  );
} catch (err) {
  console.warn(
    "  Could not load swagger.yaml for Swagger UI:",
    err.message || err
  );
}

// ==========================================
// ROUTES
// ==========================================

app.use("/api/products", productRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ==========================================
// ERROR HANDLING
// ==========================================

app.use(errorHandler);

// ==========================================
// START SERVER
// ==========================================

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`
  ╔════════════════════════════════════════╗
  ║   Server running on port ${PORT}       ║
  ║   Health: http://localhost:${PORT}/health     ║
  ╚════════════════════════════════════════╝
  `);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error(" Unhandled Promise Rejection:", err);
  process.exit(1);
});
