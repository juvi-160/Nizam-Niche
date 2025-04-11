import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Header from "../components/Header";
import Nav from "../components/Nav";

const Orders = () => {
  // Example data (can be fetched from backend)
  const data = [
    {
      id: 1,
      customer: "Alice",
      date: "2025-04-07",
      total: "$120.00",
      status: "Delivered",
    },
    {
      id: 2,
      customer: "Bob",
      date: "2025-04-06",
      total: "$80.00",
      status: "Pending",
    },
    {
      id: 3,
      customer: "Charlie",
      date: "2025-04-05",
      total: "$200.00",
      status: "Cancelled",
    },
  ];

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("id", {
      header: "Order ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("customer", {
      header: "Customer",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("date", {
      header: "Date",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("total", {
      header: "Total Amount",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => {
        const value = info.getValue();
        const color =
          value === "Delivered"
            ? "text-green-600"
            : value === "Pending"
            ? "text-yellow-600"
            : "text-red-600";
        return <span className={`${color} font-medium`}>{value}</span>;
      },
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex space-x-3">
          <button title="View">
            <Eye className="w-4 h-4 text-blue-500 hover:scale-110" />
          </button>
          <button title="Edit">
            <Pencil className="w-4 h-4 text-green-500 hover:scale-110" />
          </button>
          <button title="Delete">
            <Trash2 className="w-4 h-4 text-red-500 hover:scale-110" />
          </button>
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data,
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

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Orders</h1>
            <span className="text-sm text-gray-600">
              Total Orders: {data.length}
            </span>
          </div>

          <table className="min-w-full border border-gray-300 rounded overflow-hidden">
            <thead className="bg-gray-100">
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

export default Orders;
