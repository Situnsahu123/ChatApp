import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import UseGetAllUsers from '../../context/UseGetAllUsers'
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

const Search = () => {
  const [search, setSearch] = useState("");
 const [allUsers] = UseGetAllUsers();
  const { setselectedConversation } = useConversation();
  const handleSubmit = (e) => {
  e.preventDefault();
  if (!search) return;
 const conversation =allUsers?.filterredUser?.find((user)=> user.fullname.toLowerCase().includes(search.toLowerCase()))
  if (conversation) {
    setselectedConversation(conversation);
    setSearch("");
  } else {
    toast.error("user not found");
  }
};
  return (
    <div className="h-[10vh] shrink-0">
      <div className="px-6 py-4 ">
        <form action={""} method="" onSubmit={handleSubmit}>
          <div className="flex space-x-3">
            <label className=" input border-[1px] border-gray-700 bg-slate-900  rounded-lg p-3 flex items-center gap-2 w-[80%]">
              <input type="search" required placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
            </label>
            <button>
              <FaSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
