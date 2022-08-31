import * as React from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Modal } from '@mui/material'
import InterestBlock from './InterestBlock';
import { Interest } from '../types';
let serverUrl = 'http://localhost:3000'

const Interests = () => {
  const [interests, setInterests] = React.useState<Interest[] | []>([]);


  
  React.useEffect(() => {
    async function getInterests () {
      let data = await axios.get(`${serverUrl}/geteducation`)
      // E(data.experience);
    }
    
    // geteducation();
    setInterests([{position:'experience1', company: 'company1'},
     {position:'experience2', company: 'company2'}, 
     {position:'experience3', company: 'company3'}])
    
  },[])


  let interestArray : JSX.Element[] = [];
  for (let i = 0; i < interests.length; i++) {
    const interestBlockProps = {
      key : `${interests[i]}${i}`,
      id : i,
      interest: interests[i]
    }
    interestArray.push(<InterestBlock {...interestBlockProps}/>)
  }
  
  

  return (
    <>
      <div className="resume-section"> 
        {interestArray}
      </div>
    </>

  )
}

export default Interests