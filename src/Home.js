import React from "react";
import { NavLink } from 'react-router-dom';
import './Home.css';
import hotel1 from './images/hyattRegency.webp';
import hotel2 from './images/jwMarriott.jpg';
import hotel3 from './images/oberoiAmarvilas.jpg';
import hotel4 from './images/tajLake.jpg';
import pic1 from './images/pic1.jpg';
import pic2 from './images/pic2.jpg';

const Home = () =>{
    return(
        <div className="home">
          <div className="homeTitle">
            <p><span style={{color:"blue",fontWeight:"900"}}>----</span>LUXURY LIVING<span style={{color:"blue",fontWeight:"900"}}>----</span></p>
            <h1 className="ps-5 pe-5"id="homeH1">Discover A Brand<br/>Luxurious Hotel</h1>
            <button type="button" className="btn btn-warning" style={{width:"30%"}}><NavLink to="/About">About</NavLink></button>
            <button type="button" className="btn btn-light" style={{width:"30%",marginLeft:"3PX"}}><NavLink to="/Hotels">Hotels</NavLink></button>
          </div>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src={hotel3} class="d-block w-100" alt="hotel1"/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={hotel2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={hotel4} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={hotel1} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<hr/>

<h1 className="homeGallery">Gallery</h1>
<NavLink to="/Hotels">
<div className="row" data-aos="flip-left"data-aos-easing="ease-out-cubic"data-aos-duration="2000">
  <div className="col-lg-6">
    <img src={pic1} width="100%" alt="gallery"/>
    </div>
    <div className="col-lg-6">
   <img src={pic2} width="100%" alt="gallery"/>
  </div>
</div>
</NavLink>
<div className="row">
  <div className="col-lg-12 text-center">
<button type="button" class="btn btn-outline-secondary mt-2" id="homeBtn"><NavLink className="homeLink" to="/Hotels">Click here to Check/Book hotel rooms available at great prices</NavLink></button>
</div>
</div>
        </div>
    )
}
export default Home;