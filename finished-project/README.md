# ✅ Finished Project - Health E-Commerce API

## 📝 Deskripsi

Ini adalah **finished project** yang berisi implementasi lengkap dari Health E-Commerce API. Project ini bisa digunakan sebagai referensi untuk membandingkan hasil pengerjaan kamu dengan solusi yang benar.

## 🎯 Fitur Lengkap

Project ini mengimplementasikan:

- ✅ **RESTful API** dengan 5 endpoint CRUD
- ✅ **MongoDB Integration** dengan Mongoose ODM
- ✅ **Filtering & Search** produk berdasarkan kategori, harga, dan keyword
- ✅ **Error Handling** yang comprehensive
- ✅ **Request Logging** dengan Morgan
- ✅ **Input Validation** dengan Mongoose schema validation
- ✅ **Environment Configuration** dengan dotenv
- ✅ **Database Seeding** untuk data sample

## 📂 Struktur Project

```
finished-project/
├── config/
│   └── database.js         # Konfigurasi MongoDB
├── controllers/
│   └── productController.js # Business logic (COMPLETED)
├── models/
│   └── Product.js          # Schema produk
├── routes/
│   └── productRoutes.js    # Routing (COMPLETED)
├── middleware/
│   ├── errorHandler.js     # Error handling
│   └── logger.js           # Request logging
├── scripts/
│   └── seed.js            # Database seeding
├── .env.example           # Template environment variables
├── .gitignore
├── server.js              # Entry point (COMPLETED)
├── package.json
└── README.md
```

## 🔧 Setup & Instalasi

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Setup Environment Variables

Copy file `.env.example` menjadi `.env`:

```bash
# Windows PowerShell
Copy-Item .env.example .env

# Mac/Linux
cp .env.example .env
```

Edit file `.env` sesuai konfigurasi:

```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/health-ecommerce
```

### 3️⃣ Start MongoDB

```bash
# Windows (MongoDB service)
net start MongoDB

# Mac (Homebrew)
brew services start mongodb-community

# Linux
sudo systemctl start mongod

# Atau jalankan langsung
mongod
```

### 4️⃣ Seed Database

```bash
npm run seed
```

**Output yang diharapkan:**

```
✅ MongoDB connected successfully
🗑️  Existing products deleted
✅ 10 sample products inserted

📋 Sample Product IDs:
   - Vitamin C 1000mg: 507f1f77bcf86cd799439011
   - Vitamin D3 2000 IU: 507f191e810c19729de860ea
   - Omega-3 Fish Oil: 507f191e810c19729de860eb

🎉 Database seeded successfully!
```

### 5️⃣ Start Server

```bash
# Development mode (dengan auto-reload)
npm run dev

# Production mode
npm start
```

**Output yang diharapkan:**

```
✅ MongoDB connected successfully

  ╔════════════════════════════════════════╗
  ║  🚀 Server running on port 3000       ║
  ║  🏥 Health: http://localhost:3000/health     ║
  ╚════════════════════════════════════════╝
```

## 📡 API Endpoints

### 1️⃣ Health Check

```http
GET /health
```

**Response:**

```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-03-20T10:30:00.000Z"
}
```

### 2️⃣ Get All Products

```http
GET /api/products
```

**Query Parameters (Optional):**

- `category`: Filter by category (Vitamin, Supplement, Medical Equipment, Medicine, Other)
- `minPrice`: Minimum price
- `maxPrice`: Maximum price
- `search`: Search by name or description

**Examples:**

```bash
# Get all products
curl http://localhost:3000/api/products

# Filter by category
curl http://localhost:3000/api/products?category=Vitamin

# Filter by price range
curl http://localhost:3000/api/products?minPrice=50000&maxPrice=150000

# Search
curl http://localhost:3000/api/products?search=vitamin

# Combined filters
curl http://localhost:3000/api/products?category=Vitamin&maxPrice=100000
```

**Response:**

```json
{
  "success": true,
  "count": 4,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Vitamin C 1000mg",
      "description": "Suplemen vitamin C untuk meningkatkan daya tahan tubuh",
      "category": "Vitamin",
      "price": 85000,
      "stock": 50,
      "imageUrl": "/images/vitamin-c.jpg",
      "manufacturer": "PT Sehat Sejahtera",
      "isActive": true,
      "createdAt": "2024-03-20T10:00:00.000Z",
      "updatedAt": "2024-03-20T10:00:00.000Z"
    }
  ]
}
```

