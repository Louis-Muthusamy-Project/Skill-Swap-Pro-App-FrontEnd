import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function Otp() {
  const [email, setEmail] = useState("");

  const handleRequestOTP = async () => {
    try {
      const res = await axios.post("https://skill-swap-pro-app.onrender.com/request-otp", { email });
      alert(res.data.message);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div>
      <h2>Request OTP</h2>
      <input type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={handleRequestOTP}>Send OTP</button>
    </div>
  )
}

export default Otp