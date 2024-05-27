

import './App.css'
import Login from './pages/login/Login';
import SignUp from './pages/signup/signup';
import Home from './pages/home/home';
import Conversation from './components/sidebar/Conversation';
import Conversations from './components/sidebar/Conversations';
import SearchInput from './components/sidebar/SearchInput';
import LogoutButton from './components/sidebar/LogoutButton';
import { Routes,Route } from 'react-router-dom';

import { Toaster } from "react-hot-toast";

function App() {
  

  return (
    <div className='p-4 h-screen flex items-center justify-center '>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
   </Routes>
   <Toaster />
    </div>
  )
}

export default App
