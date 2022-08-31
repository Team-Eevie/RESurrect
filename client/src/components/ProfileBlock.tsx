import * as React from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Modal } from '@mui/material'
import BulletPoint from './BulletPoint';
import { BulletPointType } from '../types'
let serverUrl = 'http://localhost:3000'

const ProfileBlock = (props) => {
  const { 
    id,
    interest
   } = props;

  const [profileModal, setProfileModal] = React.useState<boolean>(true);

  const titleRef = React.useRef<null | string>('');
  const linkedInRef = React.useRef<null | string>('');
  const githubRef = React.useRef<null | string>('');
  const phoneRef = React.useRef<null | string>('');
  const emailRef = React.useRef<null | string>('');


//   React.useEffect(() => {
//     async function getExperiences () {
//       let data = await axios.get(`${serverUrl}/getExperiences`)
//       // setExperiences(data.experience);
//     }

//     // getExperiences();
//     setBulletPoints([{id: "1", description:'This was a lot of fun'}, {id:'2', description:'This was a lot of fun as well'}])
//   },[])

  const handleEditProfile= (e) => {
    setProfileModal(!profileModal);
  }

  let bulletPointArray : JSX.Element[] = [];

//   for (let i = 0; i < bulletPoints.length; i++) {
//     const bulletPointBlockProps = {
//       key : `${bulletPoints[i]}${i}`,
//       id : i,
//       bulletPoint: bulletPoints[i]
//     }
//       bulletPointArray.push(<BulletPoint {...bulletPointBlockProps}/>)
//   }
//   console.log(bulletPointArray)


  return (
    <>
    {profileModal ?  
    <div className="resume-section"> 
    {/* {interest.position}
    {interest.company}
    {bulletPointArray} */}
      <Button id={id} onClick = {handleEditProfile}>EDIT</Button>
    </div>
    :
    <div className="resume-section">
      <Typography variant="h4">Enter Profile Information</Typography>
      <TextField 
          size ="small"
          label="Title" 
          className="input-field"
        //   defaultValue={interest.position}
          inputRef={titleRef}
      ></TextField>
      <TextField 
          size ="small"
          label="LinkedIn" 
          className="input-field"
        //   defaultValue={interest.company}
          inputRef={linkedInRef}
      ></TextField>
      <TextField 
          size ="small"
          label="GitHub" 
          className="input-field"
        //   defaultValue={interest.company}
          inputRef={githubRef}
      ></TextField>
      <TextField 
          size ="small"
          label="Email" 
          className="input-field"
        //   defaultValue={interest.company}
          inputRef={emailRef}
      ></TextField>
      
      <Button id={id} onClick = {handleEditProfile}>Save</Button>
    </div>
  }
  </>

  )
}

export default ProfileBlock;