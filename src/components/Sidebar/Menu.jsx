import React from "react";
import { Icon } from "Icons";
import { NavLink } from "react-router-dom";
import { SlHome } from "react-icons/sl";
import { ImBooks } from "react-icons/im";
import { BsSearch } from "react-icons/bs";

function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to={"/"}
            exact
            className="h-10 flex gap-x-4 items-center font-semibold text-link rounded hover:text-white text-sm px-4"
          >
            <span>
              <SlHome size={24} />
            </span>
            Ana sayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/search"}
            exact
            activeClassName="bg-active text-white"
            className="h-10 flex gap-x-4 items-center font-semibold text-link rounded hover:text-white text-sm px-4"
          >
            <span>
              <BsSearch size={24} />
            </span>
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/collection"}
            exact
            activeClassName="bg-active text-white"
            className="h-10 flex gap-x-4 items-center font-semibold text-link rounded hover:text-white text-sm px-4"
          >
            <span>
              <ImBooks size={24} />
            </span>
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
