import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import userState from "../atoms/userAtoms";

const Account = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/messages/getAllMessagesOfUser",
          {
            withCredentials: true,
          }
        );
        setMessages(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    getMessages();
  }, []);
  return (
    <div>
      <ul>
        {messages.map((message,index) => (
          <li key={message._id}>{message.msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default Account;
