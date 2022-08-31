import * as React from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Modal } from '@mui/material'
import BulletPoint from './BulletPoint';
import { BulletPointType } from '../types'
let serverUrl = 'http://localhost:3000'

const EdBlock = (props) => {
  const { 
    id,
    education
   } = props;

  const [educationModal, setEducationModal] = React.useState<boolean>(true);
    const [bulletPoints, setBulletPoints] = React.useState<BulletPointType[] | []>([]);

  const positionRef = React.useRef<null | string>('');
  const companyRef = React.useRef<null | string>('');


  // React.useEffect(() => {
  //   async function getExperiences () {
  //     let data = await axios.get(`${serverUrl}/getExperiences`)
  //     // setExperiences(data.experience);
  //   }

  //   // getExperiences();
  //   setBulletPoints([{id: "1", description:'This was a lot of fun'}, {id:'2', description:'This was a lot of fun as well'}])
  // },[])

  const handleEditEducation = (e) => {
    setEducationModal(!educationModal);
  }

  let bulletPointArray : JSX.Element[] = [];

  for (let i = 0; i < bulletPoints.length; i++) {
    const bulletPointBlockProps = {
      key : `${bulletPoints[i]}${i}`,
      id : i,
      bulletPoint: bulletPoints[i]
    }
      bulletPointArray.push(<BulletPoint {...bulletPointBlockProps}/>)
  }
  console.log(bulletPointArray)


  return (
    <>
    {educationModal ?  
    <div className="resume-section"> 
    {education.position}
    {education.company}
    {bulletPointArray}
      <Button id={id} onClick = {handleEditEducation}>EDIT</Button>
    </div>
    :
    <div className="resume-section">
      <Typography variant="h4">Enter Experience Information</Typography>
      <TextField 
          size ="small"
          label="position" 
          className="input-field"
          defaultValue={education.position}
          inputRef={positionRef}
      ></TextField>
              <TextField 
          size ="small"
          label="company" 
          className="input-field"
          defaultValue={education.company}
          inputRef={companyRef}
      ></TextField>
      <Button id={id} onClick = {handleEditEducation}>Save</Button>
    </div>
  }
  </>

  )
}

export default EdBlock;