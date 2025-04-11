import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    images: { type: [String] , min: 1, max: 8, required: true },
    category: {
      type: String,
      enum: ["Women", "Men", "Artifacts", "Books"],
      required: true,
    },
    subCategory: {
      type: String,
      enum: [
        "Womens Clothing",
        "Womens Jewellery",
        "Womens Shoes",
        "Mens Clothing",
        "Mens Accessories",
        "Mens Shoes",
        "Artifacts",
        "Books",
      ],
      required: true,
    },
    sizes: {
      type: [String],
      enum: ["XS", "S", "M", "L", "XL"],
      required: function () {
        return (
          this.subCategory?.includes("Clothing") ||
          this.subCategory?.includes("Shoes")
        );
      },
    },
    stock: { type: Number, required: true },
    genre: {
      type: String,
      required: function () {
        return this.category === "Books";
      },
      enum: ["History", "Fiction & Poetry", "Culture & Heritage", "Cook Books"],
    },
    artifactCategory: {
      type: String,
      required: function () {
        return this.category === "Artifacts";
      },
      enum: ["Suclpted Figures", "Islamic Art", "Paintings", "Bidriware" ],
    },
    rating: { type: Number, min: 0, max: 5 },
    material: { type: String, required: true },
    author: {
      type: String,
      required: function () {
        return this.category === "Books";
      },
    },
    designer: {
      type: String,
      required: function () {
        return this.category === "Women" || this.category === "Men";
      },
    },
  },
  { timestamps: true }
);


// productModel.js
export const Product = mongoose.model("Product", productSchema);