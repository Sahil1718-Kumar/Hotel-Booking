import React, { useState } from 'react';
import './UserLogin.css';
import { useNavigate } from 'react-router-dom';

const UserSignup = ({ setUserData }) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [cPasswordError, setCPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const navigate = useNavigate();

   
    function handleSignup(){
        let isValid = true ;
        if(!username){
            setUsernameError("Please enter your username.");
            isValid = false;
        } else if(!isNaN(username)){
            setUsernameError("Username can't be only digits.");
            isValid = false;
        } else if(username.charAt(0)>= 0){
            setUsernameError("Username can't begin with a digit.");
            isValid = false;
        }
        else if(username.length<6 || username.length > 12){
            setUsernameError("Username must be between 6-12 characters.");
            isValid = false;
        }else{
            setUsernameError("");
        }

        if(!password){
            setPasswordError("Please enter your password.");
            isValid = false;
        }
        else if(password.length<6 || password.length >=10){
            setPasswordError("Password must be between 6-10 digits.");
            isValid = false;
        } else {
            setPasswordError("");
        }

        if(!cPassword){
            setCPasswordError("Please enter your password.");
            isValid = false;
        }else if(password != cPassword){
            setCPasswordError("Please enter same password");
            isValid = false;
        } else {
            setCPasswordError("");
        }

        if(!email){
            setEmailError("Please enter your Email.");
            isValid = false;
        } else if(email.charAt(0)>= 0){
            setEmailError("Email can't start with a digit.");
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
        } else{
            setEmailError("");
        }

        if(!phone){
            setPhoneError("Please enter your phone no.");
            isValid= false;
        } else if(isNaN(phone)){
            setPhoneError("Please enter a valid phone no.");
            isValid= false;
        } else if(phone.length != 10){
            setPhoneError("Please enter a valid phone no.");
            isValid = false;
        } else {
            setPhoneError("");
        }

        if(isValid){
            setUserData({ username, email, password });
            alert("Sign up successfully, thank you..");
            navigate('/UserLogin');
        }
    }
    return(
        <div id='userSignup' data-aos="fade-left" data-aos-easing="linear"
        data-aos-duration="1500" style={{display:"flex", justifyContent:"center",height:"minContent", backgroundImage:"url('https://i.pinimg.com/originals/b4/b9/7e/b4b97eac394c1cf58c1cba814a4865e3.jpg')", backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}}>
        <div className='form'>
            <h2 className='formHeading'>User Sign up</h2>
        <label>Username</label><br/>
        <input type='text' value={username} placeholder='Enter your username' className='inputField' onChange={(e) => setUsername(e.target.value)}/><br/>
        <div className='error'>{usernameError}</div>
        <hr/>
        <label>Password</label><br/>
        <input type='password' value={password} placeholder='Enter your password' className='inputField' onChange={(e) => setPassword(e.target.value)}/><br/>
        <div className='error'>{passwordError}</div>
        <hr/>
        <label>Confirm Password</label><br/>
        <input type='password' value={cPassword} placeholder='Re-enter your password' className='inputField' onChange={(e) => setCPassword(e.target.value)}/><br/>
        <div className='error'>{cPasswordError}</div>
        <hr/>
        <label>Email</label><br/>
        <input type='text' value={email} placeholder='Enter your email' className='inputField' onChange={(e) => setEmail(e.target.value)}/><br/>
        <div className='error'>{emailError}</div>
        <hr/>
        <label>Phone no.</label><br/>
        <input type='text' value={phone} placeholder='Enter your phone no.' className='inputField' onChange={(e)=> setPhone(e.target.value)}/><br/>
        <div className='error'>{phoneError}</div>
        <hr/>
        <button onClick={handleSignup} className='formBtn'>Sign up</button>
        </div>
        </div>
    )
}
export default UserSignup;
