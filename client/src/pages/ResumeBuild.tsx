import * as React from 'react';
import axios from 'axios';
import { Grid } from '@mui/material'
import Experience from './ResumeSections/Experience';
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
    <div>
      <h1>`${firstName} ${lastName}`</h1>
      <Grid>
        <Experience/>

      </Grid>


    </div>
  )
}

export default ResumeBuild