import React from 'react';
import './Footer.css';
import { HashLink as NavLink } from "react-router-hash-link";
const Footer =() =>{
  const Top = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  }
    return(
        <>
        <div id='Footer' >
        <footer className='hmFooter'>
        <div class="container text-sm-left">
        <div class="row pt-0">
          <div class="col-lg-3 mt-3">
            <h2 className='projectTitle'>hotelVenues</h2>
           
            <p>Discover a world of comfort,luxury, and adventure as you explore our curated selection of hotels,
                making every moment of your getaway truly extraordinary. 
            </p>
          </div>
          <div class="col-lg-3 mt-3" id='footerLinks'>
            <h3>QUICK LINKS</h3>
           
            <p><NavLink to="/Hotels">Browse Hotels</NavLink></p>
            <p><NavLink to="/Hotels">Special Offers & Packages</NavLink></p>
            <p><NavLink to="/Hotels">Room Types & Amenities</NavLink></p>
            <p><NavLink to="/About">Customer Reviews & Ratings</NavLink></p>
          </div>
          <div class="col-lg-3 mt-3">
          <div className="container">
        <h3>OUR SERVICES</h3>
       
            <p>Concierge Assistance</p>
            <p>Flexible Booking Options</p>
            <p>Airport Transfers</p>
            <p>Wellness & Recreation</p>
    </div>
          </div>
          <div class="col-lg-3 mt-3">
            <h3>CONTACT US</h3>
           
            <p>E-mail: sahil14t@gmail.com</p>
            <p>Mob.:1234567890, 0987654321</p>
            <div className='footerSocialIcon'>
                    <a href='https://www.instagram.com/_sahil_thakur_17?igsh=YXg3bG92MTF6aWFx' target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
                    <a href='https://x.com/SahilThakur1718?t=Iz-JWC8W_5QDdpZFBuci7A&s=09' target="_blank"><i class="fa-brands fa-square-x-twitter"></i></a>
                    <a href='https://www.facebook.com/profile.php?id=100052396149502' target="_blank"><i class="fa-brands fa-facebook"></i></a>
                </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="footer text-center" style={{ backgroundColor: "black", color: "whitesmoke"}}>
      <p style={{marginBottom: "0"}}>© 2024 Copyright:abcd1a@gmail.com</p>
      <center>
    <button onClick={Top} style={{borderRadius:"50%",marginTop:"3px"}}> <i class="fa-duotone fa-solid fa-circle-arrow-up" style={{color: "#00040a", fontSize:"50px"}}></i> </button>
    </center>
    </div>
    </div>
    </>
    )
}
 export default Footer;