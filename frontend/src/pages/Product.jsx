import React, { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router';
import { ShopContext } from '../context/ShopContext';
import { Star, Heart, HeartOff } from 'lucide-react';
import TopCollections from '../components/TopCollections';

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [wishlist, setWishlist] = useState(false);

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find(
        (item) => item.id.toString() === productId
      );
      if (foundProduct) {
        setProductData(foundProduct);
        setImage(foundProduct.images[0]);
      }
    }
  }, [productId, products]);

  if (!productData) {
    return (
      <div className="bg-[#efd1c0] min-h-screen">
        <Layout>
          <p className="text-center p-10 text-lg">Loading product...</p>
        </Layout>
      </div>
    );
  }

  const isClothingOrShoes =
    productData.subCategory?.includes("Clothing") ||
    productData.subCategory?.includes("Shoes");

  return (
    <div className="bg-[#efd1c0] min-h-screen">
      <Layout>
        {/* Product Details */}
        <div className="border-t-2 pt-8 px-4 sm:px-6 md:px-12 transition-opacity ease-in duration-500 opacity-100">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Product Images */}
            <div className="flex flex-col-reverse gap-4 lg:flex-row lg:flex-[1.2]">
              {/* Thumbnails */}
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto">
                {productData.images?.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    onClick={() => setImage(img)}
                    className="w-20 h-20 object-cover cursor-pointer border border-gray-300 rounded-md shadow-md"
                    alt={`product-${index}`}
                  />
                ))}
              </div>
              {/* Main Image */}
              <div className="w-full flex justify-center lg:w-[80%]">
                <img
                  src={image}
                  alt="Selected"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex-1 text-[#24160f]">
              <div className="flex justify-between items-start">
                <h1 className="text-2xl sm:text-3xl font-bold">{productData.title}</h1>
                <button onClick={() => setWishlist(!wishlist)}>
                  {wishlist ? (
                    <Heart className="text-red-500" fill="red" />
                  ) : (
                    <HeartOff className="text-gray-500" />
                  )}
                </button>
              </div>

              {/* Ratings */}
              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 text-yellow-700" />
                ))}
                <p className="pl-2 text-sm">({productData.rating})</p>
              </div>

              {/* Price */}
              <p className="mt-4 text-xl sm:text-2xl font-semibold">
                {currency}
                {productData.price}
              </p>

              {/* Description */}
              <p className="mt-4 text-base leading-relaxed">{productData.description}</p>

              {/* Extra Info */}
              <div className="mt-6 space-y-2 text-sm text-[#463730]">
                <p><strong>Category:</strong> {productData.category || "General"}</p>
                <p><strong>Subcategory:</strong> {productData.subCategory || "N/A"}</p>
                <p><strong>Material:</strong> {productData.material || "N/A"}</p>

                {productData.category === "Books" && (
                  <>
                    <p><strong>Author:</strong> {productData.author || "Not mentioned"}</p>
                    <p><strong>Genre:</strong> {productData.genre || "Not mentioned"}</p>
                  </>
                )}

                {productData.category === "Artifacts" && (
                  <p><strong>Artifact Type:</strong> {productData.artifactCategory || "Not mentioned"}</p>
                )}

                {(productData.category === "Women" || productData.category === "Men") && (
                  <>
                    <p><strong>Designer:</strong> {productData.designer || "Not mentioned"}</p>
                    {isClothingOrShoes && productData.sizes?.length > 0 && (
                      <p><strong>Available Sizes:</strong> {productData.sizes.join(', ')}</p>
                    )}
                  </>
                )}
              </div>

              {/* Add to Cart */}
              <button className="mt-6 w-full sm:w-auto px-6 py-2 bg-[#24160f] text-white rounded-full hover:bg-[#3b2515] transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Top Collection */}
        <div className="p-4 sm:p-8">
          <TopCollections />
        </div>
      </Layout>
    </div>
  );
};

export default Product;
