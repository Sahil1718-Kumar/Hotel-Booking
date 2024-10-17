import React,{useState} from 'react';
import './BookingPage.css';
import { useNavigate } from 'react-router-dom';
const BookingPage = ({ selectedHotel }) => {
  const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [rooms, setRooms] = useState('');
    const [roomType, setRoomType] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');
    const [arrivalTime, setArrivalTime] = useState('');
    const [departure, setDeparture] = useState('');
  
    
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [roomsError, setRoomsError] = useState('');
    const [roomTypeError, setRoomTypeError] = useState('');
    const [arrivalDateError, setArrivalDateError] = useState('');
    const [arrivalTimeError, setArrivalTimeError] = useState('');
    const [departureError, setDepartureError] = useState('');

    const navigate = useNavigate();

    function handleBooking(){
      let isValid = true ;
      if(!firstName){
          setFirstNameError("Please enter your first name.");
          isValid = false;
      } else if(!isNaN(firstName)){
        setFirstNameError("Please enter your first name.");
          isValid = false;
    }else{
        setFirstNameError("");
    }

    if(!lastName){
      setLastNameError("Please enter your last name.");
      isValid = false;
  } else if(!isNaN(lastName)){
    setLastNameError("Please enter your last name.");
      isValid = false;
}else{
    setLastNameError("");
}

if(!email){
  setEmailError("Please enter your email.");
  isValid = false;
} else if(email.charAt(0)>= 0){
  setEmailError("Invalid email address.");
  isValid = false;
} else if((email.charAt(email.length-4) != ".") && (email.charAt(email.length-3) != ".")){
  setEmailError("Invalid email address.");
  isValid = false;
} else if(email.charAt(0) == "@"){
  setEmailError("Invalid email address.");
  isValid = false;
} else  if ((email.substr(email.length-3,3) != "com") && (email.substr(email.length-2,2) != "in")) {
  setEmailError("Invalid email address.");
  isValid = false;
}else{
setEmailError("");
}

if(!rooms){
  setRoomsError("Please enter no. of rooms to be booked.");
  isValid = false;
}else{
setRoomsError("");
}

if (roomType === '' || roomType === 'Please Select') {
  setRoomTypeError("Please choose a room type");
    isValid = false;
} else{
  setRoomTypeError("");
  }

if(!arrivalDate){
  setArrivalDateError("Please select an arrival date.");
  isValid = false;
}else{
setArrivalDateError("");
}

if(!arrivalTime){
  setArrivalTimeError("Please select an arrival time.");
  isValid = false;
}else{
setArrivalTimeError("");
}

if(!departure){
  setDepartureError("Please select departure date.");
  isValid = false;
}else{
  setDepartureError("");
}

if(isValid){
  alert("Hotel room booked, Thankyou👏");
  navigate('/');
}
    }
  return (
    <div className='bookingPage'>
    <div className="container mt-5 mb-2" id='BookingPage'>
      <div className="text-center" id='BookingTitle'>
        <h1>Hotel Booking</h1>
        <h2>Hotel : <b>{selectedHotel}</b></h2>
        <p>Experience something new every moment</p>
      </div>
      <form>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" value={firstName} className="form-control detail" id="firstName" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
            <div className='errors'>{firstNameError}</div>
          </div>
          <div className="col">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" value={lastName}  className="form-control detail" id="lastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
            <div className='errors'>{lastNameError}</div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="email" value={email}  className="form-control detail" id="email" placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
            <div className='errors'>{emailError}</div>
          </div>
          <div className="col">
            <label htmlFor="guests" className="form-label">Number of Rooms</label>
            <input type="number" value={rooms}  className="form-control detail" id="rooms" placeholder="e.g.,1,2.." onChange={(e) => setRooms(e.target.value)}/>
            <div className='errors'>{roomsError}</div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="roomType" className="form-label">Room Type</label>
          <select id="roomType" className="form-select detail" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
            <option>Please Select</option>
            <option>Single Room AC</option>
            <option>Single Room Non-AC</option>
            <option>Double Room AC</option>
            <option>Double Room Non-AC</option>
            <option>Suite</option>
          </select>
          <div className='errors'>{roomTypeError}</div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="arrivalDate" className="form-label">Arrival Date</label>
            <input type="date" className="form-control detail" id="arrivalDate" value={arrivalDate} onChange={(e) => setArrivalDate(e.target.value)}/>
            <div className='errors'>{arrivalDateError}</div>
          </div>
          <div className="col">
            <label htmlFor="arrivalTime" className="form-label">Arrival Time</label>
            <input type="time" className="form-control detail" id="arrivalTime" value={arrivalTime} onChange={(e) => setArrivalTime(e.target.value)}/>
            <div className='errors'>{arrivalTimeError}</div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="departureDate" className="form-label">Departure Date</label>
            <input type="date" className="form-control detail" id="departureDate" value={departure} onChange={(e) => setDeparture(e.target.value)}/>
            <div className='errors'>{departureError}</div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Free Pickup?</label>
          <div>
            <div className="form-check form-check-inline d-flex align-items-center">
              <input className="form-check-input me-2" type="radio" name="pickup" id="pickupYes" value="yes" defaultChecked/>
              <label className="form-check-label" htmlFor="pickupYes">Yes Please! Pick me up on arrival</label>
            </div>
            <div className="form-check form-check-inline d-flex align-items-center">
              <input className="form-check-input me-2" type="radio" name="pickup" id="pickupNo" value="no" />
              <label className="form-check-label" htmlFor="pickupNo">No Thanks - I'll make my own way there</label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="specialRequests" className="form-label">Special Requests</label>
          <textarea className="form-control" id="specialRequests" rows="3"></textarea>
        </div>
      </form>
      <div className="text-center">
          <button id='BookingBtn' onClick={handleBooking}>Book</button>
        </div>
  
    </div>
    </div>
  );
};

export default BookingPage;
