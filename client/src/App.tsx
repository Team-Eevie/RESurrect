import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
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
        <Route path="/" element={< div />}/>
      </Routes>
    </div>
  )
}
  
export default App;