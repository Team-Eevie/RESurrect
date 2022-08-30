import * as React from 'react';
import { Button, TextField, Typography, Box, FormControl, InputLabel, Select} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
let serverUrl = 'http://localhost:3000'

const EducationForm = (props) => {
  // const [experiences, setExperiences] = React.useState<Array>([]);
  const {setModal} = props;
  const degreeRef = React.useRef<null | string>('');
  const universityRef = React.useRef<null | string>('');
  const navigate = useNavigate();

  const saveEducation = () => {
    const body = {
      degree: degreeRef,
      university: universityRef
    }
    axios.post('/saveEducation', body);
    setModal(false);
  }
  


  return (
    // <>
    //     <Modal
    //      sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         justifyContent: "center",
    //         alignItems: "center",
    //       }}
    //       // open={open}
    //       aria-labelledby="modal-modal-title"
    //       aria-describedby="modal-modal-description"
    //     >
        <section style={{display:'flex', flexDirection:'column', justifyContent:'center', background:'#99b4b318', padding: '20px'}}>
        <Typography variant="h4" sx={{fontFamily:'Lato'}} gutterBottom>Add Education</Typography>
        <Typography variant="subtitle2" sx={{fontSize:'14px', fontWeight:'bold'}}>Enter "self taught" if you have no formal education.</Typography>
        <div>
            <Box sx={{display:'flex', flexDirection:'row', marginTop: '20px'}}>
              <TextField 
                label="University / College" 
                className="input-field"
                sx={{width:'500px', marginRight:'20px', marginBottom:'20px'}}
                inputRef={universityRef}
              ></TextField>
              <FormControl variant="filled" sx={{width:'200px'}}>
                <InputLabel htmlFor="filled-age-native-simple">Graduation Year</InputLabel>
                  <Select
                    native
                    inputProps={{
                        graduation_year: 'graduation_year',
                        id: 'filled-age-native-simple',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={2022}>2022</option>
                    <option value={2021}>2021</option>
                    <option value={2020}>2020</option>
                    <option value={2019}>2019</option>
                    <option value={2018}>2018</option>
                    <option value={2017}>2017</option>
                    <option value={2016}>2016</option>
                    <option value={2015}>2015</option>
                    <option value={2014}>2014</option>
                    <option value={2013}>2013</option>
                    <option value={2012}>2012</option>
                    <option value={2011}>2011</option>
                    <option value={2010}>2010</option>
                  </Select>
              </FormControl>
            </Box>
            <Box>
              <TextField 
                label="Degree and Major" 
                className="input-field"
                sx={{width:'720px'}}
                inputRef={degreeRef}
              ></TextField>
            </Box>
        <Box sx={{display: 'flex', flexDirection:'row', justifyContent:'flex-end', marginTop: '20px'}}>
            <Button onClick={() => setModal(false)}>Cancel</Button>
            <Button 
                onClick={saveEducation} 
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

export default EducationForm;