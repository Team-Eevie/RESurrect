import * as React from 'react';
import axios from 'axios';
import { Grid, Typography, Button, Box, Tooltip,Fab } from '@mui/material'
// import ProfileBlock from '../components/ProfileBlock';
import TechnicalSkills from '../components/TechnicalSkills';
import Experience from '../components/Experience';
import OpenSource from '../components/OpenSource';
import ProfileBlock from '../components/ProfileBlock';
import OSBlock from '../components/OSBlock';
import OSPForm from '../components/OSPForm';
// import EdBlock from '../components/EdBlock';
// import InterestBlock from '../components/InterestBlock';
import Education from '../components/Education';
import Interests from '../components/Interests';
import ExperienceForm from '../components/ExperienceForm';
import EducationForm from '../components/EducationForm';
import InterestForm from '../components/InterestForm';
import SkillsForm from '../components/SkillsForm';
import AddIcon from '@mui/icons-material/Add';
import { Skill, ExperienceType } from '../types';
let serverUrl = 'http://localhost:3000'

const ResumeBuild = ({user_id, setUser_id}) => {
  const [name, setName] = React.useState<string>('');
  // const [lastName, setLastName] = React.useState<string>('');
  const [experienceModal, setExperienceModal] = React.useState<boolean>(false);
  const [skillModal, setSkillModal] = React.useState<boolean>(false);
  const [educationModal, setEducationModal] = React.useState<boolean>(false);
  const [interestModal, setInterestModal] = React.useState<boolean>(false);
  const [ospModal, setOSPModal] = React.useState<boolean>(false);

  const [skills, setSkills] = React.useState<Skill[]>([]);
  const [interest, setInterest] = React.useState<Skill[]>([]);
  const [experiences, setExperiences] = React.useState<ExperienceType[]>([]);
  const [osp, setOSP] = React.useState<ExperienceType[]>([]);
  const [education, setEducation] = React.useState<ExperienceType[]>([]);
  const [resetData, setResetData] = React.useState<string>('');

  React.useEffect(() => {
    async function getUser () {
      let bigData = await axios.post(`${serverUrl}/resume/getAll`, {
        user_id: user_id
      });
      console.log(bigData);
      const data = bigData.data;

      // @ts-ignore
      setSkills(data.skills);

      const experiencesArray: ExperienceType[] = [];
      const ospArray: ExperienceType[] = [];
      const educationArray: ExperienceType[] = [];

      for (let i = 0; i < data.experiences.length; i++) {
        const loc = data.experiences[i].location;
        if (loc === 'education') educationArray.push(data.experiences[i]);
        else if (loc === 'OSP') ospArray.push(data.experiences[i]);
        else experiencesArray.push(data.experiences[i]);
      }
      console.log(experiencesArray)
      setExperiences(experiencesArray);
      setOSP(ospArray);
      setEducation(educationArray);
      // setName(name)
    }
    getUser();
  },[])

  const openSkillModal = () => {
    setSkillModal(true);
  }
  const openInterestModal = () => {
    setInterestModal(true);
  }
  const openEducationModal = () => {
    setEducationModal(true);
  }
  const openOSPModal = () => {
    setOSPModal(true);
  }
  const openExperienceModal = () => {
    setExperienceModal(true);
  }


// Set Props for components that need to render additional bullet points below it
  let experienceProps = {
    experiences: experiences,
    setExperiences: setExperiences
  }
  let OSPProps = {
    osp: osp,
    setOSP: setOSP
  }

  let educationProps = {
    education: education,
    setEducation: setEducation
  }
  let interestProps = {
    interest: interest,
  }


  return (
    <div className="resume-page">
      <div className="resume-box">
        <h1>{`${name}`}</h1>
          <Typography variant='h3'>Profile</Typography>
          <ProfileBlock/>
          <Box sx={{display: 'flex', flexDirection:'row'}}>
            <Typography variant='h3'>Technical Skills</Typography>
            <Button 
              color="primary" 
              sx={{borderRadius:'100px'}}
              onClick={openSkillModal}>
                <AddIcon />
            </Button>
          </Box>
          {skillModal 
            ? <SkillsForm skills= {skills} setSkills= {setSkills} setModal= {setSkillModal}/>
            : <TechnicalSkills skills = {skills}/>}
          <Box sx={{display: 'flex', flexDirection:'row'}}>
            <Typography variant='h3'>Work Experience</Typography>
              <Button 
              color="primary" 
              sx={{borderRadius:'100px'}}
              onClick={openExperienceModal}>
                <AddIcon />
              </Button>
          </Box>
          {experienceModal 
            ? <ExperienceForm user_id={user_id} experiences= {experiences} setExperiences= {setExperiences} setExperienceModal= {setExperienceModal}/>
            :<Experience {...experienceProps}/>
          }
          <Box sx={{display: 'flex', flexDirection:'row'}}>
            <Typography variant='h3'>Open Source Projects</Typography>
            <Button 
              color="primary" 
              sx={{borderRadius:'100px'}}
              onClick={openOSPModal}>
                <AddIcon />
            </Button>
          </Box>
          {ospModal 
            ? <OSPForm user_id={user_id} osp= {osp} setOSP= {setOSP} setOSPModal= {setOSPModal}/>
            :<OpenSource {...OSPProps}/>
          }
          <Box sx={{display: 'flex', flexDirection:'row'}}>
            <Typography variant='h3'>Education</Typography>
            <Button 
              color="primary" 
              sx={{borderRadius:'100px'}}
              onClick={openEducationModal}>
                <AddIcon />
            </Button>
          </Box>
          {educationModal ? <EducationForm education= {education} setEducation= {setEducation} setModal= {setEducationModal}/>
          :
          <Education {...educationProps}/>
        }
          <Box sx={{display: 'flex', flexDirection:'row'}}>
            <Typography variant='h3'>Interests</Typography>
            <Button 
              color="primary" 
              sx={{borderRadius:'100px'}}
              onClick={openInterestModal}>
                <AddIcon />
            </Button>
          </Box>
          {interestModal ? 
          <InterestForm interest= {interest} setInterest= {setInterest} setModal= {setInterestModal}/>
        : <Interests {...interestProps}/>}
      </div>
    </div>
  )
}

export default ResumeBuild