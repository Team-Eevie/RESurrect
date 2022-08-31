import * as React from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Modal } from '@mui/material'
import OSBlock from './OSBlock';
import { OpenSource } from '../types';
let serverUrl = 'http://localhost:3000'

const OpenSource = (props) => {
  const { osp } = props;
  // const [opensource, setOpensource] = React.useState<OpenSource[] | []>([]);


  
  // React.useEffect(() => {
  //   async function getOpenSource () {
  //     let data = await axios.get(`${serverUrl}/geteducation`)
  //     // E(data.experience);
  //   }
    
  //   // geteducation();
  //   setOpensource([{position:'experience1', company: 'company1'},
  //    {position:'experience2', company: 'company2'}, 
  //    {position:'experience3', company: 'company3'}])
    
  // },[])



  // for (let i = 0; i < osp.length; i++) {
  //   const osBlockProps = {
  //     key : `${osp[i]}${i}`,
  //     id : i,
  //     osp: osp[i]
  //   }
  //   osArray.push(<OSBlock {...osBlockProps}/>)
  // }
  let ospArray : JSX.Element[] = [];
  const ospIDs: number[] = [];
  for (let i = 0; i < osp.length; i++) {
    if (osp[i].experience_id === null || !ospIDs.includes(osp[i].experience_id)) {
      const ospBlockProps = {
        key : `${osp[i]}${i}`,
        id : i,
        osp: osp[i]
      }
      ospArray.push(<OSBlock {...ospBlockProps}/>);
      ospIDs.push(osp[i].experience_id);
    }
  }
  
  

  return (
    <>
      <div className="resume-section"> 
        {ospArray}
      </div>
    </>

  )
}

export default OpenSource