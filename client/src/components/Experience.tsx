import * as React from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Modal } from '@mui/material'
import ExpBlock from './ExpBlock';
import exp from 'constants';
import { Experience } from '../types';
let serverUrl = 'http://localhost:3000'

const Experience = () => {
  const [experiences, setExperiences] = React.useState<Experience[] | []>([]);


  
  React.useEffect(() => {
    async function getExperiences () {
      let data = await axios.get(`${serverUrl}/getExperiences`)
      // setExperiences(data.experience);
    }
    
    // getExperiences();
    setExperiences([{title:'experience1', company: 'company1'},
     {title:'experience2', company: 'company2'}, 
     {title:'experience3', company: 'company3'}])
    
  },[])


  let expArray : JSX.Element[] = [];
  for (let i = 0; i < experiences.length; i++) {
    const expBlockProps = {
      key : `${experiences[i]}${i}`,
      id : i,
      experience: experiences[i]
    }
    expArray.push(<ExpBlock {...expBlockProps}/>)
  }
  
  

  return (
    <>
      <div className="resume-section"> 
        {expArray}
      </div>
    </>

  )
}

export default Experience