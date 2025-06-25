import { useSocketContext } from './SocketContext';
import useConversation from '../zustand/useConversation';
import { useEffect } from 'react';
import sound from './../assets/notification.mp3'
const useGetSocketMassage = () => {
    const { socket } = useSocketContext();
    const { messages, setMessage } = useConversation();

    useEffect(() => {
        if (!socket) return;
        socket.on("newMessage", (newMessage) => {
            const notification = new Audio(sound)
            notification.play()
            setMessage([...messages, newMessage]);
        });
        return () => {
            socket.off("newMessage");
        };
    }, [socket, messages, setMessage]);
};

export default useGetSocketMassage;