import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { DataContext } from '../Landing/DataContext';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Courses() {
    const { user } = useContext(DataContext);
    const [files, setFiles] = useState([]);
    const navigate = useNavigate();
    const fetchFiles = async () => {
        const res = await axios.get(`https://skill-swap-pro-app.onrender.com/api/files/${user.UserName}`);
        setFiles(res.data);
    };
    useEffect(() => {
        fetchFiles();
    }, []);

    const deleteFile = async (id) => {
        await axios.delete(`https://skill-swap-pro-app.onrender.com/api/files/${id}`);
        fetchFiles();
    };
    const post = () => {
        navigate('/postProfile')
    };

    return (
        <>
            <div className='flex flex-col h-screen w-screen text-center bg-gradient-to-r from-blue-400 to-purple-500 gap-15 p-[5px]'>
                <div className='flex flex-row justify-between '>
                    <h1>My Courses</h1>
                    <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition" onClick={post}>
                        <Plus size={20} /> <span>Post a Skill</span>
                    </button>
                </div>
                <ul className='flex flex-wrap flex-row gap-15'>
                    {files.map((f) => (
                        <li key={f._id} >
                            <div className='flex flex-col w-80 h-30 bg-gradient-to-r from-blue-500 to-purple-500 items-center justify-center rounded-2xl'>
                                <a
                                    href={`https://skill-swap-pro-app.onrender.com/${f.path}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <h3 className='text-white'>
                                        {f.originalname}
                                    </h3>
                                </a>
                                <button onClick={() => deleteFile(f._id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Courses