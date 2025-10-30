const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

/**
 * Request Logger Middleware
 * File ini sudah lengkap - tidak perlu dimodifikasi
 */

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, "../logs");
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Create write stream untuk log file
const accessLogStream = fs.createWriteStream(path.join(logsDir, "access.log"), {
  flags: "a",
});

// Custom morgan format
morgan.token("timestamp", () => new Date().toISOString());

const logFormat = ":timestamp :method :url :status :response-time ms";

// Development logging (console)
const devLogger = morgan("dev");

// Production logging (file)
const prodLogger = morgan(logFormat, { stream: accessLogStream });

module.exports = { devLogger, prodLogger };


