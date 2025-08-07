
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-gray-600 md:max-h-[300px] body-font shadow-md sticky top-0 bg-white z-50">
      <div className="container mx-auto md:max-h-[300px]  flex  p-5 flex-col md:flex-row items-center justify-between">
      
        <NavLink to="/all-products" className="flex title-font font-medium items-center text-gray-900">
<img src={logo} className="h-[150px]" alt="Logo" />
        </NavLink>

      
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
    <nav
  className={`transition-all duration-300 ease-in-out overflow-hidden flex flex-col md:flex-row md:items-center md:space-x-5 w-full md:w-auto mt-4 md:mt-0 ${
    isOpen ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
  } md:opacity-100 md:max-h-none`}
>

          <NavLink to="/all-products" className="hover:text-gray-900 py-2 md:py-0">
            All Products
          </NavLink>
          <NavLink to="/Men" className="hover:text-gray-900 py-2 md:py-0">
            Men's Clothing
          </NavLink>
          <NavLink to="/women" className="hover:text-gray-900 py-2 md:py-0">
            Women's Clothing
          </NavLink>
          <NavLink to="/electronics" className="hover:text-gray-900 py-2 md:py-0">
            Electronics
          </NavLink>
          <NavLink to={"/cart"}> 
            <button className="inline-flex items-center bg-gray-100 border-0 py-2 px-3 mt-2 md:mt-0 hover:bg-gray-200 rounded text-base">
            Cart
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
