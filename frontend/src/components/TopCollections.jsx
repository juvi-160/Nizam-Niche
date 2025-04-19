import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const TopCollections = () => {
  const { products } = useContext(ShopContext);

  const[topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    setTopProducts(products.slice(0,5))
  }, [])

  return (
    <div>
      <div className="pt-10 px-4 md:px-10">
        <h1 className="text-[#6b1d1d] text-2xl md:text-3xl font-bold text-center mb-6">
          TOP COLLECTIONS
        </h1>
      </div>
      {/* rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 p-10">
        {
          topProducts.map((product, index) => (
            <ProductItem key={index} id={product.id} image={product.images} title={product.title} price={product.price} rating={product.rating} category={product.category}/>
          ))
        }

      </div>


    </div>
  );
};

export default TopCollections;
