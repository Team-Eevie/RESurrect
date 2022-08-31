import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ResumeBuild from './pages/ResumeBuild';
import ResumeDisplay from './pages/ResumeDisplay';
import SignUp from './pages/SignUp';
import axios from 'axios';
import '../styles/_variables.scss';
import { createTheme, ThemeProvider } from "@mui/material/styles";

let serverUrl = 'http://localhost:3000'
// import axios from 'axios';
// Components: 

const App = () => {

  const [user_id, setUser_id] = React.useState<string>('');

  // React.useEffect(() => {
  //   axios.get(`${serverUrl}/user/getUsername`)
  //   .then((res) => {
  //     console.log(res.data);
  //     setUsername(res.data);
  //   })
  // }, [])

  const theme = createTheme({
    typography: {
      fontFamily: 'Lato'
    },
    palette: {
      primary: {
        main: "#47beb9",
        light: "#57ddd7",
        dark: "#2a9d98",
      },
      secondary: {
        main: "#382868",
        light: "#2d2d2d",
        dark: "#2d2d2d",
      },
    },
  });

  const LoginProps = {
    user_id: user_id,
    setUser_id: setUser_id
  }

  return (
    <div className='body'>
      <ThemeProvider theme={theme}>
        {/* < NavBar username={username} setUsername={setUsername} />  */}
        <Routes>
          {/* // Main App Page */}
          <Route path="/" element={<Login {...LoginProps}/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/resumebuild" element={<ResumeBuild {...LoginProps}/>}/>
          <Route path="/resumedisplay" element={<ResumeDisplay/>}/>
        </Routes>
      </ThemeProvider>
    </div>
  )
}
  
export default App;