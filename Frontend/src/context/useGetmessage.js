import React, { useState , useEffect } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios"

const useGetmessage = () => {
  const [loading, setLoading] = useState(false);
  const {messages, setMessage, selectedConversation} = useConversation()
  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      if (selectedConversation && selectedConversation._id) {
        try {
          const res = await axios.get(
            `/api/message/get/${selectedConversation._id}`
          );
          setMessage(res.data);
          setLoading(false);
        } catch (error) {
          console.log("error in get message",error);
          setLoading(false)
        }
      }
    };
    getMessage();
  }, [selectedConversation, setMessage]);

  return {loading,messages}
};

export default useGetmessage;
