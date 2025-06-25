import React from "react";
import Search from "./Search";
import User from "./User";
import Logout from "./LogOut"

const Left = () => {
  return (
    <div className=" w-[100%] h-screen bg-gray-900 flex flex-col">
      <Search />
      <div className="flex-1 overflow-y-auto py-2">
        <User />
      </div>
     <Logout />
    </div>
  );
};

export default Left;
