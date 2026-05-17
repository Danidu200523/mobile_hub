import { NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-[var(--nav-color)] border-b-2 border-blue-500 px-10 h-16 flex items-center justify-between">

      {/* Logo */}
      <h1 className="text-3xl font-bold text-white">
        Mobile<span className="text-[var(--logo-text)]">Hub</span>
      </h1>

      {/* Right Side */}
      <div className="flex items-center gap-8">

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 text-white font-semibold text-lg">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 border-b-2 border-[var(--orange-color)] pb-1"
                  : "hover:text-orange-400 duration-200"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/phones"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 border-b-2 border-[var(--orange-color)] pb-1"
                  : "hover:text-orange-400 duration-200"
              }
            >
              Phones
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/tablets"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 border-b-2 border-[var(--orange-color)] pb-1"
                  : "hover:text-orange-400 duration-200"
              }
            >
              Tablets
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/accessories"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 border-b-2 border-[var(--orange-color)] pb-1"
                  : "hover:text-orange-400 duration-200"
              }
            >
              Accessories
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/compare"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 border-b-2 border-[var(--orange-color)] pb-1"
                  : "hover:text-orange-400 duration-200"
              }
            >
              Compare Phones
            </NavLink>
          </li>

        </ul>

        
       <NavLink
  to="/cart"
  className={({ isActive }) =>
    `relative border p-2 rounded-md duration-200 ${
      isActive
        ? "border-[var(--orange-color)]"
        : "border-gray-400 hover:border-[var(--orange-color)]"
    }`
  }
>
  <ShoppingCart
    size={24}
    className="text-white"
  />

  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
</NavLink>

      </div>
    </nav>
  );
}

export default Navbar;