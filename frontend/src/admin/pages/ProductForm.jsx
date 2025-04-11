import React from "react";
import { useForm } from "react-hook-form";

const ProductForm = ({ onSubmit, defaultValues = {}, isEditing = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4">
        {isEditing ? "Edit Product" : "Add New Product"}
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Product Name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Price</label>
        <input
          type="text"
          {...register("price", { required: "Price is required" })}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Status</label>
        <select
          {...register("status", { required: "Status is required" })}
          className="w-full px-3 py-2 border rounded-md"
        >
          <option value="">Select status</option>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
        {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
      >
        {isEditing ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
};

export default ProductForm;
