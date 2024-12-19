import { Routes,Route } from 'react-router-dom'
import {AuthProvder} from './contexts/AuthContext.jsx'


import LandingPage from './components/LandingPage/LandingPage.jsx';
import Navheader from './components/Navheader/Navheader.jsx';
import MyProfile from './components/MyProfile/MyProfile.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Create from './components/Create/Create.jsx'
import Logout from './components/Logout/Logout.jsx'

function App() {

    return (

        <AuthProvder>

            <Navheader />

            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/MyProfile" element={<MyProfile />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register />} />
                <Route path="/Create" element={<Create />} />
                <Route path="/Logout" element={<Logout />} />
            </Routes>

        </AuthProvder>

    );
    
}

export default App;