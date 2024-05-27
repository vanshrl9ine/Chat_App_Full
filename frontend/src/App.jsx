

import './App.css'
import Login from './pages/login/Login';
import SignUp from './pages/signup/signup';
import Home from './pages/home/home';
import Conversation from './components/sidebar/Conversation';
import Conversations from './components/sidebar/Conversations';
import SearchInput from './components/sidebar/SearchInput';
import LogoutButton from './components/sidebar/LogoutButton';
import { Routes,Route, Navigate } from 'react-router-dom';

import { Toaster } from "react-hot-toast";
import { useAuthContext } from './context/AuthContext';

function App() {
  
  const {authUser}=useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center '>
   <Routes>
      <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
		  <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
			<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} /> 
     {/* protected routes */}
   </Routes>
   <Toaster />
    </div>
  )
}

export default App
