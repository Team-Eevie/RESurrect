import * as React from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Modal } from '@mui/material'
import ExpBlock from './ExpBlock';
import exp from 'constants';
import { ExperienceType } from '../types';
let serverUrl = 'http://localhost:3000'

const Experience = (props) => {
  const {experiences, setExperiences} = props.experiences;
  // const [experiences, setExperiences] = React.useState<Experience[] | []>([]);



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