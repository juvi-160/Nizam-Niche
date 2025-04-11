import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Header from "../components/Header";
import Nav from "../components/Nav";

const ProductForm = ({ isEditing = false, productId }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const category = watch("category");
  const subCategory = watch("subCategory");

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`/api/products/${productId}`);
      reset(res.data);
    } catch (error) {
      console.error("Error fetching product", error);
    }
  };

  useEffect(() => {
    if (isEditing && productId) {
      fetchProduct();
    }
  }, [isEditing, productId]);

  const onSubmit = async (data) => {
    try {
      if (isEditing) {
        await axios.put(`/api/products/${productId}`, data);
        alert("Product updated!");
      } else {
        await axios.post("/api/products", data);
        alert("Product added!");
      }
    } catch (error) {
      console.error("Error submitting product", error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex">
        <div className="w-1/4 bg-[#24160f] min-h-screen shadow-lg">
          <Nav />
        </div>

        <div className="w-3/4 flex justify-center items-start p-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl grid gap-4"
          >
            <h2 className="text-xl font-semibold mb-4">
              {isEditing ? "Edit Product" : "Add New Product"}
            </h2>

            <input {...register("title", { required: "Title is required" })} placeholder="Title" className="form-input" />
            {errors.title && <p className="text-red-500">{errors.title.message}</p>}

            <textarea {...register("description", { required: true })} placeholder="Description" className="form-textarea" />
            {errors.description && <p className="text-red-500">Description is required</p>}

            <input {...register("price", { required: true, valueAsNumber: true })} placeholder="Price" type="number" className="form-input" />

            <input {...register("images", { required: true })} placeholder="Image URLs (comma separated)" className="form-input" />

            <select {...register("category", { required: true })} className="form-select">
              <option value="">Select Category</option>
              <option value="Women">Women</option>
              <option value="Men">Men</option>
              <option value="Artifacts">Artifacts</option>
              <option value="Books">Books</option>
            </select>

            <select {...register("subCategory", { required: true })} className="form-select">
              <option value="">Select Subcategory</option>
              <option value="Womens Clothing">Womens Clothing</option>
              <option value="Womens Jewellery">Womens Jewellery</option>
              <option value="Womens Shoes">Womens Shoes</option>
              <option value="Mens Clothing">Mens Clothing</option>
              <option value="Mens Accessories">Mens Accessories</option>
              <option value="Mens Shoes">Mens Shoes</option>
              <option value="Artifacts">Artifacts</option>
              <option value="Books">Books</option>
            </select>

            {(subCategory?.includes("Clothing") || subCategory?.includes("Shoes")) && (
              <div>
                <label className="block text-sm font-medium mb-1">Sizes</label>
                <div className="flex gap-2">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <label key={size}>
                      <input type="checkbox" value={size} {...register("sizes")} />
                      <span className="ml-1">{size}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <input {...register("stock", { required: true, valueAsNumber: true })} type="number" placeholder="Stock" className="form-input" />

            {category === "Books" && (
              <>
                <input {...register("author", { required: true })} placeholder="Author" className="form-input" />
                <select {...register("genre", { required: true })} className="form-select">
                  <option value="">Select Genre</option>
                  <option value="History">History</option>
                  <option value="Fiction & Poetry">Fiction & Poetry</option>
                  <option value="Culture & Heritage">Culture & Heritage</option>
                  <option value="Cook Books">Cook Books</option>
                </select>
              </>
            )}

            {category === "Artifacts" && (
              <select {...register("artifactCategory", { required: true })} className="form-select">
                <option value="">Select Artifact Category</option>
                <option value="Suclpted Figures">Suclpted Figures</option>
                <option value="Islamic Art">Islamic Art</option>
                <option value="Paintings">Paintings</option>
                <option value="Bidriware">Bidriware</option>
              </select>
            )}

            {(category === "Women" || category === "Men") && (
              <input {...register("designer", { required: true })} placeholder="Designer" className="form-input" />
            )}

            <input {...register("material", { required: true })} placeholder="Material" className="form-input" />

            <input {...register("rating", { valueAsNumber: true })} type="number" min={0} max={5} placeholder="Rating (0-5)" className="form-input" />

            <button type="submit" className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
              {isEditing ? "Update Product" : "Add Product"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
