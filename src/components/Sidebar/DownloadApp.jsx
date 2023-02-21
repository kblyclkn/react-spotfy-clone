import React from "react";
import { Icon } from "Icons";
import { MdOutlineDownloadForOffline } from "react-icons/md";

function DownloadApp() {
  return (
    <a
      href="#"
      className="h-10 flex flex-shrink-0 text-sm font-semibold text-link hover:text-white items-center px-6 gap-x-4 stroke-link "
    >
      <MdOutlineDownloadForOffline size={20} />
      Uygulamayı Yükle
    </a>
  );
}

export default DownloadApp;
