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

const TechnicalSkills = (props) => {
  const [modalOpen, setModalOpen] = React.useState<Boolean>(false);
  const {skills} = props;
  

  React.useEffect(() => {
    async function getExperiences () {
      let data = await axios.get(`${serverUrl}/getExperiences`)
      // setExperiences(data.experience);
    }

    getExperiences();
  },[])

  return (
    <div className="resume-section"> 
      <Box>
        <Typography variant="h4" sx={{marginTop:'10px', marginBottom:'10px'}} gutterBottom>{skills.description}</Typography>
      </Box>
      <Box>
        <Typography variant="h4" sx={{fontFamily:'Lato'}} gutterBottom>Additional Skills</Typography>
      </Box>
    </div>
  )
}

export default TechnicalSkills;