import * as React from 'react';
import axios from 'axios';
import { Grid, Typography, Button, Box, Tooltip,Fab } from '@mui/material'
import Experience from '../components/Experience';
import TechnicalSkills from '../components/TechnicalSkills';
import ExperienceForm from '../components/ExperienceForm';
import EducationForm from '../components/EducationForm';
import InterestForm from '../components/InterestForm';
import SkillsForm from '../components/SkillsForm';
import AddIcon from '@mui/icons-material/Add';
let serverUrl = 'http://localhost:3000'

const ResumeBuild = () => {
  const [firstName, setFirstName] = React.useState<string>('');
  const [lastName, setLastName] = React.useState<string>('');
  const [workExperienceModal, setWorkExperienceModal] = React.useState<boolean>(false);
  const [skillModal, setSkillModal] = React.useState<boolean>(false);
  const [educationModal, setEducationModal] = React.useState<boolean>(false);
  const [interestModal, setInterestModal] = React.useState<boolean>(false);
  const [openSourceModal, setOpenSourceModal] = React.useState<boolean>(false);


  React.useEffect(() => {
    async function getUser () {
      let data = await axios.get(`${serverUrl}/getAll`)
      // setFirstName(data.firstName);
      // setLastName(data.lastName);
    }

    getUser();
  },[])

  const openWorkModal = (e) => {
    setWorkExperienceModal(true);
  }

  const openSkillModal = (e) => {
    setSkillModal(true);
  }

  const openEducationModal = (e) => {
    setEducationModal(true);
  }

  const openInterestModal = (e) => {
    setInterestModal(true);
  }

  const openOpenSourceModal = (e) => {
    setOpenSourceModal(true);
  }

  return (
    <div className="resume-page">
      <div className="resume-box">
        <h1>`${firstName} ${lastName}`</h1>
          <Typography variant='h3'>Profile</Typography>
          <Experience/>
          <Box sx={{display: 'flex', flexDirection:'row'}}>
            <Typography variant='h3'>Techical Skills</Typography>
            <Button 
              color="primary" 
              sx={{borderRadius:'100px'}}
              onClick={openSkillModal}>
                <AddIcon />
            </Button>
          </Box>
          {skillModal && <SkillsForm setModal= {setSkillModal}/>}
          <TechnicalSkills/>
          <Box sx={{display: 'flex', flexDirection:'row'}}>
            <Typography variant='h3'>Work Experience</Typography>
            <Button 
              color="primary" 
              sx={{borderRadius:'100px'}}
              onClick={openWorkModal}>
                <AddIcon />
            </Button>
          </Box>
          {workExperienceModal && <ExperienceForm setWorkExperienceModal= {setWorkExperienceModal}/>}
          <Experience/>
          <Box sx={{display: 'flex', flexDirection:'row'}}>
            <Typography variant='h3'>Open Source Projects</Typography>
            <Button 
              color="primary" 
              sx={{borderRadius:'100px'}}
              onClick={openOpenSourceModal}>
                <AddIcon />
            </Button>
          </Box>
          {openSourceModal && <ExperienceForm setModal= {setOpenSourceModal}/>}
          <Experience/>
          <Box sx={{display: 'flex', flexDirection:'row'}}>
            <Typography variant='h3'>Education</Typography>
            <Button 
              color="primary" 
              sx={{borderRadius:'100px'}}
              onClick={openEducationModal}>
                <AddIcon />
            </Button>
          </Box>
          {educationModal && <EducationForm setModal= {setEducationModal}/>}
          <Experience/>
          <Box sx={{display: 'flex', flexDirection:'row'}}>
            <Typography variant='h3'>Interests</Typography>
            <Button 
              color="primary" 
              sx={{borderRadius:'100px'}}
              onClick={openInterestModal}>
                <AddIcon />
            </Button>
          </Box>
          {interestModal && <InterestForm setModal= {setInterestModal}/>}
          <Experience/>
      </div>
    </div>
  )
}

export default ResumeBuild