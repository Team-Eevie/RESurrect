import * as React from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Modal } from '@mui/material'
import BulletPoint from './BulletPoint';
import { BulletPointType } from '../types'
let serverUrl = 'http://localhost:3000'

const InterestBlock = (props) => {
  const { 
    id,
    interest
   } = props;

  const [interestModal, setInterestModal] = React.useState<boolean>(true);
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

  const handleEditInterest= (e) => {
    setInterestModal(!interestModal);
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
    {interestModal ?  
    <div className="resume-section"> 
    {interest.position}
    {interest.company}
    {bulletPointArray}
      <Button id={id} onClick = {handleEditInterest}>EDIT</Button>
    </div>
    :
    <div className="resume-section">
      <Typography variant="h4">Enter Interest Information</Typography>
      <TextField 
          size ="small"
          label="position" 
          className="input-field"
          defaultValue={interest.position}
          inputRef={positionRef}
      ></TextField>
              <TextField 
          size ="small"
          label="company" 
          className="input-field"
          defaultValue={interest.company}
          inputRef={companyRef}
      ></TextField>
      <Button id={id} onClick = {handleEditInterest}>Save</Button>
    </div>
  }
  </>

  )
}

export default InterestBlock;