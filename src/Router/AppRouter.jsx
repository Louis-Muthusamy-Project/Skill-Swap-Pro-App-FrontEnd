import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { DataProvider } from '../Pages/Landing/DataContext';
import Landing from '../Pages/Landing/Landing';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Login/Signup';
import Userprofile from '../Pages/Login/Userprofile';
import Dashboard from '../Pages/Dashboard/Dashboard';
import ChatPage from '../Pages/Chat-server/ChatPage';
import UsersList from '../Pages/Chat-server/UserList';
import Savefile from '../Pages/Files/Savefile';
import My_Courses from '../Pages/Files/My-Courses';
import Courses from '../Pages/Files/Courses';
import RespondRequest from '../Pages/Swap/RespondRequest';
import SignProfile from '../Pages/Login/SignProfile';
import SignFile from '../Pages/Files/SignFile';

function AppRouter() {
  return (
    <DataProvider>
      <Router>

        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Sign' element={<Signup />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Chat' element={<UsersList />} />
          <Route path="/chat/:username" element={<ChatPage />} />
          <Route path='/postProfile' element={<Userprofile />} />
          <Route path='/My-Courses' element={<My_Courses />} />
          <Route path='/add' element={<Savefile />} />
          <Route path='/Courses' element={<Courses />} />
          <Route path='/swap' element={<RespondRequest />} />
          <Route path='/SignProfile' element={<SignProfile />} />
          <Route path='/SignFile' element={<SignFile />} />
        </Routes>
      </Router>
    </DataProvider>
  )
}

export default AppRouter;