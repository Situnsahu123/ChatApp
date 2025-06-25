import React, { useState } from "react";
import { CiLogout } from "react-icons/ci";
import axios from "axios"
import Cookies from "js-cookie"
import toast from "react-hot-toast";

const Search = () => {
  const [loading, setLoading] = useState(false)
  const handleLogout = async () => {
    setLoading(true)
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt")
      setLoading(false)
      toast.success("logged out successfully")
      window.location.reload()
    } catch (error) {
      console.log("error in logout ", error)
    }
  }
  return (
    <div className="h-[10vh]">
      <div>
        <CiLogout onClick={handleLogout} className="text-5xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full m-5" />
      </div>
    </div>
  );
};

export default Search;
