# health-ecommerce-api

> **RESTful Backend API dengan Express.js untuk Health E-Commerce**

[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-brightgreen)](https://www.mongodb.com/)
[![Swagger](https://img.shields.io/badge/Swagger-OpenAPI_3.0-green)](https://swagger.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

Complete REST API backend untuk Health E-Commerce dengan CRUD operations, middleware system, error handling, dan API documentation.

---

## Apa yang Ada di Repository Ini?

Repository ini berisi **2 versi project**:

```
health-ecommerce-api/
├── README.md (Ini file yang kamu baca)
├── Health-Ecommerce-API.postman_collection.json  # Postman tests
├── swagger.yaml                                    # API documentation
├── starter-project/     # Untuk practice (dengan TODO)
│   ├── README.md
│   ├── package.json
│   ├── server.js (with TODOs)
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── scripts/
└── finished-project/    # Complete REST API
    ├── README.md
    ├── package.json
    ├── server.js (complete)
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    └── scripts/
```

**Pilih mana?**

- **Starter** - Untuk **belajar dengan practice** (RECOMMENDED!)
- **Finished** - Untuk **reference** saat stuck

---

## Quick Start (Untuk Newbie)

### Option 1: Practice dengan Starter Project

```bash
# 1. Clone repository ini
git clone https://github.com/your-username/health-ecommerce-api.git

# 2. Masuk ke folder repository
cd health-ecommerce-api

# 3. Masuk ke starter-project
cd starter-project

# 4. Install dependencies
npm install

# 5. Copy .env.example jadi .env
cp .env.example .env
# Windows: Copy-Item .env.example .env

# 6. Edit .env dengan text editor
# Set MONGODB_URI dan JWT_SECRET

# 7. Start MongoDB
mongod

# 8. Seed database (isi dengan sample products)
npm run seed

# 9. Start server
npm run dev

# Server running di http://localhost:3000
```

### Option 2: Lihat Complete Implementation

```bash
# 1. Clone repository (jika belum)
git clone https://github.com/your-username/health-ecommerce-api.git

# 2. Masuk ke folder repository
cd health-ecommerce-api

# 3. Masuk ke finished-project
cd finished-project

# 4. Install dependencies
npm install

# 5. Setup .env
cp .env.example .env
# Edit dengan MongoDB URI

# 6. Start MongoDB
mongod

# 7. Seed database
npm run seed

# 8. Start server
npm run dev

# API complete dengan 6 endpoints ready!
```

---

## Apa yang Akan Kamu Pelajari?

**Modul 3** melanjutkan dari Modul 2 (Database) dengan membangun REST API!

### Konsep yang Dipelajari:

- **REST API Principles** - Stateless, Resource-based, HTTP methods
- **Express.js** - Routing, middleware, error handling
- **CRUD Operations** - Create, Read, Update, Delete dengan MongoDB
- **API Testing** - Postman collections dengan automated tests
- **API Documentation** - OpenAPI/Swagger interactive docs

### Apa yang Dibangun:

- **6 REST Endpoints** untuk product management
- **Middleware chain** (CORS, logging, error handling)
- **Postman collection** dengan 13 requests
- **Swagger documentation** untuk API contract

**Output:** Production-ready REST API yang siap dikonsumsi frontend!

---

## Struktur Starter Project

```
starter-project/
├── README.md              # Setup guide
├── package.json           # Dependencies
├── server.js             # TODO: Server setup
├── config/
│   └── database.js       # MongoDB connection (ready!)
├── controllers/
│   └── productController.js  # TODO: Business logic
├── middleware/
│   ├── errorHandler.js   # Error handler (ready!)
│   └── logger.js         # Request logger (ready!)
├── models/
│   └── Product.js        # Mongoose schema (ready!)
├── routes/
│   └── productRoutes.js  # TODO: Route definitions
└── scripts/
    └── seed.js           # Database seeding (ready!)
```

**TODOs:**

- [ ] `server.js` - Setup Express app, mount routes
- [ ] `routes/productRoutes.js` - Define 5 CRUD routes
- [ ] `controllers/productController.js` - Implement 5 controller functions

---

## Struktur Finished Project

```
finished-project/
├── README.md              # Setup + explanations
├── package.json           # Dependencies
├── server.js             # Complete Express server
├── config/
│   └── database.js       # MongoDB connection
├── controllers/
│   └── productController.js  # All 5 functions (with filtering!)
├── middleware/
│   ├── errorHandler.js   # Global error handler
│   └── logger.js         # Morgan logger
├── models/
│   └── Product.js        # Product schema with validations
├── routes/
│   └── productRoutes.js  # All 5 routes mounted
└── scripts/
    └── seed.js           # Seeds 10 sample products
```

**All implemented:**

- 6 endpoints (health + 5 CRUD)
- Filtering, sorting, searching
- Error handling with custom classes
- Request logging with Morgan
- Postman collection
- Swagger documentation

---

## API Endpoints

### Available Endpoints:

```
GET    /health              # Health check
GET    /api/products        # Get all products (with filters)
GET    /api/products/:id    # Get product by ID
POST   /api/products        # Create new product
PUT    /api/products/:id    # Update product
DELETE /api/products/:id    # Delete product
```

### Query Parameters (for GET /api/products):

- `category` - Filter by category (Vitamin, Supplement, etc)
- `minPrice` - Minimum price filter
- `maxPrice` - Maximum price filter
- `search` - Search in name/description

**Example:**

```bash
GET /api/products?category=Vitamin&minPrice=50000&maxPrice=150000
```

---

## Testing

### Import Postman Collection

```bash
# File sudah ada di root repository!
# Import: Health-Ecommerce-API.postman_collection.json ke Postman
```

**Collection includes:**

- 13 pre-configured requests
- Automated test scripts
- Environment variables setup

### Test dengan curl:

```bash
# 1. Health check
curl http://localhost:3000/health

# 2. Get all products
curl http://localhost:3000/api/products

# 3. Create product
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Vitamin C 1000mg",
    "description": "Suplemen untuk daya tahan tubuh",
    "category": "Vitamin",
    "price": 85000,
    "stock": 50,
    "manufacturer": "PT Aiman"
  }'
```

---

## API Documentation

**Swagger UI available at:**

```
http://localhost:3000/api-docs
```

Try API endpoints directly dari browser dengan Swagger interactive UI!

File: `swagger.yaml` (OpenAPI 3.0 specification)

---

## Hubungan dengan Modul Lain

**Dari Modul 1 (OOP):**

- Service layer pattern
- Async/await untuk database operations

**Dari Modul 2 (Database):**

- Product model dengan Mongoose
- Database connection
- CRUD operations

**Modul 3 (This!)** - Builds REST API

- Express server setup
- Routing & middleware
- Error handling & logging
- API testing & documentation

**Ke Modul 4 (Auth):**

- Routes akan di-protect dengan JWT
- Admin-only endpoints
- Security middleware

**Ke Modul 5 (Integration):**

- API extended dengan AI chatbot
- Payment gateway integration
- External services

**One Health E-Commerce system, built progressively!**

---

## Troubleshooting

### "Cannot find module 'express'"

**Solusi:**

```bash
npm install
```

### "MongoDB connection failed"

**Solusi:**

```bash
# Check MongoDB running
mongosh

# If not running:
# Windows: Services → Start MongoDB
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod
```

### "Port 3000 already in use"

**Solusi:**

```bash
# Option 1: Stop other server
# Option 2: Change port in .env
PORT=3001
```

### "Validation error"

**Solusi:**

- Check required fields (name, category, price, stock, manufacturer)
- Verify data types (price & stock must be numbers)
- Check category enum (Vitamin, Supplement, Medicine, Medical Equipment, Other)

---

## Tips Sukses

1. **Start dengan starter** - Practice makes perfect
2. **Test incremental** - Test each endpoint after creating
3. **Use Postman** - Organize tests in collections
4. **Check logs** - Morgan shows all requests
5. **Read error messages** - They tell you what's wrong
6. **Compare when stuck** - Check finished-project
7. **Understand, don't copy** - Type code yourself

---

## Resources

**Documentation:**

- [Express.js Guide](https://expressjs.com/)
- [Mongoose Docs](https://mongoosejs.com/)
- [Postman Learning](https://learning.postman.com/)
- [Swagger Specification](https://swagger.io/specification/)

**Tools:**

- [Postman](https://www.postman.com/) - API testing
- [MongoDB Compass](https://www.mongodb.com/products/compass) - Database GUI
- [Swagger Editor](https://editor.swagger.io/) - Edit swagger.yaml

---

## Next Steps

After completing this module:

1. **Test all 6 endpoints** dengan Postman
2. **Review Swagger docs** di /api-docs
3. **Modul 4** - Add authentication & security
4. **Modul 5** - External integrations (AI, Payment)

---

**Happy Coding!**

_Modul 3 - REST API dengan Express.js_  
_Part of Health E-Commerce Backend Series_

---

**Repository Info:**

- **Name:** `health-ecommerce-api`
- **Type:** REST API Backend
- **Structure:** 1 Repo, 2 Folders (starter + finished)
