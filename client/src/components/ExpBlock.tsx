import * as React from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Box} from '@mui/material'
import BulletPoint from './BulletPoint';
import { BulletPointType } from '../types'
let serverUrl = 'http://localhost:3000'

const ExpBlock = (props) => {
  const { 
    id,
    experience,
    bullets,
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

    setBulletPoints(bullets);
    // setBulletPoints([{id: "1", description:'This was a lot of fun'}, {id:'2', description:'This was a lot of fun as well'}])
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
      bulletPointArray.push(<BulletPoint {...bulletPointBlockProps}/>)
  }
  // console.log(bulletPointArray)


  return (
    <>
    {experienceModal ?  
    <div className="experience-section"> 
      <Box sx={{display:'flex', flexDirection:'row', marginBottom:'10px'}}>
        <Typography variant="h4">{experience.position}</Typography>
        <Typography variant='h4' sx={{color: '#a4a4a4'}}>{experience.company}</Typography>
      </Box>
      {bulletPointArray}
    </div>
    :
    <div className="resume-section">
      <Typography variant="h4">Enter Experience Information</Typography>
      <TextField 
          size ="small"
          label="position" 
          className="input-field"
          defaultValue={experience.title}
          inputRef={positionRef}
      ></TextField>
              <TextField 
          size ="small"
          label="company" 
          className="input-field"
          defaultValue={experience.company}
          inputRef={companyRef}
      ></TextField>
      <Button id={id} onClick = {handleEditExperience}>Save</Button>
    </div>
  }
  </>

  )
}

export default ExpBlock;