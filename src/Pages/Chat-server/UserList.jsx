import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Landing/DataContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading";

const UsersList = () => {
  const navigate = useNavigate();
  const { user } = useContext(DataContext);
  const loggedInUser = user?.UserName;
  const [userData, datafun] = useState([]);
  const [ loading, setload ] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("https://skill-swap-pro-app.onrender.com/usergetdata")
      .then((res) => {
        datafun(res.data);
        setload(false);
      })
      .catch((err) => {
        console.log(err);
        setload(false);
      });
  }, []);


  const handleUserClick = (user) => {
    navigate(`/chat/${user}`);
  };
  const filteredUsers = userData.filter((u) =>
    u.UserName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-screen bg-gradient-to-r from-blue-400 to-purple-500">

      <h1 className="text-3xl font-bold mb-6">Users</h1>

      <input
        type="text"
        placeholder="Search username..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 rounded-md border w-80"
      />

      <div className="shadow-md rounded-lg p-6 w-100">
        {filteredUsers
          .filter((u) => u.UserName !== loggedInUser)
          .map((user, index) => (
            <div
              key={index}
              className="p-4 mb-2 bg-gray-200 rounded cursor-pointer hover:bg-cyan-200 text-blue-600"
              onClick={() => handleUserClick(user.UserName)}
            >
              {user.UserName}
            </div>
          ))}
      </div>
    </div>
  );
};

export default UsersList;