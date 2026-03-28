import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        password: "",
    });
    const [message, setMessage] = useState("");
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://skill-swap-pro-app.onrender.com/Signup", formData);
            setMessage(response.data.message);
            setFormData({
                name: "",
                password: "",
            });
            console.log(response.data)
        }
        catch (err) {
            setMessage("Error Iruku");
            alert(err)
        }

        alert("Form submitted")
        navigate('/SignProfile', {state: {user : formData.name} });
    };
    return (
        <>
            <div className='Login bg-gradient-to-r from-blue-400 to-purple-500'>
                <form onSubmit={handleSubmit} className='bg-gradient-to-r from-blue-400 to-purple-500'>
                    <h2>Signup</h2>
                    <input type="text" placeholder='Enter User Name' className='input' onChange={handleChange} name='name' />
                    <input type="text" placeholder='Create PassWord' className='input' onChange={handleChange} name='password' />
                    <input type="submit" id='Button' />
                </form>
            </div>
        </>
    )
}

export default Signup