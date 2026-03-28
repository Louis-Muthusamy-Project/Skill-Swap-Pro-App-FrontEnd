import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../Landing/DataContext";
import { useParams } from "react-router-dom";
import { socket } from "../../socket";
import axios from "axios";
import Loading from "../Loading";

const ChatPage = () => {
  const { username } = useParams();
  const { user } = useContext(DataContext);
  const loggedInUser = user?.UserName;
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [ loading, setload ] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`https://skill-swap-pro-app-chat-server-1.onrender.com/api/messages/${loggedInUser}/${username}`);
        setMessages(res.data);
         setload(false);
      } catch (err) {
        console.log(err);
        setload(false);
      }
    };
    fetchMessages();
  }, [username, loggedInUser]);

  useEffect(() => {
    if (loggedInUser) {
      socket.emit("join_room", loggedInUser);
      console.log("Joined room:", loggedInUser);
    }
  }, [loggedInUser]);
  useEffect(() => {
    socket.on("receive_message", (message) => {
      console.log("Received message:", message);
      setMessages((prev) => [...prev, message]);
    });

    return () => socket.off("receive_message");
  }, []);

  const sendMessage = () => {
    if (!input) return;

    const message = { content: input, from: loggedInUser, to: username };

    socket.emit("private_message", message);

    setMessages((prev) => [...prev, message]);
    setInput("");
  };

  if(loading){
    return <Loading/>
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-4 w-screen">
      <h1 className="text-2xl font-bold mb-4">Chat with {username}</h1>
      <div className="w-full max-w-md bg-gray-100 p-4 rounded shadow-md flex flex-col space-y-2 h-96 overflow-y-auto rounded-2xl " id="chat">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded ${msg.sender === loggedInUser ? "bg-cyan-200 self-end" : "bg-pink-300 self-start"
              }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <div className="flex mt-4 w-full max-w-md">
        <input
          className="flex-1 p-2 border rounded-l"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;