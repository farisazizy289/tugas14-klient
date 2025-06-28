import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "../../components/Logout";
import { useAuthStateContext } from "../../Context/AuthContext";

const Sidebar = () => {
  const { user } = useAuthStateContext();

  const menuItems = [
    {
      path: "/admin/dashboard",
      icon: "🏠",
      label: "Dashboard",
      permission: "dashboard.page",
    },
    {
      path: "/admin/mahasiswa",
      icon: "👩‍🎓",
      label: "Mahasiswa",
      permission: "mahasiswa.page",
    },
    {
      path: "/admin/dosen",
      icon: "👨‍🏫",
      label: "Dosen",
    },
    {
      path: "/admin/matkul",
      icon: "📚",
      label: "Mata Kuliah",
    },
    {
      path: "/admin/user",
      icon: "👥",
      label: "Mengelola User",
    },
    {
      path: "/admin/rencana-studi",
      icon: "📅",
      label: "Rencana Studi",
      permission: "rencana-studi.page",
    },
  ];

  return (
    <aside className="bg-gradient-to-b from-blue-800 to-blue-900 text-white w-20 lg:w-64 h-screen fixed top-0 left-0 shadow-xl transition-all duration-300">
      <div className="p-4 flex flex-col h-full">
        {/* Logo/Brand Section */}
        <div className="mb-8 mt-4 hidden lg:block">
          <h1 className="text-2xl font-bold text-center">Admin Portal</h1>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1">
          {menuItems.map(
            (item) =>
              (item.permission
                ? user?.permission?.includes(item.permission)
                : true) && (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-3 mx-2 my-1 rounded-lg
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-blue-600 shadow-md text-white"
                      : "text-blue-100 hover:bg-blue-700 hover:text-white"
                  }
                `}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="hidden lg:inline text-sm font-medium">
                    {item.label}
                  </span>
                </NavLink>
              )
          )}
        </nav>

        {/* Logout Button */}
        <div className="mt-auto">
          <Logout
            className="flex items-center gap-3 px-4 py-3 mx-2 rounded-lg 
              text-blue-100 hover:bg-blue-700 hover:text-white transition-all duration-200"
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
