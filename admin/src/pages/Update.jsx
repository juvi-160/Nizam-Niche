import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    subCategory: '',
    stock: '',
    rating: '',
    author: '',
    designer: '',
    material: '',
    artifactCategory: '',
    sizes: '',
    genre: '',
    images: ['']
  });

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/${id}`);
      if (response.status === 200) {
        const data = response.data.product;
        setFormData({
          ...data,
          sizes: data.sizes?.join(', ') || '',
          images: data.images || ['']
        });
      }
    } catch (error) {
      toast.error('Failed to load product.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        sizes: formData.sizes.split(',').map(size => size.trim()),
      };
      const response = await axios.put(`${backendUrl}/api/product/${id}`, payload);
      if (response.status === 200) {
        toast.success('Product updated successfully');
        navigate('/products');
      } else {
        toast.error('Failed to update product');
      }
    } catch (error) {
      toast.error('Update failed');
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="min-h-screen bg-[#efd1c0] p-8 text-[#24160f]">
      <div className="max-w-3xl mx-auto bg-white rounded shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-[#6b1d1d]">Update Product</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="input" />
            <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="input" />
            <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="input" />
            <input name="subCategory" value={formData.subCategory} onChange={handleChange} placeholder="SubCategory" className="input" />
            <input name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" className="input" />
            <input name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating" className="input" />
            <input name="author" value={formData.author} onChange={handleChange} placeholder="Author" className="input" />
            <input name="designer" value={formData.designer} onChange={handleChange} placeholder="Designer" className="input" />
            <input name="material" value={formData.material} onChange={handleChange} placeholder="Material" className="input" />
            <input name="artifactCategory" value={formData.artifactCategory} onChange={handleChange} placeholder="Artifact Category" className="input" />
            <input name="genre" value={formData.genre} onChange={handleChange} placeholder="Genre" className="input" />
            <input name="sizes" value={formData.sizes} onChange={handleChange} placeholder="Sizes (comma separated)" className="input" />
          </div>

          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" />

          <input name="images" value={formData.images[0]} onChange={(e) => setFormData({ ...formData, images: [e.target.value] })} placeholder="Image URL" className="w-full p-2 border rounded" />

          <button type="submit" className="bg-[#6b1d1d] text-[#efd1c0] px-6 py-2 rounded hover:opacity-90 transition">
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
