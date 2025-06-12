import React from "react";

const ChatUser = () => {
  return (
    <div className="flex space-x-5 items-center justify-center h-[8vh] bg-gray-800 hover:bg-gray-700 duration-300 p-2 shrink-0 ">
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring-2 ring-offset-2">
          <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
        </div>
      </div>
     <div>
         <h1 className="text-xl">Situn</h1>
      <span className="text-sm">offline</span>
     </div>
    </div>
  );
};

export default ChatUser;
