import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { ShopContext } from "../context/ShopContext";
import { ChevronDown } from "lucide-react";
import ProductItem from "../components/ProductItem";

const Collections = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const applyFilter = () => {
    let productsCopy = [...products];

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory) // make sure `item.subCategory` exists
      );
    }

    setFilterProducts(productsCopy);
  };

  // Initialize filtered products when products load
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  // Apply filter when category or subCategory changes
  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  return (
    <div className="bg-[#efd1c0]">
      <Layout>
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
          {/* filter Options */}
          <div className="min-w-60">
            <p
              onClick={() => setShowFilter(!showFilter)}
              className="my-2 text-xl flex items-center cursor-pointer gap-2 ml-8 font-bold"
            >
              FILTERS
              <ChevronDown
                className={`h-3 sm:hidden ${showFilter ? "rotate-180" : ""}`}
              />
            </p>

            {/* category filter */}
            <div
              className={`border border-[#24160f] bg-[#24160f] pl-5 py-3 mt-6 rounded-2xl ml-8  ${
                showFilter ? "" : "hidden"
              } sm:block`}
            >
              <p className="mb-3 text-sm font-medium text-white">CATEGORIES</p>
              <div className="flex flex-col gap-2 text-sm font-light text-[#efd1c0]">
                {["Women", "Men", "Artifacts", "Books"].map((cat) => (
                  <label key={cat} className="flex gap-2">
                    <input
                      className="w-3"
                      type="checkbox"
                      value={cat}
                      onChange={toggleCategory}
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* sub-category filter */}
            <div className="border border-[#24160f] bg-[#24160f] rounded-2xl ml-8 pl-5 py-3 mt-6">
              <p className="mb-3 text-sm font-medium text-white">
                SUB-CATEGORIES
              </p>
              <div className="flex flex-col gap-2 text-sm font-light text-[#efd1c0]">
                {[
                  "Womens Clothing",
                  "Womens Shoes",
                  "Womens Jewellery",
                  "Mens Clothing",
                  "Mens Shoes",
                  "Mens Accessories",
                  "Artifacts",
                  "Books",
                ].map((sub) => (
                  <label key={sub} className="flex gap-2">
                    <input
                      className="w-3"
                      type="checkbox"
                      value={sub}
                      onChange={toggleSubCategory}
                    />
                    {sub}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flex-1 pr-8">
            <div className="flex justify-between text-base sm:text-2xl mb-4">
              <h1 className="text-[#6b1d1d] text-2xl md:text-3xl font-bold text-center mb-6">
                ALL COLLECTIONS
              </h1>

              {/* product sorting (not implemented yet) */}
              <select className="border-2 border-[#24160f] text-sm p-1 rounded-2xl bg-[#24160f] text-white">
                <option value="relevant">Sort By: Relevant</option>
                <option value="low-high">Sort By: Low-High</option>
                <option value="high-low">Sort By: High-Low</option>
              </select>
            </div>

            {/* product items */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
              {filterProducts.map((item, index) => (
                <ProductItem
                  key={index}
                  id={item._id}
                  title={item.title}
                  price={item.price}
                  image={item.images}
                  category={item.category}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Collections;
