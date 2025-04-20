import React, { useContext, useRef, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const { search, setSearch, setShowSearch } = useContext(ShopContext);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/collections?search=${encodeURIComponent(search)}`);
      setShowSearch(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsFocused(false);
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setShowSearch]);

  const handleClear = (e) => {
    e.stopPropagation();
    setSearch("");
    inputRef.current?.focus();
  };

  return (
    <div
      ref={containerRef}
      className="relative flex items-center transition-all duration-300 ease-in-out"
      onClick={() => {
        setShowSearch(true);
        setIsFocused(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }}
    >
      <div
        className={`flex items-center bg-[#efd1c0] border border-[#6b1d1d] rounded-full
        transition-all duration-300 ease-in-out overflow-hidden 
        ${isFocused ? "w-48 p-2 opacity-100 ml-0" : "w-0 px-0 opacity-0"}`}
        style={{ transitionProperty: "width, opacity, padding, margin-left" }}
      >
        <input
          ref={inputRef}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search"
          className="bg-transparent text-[#6B1D1D] placeholder-[#6B1D1D] text-sm outline-none w-full"
        />
        {search && (
          <button className="text-[#6B1D1D] text-xs ml-1" onClick={handleClear}>
            ✕
          </button>
        )}
      </div>

      <i
        className="fa-solid fa-magnifying-glass text-[#6B1D1D] ml-2 cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
