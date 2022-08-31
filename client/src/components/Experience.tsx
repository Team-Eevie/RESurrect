import * as React from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Modal } from '@mui/material'
import ExpBlock from './ExpBlock';
import exp from 'constants';
import { ExperienceType } from '../types';
let serverUrl = 'http://localhost:3000'

const Experience = (props) => {
  const {experiences, setExperiences} = props;
  // const [experiences, setExperiences] = React.useState<Experience[] | []>([]);

  let expArray : JSX.Element[] = [];
  const expIDs: number[] = [];
  const expBlockPropsArr: any[] = [];
  
  for (let i = 0; i < experiences.length; i++) {
    if (experiences[i].experience_id === null || !expIDs.includes(experiences[i].experience_id)) {
      const expBlockProps = {
        key : `${experiences[i]}${i}`,
        id : i,
        experience: experiences[i],
        bullets: [{id: experiences[i]._id, description: experiences[i].entry}]
      }
      expBlockPropsArr.push(expBlockProps);
      expIDs.push(experiences[i].experience_id);
    } else {
      // console.log(expIDs.indexOf(experiences[i].experience_id))
      // console.log('expBlockPropsArr:', expBlockPropsArr)
      const target = expBlockPropsArr[expIDs.indexOf(experiences[i].experience_id)]
      target.bullets.push({id: experiences[i]._id, description: experiences[i].entry});
      // console.log(expBlockPropsArr);
    }
  }
  
  for (const cur of expBlockPropsArr) {
    expArray.push(<ExpBlock {...cur}/>);
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