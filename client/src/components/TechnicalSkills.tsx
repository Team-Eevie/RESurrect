import * as React from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
//import DeleteIcon from '@material-ui/icons/Delete';
//import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@mui/material/Tooltip';
let serverUrl = 'http://localhost:3000'

const TechnicalSkills = ({skills}) => {
  const [modalOpen, setModalOpen] = React.useState<Boolean>(false);

  const skillsArray: JSX.Element[]= [];

  for (let i = 0; i < skills.length; i++) {
    skillsArray.push(
      <Box className='tech-skills'>
        <Typography sx={{fontSize:'18px'}}>{skills[i].entry}</Typography>
      </Box>
      )
  }

  React.useEffect(() => {
    
  }, []);

  return (
    <div className="tech-section"> 
    <Box>
      {skillsArray}
    </Box>
      {/* <Box>
        <Typography variant="h4" sx={{fontFamily:'Lato'}} gutterBottom>Additional Skills</Typography>
      </Box> */}
    </div>
  )
}

export default TechnicalSkills;