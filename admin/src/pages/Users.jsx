import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import { Trash2 } from "lucide-react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { backendUrl } from "../App"; // Make sure this points to your backend

const Users = () => {
  const [userData, setUserData] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/user/all`);
      if (response.data.success) {
        setUserData(response.data.users);
      } else {
        console.error("Failed to fetch users:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const confirmed = window.confirm("Are you sure you want to delete this user?");
      if (!confirmed) return;

      const response = await axios.delete(`${backendUrl}/api/user/delete/${id}`);
      if (response.data.success) {
        setUserData((prev) => prev.filter((user) => user._id !== id));
      } else {
        console.error("Failed to delete user:", response.data.message);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor((row, index) => index + 1, {
      id: "serial",
      header: "S.No.",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => `${row.firstName} ${row.lastName}`, {
      id: "name",
      header: "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: "Email",
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <button
          onClick={() => handleDelete(row.original._id)}
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
        <div className="w-1/4 bg-[#24160f] min-h-screen shadow-lg">
          <Nav />
        </div>

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
