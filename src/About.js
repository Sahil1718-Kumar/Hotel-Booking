import React from 'react';
import './About.css';
const About = () => {
    return(
        <div id='about'>
            <div className='row'>
                <div className='col-lg-7 p-5'>
                    <h2><span style={{color:"coral"}}>~~~~</span> <span style={{color:"brown"}}>About Us</span> <span style={{color:"coral"}}>~~~~</span></h2>
                    <h1 className='aboutWelcome'>Welcome to <span style={{color:"coral",fontWeight:"700"}}>hotelVenues</span></h1>
                    <p>where we offer the best hotel deals for travelers of all kinds. Whether you're planning a luxurious retreat or a budget-friendly trip, we make it easy to find accommodations that suit your needs. Our platform provides access to a diverse range of hotels, from 6-star luxury resorts to 3-star cozy stays. With real-time availability and competitive pricing, we ensure you get the best value for your money.<br/>

At hotelVenues, we aim to simplify your booking experience with user-friendly tools, detailed descriptions, and verified reviews. Browse through a wide selection of hotels, compare prices, and secure your stay with our fast and secure booking process. Whether you're traveling for business or leisure, we are committed to helping you find the perfect place to stay, making your journey as comfortable and convenient as possible.</p>
<div className='row'>
    <div className='col-lg-12' style={{display:"flex", gap:"10px"}}>
        <div className='aboutInfo'>
            <i class="fa-solid fa-hotel"></i><br/><br/>
            <h3>50+</h3>
            <p>Hotels</p>
            </div>
        <div className='aboutInfo'>
            <i class="fa-solid fa-users"></i><br/><br/>
            <h3>5K+</h3>
            <p>Users</p>
            </div>
        <div className='aboutInfo'>
            <i class="fa-solid fa-face-smile"></i><br/><br/>
            <i class="fa-solid fa-star" style={{color: "gold",fontSize:"20px"}}></i>
            <i class="fa-solid fa-star" style={{color: "gold",fontSize:"20px"}}></i>
            <i class="fa-solid fa-star" style={{color: "gold",fontSize:"20px"}}></i>
            <i class="fa-solid fa-star" style={{color: "gold",fontSize:"20px"}}></i>
            <i class="fa-solid fa-star-half-stroke" style={{color: "gold",fontSize:"20px"}}></i><br/><br/>
            <p>Rating</p>
        </div>
    </div>
</div>

                </div>
                <div className='col-lg-5 pt-5 ps-5 pe-5 '>
                    <figure data-aos="fade-up"data-aos-duration="3000">
                        <img src='https://www.azureazure.com/wp-content/uploads/2019/09/Travel-Greek-Hotels-Article04.jpg' width="90%"/>
                    </figure>
                </div>
            </div>
            <button type="button" class="btn btn-warning ms-5 mb-2 mt-5" style={{width:"30%"}}>Explore More</button>
        </div>
    )
}
export default About;