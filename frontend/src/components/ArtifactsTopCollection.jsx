import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const ArtifactsTopCollection = () => {
  const { products } = useContext(ShopContext);
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    // Filter products that belong to the "Women" category
    const womenProducts = products.filter(
      (product) => product.category?.toLowerCase() === "artifacts"
    );

    // Set only the top 5
    setTopProducts(womenProducts.slice(0, 5));
  }, [products]);

  return (
    <div>
      <div className="pt-2 px-4 md:px-10">
       
      </div>
      {/* Rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 p-10">
        {topProducts.map((product, index) => (
          <ProductItem
            key={index}
            id={product._id}
            image={product.images}
            title={product.title}
            price={product.price}
            rating={product.rating}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtifactsTopCollection;
