import * as React from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Modal } from '@mui/material'
import ExpBlock from './ExpBlock';
import exp from 'constants';
import { Experience } from '../types';
let serverUrl = 'http://localhost:3000'

const Education = () => {
  const [education, setEducation] = React.useState<Education[] | []>([]);


  
  React.useEffect(() => {
    async function geteducation () {
      let data = await axios.get(`${serverUrl}/geteducation`)
      // E(data.experience);
    }
    
    // geteducation();
    setEducation([{title:'experience1', company: 'company1'},
     {title:'experience2', company: 'company2'}, 
     {title:'experience3', company: 'company3'}])
    
  },[])


  let edArray : JSX.Element[] = [];
  for (let i = 0; i < education.length; i++) {
    const edBlockProps = {
      key : `${education[i]}${i}`,
      id : i,
      education: education[i]
    }
    edArray.push(<EdBlock {...edBlockProps}/>)
  }
  
  

  return (
    <>
      <div className="resume-section"> 
        {edArray}
      </div>
    </>

  )
}

export default Education