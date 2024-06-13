import './components/LandingPage/LandingPage.jsx'
import { Routes,Route } from 'react-router-dom'
import {AuthProvder} from './contexts/AuthContext.jsx'


import LandingPage from './components/LandingPage/LandingPage.jsx';
import MyProfile from './components/MyProfile/MyProfile.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

function App() {

    return (

        <AuthProvder>

            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/MyProfile" element={<MyProfile />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register />} />
            </Routes>

        </AuthProvder>

    );
    
}

export default App;