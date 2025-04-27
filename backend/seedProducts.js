import dotenv from "dotenv";
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import { Product } from "./models/productModel.js"; // Adjust path if needed
import { products } from "./productsData.js"; // Your products array here

dotenv.config(); // To use MONGO_URI from .env file

connectDB();
connectCloudinary();

const seedProducts = async () => {
  try {
    await connectDB();

    // Clear existing products first (optional)
    await Product.deleteMany();
    console.log("Old products removed");

    // Insert new products
    const createdProducts = await Product.insertMany(products);
    console.log(`Inserted ${createdProducts.length} products`);

    process.exit(); // Exit after seeding
  } catch (error) {
    console.error("Seeding error:", error.message);
    process.exit(1);
  }
};

seedProducts();
