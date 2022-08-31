import * as React from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Box } from '@mui/material'
let serverUrl = 'http://localhost:3000'

const BulletPoint = (props) => {
  const { 
    id,
    bulletPoint
   } = props;

   const [bulletPointModal, setBulletPointModal] = React.useState<boolean>(true);
  const descriptionRef = React.useRef<null | string>('');



  // React.useEffect(() => {
  //   async function getExperiences () {
  //     let data = await axios.get(`${serverUrl}/getExperiences`)
  //     // setExperiences(data.experience);
  //   }

  //   // getExperiences();
  //   setExperiences(['experience1', 'experience2', 'experience3'])
  // },[])

  const handleEditBulletPoint = (e) => {
    setBulletPointModal(!bulletPointModal);

  }


  return (
    <>
    {bulletPointModal ?  
    <div className="bullet-section"> 
      <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
        {bulletPoint.description}
        <Button id={id} onClick = {handleEditBulletPoint}>Edit</Button>
        
      </Box>
    </div>
    :
    <div className="resume-section">
    <TextField 
        size ="small"
        label='Description' 
        className="input-field"
        defaultValue={bulletPoint.description}
        inputRef={descriptionRef}
    ></TextField>
    <Button id={id} onClick = {handleEditBulletPoint}>Save</Button>
    </div>
  } 
  </>

  )
}

export default BulletPoint;