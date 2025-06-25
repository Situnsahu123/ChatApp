import React from "react";

const Chat = ({ message }) => {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const userId = authUser.user?._id || authUser.user?.id;
  const senderId =
    typeof message.senderId === "object"
      ? message.senderId._id || message.senderId.id
      : message.senderId;
  const itMe = String(senderId) === String(userId);
  const chatName = itMe ? "chat-end" : "chat-start";
  const chatColor = itMe ? "bg-blue-500" : "";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div>
      <div>
        <div className={`chat ${chatName} `}>
          <div className={`chat-bubble text-white ${chatColor}`}>
            {message.message}
          </div>
          <div className="chat-footer">{formattedTime}</div>
        </div>
      </div>
    </div>
  );
};

export default Chat;