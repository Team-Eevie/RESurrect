import * as React from 'react';
import { Button, TextField, Typography } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
let serverUrl = 'http://localhost:3000'

const SignUp = () => {
  
   let serverUrl = 'http://localhost:3000';

    const navigate = useNavigate();
    const usernameRef = React.useRef<HTMLInputElement | null>(null);
    const passwordRef = React.useRef<HTMLInputElement | null>(null);
    const firstNameRef = React.useRef<HTMLInputElement | null>(null);
    const lastNameRef = React.useRef<HTMLInputElement | null>(null);
  
    const handleClick = async () => {
      //make a call to the API endpoint /login to check if username is found in database with matching password
      //const data = await axios.post(`${serverUrl}/login`, 
      // {username: usernameRef.current?.value,
      // password: passwordRef.current?.value,
      // firstName: firstNameRef.current?.value,
      // lastName: lastNameRef.current?.value,
      // });
      //console.log(data);
      //setLoggedIn(true);
      //console.log('usernameRef', usernameRef.current?.value);
      navigate('/')
    }
    
    return (
      <div className='signup-page'>
        <div className='signup-box'>
           <TextField 
              size ="small"
              label="First Name" 
              inputRef={firstNameRef}
            ></TextField>
            <TextField 
              size ="small"
              label="Last Name" 
              inputRef={lastNameRef}
            ></TextField>
            <TextField 
              size ="small"
              label="Email" 
              inputRef={usernameRef}
            ></TextField>
            <TextField 
              size ="small"
              label="Password" 
              type="password" 
              inputRef={passwordRef}>
            </TextField>
            <Button onClick={handleClick}>BUTTON</Button>
            <Typography>Already have an account? <Link to="/">Login</Link></Typography> 
        </div>
      </div>
    )
}
export default SignUp

  
//   return (
//     <div className='signup-page'>
//     <div className='signup-box'>
//     <TextField 
//         size ="small"
//         label="First Name" 
//         inputRef={firstNameRef}
//       ></TextField>
//       <TextField 
//         size ="small"
//         label="Last Name" 
//         inputRef={lastNameRef}
//       ></TextField>
//       <TextField 
//         size ="small"
//         label="Email" 
//         inputRef={usernameRef}
//       ></TextField>
//       <TextField 
//         size ="small"
//         label="Password" 
//         type="password" 
//         inputRef={passwordRef}>
//       </TextField>
//       <Button onClick={handleClick}>BUTTON</Button>
//       <Typography>Already have an account? <Link to="/">Login</Link></Typography> 
//     </div>
// </div>
//   )
