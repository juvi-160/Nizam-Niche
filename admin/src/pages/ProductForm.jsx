import React from 'react';
const useState = React.useState;
import Upload from '../assets/upload.jpg';
import Headers from '../components/Header';
import Nav from '../components/Nav';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const ProductForm = ({ token }) => {
  // Image states
  const [images, setImages] = useState(Array(4).fill(null));
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Women');
  const [subCategory, setSubCategory] = useState('Womens Clothing');
  const [price, setPrice] = useState('');
  const [genre, setGenre] = useState('History');
  const [stock, setStock] = useState('');
  const [rating, setRating] = useState('');
  const [author, setAuthor] = useState('');
  const [designer, setDesigner] = useState('');
  const [material, setMaterial] = useState('');
  const [artifactCategory, setArtifactCategory] = useState('Suclpted Figures');
  const [sizes, setSizes] = useState([]);

  const handleImageChange = (index, file) => {
    const newImages = [...images];
    newImages[index] = file;
    setImages(newImages);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("price", price);
      formData.append("genre", genre);
      formData.append("stock", stock);
      formData.append("rating", rating);
      formData.append("author", author);
      formData.append("designer", designer);
      formData.append("material", material);
      formData.append("artifactCategory", artifactCategory);
      formData.append("sizes", JSON.stringify(sizes));

      images.forEach((img, index) => {
        if (img) formData.append(`img${index + 1}`, img);
      });

      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        // Reset form
        setTitle('');
        setDescription('');
        setCategory('Women');
        setSubCategory('Womens Clothing');
        setPrice('');
        setGenre('History');
        setStock('');
        setRating('');
        setAuthor('');
        setDesigner('');
        setMaterial('');
        setArtifactCategory('Suclpted Figures');
        setSizes([]);
        setImages(Array(4).fill(null));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error uploading product:", error);
      toast.error(error.response?.data?.message || "Error uploading product");
    }
  };

  // Determine which fields to show based on category
  const showSizeOptions = ['Womens Clothing', 'Womens Shoes', 'Mens Clothing', 'Mens Shoes'].includes(subCategory);
  const showGenreField = category === 'Books';
  const showArtifactCategoryField = category === 'Artifacts';
  const showAuthorField = category === 'Books';
  const showDesignerField = ['Women', 'Men'].includes(category);

  return (
    <div className="min-h-screen bg-gray-50">
      <Headers />
      <div className="flex">
        <div className="w-64 bg-[#24160f] min-h-screen shadow-lg">
          <Nav />
        </div>
        
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Add New Product</h1>
          
          <form onSubmit={onSubmitHandler} className="space-y-8">
            {/* Image Upload Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Product Images</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((img, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <label htmlFor={`img-${index}`} className="cursor-pointer">
                      <div className="w-full h-40 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                        {img ? (
                          <img 
                            src={URL.createObjectURL(img)} 
                            alt={`Preview ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-center p-4">
                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="mt-1 text-sm text-gray-600">Upload image</p>
                          </div>
                        )}
                      </div>
                    </label>
                    <input
                      id={`img-${index}`}
                      type="file"
                      onChange={(e) => handleImageChange(index, e.target.files[0])}
                      className="hidden"
                      accept="image/*"
                    />
                    {img && (
                      <button
                        type="button"
                        onClick={() => handleImageChange(index, null)}
                        className="mt-2 text-sm text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Basic Information Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Title *</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d7b99a] focus:border-[#d7b99a] outline-none transition"
                    placeholder="Enter product title"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price *</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-full pl-8 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d7b99a] focus:border-[#d7b99a] outline-none transition"
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      required
                    />
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d7b99a] focus:border-[#d7b99a] outline-none transition min-h-[120px]"
                    placeholder="Detailed product description..."
                    required
                  />
                </div>
              </div>
            </div>

            {/* Category & Stock Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Category & Inventory</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                  <select
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                      // Reset subcategory when main category changes
                      if (e.target.value === 'Women') setSubCategory('Womens Clothing');
                      if (e.target.value === 'Men') setSubCategory('Mens Clothing');
                      if (e.target.value === 'Artifacts') setSubCategory('Artifacts');
                      if (e.target.value === 'Books') setSubCategory('Books');
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d7b99a] focus:border-[#d7b99a] outline-none transition"
                    required
                  >
                    <option value="Women">Women</option>
                    <option value="Men">Men</option>
                    <option value="Artifacts">Artifacts</option>
                    <option value="Books">Books</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sub-category *</label>
                  <select
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d7b99a] focus:border-[#d7b99a] outline-none transition"
                    required
                  >
                    {category === 'Women' && (
                      <>
                        <option value="Womens Clothing">Clothing</option>
                        <option value="Womens Jewellery">Jewellery</option>
                        <option value="Womens Shoes">Shoes</option>
                      </>
                    )}
                    {category === 'Men' && (
                      <>
                        <option value="Mens Clothing">Clothing</option>
                        <option value="Mens Accessories">Accessories</option>
                        <option value="Mens Shoes">Shoes</option>
                      </>
                    )}
                    {category === 'Artifacts' && (
                      <option value="Artifacts">Artifacts</option>
                    )}
                    {category === 'Books' && (
                      <option value="Books">Books</option>
                    )}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stock *</label>
                  <input
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d7b99a] focus:border-[#d7b99a] outline-none transition"
                    placeholder="Available quantity"
                    min="0"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d7b99a] focus:border-[#d7b99a] outline-none transition"
                      placeholder="0-5"
                      min="0"
                      max="5"
                      step="0.1"
                    />
                    <span className="ml-2 text-gray-500">/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Size Options (Conditional) */}
            {showSizeOptions && (
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Sizes</h2>
                <div className="flex flex-wrap gap-3">
                  {["S", "M", "L", "XL", "Free Size"].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSizes(prev =>
                        prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
                      )}
                      className={`px-6 py-2 rounded-lg border-2 transition ${
                        sizes.includes(size)
                          ? "bg-[#f3e5dc] border-[#d7b99a] text-[#24160f]"
                          : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Material Field */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Material *</h2>
              <input
                type="text"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d7b99a] focus:border-[#d7b99a] outline-none transition"
                placeholder="Product material (e.g. Cotton, Silk, etc.)"
                required
              />
            </div>

            {/* Category-Specific Fields */}
            {showDesignerField && (
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Designer *</h2>
                <input
                  type="text"
                  value={designer}
                  onChange={(e) => setDesigner(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d7b99a] focus:border-[#d7b99a] outline-none transition"
                  placeholder="Designer name"
                  required
                />
              </div>
            )}

            {showGenreField && (
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Book Genre *</h2>
                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d7b99a] focus:border-[#d7b99a] outline-none transition"
                  required
                >
                  <option value="History">History</option>
                  <option value="Fiction & Poetry">Fiction & Poetry</option>
                  <option value="Culture & Heritage">Culture & Heritage</option>
                  <option value="Cook Books">Cook Books</option>
                </select>
              </div>
            )}

            {showAuthorField && (
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Author *</h2>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d7b99a] focus:border-[#d7b99a] outline-none transition"
                  placeholder="Author name"
                  required
                />
              </div>
            )}

            {showArtifactCategoryField && (
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Artifact Category *</h2>
                <select
                  value={artifactCategory}
                  onChange={(e) => setArtifactCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d7b99a] focus:border-[#d7b99a] outline-none transition"
                  required
                >
                  <option value="Suclpted Figures">Sculpted Figures</option>
                  <option value="Islamic Art">Islamic Art</option>
                  <option value="Paintings">Paintings</option>
                  <option value="Bidriware">Bidriware</option>
                </select>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-[#d7b99a] hover:bg-[#c5a586] text-[#24160f] font-semibold rounded-lg transition duration-200 shadow-sm"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;