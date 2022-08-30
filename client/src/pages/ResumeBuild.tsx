import * as React from 'react';
import axios from 'axios';
import { Grid, Typography } from '@mui/material'
import Experience from '../components/Experience';
import TechnicalSkills from '../components/TechnicalSkills';
let serverUrl = 'http://localhost:3000'

const ResumeBuild = () => {
  const [firstName, setFirstName] = React.useState<string>('');
  const [lastName, setLastName] = React.useState<string>('');

  React.useEffect(() => {
    async function getUser () {
      let data = await axios.get(`${serverUrl}/getAll`)
      // setFirstName(data.firstName);
      // setLastName(data.lastName);
    }

    getUser();
  },[])

  return (
    <div className="resume-page">
      <div className="resume-box">
        <h1>`${firstName} ${lastName}`</h1>
          <Typography variant='h3'>Profile</Typography>
          <Experience/>
          <Typography variant='h3'>Techical Skills</Typography>
          <TechnicalSkills/>
          <Typography variant='h3'>Work Experiences</Typography>
          <Experience/>
          <Typography variant='h3'>Open Source Projects</Typography>
          <Experience/>
          <Typography variant='h3'>Education</Typography>
          <Experience/>
          <Typography variant='h3'>Additional</Typography>
          <Experience/>

      </div>
    </div>
  )
}

export default ResumeBuild