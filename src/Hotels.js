import React, {useState} from 'react';
import './Hotels.css';
import { NavLink } from 'react-router-dom';

const row1 = [
  {
      id:"card1",
      img : '/hotelImg/jw.jpg',
      title : "JW Marriott Hotel",
      desc1 : "Sector 35-B,Chandigarh",
      desc2 : "AC/Non-AC",
      desc3 : "Rs.50,000-Rs.1,00,000/night"
  },
  {
      id:"card2",
      img : '/hotelImg/arista1.jpg',
      title : "Arista Hotel",
      desc1 : "NH-21,Mohali, Punjab",
      desc2 : "AC/Non-AC",
      desc3 : "Rs.25,000-Rs.1,00,000/night"
  },
  {
      id:"card3",
      img : '/hotelImg/taj.jpg',
      title : "Taj Hotel",
      desc1 : "Sector 17-A,Chandigarh",
      desc2 : "AC/Non-AC",
      desc3 : "Rs.50,000-Rs.1,50,000/night"
  },
  {
      id:"card4",
      img : '/hotelImg/ragenta.jpg',
      title : "Ragenta Place",
      desc1 : "Sector-119, Mohali, Punjab",
      desc2 : "AC/Non-AC",
      desc3 : "Rs.60,000-Rs.1,29,000/night"
  }];

  const row2 = [
  {
      id:"card5",
      img : '/hotelImg/hyatt.jpg',
      title : "Hyatt Regency",
      desc1 : "Phase 1, Chandigarh",
      desc2 : "AC/Non-AC",
      desc3 : "Rs.20,000-Rs.80,000/night"
  },
  {
      id:"card6",
      img : '/hotelImg/mountview.jpg',
      title : "Hotel Mountview",
      desc1 : "Sector 10,Chandigarh",
      desc2 : "AC/Non-AC",
      desc3 : "Rs.10,000-Rs.60,000/night"
  },
  {
      id:"card7",
      img : '/hotelImg/novotel.jpg',
      title : "Novotel",
      desc1 : "Industrial Area Phase 1, Chandigarh",
      desc2 : "AC/Non-AC",
      desc3 : "Rs.15,000-Rs.75,000/night"
  }];

  const row3 = [
  {
      id:"card8",
      img : '/hotelImg/glades.jpg',
      title : "Glades Hotel",
      desc1 : "Sector-55, Mohali, Punjab",
      desc2 : "AC/Non-AC",
      desc3 : "Rs.8,000-Rs.20,000/night"
  },
  {
      id:"card9",
      img : '/hotelImg/holiday.jpg',
      title : "Holiday Inn",
      desc1 : "Zirakpur, Punjab",
      desc2 : "AC/Non-AC",
      desc3 : "Rs.6,000-Rs.12,000/night"
  },
  {
      id:"card10",
      img : '/hotelImg/velvet.jpg',
      title : "Velvet Clarks Exotica",
      desc1 : "NH-21 Zirakpur, Punjab",
      desc2 : "AC/Non-AC",
      desc3 : "Rs.5,000-Rs.14,000/night"
  },
  {
      id:"card11",
      img : '/hotelImg/oyester.jpg',
      title : "Hotel Oyester",
      desc1 : "Sector 17-A,Chandigarh",
      desc2 : "AC/Non-AC",
      desc3 : "Rs.5,000-Rs.15,000/night"
  },

];


const Hotels = ({setSelectedHotel}) => {
  

  const handleBookClick = (hotelTitle) => {
    setSelectedHotel(hotelTitle); 
  };

    return(
        <div id='hotels'>
            <center>
             <h1 className='hotelsHeading'>6 Star Hotels</h1>
            <div className='row'  data-aos="fade-down" data-aos-easing="linear"data-aos-duration="1500">
                <div className='col-lg-12' style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
           { row1.map((item,index) => (
<div className="card mb-5" style={{width: "20rem"}}>
  <div  className="card-img-top" id={item.id} alt=""></div>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text"><b>Address: </b>{item.desc1}<br/><b>Rooms: </b>{item.desc2}<br/><b>Rent: </b>{item.desc3}</p>
    <div className="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" className="btn btn-primary">Offers</button>
  <button type="button" className="btn btn-primary" onClick={() => handleBookClick(item.title)}><NavLink to="/BookingPage">Book</NavLink></button>
  <button type="button" className="btn btn-primary">Details</button>
</div>
  </div>
</div>
))}
</div></div>

<h1 className='hotelsHeading'>5 Star Hotels</h1>
            <div className='row' data-aos="fade-up" data-aos-duration="3000">
                <div className='col-lg-12' style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
           { row2.map((item,index) => (
<div className="card mb-5" style={{width: "22rem"}}>
  <div className="card-img-top" id={item.id}></div>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text"><b>Address: </b>{item.desc1}<br/><b>Rooms: </b>{item.desc2}<br/><b>Rent: </b>{item.desc3}</p>
    <div className="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" className="btn btn-primary">Offers</button>
  <button type="button" className="btn btn-primary" onClick={() => handleBookClick(item.title)}><NavLink to="/BookingPage">Book</NavLink></button>
  <button type="button" className="btn btn-primary">Details</button>
</div>
  </div>
</div>
))}
</div>
</div>

<h1 className='hotelsHeading'>4 Star Hotels</h1>
            <div className='row' data-aos="fade-down"data-aos-easing="linear"data-aos-duration="1500">
                <div className='col-lg-12' style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
           { row3.map((item,index) => (
<div className="card mb-5" style={{width: "20rem"}}>
  <div className="card-img-top" id={item.id} alt="..."></div>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text"><b>Address: </b>{item.desc1}<br/><b>Rooms: </b>{item.desc2}<br/><b>Rent: </b>{item.desc3}</p>
    <div className="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" className="btn btn-primary">Offers</button>
  <button type="button" className="btn btn-primary" onClick={() => handleBookClick(item.title)}><NavLink to="/BookingPage">Book</NavLink></button>
  <button type="button" className="btn btn-primary">Details</button>
</div>
  </div>
</div>
))}
</div>
</div>
</center>

        </div>
    )
}
export default Hotels;
export {row1, row2, row3};
