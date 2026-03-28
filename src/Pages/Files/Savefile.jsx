import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { DataContext } from "../Landing/DataContext";
import { useNavigate } from "react-router-dom";

function Savefile() {
  const { user } = useContext(DataContext);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("user", user.UserName);

    await axios.post("https://skill-swap-pro-app.onrender.com/api/files", formData);
    alert("File Uploaded");
    navigate("/Dashboard");
  };

  return (
    <div style={{ padding: 20 }} className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="flex w-100 h-50 items-center justify-around rounded-xl flex-col bg-gradient-to-r from-blue-400 to-purple-500 ">
        <h2>📁 MERN File Storage</h2>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={uploadFile}>Upload</button>
      </div>
    </div>
  );
}

export default Savefile;