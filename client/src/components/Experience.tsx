import * as React from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Modal } from '@mui/material'
let serverUrl = 'http://localhost:3000'

const Experience = () => {
  // const [experiences, setExperiences] = React.useState<Array>([]);

  React.useEffect(() => {
    async function getExperiences () {
      let data = await axios.get(`${serverUrl}/getExperiences`)
      // setExperiences(data.experience);
    }

    getExperiences();
  },[])

  return (
    <div className="resume-section"> 
      <Button>Add</Button>
      <Button>Edit</Button>

    </div>
  )
}

export default Experience