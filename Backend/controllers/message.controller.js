import Conversation from "../models/conversation.module.js";
import Message from "../models/message.module.js";
import { getReceiverSocketId } from "../SocketIo/server.js";
import { io } from "../SocketIo/server.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    let conversation = await Conversation.findOne({
      member: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        member: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    await Promise.all([conversation.save(), newMessage.save()]);
    const reseiverSocketId = getReceiverSocketId(receiverId)
    if(getReceiverSocketId){
      io.to(reseiverSocketId).emit("newMessage",newMessage)
    }
    res.status(201).json({ message: "message send  successFully", newMessage });
  } catch (error) {
    console.log("error in send message", error);
    res.status(500).json({ error: "internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: chatuser } = req.params;
    const senderId = req.user._id;
    let conversation = await Conversation.findOne({
      member: { $all: [senderId, chatuser] },
    }).populate("messages");
    if (!conversation) {
      return res.status(201).json([]);
    }
    const messages = conversation.messages;
    res.status(201).json(messages);
  } catch (error) {
    console.log("error in get message", error);
    res.status(500).json({ error: "internal server error" });
  }
};
