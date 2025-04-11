import React, { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";

const Settings = () => {
  const [adminData, setAdminData] = useState({
    name: "Admin Name",
    email: "admin@example.com",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePic") {
      setAdminData({ ...adminData, profilePic: files[0] });
    } else {
      setAdminData({ ...adminData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can connect this with your backend later
    console.log("Settings Saved:", adminData);
    alert("Settings updated successfully!");
  };

  return (
    <>
      <Header />
      <div className="flex">
        <div className="w-1/4 bg-[#f3e5dc] min-h-screen shadow-lg">
          <Nav />
        </div>

        <div className="flex-1 p-6">
          <h2 className="text-2xl font-semibold mb-6">Admin Settings</h2>

          <form
            className="max-w-xl bg-white p-6 shadow-md rounded space-y-5"
            onSubmit={handleSubmit}
          >
            {/* Profile Info */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={adminData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={adminData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Profile Picture */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Profile Picture
              </label>
              <input
                type="file"
                name="profilePic"
                accept="image/*"
                onChange={handleChange}
                className="w-full p-1 border rounded"
              />
              {adminData.profilePic && (
                <p className="text-sm mt-1 text-gray-600">
                  Selected: {adminData.profilePic.name}
                </p>
              )}
            </div>

            {/* Password Update */}
            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold mb-2">Change Password</h3>

              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">
                  Old Password
                </label>
                <input
                  type="password"
                  name="oldPassword"
                  value={adminData.oldPassword}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={adminData.newPassword}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={adminData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Save Settings
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Settings;
