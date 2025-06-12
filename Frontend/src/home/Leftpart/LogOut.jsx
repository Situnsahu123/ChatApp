import React from "react";
import { CiLogout } from "react-icons/ci";

const Search = () => {
  return (
    <div className="h-[10vh]">
      <div>
        <CiLogout className="text-5xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full m-5" />
      </div>
    </div>
  );
};

export default Search;
