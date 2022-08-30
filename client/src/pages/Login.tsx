import * as React from 'react';
import { Button, TextField, Typography } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

let serverUrl = 'http://localhost:3000';

const Login = () => {

  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const usernameRef = React.useRef<HTMLInputElement | null>(null);
  const passwordRef = React.useRef<HTMLInputElement | null>(null);

  const handleClick = async () => {
    //make a call to the API endpoint /login to check if username is found in database with matching password
    // const data = await axios.post(`${serverUrl}/login`, 
    // {username: usernameRef.current?.value,
    // password: passwordRef.current?.value});
    // console.log(data);
    // setLoggedIn(true);
    // console.log('usernameRef', usernameRef.current?.value);
    navigate('/resumebuild')
  }
  
  return (
    <div className='login-page'>
        <div className='login-box'>
          <Typography variant='h2' gutterBottom>RESurrect</Typography>
          <TextField 
            size ="small"
            label="Email" 
            className="input-field"
            sx={{margin: '10px'}} 
            inputRef={usernameRef}
          ></TextField>
          <TextField 
            size ="small"
            label="Password" 
            type="password" 
            className="input-field"
            sx={{margin: '10px'}} 
            inputRef={passwordRef}>
          </TextField>
          <Button sx={{margin: '5px'}} onClick={handleClick}>Login</Button>
          <Typography>Need an account? <Link to="/signup">Sign Up</Link></Typography> 
        </div>
    </div>
  )
}

export default Login