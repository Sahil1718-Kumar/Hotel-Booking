import React, { useState } from 'react';
import './UserLogin.css';
import { useNavigate } from 'react-router-dom';
const UserLogin = ({userData,setUser}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [result, setResult] = useState('');
    const navigate = useNavigate();
    function handleSignin(){
        if(username === userData.username && email === userData.email && password === userData.password){
            setUser({ user: username});
            setResult("Sign in successfully..");
            alert(`Welcome ${username}`);
            navigate('/');
        } else {
            setResult("Username or Email or Password is incorrect..");
        }
    }
    return(
        <div id='userLogin' data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" style={{display:"flex", justifyContent:"center",height:"100vh",backgroundImage:"url('https://www.kayak.com/rimg/himg/a1/9d/1c/leonardo-33982-180064383-877250.jpg?width=1366&height=768&crop=true')",padding:"30px 0"}}>
             <div className='form'>
            <h2 className='formHeading'>User Login</h2>
        <label>Username</label><br/>
        <input type='text' value={username} placeholder='Enter your username' className='inputField' onChange={(e) => setUsername(e.target.value)}/><br/>
        <hr/>
        <label>Email</label><br/>
        <input type='text' value={email} placeholder='Enter your email' className='inputField' onChange={(e) => setEmail(e.target.value)}/><br/>
        <hr/>
        <label>Password</label><br/>
        <input type='password' value={password} placeholder='Enter your password'className='inputField' onChange={(e) => setPassword(e.target.value)}/><br/>
        <hr/>
        <div style={{color:"red",fontWeight:"700"}}>{result}</div>
        <button onClick={handleSignin} className='formBtn'>Login</button>
        </div>
        </div>
    )
}
export default UserLogin;