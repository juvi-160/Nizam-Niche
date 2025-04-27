import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const RelatedProducts = ({
  category,
  subCategory,
  genre,
  artifactsCategory,
}) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let relatedItems = products.filter((item) => {
        const sameCategory = item.category === category;
        const sameSubCategory = subCategory
          ? item.subCategory === subCategory
          : true;
        const sameGenre = genre ? item.genre === genre : true;
        const sameArtifactCategory = artifactsCategory
          ? item.artifactsCategory === artifactsCategory
          : true;

        return (
          sameCategory && sameSubCategory && sameGenre && sameArtifactCategory
        );
      });

      setRelated(relatedItems.slice(0, 5));
    }
  }, [products, category, subCategory, genre, artifactsCategory]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2 font-bold text-[#6b1d1d]">
        <h2>Related Products</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 p-8">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            title={item.title}
            price={item.price}
            image={item.images}
            rating={item.rating}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
