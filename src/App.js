import './App.css';
import { useEffect } from 'react';
import Home from "./Home";
import Navbar from "./Navbar";
import Hotels from "./Hotels";
import About from "./About";
import Contact from "./Contact";
import UserSignup from "./UserSignup";
import UserLogin from "./UserLogin";
import AdminLogin from "./AdminLogin";
import AdminPage from './AdminPage';
import BookingPage from './BookingPage';
import Footer from './Footer';
import Open from './Open';
import TopScroll from "./TopScroll";
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(()=>{
    AOS.init();
  }, [])
  const [userData, setUserData] = useState({ username: "", password: ""});
  const [user,setUser] = useState({user:""});
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 6000);

        return () => clearTimeout(timer);
    }, []);
  return (
    <div className="App">
      
      {loading ? (<Open />) : (<><Navbar user={user}/>
      <TopScroll/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Hotels" element={<Hotels setSelectedHotel={setSelectedHotel}/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/UserSignup" element={<UserSignup setUserData={setUserData}/>}/>
        <Route path="/UserLogin" element={<UserLogin userData={userData} setUser={setUser}/>}/>
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
        <Route path="/AdminPage" element={<AdminPage />}/>
        <Route path="/BookingPage" element={<BookingPage selectedHotel={selectedHotel}/>}/>
      </Routes>
      <Footer/></>)}
    </div>
  );
}

export default App;
