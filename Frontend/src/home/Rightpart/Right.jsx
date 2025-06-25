import React, { useEffect } from "react";
import ChatUser from "./ChatUser";
import Massage from "./Massage";
import TypeSend from "./TypeSend";
import useConversation from "../../zustand/useConversation";
import { useAuth } from "../../context/AuthProvider";
import { CiMenuFries } from "react-icons/ci";



const Right = () => {

   const {  selectedConversation, setselectedConversation} = useConversation();
   useEffect(() => {
 setselectedConversation(null);
}, [ setselectedConversation]);
  return (
    <div className="w-[100%] right-0 h-screen ">
          {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <ChatUser />
            <div
              className=" flex-1 overflow-y-auto"
              style={{ maxHeight: "calc(92vh - 8vh)" }}
            >
              <Massage />
            </div>
            <TypeSend />
          </>
        )}
    </div>
  );

  
};

export default Right;

const NoChatSelected = () => {
  const [authUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="relative">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          <CiMenuFries className="text-white text-xl" />
        </label>
        <div className="flex h-screen items-center justify-center">
          <h1 className="text-center">
            Welcome{" "}
            <span className="font-semibold text-xl">
              {authUser.user.fullname}
            </span>
            <br />
            No chat selected, please start conversation by selecting anyone to
            your contacts
          </h1>
        </div>
      </div>
    </>
  );
};
