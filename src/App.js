import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import TokenManager from './utils/TokenManager';
import API from './utils/API';
import { useEffect, useState } from 'react';

const App = () => {

    const [user, setUser] = useState(null);

    const refreshUser = () => {
        if(TokenManager.isConnected()) {
            API.get('user/owner').then(result => {
                setUser(result.data);
            });
        }
    }

    useEffect(() => {
        refreshUser();
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={TokenManager.isConnected() ? <Navigate to="/dashboard" /> : <Home />}/>
                <Route path="/dashboard" element={!TokenManager.isConnected() ? <Navigate to="/"/> : <Dashboard user={user} refreshUser={setUser}/>}/>
                <Route path="/profile" element={!TokenManager.isConnected() ? <Navigate to="/"/> : <Profile user={user} refreshUser={refreshUser}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App