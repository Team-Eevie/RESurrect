import * as React from 'react';
import { Button, TextField, Typography, Box, FormControl, InputLabel, Select, Checkbox, FormControlLabel } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
let serverUrl = 'http://localhost:3000'

const OSPForm = (props) => {
  // const [experiences, setExperiences] = React.useState<Array>([])
  const {osp, setOSP, setOSPModal} = props;

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const positionRef = React.useRef<null | string>('');
  const companyRef = React.useRef<null | string>('');
  const locationRef = React.useRef<null | string>('');
  const navigate = useNavigate();

  const saveExperience = () => {
    const body = {
      position: positionRef,
      company: companyRef,
      location: locationRef,
    }
    axios.post('/saveExperience', body);
    setOSPModal(false);
  }
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


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
        <Typography variant="h4" sx={{fontFamily:'Lato'}} gutterBottom>Add Experience</Typography>
        <div>
            <TextField 
                label="Position" 
                className="input-field"
                inputRef={positionRef}
            ></TextField>
            <TextField 
                label="Company" 
                className="input-field"
                inputRef={companyRef}
            ></TextField>
            <TextField 
                label="Location" 
                className="input-field"
                inputRef={locationRef}
            ></TextField>
             <FormControl variant="filled" sx={{width:'200px'}}>
                <InputLabel htmlFor="filled-age-native-simple">Start Month</InputLabel>
                  <Select
                    native
                    inputProps={{
                        start_month: 'start_month',
                        id: 'filled-age-native-simple',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={'January'}>January</option>
                    <option value={'February'}>February</option>
                    <option value={'March'}>March</option>
                    <option value={'April'}>April</option>
                    <option value={'May'}>May</option>
                    <option value={'June'}>June</option>
                    <option value={'July'}>July</option>
                    <option value={'August'}>August</option>
                    <option value={'September'}>September</option>
                    <option value={'October'}>October</option>
                    <option value={'November'}>November</option>
                    <option value={'December'}>December</option>
                  </Select>
              </FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Primary"
              />
             <FormControl variant="filled" sx={{width:'200px'}}>
                <InputLabel htmlFor="filled-age-native-simple">Start Year</InputLabel>
                  <Select
                    native
                    inputProps={{
                        start_year: 'start_year',
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
              <FormControl variant="filled" sx={{width:'200px'}}>
                <InputLabel htmlFor="filled-age-native-simple">End Month</InputLabel>
                  <Select
                    native
                    inputProps={{
                        end_month: 'end_month',
                        id: 'filled-age-native-simple',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={'January'}>January</option>
                    <option value={'February'}>February</option>
                    <option value={'March'}>March</option>
                    <option value={'April'}>April</option>
                    <option value={'May'}>May</option>
                    <option value={'June'}>June</option>
                    <option value={'July'}>July</option>
                    <option value={'August'}>August</option>
                    <option value={'September'}>September</option>
                    <option value={'October'}>October</option>
                    <option value={'November'}>November</option>
                    <option value={'December'}>December</option>
                  </Select>
              </FormControl>
              <FormControl variant="filled" sx={{width:'200px'}}>
                <InputLabel>End Year</InputLabel>
                  <Select
                    native
                    inputProps={{
                        end_year: 'end_year',
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
        <Box sx={{display: 'flex', flexDirection:'row', justifyContent:'flex-end', marginTop: '20px'}}>
            <Button onClick={() => setOSPModal(false)}>Cancel</Button>
            <Button 
                onClick={saveExperience} 
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
    //     </Modal>
    // </>
  )
}

export default OSPForm