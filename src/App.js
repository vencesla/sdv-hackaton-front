import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import TokenManager from './utils/TokenManager';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={TokenManager.isConnected() ? <Navigate to="/dashboard" /> : <Home />}/>
                <Route path="/dashboard" element={!TokenManager.isConnected() ? <Navigate to="/" /> : <Dashboard />}/>
                <Route path="/profile" element={!TokenManager.isConnected() ? <Navigate to="/" /> : <Profile />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App