### 3️⃣ Get Product by ID

```http
GET /api/products/:id
```

**Example:**

```bash
curl http://localhost:3000/api/products/507f1f77bcf86cd799439011
```

**Response:**

```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Vitamin C 1000mg",
    "description": "Suplemen vitamin C untuk meningkatkan daya tahan tubuh",
    "category": "Vitamin",
    "price": 85000,
    "stock": 50,
    "imageUrl": "/images/vitamin-c.jpg",
    "manufacturer": "PT Sehat Sejahtera",
    "isActive": true,
    "createdAt": "2024-03-20T10:00:00.000Z",
    "updatedAt": "2024-03-20T10:00:00.000Z"
  }
}
```

**Error Response (404):**

```json
{
  "success": false,
  "message": "Product not found"
}
```

### 4️⃣ Create Product

```http
POST /api/products
Content-Type: application/json
```

**Request Body:**

```json
{
  "name": "Zinc Supplement 50mg",
  "description": "Suplemen zinc untuk sistem kekebalan tubuh",
  "category": "Supplement",
  "price": 75000,
  "stock": 40,
  "manufacturer": "PT Mineral Health",
  "imageUrl": "/images/zinc.jpg"
}
```

**Example:**

```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Zinc Supplement 50mg",
    "description": "Suplemen zinc untuk sistem kekebalan tubuh",
    "category": "Supplement",
    "price": 75000,
    "stock": 40,
    "manufacturer": "PT Mineral Health"
  }'
```

**Response (201):**

```json
{
  "success": true,
  "message": "Product created successfully",
  "data": {
    "_id": "507f191e810c19729de860ea",
    "name": "Zinc Supplement 50mg",
    "description": "Suplemen zinc untuk sistem kekebalan tubuh",
    "category": "Supplement",
    "price": 75000,
    "stock": 40,
    "manufacturer": "PT Mineral Health",
    "imageUrl": "/images/default-product.jpg",
    "isActive": true,
    "createdAt": "2024-03-20T10:30:00.000Z",
    "updatedAt": "2024-03-20T10:30:00.000Z"
  }
}
```

**Error Response (400):**

```json
{
  "success": false,
  "message": "Product name is required, Price is required"
}
```

### 5️⃣ Update Product

```http
PUT /api/products/:id
Content-Type: application/json
```

**Request Body (partial update):**

```json
{
  "price": 95000,
  "stock": 45
}
```

**Example:**

```bash
curl -X PUT http://localhost:3000/api/products/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{"price": 95000, "stock": 45}'
```

**Response (200):**

```json
{
  "success": true,
  "message": "Product updated successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Vitamin C 1000mg",
    "description": "Suplemen vitamin C untuk meningkatkan daya tahan tubuh",
    "category": "Vitamin",
    "price": 95000,
    "stock": 45,
    "imageUrl": "/images/vitamin-c.jpg",
    "manufacturer": "PT Sehat Sejahtera",
    "isActive": true,
    "createdAt": "2024-03-20T10:00:00.000Z",
    "updatedAt": "2024-03-20T10:35:00.000Z"
  }
}
```

### 6️⃣ Delete Product

```http
DELETE /api/products/:id
```

**Example:**

```bash
curl -X DELETE http://localhost:3000/api/products/507f1f77bcf86cd799439011
```

**Response (200):**

```json
{
  "success": true,
  "message": "Product deleted successfully",
  "data": {}
}
```

**Error Response (404):**

```json
{
  "success": false,
  "message": "Product not found"
}
```

## 🧪 Testing dengan Postman

### Import Collection

1. Buka Postman
2. Click **Import**
3. Pilih file `Health-Ecommerce-API.postman_collection.json`
4. Collection akan muncul di sidebar

### Setup Environment

1. Click **Environments** di sidebar
2. Create new environment: **Development**
3. Add variables:
   - `base_url`: `http://localhost:3000`
   - `product_id`: (akan diisi saat testing)

### Test Flow

