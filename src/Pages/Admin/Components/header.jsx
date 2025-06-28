import React from "react";
import Button from "./button";
import { useAuthStateContext } from "@/Pages/Context/AuthContext";

const Header = () => {
  const { user } = useAuthStateContext();
  const toggleProfileMenu = () => {
    const menu = document.getElementById("profileMenu");
    if (menu) {
      menu.classList.toggle("hidden");
    }
  };

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-800">Mahasiswa</h1>
      <div className="flex items-center space-x-4">
        <div className="text-gray-700 text-sm md:text-base">
          Login sebagai: <strong className="font-medium">{user?.role}</strong>
        </div>
        <div className="relative">
          <Button
            onClick={toggleProfileMenu}
            className="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none transition-colors duration-200"
          >
            {/* Kalau memang tidak ada tulisan di dalam button, tetap kosong */}
          </Button>

          <div
            id="profileMenu"
            className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg hidden z-10"
          >
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-lg"
            >
              Profil
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-b-lg transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
