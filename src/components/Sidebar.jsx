import React from "react";
import logo from "../image/logo.svg";
import Menu from "./Sidebar/Menu";
import DownloadApp from "./Sidebar/DownloadApp";
import Playlists from "./Sidebar/Playlists";
import { Icon } from "Icons";
import { BiPlus } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { useSelector } from "react-redux";
import SidebarCover from "./Sidebar/SidebarCover";

function Sidebar() {

  const sidebar = useSelector(state => state.player.sidebar)

  return (
    <aside className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
      <a href="#" className="mb-7 px-6">
        <img src={logo} alt="" className="h-10" />
      </a>

      <Menu />
      <nav className="mt-6">
        <ul>
          <li>
            <a
              href="#"
              className="py-2 px-6 group flex items-center text-sm text-link font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center group-hover:bg-opacity-100 justify-center mr-4 bg-white bg-opacity-80 rounded-sm text-black">
                <BiPlus size={12} />
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-6 group flex items-center text-sm text-link font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-indigo-700 to-blue-300 text-white rounded-sm opacity-80 group-hover:opacity-100">
                <CiHeart size={12} />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>

      <Playlists />
      
      <DownloadApp />

      {sidebar &&  <SidebarCover />}
    </aside>
  );
}

export default Sidebar;
