import { useEffect, useState } from 'react'

import logo from './assets/logobg.png'
import {BrowserRouter,Routes,Route,Link,useNavigate } from "react-router-dom";

import './App.css' 
import MyNetwork from "./pages/Mynetwork";
import Interests from "./pages/Myinterests";
import Jobs from "./pages/jobs";
import Messages from "./pages/messages";
import Profile from "./pages/profile";
import Login from "./pages/login";
import Signup from "./pages/signup";
import JobDetails from "./pages/jobdetails";
import ApplyJob from './pages/applyjob';
import ApplicationStatus from './pages/ApplicationStatus';

function App() {
  const [open, setOpen] = useState(false);
  
  
  
const navigate = useNavigate();
  const currentPage = window.location.pathname;
 const hideNavbar = currentPage === "/login" || currentPage === "/signup";
 

 return (
  <div className='main-div'>

    {/* 🔹 Top Bar Always Visible */}
    <nav className="top-nav">

      <div className="left-section">
        <img src={logo} className="nav-logo" alt="logo" />
      </div>

      {/* 🔹 Show right menu only when NOT login/signup */}
      {!hideNavbar && (
        <div className="right-section">
          <Link to="/mynetwork" className="nav-link">My Network</Link>
          <Link to="/interests" className="nav-link">My Interests</Link>
          <Link to="/jobs" className="nav-link">Jobs</Link>
          <Link to="/messages" className="nav-link">Messages</Link>
          <Link to="/profile" className="nav-link">Profile</Link>

          <button className="nav-btn" onClick={() => navigate("/login")}>Login</button>
          <button className="nav-btn" onClick={() => navigate("/signup")}>Signup</button>
        </div>
      )}
    </nav>


    {/* 🔹 Page Content */}
    <main className="page-area">
      <Routes>
        <Route path="/" element={<MyNetwork />} />
        <Route path="/mynetwork" element={<MyNetwork />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobdetails" element={<JobDetails />} />
        <Route path="/jobs/ApplyJob/:ApplicationId" element={<ApplyJob />} />
        <Route path="/jobs/ApplyJob/:ApplicationId/status" element={<ApplicationStatus />} />
      </Routes>
    </main>
  </div>
);


}
// function Couter(){
  
//   console.log("counter")
//    const [count, setCount] = useState(0)
//    useEffect(()=>{ const interval =setInterval(()=>setCount(c=>c+1),1000) ;
//     console.log("moounted")
//     return ()=>{
//       clearInterval(interval)
//       console.log("unmouont")
//     }

   
//   }, []);
 
//   return <div className='logo-container'>
//   <img src={logo} alt="CollabNexus Logo" className="logo" />

//   {/* <h1 id="text">{count}</h1> */}
//   <div>my network</div>
//   <div>my interests</div>

//    <div>job opportunites</div>
//     <div>messages</div>
//      <div>profile</div>
// </div>


// }

export default App
