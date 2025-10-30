# 🏁 Starter Project - Health E-Commerce API

## 📝 Deskripsi

Ini adalah **starter project** untuk pembelajaran Backend Development dengan Express.js. Project ini berisi struktur dasar aplikasi dengan beberapa bagian yang perlu kamu lengkapi sendiri sebagai latihan.

## 🎯 Tujuan

Dengan mengerjakan starter project ini, kamu akan:

1. ✅ Memahami struktur project Express.js
2. ✅ Membuat routes dan middleware sendiri
3. ✅ Mengimplementasikan CRUD operations
4. ✅ Menangani error dengan baik
5. ✅ Testing API dengan Postman

## 📂 Struktur Folder

```
starter-project/
├── config/
│   └── database.js         # ✅ Sudah lengkap - Konfigurasi MongoDB
├── controllers/
│   └── productController.js # ⚠️ PERLU DILENGKAPI
├── models/
│   └── Product.js          # ✅ Sudah lengkap - Schema produk
├── routes/
│   └── productRoutes.js    # ⚠️ PERLU DILENGKAPI
├── middleware/
│   ├── errorHandler.js     # ✅ Sudah lengkap
│   └── logger.js           # ✅ Sudah lengkap
├── scripts/
│   └── seed.js            # ✅ Sudah lengkap - Data sample
├── .env.example           # ✅ Template environment variables
├── server.js              # ⚠️ PERLU DILENGKAPI
├── package.json           # ✅ Sudah lengkap
└── README.md              # Ini file yang sedang kamu baca
```

## 🔧 Setup & Instalasi

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Setup Environment Variables

Copy file `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Edit file `.env` sesuai dengan konfigurasi lokal kamu:

```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/health-ecommerce
```

### 3️⃣ Start MongoDB

Pastikan MongoDB berjalan di komputer kamu:

```bash
# Windows (jika MongoDB sudah diinstall)
mongod

# Mac (dengan Homebrew)
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

### 4️⃣ Seed Database

Isi database dengan data sample:

```bash
npm run seed
```

### 5️⃣ Start Development Server

```bash
npm run dev
```

Server akan berjalan di `http://localhost:3000`

## 📝 Tugas yang Perlu Dikerjakan

### ⚠️ 1. Lengkapi `server.js`

File `server.js` adalah entry point aplikasi. Kamu perlu:

- ✏️ Setup Express app
- ✏️ Connect ke database
- ✏️ Setup middleware (CORS, JSON parser, logger)
- ✏️ Mount routes
- ✏️ Setup error handler
- ✏️ Start server

**Hint:** Lihat contoh di finished-project untuk reference

### ⚠️ 2. Lengkapi `routes/productRoutes.js`

Buat routing untuk endpoint berikut:

- `GET /` - Get all products
- `GET /:id` - Get product by ID
- `POST /` - Create new product
- `PUT /:id` - Update product
- `DELETE /:id` - Delete product

**Hint:** Gunakan `express.Router()`

### ⚠️ 3. Lengkapi `controllers/productController.js`

Implementasikan fungsi-fungsi berikut:

#### `getAllProducts(req, res, next)`

- Ambil semua produk dari database
- Support query parameters: `category`, `minPrice`, `maxPrice`, `search`
- Return format:
  ```json
  {
    "success": true,
    "count": 10,
    "data": [...]
  }
  ```

#### `getProductById(req, res, next)`

- Ambil produk berdasarkan ID
- Jika tidak ditemukan, return 404
- Return format:
  ```json
  {
    "success": true,
    "data": {...}
  }
  ```

#### `createProduct(req, res, next)`

- Buat produk baru
- Return status 201
- Return format:
  ```json
  {
    "success": true,
    "message": "Product created successfully",
    "data": {...}
  }
  ```

#### `updateProduct(req, res, next)`

- Update produk berdasarkan ID
- Jika tidak ditemukan, return 404
- Jalankan validasi schema

#### `deleteProduct(req, res, next)`

- Hapus produk berdasarkan ID
- Jika tidak ditemukan, return 404

**Hint:** Gunakan try-catch dan `next(error)` untuk error handling

## ✅ Checklist Pengerjaan

Gunakan checklist ini untuk memastikan kamu sudah menyelesaikan semua tugas:

### Setup

- [ ] Install semua dependencies
- [ ] Copy dan edit file `.env`
- [ ] MongoDB berjalan
- [ ] Database seeded dengan data sample

### Kode

- [ ] `server.js` lengkap dan bisa dijalankan
- [ ] `productRoutes.js` memiliki 5 routes
- [ ] `getAllProducts` controller berfungsi
- [ ] `getProductById` controller berfungsi
- [ ] `createProduct` controller berfungsi
- [ ] `updateProduct` controller berfungsi
- [ ] `deleteProduct` controller berfungsi

### Testing

- [ ] Server bisa dijalankan tanpa error
- [ ] GET `/api/products` return list produk
- [ ] GET `/api/products/:id` return satu produk
- [ ] POST `/api/products` bisa create produk baru
- [ ] PUT `/api/products/:id` bisa update produk
- [ ] DELETE `/api/products/:id` bisa delete produk
- [ ] Error handling berfungsi (test dengan ID tidak valid)

### Bonus

- [ ] Filter by category berfungsi
- [ ] Filter by price range berfungsi
- [ ] Search by name berfungsi
- [ ] Pagination implemented

## 🧪 Testing API

### Menggunakan Postman

1. Import collection dari file `postman_collection.json`
2. Setup environment dengan base URL: `http://localhost:3000`
3. Test semua endpoint satu per satu

### Menggunakan cURL

**Get All Products:**

```bash
curl http://localhost:3000/api/products
```

**Get Product by ID:**

```bash
curl http://localhost:3000/api/products/PRODUCT_ID
```

**Create Product:**

```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Product",
    "description": "Test description",
    "category": "Vitamin",
    "price": 50000,
    "stock": 20,
    "manufacturer": "Test Manufacturer"
  }'
```

**Update Product:**

```bash
curl -X PUT http://localhost:3000/api/products/PRODUCT_ID \
  -H "Content-Type: application/json" \
  -d '{
    "price": 60000,
    "stock": 25
  }'
```

**Delete Product:**

```bash
curl -X DELETE http://localhost:3000/api/products/PRODUCT_ID
```

## 🐛 Troubleshooting

### Error: "Cannot find module 'express'"

**Solusi:** Jalankan `npm install` untuk install dependencies

### Error: "MongooseServerSelectionError"

**Solusi:** Pastikan MongoDB sudah berjalan dengan command `mongod`

### Error: "Port 3000 already in use"

**Solusi:**

- Ganti PORT di file `.env`
- Atau stop proses yang menggunakan port 3000

### Error: "Cannot find module './config/database'"

**Solusi:** Pastikan struktur folder sudah benar dan semua file ada

## 💡 Tips

1. **Pahami konsep REST API** - Pelajari tentang HTTP methods, status codes, dan best practices
2. **Kerjakan step by step** - Jangan skip langkah
3. **Test setiap perubahan** - Setiap kali menambah kode, test apakah berfungsi
4. **Lihat console/terminal** - Error message memberikan petunjuk masalah
5. **Gunakan Postman** - Lebih mudah untuk testing daripada cURL
6. **Commit progress** - Commit setiap kali selesai satu fitur

## 🔗 Referensi

- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Postman Learning Center](https://learning.postman.com/)

## 🆘 Butuh Bantuan?

Jika kamu stuck:

1. **Check error message** di console/terminal - Error message kasih petunjuk masalahnya
2. **Compare dengan finished-project** - Lihat reference implementation (tapi jangan langsung copy!)
3. **Debug step by step** - Gunakan `console.log()` untuk trace alur program
4. **Test incremental** - Test setiap function satu per satu, jangan sekaligus
5. **Tanya mentor/instruktur** - Jangan ragu bertanya kalau stuck

## 🎯 Tujuan Akhir

Setelah menyelesaikan starter project ini, kamu harus bisa:

- ✅ Menjalankan server Express.js
- ✅ Membuat REST API dengan CRUD operations
- ✅ Menghubungkan Express dengan MongoDB
- ✅ Testing API dengan Postman
- ✅ Handle errors dengan baik

**Selamat mengerjakan! 🚀**

Jika project kamu sudah berfungsi dengan baik, compare dengan `finished-project` untuk melihat implementasi lengkapnya.