1. **Test Health Check** - Pastikan server berjalan
2. **Get All Products** - Lihat data sample
3. **Create Product** - Buat produk baru, save ID-nya
4. **Get Product by ID** - Test dengan ID yang baru dibuat
5. **Update Product** - Update data produk
6. **Get Product by ID** - Verify perubahan
7. **Delete Product** - Hapus produk
8. **Get Product by ID** - Verify sudah terhapus (404)

## 🔍 Perbedaan dengan Starter Project

| Aspek                              | Starter Project               | Finished Project                     |
| ---------------------------------- | ----------------------------- | ------------------------------------ |
| `server.js`                        | Berisi TODO, perlu dilengkapi | Implementasi lengkap                 |
| `routes/productRoutes.js`          | Berisi TODO, perlu dilengkapi | 5 routes lengkap                     |
| `controllers/productController.js` | Berisi TODO, perlu dilengkapi | 5 functions lengkap dengan filtering |
| File lainnya                       | Sudah lengkap                 | Sama, sudah lengkap                  |

## 💡 Konsep yang Diimplementasikan

### 1️⃣ Express Middleware Chain

```javascript
Request
  → cors()
  → express.json()
  → logger
  → routes
  → errorHandler
  → Response
```

### 2️⃣ MVC Pattern

```
Models (Product.js)
   ↓
Controllers (productController.js)
   ↓
Routes (productRoutes.js)
   ↓
Server (server.js)
```

### 3️⃣ Error Handling Flow

```javascript
try {
  // Business logic
} catch (error) {
  next(error); // Forward ke error handler middleware
}
```

### 4️⃣ Query Building

```javascript
let query = { isActive: true };

if (category) query.category = category;
if (minPrice) query.price = { ...query.price, $gte: minPrice };

const products = await Product.find(query);
```

## 🐛 Troubleshooting

### Server tidak mau start

**Error:** `Error: listen EADDRINUSE: address already in use :::3000`

**Solusi:**

```bash
# Windows - Kill process di port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9

# Atau ganti PORT di .env
PORT=3001
```

### MongoDB connection error

**Error:** `MongooseServerSelectionError: connect ECONNREFUSED`

**Solusi:**

- Pastikan MongoDB service berjalan
- Check MONGODB_URI di `.env`
- Test connection: `mongosh` atau `mongo`

### Validation error saat create product

**Error:** `ValidationError: category: is not a valid enum value`

**Solusi:**

- Check category value harus salah satu dari: Vitamin, Supplement, Medical Equipment, Medicine, Other
- Check case sensitivity (harus exact match)

## 📊 Performance Tips

### 1️⃣ Database Indexing

Schema sudah include text index untuk search:

```javascript
productSchema.index({ name: "text", description: "text" });
```

### 2️⃣ Query Optimization

Batasi jumlah hasil:

```javascript
.limit(50)
```

Sort efisien dengan index:

```javascript
.sort({ createdAt: -1 })
```

### 3️⃣ Lean Queries

Untuk read-only operations:

```javascript
await Product.find().lean();
```

## 🚀 Next Steps

Setelah memahami finished project ini:

1. **Compare dengan starter project** - Lihat perbedaannya
2. **Modifikasi dan eksperimen** - Tambah fitur baru
3. **Lanjut ke Modul 4** - Authentication & Security
4. **Deploy ke production** - Heroku, Vercel, atau Railway

## 📚 Pembelajaran Kunci

Dari finished project ini, kamu belajar:

- ✅ Struktur project Express.js yang baik
- ✅ Separation of concerns (MVC pattern)
- ✅ RESTful API best practices
- ✅ Error handling yang proper
- ✅ Database operations dengan Mongoose
- ✅ Query building dan filtering
- ✅ Middleware usage
- ✅ Environment configuration

## 🎓 Challenge

Coba tambahkan fitur-fitur ini sendiri:

1. **Pagination** - Limit hasil per page
2. **Sorting** - Sort by price, name, date
3. **Field Selection** - Return hanya field tertentu
4. **Soft Delete** - Set isActive = false instead of delete
5. **Bulk Operations** - Create/update/delete multiple products
6. **Product Reviews** - Relasi dengan model Review
7. **Image Upload** - Handle file upload untuk product image

---

**🎉 Selamat! Project ini merupakan referensi lengkap implementasi REST API dengan Express.js**

Gunakan project ini sebagai template untuk project-project selanjutnya.

Happy Coding! 💻🚀


