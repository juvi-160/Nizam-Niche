import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";
import { Product } from "../models/productModel.js";

//add product
export const addProduct = async (req, res) => {
  try {
    const {
      title,
      price,
      description,
      category,
      subCategory,
      sizes,
      stock,
      genre,
      artifactCategory,
      rating,
      material,
      author,
      designer,
    } = req.body;

    const files = [
      req.files.img1,
      req.files.img2,
      req.files.img3,
      req.files.img4,
    ]
      .flat()
      .filter(Boolean);

    // Utility function to upload using stream
    const uploadToCloudinary = (file) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: `folder/${category}/${subCategory}`,
            resource_type: "image",
          },
          (error, result) => {
            if (error) return reject(error);
            resolve(result.secure_url);
          }
        );
        streamifier.createReadStream(file.buffer).pipe(stream);
      });
    };

    const imgUrl = await Promise.all(files.map(uploadToCloudinary));

    const productData = {
      title,
      price: Number(price),
      description,
      category,
      subCategory,
      sizes: sizes ? JSON.parse(sizes) : undefined,
      stock,
      rating: Number(rating),
      genre: genre || undefined,
      artifactCategory: artifactCategory || undefined,
      material,
      author: author || undefined,
      designer: designer || undefined,
      images: imgUrl,
      date: Date.now(),
    };

    console.log("Product Data:", productData);

    const product = new Product(productData);
    await product.save();

    res.status(201).json({ success: true, message: "Product added!", imgUrl });
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

//all products
export const allProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ sucess: true, products });
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

//delete product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ success: false, message: "Product ID is required" });
    }

    await Product.findByIdAndDelete(id);
    res.json({ success: true, message: "Product Removed" });
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};


//update product
// update product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      price,
      description,
      category,
      subCategory,
      sizes,
      stock,
      genre,
      artifactCategory,
      rating,
      material,
      author,
      designer
    } = req.body;

    // Handle new image uploads if any
    const files = [
      req.files?.img1,
      req.files?.img2,
      req.files?.img3,
      req.files?.img4,
    ]
      .flat()
      .filter(Boolean);

    let newImages = [];

    const uploadToCloudinary = (file) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: `folder/${category}/${subCategory}`,
            resource_type: "image",
          },
          (error, result) => {
            if (error) return reject(error);
            resolve(result.secure_url);
          }
        );
        streamifier.createReadStream(file.buffer).pipe(stream);
      });
    };

    if (files.length > 0) {
      newImages = await Promise.all(files.map(uploadToCloudinary));
    }

    // Build the updated fields
    const updatedFields = {
      title,
      price: Number(price),
      description,
      category,
      subCategory,
      sizes: sizes ? JSON.parse(sizes) : undefined,
      stock,
      rating: Number(rating),
      genre: genre || undefined,
      artifactCategory: artifactCategory || undefined,
      material,
      author: author || undefined,
      designer: designer || undefined,
    };

    if (newImages.length > 0) {
      updatedFields.images = newImages;
    }

    // Remove undefined fields
    Object.keys(updatedFields).forEach(
      (key) => updatedFields[key] === undefined && delete updatedFields[key]
    );

    const updatedProduct = await Product.findByIdAndUpdate(id, updatedFields, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.json({ success: true, message: "Product updated!", updatedProduct });

  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};


//get product by id
export const getProductById = async (req, res) => {
    try{
        const { id } = req.params;
        const product = await Product.findById(id);
        res.json({ success: true, product });

    }catch(err){
        console.error("ERROR:", err);
        res.status(500).json({ success: false, message: err.message });
    }
};
