import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../Landing/DataContext';
import Loading from '../Loading';

function Courses() {
  const { user } = useContext(DataContext);
  const fromName = user.UserName;
  const [data, setdata] = useState([]);
  const [ loading, setload ] = useState(true);
  const Data = async () => {
    const responce = await axios.get("https://skill-swap-pro-app.onrender.com/usergetdata");
    setdata(responce.data);
    setload(false);
  }
  Data();
  const sendRequest = async (toName, title) => {
    await axios.post("https://skill-swap-pro-app.onrender.com/send-request", {
      fromName,
      toName,
      title
    });
    alert("Request Sent");
  };
  useEffect(() => {
    Data();
  }, []);
  return (
    <>
      <div className='flex flex-col h-screen w-screen text-center bg-gradient-to-r from-blue-400 to-purple-500 gap-15 p-[15px]'>
        <div className='flex flex-row justify-between'>
          <h1>Courses</h1>
        </div>
        <div className='flex flex-wrap flex-row gap-15 overflow-y-auto'>
          {data?.map((courses) => (
            <div key={courses._id}>
              {courses.UserName !== user && (
                <div className='flex flex-col w-80 h-30 bg-gradient-to-r from-blue-500 to-purple-600 items-center justify-center rounded-2xl'>
                  <h3>Name: {courses.UserName}</h3>
                  <h3>Courses: {courses.SkillOffer}</h3>

                  <button
                    onClick={() => sendRequest(courses.UserName, courses.SkillOffer)}
                  >
                    Send Request
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Courses