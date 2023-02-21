import React from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center gap-x-4">
      <button
        onClick={() => navigate(-1)}
        className="h-8 w-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
      >
        <AiOutlineLeft size={22} />
      </button>

      <button
        onClick={() => navigate(+1)}
        className="h-8 w-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
      >
        <AiOutlineRight size={22} />
      </button>
    </nav>
  );
}

export default Navigation;
