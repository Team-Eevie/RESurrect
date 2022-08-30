import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ResumeBuild from './pages/ResumeBuild';
import ResumeDisplay from './pages/ResumeDisplay';
import SignUp from './pages/SignUp';
import '../styles/_variables.scss';
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import axios from 'axios';
// Components: 

const App = () => {

  const [username, setUsername] = React.useState<string>('');

  // React.useEffect(() => {
  //   // setUsername('Alex');
  //   axios.get('/getUsername')
  //   .then((res) => {
  //     console.log(res.data);
  //     setUsername(res.data);
  //   })
  // }, [])

  const theme = createTheme({
    typography: {
      fontFamily: [ 'Martel', 'Barlow' ].join(',')
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

  return (
    <div className='body'>
      <ThemeProvider theme={theme}>
        {/* < NavBar username={username} setUsername={setUsername} />  */}
        <Routes>
          {/* // Main App Page */}
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/resumebuild" element={<ResumeBuild/>}/>
          <Route path="/resumedisplay" element={<ResumeDisplay/>}/>
        </Routes>
      </ThemeProvider>
    </div>
  )
}
  
export default App;