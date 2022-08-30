import * as React from 'react';
import { Button, TextField, Typography, Modal, Dialog} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
let serverUrl = 'http://localhost:3000'

const ExperienceForm = (props) => {
  // const [experiences, setExperiences] = React.useState<Array>([]);
  const {setWorkExperienceModal} = props;
  const positionRef = React.useRef<null | string>('');
  const companyRef = React.useRef<null | string>('');
  const navigate = useNavigate();

  const saveExperience = () => {
    const body = {
      position: positionRef,
      company: companyRef
    }
    axios.post('/saveExperience', body);
    setWorkExperienceModal(false);
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
        <section style={{display:'flex', flexDirection:'column', border: '1px solid black'}}>
        <header>
            <h2>Add Experience</h2>
        </header>
        <h3>Enter Experience Information</h3>
        <div>
        <TextField 
            size ="small"
            label="position" 
            className="input-field"
            inputRef={positionRef}
        ></TextField>
                <TextField 
            size ="small"
            label="company" 
            className="input-field"
            inputRef={companyRef}
        ></TextField>
                <div>
                <button type="button" onClick={() => setWorkExperienceModal(false)}>
                Cancel
                </button>
            <button onClick={saveExperience}>Save</button>
            </div>
        </div>
        </section>
    //     </Modal>
    // </>
  )
}

export default ExperienceForm