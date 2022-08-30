import * as React from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Modal } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
//import DeleteIcon from '@material-ui/icons/Delete';
//import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@mui/material/Tooltip';
let serverUrl = 'http://localhost:3000'

const TechnicalSkills = () => {
  const [modalOpen, setModalOpen] = React.useState<Boolean>(false);

  React.useEffect(() => {
    async function getExperiences () {
      let data = await axios.get(`${serverUrl}/getExperiences`)
      // setExperiences(data.experience);
    }

    getExperiences();
  },[])

  return (
    <div className="resume-section"> 
    <Typography variant="h4" sx={{marginTop:'10px', marginBottom:'10px'}} gutterBottom>Primary Areas of Expertise</Typography>
    <Typography variant="h4" sx={{fontFamily:'Lato'}} gutterBottom>Additional Skills</Typography>
    </div>
  )
}

export default TechnicalSkills;