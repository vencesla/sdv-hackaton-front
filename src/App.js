import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import TokenManager from './utils/TokenManager';
import API from './utils/API';
import { useEffect, useState } from 'react';
import MatchList from "./components/MatchList";

const App = () => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const refreshUser = () => {
        if(TokenManager.isConnected()) {
            API.get('user/owner').then(result => {
                setUser(result.data);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }

    useEffect(() => {
        refreshUser();
    }, [])

    return (
        <>
            {loading && <div>LOADING...</div>}
            {!loading && <BrowserRouter>
                <Routes>
                    <Route path="/" element={TokenManager.isConnected() ? <Navigate to="/dashboard"/> : <Home/>}/>
                    <Route path="/dashboard" element={
                        !TokenManager.isConnected()
                            ? <Navigate to="/"/>
                            : !user?.firstName
                                ? <Navigate to="/profile"/>
                                : <Dashboard user={user} refreshUser={setUser}/>
                    }/>
                    <Route path="/matchlist" element={!TokenManager.isConnected() ? <Navigate to="/"/> : <MatchList user={user} refreshUser={refreshUser}/>}/>
                    <Route path="/profile" element={!TokenManager.isConnected() ? <Navigate to="/"/> :
                        <Profile user={user} refreshUser={refreshUser}/>}/>
                </Routes>
            </BrowserRouter>}
        </>
    )
}

export default App