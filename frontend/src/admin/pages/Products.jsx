import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";
import Header from "../components/Header";
import Nav from "../components/Nav";

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Mouse",
      price: "$25.99",
      status: "In Stock",
    },
    {
      id: 2,
      name: "Bluetooth Speaker",
      price: "$49.00",
      status: "Out of Stock",
    },
    {
      id: 3,
      name: "Keyboard",
      price: "$30.00",
      status: "In Stock",
    },
  ]);

  const columnHelper = createColumnHelper();

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleView = (product) => {
    alert(`Viewing product: ${product.name}`);
  };

  const handleEdit = (product) => {
    alert(`Editing product: ${product.name}`);
  };

  const handleAddProduct = () => {
    alert("Open modal or route to add product form here.");
  };

  const columns = [
    columnHelper.accessor("id", {
      header: "S.No.",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: "Product Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("price", {
      header: "Price",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => {
        const status = info.getValue();
        const color =
          status === "In Stock"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800";
        return (
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${color}`}>
            {status}
          </span>
        );
      },
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const product = row.original;
        return (
          <div className="flex gap-2">
            <button onClick={() => handleView(product)} className="text-blue-600 hover:text-blue-800">
              <Eye size={18} />
            </button>
            <button onClick={() => handleEdit(product)} className="text-yellow-600 hover:text-yellow-800">
              <Pencil size={18} />
            </button>
            <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:text-red-800">
              <Trash2 size={18} />
            </button>
          </div>
        );
      },
    }),
  ];

  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-[#f3e5dc] min-h-screen shadow-lg">
          <Nav />
        </div>

        {/* Content */}
        <div className="w-3/4 p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold">Product Management</h1>
            <button
              onClick={handleAddProduct}
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              <Plus size={18} />
              Add Product
            </button>
          </div>

          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-200">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-2 text-left border-b border-gray-300"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-4 py-2 border-b border-gray-200"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Products;
