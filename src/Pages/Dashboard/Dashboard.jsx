import React, { useContext, useEffect, useState } from 'react';
import { BookOpen, Repeat, Users, MessageSquare, User } from 'lucide-react';
import { DataContext } from '../Landing/DataContext';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

const SkillSwapDashboard = () => {
  const { user } = useContext(DataContext);
  const [percentage, perFun] = useState(0);
  const [ loading, setload ] = useState(true);
  useEffect(() => {
    if (user?.SkillLevel === "Basic") {
      perFun(25)
    } else if (user?.SkillLevel === "Intermediate") {
      perFun(50)
    }
    else if (user?.SkillLevel === "Advance") {
      perFun(75)
    } else if (user?.SkillLevel === "Master") {
      perFun(100)
    }
    setload(false);
  });

  const skills = [
    { id: 1, name: 'React Development', user: 'Alex R.', type: 'Offering', category: 'Tech' },
    { id: 2, name: 'Oil Painting', user: 'Sarah M.', type: 'Seeking', category: 'Arts' },
    { id: 3, name: 'Spanish Fluency', user: 'Leo K.', type: 'Offering', category: 'Language' },
  ];


  return (
    <div className="flex h-screen w-screen bg-gray-50 font-sans">
      <aside className="w-64 bg-gradient-to-r from-blue-400 to-purple-500 text-white hidden md:flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-indigo-600" id='Logo'>Skill Swap Pro</div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/Dashboard" className="flex items-center space-x-3 p-3 bg-indigo-800 rounded-lg"><BookOpen size={20} /> <span>Dashboard</span></Link>
          <Link to="/swap" className="flex items-center space-x-3 p-3 hover:bg-indigo-600 rounded-lg"><Repeat size={20} /> <span>My Swaps</span></Link>
          <Link to="/Chat" className="flex items-center space-x-3 p-3 hover:bg-indigo-600 rounded-lg"><MessageSquare size={20} /> <span>Messages</span></Link>
          <Link to="/My-Courses" className="flex items-center space-x-3 p-3 hover:bg-indigo-600 rounded-lg"><User size={20} /> <span>My Courses</span></Link>
          <Link to="/Courses" className="flex items-center space-x-3 p-3 hover:bg-indigo-600 rounded-lg"><Users size={20} /> <span>Courses</span></Link>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto overflow-x-hidden p-8 " id='#Dashboard'>
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Welcome back, {user?.UserName}</h1>
            <p className="text-gray-500">You have 2 new swap requests today.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">Active Swaps</p>
            <h3 className="text-2xl text-gray-800 font-bold">{user?.SkillOffer}</h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">Skills Learned</p>
            <h3 className="text-2xl text-gray-800 font-bold">{user?.SkillWant}</h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">Community Rating</p>
            <h3 className="text-2xl font-bold text-green-500">4.9/5</h3>
          </div>
        </div>

        <div className="relative w-40 h-40">
          <div
            className="w-full h-full rounded-full flex items-center justify-center"
            style={{
              background: `conic-gradient(#3b82f6 ${percentage}%, #e5e7eb 0%)`,
            }}
          >
            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-blue-500">
                {percentage}%
              </span>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-gray-700">Recommended for You</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${skill.type === 'Offering' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                  {skill.type}
                </span>
                <span className="text-gray-400 text-xs">{skill.category}</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800">{skill.name}</h4>
              <p className="text-gray-500 text-sm mt-1">by {skill.user}</p>
              <button className="w-full mt-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition font-medium">
                View Details
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SkillSwapDashboard;