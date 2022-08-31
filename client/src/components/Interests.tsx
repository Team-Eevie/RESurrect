import * as React from 'react';
import { Button, TextField, Typography, Box } from '@mui/material'

const Interests = ({skills}) => {
  const skillsArray: JSX.Element[]= [];

  for (let i = 0; i < skills.length; i++) {
    if (skills[i].hide === true) {
      skillsArray.push(
        <Box className='tech-skills'>
          <Typography sx={{fontSize:'18px'}}>{skills[i].entry}</Typography>
        </Box>
      )
    }
  }

  return (
    <div className="tech-section"> 
        {skillsArray}
    </div>
  )
}

export default Interests