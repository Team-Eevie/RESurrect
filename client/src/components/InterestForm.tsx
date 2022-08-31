import * as React from 'react';
import { Button, TextField, Typography, Box, FormControl, InputLabel, Select} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
let serverUrl = 'http://localhost:3000'

const InterestForm = (props) => {
  // const [experiences, setExperiences] = React.useState<Array>([]);
  const { skills, setSkills, setModal, user_id } = props;
  const interestRef = React.useRef<null | HTMLInputElement>();

  const saveInterest = async () => {
    const body = {
      user_id: user_id,
      entry: interestRef.current?.value,
      hide: true
    }
    const data = await axios.post('/resume/saveSkill', body);
    setSkills([...skills, data.data.rows[0]])
    setModal(false);
  }

  return (
      <section style={{display:'flex', flexDirection:'column', justifyContent:'center', background:'#99b4b318', padding: '20px'}}>
        <Typography variant="h4" sx={{fontFamily:'Lato'}} gutterBottom>Add Interest</Typography>
        <div>
          <TextField 
                label="Add your fun facts here" 
                className="input-field"
                sx={{width:'500px', marginTop:'20px'}}
                inputRef={interestRef}
          ></TextField>
          <Box sx={{display: 'flex', flexDirection:'row', justifyContent:'flex-end', marginTop: '20px'}}>
            <Button onClick={() => setModal(false)}>Cancel</Button>
            <Button 
                onClick={saveInterest} 
                sx={{
                background:'#22948f', 
                color:'white',
                '&:hover':{
                    background:'linear-gradient(130deg, rgba(71,190,185,1) 20%, rgba(34,148,143,1) 100%);',
                }
                }}>Save</Button>
          </Box>
        </div>
      </section>
  )
}

export default InterestForm;