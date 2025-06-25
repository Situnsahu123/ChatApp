import { useContext, useState } from "react"
import { createContext } from "react"
import { useAuth } from "./AuthProvider";
import { useEffect } from "react";
import io from "socket.io-client"
const socketContext = createContext()

export const useSocketContext = () => {
    return useContext(socketContext)
}

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null)
    const [onLineUser, setOnLineUser] = useState([])
    const [authUser] = useAuth()
    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:4000", {
                query: {
                    userId: authUser.user._id || authUser.user.id,
                }
            })
            setSocket(socket)
            socket.on("getOnlineUser", users => {
                setOnLineUser(users)
            })
            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null)
            }
        }
    }, [authUser])
    return (
        <socketContext.Provider value={{ socket, onLineUser }}>
            {children}
        </socketContext.Provider>
    )
}