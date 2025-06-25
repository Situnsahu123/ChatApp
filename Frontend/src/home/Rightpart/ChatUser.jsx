import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";
import { CiMenuFries } from "react-icons/ci";

const ChatUser = () => {
  const { onLineUser } = useSocketContext();
  const { selectedConversation } = useConversation();

  // Check if the selected user is online
  const isOnline = selectedConversation && onLineUser.includes(String(selectedConversation._id));

  return (
    <div className="flex space-x-5 items-center justify-center h-[8vh] 
    bg-gray-800 hover:bg-gray-700 duration-300 p-2 shrink-0 ">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
      <div className={`${isOnline ? "avatar avatar-online" : "avatar"}`}>
        <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring-2 ring-offset-2">
          <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
        </div>
      </div>
      <div>
        <h1 className="text-xl">
          {selectedConversation?.fullname || "no user selected"}
        </h1>
        {/* Show "online" only if the user is online */}
        {isOnline && <span className="text-sm text-green-500 ml-2">online</span>}
      </div>
    </div>
  );
};

export default ChatUser;