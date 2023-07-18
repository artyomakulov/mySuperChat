import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

const Chat = () => {
  const { search } = useLocation();
  const [params, setParams] = useState(null);

  useEffect(() => {
    const searchParams = Object.fromEntries(new URLSearchParams(search));
    setParams(searchParams);
    socket.emit("join", searchParams);
  }, []);

  useEffect(() => {
    socket.on("message", ({ data }) => {
      console.log("data", data);
    });
  }, []);

  console.log("params", params);
  return <div>Chat</div>;
};

export default Chat;
