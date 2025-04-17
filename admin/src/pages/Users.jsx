import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import { Trash2 } from "lucide-react";
import Header from "../components/Header";
import Nav from "../components/Nav";

const Users = () => {
  const [userData, setUserData] = React.useState([
    { id: 1, name: "Alice", email: "alice@example.com", status: "Active" },
    { id: 2, name: "Bob", email: "bob@example.com", status: "Inactive" },
    { id: 3, name: "Charlie", email: "charlie@example.com", status: "Active" },
  ]);

  const handleDelete = (id) => {
    const filtered = userData.filter(user => user.id !== id);
    setUserData(filtered);
  };

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("id", {
      header: "S.No.",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: "Email",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => {
        const status = info.getValue();
        const color =
          status === "Active"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800";
        return (
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${color}`}
          >
            {status}
          </span>
        );
      },
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <button
          onClick={() => handleDelete(row.original.id)}
          className="text-red-600 hover:text-red-800"
          title="Delete"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      ),
    }),
  ];

  const table = useReactTable({
    data: userData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-[#24160f] min-h-screen shadow-lg">
          <Nav />
        </div>

        {/* Main content */}
        <div className="w-3/4 p-6">
          <h1 className="text-2xl font-semibold mb-4">
            Total Users: {userData.length}
          </h1>

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

export default Users;
