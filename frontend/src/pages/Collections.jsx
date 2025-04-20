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
  const [genre, setGenre] = useState([]);
  const [artifacts, setArtifacts] = useState([]);
  const [sortBy, setSortBy] = useState("relevant");


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

  const toggleGenre = (e) => {
    const value = e.target.value;
    setGenre((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleArtifacts = (e) => {
    const value = e.target.value;
    setArtifacts((prev) =>
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

    if (genre.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        genre.includes(item.genre) // make sure `item.genre` exists
      );
    }

    if (artifacts.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        artifacts.includes(item.artifacts) // make sure `item.artifacts` exists
      );
    }

    if (sortBy === "low-high") {
      productsCopy.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high-low") {
      productsCopy.sort((a, b) => b.price - a.price);
    }



    setFilterProducts(productsCopy);
  };

  // Initialize filtered products when products load
  // useEffect(() => {
  //   setFilterProducts(products);
  // }, [products]);

  // Apply filter when category or subCategory changes
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, genre, sortBy, artifacts]);

  return (
    <div className="bg-[#efd1c0] min-h-screen">
  <Layout>
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 pt-8 px-4 sm:px-10 border-t">
      
      {/* Filter Section */}
      <div className=" sm:min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center justify-between sm:justify-start cursor-pointer gap-2 font-bold"
        >
          FILTERS
          <ChevronDown
            className={`h-4 sm:hidden transition-transform duration-300 ${
              showFilter ? "rotate-180" : ""
            }`}
          />
        </p>

        {/* Filters Wrapper */}
        <div className={`${showFilter ? "block" : "hidden"} sm:block`}>
          {/* Reusable Filter Component Example */}
          {[
            {
              title: "CATEGORIES",
              options: ["Women", "Men", "Artifacts", "Books"],
              onChange: toggleCategory,
            },
            {
              title: "SUB-CATEGORIES",
              options: [
                "Womens Clothing",
                "Womens Shoes",
                "Womens Jewellery",
                "Mens Clothing",
                "Mens Shoes",
                "Mens Accessories",
              ],
              onChange: toggleSubCategory,
            },
            {
              title: "BOOKS GENRE",
              options: [
                "History",
                "Fiction & Poetry",
                "Culture & Heritage",
                "Cook Book",
              ],
              onChange: toggleGenre,
            },
            {
              title: "ARTIFACT CATEGORIES",
              options: [
                "Sculpted Figures",
                "Islamic Art",
                "Paintings",
                "Bidriware",
              ],
              onChange: toggleArtifacts,
            },
          ].map((filter, index) => (
            <div
              key={index}
              className="border border-[#24160f] bg-[#24160f] rounded-2xl mt-4 px-4 py-3"
            >
              <p className="mb-3 text-sm font-medium text-white">
                {filter.title}
              </p>
              <div className="flex flex-col gap-2 text-sm font-light text-[#efd1c0]">
                {filter.options.map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-3 h-3"
                      value={option}
                      onChange={filter.onChange}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-base sm:text-lg mb-4 gap-4">
          <h1 className="text-[#6b1d1d] text-2xl md:text-3xl font-bold">
            ALL COLLECTIONS
          </h1>

          {/* Sort Dropdown */}
          <select
            className="border-2 border-[#24160f] text-sm p-2 rounded-2xl bg-[#24160f] text-white"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="relevant">Sort By: Relevant</option>
            <option value="low-high">Sort By: Low-High</option>
            <option value="high-low">Sort By: High-Low</option>
          </select>
        </div>

        {/* Product Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-10">
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
