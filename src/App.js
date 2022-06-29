import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from  'react-router-dom'
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile.js";
const  App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
