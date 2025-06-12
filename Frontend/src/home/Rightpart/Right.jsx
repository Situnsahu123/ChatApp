import React from "react";
import ChatUser from "./ChatUser";
import Massage from "./Massage";
import TypeSend from "./TypeSend";

const Right = () => {
  return (
    <div className="w-[70%] right-0 h-screen ">
      <ChatUser />
      <div className="flex-1 overflow-y-auto py-2 max-h-[calc(92vh-8vh)]">
        <Massage />
      </div>
      <TypeSend />
    </div>
  );
};

export default Right;
