import * as React from 'react';
import { Button, TextField, Typography, Chip, Autocomplete, Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
let serverUrl = 'http://localhost:3000'

const SkillsForm = (props) => {
  // const [experiences, setExperiences] = React.useState<Array>([]);
  const { skills, setSkills, setModal, user_id } = props;
  const [selectedOptions, setSelectedOptions] = React.useState<any[]>([]);

  const newSkillsArr = [];
  const saveSkill = async () => {
    handleSubmit();
    for (let i = 0; i < selectedOptions.length; i++){
      
      const body = {
        user_id: user_id,
        entry: selectedOptions[i],
        hide: false
      }
      
      const data = await axios.post('/resume/saveSkill', body);
      // @ts-ignore
      newSkillsArr.push(data.data.rows[0]);
    }
    setSkills([...skills, ...newSkillsArr]);
    setModal(false);
  }

  const handleChange= ((event, value) => setSelectedOptions(value));
  const handleSubmit = () => console.log(selectedOptions);

  return (
    <section style={{display:'flex', flexDirection:'column', justifyContent:'center', background:'#99b4b318', padding: '20px'}}>
      <Typography variant="h5" sx={{marginTop: '10px'}} gutterBottom>Primary Areas of Expertise</Typography>
      <Autocomplete
        multiple
        id="tags-standard"
        options={skillsObj}
        onChange={handleChange}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Highest proficiency level"
          />
        )}
      />
      <Box sx={{display: 'flex', flexDirection:'row', justifyContent:'flex-end', marginTop: '20px'}}>
        <Button onClick={() => setModal(false)}>Cancel</Button>
        <Button 
          onClick={saveSkill} 
          sx={{
          background:'#22948f', 
          color:'white',
          '&:hover':{
              background:'linear-gradient(130deg, rgba(71,190,185,1) 20%, rgba(34,148,143,1) 100%);',
          }
         }}>Save</Button>
      </Box>
    </section>
  )
}

export default SkillsForm;


const skillsObj = [
    'HTML', 
    'CSS', 
    'SCSS', 
    'Docker', 
    'Git', 
    'Git Workflow', 
    'Typescript', 
    'Python',
    'Webpack', 
    'Firebase', 
    'React',
    'Angular',
    'OAuth', 
    'React Native',
    'Authentication', 
    'SCRUM Master', 
    'SQL', 
    'Express', 
    'Node.js', 
    'React', 
    'Vue',
    'Svelte',
    'User Experience', 
    'User Interface Design', 
    'Kafka', 
    'Mongoose',
    'MongoDB',
    'PostgreSQL',
    'Redis',
    'Prometheus', 
    'Redux', 
    'Javascript', 
    'JQuery', 
    'JSON',
    'GraphQL', 
    'Deno',
    'Databases', 
    'System Design',
    'AWS',
    'AWS Lambda',
    'Test Driven Development (TDD)',
    'Project Management',
    'WordPress',
    'Object Oriented Programming'
];