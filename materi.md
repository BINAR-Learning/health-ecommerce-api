# Modul 3 – Backend Development dengan Express.js

**Unit Kompetensi:** J.620100.019.02 – Menggunakan Library atau Komponen Pre-Existing

---

## Perubahan dari Versi Sebelumnya

- **[Baru]** Vibe Coding sections di setiap subtopik utama untuk pengalaman hands-on
- **[Baru]** Challenge sections untuk latihan mandiri
- **[Baru]** Visual suggestions untuk ilustrator
- **[Revisi]** Bahasa lebih interaktif dan natural untuk fresh graduates
- **[Revisi]** Penjelasan konsep lebih elaboratif dengan contoh nyata
- **[Baru]** GIF placeholders dengan konteks yang jelas
- **[Baru]** Link repository starter dan finished project

**Alasan:** Agar modul lebih engaging, mudah dipahami pemula, dan siap untuk LMS.

---

## Daftar Isi

1. [Tentang GitHub Copilot di Modul Ini](#tentang-github-copilot-di-modul-ini)
2. [Pengantar Backend Development](#pengantar-backend-development)
3. [Prinsip Desain REST API](#prinsip-desain-rest-api)
4. [Express.js: Framework Backend](#expressjs-framework-backend)
5. [Routing dan Middleware](#routing-dan-middleware)
6. [CRUD API dengan MongoDB](#crud-api-dengan-mongodb)
7. [Error Handling & Logging](#error-handling--logging)
8. [Tutorial Postman](#tutorial-postman)
9. [API Contract dengan OpenAPI/Swagger](#api-contract-dengan-openapiswagger)
10. [Mini Project: Health E-Commerce API](#mini-project-health-e-commerce-api)
11. [Ringkasan & Referensi](#ringkasan--referensi)
12. [Next Steps](#next-steps)

---

## Tujuan Pembelajaran

Halo! Selamat datang di Modul 3 tentang Backend Development dengan Express.js!

Di modul ini, kamu akan belajar membangun **backend server** yang keren untuk aplikasi web. Bayangin deh, kamu bisa bikin sistem yang bisa terima request dari frontend, ngolah data di database, terus kirim response balik. Seru kan?

Setelah menyelesaikan modul ini, kamu akan mampu:

- Memahami konsep dan prinsip REST API (API yang dipakai hampir semua aplikasi modern!)
- Membangun backend server dengan Express.js dari nol
- Membuat routing dan menggunakan middleware (jangan khawatir, ini lebih mudah dari kedengarannya!)
- Mengimplementasikan CRUD API dengan MongoDB (Create, Read, Update, Delete data)
- Menangani error dan logging dengan baik (supaya aplikasi kamu profesional)
- Menggunakan Postman untuk testing API (tools wajib punya developer!)
- Mendokumentasikan API dengan OpenAPI/Swagger (biar tim lain paham API kamu)

** Level:** Intermediate (tapi tenang, kita mulai dari dasar kok!)

---

## Tentang GitHub Copilot di Modul Ini

Di modul ini, kamu akan belajar coding **bareng GitHub Copilot** - AI assistant untuk developer!

**Apa itu GitHub Copilot?**

GitHub Copilot adalah AI yang bisa bantu kamu nulis code. Cukup ketik **comment** (yang dimulai dengan `//`), dan Copilot akan suggest kode yang sesuai!

**Contoh Sederhana:**

Aiman ketik:

```javascript
// Buat function untuk calculate total price with tax 10%
```

GitHub Copilot suggest:

```javascript
function calculateTotalPrice(price) {
  const tax = price * 0.1;
  return price + tax;
}
```

Keren kan?

**Kapan Pakai Copilot, Kapan Manual?**

- **Pakai Copilot:** Boilerplate code, repetitive tasks, standard patterns
- **Manual Coding:** Business logic, custom validation, edge cases

**Di Modul Ini:**

Setiap subtopik ada sesi ** Vibe Coding** yang kasih contoh:

- Prompt apa yang harus kamu ketik ke Copilot
- Langkah-langkah coding manual yang perlu ditambah
- Review dan improve suggestion Copilot

**Note:** GitHub Copilot adalah **assistant**, bukan pengganti belajar! Selalu **pahami kode** yang di-suggest, jangan asal copy-paste.

**[Visual Suggestion untuk Ilustrator]**

- Screenshot VS Code dengan GitHub Copilot panel
- Tunjukkan: comment prompt → Copilot suggestion muncul (abu-abu) → press Tab untuk accept
- Highlight keyboard shortcut dan UI elements

---

## Pengantar Backend Development

### Apa Sih Backend Itu?

Kamu pasti sering buka Instagram, kan? Nah, waktu kamu scroll feed, like postingan, atau upload foto, itu semua butuh **backend** untuk bekerja di belakang layar.

**Backend** adalah bagian dari aplikasi web yang berjalan di **server** (komputer yang nyala 24/7 di internet). Kalau frontend itu yang kamu lihat dan klik-klik (tampilan website), backend itu yang ngatur semua logika dan data di belakangnya.

Backend bertanggung jawab untuk:

- **Mengelola data** → Nyimpen, ngambil, ngubah, dan hapus data di database
- **Autentikasi & otorisasi** → Ngecek siapa yang login dan boleh ngapain aja
- **Menyediakan API** → Jembatan komunikasi antara frontend dan database
- **Business logic** → Aturan bisnis aplikasi (misal: ngitung diskon, validasi data)
- **Integrasi dengan layanan eksternal** → Konek ke payment gateway, email service, dll

**Analogi sederhana:**

> Frontend = Pelayan restoran (yang berinteraksi dengan customer)  
> Backend = Dapur restoran (yang masak dan siapkan pesanan)  
> Database = Gudang bahan makanan

### Client-Server Architecture

Oke, sekarang kita bahas gimana cara kerja komunikasi antara **client** (frontend) dan **server** (backend).

![Arsitektur Client-Server]()
_Gambar ini menunjukkan alur komunikasi antara browser (client) dan server (backend). Client kirim HTTP Request, server proses dan kirim HTTP Response balik. Server juga berkomunikasi dengan Database untuk ambil atau simpan data._

**[Visual Suggestion untuk Ilustrator]**

- Gambar 3 kotak: Client (Browser/HP), Server (Backend), dan Database
- Panah dari Client ke Server dengan label "HTTP Request"
- Panah dari Server ke Client dengan label "HTTP Response"
- Panah dari Server ke Database dengan label "Query"
- Gunakan warna berbeda untuk setiap komponen
- Tambahkan ikon representatif (browser icon, server icon, database icon)

```
┌─────────────────┐          HTTP Request          ┌─────────────────┐
│                 │  ──────────────────────────>    │                 │
│     Client      │                                 │     Server      │
│    (Browser)    │  <──────────────────────────    │    (Backend)    │
│                 │          HTTP Response          │                 │
└─────────────────┘                                 └────────┬────────┘
                                                             │ Query
                                                             │
                                                             ▼
                                                    ┌─────────────────┐
                                                    │    Database     │
                                                    │    (MongoDB)    │
                                                    └─────────────────┘
```

**Gimana Prosesnya?**

Mari kita lihat dengan contoh percakapan Aiman (backend developer) dan Aila (frontend developer):

**1. Client (Frontend) kirim request:**

```
Aila (Frontend): "GET /api/products"
                 (Eh server, kasih saya daftar produk dong!)
```

**2. Server (Backend) terima request:**

```
Aiman (Backend): "Oke, tunggu ya... *query database*"
```

**3. Database kasih data:**

```
MongoDB: "Ini ada 10 produk vitamin dan supplement"
```

**4. Server kirim response:**

```
Aiman (Backend): "Nih datanya!"
                 (return JSON dengan 10 produk)
```

**5. Client tampilkan data:**

```
Aila (Frontend): "Mantap! Saya render jadi card produk di halaman"
```

Dan begitulah komunikasi client-server bekerja! Sederhana kan?

**Kenapa Harus Pakai Backend?**

Kenapa sih data nggak langsung dari database ke frontend aja? Karena:

- **Keamanan** → Kalau frontend langsung akses database, siapa aja bisa nge-hack
- **Business Logic** → Ada aturan bisnis yang harus dijalankan di server
- **Performa** → Backend bisa caching dan optimasi data sebelum dikirim
- **Integrasi** → Backend bisa konek ke banyak service (payment, email, dll)

### Kenapa Express.js?

Nah, untuk bikin backend dengan Node.js, kita butuh framework. Framework itu kayak "template" atau "toolkit" yang udah siapin berbagai tools supaya kita nggak harus bikin dari nol.

**Express.js** adalah framework web paling populer untuk Node.js! Kenapa?

- **Performa tinggi** → Cepat dan ringan, nggak berat
- **Middleware system** → Bisa tambahin fungsi-fungsi kayak LEGO
- **Routing** → Mudah bikin berbagai endpoint API
- **Ekosistem besar** → Banyak plugin dan library siap pakai
- **Dokumentasi lengkap** → Mudah dipelajari, komunitas aktif

**Fun Fact:** Express.js dipakai oleh perusahaan besar seperti Uber, IBM, dan Accenture!

---

## Prinsip Desain REST API

### Apa Itu REST?

**REST** (Representational State Transfer) adalah arsitektur atau "aturan main" untuk membangun web service. Bayangin REST ini seperti "tata bahasa" komunikasi antar aplikasi.

REST API menggunakan **HTTP methods** (verb/kata kerja) untuk operasi **CRUD** (Create, Read, Update, Delete).

**Apa itu CRUD?**

CRUD adalah 4 operasi dasar yang hampir selalu ada di aplikasi:

- **C**reate → Bikin data baru (misal: daftar akun baru)
- **R**ead → Baca/ambil data (misal: lihat daftar produk)
- **U**pdate → Ubah data yang udah ada (misal: edit profil)
- **D**elete → Hapus data (misal: hapus postingan)

**Mapping CRUD ke HTTP Methods:**

| HTTP Method | Operasi CRUD | Deskripsi                | Contoh                         |
| ----------- | ------------ | ------------------------ | ------------------------------ |
| **GET**     | Read         | Mengambil data           | `GET /products` (lihat semua)  |
| **POST**    | Create       | Membuat data baru        | `POST /products` (bikin baru)  |
| **PUT**     | Update       | Mengupdate seluruh data  | `PUT /products/123` (update)   |
| **PATCH**   | Update       | Mengupdate sebagian data | `PATCH /products/123`          |
| **DELETE**  | Delete       | Menghapus data           | `DELETE /products/123` (hapus) |

**[Visual Suggestion untuk Ilustrator]**

- Diagram visual menunjukkan 4 kotak CRUD dengan panah ke HTTP Methods
- Gunakan ikon representatif (tambah, lihat, edit, hapus)
- Warna berbeda untuk tiap operasi

### Prinsip REST API

REST API punya beberapa prinsip penting yang wajib kamu pahami:

#### Stateless (Tanpa Status)

**Maksudnya apa?**

Setiap request dari client ke server harus **mandiri** dan bawa semua informasi yang dibutuhkan. Server nggak nyimpen informasi client antar request.

**Analogi:**

> Bayangin kamu ke kasir restoran. Setiap kali kamu pesan, kamu harus sebutkan nomor meja kamu. Kasir nggak ngapalin nomor meja kamu dari pesanan sebelumnya.

**Contoh Salah (Stateful):**

```javascript
//  Salah - Server nyimpen state
let currentUser = null;

app.post("/login", (req, res) => {
  currentUser = req.body.username; // Nyimpen di variabel global
});

app.get("/profile", (req, res) => {
  res.json(currentUser); // Ambil dari variabel global
});
```

**Kenapa salah?** Kalau ada 1000 user login bersamaan, gimana? Variabel `currentUser` bakal ke-overwrite terus!

**Contoh Benar (Stateless):**

```javascript
//  Benar - Setiap request bawa token sendiri
app.get("/profile", authenticateToken, (req, res) => {
  // User info diambil dari token yang dikirim di setiap request
  res.json(req.user);
});
```

Setiap request bawa **token** (seperti ID card) yang nunjukin siapa mereka. Server tinggal baca token itu.

#### Uniform Interface (Interface yang Konsisten)

**Maksudnya apa?**

Endpoint API harus **konsisten** dan **intuitif**. Developer lain harus bisa nebak endpoint kamu tanpa baca dokumentasi panjang.

**Contoh Konsisten (RESTful):**

```javascript
//  Mudah dipahami
GET / products; // Ambil semua produk
GET / products / 123; // Ambil produk ID 123
POST / products; // Buat produk baru
PUT / products / 123; // Update produk ID 123
DELETE / products / 123; // Hapus produk ID 123
```

**Contoh Tidak Konsisten (Non-RESTful):**

```javascript
//  Membingungkan!
GET    /getAllProducts
GET    /getProduct?id=123
POST   /createNewProduct
POST   /updateProduct
POST   /deleteProduct
```

Lihat bedanya? Yang RESTful jauh lebih clean dan mudah dipahami!

#### Resource-Based (Berbasis Resource)

**Maksudnya apa?**

URL harus merepresentasikan **resource** (benda/objek), bukan **action** (aksi).

**Analogi:**

> URL itu seperti **alamat rumah** (noun), bukan **perintah** (verb).

**Contoh Benar (Resource-Based):**

```javascript
//  URL nunjukin "apa" (resource)
/users       // Resource: users
/products    // Resource: products
/orders      // Resource: orders
```

**Contoh Salah (Action-Based):**

```javascript
//  URL nunjukin "lakukan apa" (action)
/getUsers
/createProduct
/deleteOrder
```

**Tips:** Selalu gunakan **noun (kata benda)** di URL, bukan **verb (kata kerja)**!

#### HTTP Status Codes (Kode Status HTTP)

**Maksudnya apa?**

Setiap response harus pakai **status code** yang tepat supaya client paham hasilnya gimana.

**Status Code Wajib Kamu Tahu:**

| Status Code                   | Arti                 | Kapan Digunakan                    | Contoh              |
| ----------------------------- | -------------------- | ---------------------------------- | ------------------- |
| **200 OK**                    | Sukses               | Request berhasil                   | Berhasil ambil data |
| **201 Created**               | Dibuat               | Resource baru berhasil dibuat      | User baru dibuat    |
| **400 Bad Request**           | Request salah        | Validasi gagal, data nggak lengkap | Email nggak valid   |
| **401 Unauthorized**          | Tidak terautentikasi | Token hilang/salah                 | Belum login         |
| **403 Forbidden**             | Akses ditolak        | User nggak punya izin              | Bukan admin         |
| **404 Not Found**             | Tidak ditemukan      | Resource nggak ada                 | Produk nggak ada    |
| **500 Internal Server Error** | Error server         | Bug di backend                     | Database error      |

**[Visual Suggestion untuk Ilustrator]**

- Infografis status codes dengan ikon emoticon
- 2xx = senyum (sukses)
- 4xx = bingung (kesalahan client)
- 5xx = sedih (kesalahan server)

**Contoh Penggunaan:**

```javascript
//  Berhasil ambil data
res.status(200).json({ data: products });

//  Berhasil buat data baru
res.status(201).json({ message: "Product created!" });

//  Data nggak lengkap
res.status(400).json({ error: "Name is required" });

//  Produk nggak ditemukan
res.status(404).json({ error: "Product not found" });
```

**Tips:** Jangan semua response pakai 200! Pakai status code yang tepat supaya frontend bisa handle dengan benar.

---

## Express.js: Framework Backend

Oke, teori udah cukup! Sekarang waktunya hands-on dengan Express.js!

### Instalasi Express

**Step 1: Bikin Folder Project**

Buka terminal/command prompt, terus jalankan:

```bash
# Bikin folder baru
mkdir my-first-api
cd my-first-api

# Inisialisasi project Node.js
npm init -y
```

Perintah `npm init -y` akan bikin file `package.json` otomatis.

**Step 2: Install Express**

```bash
# Install Express
npm install express

# Install dependencies tambahan
npm install mongoose dotenv cors morgan

# Install Nodemon untuk development (auto-restart server)
npm install --save-dev nodemon
```

**Penjelasan Dependencies:**

Mari Aiman jelaskan satu per satu:

- `express` → Framework web untuk bikin API  
  _"Ini toolkit utama kita untuk bikin backend server"_
- `mongoose` → Library untuk konek ke MongoDB  
  _"Jembatan antara Express dan MongoDB, bikin query database lebih mudah"_
- `dotenv` → Baca environment variables dari file .env  
  _"Biar konfigurasi (password database, API key) nggak hardcoded di code"_
- `cors` → Izinkan frontend dari domain lain akses API kamu  
  _"Biar Aila yang develop frontend di localhost:3001 bisa akses API kita di localhost:3000"_
- `morgan` → Logger untuk lihat request yang masuk  
  _"Kayak CCTV, bisa lihat siapa aja yang akses API kita"_
- `nodemon` → Auto-restart server waktu ada perubahan code  
   _"Nggak perlu manual restart server terus-terusan, auto reload!"_

  **[GIF Placeholder]**
  _GIF ini menunjukkan proses instalasi Express di terminal: menjalankan npm init, npm install express, dan melihat folder node_modules yang muncul._

### Hello World dengan Express

Yuk bikin API pertama kamu! Ini akan jadi momen bersejarah loh!

Buat file baru namanya `server.js`:

```javascript
// server.js
const express = require("express");
const app = express();
const PORT = 3000;

// Route pertama kamu!
app.get("/", (req, res) => {
  res.send("Hello, World!  API ku jalan nih!");
});

// Jalankan server
app.listen(PORT, () => {
  console.log(` Server berjalan di http://localhost:${PORT}`);
  console.log(`Buka browser dan akses URL di atas!`);
});
```

**Penjelasan Code:**

1. `require("express")` → Import library Express
2. `express()` → Bikin aplikasi Express baru
3. `app.get("/", ...)` → Bikin route untuk handle GET request ke path "/"
4. `res.send(...)` → Kirim response ke client
5. `app.listen(3000, ...)` → Jalankan server di port 3000

**Jalankan Server:**

```bash
node server.js
```

**Buka browser dan akses:** `http://localhost:3000`

Kamu akan lihat: **"Hello, World! API ku jalan nih!"**

![Hello World Express]()
_Screenshot browser menampilkan "Hello, World!" setelah mengakses http://localhost:3000. Ini adalah API pertama kamu yang berhasil berjalan!_

** Selamat! Kamu baru aja bikin API pertama kamu!**

**Vibe Coding: Membuat Server Express Pertama (Bareng GitHub Copilot)**

** Tujuan:**  
Membuat server Express yang bisa menerima request dan mengirim response, dengan bantuan GitHub Copilot.

** Prompt untuk GitHub Copilot:**

```
// Buat Express server sederhana yang berjalan di port 3000
// dengan route GET / yang return "Hello World"
```

** Langkah-langkah Coding:**

1. **Buat file `server.js`** di folder project
2. **Ketik prompt di atas** (mulai dengan `//`) dan tunggu Copilot kasih suggestion
3. **Accept suggestion Copilot** atau ketik manual:

   ```javascript
   const express = require("express");
   const app = express();
   const PORT = 3000;

   app.get("/", (req, res) => {
     res.send("Hello, World! ");
   });

   app.listen(PORT, () => {
     console.log(`Server berjalan di http://localhost:${PORT}`);
   });
   ```

4. **Save file** dan jalankan: `node server.js`
5. **Buka browser** dan akses `http://localhost:3000`

** Hasil Akhir:**  
Server kamu berjalan di port 3000 dan bisa diakses via browser. Kamu akan lihat "Hello, World! " di browser!

** Tips:**

- Kalau Copilot nggak muncul, coba ketik lebih spesifik atau mulai ketik `const express`
- Kalau port 3000 sudah dipakai, ganti jadi 3001

### Struktur Project Express yang Baik

Sebelum lanjut, kamu harus tahu struktur folder yang baik untuk project Express. Ini penting supaya code kamu rapi dan mudah di-maintain.

```
my-api-project/
├── config/
│   └── database.js          # Konfigurasi database
├── controllers/
│   └── productController.js # Business logic
├── models/
│   └── Product.js           # Schema database
├── routes/
│   └── productRoutes.js     # Definisi endpoint
├── middleware/
│   ├── errorHandler.js      # Error handling
│   └── logger.js            # Logging
├── .env                     # Environment variables (jangan di-commit!)
├── .gitignore               # File yang diabaikan Git
├── server.js                # Entry point aplikasi
└── package.json             # Dependencies & scripts
```

**Kenapa Harus Dipisah-pisah?**

- **Separation of Concerns** → Setiap file punya tugas sendiri
- **Maintainability** → Mudah cari dan edit code
- **Scalability** → Mudah ditambah fitur baru
- **Team Work** → Beberapa orang bisa kerja di file berbeda tanpa conflict

  **[Visual Suggestion untuk Ilustrator]**

- Diagram pohon folder structure
- Setiap folder punya ikon berbeda (folder config = , models = , routes = )
- Panah menunjukkan alur data dari routes → controllers → models

### Auto-Restart Server dengan Nodemon

Sekarang, tiap kali kamu edit code, harus stop server (Ctrl+C) terus jalanin lagi. Ribet kan?

Makanya kita pakai **Nodemon**! Nodemon akan auto-restart server setiap ada perubahan file.

**Edit `package.json`:**

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

**Sekarang jalankan dengan:**

```bash
npm run dev
```

Setiap kali kamu save file, server akan restart otomatis!

**[GIF Placeholder]**
_GIF menunjukkan proses: edit code di server.js → save → terminal menunjukkan "restarting due to changes" → server restart otomatis tanpa manual stop/start._

**Challenge #1: Personalisasi Hello World**

Coba modifikasi route "/" supaya menampilkan nama kamu dan tanggal hari ini!

Hint:

```javascript
const name = "Aiman";
const today = new Date().toLocaleDateString("id-ID");
res.send(`Halo, nama saya ${name}! Hari ini tanggal ${today}`);
```

---

## Routing dan Middleware

Oke, sekarang kita masuk ke dua konsep penting di Express: **Routing** dan **Middleware**!

### Apa Itu Routing?

**Routing** adalah proses menentukan gimana aplikasi respond terhadap request client ke **endpoint** tertentu.

**Analogi:**

> Routing itu kayak **resepsionis hotel**. Client datang (request) dan bilang "Saya mau ke restoran" (endpoint). Resepsionis arahkan ke restoran (handler).

**Endpoint** itu kombinasi dari:

- **HTTP Method** (GET, POST, PUT, DELETE)
- **Path** (/products, /users, /orders)

### Basic Routing

Mari kita bikin beberapa route untuk API produk:

```javascript
const express = require("express");
const app = express();

// Middleware untuk parse JSON (wajib!)
app.use(express.json());

// GET - Mengambil semua produk
app.get("/api/products", (req, res) => {
  res.json({
    message: "GET all products",
    data: [
      { id: 1, name: "Vitamin C", price: 85000 },
      { id: 2, name: "Vitamin D", price: 120000 },
    ],
  });
});

// GET by ID - Mengambil satu produk
app.get("/api/products/:id", (req, res) => {
  const { id } = req.params; // Ambil ID dari URL
  res.json({
    message: `GET product with ID: ${id}`,
    data: { id: id, name: "Vitamin C", price: 85000 },
  });
});

// POST - Membuat produk baru
app.post("/api/products", (req, res) => {
  const newProduct = req.body; // Ambil data dari request body
  res.status(201).json({
    message: "Product created successfully",
    data: newProduct,
  });
});

// PUT - Update produk
app.put("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  res.json({
    message: `Product ${id} updated`,
    data: updates,
  });
});

// DELETE - Hapus produk
app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `Product ${id} deleted`,
  });
});

app.listen(3000, () => {
  console.log(" Server running on port 3000");
});
```

**Penjelasan:**

- `req.params` → Ambil data dari URL (misal: /products/**123**)
- `req.body` → Ambil data dari request body (JSON yang dikirim client)
- `req.query` → Ambil query parameters (misal: /products**?category=vitamin**)

  **Vibe Coding: Membuat Route CRUD Lengkap (Bareng GitHub Copilot)**

** Tujuan:**  
Membuat 5 route lengkap untuk operasi CRUD produk dengan bantuan GitHub Copilot.

** Prompt untuk GitHub Copilot:**

```
// Buat Express routes untuk CRUD products:
// GET /api/products - get all products
// GET /api/products/:id - get product by id
// POST /api/products - create new product
// PUT /api/products/:id - update product
// DELETE /api/products/:id - delete product
```

** Langkah-langkah Coding:**

1. **Buat file baru** di folder project (belum ada folder routes)
2. **Ketik prompt di atas** dan lihat suggestion Copilot
3. **Copilot akan suggest** structure route lengkap, accept dan modifikasi:

   ```javascript
   const express = require("express");
   const app = express();

   app.use(express.json()); // Copilot biasanya lupa ini, tambah manual!

   // Route GET - Aiman ketik comment, Copilot suggest kode
   app.get("/api/products", (req, res) => {
     res.json({ message: "GET all products" });
   });

   // Route GET by ID
   app.get("/api/products/:id", (req, res) => {
     const { id } = req.params;
     res.json({ message: `GET product ${id}` });
   });

   // ... dan seterusnya untuk POST, PUT, DELETE
   ```

4. **Lengkapi setiap route** dengan response yang sesuai
5. **Jalankan server:** `node server.js`
6. **Test dengan Postman** satu per satu

** Hasil Akhir:**  
Kamu punya API lengkap dengan 5 endpoint CRUD! Sekarang Aila (rekan coding) bisa test API kamu pakai Postman.

** Tips:**

- Copilot sering suggest pattern yang mirip, tapi selalu **review dan pahami** kode yang disugest
- Jangan langsung accept semua, pastikan sesuai dengan kebutuhan!

  **[GIF Placeholder]**
  _GIF menunjukkan testing route di Postman: mengirim GET request ke /api/products, melihat response JSON, lalu testing POST request dengan body JSON._

### Router Modular (Kode yang Rapi!)

Kalau semua route ditulis di `server.js`, nanti filenya bakal panjang banget dan susah dibaca. Makanya kita pisahin!

**Bikin folder `routes` dan file `productRoutes.js`:**

```javascript
// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Semua route dimulai dengan /api/products
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
```

**Update `server.js`:**

```javascript
// server.js
const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(express.json());

// Mount routes
app.use("/api/products", productRoutes);

app.listen(3000, () => {
  console.log(" Server running on port 3000");
});
```

**Lebih Rapi Kan?** Sekarang semua logic produk ada di file `productRoutes.js`!

### Apa Itu Middleware?

Nah, sekarang kita bahas **Middleware**. Ini konsep penting banget di Express!

**Middleware** adalah fungsi yang punya akses ke `request` (req), `response` (res), dan fungsi `next()`. Middleware berjalan **di tengah-tengah** proses request-response.

**Analogi:**

> Bayangin kamu masuk ke mall. Ada beberapa checkpoint:
>
> 1. Security check (middleware 1)
> 2. Cek suhu (middleware 2)
> 3. Scan barcode (middleware 3)
> 4. Akhirnya masuk (route handler)

![Middleware Flow]()
_Diagram menunjukkan alur request melewati beberapa middleware sebelum sampai ke route handler. Setiap middleware bisa memodifikasi request atau menghentikan alur jika ada error._

**[Visual Suggestion untuk Ilustrator]**

- Diagram alur: Request → Middleware 1 → Middleware 2 → Middleware 3 → Route Handler → Response
- Setiap middleware punya fungsi next() yang melanjutkan ke middleware berikutnya
- Gunakan panah dan kotak berwarna

```
Request
   │
   ▼
┌──────────────┐
│ Middleware 1 │ → Logging
└──────┬───────┘
       │ next()
       ▼
┌──────────────┐
│ Middleware 2 │ → Authentication
└──────┬───────┘
       │ next()
       ▼
┌──────────────┐
│ Middleware 3 │ → Validation
└──────┬───────┘
       │ next()
       ▼
┌──────────────┐
│Route Handler │ → Business Logic
└──────┬───────┘
       │
       ▼
   Response
```

#### Built-in Middleware

Express punya beberapa middleware bawaan:

```javascript
const express = require("express");
const app = express();

// 1. Parse JSON body
app.use(express.json());

// 2. Parse URL-encoded data (dari form HTML)
app.use(express.urlencoded({ extended: true }));

// 3. Serve static files (gambar, CSS, JS)
app.use(express.static("public"));
```

**Penjelasan:**

1. `express.json()` → Ngubah JSON dari client jadi JavaScript object
2. `express.urlencoded()` → Handle form submission
3. `express.static()` → Serve file statis (gambar, CSS, dll)

#### Third-Party Middleware

Kita juga bisa pakai middleware dari library lain:

```javascript
const cors = require("cors");
const morgan = require("morgan");

// Enable CORS (biar frontend di domain lain bisa akses)
app.use(cors());

// HTTP request logger (biar keliatan siapa aja yang akses API)
app.use(morgan("dev"));
```

**Penjelasan:**

- `cors()` → Izinkan cross-origin requests (frontend di localhost:3001 bisa akses backend di localhost:3000)
- `morgan()` → Logger yang ngeprint tiap request ke console (berguna banget untuk debugging!)

#### Custom Middleware (Bikin Sendiri!)

Kamu juga bisa bikin middleware sendiri! Yuk coba:

**Contoh 1: Logger Sederhana**

```javascript
// middleware/logger.js
const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next(); // Jangan lupa panggil next()!
};

module.exports = logger;
```

**Contoh 2: Validasi Product**

```javascript
// middleware/validateProduct.js
const validateProduct = (req, res, next) => {
  const { name, price } = req.body;

  // Check apakah name dan price ada
  if (!name || !price) {
    return res.status(400).json({
      success: false,
      message: "Name dan price wajib diisi!",
    });
  }

  // Check apakah price positif
  if (price < 0) {
    return res.status(400).json({
      success: false,
      message: "Price harus positif!",
    });
  }

  // Kalau lolos validasi, lanjut ke next middleware/handler
  next();
};

module.exports = validateProduct;
```

**Cara Pakai Middleware:**

```javascript
const logger = require("./middleware/logger");
const validateProduct = require("./middleware/validateProduct");

// Global middleware (berlaku untuk semua route)
app.use(logger);

// Route-specific middleware (hanya untuk route ini)
app.post("/api/products", validateProduct, (req, res) => {
  // Kalau sampai sini, berarti validasi lolos!
  res.json({ message: "Product created!" });
});
```

**Vibe Coding: Membuat Custom Middleware (Bareng GitHub Copilot)**

** Tujuan:**  
Membuat custom middleware untuk logging setiap request yang masuk ke server.

** Prompt untuk GitHub Copilot:**

```
// Buat middleware function untuk log setiap HTTP request
// Log format: [timestamp] METHOD URL
// Jangan lupa panggil next()
```

** Langkah-langkah Coding:**

1. **Bikin folder `middleware`** dan file `logger.js`
2. **Ketik prompt di atas** di dalam file `logger.js`
3. **Copilot akan suggest** kode middleware, accept atau tulis manual:

   ```javascript
   const logger = (req, res, next) => {
     const timestamp = new Date().toISOString();
     console.log(`[${timestamp}] ${req.method} ${req.url}`);
     next(); // Aiman: Ini penting! Jangan lupa panggil next()
   };

   module.exports = logger;
   ```

4. **Import di `server.js`:**
   ```javascript
   const logger = require("./middleware/logger");
   app.use(logger); // Apply ke semua route
   ```
5. **Test:** Jalankan server dan buka http://localhost:3000
6. **Lihat terminal** - log request akan muncul!

** Hasil Akhir:**  
Setiap request ke server akan tercatat di console! Ini berguna banget untuk debugging dan monitoring.

** Tips:**

- Middleware bisa di-chain, bisa bikin banyak middleware untuk tugas berbeda
- Urutan `app.use()` penting! Middleware dipanggil sesuai urutan

  **Challenge #2: Middleware Penghitung Request**

Bikin middleware yang ngitung total request yang masuk ke server!

Hint:

```javascript
let requestCount = 0;

const countRequests = (req, res, next) => {
  requestCount++;
  console.log(`Total requests: ${requestCount}`);
  next();
};
```

---

## CRUD API dengan MongoDB

Oke, sekarang kita masuk ke bagian seru: **menyambungkan API kita dengan database!**

Selama ini kita cuma return data dummy. Sekarang kita akan simpan dan ambil data **beneran** dari MongoDB!

### Apa Itu MongoDB?

**MongoDB** adalah database **NoSQL** yang nyimpen data dalam bentuk **dokumen** (mirip JSON).

**Beda SQL vs NoSQL:**

| SQL (MySQL, PostgreSQL)               | NoSQL (MongoDB)               |
| ------------------------------------- | ----------------------------- |
| Data dalam **tabel** (rows & columns) | Data dalam **dokumen** (JSON) |
| Schema kaku (harus tetap)             | Schema fleksibel              |
| Relasi antar tabel                    | Data bisa nested              |
| Query pakai SQL                       | Query pakai JavaScript method |

**Contoh Data di MongoDB:**

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Vitamin C 1000mg",
  "category": "Vitamin",
  "price": 85000,
  "stock": 50,
  "manufacturer": "PT Sehat Sejahtera",
  "createdAt": "2024-03-20T10:00:00.000Z"
}
```

Keliatan kan? Mirip JSON!

**[Visual Suggestion untuk Ilustrator]**

- Perbandingan visual SQL Table (kotak-kotak) vs MongoDB Document (bentuk JSON)
- Tunjukkan fleksibilitas MongoDB dimana setiap dokumen bisa punya field berbeda

### Install & Setup MongoDB

**Step 1: Install MongoDB**

Download dan install MongoDB Community Edition dari:
https://www.mongodb.com/try/download/community

**Step 2: Install Mongoose**

Mongoose adalah library untuk mempermudah kerja dengan MongoDB di Node.js.

```bash
npm install mongoose
```

**Step 3: Bikin File Konfigurasi Database**

```javascript
// config/database.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" MongoDB berhasil terkoneksi!");
  } catch (error) {
    console.error(" MongoDB connection error:", error.message);
    process.exit(1); // Keluar dari aplikasi kalau gagal konek
  }
};

module.exports = connectDB;
```

**Step 4: Bikin File `.env`**

File `.env` buat nyimpen konfigurasi sensitif (jangan di-commit ke Git!).

```env
# .env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/health-ecommerce
```

**Step 5: Connect di `server.js`**

```javascript
// server.js
require("dotenv").config(); // Load .env file
const express = require("express");
const connectDB = require("./config/database");

const app = express();

// Connect to database
connectDB();

// ... middleware dan routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
```

**[GIF Placeholder]**
_GIF menunjukkan proses: menjalankan mongod di terminal → menjalankan npm run dev → console menampilkan "MongoDB berhasil terkoneksi!" dan "Server running on port 3000"._

### Membuat Schema & Model

**Schema** adalah struktur data di MongoDB. **Model** adalah class untuk interact dengan collection.

**Analogi:**

> Schema = Blueprint rumah (design)  
> Model = Rumah jadi (bisa ditempatin)

**Bikin Schema untuk Product:**

```javascript
// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nama produk wajib diisi"],
      trim: true, // Hapus spasi di awal/akhir
      maxlength: [100, "Nama maksimal 100 karakter"],
    },
    description: {
      type: String,
      required: [true, "Deskripsi wajib diisi"],
    },
    category: {
      type: String,
      required: [true, "Kategori wajib diisi"],
      enum: {
        values: [
          "Vitamin",
          "Supplement",
          "Medical Equipment",
          "Medicine",
          "Other",
        ],
        message: "{VALUE} bukan kategori valid",
      },
    },
    price: {
      type: Number,
      required: [true, "Harga wajib diisi"],
      min: [0, "Harga harus positif"],
    },
    stock: {
      type: Number,
      required: [true, "Stock wajib diisi"],
      min: [0, "Stock tidak boleh negatif"],
      default: 0,
    },
    imageUrl: {
      type: String,
      default: "/images/default-product.jpg",
    },
    manufacturer: {
      type: String,
      required: [true, "Manufacturer wajib diisi"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Otomatis tambahin createdAt dan updatedAt
  }
);

// Index untuk search yang lebih cepat
productSchema.index({ name: "text", description: "text" });

module.exports = mongoose.model("Product", productSchema);
```

**Penjelasan:**

- `type` → Tipe data (String, Number, Boolean, Date)
- `required` → Field wajib diisi
- `trim` → Hapus spasi di awal/akhir
- `enum` → Hanya boleh salah satu dari nilai yang ditentukan
- `default` → Nilai default kalau nggak diisi
- `timestamps: true` → Otomatis bikin field `createdAt` dan `updatedAt`

  **Vibe Coding: Membuat Model Product (Bareng GitHub Copilot)**

** Tujuan:**  
Membuat Mongoose schema dan model untuk produk kesehatan dengan validasi lengkap.

** Prompt untuk GitHub Copilot:**

```
// Buat Mongoose schema untuk product dengan fields:
// name (string, required, max 100 chars)
// description (string, required)
// category (enum: Vitamin, Supplement, Medical Equipment, Medicine, Other)
// price (number, required, min 0)
// stock (number, required, min 0, default 0)
// manufacturer (string, required)
// isActive (boolean, default true)
// Tambahkan timestamps
```

** Langkah-langkah Coding:**

1. **Bikin folder `models`** dan file `Product.js`
2. **Ketik prompt di atas** - Copilot akan suggest schema structure
3. **Review suggestion Copilot**, biasanya sudah 80% benar!
4. **Tambahkan detail validasi** yang mungkin terlewat Copilot:

   ```javascript
   const mongoose = require("mongoose");

   const productSchema = new mongoose.Schema(
     {
       name: {
         type: String,
         required: [true, "Nama produk wajib diisi"], // Aiman: Custom error message
         trim: true,
         maxlength: [100, "Nama maksimal 100 karakter"],
       },
       // ... field lainnya
     },
     {
       timestamps: true, // Copilot kadang lupa ini!
     }
   );

   // Aiman: Tambah index untuk search (Copilot jarang suggest ini)
   productSchema.index({ name: "text", description: "text" });

   module.exports = mongoose.model("Product", productSchema);
   ```

5. **Save file** dan siap dipakai!

** Hasil Akhir:**  
Model Product dengan validasi lengkap yang siap untuk CRUD operations! Aila bisa langsung pakai model ini di controller.

** Tips:**

- Copilot bagus untuk boilerplate, tapi **validasi custom** harus kamu tambah manual
- Selalu cek apakah Copilot include `timestamps` dan `index`

### Implementasi CRUD Operations

Sekarang kita implementasikan CRUD operations **beneran** dengan MongoDB!

**Bikin Controller:**

```javascript
// controllers/productController.js
const Product = require("../models/Product");

// ==========================================
// CREATE - Bikin produk baru
// ==========================================
exports.createProduct = async (req, res, next) => {
  try {
    // Bikin produk baru dari data yang dikirim client
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      message: "Produk berhasil dibuat! ",
      data: product,
    });
  } catch (error) {
    next(error); // Forward ke error handler
  }
};

// ==========================================
// READ - Ambil semua produk
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

    // Search by name atau description
    if (search) {
      query.$text = { $search: search };
    }

    // Query database
    const products = await Product.find(query)
      .sort({ createdAt: -1 }) // Urutkan dari terbaru
      .limit(50); // Batasi hasil maksimal 50

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
// READ - Ambil satu produk by ID
// ==========================================
exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    // Kalau produk nggak ketemu
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Produk tidak ditemukan ",
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
// UPDATE - Update produk
// ==========================================
exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return dokumen yang sudah diupdate
      runValidators: true, // Jalankan validasi schema
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Produk tidak ditemukan",
      });
    }

    res.status(200).json({
      success: true,
      message: "Produk berhasil diupdate! ",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// ==========================================
// DELETE - Hapus produk
// ==========================================
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Produk tidak ditemukan",
      });
    }

    res.status(200).json({
      success: true,
      message: "Produk berhasil dihapus! ",
      data: {},
    });
  } catch (error) {
    next(error);
  }
};
```

**Penjelasan Method Mongoose:**

- `Product.create()` → Bikin dokumen baru
- `Product.find()` → Ambil banyak dokumen (bisa pakai filter)
- `Product.findById()` → Ambil satu dokumen by ID
- `Product.findByIdAndUpdate()` → Update dokumen by ID
- `Product.findByIdAndDelete()` → Hapus dokumen by ID

**Update Routes:**

```javascript
// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
```

**Vibe Coding: Implementasi CRUD Controller (Bareng GitHub Copilot)**

** Tujuan:**  
Membuat controller functions lengkap untuk CRUD operations dengan MongoDB, dibantu GitHub Copilot.

** Prompt untuk GitHub Copilot:**

```
// Create getAllProducts controller function
// - Get all products from MongoDB
// - Support filtering by category, minPrice, maxPrice
// - Support search by name or description
// - Return JSON with success, count, and data
```

** Langkah-langkah Coding:**

1. **Bikin folder `controllers`** dan file `productController.js`
2. **Import Product model** di baris pertama:
   ```javascript
   const Product = require("../models/Product");
   ```
3. **Ketik prompt untuk `getAllProducts`** - Copilot akan suggest function
4. **Review dan perbaiki** suggestion Copilot (biasanya kurang filtering):

   ```javascript
   exports.getAllProducts = async (req, res, next) => {
     try {
       const { category, minPrice, maxPrice, search } = req.query;

       let query = { isActive: true };

       // Aiman: Tambah filtering (Copilot kadang skip ini)
       if (category) query.category = category;
       if (minPrice || maxPrice) {
         query.price = {};
         if (minPrice) query.price.$gte = Number(minPrice);
         if (maxPrice) query.price.$lte = Number(maxPrice);
       }

       const products = await Product.find(query)
         .sort({ createdAt: -1 })
         .limit(50);

       res.status(200).json({
         success: true,
         count: products.length,
         data: products,
       });
     } catch (error) {
       next(error); // Forward ke error handler
     }
   };
   ```

5. **Ulangi untuk function lainnya:**
   - Prompt: `// Create getProductById controller`
   - Prompt: `// Create createProduct controller`
   - Prompt: `// Create updateProduct controller`
   - Prompt: `// Create deleteProduct controller`
6. **Test dengan Postman** - pastikan semua berfungsi!

** Hasil Akhir:**  
API yang fully functional dengan database real! Aiman dan Aila sekarang bisa CRUD data produk kesehatan.

** Tips:**

- Copilot bagus untuk boilerplate, tapi **business logic** (filtering, validation) harus kamu review dan sempurnakan
- Selalu pakai **try-catch** dan forward error ke `next()`

### Seeding Database (Isi Data Sample)

Supaya nggak mulai dari database kosong, kita bikin script untuk isi data sample:

```javascript
// scripts/seed.js
require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../models/Product");
const connectDB = require("../config/database");

const products = [
  {
    name: "Vitamin C 1000mg",
    description: "Suplemen vitamin C untuk meningkatkan daya tahan tubuh",
    category: "Vitamin",
    price: 85000,
    stock: 50,
    manufacturer: "PT Sehat Sejahtera",
    imageUrl: "/images/vitamin-c.jpg",
  },
  {
    name: "Vitamin D3 2000 IU",
    description: "Suplemen vitamin D untuk kesehatan tulang",
    category: "Vitamin",
    price: 120000,
    stock: 30,
    manufacturer: "PT Sehat Alami",
    imageUrl: "/images/vitamin-d.jpg",
  },
  {
    name: "Omega-3 Fish Oil",
    description: "Suplemen minyak ikan untuk kesehatan jantung",
    category: "Supplement",
    price: 200000,
    stock: 25,
    manufacturer: "PT Nutri Health",
    imageUrl: "/images/omega3.jpg",
  },
  // ... tambah produk lainnya
];

const seedDatabase = async () => {
  try {
    await connectDB();

    // Hapus semua produk yang ada
    await Product.deleteMany();
    console.log("  Produk lama dihapus");

    // Insert produk baru
    const createdProducts = await Product.insertMany(products);
    console.log(` ${createdProducts.length} produk berhasil ditambahkan!`);

    console.log("\n Sample Product IDs:");
    createdProducts.slice(0, 3).forEach((product) => {
      console.log(`   - ${product.name}: ${product._id}`);
    });

    console.log("\n Database seeding selesai!");
    process.exit(0);
  } catch (error) {
    console.error(" Seeding error:", error);
    process.exit(1);
  }
};

seedDatabase();
```

**Tambahkan script di `package.json`:**

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "seed": "node scripts/seed.js"
  }
}
```

**Jalankan seeding:**

```bash
npm run seed
```

**[GIF Placeholder]**
_GIF menunjukkan proses seeding: menjalankan npm run seed → terminal menampilkan proses hapus data lama → insert data baru → menampilkan ID produk yang berhasil dibuat → "Database seeding selesai!"_

**Vibe Coding: Database Seeding (Bareng GitHub Copilot)**

** Tujuan:**  
Membuat script untuk mengisi database dengan data sample produk kesehatan.

** Prompt untuk GitHub Copilot:**

```
// Buat database seeding script untuk MongoDB
// Connect to database, delete existing products, insert sample products
// Array products berisi 10 produk kesehatan (vitamin, supplement, medical equipment)
// Log progress dan exit setelah selesai
```

** Langkah-langkah Coding:**

1. **Bikin folder `scripts`** dan file `seed.js`
2. **Ketik prompt di atas** - Copilot akan suggest structure
3. **Copilot suggest basic structure**, Aiman review dan lengkapi:

   ```javascript
   require("dotenv").config();
   const Product = require("../models/Product");
   const connectDB = require("../config/database");

   const products = [
     // Aiman: Isi data manual (Copilot bisa suggest, tapi data harus relevan)
     {
       name: "Vitamin C 1000mg",
       description: "Suplemen vitamin C untuk daya tahan tubuh",
       category: "Vitamin",
       price: 85000,
       stock: 50,
       manufacturer: "PT Sehat Sejahtera",
     },
     // ... 9 produk lainnya
   ];

   const seedDatabase = async () => {
     // Copilot suggest: connect, delete, insert pattern
     await connectDB();
     await Product.deleteMany();
     await Product.insertMany(products);
     process.exit(0);
   };
   ```

4. **Tambahkan logging** untuk better UX (Copilot kadang skip):
   ```javascript
   console.log("  Produk lama dihapus");
   console.log(` ${createdProducts.length} produk berhasil ditambahkan!`);
   ```
5. **Tambahkan script di `package.json`:**
   ```json
   "scripts": {
     "seed": "node scripts/seed.js"
   }
   ```
6. **Jalankan:** `npm run seed`

** Hasil Akhir:**  
Database terisi dengan 10 produk sample! Aiman dan Aila sekarang punya data untuk testing API.

** Tips:**

- Copilot bisa suggest data structure, tapi **isi data harus manual** dan relevan
- Selalu tambah **error handling** di seeding script

  **Challenge #3: Tambah Fitur Pencarian**

Implementasikan endpoint GET /api/products/search/:keyword yang bisa search produk berdasarkan nama!

Hint:

```javascript
exports.searchProducts = async (req, res, next) => {
  try {
    const { keyword } = req.params;
    const products = await Product.find({
      name: { $regex: keyword, $options: "i" }, // Case insensitive
    });
    res.json({ data: products });
  } catch (error) {
    next(error);
  }
};
```

---

## Error Handling & Logging

Error handling yang baik itu **wajib hukumnya** untuk aplikasi profesional! Kenapa? Supaya user nggak bingung kalau ada error, dan kamu bisa debug dengan mudah.

### Kenapa Error Handling Penting?

Bayangin scenario ini:

**Tanpa Error Handling yang Baik:**

```
Aila (Frontend): "GET /api/products/123abc"
                 (request produk dengan ID salah)

Server: "Cannot read property 'name' of undefined"

Aila: "Hah? Error apa ini? "
```

User dan frontend developer bakal bingung! Error message-nya nggak jelas.

**Dengan Error Handling yang Baik:**

```
Aila (Frontend): "GET /api/products/123abc"

Server: {
  "success": false,
  "message": "Produk dengan ID tersebut tidak ditemukan",
  "statusCode": 404
}

Aila: "Oh, ID-nya salah. Oke, saya tahu harus fix apa! "
```

Lebih jelas kan? Aila langsung tahu masalahnya apa dan bisa fix dengan cepat!

### Custom Error Class

Kita bikin class Error sendiri biar bisa kontrol error message dan status code:

```javascript
// middleware/errorHandler.js

// Custom Error Class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // Beda error operational vs programming error

    Error.captureStackTrace(this, this.constructor);
  }
}

// Global Error Handler Middleware
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log error untuk debugging
  console.error(" Error:", err);

  // Mongoose bad ObjectId (ID nggak valid)
  if (err.name === "CastError") {
    const message = "Resource tidak ditemukan";
    error = new AppError(message, 404);
  }

  // Mongoose duplicate key (data duplikat)
  if (err.code === 11000) {
    const message = "Data sudah ada, nggak boleh duplikat";
    error = new AppError(message, 400);
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
    error = new AppError(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Server Error",
    // Tampilkan stack trace hanya di development
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

module.exports = { AppError, errorHandler };
```

**Penjelasan:**

1. `AppError` class → Custom error dengan status code
2. `errorHandler` middleware → Tangkap semua error dan format jadi response JSON
3. Handle berbagai jenis error Mongoose (CastError, ValidationError, dll)

**Cara Pakai:**

```javascript
// server.js
const { errorHandler } = require("./middleware/errorHandler");

// ... routes

// Error handler harus di AKHIR (setelah semua routes)
app.use(errorHandler);
```

**Vibe Coding: Setup Error Handler (Bareng GitHub Copilot)**

** Tujuan:**  
Membuat global error handler untuk menangkap dan memformat semua error menjadi response JSON yang user-friendly.

** Prompt untuk GitHub Copilot:**

```
// Buat custom AppError class yang extends Error
// dengan constructor yang menerima message dan statusCode
```

** Langkah-langkah Coding:**

1. **Bikin file `middleware/errorHandler.js`**
2. **Ketik prompt pertama** untuk AppError class
3. **Accept suggestion Copilot** atau tulis:
   ```javascript
   class AppError extends Error {
     constructor(message, statusCode) {
       super(message);
       this.statusCode = statusCode;
       this.isOperational = true;
       Error.captureStackTrace(this, this.constructor);
     }
   }
   ```
4. **Ketik prompt kedua:**
   ```
   // Buat errorHandler middleware function
   // Handle Mongoose errors: CastError, ValidationError, duplicate key
   // Return JSON response dengan success false dan message
   ```
5. **Copilot akan suggest error handler**, tapi biasanya kurang lengkap
6. **Aiman review dan lengkapi** untuk handle semua error types:

   ```javascript
   const errorHandler = (err, req, res, next) => {
     let error = { ...err };
     error.message = err.message;

     // Handle berbagai jenis error
     if (err.name === "CastError") {
       error = new AppError("Resource tidak ditemukan", 404);
     }
     // ... handle error types lainnya
   };
   ```

7. **Import dan pakai** di `server.js` (HARUS di akhir semua routes!)
8. **Test error handling** dengan request yang salah

** Hasil Akhir:**  
Error ditangkap dengan baik dan user dapat response JSON yang jelas, bukan error message mentah!

** Tips:**

- Error handler **harus taruh paling akhir** di server.js
- Copilot kadang lupa handle semua error types, selalu lengkapi manual

### Request Logger dengan Morgan

**Morgan** adalah middleware untuk logging HTTP requests. Berguna banget buat monitoring siapa aja yang akses API kamu!

```javascript
// middleware/logger.js
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

// Bikin folder logs kalau belum ada
const logsDir = path.join(__dirname, "../logs");
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Create write stream untuk log file
const accessLogStream = fs.createWriteStream(
  path.join(logsDir, "access.log"),
  { flags: "a" } // Append mode
);

// Custom format dengan timestamp
morgan.token("timestamp", () => new Date().toISOString());

const logFormat = ":timestamp :method :url :status :response-time ms";

// Development logging (print ke console)
const devLogger = morgan("dev");

// Production logging (save ke file)
const prodLogger = morgan(logFormat, { stream: accessLogStream });

module.exports = { devLogger, prodLogger };
```

**Cara Pakai:**

```javascript
// server.js
const { devLogger } = require("./middleware/logger");

app.use(devLogger);
```

Sekarang setiap request akan keprint di console:

```
GET /api/products 200 45.123 ms
POST /api/products 201 102.456 ms
GET /api/products/123 404 12.789 ms
```

![Morgan Logger Output]()
_Screenshot terminal menampilkan output Morgan logger dengan berbagai request: GET, POST, PUT, DELETE dengan status codes dan response time-nya._

**Challenge #4: Custom Error untuk Unauthorized**

Bikin custom error untuk handle authentication! Kalau user belum login, kasih error 401 Unauthorized.

Hint:

```javascript
class UnauthorizedError extends AppError {
  constructor(message = "Kamu belum login!") {
    super(message, 401);
  }
}
```

---

## Tutorial Postman

Sekarang API kamu sudah jadi! Tapi gimana cara testing-nya? Pakai **Postman**!

### Apa Itu Postman?

**Postman** adalah aplikasi untuk testing API. Dengan Postman, kamu bisa:

- Kirim HTTP request (GET, POST, PUT, DELETE)
- Simpan dan organisir request dalam collection
- Bikin automated tests
- Dokumentasikan API
- Kolaborasi dengan tim

**Analogi:**

> Postman itu kayak **browser khusus untuk API**. Kalau browser biasa nunjukin HTML, Postman nunjukin JSON response dari API.

![Postman Interface]()
_Screenshot tampilan Postman dengan bagian-bagian penting: sidebar collections, request builder di tengah (method, URL, headers, body), dan response panel di bawah._

**[Visual Suggestion untuk Ilustrator]**

- Annotated screenshot Postman interface
- Tandai bagian penting: Method dropdown, URL bar, Headers tab, Body tab, Send button, Response panel
- Gunakan panah dan label

### Instalasi Postman

1. Download dari [postman.com/downloads](https://www.postman.com/downloads/)
2. Install aplikasi
3. Buat akun (gratis!)
4. Buat workspace baru

**[GIF Placeholder]**
_GIF menunjukkan proses: download Postman → install → buka pertama kali → sign up/login → create workspace → tampilan workspace kosong siap digunakan._

### Membuat Collection

**Collection** adalah grup dari berbagai request yang berhubungan. Kita bikin collection untuk Health E-Commerce API!

**Step-by-step:**

1. Klik **"New Collection"**
2. Beri nama: **"Health E-Commerce API"**
3. Tambahkan deskripsi: "API untuk toko online produk kesehatan"
4. Save

![Postman New Collection]()
_Screenshot proses membuat collection baru di Postman: klik New → pilih Collection → isi nama dan deskripsi → Save._

### Testing Endpoints dengan Postman

Mari kita test semua endpoint yang udah kita bikin!

#### Test 1: GET All Products

**Step:**

1. Buat request baru dalam collection
2. Pilih method: **GET**
3. URL: `http://localhost:3000/api/products`
4. Click **Send**

**Response yang diharapkan:**

```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Vitamin C 1000mg",
      "category": "Vitamin",
      "price": 85000,
      "stock": 50,
      "manufacturer": "PT Sehat Sejahtera",
      "createdAt": "2024-03-20T10:00:00.000Z",
      "updatedAt": "2024-03-20T10:00:00.000Z"
    }
    // ... produk lainnya
  ]
}
```

![Postman GET Request]()
_Screenshot Postman menunjukkan GET request berhasil dengan status 200 OK dan response JSON berisi array of products._

**[GIF Placeholder]**
_GIF menunjukkan langkah lengkap: membuat request baru → pilih method GET → ketik URL → klik Send → melihat response JSON muncul di panel bawah dengan status 200 OK._

#### Test 2: POST Create Product

**Step:**

1. Buat request baru
2. Pilih method: **POST**
3. URL: `http://localhost:3000/api/products`
4. Pilih tab **Headers**, tambahkan:
   - Key: `Content-Type`
   - Value: `application/json`
5. Pilih tab **Body** → **raw** → **JSON**
6. Masukkan data:

```json
{
  "name": "Zinc Supplement 50mg",
  "description": "Suplemen zinc untuk sistem kekebalan tubuh",
  "category": "Supplement",
  "price": 75000,
  "stock": 40,
  "manufacturer": "PT Mineral Health"
}
```

7. Click **Send**

**Response yang diharapkan:**

```json
{
  "success": true,
  "message": "Produk berhasil dibuat! ",
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

![Postman POST Request]()
_Screenshot Postman menunjukkan POST request dengan Body JSON dan response status 201 Created. Produk baru berhasil dibuat dengan semua field terisi._

**Vibe Coding: Testing API dengan Postman**

** Tujuan:**  
Menguji semua endpoint API menggunakan Postman secara sistematis.

** Prompt untuk GitHub Copilot:**  
_(Copilot tidak digunakan di Postman, tapi bisa bantu bikin test scripts!)_

```
// Buat Postman test script untuk verify status code 200
// dan check apakah response punya field 'data'
```

** Langkah-langkah Testing:**

1. **Install dan buka Postman**
2. **Buat collection baru:** "Health E-Commerce API"
3. **Test GET /api/products:**
   - Method: GET
   - URL: `http://localhost:3000/api/products`
   - Send → lihat response
4. **Aiman create product baru dengan POST:**
   - Method: POST
   - URL: `http://localhost:3000/api/products`
   - Body (JSON): data produk baru
   - Send → **copy ID dari response!**
5. **Test GET /api/products/:id** dengan ID yang baru dicopy
6. **Aila coba update product** dengan PUT
7. **Test DELETE** untuk hapus product
8. **Verify error handling:** Test dengan ID yang invalid

** Hasil Akhir:**  
Semua endpoint berfungsi dengan baik! Aiman dan Aila bisa yakin API-nya work sebelum integrate dengan frontend.

** Tips:**

- Save semua request dalam collection supaya bisa di-reuse
- Pakai environment variables untuk URL yang sering berubah

#### Test 3: PUT Update Product

**Step:**

1. Copy ID produk dari response POST sebelumnya
2. Buat request baru, method: **PUT**
3. URL: `http://localhost:3000/api/products/507f191e810c19729de860ea`
4. Body JSON:

```json
{
  "price": 85000,
  "stock": 50
}
```

5. Send

**Response:** Produk terupdate dengan harga dan stock baru!

#### Test 4: DELETE Product

**Step:**

1. Buat request baru, method: **DELETE**
2. URL: `http://localhost:3000/api/products/507f191e810c19729de860ea`
3. Send

**Response:**

```json
{
  "success": true,
  "message": "Produk berhasil dihapus! ",
  "data": {}
}
```

#### Test 5: Error Handling

Mari kita test error handling! Coba GET produk dengan ID yang nggak ada:

**Scenario:**

```
Aiman: "Ayo kita test error handling-nya. Coba request dengan ID yang invalid!"
Aila: "Oke, saya coba GET dengan ID asal-asalan..."
```

**Step:**

1. GET request ke: `http://localhost:3000/api/products/123456789012345678901234`
2. Send

**Response:**

```json
{
  "success": false,
  "message": "Produk tidak ditemukan "
}
```

Status code: **404 Not Found**

```
Aila: "Wah, error handling-nya work! Response-nya jelas banget."
Aiman: "Nah itu dia! Error yang baik harus kasih info jelas ke user."
```

### Environment Variables di Postman

Supaya nggak ribet ganti-ganti URL, kita pakai Environment Variables!

**Step:**

1. Klik **Environments** di sidebar
2. Create environment baru: **"Development"**
3. Tambahkan variables:
   - `base_url` = `http://localhost:3000`
   - `product_id` = (kosongin dulu)
4. Save

**Sekarang di request, ganti URL jadi:**

```
{{base_url}}/api/products
```

Keren kan? Nanti kalau deploy ke production, tinggal ganti `base_url` aja!

### Export/Import Collection

Supaya temen-temen kamu bisa pakai collection yang sama:

**Export:**

1. Klik ⋮ (tiga titik) pada collection
2. Pilih **Export**
3. Pilih format **Collection v2.1**
4. Save file `.json`

**Import:**

1. Klik **Import**
2. Drag & drop file atau browse file
3. Collection langsung muncul!

![Export Import Collection]()
_Screenshot proses export collection menjadi file JSON dan proses import collection dari file JSON._

**[GIF Placeholder]**
_GIF menunjukkan proses lengkap: klik menu collection → Export → pilih format → save file → lalu proses import: klik Import → drag file JSON → collection langsung muncul di sidebar._

**Challenge #5: Automated Tests**

Tambahkan test script di Postman untuk automated testing!

Contoh:

```javascript
// Di tab Tests pada request
pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

pm.test("Response has data", function () {
  var jsonData = pm.response.json();
  pm.expect(jsonData.data).to.be.an("array");
});
```

---

## API Contract dengan OpenAPI/Swagger

API documentation itu penting banget! Gimana tim frontend tahu endpoint apa aja yang ada dan format data-nya gimana? Makanya kita pakai **Swagger**!

### Apa Itu API Contract?

**API Contract** adalah dokumen yang menjelaskan:

- **Endpoints** yang tersedia
- **Request format** (parameters, body, headers)
- **Response format** (status code, body structure)
- **Authentication** requirements
- **Error responses** yang mungkin terjadi

**Analogi:**

> API Contract itu kayak **menu restoran**. Kamu lihat menu, tahu ada makanan apa, harganya berapa, dan bahan apa aja. Nggak perlu tanya-tanya ke waiter.

### OpenAPI Specification (Swagger)

**OpenAPI** (dulu Swagger) adalah standar industri untuk dokumentasi API. Format-nya pakai YAML atau JSON.

Mari kita bikin dokumentasi untuk Health E-Commerce API!

**Buat file `swagger.yaml`:**

```yaml
openapi: 3.0.0

info:
  title: Health E-Commerce API
  description: |
    API untuk toko online produk kesehatan (vitamin, suplemen, alat medis, obat-obatan)

    ## Fitur Utama
    - CRUD operations untuk produk kesehatan
    - Filter produk berdasarkan kategori dan harga
    - Search produk berdasarkan nama atau deskripsi
    - Error handling yang comprehensive

    ## Base URL
    - Development: http://localhost:3000
    - Production: https://api.healthshop.com

  version: 1.0.0
  contact:
    name: API Support
    email: support@healthshop.com

servers:
  - url: http://localhost:3000
    description: Development server

tags:
  - name: Products
    description: Endpoint untuk manajemen produk kesehatan

paths:
  /api/products:
    get:
      tags:
        - Products
      summary: Get all products
      description: Mengambil daftar semua produk kesehatan yang aktif
      parameters:
        - name: category
          in: query
          description: Filter by product category
          required: false
          schema:
            type: string
            enum:
              - Vitamin
              - Supplement
              - Medical Equipment
              - Medicine
              - Other
          example: Vitamin
        - name: minPrice
          in: query
          description: Minimum price filter
          required: false
          schema:
            type: number
          example: 50000
        - name: maxPrice
          in: query
          description: Maximum price filter
          required: false
          schema:
            type: number
          example: 150000
        - name: search
          in: query
          description: Search keyword
          required: false
          schema:
            type: string
          example: vitamin
      responses:
        "200":
          description: Successful operation
          content:
            application/json:
              schema:
                type: object
                properties:
                  success:
                    type: boolean
                    example: true
                  count:
                    type: integer
                    example: 3
                  data:
                    type: array
                    items:
                      $ref: "#/components/schemas/Product"

    post:
      tags:
        - Products
      summary: Create new product
      description: Membuat produk baru dalam database
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/ProductInput"
      responses:
        "201":
          description: Product created successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  success:
                    type: boolean
                    example: true
                  message:
                    type: string
                    example: Produk berhasil dibuat!
                  data:
                    $ref: "#/components/schemas/Product"
        "400":
          description: Validation error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"

  /api/products/{id}:
    get:
      tags:
        - Products
      summary: Get product by ID
      description: Mengambil detail satu produk berdasarkan ID
      parameters:
        - name: id
          in: path
          required: true
          description: Product ID (MongoDB ObjectId)
          schema:
            type: string
          example: "507f1f77bcf86cd799439011"
      responses:
        "200":
          description: Successful operation
          content:
            application/json:
              schema:
                type: object
                properties:
                  success:
                    type: boolean
                    example: true
                  data:
                    $ref: "#/components/schemas/Product"
        "404":
          description: Product not found
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"

components:
  schemas:
    Product:
      type: object
      properties:
        _id:
          type: string
          example: "507f1f77bcf86cd799439011"
        name:
          type: string
          example: "Vitamin C 1000mg"
        description:
          type: string
          example: "Suplemen vitamin C untuk meningkatkan daya tahan tubuh"
        category:
          type: string
          enum:
            - Vitamin
            - Supplement
            - Medical Equipment
            - Medicine
            - Other
          example: "Vitamin"
        price:
          type: number
          example: 85000
        stock:
          type: integer
          example: 50
        manufacturer:
          type: string
          example: "PT Sehat Sejahtera"
        isActive:
          type: boolean
          example: true
        createdAt:
          type: string
          format: date-time
        updatedAt:
          type: string
          format: date-time

    ProductInput:
      type: object
      required:
        - name
        - description
        - category
        - price
        - stock
        - manufacturer
      properties:
        name:
          type: string
          maxLength: 100
          example: "Vitamin C 1000mg"
        description:
          type: string
          example: "Suplemen vitamin C untuk meningkatkan daya tahan tubuh"
        category:
          type: string
          enum:
            - Vitamin
            - Supplement
            - Medical Equipment
            - Medicine
            - Other
          example: "Vitamin"
        price:
          type: number
          minimum: 0
          example: 85000
        stock:
          type: integer
          minimum: 0
          example: 50
        manufacturer:
          type: string
          example: "PT Sehat Sejahtera"

    Error:
      type: object
      properties:
        success:
          type: boolean
          example: false
        message:
          type: string
          example: "Error message"
```

### Visualisasi dengan Swagger UI

Mari kita visualisasikan dokumentasi ini jadi UI yang interaktif!

**Install Swagger UI:**

```bash
npm install swagger-ui-express yamljs
```

**Update `server.js`:**

```javascript
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

// API Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

console.log(" API Docs: http://localhost:3000/api-docs");
```

**Buka browser:** `http://localhost:3000/api-docs`

![Swagger UI]()
_Screenshot Swagger UI menampilkan semua endpoints dengan detail lengkap: GET, POST, PUT, DELETE. Setiap endpoint bisa di-expand untuk lihat parameters, request body, dan response examples._

**[Visual Suggestion untuk Ilustrator]**

- Annotated screenshot Swagger UI
- Tandai bagian: list of endpoints, Try it out button, response examples, schemas
- Highlight fitur interactive documentation

  **[GIF Placeholder]**
  _GIF menunjukkan proses: buka /api-docs di browser → melihat list endpoints → expand salah satu endpoint (GET /api/products) → klik "Try it out" → input parameters → klik Execute → melihat response langsung di Swagger UI._

**Vibe Coding: Setup Swagger Documentation (Bareng GitHub Copilot)**

** Tujuan:**  
Membuat dokumentasi API yang interaktif menggunakan OpenAPI/Swagger dengan bantuan Copilot.

** Prompt untuk GitHub Copilot:**

```
// Buat OpenAPI 3.0 specification untuk endpoint GET /api/products
// Include parameters untuk filtering: category, minPrice, maxPrice, search
// Include response 200 dengan schema Product
```

** Langkah-langkah Coding:**

1. **Buat file `swagger.yaml`** di root project
2. **Ketik struktur dasar** (Copilot kurang bagus untuk YAML, lebih baik manual):
   ```yaml
   openapi: 3.0.0
   info:
     title: Health E-Commerce API
     version: 1.0.0
   servers:
     - url: http://localhost:3000
   paths:
     /api/products:
       get:
         summary: Get all products
         # ... Aiman lengkapi detail
   ```
3. **Untuk kode JavaScript, ketik prompt:**
   ```
   // Setup Swagger UI Express untuk serve dokumentasi API
   // Load swagger.yaml dan mount di /api-docs
   ```
4. **Copilot akan suggest setup code:**

   ```javascript
   const swaggerUi = require("swagger-ui-express");
   const YAML = require("yamljs");
   const swaggerDocument = YAML.load("./swagger.yaml");

   app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
   ```

5. **Install dependencies:** `npm install swagger-ui-express yamljs`
6. **Buka browser:** `http://localhost:3000/api-docs`

** Hasil Akhir:**  
Dokumentasi API yang keren dan interaktif! Aila (frontend developer) sekarang bisa lihat dokumentasi lengkap tanpa perlu tanya-tanya ke Aiman.

** Tips:**

- Untuk YAML, Copilot kurang akurat, lebih baik gunakan [Swagger Editor](https://editor.swagger.io/)
- Untuk JavaScript setup, Copilot sangat membantu!

  **Challenge #6: Lengkapi Swagger Documentation**

Tambahkan dokumentasi untuk PUT dan DELETE endpoints yang masih belum ada!

Hint: Ikuti pattern yang sama seperti GET dan POST.

---

## Mini Project: Health E-Commerce API

Sekarang saatnya kita build project lengkap! Kita akan bikin **Health E-Commerce API** dari awal sampai jadi!

### Project Overview

**Apa yang akan kita bangun?**

RESTful API untuk toko online produk kesehatan dengan fitur:

- CRUD produk kesehatan (Vitamin, Supplement, dll)
- Filter produk berdasarkan kategori dan range harga
- Search produk berdasarkan nama atau deskripsi
- Error handling yang baik
- Request logging
- API documentation dengan Swagger
- Testing dengan Postman

  **[Starter Repo Placeholder]**

```
Link ke repository starter project:
https://github.com/your-repo/health-ecommerce-api-starter

Clone dengan:
git clone https://github.com/your-repo/health-ecommerce-api-starter
cd health-ecommerce-api-starter
npm install
```

### Project Structure

Ini struktur folder yang akan kita gunakan:

```
health-ecommerce-api/
├── config/
│   └── database.js          # Konfigurasi MongoDB
├── controllers/
│   └── productController.js # Business logic
├── middleware/
│   ├── errorHandler.js      # Error handling
│   └── logger.js            # Request logging
├── models/
│   └── Product.js           # Schema produk
├── routes/
│   └── productRoutes.js     # Definisi endpoints
├── scripts/
│   └── seed.js             # Database seeding
├── logs/
│   └── access.log          # Log file (auto-generated)
├── .env                    # Environment variables
├── .gitignore
├── server.js               # Entry point
├── swagger.yaml            # API documentation
└── package.json
```

**[Visual Suggestion untuk Ilustrator]**

- Diagram structure project dengan warna berbeda untuk setiap folder
- Panah menunjukkan alur request: server.js → routes → controllers → models → database
- Icon untuk setiap jenis file ( config, controller, model, dll)

### Setup Environment

**Step 1: Bikin File `.env`**

```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/health-ecommerce
```

** Penting:** Jangan commit file `.env` ke Git! Tambahkan ke `.gitignore`:

```
node_modules/
.env
logs/
*.log
```

**Step 2: Install Dependencies**

```bash
npm install
```

**Step 3: Jalankan MongoDB**

```bash
# Windows
mongod

# Mac/Linux
sudo mongod
```

**Step 4: Seed Database**

```bash
npm run seed
```

Output:

```
 MongoDB berhasil terkoneksi!
  Produk lama dihapus
 10 produk berhasil ditambahkan!
 Database seeding selesai!
```

**Step 5: Jalankan Server**

```bash
npm run dev
```

Output:

```
 Server running on port 3000
 API Docs: http://localhost:3000/api-docs
 MongoDB berhasil terkoneksi!
```

**Vibe Coding: Build Complete API (Bareng GitHub Copilot)**

** Tujuan:**  
Membangun Health E-Commerce API lengkap dari nol sampai siap deploy, dengan bantuan GitHub Copilot di setiap langkah.

** Prompt untuk GitHub Copilot (Step by Step):**

**Step 1 - Server Setup:**

```
// Setup Express server dengan MongoDB connection
// Import express, cors, dotenv, dan database config
// Setup middleware: cors, json parser, logger
// Start server di port dari environment variable
```

**Step 2 - Routes:**

```
// Buat Express router untuk product routes
// Mount di /api/products
// Include routes untuk GET, POST, PUT, DELETE
```

**Step 3 - Controllers:**

```
// Buat getAllProducts controller dengan filtering
// Support query params: category, minPrice, maxPrice, search
```

** Langkah-langkah Coding:**

1. **Aiman setup project structure:**
   - Folder: config, controllers, models, routes, middleware, scripts
   - File dasar: server.js, package.json, .env
2. **Ketik prompt Step 1**, accept suggestion Copilot untuk server setup

   - Review: pastikan semua middleware ada
   - Tambah manual: error handler (Copilot sering lupa)

3. **Ketik prompt Step 2**, bikin modular routes

   - Copilot suggest: router structure
   - Aiman review: pastikan semua 5 endpoints ada

4. **Ketik prompt Step 3**, implement controllers

   - Copilot suggest: basic CRUD
   - Aiman tambah: filtering, search, error handling

5. **Aila bantu testing** setiap endpoint dengan Postman

   - Health check → GET products → POST product → UPDATE → DELETE

6. **Aiman setup Swagger documentation**

   - Ketik prompt untuk swagger setup
   - Lengkapi swagger.yaml manual (YAML kurang cocok untuk Copilot)

7. **Bikin seeding script** untuk data sample

   - Prompt: `// Create database seeding script for products`
   - Copilot suggest structure, Aiman isi data

8. **Final testing** - jalankan full test cycle

** Hasil Akhir:**  
Health E-Commerce API yang fully functional, well-documented, dan siap production! Aiman dan Aila berhasil collaborate bikin project lengkap.

** Tips:**

- **Gunakan Copilot untuk boilerplate**, coding manual untuk business logic
- **Pair programming** dengan teman (seperti Aiman & Aila) sangat membantu!
- **Test incremental** - jangan tunggu semua selesai baru test

### Testing Flow

Mari kita test project secara menyeluruh!

**1. Health Check**

```bash
curl http://localhost:3000/health
```

Response:

```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-03-20T10:30:00.000Z"
}
```

**2. Get All Products**

```bash
curl http://localhost:3000/api/products
```

**3. Filter by Category**

```bash
curl http://localhost:3000/api/products?category=Vitamin
```

**4. Filter by Price Range**

```bash
curl http://localhost:3000/api/products?minPrice=50000&maxPrice=150000
```

**5. Search Products**

```bash
curl http://localhost:3000/api/products?search=vitamin
```

**6. Create Product**

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

**7. Update Product**

```bash
curl -X PUT http://localhost:3000/api/products/PRODUCT_ID \
  -H "Content-Type: application/json" \
  -d '{"price": 60000}'
```

**8. Delete Product**

```bash
curl -X DELETE http://localhost:3000/api/products/PRODUCT_ID
```

![API Testing Flow]()
_Diagram flow chart menunjukkan alur testing: Health Check → Get All → Create → Get By ID → Update → Get By ID (verify) → Delete → Get By ID (verify deleted)._

**[GIF Placeholder]**
_GIF menunjukkan proses testing lengkap di Postman: menjalankan semua request dalam collection secara berurutan, setiap request menunjukkan status success (200, 201) dengan response yang benar._

### Check API Documentation

Buka browser dan akses:

```
http://localhost:3000/api-docs
```

Kamu akan lihat dokumentasi lengkap semua endpoints! Coba klik "Try it out" dan test langsung dari Swagger UI!

### Tips & Best Practices

**1. API Versioning**

```javascript
app.use("/api/v1/products", productRoutes);
```

Kalau ada breaking changes, bisa bikin v2 tanpa ganggu v1!

**2. Rate Limiting**

Batasi jumlah request per IP:

```javascript
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 menit
  max: 100, // Max 100 requests per window
});

app.use("/api/", limiter);
```

**3. Input Validation**

Selalu validasi input dari client:

```javascript
const { body, validationResult } = require("express-validator");

const validateProduct = [
  body("name").trim().notEmpty().withMessage("Name wajib diisi"),
  body("price").isNumeric().withMessage("Price harus angka"),
  body("stock").isInt({ min: 0 }).withMessage("Stock harus positif"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

app.post("/api/products", validateProduct, productController.createProduct);
```

**4. Security Headers**

Gunakan Helmet untuk security:

```bash
npm install helmet
```

```javascript
const helmet = require("helmet");
app.use(helmet());
```

**5. CORS Configuration**

Konfigurasi CORS dengan spesifik:

```javascript
const corsOptions = {
  origin: ["http://localhost:3001", "https://yourfrontend.com"],
  credentials: true,
};

app.use(cors(corsOptions));
```

**[Finished Repo Placeholder]**

```
Link ke repository finished project:
https://github.com/your-repo/health-ecommerce-api-finished

Clone untuk referensi:
git clone https://github.com/your-repo/health-ecommerce-api-finished
cd health-ecommerce-api-finished
npm install
```

**Challenge #7: Tambah Fitur Pagination**

Implementasikan pagination untuk GET /api/products!

Hint:

```javascript
const page = parseInt(req.query.page, 10) || 1;
const limit = parseInt(req.query.limit, 10) || 10;
const skip = (page - 1) * limit;

const products = await Product.find(query).skip(skip).limit(limit);

const total = await Product.countDocuments(query);

res.json({
  success: true,
  page,
  limit,
  total,
  pages: Math.ceil(total / limit),
  data: products,
});
```

---

## Ringkasan & Referensi

### Ringkasan Poin Utama

Pada modul ini, peserta telah mempelajari **backend development dengan Express.js**, mencakup REST API principles, routing, middleware, CRUD operations dengan MongoDB, error handling, API testing dengan Postman, dan API documentation dengan Swagger.

Peserta diharapkan kini mampu:

- Membangun REST API yang mengikuti best practices dan standards
- Mengimplementasikan routing dan middleware system di Express
- Connect Express dengan MongoDB untuk persistent data
- Handle errors secara comprehensive dengan custom error classes
- Test API menggunakan Postman dengan automated test scripts
- Dokumentasikan API dengan OpenAPI/Swagger specification
- Deploy production-ready backend applications

Dengan pemahaman ini, peserta telah menguasai **core backend development skills** yang menjadi foundation untuk authentication, security, dan integration dengan services eksternal.

### Kaitan dengan Tujuan Pembelajaran

| Tujuan Pembelajaran              | Pencapaian Melalui Materi                                                               |
| -------------------------------- | --------------------------------------------------------------------------------------- |
| Memahami REST API principles     | Learn stateless architecture, resource-based URLs, proper HTTP methods dan status codes |
| Build server dengan Express      | Hands-on membuat server dari Hello World sampai complete API dengan middleware chain    |
| Implementasi CRUD dengan MongoDB | Controller functions lengkap dengan filtering, searching, sorting, dan pagination       |
| Error handling & logging         | Custom error classes, global error handler, dan Morgan logger untuk production apps     |
| API testing                      | Postman collection lengkap dengan automated tests dan environment variables             |
| API documentation                | OpenAPI/Swagger specification dengan interactive Swagger UI                             |

### Refleksi Akhir

Setelah menyelesaikan modul ini, coba renungkan:

**"Mengapa REST API menggunakan HTTP methods (GET, POST, PUT, DELETE) untuk CRUD operations? Apa keuntungannya dibanding custom endpoints?"**

**"Bagaimana middleware system di Express membantu organize code dan separate concerns? Berikan contoh middleware yang kamu implement."**

**"Kapan sebaiknya menggunakan filtering di query vs filtering di application layer? Apa impact-nya ke performance?"**

Refleksi ini membantu memahami architectural decisions dan mempersiapkan untuk implement authentication dan security di backend.

### Apa yang Sudah Kamu Pelajari?

Selamat! Kamu sudah menyelesaikan Modul 3 tentang Backend Development dengan Express.js!

Mari kita review apa aja yang udah kamu kuasai:

** Konsep Backend Development**

- Paham perbedaan frontend vs backend
- Paham client-server architecture
- Tahu kenapa backend itu penting

** REST API Principles**

- Paham prinsip Stateless, Uniform Interface, Resource-Based
- Bisa mapping CRUD ke HTTP Methods
- Tahu HTTP Status Codes yang tepat

** Express.js Framework**

- Bisa bikin server Express dari nol
- Paham routing dan cara bikin endpoint
- Paham middleware dan cara bikin sendiri

** MongoDB & Mongoose**

- Bisa koneksi ke MongoDB
- Bisa bikin Schema dan Model
- Bisa implementasikan CRUD operations

** Error Handling & Logging**

- Bisa bikin custom error class
- Bisa bikin global error handler
- Bisa logging requests dengan Morgan

** API Testing & Documentation**

- Bisa testing API dengan Postman
- Bisa bikin Postman Collection
- Bisa bikin API documentation dengan Swagger

** Build Complete API**

- Bisa bikin project structure yang baik
- Bisa implementasikan filtering dan search
- Bisa deploy API (opsional)

### Glosarium

Ini istilah-istilah penting yang harus kamu ingat:

| Istilah         | Definisi Sederhana                           |
| --------------- | -------------------------------------------- |
| **API**         | Jembatan komunikasi antar aplikasi           |
| **REST**        | Arsitektur untuk bikin web service           |
| **Express**     | Framework untuk bikin backend dengan Node.js |
| **Middleware**  | Fungsi yang jalan di tengah request-response |
| **Controller**  | Tempat business logic aplikasi               |
| **Route**       | Endpoint yang nerima HTTP request            |
| **Schema**      | Struktur data di database                    |
| **Model**       | Class untuk interact dengan database         |
| **CRUD**        | Create, Read, Update, Delete                 |
| **Endpoint**    | URL yang bisa di-hit client                  |
| **Status Code** | Kode yang nunjukin hasil request             |
| **JSON**        | Format data (JavaScript Object Notation)     |
| **MongoDB**     | Database NoSQL berbasis dokumen              |
| **Mongoose**    | Library untuk kerja dengan MongoDB           |
| **Postman**     | Tools untuk testing API                      |
| **Swagger**     | Tools untuk dokumentasi API                  |

### Referensi Tambahan

Mau belajar lebih dalam? Cek referensi ini:

** Dokumentasi Resmi:**

- [Express.js](https://expressjs.com/)
- [MongoDB](https://docs.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [OpenAPI Specification](https://swagger.io/specification/)
- [Postman Learning Center](https://learning.postman.com/)

** Tutorial & Artikel:**

- [RESTful API Design Best Practices](https://restfulapi.net/)
- [Express.js Production Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html)
- [MongoDB Schema Design Best Practices](https://www.mongodb.com/developer/products/mongodb/mongodb-schema-design-best-practices/)

** Tools:**

- [Postman](https://www.postman.com/)
- [Swagger Editor](https://editor.swagger.io/)
- [MongoDB Compass](https://www.mongodb.com/products/compass)

### Feedback & Improvement

Gimana pengalaman kamu belajar di modul ini? Ada yang masih bingung? Atau ada saran improvement?

Drop feedback kamu ya! Feedback kamu sangat berharga untuk improve modul ini!

---

## Next Steps

### Langkah Selanjutnya

Oke, sekarang kamu udah jago bikin API! Apa selanjutnya?

**1. Practice Makes Perfect! **

Jangan cuma baca, tapi praktekkan! Bikin API untuk domain lain:

- Blog API (posts, comments, users)
- E-Commerce API (products, orders, cart)
- Social Media API (posts, likes, follows)
- TODO List API (tasks, categories, tags)

**2. Improve Current Project **

Tambahkan fitur-fitur ini ke Health E-Commerce API:

- Pagination (hasil per page)
- Sorting (urutkan by price, name, date)
- Field selection (return field tertentu aja)
- Soft delete (set isActive = false, bukan delete beneran)
- Image upload (upload gambar produk)
- Product reviews & ratings

**3. Lanjut ke Modul Selanjutnya! **

Di modul berikutnya, kamu akan belajar:

**Modul 4: Authentication & Secure Coding (OWASP)**

- JWT authentication
- Password hashing
- Role-based access control
- OWASP Top 10
- API security best practices

Siap lanjut? Let's go!

**4. Deploy ke Production! **

Saatnya deploy API kamu supaya bisa diakses dari internet!

Platform yang bisa kamu coba:

- Heroku (gratis untuk starter)
- Railway (mudah dan cepat)
- Vercel (khusus untuk Node.js)
- AWS / Google Cloud (lebih advanced)

**5. Join Community! **

Bergabung dengan komunitas developer:

- Stack Overflow (tanya-jawab)
- Dev.to (baca artikel developer)
- GitHub (explore open source projects)
- Discord communities (diskusi real-time)

### Tips Sukses

** Tips dari Developer Berpengalaman:**

1. **Code every day** → Konsistensi lebih penting dari intensitas
2. **Build real projects** → Jangan cuma tutorial, bikin project sendiri
3. **Read other people's code** → Belajar dari code orang lain
4. **Ask questions** → Jangan malu bertanya kalau stuck
5. **Share your knowledge** → Ajarin orang lain, kamu juga makin paham
6. **Stay updated** → Technology berubah cepat, terus belajar!

### Penutup

**Selamat! Kamu telah menyelesaikan Modul 3! **

Kamu sekarang punya skill untuk bikin backend API yang profesional. Ini adalah fondasi penting untuk jadi Fullstack Developer!

Remember: **Every expert was once a beginner.** Terus belajar, terus praktik, dan jangan menyerah!

**Keep coding, keep learning, and most importantly, have fun! **

---

** Sertifikat Penyelesaian**

Kamu berhak atas sertifikat penyelesaian Modul 3 - Backend Development dengan Express.js!

Untuk mendapatkan sertifikat, pastikan kamu sudah:

- Menyelesaikan semua Vibe Coding sessions
- Menyelesaikan minimal 5 dari 7 Challenges
- Build dan test Health E-Commerce API
- Dokumentasi API dengan Swagger

**Terima kasih sudah belajar bersama kami! Sampai jumpa di modul selanjutnya! **

---

## Daftar Perubahan Subtopik dan Alasan

### Perubahan yang Dilakukan:

**[Baru] Vibe Coding Sections (7 sections)**

- Ditambahkan sesi coding interaktif dengan GitHub Copilot di setiap subtopik utama:
  1. Membuat Server Express Pertama
  2. Membuat Route CRUD Lengkap
  3. Membuat Custom Middleware
  4. Membuat Model Product
  5. Implementasi CRUD Controller
  6. Database Seeding
  7. Setup Error Handler
  8. Testing API dengan Postman
  9. Setup Swagger Documentation
  10. Build Complete API
- Format: Tujuan → Prompt Copilot → Langkah Manual → Hasil → Tips
- **Alasan:** Melatih peserta menggunakan AI tools (GitHub Copilot) dalam workflow development modern, sekaligus memahami kapan harus manual coding dan kapan bisa dibantu AI

**[Baru] Challenge Sections (7 challenges)**

- Tantangan coding mandiri di akhir setiap subtopik besar
- Dilengkapi dengan hints untuk memandu peserta
- **Alasan:** Memberikan latihan hands-on untuk memperdalam pemahaman dan meningkatkan problem-solving skills

**[Baru] Visual Suggestions untuk Ilustrator (6 suggestions)**

- Panduan detail untuk tim ilustrator tentang gambar/diagram yang perlu dibuat
- **Alasan:** Memastikan materi punya visualisasi yang tepat dan membantu pemahaman peserta visual learner

**[Baru] GIF Placeholders dengan Konteks (9 placeholders)**

- Placeholder untuk GIF tutorial step-by-step
- Setiap GIF punya deskripsi jelas tentang apa yang ditampilkan
- **Alasan:** Tutorial video lebih efektif untuk pembelajaran procedural seperti setup tools dan testing

**[Revisi] Bahasa dan Gaya Penulisan**

- Bahasa Indonesia yang lebih natural dan conversational
- Menggunakan analogi real-world (restoran, mall, menu, dll)
- Nama karakter konsisten: Aiman dan Aila
- **Alasan:** Membuat materi lebih engaging dan mudah dipahami fresh graduates, menghilangkan kesan "AI-generated"

**[Baru] Penjelasan "Kenapa" dan "Bagaimana"**

- Setiap konsep dijelaskan: kenapa penting dan bagaimana menggunakannya
- **Alasan:** Peserta tidak hanya tahu "apa" tapi juga memahami "mengapa" dan "bagaimana"

**[Baru] Link Repository Placeholders**

- Placeholder untuk link starter dan finished repository di mini project
- **Alasan:** Memudahkan peserta akses code template dan reference solution

**[Baru] Fun Facts dan Tips dari Developer**

- Fakta menarik (Express dipakai Uber, IBM, dll)
- Tips sukses dari developer berpengalaman
- **Alasan:** Membuat pembelajaran lebih menarik dan memotivasi peserta

**[Baru] Sertifikat Penyelesaian**

- Kriteria untuk mendapatkan sertifikat
- **Alasan:** Memberikan goal yang jelas dan motivasi untuk menyelesaikan modul

**[Baru] Feedback Section**

- Bagian untuk peserta memberikan feedback
- **Alasan:** Continuous improvement berdasarkan input peserta

### Subtopik yang Dipertahankan (Tidak Berubah):

1. Pengantar Backend Development
2. Prinsip Desain REST API
3. Express.js: Framework Backend
4. Routing dan Middleware
5. CRUD API dengan MongoDB
6. Error Handling & Logging
7. Tutorial Postman
8. API Contract dengan OpenAPI/Swagger
9. Mini Project: Health E-Commerce API
10. Ringkasan & Referensi

**Alasan:** Struktur subtopik sudah sesuai dengan silabus dan flow pembelajaran yang logis. Tidak ada penambahan atau pengurangan subtopik, hanya peningkatan kualitas konten di setiap subtopik.

### Konsistensi dengan Starter/Finished Project:

**Semua code examples konsisten** dengan starter-project dan finished-project  
 **Mini project menggunakan struktur folder yang sama** dengan project files yang disediakan  
 **Semua endpoint dan features match** dengan implementasi di finished-project  
 **Database seeding data sama** dengan yang ada di scripts/seed.js

---

_Modul ini adalah bagian dari Program Intermediate Fullstack Developer - Backend Track_  
_Digital Skills Academy - Kominfo_  
_© 2024 All Rights Reserved_
