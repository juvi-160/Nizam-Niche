import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const Products = ({ token }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/all`);
      if (response.status === 200) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to fetch products.");
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(
        `${backendUrl}/api/product/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        toast.success(response.data.message);
        await fetchProducts(); // Refresh product list after deletion
      } else {
        toast.error(response.data.message || "Error deleting product.");
      }
    } catch (error) {
      console.error("Error deleting product:", error.message);
      toast.error("Failed to delete product.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-[#6b1d1d] text-[#efd1c0]">
        <div className="w-1/4 bg-[#24160f] text-[#efd1c0] p-4 shadow-lg">
          <Nav />
        </div>

        <div className="w-3/4 p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">All Products</h2>
            <Link
              to="/addProduct"
              className="bg-[#efd1c0] text-[#6b1d1d] px-4 py-2 rounded hover:opacity-90 transition"
            >
              + Add Product
            </Link>
          </div>

          {/* Table header */}
          <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-4 bg-[#24160f] text-sm text-[#efd1c0] font-semibold">
            <div>Image</div>
            <div>Title</div>
            <div>Price</div>
            <div>Category</div>
            <div className="text-center">Action</div>
          </div>

          {/* Table rows */}
          {products.map((item, index) => (
            <div
              key={index}
              className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-4 border-b border-[#24160f] text-sm"
            >
              <div>
                {Array.isArray(item.img) &&
                item.img.length > 0 &&
                item.img[0] ? (
                  <img
                    src={item.img[0]}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                ) : (
                  <img
                    src="https://via.placeholder.com/64?text=No+Image"
                    alt="No image"
                    className="w-16 h-16 object-cover rounded opacity-70"
                  />
                )}
              </div>
              <div>{item.title}</div>
              <div>
                {currency}
                {item.price}
              </div>
              <div>{item.category}</div>
              <div className="flex justify-center space-x-4">
                <Link
                  to={`/editProduct/${item._id}`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(item._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
