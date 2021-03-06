import { useAuth } from "contexts/AuthProvider";
import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { events } from "utils/sockets";

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

function SocketProvider(props) {
  const [socket, setSocket] = useState();
  const { id } = useAuth();

  useEffect(() => {
    if (id) {
      const newSocket = io(process.env.REACT_APP_SOCKET_URI);
      newSocket.on(events.connect, () => {
        newSocket.emit(events.registerSocket, id);
      });

      setSocket(newSocket);

      return () => newSocket.disconnect();
    }
  }, [id]);

  return <SocketContext.Provider value={socket} {...props} />;
}

export default SocketProvider;
