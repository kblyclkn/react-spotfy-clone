import React from "react";
import { BsSearch } from "react-icons/bs";

function Search() {
  return <div className="mr-auto ml-4 relative">
    <label htmlFor="search-input" className="text-black h-10 w-12 flex items-center justify-center absolute top-0 left-0">
    <BsSearch  size={24} name="search"/>
    </label>
    <input type="text" id="search-input"  className="h-10 pl-12 outline-none bg-white rounded-3xl text-black text-sm max-w-full w-[22.75rem]" placeholder="Ne dinlemek istiyorsun?"/> 
  </div>;
}

export default Search;
