import React from 'react'
import { useState } from 'react';
import { IoMdSend } from "react-icons/io";
import useSendMessage from '../../context/useSendMaessage';

const TypeSend = () => {
  const { loading, sendMessage} = useSendMessage()
  const [message, setmessage] = useState("")
  const handleSubmit = async(e)=>{
    e.preventDefault();
    await sendMessage(message)
    setmessage("")
  }
  return (
   <form onSubmit={handleSubmit}>
     <div className='flex space-x-1 h-[8vh] bg-gray-800 shrink-0 '>
        <div className='w-[70%] mx-4 '>
            <input type="text" placeholder="Type here" value={message} onChange={(e)=>setmessage(e.target.value)} className="border border-gray-700 px-4 py-3 rounded-xl mt-2.5 outline-none  w-full " />
        </div>
        <button ><IoMdSend className='text-4xl rounded-full hover:bg-gray-500 ' /></button>
    </div>
   </form>
  )
}

export default TypeSend