import * as React from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Modal } from '@mui/material'
import BulletPoint from './BulletPoint';
import { BulletPointType } from '../types'
let serverUrl = 'http://localhost:3000'

const ExpBlock = (props) => {
  const { 
    id,
    experience
   } = props;

  const [experienceModal, setExperienceModal] = React.useState<boolean>(true);
    const [bulletPoints, setBulletPoints] = React.useState<BulletPointType[] | []>([]);

  const positionRef = React.useRef<null | string>('');
  const companyRef = React.useRef<null | string>('');


  React.useEffect(() => {
    async function getExperiences () {
      let data = await axios.get(`${serverUrl}/getExperiences`)
      // setExperiences(data.experience);
    }

    // getExperiences();
    setBulletPoints([{id: "1", description:'This was a lot of fun'}, {id:'2', description:'This was a lot of fun as well'}])
  },[])

  const handleEditExperience = (e) => {
    setExperienceModal(!experienceModal);
  }

  let bulletPointArray : JSX.Element[] = [];

  for (let i = 0; i < bulletPoints.length; i++) {
    const bulletPointBlockProps = {
      key : `${bulletPoints[i]}${i}`,
      id : i,
      bulletPoint: bulletPoints[i]
    }
    if (bulletPoints[i]["id"] === id) {
      bulletPointArray.push(<BulletPoint {...bulletPointBlockProps}/>)
    }
  }
  console.log(bulletPointArray)


  return (
    <>
    {experienceModal ?  
    <div className="resume-section"> 
    {experience.title}
    {experience.company}
    {bulletPointArray}
    </div>
    :
    <>
    <h3>Enter Experience Information</h3>
    <TextField 
        size ="small"
        label="position" 
        className="input-field"
        placeholder={experience.title}
        inputRef={positionRef}
    ></TextField>
            <TextField 
        size ="small"
        label="company" 
        className="input-field"
        placeholder={experience.company}
        inputRef={companyRef}
    ></TextField>
    </>
  } 
    <button id={id} onClick = {handleEditExperience}>EDIT</button>
  </>

  )
}

export default ExpBlock;