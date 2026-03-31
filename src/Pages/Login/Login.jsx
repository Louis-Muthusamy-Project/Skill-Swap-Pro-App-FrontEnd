import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { DataContext } from '../Landing/DataContext';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Loading';


function Login() {

  const navigate = useNavigate();
  const { setUser } = useContext(DataContext);
  const [inputName, nameFun] = useState();
  const [inputPass, passFun] = useState();
  const [ loading, setload ] = useState(false);

  const DataFun = async (event) => {
    setload(true);
    event.preventDefault();

    const responce = await axios.post('https://skill-swap-pro-app.onrender.com/Login', {
      name: inputName,
      password: inputPass,
    })
    .then(()=>{
      setUser({ name: inputName });
      setload(false);
      navigate("/");
    })
    .catch((res)=>{
      setload(false);
      alert("User Not Fond")
    })
  }
  if(loading){
    return <Loading/>
  }
  return (
    <>
      <div className='Login bg-gradient-to-r from-blue-400 to-purple-500'>
        <form onSubmit={DataFun} className='bg-gradient-to-r from-blue-400 to-purple-500'>
          <h2>Login Form</h2>
          <input type="text" placeholder='Enter User Name' className='input' onChange={(e) => { nameFun(e.target.value) }} name='logname' />
          <input type="text" placeholder='Enter PassWord' className='input' onChange={(e) => { passFun(e.target.value) }} name='password' />
          <button type='submit' id='Button'>Login</button>
          <Link to='/Sign'><p>Sign Up?</p></Link>
        </form>
      </div>
    </>
  )
}

export default Login
