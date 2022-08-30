import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ResumeBuild from './pages/ResumeBuild';
import ResumeDisplay from './pages/ResumeDisplay';
import SignUp from './pages/SignUp';
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

  return (
    <div className='body'>
      {/* < NavBar username={username} setUsername={setUsername} />  */}
      <Routes>
        {/* // Main App Page */}
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/resumebuild" element={<ResumeBuild/>}/>
        <Route path="/resumedisplay" element={<ResumeDisplay/>}/>
      </Routes>
    </div>
  )
}
  
export default App;