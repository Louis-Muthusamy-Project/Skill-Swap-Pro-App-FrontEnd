import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../Landing/DataContext';

function Userprofile() {
    const navigate = useNavigate();
    const { user } = useContext(DataContext);
    const [formData, setFormData] = useState({
        name: "",
        skillOff: "",
        Slevel: "",
        skillWant: "",
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
            const response = await axios.post("https://skill-swap-pro-app.onrender.com/profile", formData);
            setMessage(response.data.message);
            setFormData({
                name: "",
                skillOff: "",
                Slevel: "",
                skillWant: "",
            });
        }
        catch (err) {
            setMessage("Error Iruku");
            alert(message)
        }

        alert("Form submitted")
        navigate('/add');
    };

    return (
        <>
            <section className='bg-gradient-to-r from-blue-400 to-purple-500 Page'>
                <div className='bg-gradient-to-r from-blue-400 to-purple-500 card' >
                    <img src="./src/assets/yuna.jpg" alt="Profile" className='Profile' />
                    <div>
                        <form onSubmit={handleSubmit} id='form' className='text-sky-200'>
                            <input type="text" placeholder='user Name' name='name' onChange={handleChange} className='input' value={user.UserName} />
                            <input type="text" placeholder='Your Skill' name='skillOff' onChange={handleChange} className='input' />
                            <input type="text" placeholder='Skill Want' name='skillWant' onChange={handleChange} className='input' />
                            <label>Enter Your Level</label>
                            <div>
                                <div>
                                    <input type="radio" name="Slevel" value={"Basic"} onChange={handleChange} />Basic
                                </div>
                                <div>
                                    <input type="radio" name="Slevel" value={"Intermediate"} onChange={handleChange} />Intermediate
                                </div>
                                <div>
                                    <input type="radio" name="Slevel" value={"Advance"} onChange={handleChange} />Advance
                                </div>
                                <div>
                                    <input type="radio" name="Slevel" value={"Master"} onChange={handleChange} />Master
                                </div>
                            </div>
                            <input type="submit" className='input' />
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Userprofile