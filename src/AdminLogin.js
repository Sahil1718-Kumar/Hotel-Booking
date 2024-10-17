import React, { useState } from 'react';
import { row1, row2, row3 } from './Hotels';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () =>{
    const [adminName, setAdminName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [key, setKey] = useState('');
    
    const [adminNameError, setAdminNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [keyError, setKeyError] = useState('');
    const navigate = useNavigate();

   
    function handleSignup(){
        let isValid = true ;
        if(!adminName){
            setAdminNameError("Please enter your name.");
            isValid = false;
        } else if(adminName== "sahil123"){
            setAdminNameError("");
        } else{
            setAdminNameError("Name is incorrect.");
            isValid = false;
        }

        if(!password){
            setPasswordError("Please enter your password.");
            isValid = false;
        } else if(password=="sahil123") {
            setPasswordError("");
        }else{
            setPasswordError("Password is incorrect..");
            isValid = false;
        }

        //Email
        if(!email){
            setEmailError("Please enter your Email.");
            isValid = false;
        } else if(email=="sahil@gmail.com"){
            setEmailError("");
        } else {
            setEmailError("Email address is incorrect..");
            isValid = false;
        }

        if(!key){
            setKeyError("Please enter security key.");
            isValid= false;
        } else if(key == "@12345"){
            setKeyError("");
        } else {
            setKeyError("Security key is incorrect.");
            isValid = false;
        }

        if(isValid){
            alert("Login successfully, thank you..");
            navigate('/AdminPage', { state: { row1, row2, row3 } });
        }
    }
    return(
        <div id='adminLogin' style={{display:"flex", justifyContent:"center",height:"minContent",marginTop:"10px",background:"url('https://images5.alphacoders.com/349/thumb-1920-349822.jpg')", padding:"10px 0"}} data-aos="fade-right"data-aos-easing="linear"data-aos-duration="1500">
        <div className='form' >
            <h2 className='formHeading'>Admin Login</h2>
        <label>Name</label><br/>
        <input type='text' value={adminName} placeholder='Enter your Name' className='inputField' onChange={(e) => setAdminName(e.target.value)}/><br/>
        <div className='error'>{adminNameError}</div>
        <hr/>
        <label>Password</label><br/>
        <input type='password' value={password} placeholder='Enter your password' className='inputField' onChange={(e) => setPassword(e.target.value)}/><br/>
        <div className='error'>{passwordError}</div>
        <hr/>
        <label>Email</label><br/>
        <input type='text' value={email} placeholder='Enter your email' className='inputField' onChange={(e) => setEmail(e.target.value)}/><br/>
        <div className='error'>{emailError}</div>
        <hr/>
        <label>Security Key</label><br/>
        <input type='text' value={key} placeholder='Enter security key'className='inputField' onChange={(e)=> setKey(e.target.value)}/><br/>
        <div className='error'>{keyError}</div>
        <hr/>
        <button onClick={handleSignup} className='formBtn'>Login</button>
        </div>
        </div>
    )
}
export default AdminLogin;





    