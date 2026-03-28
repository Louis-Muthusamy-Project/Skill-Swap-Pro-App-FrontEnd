import React from 'react'
import { useState } from 'react';
import axios from "axios";

function VerifyOTP() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleVerifyOTP = async () => {
    try {
      const res = await axios.post("https://skill-swap-pro-app.onrender.com/verify-otp", { email, otp });
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
  };
  return (
    <div>
      <h2>Verify OTP</h2>
      <input type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="text" placeholder="Enter OTP" value={otp} onChange={e => setOtp(e.target.value)} />
      <button onClick={handleVerifyOTP}>Verify OTP</button>
    </div>
  )
}

export default VerifyOTP