import { useState, useEffect } from "react";
import axios from "axios";

import useConversation from "../zustand/useConversation";

const useSendMaessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation();
  const sendMessage = async (message) => {
    setLoading(true);
    if (selectedConversation && selectedConversation._id) {
      try {
        const res = await axios.post(
          `/api/message/send/${selectedConversation._id}`,
          { message }
        );
        setMessage([...messages,res.data.newMessage]);
      } catch (error) {
        console.log("error in get message", error);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMaessage;
