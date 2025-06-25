import React from "react";
import UserData from "./UserData";
import UseGetAllUsers from "../../context/UseGetAllUsers";

const User = () => {
  const [allUsers, loading] = UseGetAllUsers()
  return (
    <div className="h-screen top-0">
      <h1 className="px-8 py-2 text-2xl h-15 z-1  text-white font-semibold bg-slate-800 rounded-md sticky top-0 ">
        Massage
      </h1>
      <div className="px-2 ">
        {loading ? (
          <p>Loading...</p>
        ) : (
          allUsers?.filterredUser?.map((user, index) => (
            <UserData key={user._id || index} user={user} />
          )) || <p>No users found</p>
        )}
      </div>

    </div>
  );
};

export default User;
