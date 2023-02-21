import React from "react";

function Playlists() {
  return (
    <nav className="mx-6 mt-2 flex-auto py-2 border-t border-white border-opacity-10 overflow-auto">
      <ul>
        {new Array(30).fill(
          <li>
          <a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
            22. çalma listem
          </a>
        </li>
        )}
      </ul>
    </nav>
  );
}

export default Playlists;
