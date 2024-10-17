import React from 'react';
import './Contact.css';
const Contact = () => {
    return(
        <div id='contact'>
            <div className='row mb-2'>
                <div className='col-lg-4 mt-2' id='contactCol1' data-aos="fade-right"data-aos-offset="300"data-aos-easing="ease-in-sine">
                    <h2 id='contactCol1Title'>Contact Us</h2>
                    <p id='contactCol1Desc'>You can call us or send us a message, and our team will get back to you within 12 hours.</p>
                    <div className='contactDetail'>
                    <p className='contactInfo'><i class="fa-solid fa-phone fa-beat"></i> Phone: <a href=''>+91 1234567890</a></p>
                    <p className='contactInfo'><i class="fa-regular fa-envelope fa-beat"></i> Email: <a href=''>sahil@gmail.com</a></p>
                    <p className='contactInfo'><i class="fa-solid fa-globe fa-beat"></i> Website: <a href=''>hotelVenues.com</a></p>
                    </div>
                    <div className='contactSocialIcon'>
                    <a href='https://www.instagram.com/_sahil_thakur_17?igsh=YXg3bG92MTF6aWFx' target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
                    <a href='https://x.com/SahilThakur1718?t=Iz-JWC8W_5QDdpZFBuci7A&s=09' target="_blank"><i class="fa-brands fa-square-x-twitter"></i></a>
                    <a href='https://www.facebook.com/profile.php?id=100052396149502' target="_blank"><i class="fa-brands fa-facebook"></i></a>
                </div>
                </div>

                <div className='col-lg-8 mt-2' id='contactCol2' data-aos="fade-left"data-aos-offset="300"data-aos-easing="ease-in-sine">
                    <form action="https://formspree.io/f/mnqewozy" method="post" className='contactForm'>
                    <h2 id='contactFormTitle'>Send us a message</h2>
                    <div className="form-fields">
                        <div className="form-group">
                            <input type="text" className="fname" placeholder="First Name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="lname" placeholder="Last Name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="email" placeholder="Mail"/>
                        </div>
                        <div className="form-group">
                            <input type="number" className="phone" placeholder="Phone"/>
                        </div>
                        <div className="form-group">
                            <textarea name="message" id="" placeholder="Write your message"></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Send Message" className="submit-button"/>
       
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;