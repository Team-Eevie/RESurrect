import * as React from 'react';
import axios from 'axios';
import { Grid, Typography, Button, Box, Tooltip,Fab } from '@mui/material'
// import ProfileBlock from '../components/ProfileBlock';
import TechnicalSkills from '../components/TechnicalSkills';
import Experience from '../components/Experience';
import OpenSource from '../components/OpenSource';
import OSBlock from '../components/OSBlock';
import Education from '../components/Education';
import Interests from '../components/Interests';
import ExperienceForm from '../components/ExperienceForm';
import EducationForm from '../components/EducationForm';
import InterestForm from '../components/InterestForm';
import SkillsForm from '../components/SkillsForm';
import AddIcon from '@mui/icons-material/Add';
import { Skill, ExperienceType } from '../types';
let serverUrl = 'http://localhost:3000'

const ResumeBuild = () => {
  const [name, setName] = React.useState<string>('');
  // const [lastName, setLastName] = React.useState<string>('');
  // const [workExperienceModal, setWorkExperienceModal] = React.useState<boolean>(false);
  const [skillModal, setSkillModal] = React.useState<boolean>(false);
  // const [educationModal, setEducationModal] = React.useState<boolean>(false);
  // const [interestModal, setInterestModal] = React.useState<boolean>(false);
  // const [openSourceModal, setOpenSourceModal] = React.useState<boolean>(false);

  const [skills, setSkills] = React.useState<Skill[]>([]);
  const [experience, setExperience] = React.useState<ExperienceType[]>([]);


  React.useEffect(() => {
    async function getUser () {
      let data = await axios.get(`${serverUrl}/getAll`)
      // setFirstName(data.firstName);
      // setLastName(data.lastName);
      // setSkills(data.skills);
    }
    setName('Ben Cauffman')
    setSkills([{id:'1',description:'typescript'},{id:'2',description:'typescripting'}, {id:'3',description:'typescriptongue'}])
    setExperience()
    getUser();
  },[])

  const openSkillModal = () => {
    setSkillModal(true);
  }


  return (
    <div className="resume-page">
      <div className="resume-box">
        <h1>{`${firstName} ${lastName}`}</h1>
          <Typography variant='h3'>Profile</Typography>
          {/* <ProfileBlock/> */}
          <Box sx={{display: 'flex', flexDirection:'row'}}>
            <Typography variant='h3'>Technical Skills</Typography>
            <Button 
              color="primary" 
              sx={{borderRadius:'100px'}}
              onClick={openSkillModal}>
                <AddIcon />
            </Button>
          </Box>
          {skillModal ? 
          <SkillsForm skills= {skills} setSkills= {setSkills} setModal= {setSkillModal}/>
        : <TechnicalSkills skills = {skills}/>}
          <Box sx={{display: 'flex', flexDirection:'row'}}>
            <Typography variant='h3'>Work Experience</Typography>
          </Box>
          <Experience experience={experience}/>
          <Box sx={{display: 'flex', flexDirection:'row'}}>
            <Typography variant='h3'>Open Source Projects</Typography>
            <Button 
              color="primary" 
              sx={{borderRadius:'100px'}}
              onClick={openOpenSourceModal}>
                <AddIcon />
            </Button>
          </Box>
          {openSourceModal && <OpenSource setOpenSourceModal={setOpenSourceModal}/>}
          <OSBlock/>
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