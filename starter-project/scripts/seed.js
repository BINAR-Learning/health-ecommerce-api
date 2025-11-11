require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../models/Product");
const connectDB = require("../config/database");

/**
 * Script untuk seeding database dengan data sample
 * File ini sudah lengkap - tidak perlu dimodifikasi
 *
 * Jalankan dengan: npm run seed
 */

const products = [
  {
    name: "Vitamin C 1000mg",
    description:
      "Suplemen vitamin C untuk meningkatkan daya tahan tubuh dan melindungi sel dari radikal bebas",
    category: "Vitamin",
    price: 85000,
    stock: 50,
    manufacturer: "PT Sehat Sejahtera",
    imageUrl: "/images/vitamin-c.jpg",
  },
  {
    name: "Vitamin D3 2000 IU",
    description:
      "Suplemen vitamin D untuk kesehatan tulang dan sistem kekebalan tubuh",
    category: "Vitamin",
    price: 120000,
    stock: 30,
    manufacturer: "PT Sehat Alami",
    imageUrl: "/images/vitamin-d.jpg",
  },
  {
    name: "Omega-3 Fish Oil",
    description: "Suplemen minyak ikan untuk kesehatan jantung dan fungsi otak",
    category: "Supplement",
    price: 200000,
    stock: 25,
    manufacturer: "PT Nutri Health",
    imageUrl: "/images/omega3.jpg",
  },
  {
    name: "Multivitamin Complete",
    description: "Multivitamin lengkap untuk memenuhi kebutuhan nutrisi harian",
    category: "Vitamin",
    price: 150000,
    stock: 40,
    manufacturer: "PT Vita Plus",
    imageUrl: "/images/multivitamin.jpg",
  },
  {
    name: "Termometer Digital",
    description:
      "Termometer digital akurat untuk mengukur suhu tubuh dengan cepat",
    category: "Medical Equipment",
    price: 75000,
    stock: 60,
    manufacturer: "PT Medika Tech",
    imageUrl: "/images/thermometer.jpg",
  },
  {
    name: "Masker Medis 3 Ply",
    description: "Masker medis 3 lapis untuk perlindungan maksimal",
    category: "Medical Equipment",
    price: 50000,
    stock: 100,
    manufacturer: "PT Health Care Indonesia",
    imageUrl: "/images/masker.jpg",
  },
  {
    name: "Glucosamine & Chondroitin",
    description: "Suplemen untuk kesehatan sendi dan tulang rawan",
    category: "Supplement",
    price: 180000,
    stock: 20,
    manufacturer: "PT Joint Health",
    imageUrl: "/images/glucosamine.jpg",
  },
  {
    name: "Probiotics 10 Billion CFU",
    description: "Suplemen probiotik untuk kesehatan pencernaan",
    category: "Supplement",
    price: 165000,
    stock: 35,
    manufacturer: "PT Gut Health",
    imageUrl: "/images/probiotics.jpg",
  },
  {
    name: "Blood Pressure Monitor",
    description: "Alat pengukur tekanan darah digital otomatis",
    category: "Medical Equipment",
    price: 350000,
    stock: 15,
    manufacturer: "PT Medika Tech",
    imageUrl: "/images/blood-pressure.jpg",
  },
  {
    name: "Vitamin B Complex",
    description: "Kombinasi vitamin B untuk energi dan metabolisme",
    category: "Vitamin",
    price: 95000,
    stock: 45,
    manufacturer: "PT Vita Plus",
    imageUrl: "/images/vitamin-b.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    // Delete existing products
    await Product.deleteMany();
    console.log("  Existing products deleted");

    // Insert new products
    const createdProducts = await Product.insertMany(products);
    console.log(` ${createdProducts.length} sample products inserted`);

    console.log("\n Sample Product IDs:");
    createdProducts.slice(0, 3).forEach((product) => {
      console.log(`   - ${product.name}: ${product._id}`);
    });

    console.log("\n Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error(" Seeding error:", error);
    process.exit(1);
  }
};

seedDatabase();
