import React, { useEffect, useRef } from "react";
import Chat from "./Chat";
import useGetmessage from "../../context/useGetmessage";
import Loading from "../../../components/Loading"
import useGetSocketMassage from "../../context/useGetSocketMassage";

const Massage = () => {
  const { loading, messages } = useGetmessage()
  useGetSocketMassage()
  const lastMsgRef = useRef()
  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100)
  }, [messages])
  return (
    <div className="p-5 min-h-[calc(92vh-8vh)]">
      {loading ? (<Loading />) : (messages.length > 0 && messages.map
        ((message) => (
          <div key={message._id} ref={lastMsgRef}> <Chat message={message} /></div>
        )))}
      {!loading && messages.length === 0 && (
        <div>
          <p className="text-center mt-[20%] text-3xl">send a message to start conversation</p>
        </div>
      )}
    </div>
  );
};

export default Massage;
