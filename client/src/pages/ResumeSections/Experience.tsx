import * as React from 'react';
import axios from 'axios';
let serverUrl = 'http://localhost:3000'

const Experience = () => {
  // const [experiences, setExperiences] = React.useState<Array>([]);

  React.useEffect(() => {
    async function getExperiences () {
      let data = await axios.get(`${serverUrl}/getExperiences`)
      // setExperiences(data.experience);
    }

    getExperiences();
  },[])

  return (
    <div>
      <h2>Experiences</h2>


    </div>
  )
}

export default Experience