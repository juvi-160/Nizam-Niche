import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router";
import { ShopContext } from "../context/ShopContext";
import { Star, Heart, HeartOff } from "lucide-react";
import RelatedProducts from "../components/RelatedProducts";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart, addToWishlist } =
    useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [wishlist, setWishlist] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    console.log("All products:", products);
    console.log("looking for product id:",productId)
    if (products.length > 0) {
      const foundProduct = products.find(
        (item) => item._id && item._id.toString() === productId
      );
      console.log("Found product:", foundProduct);
      if (foundProduct) {
        setProductData(foundProduct);
        setImage(foundProduct.images?.[0] || "");
      }
    }
  }, [productId, products]);useEffect(() => {
  const findProduct = () => {
    // First check if products are loaded
    if (products.length === 0) {
      console.log("Products array is empty");
      return;
    }

    // Debug: log all product IDs
    console.log("All product IDs:", products.map(p => p.id));

    // More flexible ID comparison
    const foundProduct = products.find(item => {
      // Compare both as strings to avoid type mismatch
      const itemId = item._id?.toString().trim();
      const searchId = productId?.toString().trim();
      return itemId === searchId;
    });

    console.log("Comparison result:", foundProduct ? "FOUND" : "NOT FOUND");

    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.images?.[0] || "");
    } else {
      console.error(`Product with ID ${productId} not found in:`, products);
    }
  };

  findProduct();
}, [productId, products]);

  
  const isClothingOrShoes =
    productData?.subCategory?.includes("Clothing") ||
    productData?.subCategory?.includes("Shoes");

  const handleAddToCart = () => {
    if (isClothingOrShoes && !selectedSize) {
      toast.error("Please select a size before adding to cart.");
      return;
    }
    const sizeToSend = isClothingOrShoes ? selectedSize : null;
    addToCart(productData.id, sizeToSend);
  };

  const handleAddToWishlist = () => {
    if (isClothingOrShoes && !selectedSize) {
      toast.error("Please select a size before adding to wishlist.");
      return;
    }
    const sizeToSend = isClothingOrShoes ? selectedSize : null;
    if (wishlist) {
      // Optional: removeFromWishlist(productData.id);
      setWishlist(false);
    } else {
      addToWishlist(productData.id, sizeToSend);
      setWishlist(true);
    }
  };

  if (!productData) {
    return (
      <div className="bg-[#efd1c0] min-h-screen">
        <Layout>
          <p className="text-center p-10 text-lg">Loading product...</p>
        </Layout>
      </div>
    );
  }

  return (
    <div className="bg-[#efd1c0] min-h-screen">
      <Layout>
        <ToastContainer />
        <div className="border-t-2 pt-8 px-4 sm:px-6 md:px-12 transition-opacity ease-in duration-500 opacity-100">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Images */}
            <div className="flex flex-col-reverse gap-4 lg:flex-row lg:flex-[1.2]">
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
              <div className="w-full flex justify-center lg:w-[80%]">
                <img
                  src={image}
                  alt="Selected"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-[#24160f]">
              <div className="flex justify-between items-start">
                <h1 className="text-2xl sm:text-3xl font-bold">
                  {productData.title}
                </h1>
                <button onClick={handleAddToWishlist}>
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

              {/* Extra Info */}
              <div className="mt-6 space-y-2 text-sm text-[#463730]">
                <p>
                  <strong>Category:</strong> {productData.category || "General"}
                </p>
                <p>
                  <strong>Subcategory:</strong>{" "}
                  {productData.subCategory || "N/A"}
                </p>
                <p>
                  <strong>Material:</strong> {productData.material || "N/A"}
                </p>

                {productData.category === "Books" && (
                  <>
                    <p>
                      <strong>Author:</strong>{" "}
                      {productData.author || "Not mentioned"}
                    </p>
                    <p>
                      <strong>Genre:</strong>{" "}
                      {productData.genre || "Not mentioned"}
                    </p>
                  </>
                )}

                {productData.category === "Artifacts" && (
                  <p>
                    <strong>Artifact Type:</strong>{" "}
                    {productData.artifactCategory || "Not mentioned"}
                  </p>
                )}

                {(productData.category === "Women" ||
                  productData.category === "Men") && (
                  <>
                    <p>
                      <strong>Designer:</strong>{" "}
                      {productData.designer || "Not mentioned"}
                    </p>
                    {isClothingOrShoes && productData.sizes?.length > 0 && (
                      <>
                        <p>
                          <strong>Select Size:</strong>
                        </p>
                        <div className="flex flex-wrap gap-2 my-4">
                          {productData.sizes.map((size, index) => (
                            <button
                              onClick={() => setSelectedSize(size)}
                              key={index}
                              className={`px-4 py-1 border border-[#24160f] text-[#24160f] rounded-full hover:bg-[#24160f] hover:text-white transition duration-300 ${
                                selectedSize === size
                                  ? "border-2 border-orange-700"
                                  : ""
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="mt-6 w-full sm:w-auto px-6 py-2 bg-[#24160f] text-white rounded-full hover:bg-[#3b2515] transition duration-300"
              >
                ADD TO CART
              </button>

              <hr className="mt-8 sm:w-4/5" />
              <div className="text-sm text-[#6b1d1d] mt-5 flex flex-col gap-1">
                <p>100% Original Product</p>
                <p>Cash On Delivery is available on this Product</p>
                <p>Easy return and exchange policy within 7 days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description & Reviews */}
        <div className="mt-20 p-10">
          <div className="flex">
            <b className="border px-5 py-3 text-sm">Description</b>
            <p className="border px-5 py-3 text-sm">
              Reviews: {productData.rating}
            </p>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-[#6b1d1d] font-semibold">
            <p>{productData.description}</p>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
          genre={productData.genre}
          artifactsCategory={productData.artifactCategory}
        />
      </Layout>
    </div>
  );
};

export default Product;
