import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataContext } from './DataContext';
import axios from 'axios';

function Landing() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(DataContext);

  const click = async (event) => {
    event.preventDefault();

    const responce = await axios.post("https://skill-swap-pro-app.onrender.com/getProfile", {
      name: user.name,
    });
    setUser(responce.data);
    navigate('/Dashboard');
  }
  return (
    <>
      <div className='bg-gradient-to-r from-blue-400 to-purple-500'>
        <header>
          <img src="https://res.cloudinary.com/dmcpxtojg/image/upload/f_auto,q_auto/Logo_rvfeim" alt="Skill swap logo" id='Logopng' />
          <div className='header'>
            <img src="https://res.cloudinary.com/dmcpxtojg/image/upload/v1774762635/user_tqhugz.png" alt="user" id='user' />
            <Link to="/Login"><h5>Login/Signup</h5></Link>
            <h1></h1>
          </div>
        </header>
        <section className='Landing'>
          <h1 id='Logo'>Skill Swap Pro </h1>
          <span>Welcome to the Skill Swap pro.</span>
          <button onClick={click}>Start</button>
        </section>
      </div>
    </>
  )
}

export default Landing
