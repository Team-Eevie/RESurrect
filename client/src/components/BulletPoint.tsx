import * as React from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Modal } from '@mui/material'
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
    <div className="resume-section"> 
    {bulletPoint.description}
    </div>
    :
    <>
    <TextField 
        size ="small"
        label="description" 
        className="input-field"
        placeholder={bulletPoint.description}
        inputRef={descriptionRef}
    ></TextField>
    </>
  } 
    <button id={id} onClick = {handleEditBulletPoint}>EDIT</button>
  </>

  )
}

export default BulletPoint;