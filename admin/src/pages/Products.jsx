import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import { Edit, Trash2, Plus, Search, ChevronLeft, ChevronRight, X, Check } from "lucide-react";

const Products = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: "",
    price: "",
    stock: "",
    category: "",
    subCategory: ""
  });

  // Fetch products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${backendUrl}/api/product/all`);
      
      if (response.status === 200 && Array.isArray(response.data?.products)) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data?.message || "Unexpected response structure.");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  // Delete product
  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    
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
        await fetchProducts();
      } else {
        toast.error(response.data?.message || "Error deleting product.");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error(error.response?.data?.message || "Failed to delete product.");
    }
  };

  // Edit product
  const startEditing = (product) => {
    setEditingProduct(product._id);
    setEditFormData({
      title: product.title,
      price: product.price,
      stock: product.stock,
      category: product.category,
      subCategory: product.subCategory
    });
  };

  const cancelEditing = () => {
    setEditingProduct(null);
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value
    });
  };

  const saveEditedProduct = async () => {
    try {
      const response = await axios.put(
        `${backendUrl}/api/product/update/${editingProduct}`,
        editFormData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Product updated successfully");
        await fetchProducts();
        setEditingProduct(null);
      } else {
        toast.error(response.data?.message || "Error updating product.");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error(error.response?.data?.message || "Failed to update product.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-1">
        <Nav />
        
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col space-y-6">
            {/* Header with title and actions */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Product Management</h1>
                <p className="text-gray-600">Manage your product inventory</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d7b99a] focus:border-[#d7b99a] outline-none transition w-full"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1); // Reset to first page on search
                    }}
                  />
                </div>
                
                <Link
                  to="/addProduct"
                  className="flex items-center justify-center gap-2 bg-[#d7b99a] hover:bg-[#c5a586] text-[#24160f] px-4 py-2 rounded-lg font-medium transition"
                >
                  <Plus size={18} />
                  <span className="hidden sm:inline">Add Product</span>
                </Link>
              </div>
            </div>

            {/* Stats Cards - Responsive Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-xs sm:text-sm text-gray-500">Total Products</p>
                <p className="text-xl sm:text-2xl font-semibold">{products.length}</p>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-xs sm:text-sm text-gray-500">Active Products</p>
                <p className="text-xl sm:text-2xl font-semibold">{products.filter(p => p.stock > 0).length}</p>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-xs sm:text-sm text-gray-500">Out of Stock</p>
                <p className="text-xl sm:text-2xl font-semibold">{products.filter(p => p.stock <= 0).length}</p>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-xs sm:text-sm text-gray-500">Average Price</p>
                <p className="text-xl sm:text-2xl font-semibold">
                  {products.length > 0 
                    ? `${currency}${(products.reduce((sum, p) => sum + p.price, 0) / products.length).toFixed(2)}` 
                    : `${currency}0`}
                </p>
              </div>
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              {loading ? (
                <div className="p-8 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#d7b99a] mx-auto"></div>
                  <p className="mt-4 text-gray-600">Loading products...</p>
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-gray-600">
                    {searchTerm ? "No products match your search." : "No products available."}
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                        <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentProducts.map((product) => (
                        <tr key={product._id} className="hover:bg-gray-50">
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                {product.images?.[0] ? (
                                  <img 
                                    className="h-10 w-10 rounded-md object-cover" 
                                    src={product.images[0]} 
                                    alt={product.title} 
                                    onError={(e) => {
                                      e.target.onerror = null;
                                      e.target.src = "https://via.placeholder.com/40?text=No+Image";
                                    }}
                                  />
                                ) : (
                                  <div className="h-10 w-10 rounded-md bg-gray-200 flex items-center justify-center">
                                    <span className="text-xs text-gray-500">No Image</span>
                                  </div>
                                )}
                              </div>
                              <div className="ml-3">
                                {editingProduct === product._id ? (
                                  <input
                                    type="text"
                                    name="title"
                                    value={editFormData.title}
                                    onChange={handleEditFormChange}
                                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                                  />
                                ) : (
                                  <div className="text-sm font-medium text-gray-900 line-clamp-1">{product.title}</div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            {editingProduct === product._id ? (
                              <div className="space-y-2">
                                <select
                                  name="category"
                                  value={editFormData.category}
                                  onChange={handleEditFormChange}
                                  className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                                >
                                  <option value="Women">Women</option>
                                  <option value="Men">Men</option>
                                  <option value="Artifacts">Artifacts</option>
                                  <option value="Books">Books</option>
                                </select>
                                <select
                                  name="subCategory"
                                  value={editFormData.subCategory}
                                  onChange={handleEditFormChange}
                                  className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                                >
                                  {editFormData.category === "Women" && (
                                    <>
                                      <option value="Womens Clothing">Clothing</option>
                                      <option value="Womens Jewellery">Jewellery</option>
                                      <option value="Womens Shoes">Shoes</option>
                                    </>
                                  )}
                                  {editFormData.category === "Men" && (
                                    <>
                                      <option value="Mens Clothing">Clothing</option>
                                      <option value="Mens Accessories">Accessories</option>
                                      <option value="Mens Shoes">Shoes</option>
                                    </>
                                  )}
                                  {editFormData.category === "Artifacts" && (
                                    <option value="Artifacts">Artifacts</option>
                                  )}
                                  {editFormData.category === "Books" && (
                                    <option value="Books">Books</option>
                                  )}
                                </select>
                              </div>
                            ) : (
                              <>
                                <div className="text-sm text-gray-900">{product.category}</div>
                                <div className="text-sm text-gray-500">{product.subCategory}</div>
                              </>
                            )}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            {editingProduct === product._id ? (
                              <div className="flex items-center">
                                <span className="mr-1">{currency}</span>
                                <input
                                  type="number"
                                  name="price"
                                  value={editFormData.price}
                                  onChange={handleEditFormChange}
                                  className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                                  step="0.01"
                                  min="0"
                                />
                              </div>
                            ) : (
                              <div className="text-sm text-gray-900">
                                {currency}{product.price}
                              </div>
                            )}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            {editingProduct === product._id ? (
                              <input
                                type="number"
                                name="stock"
                                value={editFormData.stock}
                                onChange={handleEditFormChange}
                                className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                                min="0"
                              />
                            ) : (
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                              }`}>
                                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                            {editingProduct === product._id ? (
                              <div className="flex justify-end space-x-2">
                                <button
                                  onClick={saveEditedProduct}
                                  className="text-green-600 hover:text-green-800 p-1"
                                  title="Save"
                                >
                                  <Check size={18} />
                                </button>
                                <button
                                  onClick={cancelEditing}
                                  className="text-red-600 hover:text-red-800 p-1"
                                  title="Cancel"
                                >
                                  <X size={18} />
                                </button>
                              </div>
                            ) : (
                              <div className="flex justify-end space-x-3">
                                <button
                                  onClick={() => startEditing(product)}
                                  className="text-[#d7b99a] hover:text-[#c5a586] p-1"
                                  title="Edit"
                                >
                                  <Edit size={18} />
                                </button>
                                <button
                                  onClick={() => deleteProduct(product._id)}
                                  className="text-red-500 hover:text-red-700 p-1"
                                  title="Delete"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredProducts.length > productsPerPage && (
              <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200">
                <div className="flex-1 flex justify-between sm:hidden">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Next
                  </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">{indexOfFirstProduct + 1}</span> to{' '}
                      <span className="font-medium">{Math.min(indexOfLastProduct, filteredProducts.length)}</span> of{' '}
                      <span className="font-medium">{filteredProducts.length}</span> results
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Previous</span>
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                        <button
                          key={number}
                          onClick={() => paginate(number)}
                          className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                            currentPage === number
                              ? 'z-10 bg-[#d7b99a] border-[#d7b99a] text-[#24160f]'
                              : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                          }`}
                        >
                          {number}
                        </button>
                      ))}
                      
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Next</span>
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;