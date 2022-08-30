// import * as React from 'react';
// import axios from 'axios';
// import { Button, TextField, Typography, Modal } from '@mui/material'
// import BulletPoints from './BulletPoints';
// let serverUrl = 'http://localhost:3000'

// const BulletPoints = (props) => {
//   const { 
//     id,
//     experience
//    } = props;


//   const descirptionRef = React.useRef<null | string>('');



//   // React.useEffect(() => {
//   //   async function getExperiences () {
//   //     let data = await axios.get(`${serverUrl}/getExperiences`)
//   //     // setExperiences(data.experience);
//   //   }

//   //   // getExperiences();
//   //   setExperiences(['experience1', 'experience2', 'experience3'])
//   // },[])

//   const handleEditExperience = (e) => {
//     setExperienceModal(!experienceModal);

//   }


//   return (
//     <>
//     {experienceModal ?  
//     <div className="resume-section"> 
//     {experience.title}
//     {experience.company}
//     <BulletPoints/>
//     </div>
//     :
//     <>
//     <h3>Enter Experience Information</h3>
//     <TextField 
//         size ="small"
//         label="position" 
//         className="input-field"
//         placeholder={experience.title}
//         inputRef={positionRef}
//     ></TextField>
//             <TextField 
//         size ="small"
//         label="company" 
//         className="input-field"
//         placeholder={experience.company}
//         inputRef={companyRef}
//     ></TextField>
//     </>
//   } 
//     <button id={id} onClick = {handleEditExperience}>EDIT</button>
//   </>

//   )
// }

// export default BulletPoints;