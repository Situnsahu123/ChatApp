import mongoose, { modelNames } from "mongoose";
import User from "./User.module.js";
import Message from "./message.module.js";

const conversationSchema = new mongoose.Schema({
  member: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    }
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Message,
      default:[],
    }
  ],
},{timestamps:true});

const Conversation = mongoose.model("conversation",conversationSchema)

export default Conversation