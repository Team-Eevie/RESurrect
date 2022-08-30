import * as React from 'react';
import { Button, TextField, Typography } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  
//   let serverUrl = 'http://localhost:3000';
  
//     const [loggedIn, setLoggedIn] = React.useState<boolean>(false);
//     const navigate = useNavigate();
//     const usernameRef = React.useRef<HTMLInputElement | null>(null);
//     const passwordRef = React.useRef<HTMLInputElement | null>(null);
  
//     const handleClick = async () => {
//       //make a call to the API endpoint /login to check if username is found in database with matching password
//       const data = await axios.post(`${serverUrl}/login`, 
//       {username: usernameRef.current?.value,
//       password: passwordRef.current?.value});
//       console.log(data);
//       setLoggedIn(true);
//       //console.log('usernameRef', usernameRef.current?.value);
//       navigate('/')
//     }
    
    return (
      <div>
      </div>
    )

  
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
}

export default SignUp