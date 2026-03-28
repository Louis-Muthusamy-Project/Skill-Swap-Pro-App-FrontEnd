import axios from "axios";
import { useState } from "react";

function Request() {
  const [fromName, setFromId] = useState("");
  const [toName, setToId] = useState("");
  const title = "Sume one";

  const sendRequest = async () => {
    await axios.post("https://skill-swap-pro-app.onrender.com/send-request", {
      fromName,
      toName,
      title
    });
    alert("Request Sent");
  };

  return (
    <div>
      <h2>Send Request</h2>
      <input placeholder="From User ID" onChange={e => setFromId(e.target.value)} />
      <input placeholder="To User ID" onChange={e => setToId(e.target.value)} />
      <button onClick={sendRequest}>Send</button>
    </div>
  );
}

export default Request;