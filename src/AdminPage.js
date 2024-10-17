import React from 'react';
import './AdminPage.css';
import { useLocation } from 'react-router-dom';

const AdminPage = () => {
  const location = useLocation();
  const { row1, row2, row3 } = location.state || { row1: [], row2: [], row3: [] };

  return (
    <div id='adminPage'>
        <center>
        <h1 className='hotelsHeading'>6 Star Hotels</h1>
             <div className='row mt-2' id='row1Heading'>
        <div className='col-lg-2'>
            <h3>Hotel</h3>
        </div>
        <div className='col-lg-2'><h3>Name</h3></div>
        <div className='col-lg-2'><h3>Address</h3></div>
        <div className='col-lg-2'><h3>Room Type</h3></div>
        <div className='col-lg-2'><h3>Rent/night</h3></div>
        <div className='col-lg-2'><h3>Updation</h3></div>
        </div>
        {row1 && row1.map((item) => (
    <div className='row mt-2' id='hotel6star' key={item.id} data-aos="fade-up"data-aos-duration="3000">
        <div className='col-lg-2'>
            <img src={item.img}/>
        </div>
        <div className='col-lg-2'><p>{item.title}</p></div>
        <div className='col-lg-2'><p>{item.desc1}</p></div>
        <div className='col-lg-2'><p>{item.desc2}</p></div>
        <div className='col-lg-2'><p>{item.desc3}</p></div>
        <div className='col-lg-2'><button class="btn btn-primary" type="submit">Edit</button> <button class="btn btn-primary" type="submit">Remove</button></div>
    </div>
        ))}
        <button type="button" class="btn btn-outline-secondary mt-5 mb-5" id="adminPageBtn"><i class="fa-solid fa-plus" style={{color: "#ffffff"}}></i></button>
        <hr/>

<h1 className='hotelsHeading'>5 Star Hotels</h1>
             <div className='row mt-2' id='row2Heading'>
        <div className='col-lg-2'>
            <h3>Hotel</h3>
        </div>
        <div className='col-lg-2'><h3>Name</h3></div>
        <div className='col-lg-2'><h3>Address</h3></div>
        <div className='col-lg-2'><h3>Room Type</h3></div>
        <div className='col-lg-2'><h3>Rent/night</h3></div>
        <div className='col-lg-2'><h3>Updation</h3></div>
        </div>
        {row2 && row2.map((item) => (
    <div className='row mt-2' id='hotel5star' key={item.id} data-aos="fade-up"data-aos-duration="3000">
        <div className='col-lg-2'>
            <img src={item.img}/>
        </div>
        <div className='col-lg-2'><p>{item.title}</p></div>
        <div className='col-lg-2'><p>{item.desc1}</p></div>
        <div className='col-lg-2'><p>{item.desc2}</p></div>
        <div className='col-lg-2'><p>{item.desc3}</p></div>
        <div className='col-lg-2'><button class="btn btn-primary" type="submit">Edit</button> <button class="btn btn-primary" type="submit">Remove</button></div>
    </div>
        ))}
        <button type="button" class="btn btn-outline-secondary mt-5 mb-5" id="adminPageBtn"><i class="fa-solid fa-plus" style={{color: "#ffffff"}}></i></button>

<h1 className='hotelsHeading'>4 Star Hotels</h1>
             <div className='row mt-2' id='row3Heading'>
        <div className='col-lg-2'>
            <h3>Hotel</h3>
        </div>
        <div className='col-lg-2'><h3>Name</h3></div>
        <div className='col-lg-2'><h3>Address</h3></div>
        <div className='col-lg-2'><h3>Room Type</h3></div>
        <div className='col-lg-2'><h3>Rent/night</h3></div>
        <div className='col-lg-2'><h3>Updation</h3></div>
        </div>
        {row3 && row3.map((item) => (
    <div className='row mt-2' id='hotel4star' key={item.id} data-aos="fade-up"data-aos-duration="3000">
        <div className='col-lg-2'>
            <img src={item.img}/>
        </div>
        <div className='col-lg-2'><p>{item.title}</p></div>
        <div className='col-lg-2'><p>{item.desc1}</p></div>
        <div className='col-lg-2'><p>{item.desc2}</p></div>
        <div className='col-lg-2'><p>{item.desc3}</p></div>
        <div className='col-lg-2'><button class="btn btn-primary" type="submit">Edit</button> <button class="btn btn-primary" type="submit">Remove</button></div>
    </div>
        ))}
        <button type="button" class="btn btn-outline-secondary mt-5 mb-5" id="adminPageBtn"><i class="fa-solid fa-plus" style={{color: "#ffffff"}}></i></button>
        </center>
</div> 
  );
};

export default AdminPage;




