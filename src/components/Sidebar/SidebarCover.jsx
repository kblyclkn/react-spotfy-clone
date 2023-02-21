import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "stores/player";
import {RiArrowDownSLine} from "react-icons/ri"

function SidebarCover() {
    const dispatch = useDispatch()
  const current = useSelector((state) => state.player.current);

  return (
    <div className="pt-[100%] relative bg-black group">
      <img
        src={current.image}
        className="w-full h-full object-cover absolute top-0 left-0"
        alt=""
      />
      <button
        onClick={() => dispatch(setSidebar(false))}
        className="w-6 h-6 rounded-full absolute top-1 right-1 bg-black opacity-0 group-hover:opacity-60 hover:!opacity-100 flex items-center hover:scale-[1.06] justify-center"
      >
        <RiArrowDownSLine size={16} />
      </button>
    </div>
  );
}

export default SidebarCover;
